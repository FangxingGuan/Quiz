import type { Quiz } from '../../types'

export const trendingTopicsQuiz: Quiz = {
  id: 'trending-topics',
  title: 'Trending Topics Match',
  subtitle: 'How plugged in are you?',
  description: 'Rate your interest across 5 trending topic areas and see your personalized topic radar. Find out which hot topics match your vibe the most!',
  emoji: '📈',
  theme: 'trending',
  duration: '1 min',
  questionCount: 5,
  questions: [
    {
      id: 'trending-1',
      text: 'How do you feel about AI and emerging tech trends?',
      type: 'single',
      options: [
        { id: 'trending-1a', text: 'I\'m obsessed — I follow every breakthrough and can\'t stop talking about it', tag_weights: { ai_tech: 3 } },
        { id: 'trending-1b', text: 'I keep an eye on the big headlines but don\'t dive too deep', tag_weights: { ai_tech: 2 } },
        { id: 'trending-1c', text: 'Not really my thing — I\'ll hear about it eventually', tag_weights: { ai_tech: 1 } },
      ],
    },
    {
      id: 'trending-2',
      text: 'When climate and environment stories hit the news, what\'s your reaction?',
      type: 'single',
      options: [
        { id: 'trending-2a', text: 'I read every article and share them with friends — this is the defining issue of our time', tag_weights: { climate: 3 } },
        { id: 'trending-2b', text: 'I skim the highlights and try to stay informed', tag_weights: { climate: 2 } },
        { id: 'trending-2c', text: 'I usually scroll past — it doesn\'t grab my attention', tag_weights: { climate: 1 } },
      ],
    },
    {
      id: 'trending-3',
      text: 'How plugged in are you to pop culture — viral moments, celebrity news, and entertainment?',
      type: 'single',
      options: [
        { id: 'trending-3a', text: 'Totally plugged in — I know every meme, every drama, every drop', tag_weights: { pop_culture: 3 } },
        { id: 'trending-3b', text: 'I catch the big stuff but miss the smaller trends', tag_weights: { pop_culture: 2 } },
        { id: 'trending-3c', text: 'I\'m pretty out of the loop and that\'s fine with me', tag_weights: { pop_culture: 1 } },
      ],
    },
    {
      id: 'trending-4',
      text: 'How closely do you follow economic news — markets, jobs, inflation, and personal finance?',
      type: 'single',
      options: [
        { id: 'trending-4a', text: 'Very closely — I check market updates daily and track economic indicators', tag_weights: { economy: 3 } },
        { id: 'trending-4b', text: 'Somewhat — I pay attention when something big happens', tag_weights: { economy: 2 } },
        { id: 'trending-4c', text: 'Rarely — I find economic news dry and confusing', tag_weights: { economy: 1 } },
      ],
    },
    {
      id: 'trending-5',
      text: 'What about health and wellness trends — fitness, nutrition, mental health, and medical breakthroughs?',
      type: 'single',
      options: [
        { id: 'trending-5a', text: 'I\'m all in — I actively research and try new wellness practices', tag_weights: { health_wellness: 3 } },
        { id: 'trending-5b', text: 'I read interesting articles when they pop up in my feed', tag_weights: { health_wellness: 2 } },
        { id: 'trending-5c', text: 'Not on my radar — I don\'t seek out health content', tag_weights: { health_wellness: 1 } },
      ],
    },
  ],
  results: [],
}
