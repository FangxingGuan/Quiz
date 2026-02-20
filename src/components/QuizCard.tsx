import { Link } from 'react-router-dom'
import type { Quiz } from '../types'

const themeColors: Record<string, { bg: string; border: string; text: string }> = {
  mbti: { bg: 'bg-mbti-light', border: 'border-mbti', text: 'text-mbti-dark' },
  news: { bg: 'bg-news-light', border: 'border-news', text: 'text-news-dark' },
  love: { bg: 'bg-love-light', border: 'border-love', text: 'text-love-dark' },
  tags: { bg: 'bg-tags-light', border: 'border-tags', text: 'text-tags-dark' },
  movie: { bg: 'bg-movie-light', border: 'border-movie', text: 'text-movie-dark' },
  horoscope: { bg: 'bg-horoscope-light', border: 'border-horoscope', text: 'text-horoscope-dark' },
  stress: { bg: 'bg-stress-light', border: 'border-stress', text: 'text-stress-dark' },
  trending: { bg: 'bg-trending-light', border: 'border-trending', text: 'text-trending-dark' },
  weekend: { bg: 'bg-weekend-light', border: 'border-weekend', text: 'text-weekend-dark' },
  celebrity: { bg: 'bg-celebrity-light', border: 'border-celebrity', text: 'text-celebrity-dark' },
  bigfive: { bg: 'bg-bigfive-light', border: 'border-bigfive', text: 'text-bigfive-dark' },
  decision: { bg: 'bg-decision-light', border: 'border-decision', text: 'text-decision-dark' },
  confidence: { bg: 'bg-confidence-light', border: 'border-confidence', text: 'text-confidence-dark' },
  book: { bg: 'bg-book-light', border: 'border-book', text: 'text-book-dark' },
  music: { bg: 'bg-music-light', border: 'border-music', text: 'text-music-dark' },
  brain: { bg: 'bg-brain-light', border: 'border-brain', text: 'text-brain-dark' },
}

interface QuizCardProps {
  quiz: Quiz
  completed?: boolean
}

export default function QuizCard({ quiz, completed }: QuizCardProps) {
  const colors = themeColors[quiz.theme] ?? themeColors.mbti
  return (
    <Link
      to={`/quiz/${quiz.id}`}
      className={`block rounded-2xl border-2 ${colors.border} ${colors.bg} p-4 no-underline transition-transform active:scale-[0.98] hover:shadow-md relative`}
    >
      {completed && (
        <span className="absolute top-2 right-2 bg-green-500 text-white text-[10px] font-semibold px-1.5 py-0.5 rounded-full">
          Done
        </span>
      )}
      <div className="text-3xl mb-2">{quiz.emoji}</div>
      <h3 className={`text-sm font-bold ${colors.text} mb-0.5 leading-tight`}>{quiz.title}</h3>
      <p className="text-xs text-slate-600 mb-2 leading-snug">{quiz.subtitle}</p>
      <div className="flex items-center gap-2 text-[10px] text-slate-500">
        <span>{quiz.questionCount}q</span>
        <span>{quiz.duration}</span>
      </div>
    </Link>
  )
}
