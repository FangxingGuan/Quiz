import { mbtiQuiz } from './quizzes/mbti'
import { newsPreferenceQuiz } from './quizzes/news-preference'
import { loveStyleQuiz } from './quizzes/love-style'
import { contentTagsQuiz } from './quizzes/content-tags'
import { movieCharacterQuiz } from './quizzes/movie-character'
import { horoscopeQuiz } from './quizzes/horoscope'
import { stressIndexQuiz } from './quizzes/stress-index'
import { trendingTopicsQuiz } from './quizzes/trending-topics'
import { weekendTypeQuiz } from './quizzes/weekend-type'
import { celebrityMatchQuiz } from './quizzes/celebrity-match'
import { bigfiveQuiz } from './quizzes/bigfive'
import { decisionStyleQuiz } from './quizzes/decision-style'
import { confidenceIndexQuiz } from './quizzes/confidence-index'
import { bookRecommendationQuiz } from './quizzes/book-recommendation'
import { musicStyleQuiz } from './quizzes/music-style'
import { brainGamesQuiz } from './quizzes/brain-games'
import { friendshipTypeQuiz } from './quizzes/friendship-type'
import { socialStyleQuiz } from './quizzes/social-style'
import { eqTestQuiz } from './quizzes/eq-test'
import { travelPersonalityQuiz } from './quizzes/travel-personality'
import { careerPathQuiz } from './quizzes/career-path'
import { foodPersonalityQuiz } from './quizzes/food-personality'
import { sleepStyleQuiz } from './quizzes/sleep-style'
import { creativityTypeQuiz } from './quizzes/creativity-type'
import { communicationStyleQuiz } from './quizzes/communication-style'
import { spiritAnimalQuiz } from './quizzes/spirit-animal'
import { mockNews } from './news'
import type { Quiz } from '../types'

export const quizzes: Quiz[] = [
  mbtiQuiz,
  newsPreferenceQuiz,
  loveStyleQuiz,
  contentTagsQuiz,
  movieCharacterQuiz,
  horoscopeQuiz,
  stressIndexQuiz,
  trendingTopicsQuiz,
  weekendTypeQuiz,
  celebrityMatchQuiz,
  bigfiveQuiz,
  decisionStyleQuiz,
  confidenceIndexQuiz,
  bookRecommendationQuiz,
  musicStyleQuiz,
  brainGamesQuiz,
  friendshipTypeQuiz,
  socialStyleQuiz,
  eqTestQuiz,
  travelPersonalityQuiz,
  careerPathQuiz,
  foodPersonalityQuiz,
  sleepStyleQuiz,
  creativityTypeQuiz,
  communicationStyleQuiz,
  spiritAnimalQuiz,
]

export function getQuizById(id: string): Quiz | undefined {
  return quizzes.find(q => q.id === id)
}

export { mockNews }
