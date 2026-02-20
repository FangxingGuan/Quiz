interface OptionButtonProps {
  text: string
  selected: boolean
  onClick: () => void
  theme?: string
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
}

export default function OptionButton({ text, selected, onClick, theme = 'mbti' }: OptionButtonProps) {
  const activeStyle = themeBorders[theme] ?? themeBorders.mbti
  return (
    <button
      onClick={onClick}
      className={`w-full min-h-[48px] px-5 py-3 rounded-xl border-2 text-left text-base transition-all cursor-pointer
        ${selected
          ? `${activeStyle} font-semibold`
          : 'border-slate-200 bg-white hover:border-slate-300'
        }`}
    >
      {text}
    </button>
  )
}
