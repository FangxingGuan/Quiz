import { useParams, Navigate, useNavigate } from 'react-router-dom'
import { useState, useEffect, useCallback, useMemo } from 'react'
import { getQuizById } from '../data'
import { useQuiz } from '../hooks/useQuiz'
import ProgressBar from '../components/ProgressBar'
import OptionButton from '../components/OptionButton'
import { computeTagScores, determineResult } from '../engine/scoring'
import { saveRecord } from '../utils/storage'

const progressColors: Record<string, string> = {
  mbti: 'bg-mbti',
  news: 'bg-news',
  love: 'bg-love',
  tags: 'bg-tags',
  movie: 'bg-movie',
  horoscope: 'bg-horoscope',
  stress: 'bg-stress',
  trending: 'bg-trending',
  weekend: 'bg-weekend',
  celebrity: 'bg-celebrity',
  bigfive: 'bg-bigfive',
  decision: 'bg-decision',
  confidence: 'bg-confidence',
  book: 'bg-book',
  music: 'bg-music',
  brain: 'bg-brain',
  friend: 'bg-friend',
  social: 'bg-social',
  eq: 'bg-eq',
  travel: 'bg-travel',
  career: 'bg-career',
  foodie: 'bg-foodie',
  sleep: 'bg-sleep',
  creative: 'bg-creative',
  comm: 'bg-comm',
  animal: 'bg-animal',
}

const multiSubmitColors: Record<string, string> = {
  mbti: 'bg-mbti hover:bg-mbti-dark',
  news: 'bg-news hover:bg-news-dark',
  love: 'bg-love hover:bg-love-dark',
  tags: 'bg-tags hover:bg-tags-dark',
  movie: 'bg-movie hover:bg-movie-dark',
  horoscope: 'bg-horoscope hover:bg-horoscope-dark',
  stress: 'bg-stress hover:bg-stress-dark',
  trending: 'bg-trending hover:bg-trending-dark',
  weekend: 'bg-weekend hover:bg-weekend-dark',
  celebrity: 'bg-celebrity hover:bg-celebrity-dark',
  bigfive: 'bg-bigfive hover:bg-bigfive-dark',
  decision: 'bg-decision hover:bg-decision-dark',
  confidence: 'bg-confidence hover:bg-confidence-dark',
  book: 'bg-book hover:bg-book-dark',
  music: 'bg-music hover:bg-music-dark',
  brain: 'bg-brain hover:bg-brain-dark',
  friend: 'bg-friend hover:bg-friend-dark',
  social: 'bg-social hover:bg-social-dark',
  eq: 'bg-eq hover:bg-eq-dark',
  travel: 'bg-travel hover:bg-travel-dark',
  career: 'bg-career hover:bg-career-dark',
  foodie: 'bg-foodie hover:bg-foodie-dark',
  sleep: 'bg-sleep hover:bg-sleep-dark',
  creative: 'bg-creative hover:bg-creative-dark',
  comm: 'bg-comm hover:bg-comm-dark',
  animal: 'bg-animal hover:bg-animal-dark',
}

/** Check if a quiz has correct/incorrect answers */
function quizHasCorrectAnswers(quiz: NonNullable<ReturnType<typeof getQuizById>>): boolean {
  return quiz.questions.some(q =>
    q.options.some(o => 'correct' in o.tag_weights)
  )
}

/** Find the correct option id for a question (if any) */
function getCorrectOptionId(question: NonNullable<ReturnType<typeof getQuizById>>['questions'][0]): string | null {
  const correct = question.options.find(o => 'correct' in o.tag_weights)
  return correct?.id ?? null
}

export default function QuestionPage() {
  const { quizId } = useParams<{ quizId: string }>()
  const navigate = useNavigate()
  const quiz = getQuizById(quizId ?? '')

  if (!quiz) return <Navigate to="/" replace />

  return <QuestionPageInner quiz={quiz} navigate={navigate} />
}

