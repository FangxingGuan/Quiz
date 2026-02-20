interface OptionButtonProps {
  text: string
  selected: boolean
  onClick: () => void
  theme?: string
  /** Feedback state for correct/incorrect quizzes */
  feedback?: 'correct' | 'incorrect' | 'revealed' | null
  disabled?: boolean
}

const themeBorders: Record<string, string> = {
  mbti: 'border-mbti bg-mbti-light',
  news: 'border-news bg-news-light',
  love: 'border-love bg-love-light',
  tags: 'border-tags bg-tags-light',
  movie: 'border-movie bg-movie-light',
  horoscope: 'border-horoscope bg-horoscope-light',
  stress: 'border-stress bg-stress-light',
  trending: 'border-trending bg-trending-light',
  weekend: 'border-weekend bg-weekend-light',
  celebrity: 'border-celebrity bg-celebrity-light',
  bigfive: 'border-bigfive bg-bigfive-light',
  decision: 'border-decision bg-decision-light',
  confidence: 'border-confidence bg-confidence-light',
  book: 'border-book bg-book-light',
  music: 'border-music bg-music-light',
  brain: 'border-brain bg-brain-light',
  friend: 'border-friend bg-friend-light',
  social: 'border-social bg-social-light',
  eq: 'border-eq bg-eq-light',
  travel: 'border-travel bg-travel-light',
  career: 'border-career bg-career-light',
  foodie: 'border-foodie bg-foodie-light',
  sleep: 'border-sleep bg-sleep-light',
  creative: 'border-creative bg-creative-light',
  comm: 'border-comm bg-comm-light',
  animal: 'border-animal bg-animal-light',
}

export default function OptionButton({ text, selected, onClick, theme = 'mbti', feedback, disabled }: OptionButtonProps) {
  const activeStyle = themeBorders[theme] ?? themeBorders.mbti

  let style: string
  if (feedback === 'correct') {
    style = 'border-green-500 bg-green-50 font-semibold'
  } else if (feedback === 'incorrect') {
    style = 'border-red-400 bg-red-50 font-semibold'
  } else if (feedback === 'revealed') {
    style = 'border-green-500 bg-green-50'
  } else if (selected) {
    style = `${activeStyle} font-semibold`
  } else {
    style = 'border-slate-200 bg-white hover:border-slate-300'
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`w-full min-h-[48px] px-5 py-3 rounded-xl border-2 text-left text-base transition-all cursor-pointer disabled:cursor-default ${style}`}
    >
      <span className="flex items-center justify-between">
        <span>{text}</span>
        {feedback === 'correct' && <span className="text-green-600 text-lg ml-2">&#10003;</span>}
        {feedback === 'incorrect' && <span className="text-red-500 text-lg ml-2">&#10007;</span>}
        {feedback === 'revealed' && <span className="text-green-600 text-sm ml-2">Answer</span>}
      </span>
    </button>
  )
}
