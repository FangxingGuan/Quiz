import { useReducer, useCallback } from 'react'
import type { Quiz, UserAnswer, QuizResult } from '../types'
import { computeTagScores, determineResult } from '../engine/scoring'
import { saveRecord } from '../utils/storage'

interface QuizState {
  currentIndex: number
  answers: UserAnswer[]
  result: QuizResult | null
  tagScores: Record<string, number>
  finished: boolean
}

type QuizAction =
  | { type: 'ANSWER'; questionId: string; optionIds: string[] }
  | { type: 'FINISH'; quiz: Quiz }

function reducer(state: QuizState, action: QuizAction): QuizState {
  switch (action.type) {
    case 'ANSWER': {
      const existing = state.answers.findIndex(a => a.questionId === action.questionId)
      const answers = [...state.answers]
      const answer: UserAnswer = { questionId: action.questionId, selectedOptionIds: action.optionIds }
      if (existing >= 0) {
        answers[existing] = answer
      } else {
        answers.push(answer)
      }
      return { ...state, answers, currentIndex: state.currentIndex + 1 }
    }
    case 'FINISH': {
      const scores = computeTagScores(action.quiz, state.answers)
      const result = determineResult(action.quiz, scores)
      return { ...state, tagScores: scores, result, finished: true }
    }
    default:
      return state
  }
}

export function useQuiz(quiz: Quiz) {
  const [state, dispatch] = useReducer(reducer, {
    currentIndex: 0,
    answers: [],
    result: null,
    tagScores: {},
    finished: false,
  })

  const answerQuestion = useCallback((questionId: string, optionIds: string[]) => {
    dispatch({ type: 'ANSWER', questionId, optionIds })
  }, [])

  const finishQuiz = useCallback(() => {
    dispatch({ type: 'FINISH', quiz })

    // Save to localStorage after computing (need to compute here too since dispatch is async)
    const scores = computeTagScores(quiz, state.answers)
    const result = determineResult(quiz, scores)
    if (result) {
      saveRecord({
        quizId: quiz.id,
        answers: state.answers,
        resultId: result.id,
        tagScores: scores,
        completedAt: new Date().toISOString(),
        shared: false,
      })
    }
  }, [quiz, state.answers])

  const currentQuestion = quiz.questions[state.currentIndex] ?? null
  const isLastQuestion = state.currentIndex >= quiz.questions.length - 1
  const progress = quiz.questions.length > 0
    ? Math.min(state.currentIndex / quiz.questions.length, 1)
    : 0

  return {
    ...state,
    currentQuestion,
    isLastQuestion,
    progress,
    answerQuestion,
    finishQuiz,
    totalQuestions: quiz.questions.length,
  }
}
