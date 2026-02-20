export interface Option {
  id: string
  text: string
  tag_weights: Record<string, number>
}

export interface Question {
  id: string
  text: string
  type: 'single' | 'multi'
  options: Option[]
}

export type QuizTheme = 'mbti' | 'news' | 'love' | 'tags' | 'movie' | 'horoscope' | 'stress' | 'trending' | 'weekend' | 'celebrity' | 'bigfive' | 'decision' | 'confidence' | 'book' | 'music' | 'brain'

export interface QuizResult {
  id: string
  title: string
  description: string
  emoji: string
  tags: string[]
  news_tags: string[]
  /** For MBTI: trigger condition like "INFP" */
  trigger?: string
  /** For tag-based: trigger tag key */
  trigger_tag?: string
}

export interface Quiz {
  id: string
  title: string
  subtitle: string
  description: string
  emoji: string
  theme: QuizTheme
  questions: Question[]
  results: QuizResult[]
  /** Duration hint like "2 min" */
  duration: string
  /** Number of questions */
  questionCount: number
}

export interface UserAnswer {
  questionId: string
  selectedOptionIds: string[]
}

export interface UserQuizRecord {
  quizId: string
  answers: UserAnswer[]
  resultId: string
  tagScores: Record<string, number>
  completedAt: string
  shared: boolean
}

export interface NewsArticle {
  id: string
  title: string
  summary: string
  source: string
  imageUrl: string
  tags: string[]
  url: string
}
