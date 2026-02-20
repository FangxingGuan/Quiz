import { useParams, Navigate, Link } from 'react-router-dom'
import { useState } from 'react'
import { getQuizById } from '../data'
import { getRecordByQuizId } from '../utils/storage'
import { determineResult, getRecommendedNews, getTopTags } from '../engine/scoring'
import NewsCard from '../components/NewsCard'
import TagCloud from '../components/TagCloud'
import ShareCard from '../components/ShareCard'
import RadarBar from '../components/RadarBar'

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

export default function ResultPage() {
  const { quizId } = useParams<{ quizId: string }>()
  const [showShare, setShowShare] = useState(false)

  const quiz = getQuizById(quizId ?? '')
  const record = getRecordByQuizId(quizId ?? '')

  if (!quiz || !record) return <Navigate to="/" replace />

  const result = determineResult(quiz, record.tagScores)
  if (!result) return <Navigate to="/" replace />

  const recommendedNews = getRecommendedNews(result.news_tags)
  const topTags = quiz.id === 'content-tags' ? getTopTags(record.tagScores, 5) : []

  return (
    <div className="p-4 pb-8">
      {/* Result hero */}
      <div className={`${themeBg[quiz.theme]} rounded-3xl p-8 text-center mb-6`} id="share-target">
        <div className="text-6xl mb-3">{result.emoji}</div>
        <h1 className="text-2xl font-bold text-slate-800 mb-3">{result.title}</h1>
        <p className="text-slate-600 leading-relaxed">{result.description}</p>

        {/* Big Five radar bar */}
        {quiz.id === 'bigfive' && (
          <RadarBar
            scores={record.tagScores}
            labels={{
              openness: 'Openness',
              conscientiousness: 'Conscientiousness',
              extraversion: 'Extraversion',
              agreeableness: 'Agreeableness',
              neuroticism: 'Neuroticism',
            }}
            maxScore={10}
            color="bg-bigfive"
          />
        )}

        {/* EQ gauge */}
        {quiz.id === 'eq-test' && (
          <div className="mt-4 text-4xl">
            {result.trigger === 'developing' && '🌱'}
            {result.trigger === 'balanced' && <span className="text-5xl">🧭</span>}
            {result.trigger === 'master' && <span className="text-6xl">🧘</span>}
          </div>
        )}

        {/* Confidence index gauge */}
        {quiz.id === 'confidence-index' && (
          <div className="mt-4 text-4xl">
            {result.trigger === 'low' && '😟'}
            {result.trigger === 'medium' && <span className="text-5xl">😊</span>}
            {result.trigger === 'high' && <span className="text-6xl">🦸</span>}
          </div>
        )}

        {/* Brain games score */}
        {quiz.id === 'brain-games' && (
          <div className="mt-3">
            <span className="inline-block bg-brain text-white text-sm font-bold px-4 py-1.5 rounded-full">
              {record.tagScores['correct'] ?? 0}/8 correct
            </span>
          </div>
        )}

        {/* Stress index gauge */}
        {quiz.id === 'stress-index' && (
          <div className="mt-4 text-4xl">
            {result.trigger === 'low' && '😌'}
            {result.trigger === 'medium' && <span className="text-5xl">😐</span>}
            {result.trigger === 'high' && <span className="text-6xl">😰</span>}
          </div>
        )}

        {/* Trending topics radar bar */}
        {quiz.id === 'trending-topics' && (
          <RadarBar
            scores={record.tagScores}
            labels={{
              ai_tech: 'AI & Tech',
              climate: 'Climate',
              pop_culture: 'Pop Culture',
              economy: 'Economy',
              health_wellness: 'Health & Wellness',
            }}
            maxScore={3}
          />
        )}

        {/* Celebrity match percentage */}
        {quiz.id === 'celebrity-match' && (
          <div className="mt-3">
            <span className="inline-block bg-celebrity text-white text-sm font-bold px-4 py-1.5 rounded-full">
              {Math.round(70 + ((record.tagScores[result.trigger_tag ?? ''] ?? 0) / 20) * 30)}% match
            </span>
          </div>
        )}

        {/* Tag cloud for content-tags quiz */}
        {quiz.id === 'content-tags' && topTags.length > 0 && (
          <div className="mt-5">
            <TagCloud tags={topTags} />
          </div>
        )}

        {/* Tags for other quizzes */}
        {result.tags.length > 0 && quiz.id !== 'content-tags' && quiz.id !== 'trending-topics' && (
          <div className="flex flex-wrap gap-2 justify-center mt-4">
            {result.tags.map(tag => (
              <span key={tag} className="bg-white/60 text-slate-600 text-xs px-3 py-1 rounded-full">
                #{tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Share button */}
      <button
        onClick={() => setShowShare(true)}
        className={`w-full ${themeBtn[quiz.theme]} text-white font-semibold py-4 rounded-2xl mb-6 transition-colors cursor-pointer border-0 text-base`}
      >
        Share My Result
      </button>

      {/* Recommended news */}
      {recommendedNews.length > 0 && (
        <div className="mb-6">
          <h3 className="text-lg font-bold text-slate-800 mb-3">
            {quiz.id === 'news-preference' ? 'Your Personalized Feed' : 'Recommended For You'}
          </h3>
          <div className="grid gap-3">
            {recommendedNews.map(article => (
              <NewsCard key={article.id} article={article} />
            ))}
          </div>
        </div>
      )}

      {/* Actions */}
      <div className="grid gap-3 mt-4">
        <Link
          to={`/quiz/${quiz.id}/play`}
          className="block text-center py-3 rounded-xl border-2 border-slate-200 text-slate-600 font-semibold no-underline hover:border-slate-300 transition-colors"
        >
          Retake Quiz
        </Link>
        <Link
          to="/"
          className="block text-center py-3 text-slate-500 no-underline hover:text-slate-700"
        >
          Back to All Quizzes
        </Link>
      </div>

      {/* Share modal */}
      {showShare && (
        <ShareCard
          quiz={quiz}
          result={result}
          onClose={() => setShowShare(false)}
        />
      )}
    </div>
  )
}
