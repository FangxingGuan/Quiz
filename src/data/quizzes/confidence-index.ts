import type { Quiz } from '../../types'

export const confidenceIndexQuiz: Quiz = {
  id: 'confidence-index',
  title: 'What\'s Your Confidence Level?',
  subtitle: 'Measure your self-confidence',
  description: 'Answer 6 honest questions about how you feel in different situations to discover your confidence level. Whether you\'re quietly confident or boldly self-assured, there\'s strength in knowing yourself!',
  emoji: '💪',
  theme: 'confidence',
  duration: '1 min',
  questionCount: 6,
  questions: [
    {
      id: 'conf-1',
      text: 'You\'re asked to give a presentation to a large group. How do you feel?',
      type: 'single',
      options: [
        { id: 'conf-1a', text: 'Terrified — I\'d do anything to avoid it', tag_weights: { confidence: 1 } },
        { id: 'conf-1b', text: 'Nervous but I\'d push through it', tag_weights: { confidence: 2 } },
        { id: 'conf-1c', text: 'Excited — I love the spotlight!', tag_weights: { confidence: 3 } },
      ],
    },
    {
      id: 'conf-2',
      text: 'Someone criticizes your work. What\'s your first reaction?',
      type: 'single',
      options: [
        { id: 'conf-2a', text: 'I take it personally and feel bad about myself', tag_weights: { confidence: 1 } },
        { id: 'conf-2b', text: 'I listen and try to learn from it, but it stings a bit', tag_weights: { confidence: 2 } },
        { id: 'conf-2c', text: 'I appreciate the feedback and use it to improve', tag_weights: { confidence: 3 } },
      ],
    },
    {
      id: 'conf-3',
      text: 'You walk into a party where you don\'t know anyone. You:',
      type: 'single',
      options: [
        { id: 'conf-3a', text: 'Stand in the corner and hope someone talks to me', tag_weights: { confidence: 1 } },
        { id: 'conf-3b', text: 'Find one person to chat with and stick with them', tag_weights: { confidence: 2 } },
        { id: 'conf-3c', text: 'Walk up to a group and introduce myself', tag_weights: { confidence: 3 } },
      ],
    },
    {
      id: 'conf-4',
      text: 'How do you feel about your abilities compared to others?',
      type: 'single',
      options: [
        { id: 'conf-4a', text: 'I often feel like I\'m not as good as everyone else', tag_weights: { confidence: 1 } },
        { id: 'conf-4b', text: 'I know I have strengths, but I sometimes doubt myself', tag_weights: { confidence: 2 } },
        { id: 'conf-4c', text: 'I\'m confident in what I bring to the table', tag_weights: { confidence: 3 } },
      ],
    },
    {
      id: 'conf-5',
      text: 'You have an idea in a meeting but it might be controversial. Do you share it?',
      type: 'single',
      options: [
        { id: 'conf-5a', text: 'No — I keep it to myself to avoid being judged', tag_weights: { confidence: 1 } },
        { id: 'conf-5b', text: 'Maybe — I test the waters carefully first', tag_weights: { confidence: 2 } },
        { id: 'conf-5c', text: 'Absolutely — my ideas deserve to be heard', tag_weights: { confidence: 3 } },
      ],
    },
    {
      id: 'conf-6',
      text: 'When you look in the mirror, what do you usually think?',
      type: 'single',
      options: [
        { id: 'conf-6a', text: 'I focus on my flaws and things I want to change', tag_weights: { confidence: 1 } },
        { id: 'conf-6b', text: 'I see a mix of good and things I\'m working on', tag_weights: { confidence: 2 } },
        { id: 'conf-6c', text: 'I feel good about who I am and how I look', tag_weights: { confidence: 3 } },
      ],
    },
  ],
  results: [
    {
      id: 'conf-low',
      trigger: 'low',
      title: 'Quiet Strength',
      emoji: '🌱',
      description: 'Your confidence is still growing — and that\'s completely okay! You may doubt yourself sometimes, but your self-awareness is actually a hidden strength. Every brave step you take, no matter how small, is building the confidence that\'s already inside you.',
      tags: ['self-aware', 'growing', 'reflective'],
      news_tags: ['self-improvement', 'psychology', 'wellness'],
    },
    {
      id: 'conf-medium',
      trigger: 'medium',
      title: 'Steady & Rising',
      emoji: '🚀',
      description: 'You have a solid foundation of confidence that\'s steadily growing! You know your strengths but you\'re humble enough to keep learning. You push through discomfort when it matters and that balance of self-belief and humility is a powerful combination.',
      tags: ['balanced', 'resilient', 'adaptable'],
      news_tags: ['self-improvement', 'business', 'lifestyle'],
    },
    {
      id: 'conf-high',
      trigger: 'high',
      title: 'Unstoppable Force',
      emoji: '🦸',
      description: 'Your confidence is through the roof! You believe in yourself, embrace challenges, and don\'t let criticism hold you back. Your self-assurance inspires others and opens doors that stay closed for those who hesitate. Keep shining!',
      tags: ['bold', 'self-assured', 'inspiring'],
      news_tags: ['leadership', 'entertainment', 'sports'],
    },
  ],
}
