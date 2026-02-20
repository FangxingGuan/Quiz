import type { Quiz, QuizResult, UserAnswer, NewsArticle } from '../types'
import { mockNews } from '../data'

/** Sum up tag_weights across all answers */
export function computeTagScores(quiz: Quiz, answers: UserAnswer[]): Record<string, number> {
  const scores: Record<string, number> = {}

  for (const answer of answers) {
    const question = quiz.questions.find(q => q.id === answer.questionId)
    if (!question) continue

    for (const optionId of answer.selectedOptionIds) {
      const option = question.options.find(o => o.id === optionId)
      if (!option) continue

      for (const [tag, weight] of Object.entries(option.tag_weights)) {
        scores[tag] = (scores[tag] ?? 0) + weight
      }
    }
  }
  return scores
}

/** For MBTI: compare pairs E/I, S/N, T/F, J/P and build 4-letter type */
export function determineMBTI(scores: Record<string, number>): string {
  const pick = (a: string, b: string) => (scores[a] ?? 0) >= (scores[b] ?? 0) ? a : b
  return pick('E', 'I') + pick('S', 'N') + pick('T', 'F') + pick('J', 'P')
}

/** Find the tag with the highest score */
export function getHighestTag(scores: Record<string, number>): string {
  let best = ''
  let bestScore = -Infinity
  for (const [tag, score] of Object.entries(scores)) {
    if (score > bestScore) {
      best = tag
      bestScore = score
    }
  }
  return best
}

/** Get top N tags sorted by score descending */
export function getTopTags(scores: Record<string, number>, n: number): string[] {
  return Object.entries(scores)
    .sort(([, a], [, b]) => b - a)
    .slice(0, n)
    .map(([tag]) => tag)
}

/** Determine the result for a quiz given tag scores */
export function determineResult(quiz: Quiz, scores: Record<string, number>): QuizResult | null {
  if (quiz.id === 'mbti') {
    const type = determineMBTI(scores)
    return quiz.results.find(r => r.trigger === type) ?? quiz.results[0]
  }

  if (quiz.id === 'love-style') {
    const tag = getHighestTag(scores)
    return quiz.results.find(r => r.trigger_tag === tag) ?? quiz.results[0]
  }

  // For news-preference and content-tags, return a synthetic result
  if (quiz.id === 'news-preference') {
    const topTags = getTopTags(scores, 3)
    return {
      id: 'news-pref-dynamic',
      title: 'Your News Profile',
      description: `You're most interested in ${topTags.join(', ')} news. Here are articles picked just for you!`,
      emoji: '📰',
      tags: topTags,
      news_tags: topTags,
    }
  }

  if (quiz.id === 'content-tags') {
    const topTags = getTopTags(scores, 5)
    const tagLabels: Record<string, string> = {
      tech: 'Tech Geek 💻',
      food: 'Foodie Hunter 🍜',
      politics: 'Political Analyst 📢',
      sports: 'Sports Fan ⚽',
      entertainment: 'Entertainment Buff 🎬',
      fashion: 'Fashion Icon 👗',
      travel: 'Globe Trotter ✈️',
      science: 'Science Nerd 🔬',
      finance: 'Finance Guru 💰',
      gaming: 'Gamer Pro 🎮',
      fitness: 'Fitness Warrior 💪',
      photography: 'Visual Storyteller 📸',
    }
    const labels = topTags.map(t => tagLabels[t] ?? t)
    return {
      id: 'content-tags-dynamic',
      title: 'Your Content DNA',
      description: `Your top content interests are: ${labels.join(', ')}. That's a unique combination!`,
      emoji: '🧬',
      tags: topTags,
      news_tags: topTags,
    }
  }

  // P1 quizzes: tag-based matching
  if (quiz.id === 'movie-character' || quiz.id === 'horoscope' || quiz.id === 'weekend-type' || quiz.id === 'celebrity-match') {
    const tag = getHighestTag(scores)
    return quiz.results.find(r => r.trigger_tag === tag) ?? quiz.results[0]
  }

  // Stress index: sum stress score and match by threshold
  if (quiz.id === 'stress-index') {
    const stressScore = scores['stress'] ?? 0
    if (stressScore <= 9) {
      return quiz.results.find(r => r.trigger === 'low') ?? quiz.results[0]
    } else if (stressScore <= 13) {
      return quiz.results.find(r => r.trigger === 'medium') ?? quiz.results[1]
    } else {
      return quiz.results.find(r => r.trigger === 'high') ?? quiz.results[2]
    }
  }

  // Big Five: dynamic result with radar + highest dimension title
  if (quiz.id === 'bigfive') {
    const tag = getHighestTag(scores)
    return quiz.results.find(r => r.trigger_tag === tag) ?? quiz.results[0]
  }

  // Decision style: tag-based matching
  if (quiz.id === 'decision-style') {
    const tag = getHighestTag(scores)
    return quiz.results.find(r => r.trigger_tag === tag) ?? quiz.results[0]
  }

  // Confidence index: threshold-based (same pattern as stress-index)
  if (quiz.id === 'confidence-index') {
    const confScore = scores['confidence'] ?? 0
    if (confScore <= 9) {
      return quiz.results.find(r => r.trigger === 'low') ?? quiz.results[0]
    } else if (confScore <= 13) {
      return quiz.results.find(r => r.trigger === 'medium') ?? quiz.results[1]
    } else {
      return quiz.results.find(r => r.trigger === 'high') ?? quiz.results[2]
    }
  }

  // Book recommendation: tag-based matching
  if (quiz.id === 'book-recommendation') {
    const tag = getHighestTag(scores)
    return quiz.results.find(r => r.trigger_tag === tag) ?? quiz.results[0]
  }

  // Music style: tag-based matching
  if (quiz.id === 'music-style') {
    const tag = getHighestTag(scores)
    return quiz.results.find(r => r.trigger_tag === tag) ?? quiz.results[0]
  }

  // Brain games: threshold-based on correct answers
  if (quiz.id === 'brain-games') {
    const correctScore = scores['correct'] ?? 0
    if (correctScore >= 7) {
      return quiz.results.find(r => r.trigger === 'genius') ?? quiz.results[0]
    } else if (correctScore >= 5) {
      return quiz.results.find(r => r.trigger === 'sharp') ?? quiz.results[1]
    } else if (correctScore >= 3) {
      return quiz.results.find(r => r.trigger === 'developing') ?? quiz.results[2]
    } else {
      return quiz.results.find(r => r.trigger === 'beginner') ?? quiz.results[3]
    }
  }

  // Trending topics: dynamic result with topic scores
  if (quiz.id === 'trending-topics') {
    const topicLabels: Record<string, string> = {
      ai_tech: 'AI & Tech',
      climate: 'Climate',
      pop_culture: 'Pop Culture',
      economy: 'Economy',
      health_wellness: 'Health & Wellness',
    }
    const topics = Object.entries(topicLabels)
    const topTopic = topics.reduce((best, [key]) =>
      (scores[key] ?? 0) > (scores[best] ?? 0) ? key : best,
      topics[0][0]
    )
    const topLabel = topicLabels[topTopic]
    return {
      id: 'trending-dynamic',
      title: `${topLabel} Enthusiast`,
      description: `You're most tuned into ${topLabel}! Your topic radar shows a unique pattern of interests across today's trending conversations.`,
      emoji: '📈',
      tags: Object.keys(topicLabels),
      news_tags: [topTopic.replace('_', '-')],
    }
  }

  return null
}

