import { useRef, useState } from 'react'
import type { Quiz, QuizResult } from '../types'
import { captureElement, shareImage, downloadImage } from '../utils/share'

interface ShareCardProps {
  quiz: Quiz
  result: QuizResult
  onClose: () => void
}

const themeBg: Record<string, string> = {
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
  friend: 'bg-friend-light',
  social: 'bg-social-light',
  eq: 'bg-eq-light',
  travel: 'bg-travel-light',
  career: 'bg-career-light',
  foodie: 'bg-foodie-light',
  sleep: 'bg-sleep-light',
  creative: 'bg-creative-light',
  comm: 'bg-comm-light',
  animal: 'bg-animal-light',
}

const themeBtn: Record<string, string> = {
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

export default function ShareCard({ quiz, result, onClose }: ShareCardProps) {
  const posterRef = useRef<HTMLDivElement>(null)
  const [loading, setLoading] = useState(false)

  const handleShare = async () => {
    if (!posterRef.current) return
    setLoading(true)
    try {
      const blob = await captureElement(posterRef.current)
      const shared = await shareImage(blob, result.title)
      if (!shared) {
        downloadImage(blob)
      }
    } catch (err) {
      console.error('Share failed:', err)
    } finally {
      setLoading(false)
    }
  }

  const handleDownload = async () => {
    if (!posterRef.current) return
    setLoading(true)
    try {
      const blob = await captureElement(posterRef.current)
      downloadImage(blob)
    } catch (err) {
      console.error('Download failed:', err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4" onClick={onClose}>
      <div className="bg-white rounded-2xl max-w-sm w-full max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
        {/* Poster content to be captured */}
        <div ref={posterRef} className={`${themeBg[quiz.theme]} p-6 rounded-t-2xl`}>
          <div className="text-center">
            <p className="text-xs text-slate-500 mb-3 font-semibold tracking-wide uppercase">NewsBreak Quiz</p>
            <div className="text-5xl mb-3">{result.emoji}</div>
            <h2 className="text-xl font-bold text-slate-800 mb-2">{result.title}</h2>
            <p className="text-sm text-slate-600 leading-relaxed mb-3">{result.description}</p>
            {result.tags.length > 0 && (
              <div className="flex flex-wrap gap-1.5 justify-center">
                {result.tags.map(tag => (
                  <span key={tag} className="bg-white/60 text-slate-600 text-xs px-2.5 py-1 rounded-full">
                    #{tag}
                  </span>
                ))}
              </div>
            )}
            <p className="text-xs text-slate-400 mt-4">Scan to take this quiz yourself!</p>
          </div>
        </div>

        {/* Action buttons */}
        <div className="p-4 grid gap-3">
          <button
            onClick={handleShare}
            disabled={loading}
            className={`w-full py-3 rounded-xl text-white font-semibold ${themeBtn[quiz.theme]} transition-colors cursor-pointer border-0 disabled:opacity-50`}
          >
            {loading ? 'Generating...' : 'Share'}
          </button>
          <button
            onClick={handleDownload}
            disabled={loading}
            className="w-full py-3 rounded-xl border-2 border-slate-200 text-slate-600 font-semibold cursor-pointer bg-white hover:border-slate-300 transition-colors disabled:opacity-50"
          >
            {loading ? 'Generating...' : 'Save Image'}
          </button>
          <button
            onClick={onClose}
            className="w-full py-2 text-slate-400 cursor-pointer bg-transparent border-0 hover:text-slate-600"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}
