import { useParams, useNavigate, Navigate } from 'react-router-dom'
import { getQuizById } from '../data'

const themeBtnColors: Record<string, string> = {
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
}

const themeBgColors: Record<string, string> = {
  mbti: 'bg-mbti-light',
  news: 'bg-news-light',
  love: 'bg-love-light',
  tags: 'bg-tags-light',
  movie: 'bg-movie-light',
  horoscope: 'bg-horoscope-light',
  stress: 'bg-stress-light',
  trending: 'bg-trending-light',
  weekend: 'bg-weekend-light',
  celebrity: 'bg-celebrity-light',
  bigfive: 'bg-bigfive-light',
  decision: 'bg-decision-light',
  confidence: 'bg-confidence-light',
  book: 'bg-book-light',
  music: 'bg-music-light',
  brain: 'bg-brain-light',
}

export default function QuizIntroPage() {
  const { quizId } = useParams<{ quizId: string }>()
  const navigate = useNavigate()
  const quiz = getQuizById(quizId ?? '')

  if (!quiz) return <Navigate to="/" replace />

  const btnColor = themeBtnColors[quiz.theme] ?? themeBtnColors.mbti
  const bgColor = themeBgColors[quiz.theme] ?? themeBgColors.mbti

  return (
    <div className="p-4 pb-8">
      <div className={`${bgColor} rounded-3xl p-8 text-center mb-6`}>
        <div className="text-7xl mb-4">{quiz.emoji}</div>
        <h1 className="text-2xl font-bold text-slate-800 mb-2">{quiz.title}</h1>
        <p className="text-slate-600">{quiz.subtitle}</p>
      </div>

      <div className="bg-white rounded-2xl p-6 shadow-sm mb-6">
        <p className="text-slate-700 leading-relaxed">{quiz.description}</p>
        <div className="flex items-center gap-4 mt-4 text-sm text-slate-500">
          <span className="flex items-center gap-1">📝 {quiz.questionCount} questions</span>
          <span className="flex items-center gap-1">⏱️ {quiz.duration}</span>
        </div>
      </div>

      <button
        onClick={() => navigate(`/quiz/${quiz.id}/play`)}
        className={`w-full ${btnColor} text-white font-semibold text-lg py-4 rounded-2xl transition-colors cursor-pointer border-0`}
      >
        Start Quiz
      </button>
    </div>
  )
}
