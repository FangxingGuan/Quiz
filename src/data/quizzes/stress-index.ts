import type { Quiz } from '../../types'

export const stressIndexQuiz: Quiz = {
  id: 'stress-index',
  title: 'What\'s Your Stress Level?',
  subtitle: 'Check your mental wellness',
  description: 'Answer 6 honest questions about your daily life and habits to discover your current stress level. Get personalized tips to maintain balance and well-being!',
  emoji: '🧘',
  theme: 'stress',
  duration: '1 min',
  questionCount: 6,
  questions: [
    {
      id: 'stress-1',
      text: 'How would you describe your sleep quality lately?',
      type: 'single',
      options: [
        { id: 'stress-1a', text: 'I sleep like a baby — deep, restful, and wake up refreshed', tag_weights: { stress: 1 } },
        { id: 'stress-1b', text: 'It\'s okay, but I sometimes toss and turn or wake up tired', tag_weights: { stress: 2 } },
        { id: 'stress-1c', text: 'I struggle to fall asleep and rarely feel well-rested', tag_weights: { stress: 3 } },
      ],
    },
    {
      id: 'stress-2',
      text: 'How does your workload feel right now?',
      type: 'single',
      options: [
        { id: 'stress-2a', text: 'Very manageable — I have a good rhythm and finish on time', tag_weights: { stress: 1 } },
        { id: 'stress-2b', text: 'Busy but under control — some days are heavier than others', tag_weights: { stress: 2 } },
        { id: 'stress-2c', text: 'Overwhelming — I constantly feel behind and can\'t catch up', tag_weights: { stress: 3 } },
      ],
    },
    {
      id: 'stress-3',
      text: 'How much time do you spend on relaxation or hobbies each week?',
      type: 'single',
      options: [
        { id: 'stress-3a', text: 'Plenty — I make time for things I enjoy almost every day', tag_weights: { stress: 1 } },
        { id: 'stress-3b', text: 'Some — I squeeze in a bit here and there when I can', tag_weights: { stress: 2 } },
        { id: 'stress-3c', text: 'Almost none — I can\'t remember the last time I truly relaxed', tag_weights: { stress: 3 } },
      ],
    },
    {
      id: 'stress-4',
      text: 'Do you experience physical symptoms like headaches, tension, or fatigue?',
      type: 'single',
      options: [
        { id: 'stress-4a', text: 'Rarely — I generally feel physically good', tag_weights: { stress: 1 } },
        { id: 'stress-4b', text: 'Occasionally — a headache or sore neck pops up now and then', tag_weights: { stress: 2 } },
        { id: 'stress-4c', text: 'Frequently — tension, fatigue, or aches are part of my daily life', tag_weights: { stress: 3 } },
      ],
    },
    {
      id: 'stress-5',
      text: 'How do you feel about socializing after a long day?',
      type: 'single',
      options: [
        { id: 'stress-5a', text: 'I still have energy and enjoy catching up with friends or family', tag_weights: { stress: 1 } },
        { id: 'stress-5b', text: 'It depends on the day — sometimes I\'m up for it, sometimes not', tag_weights: { stress: 2 } },
        { id: 'stress-5c', text: 'I\'m too drained — I just want to be alone and shut everything out', tag_weights: { stress: 3 } },
      ],
    },
    {
      id: 'stress-6',
      text: 'How would you describe your overall mood most days?',
      type: 'single',
      options: [
        { id: 'stress-6a', text: 'Positive and optimistic — I feel good about where things are heading', tag_weights: { stress: 1 } },
        { id: 'stress-6b', text: 'Neutral — not great, not terrible, just getting through', tag_weights: { stress: 2 } },
        { id: 'stress-6c', text: 'Anxious or irritable — small things set me off and I feel on edge', tag_weights: { stress: 3 } },
      ],
    },
  ],
  results: [
    {
      id: 'stress-low',
      trigger: 'low',
      title: 'Zen Master 🧘',
      emoji: '😌',
      description: 'You\'re in a great place mentally and emotionally. Your stress levels are low, and you seem to have healthy habits that keep you grounded. Keep doing what you\'re doing — your balance is something to be proud of!',
      tags: ['calm', 'balanced', 'resilient'],
      news_tags: ['wellness', 'lifestyle', 'travel'],
    },
    {
      id: 'stress-medium',
      trigger: 'medium',
      title: 'Balancing Act ⚖️',
      emoji: '😐',
      description: 'You\'re managing, but the pressure is starting to show. Life has its ups and downs, and you\'re riding the wave — just be mindful of the signs before they pile up. A few small changes could make a big difference.',
      tags: ['coping', 'busy', 'aware'],
      news_tags: ['health', 'self-improvement', 'mindfulness'],
    },
    {
      id: 'stress-high',
      trigger: 'high',
      title: 'Overloaded! 🔥',
      emoji: '😰',
      description: 'Your stress levels are running high and your body and mind are telling you to slow down. It\'s time to prioritize self-care — even small steps like a short walk, deep breathing, or talking to someone you trust can help. You deserve a break!',
      tags: ['overwhelmed', 'exhausted', 'burned-out'],
      news_tags: ['mental-health', 'self-care', 'wellness'],
    },
  ],
}