function QuestionPageInner({ quiz, navigate }: { quiz: NonNullable<ReturnType<typeof getQuizById>>; navigate: ReturnType<typeof useNavigate> }) {
  const { currentQuestion, currentIndex, progress, answerQuestion, isLastQuestion, totalQuestions, answers } = useQuiz(quiz)
  const [selectedIds, setSelectedIds] = useState<string[]>([])
  const [animating, setAnimating] = useState(false)
  const [showingFeedback, setShowingFeedback] = useState(false)

  const hasCorrect = useMemo(() => quizHasCorrectAnswers(quiz), [quiz])

  // Reset selection when question changes
  useEffect(() => {
    setSelectedIds([])
    setShowingFeedback(false)
    setAnimating(true)
    const timer = setTimeout(() => setAnimating(false), 50)
    return () => clearTimeout(timer)
  }, [currentIndex])

  const handleFinish = useCallback((finalAnswers: typeof answers, lastQuestionId: string, lastOptionIds: string[]) => {
    const allAnswers = [...finalAnswers]
    const existingIdx = allAnswers.findIndex(a => a.questionId === lastQuestionId)
    const lastAnswer = { questionId: lastQuestionId, selectedOptionIds: lastOptionIds }
    if (existingIdx >= 0) {
      allAnswers[existingIdx] = lastAnswer
    } else {
      allAnswers.push(lastAnswer)
    }

    const scores = computeTagScores(quiz, allAnswers)
    const result = determineResult(quiz, scores)
    if (result) {
      saveRecord({
        quizId: quiz.id,
        answers: allAnswers,
        resultId: result.id,
        tagScores: scores,
        completedAt: new Date().toISOString(),
        shared: false,
      })
    }
    navigate(`/quiz/${quiz.id}/result`, { replace: true })
  }, [quiz, navigate])

  const handleOptionClick = (optionId: string) => {
    if (!currentQuestion || showingFeedback) return

    if (currentQuestion.type === 'single') {
      setSelectedIds([optionId])

      if (hasCorrect) {
        // Show correct/incorrect feedback, then advance after delay
        setShowingFeedback(true)
        setTimeout(() => {
          if (isLastQuestion) {
            handleFinish(answers, currentQuestion.id, [optionId])
          } else {
            answerQuestion(currentQuestion.id, [optionId])
          }
        }, 1500)
      } else {
        // Normal: auto-advance after brief visual delay
        setTimeout(() => {
          if (isLastQuestion) {
            handleFinish(answers, currentQuestion.id, [optionId])
          } else {
            answerQuestion(currentQuestion.id, [optionId])
          }
        }, 300)
      }
    } else {
      // Multi-select: toggle
      setSelectedIds(prev =>
        prev.includes(optionId)
          ? prev.filter(id => id !== optionId)
          : [...prev, optionId]
      )
    }
  }

  const handleMultiSubmit = () => {
    if (!currentQuestion || selectedIds.length === 0) return
    if (isLastQuestion) {
      handleFinish(answers, currentQuestion.id, selectedIds)
    } else {
      answerQuestion(currentQuestion.id, selectedIds)
    }
  }

  if (!currentQuestion) {
    return <Navigate to={`/quiz/${quiz.id}/result`} replace />
  }

  const correctId = hasCorrect ? getCorrectOptionId(currentQuestion) : null
  const selectedId = selectedIds[0] ?? null
  const isCorrectAnswer = showingFeedback && selectedId === correctId

  return (
    <div className="p-4 pb-8">
      <ProgressBar
        progress={progress}
        current={currentIndex}
        total={totalQuestions}
        color={progressColors[quiz.theme]}
      />

      <div
        className={`transition-all duration-300 ${animating ? 'opacity-0 translate-x-5' : 'opacity-100 translate-x-0'}`}
      >
        <h2 className="text-xl font-bold text-slate-800 mb-6 leading-snug">
          {currentQuestion.text}
        </h2>

        {/* Feedback banner */}
        {showingFeedback && (
          <div className={`mb-4 px-4 py-2 rounded-xl text-sm font-semibold text-center ${isCorrectAnswer ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-600'}`}>
            {isCorrectAnswer ? 'Correct!' : 'Incorrect!'}
          </div>
        )}

        <div className="grid gap-3">
          {currentQuestion.options.map(option => {
            let feedback: 'correct' | 'incorrect' | 'revealed' | null = null
            if (showingFeedback) {
              if (option.id === selectedId && option.id === correctId) {
                feedback = 'correct'
              } else if (option.id === selectedId && option.id !== correctId) {
                feedback = 'incorrect'
              } else if (option.id === correctId) {
                feedback = 'revealed'
              }
            }
            return (
              <OptionButton
                key={option.id}
                text={option.text}
                selected={!showingFeedback && selectedIds.includes(option.id)}
                onClick={() => handleOptionClick(option.id)}
                theme={quiz.theme}
                feedback={feedback}
                disabled={showingFeedback}
              />
            )
          })}
        </div>

        {currentQuestion.type === 'multi' && (
          <button
            onClick={handleMultiSubmit}
            disabled={selectedIds.length === 0}
            className={`w-full mt-6 py-4 rounded-2xl font-semibold text-white transition-colors border-0 cursor-pointer
              ${selectedIds.length > 0
                ? multiSubmitColors[quiz.theme]
                : 'bg-slate-300 cursor-not-allowed'
              }`}
          >
            {isLastQuestion ? 'See Results' : 'Next'}
          </button>
        )}
      </div>
    </div>
  )
}
