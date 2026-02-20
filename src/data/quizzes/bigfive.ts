import type { Quiz } from '../../types'

export const bigfiveQuiz: Quiz = {
  id: 'bigfive',
  title: 'Big Five Personality Test',
  subtitle: 'Discover your personality dimensions',
  description: 'Answer 10 questions to uncover your Big Five personality profile — Openness, Conscientiousness, Extraversion, Agreeableness, and Neuroticism. See how your traits combine to make you unique!',
  emoji: '🧬',
  theme: 'bigfive',
  duration: '2 min',
  questionCount: 10,
  questions: [
    // Openness (2 questions)
    {
      id: 'bf-1',
      text: 'I enjoy trying new and unfamiliar experiences.',
      type: 'single',
      options: [
        { id: 'bf-1a', text: 'Strongly disagree', tag_weights: { openness: 1 } },
        { id: 'bf-1b', text: 'Disagree', tag_weights: { openness: 2 } },
        { id: 'bf-1c', text: 'Neutral', tag_weights: { openness: 3 } },
        { id: 'bf-1d', text: 'Agree', tag_weights: { openness: 4 } },
        { id: 'bf-1e', text: 'Strongly agree', tag_weights: { openness: 5 } },
      ],
    },
    {
      id: 'bf-2',
      text: 'I often get lost in my imagination and creative ideas.',
      type: 'single',
      options: [
        { id: 'bf-2a', text: 'Strongly disagree', tag_weights: { openness: 1 } },
        { id: 'bf-2b', text: 'Disagree', tag_weights: { openness: 2 } },
        { id: 'bf-2c', text: 'Neutral', tag_weights: { openness: 3 } },
        { id: 'bf-2d', text: 'Agree', tag_weights: { openness: 4 } },
        { id: 'bf-2e', text: 'Strongly agree', tag_weights: { openness: 5 } },
      ],
    },
    // Conscientiousness (2 questions)
    {
      id: 'bf-3',
      text: 'I like to keep things organized and follow a plan.',
      type: 'single',
      options: [
        { id: 'bf-3a', text: 'Strongly disagree', tag_weights: { conscientiousness: 1 } },
        { id: 'bf-3b', text: 'Disagree', tag_weights: { conscientiousness: 2 } },
        { id: 'bf-3c', text: 'Neutral', tag_weights: { conscientiousness: 3 } },
        { id: 'bf-3d', text: 'Agree', tag_weights: { conscientiousness: 4 } },
        { id: 'bf-3e', text: 'Strongly agree', tag_weights: { conscientiousness: 5 } },
      ],
    },
    {
      id: 'bf-4',
      text: 'I always finish what I start, even when it gets difficult.',
      type: 'single',
      options: [
        { id: 'bf-4a', text: 'Strongly disagree', tag_weights: { conscientiousness: 1 } },
        { id: 'bf-4b', text: 'Disagree', tag_weights: { conscientiousness: 2 } },
        { id: 'bf-4c', text: 'Neutral', tag_weights: { conscientiousness: 3 } },
        { id: 'bf-4d', text: 'Agree', tag_weights: { conscientiousness: 4 } },
        { id: 'bf-4e', text: 'Strongly agree', tag_weights: { conscientiousness: 5 } },
      ],
    },
    // Extraversion (2 questions)
    {
      id: 'bf-5',
      text: 'I feel energized when I spend time around other people.',
      type: 'single',
      options: [
        { id: 'bf-5a', text: 'Strongly disagree', tag_weights: { extraversion: 1 } },
        { id: 'bf-5b', text: 'Disagree', tag_weights: { extraversion: 2 } },
        { id: 'bf-5c', text: 'Neutral', tag_weights: { extraversion: 3 } },
        { id: 'bf-5d', text: 'Agree', tag_weights: { extraversion: 4 } },
        { id: 'bf-5e', text: 'Strongly agree', tag_weights: { extraversion: 5 } },
      ],
    },
    {
      id: 'bf-6',
      text: 'I enjoy being the center of attention in social situations.',
      type: 'single',
      options: [
        { id: 'bf-6a', text: 'Strongly disagree', tag_weights: { extraversion: 1 } },
        { id: 'bf-6b', text: 'Disagree', tag_weights: { extraversion: 2 } },
        { id: 'bf-6c', text: 'Neutral', tag_weights: { extraversion: 3 } },
        { id: 'bf-6d', text: 'Agree', tag_weights: { extraversion: 4 } },
        { id: 'bf-6e', text: 'Strongly agree', tag_weights: { extraversion: 5 } },
      ],
    },
    // Agreeableness (2 questions)
    {
      id: 'bf-7',
      text: 'I go out of my way to help others, even if there\'s nothing in it for me.',
      type: 'single',
      options: [
        { id: 'bf-7a', text: 'Strongly disagree', tag_weights: { agreeableness: 1 } },
        { id: 'bf-7b', text: 'Disagree', tag_weights: { agreeableness: 2 } },
        { id: 'bf-7c', text: 'Neutral', tag_weights: { agreeableness: 3 } },
        { id: 'bf-7d', text: 'Agree', tag_weights: { agreeableness: 4 } },
        { id: 'bf-7e', text: 'Strongly agree', tag_weights: { agreeableness: 5 } },
      ],
    },
    {
      id: 'bf-8',
      text: 'I trust people easily and give them the benefit of the doubt.',
      type: 'single',
      options: [
        { id: 'bf-8a', text: 'Strongly disagree', tag_weights: { agreeableness: 1 } },
        { id: 'bf-8b', text: 'Disagree', tag_weights: { agreeableness: 2 } },
        { id: 'bf-8c', text: 'Neutral', tag_weights: { agreeableness: 3 } },
        { id: 'bf-8d', text: 'Agree', tag_weights: { agreeableness: 4 } },
        { id: 'bf-8e', text: 'Strongly agree', tag_weights: { agreeableness: 5 } },
      ],
    },
    // Neuroticism (2 questions)
    {
      id: 'bf-9',
      text: 'I often worry about things that might go wrong.',
      type: 'single',
      options: [
        { id: 'bf-9a', text: 'Strongly disagree', tag_weights: { neuroticism: 1 } },
        { id: 'bf-9b', text: 'Disagree', tag_weights: { neuroticism: 2 } },
        { id: 'bf-9c', text: 'Neutral', tag_weights: { neuroticism: 3 } },
        { id: 'bf-9d', text: 'Agree', tag_weights: { neuroticism: 4 } },
        { id: 'bf-9e', text: 'Strongly agree', tag_weights: { neuroticism: 5 } },
      ],
    },
    {
      id: 'bf-10',
      text: 'My mood can change quickly and I sometimes feel overwhelmed by emotions.',
      type: 'single',
      options: [
        { id: 'bf-10a', text: 'Strongly disagree', tag_weights: { neuroticism: 1 } },
        { id: 'bf-10b', text: 'Disagree', tag_weights: { neuroticism: 2 } },
        { id: 'bf-10c', text: 'Neutral', tag_weights: { neuroticism: 3 } },
        { id: 'bf-10d', text: 'Agree', tag_weights: { neuroticism: 4 } },
        { id: 'bf-10e', text: 'Strongly agree', tag_weights: { neuroticism: 5 } },
      ],
    },
  ],
  // Results are dynamically generated based on highest dimension
  results: [
    {
      id: 'bf-openness',
      trigger_tag: 'openness',
      title: 'The Explorer',
      emoji: '🎨',
      description: 'Your dominant trait is Openness! You\'re curious, creative, and always seeking new experiences. You embrace novelty and love exploring ideas that push boundaries. Your imagination is your superpower.',
      tags: ['creative', 'curious', 'open-minded'],
      news_tags: ['arts', 'science', 'travel', 'culture'],
    },
    {
      id: 'bf-conscientiousness',
      trigger_tag: 'conscientiousness',
      title: 'The Achiever',
      emoji: '🎯',
      description: 'Your dominant trait is Conscientiousness! You\'re organized, disciplined, and driven to succeed. You set high standards for yourself and follow through on your commitments. People count on you because you always deliver.',
      tags: ['organized', 'reliable', 'determined'],
      news_tags: ['business', 'productivity', 'finance'],
    },
    {
      id: 'bf-extraversion',
      trigger_tag: 'extraversion',
      title: 'The Energizer',
      emoji: '🌟',
      description: 'Your dominant trait is Extraversion! You thrive on social interaction and bring energy to every room you enter. You\'re outgoing, enthusiastic, and naturally draw people toward you. Your warmth is contagious!',
      tags: ['outgoing', 'energetic', 'sociable'],
      news_tags: ['entertainment', 'community', 'lifestyle'],
    },
    {
      id: 'bf-agreeableness',
      trigger_tag: 'agreeableness',
      title: 'The Harmonizer',
      emoji: '🤝',
      description: 'Your dominant trait is Agreeableness! You\'re compassionate, cooperative, and deeply empathetic. You value harmony and go out of your way to help others. Your kindness makes the world a better place.',
      tags: ['empathetic', 'cooperative', 'kind'],
      news_tags: ['community', 'health', 'environment'],
    },
    {
      id: 'bf-neuroticism',
      trigger_tag: 'neuroticism',
      title: 'The Sensitive Soul',
      emoji: '🌊',
      description: 'Your dominant trait is Neuroticism — and that\'s not a bad thing! You experience emotions deeply and are highly attuned to the world around you. This sensitivity fuels your empathy, creativity, and self-awareness.',
      tags: ['sensitive', 'self-aware', 'introspective'],
      news_tags: ['psychology', 'self-improvement', 'wellness'],
    },
  ],
}