/**
 * Tag alias map: quiz news_tags that don't exist in mock news → canonical news tags.
 * Many quiz results use descriptive tags like 'arts', 'technology', 'self-improvement'
 * while mock news articles use shorter canonical tags like 'art', 'tech', 'psychology'.
 */
const TAG_ALIASES: Record<string, string[]> = {
  arts: ['art'],
  technology: ['tech'],
  'self-improvement': ['psychology', 'health'],
  wellness: ['health'],
  productivity: ['business'],
  leadership: ['business'],
  'indie-music': ['music'],
  'hip-hop': ['music', 'entertainment'],
  'pop-music': ['music', 'entertainment'],
  'electronic-music': ['music', 'tech'],
  'folk-music': ['music', 'culture'],
  jazz: ['music', 'culture'],
  'pop-culture': ['entertainment', 'celebrity'],
  history: ['culture', 'education'],
  crime: ['politics'],
  space: ['science'],
  biography: ['books'],
  festivals: ['entertainment'],
  nature: ['environment'],
  puzzles: ['entertainment', 'education'],
  games: ['entertainment'],
  'world-news': ['politics'],
  adventure: ['travel'],
  investigation: ['science'],
  comedy: ['entertainment'],
  fitness: ['health', 'sports'],
  outdoors: ['travel', 'environment'],
  nightlife: ['entertainment', 'lifestyle'],
  design: ['art'],
  motivation: ['lifestyle'],
  family: ['community', 'lifestyle'],
  relationships: ['lifestyle'],
  mystery: ['entertainment'],
  spirituality: ['culture'],
  mindfulness: ['health', 'psychology'],
  'self-care': ['health'],
  'mental-health': ['health', 'psychology'],
}

/** Expand a set of news_tags by resolving aliases to canonical tags */
function expandTags(tags: string[]): Set<string> {
  const expanded = new Set(tags)
  for (const tag of tags) {
    const aliases = TAG_ALIASES[tag]
    if (aliases) {
      for (const alias of aliases) expanded.add(alias)
    }
  }
  return expanded
}

/** Get recommended news articles based on result tags */
export function getRecommendedNews(newsTags: string[], limit: number = 5): NewsArticle[] {
  const tagSet = expandTags(newsTags)
  const scored = mockNews.map(article => ({
    article,
    score: article.tags.filter(t => tagSet.has(t)).length,
  }))
  return scored
    .filter(s => s.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(s => s.article)
}
