import type { Quiz } from '../../types'

export const loveStyleQuiz: Quiz = {
  id: 'love-style',
  title: 'Love Style Quiz',
  subtitle: 'How do you love?',
  description: 'Answer 8 relationship scenarios to reveal your unique love style. Discover what drives your heart and how you connect with the people you care about most!',
  emoji: '💕',
  theme: 'love',
  duration: '2 min',
  questionCount: 8,
  questions: [
    {
      id: 'love-1',
      text: 'Your ideal first date would be:',
      type: 'single',
      options: [
        { id: 'love-1a', text: 'A candlelit dinner with flowers and soft music', tag_weights: { romantic: 2, stable: 1 } },
        { id: 'love-1b', text: 'A spontaneous road trip to somewhere neither of you has been', tag_weights: { adventurous: 2, free: 1 } },
        { id: 'love-1c', text: 'A cozy coffee shop where you can really talk and get to know each other', tag_weights: { rational: 2, stable: 1 } },
      ],
    },
    {
      id: 'love-2',
      text: 'Your partner forgot your anniversary. You:',
      type: 'single',
      options: [
        { id: 'love-2a', text: 'Feel deeply hurt — these moments matter so much to you', tag_weights: { romantic: 2 } },
        { id: 'love-2b', text: 'Calmly bring it up later and talk about how you both can remember next time', tag_weights: { rational: 2 } },
        { id: 'love-2c', text: 'Shrug it off — dates are just numbers, your love isn\'t defined by a calendar', tag_weights: { free: 2 } },
      ],
    },
    {
      id: 'love-3',
      text: 'What matters most to you in a long-term relationship?',
      type: 'single',
      options: [
        { id: 'love-3a', text: 'Keeping the spark and passion alive', tag_weights: { romantic: 1, adventurous: 1 } },
        { id: 'love-3b', text: 'Building a secure, stable life together', tag_weights: { stable: 2, rational: 1 } },
      ],
    },
    {
      id: 'love-4',
      text: 'Your partner gets a dream job offer in another country. You:',
      type: 'single',
      options: [
        { id: 'love-4a', text: 'Excitedly start packing — what an adventure!', tag_weights: { adventurous: 2, free: 1 } },
        { id: 'love-4b', text: 'Sit down together to weigh the pros and cons carefully', tag_weights: { rational: 2, stable: 1 } },
        { id: 'love-4c', text: 'Support them fully but need your own space and plans too', tag_weights: { free: 2 } },
      ],
    },
    {
      id: 'love-5',
      text: 'How do you express love most naturally?',
      type: 'single',
      options: [
        { id: 'love-5a', text: 'Writing heartfelt letters or planning surprise gestures', tag_weights: { romantic: 2 } },
        { id: 'love-5b', text: 'Being there reliably, day after day, through thick and thin', tag_weights: { stable: 2 } },
        { id: 'love-5c', text: 'Planning exciting trips and trying new things together', tag_weights: { adventurous: 2 } },
      ],
    },
    {
      id: 'love-6',
      text: 'How do you handle conflict with your partner?',
      type: 'single',
      options: [
        { id: 'love-6a', text: 'Talk it through logically until you find a fair solution', tag_weights: { rational: 2 } },
        { id: 'love-6b', text: 'Take space first, then come back when emotions settle', tag_weights: { free: 2 } },
        { id: 'love-6c', text: 'Try to reconnect emotionally — a hug can fix more than words', tag_weights: { romantic: 1, stable: 1 } },
      ],
    },
    {
      id: 'love-7',
      text: 'Your perfect weekend with your partner looks like:',
      type: 'single',
      options: [
        { id: 'love-7a', text: 'Skydiving, hiking, or exploring a new city together', tag_weights: { adventurous: 2, free: 1 } },
        { id: 'love-7b', text: 'Cooking together, watching a movie, and cuddling on the couch', tag_weights: { stable: 2, romantic: 1 } },
      ],
    },
    {
      id: 'love-8',
      text: 'What scares you most about relationships?',
      type: 'single',
      options: [
        { id: 'love-8a', text: 'Losing the magic and falling into a boring routine', tag_weights: { romantic: 1, adventurous: 1 } },
        { id: 'love-8b', text: 'Making the wrong choice and regretting it later', tag_weights: { rational: 2 } },
        { id: 'love-8c', text: 'Losing your independence and sense of self', tag_weights: { free: 2 } },
      ],
    },
  ],
  results: [
    {
      id: 'love-romantic',
      trigger_tag: 'romantic',
      title: 'The Romantic Dreamer',
      emoji: '🌹',
      description: 'You believe in fairy tale love. Grand gestures, love letters, and candlelit evenings are your language. You pour your heart into relationships and believe that true love can conquer anything. Your partner always feels deeply cherished.',
      tags: ['romantic', 'passionate', 'sentimental'],
      news_tags: ['lifestyle', 'entertainment', 'culture'],
    },
    {
      id: 'love-rational',
      trigger_tag: 'rational',
      title: 'The Rational Partner',
      emoji: '🧠',
      description: 'You believe love needs a solid foundation. Communication, compatibility, and shared goals matter more to you than butterflies. You approach relationships with thoughtfulness and intention, building something that truly lasts.',
      tags: ['rational', 'thoughtful', 'grounded'],
      news_tags: ['business', 'science', 'health'],
    },
    {
      id: 'love-adventurous',
      trigger_tag: 'adventurous',
      title: 'The Adventurous Lover',
      emoji: '🌍',
      description: 'Love is an exciting journey to you, not a destination. You crave new experiences, spontaneous getaways, and a partner who keeps you on your toes. Boredom is the enemy, and you make sure every chapter together is thrilling.',
      tags: ['adventurous', 'spontaneous', 'energetic'],
      news_tags: ['travel', 'sports', 'entertainment'],
    },
    {
      id: 'love-stable',
      trigger_tag: 'stable',
      title: 'The Steady Rock',
      emoji: '🏡',
      description: 'Commitment and security are the cornerstones of your love life. You show up every single day and your loyalty runs deep. Your partner knows they can always count on you. To you, real love is built in the quiet, consistent moments.',
      tags: ['stable', 'loyal', 'dependable'],
      news_tags: ['finance', 'health', 'community'],
    },
    {
      id: 'love-free',
      trigger_tag: 'free',
      title: 'The Free Spirit',
      emoji: '🦅',
      description: 'You love without boundaries or rulebooks. Independence is sacred to you, and you believe the best relationships are between two whole people who choose each other freely every day. You bring authenticity and freshness to every connection.',
      tags: ['independent', 'authentic', 'free-spirited'],
      news_tags: ['culture', 'travel', 'lifestyle'],
    },
  ],
}
