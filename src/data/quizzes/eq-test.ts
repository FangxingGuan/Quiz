import type { Quiz } from '../../types'

export const eqTestQuiz: Quiz = {
  id: 'eq-test',
  title: 'How High Is Your EQ?',
  subtitle: 'Test your emotional intelligence',
  description: 'Answer 6 scenarios honestly to measure your emotional intelligence — your ability to understand, manage, and use emotions effectively. EQ is the secret ingredient behind great leaders, partners, and friends!',
  emoji: '🫀',
  theme: 'eq',
  duration: '1 min',
  questionCount: 6,
  questions: [
    {
      id: 'eq-1',
      text: 'A coworker snaps at you during a stressful meeting. You:',
      type: 'single',
      options: [
        { id: 'eq-1a', text: 'Snap back — they don\'t get to talk to me like that', tag_weights: { eq: 1 } },
        { id: 'eq-1b', text: 'Stay quiet in the moment but feel upset all day', tag_weights: { eq: 2 } },
        { id: 'eq-1c', text: 'Stay calm and check in with them privately after the meeting', tag_weights: { eq: 3 } },
      ],
    },
    {
      id: 'eq-2',
      text: 'You notice a friend has been unusually quiet lately. You:',
      type: 'single',
      options: [
        { id: 'eq-2a', text: 'Don\'t think much of it — people have off days', tag_weights: { eq: 1 } },
        { id: 'eq-2b', text: 'Notice it but wait for them to bring it up', tag_weights: { eq: 2 } },
        { id: 'eq-2c', text: 'Reach out privately and gently ask if they\'re okay', tag_weights: { eq: 3 } },
      ],
    },
    {
      id: 'eq-3',
      text: 'You made a mistake that affected your team. How do you handle it?',
      type: 'single',
      options: [
        { id: 'eq-3a', text: 'Deflect or blame circumstances — no one needs to know', tag_weights: { eq: 1 } },
        { id: 'eq-3b', text: 'Admit it but dwell on the guilt for a long time', tag_weights: { eq: 2 } },
        { id: 'eq-3c', text: 'Own it immediately, apologize, and propose a fix', tag_weights: { eq: 3 } },
      ],
    },
    {
      id: 'eq-4',
      text: 'Someone gives you a compliment you don\'t fully agree with. You:',
      type: 'single',
      options: [
        { id: 'eq-4a', text: 'Deny it or argue why they\'re wrong', tag_weights: { eq: 1 } },
        { id: 'eq-4b', text: 'Feel awkward and quickly change the subject', tag_weights: { eq: 2 } },
        { id: 'eq-4c', text: 'Thank them warmly and accept it gracefully', tag_weights: { eq: 3 } },
      ],
    },
    {
      id: 'eq-5',
      text: 'You feel overwhelmed and anxious. What do you do?',
      type: 'single',
      options: [
        { id: 'eq-5a', text: 'Push through and ignore the feelings — no time for that', tag_weights: { eq: 1 } },
        { id: 'eq-5b', text: 'Recognize I\'m stressed but struggle to calm down', tag_weights: { eq: 2 } },
        { id: 'eq-5c', text: 'Pause, name what I\'m feeling, and use a coping strategy', tag_weights: { eq: 3 } },
      ],
    },
    {
      id: 'eq-6',
      text: 'You deeply disagree with someone\'s opinion. How do you respond?',
      type: 'single',
      options: [
        { id: 'eq-6a', text: 'Tell them they\'re wrong and explain why', tag_weights: { eq: 1 } },
        { id: 'eq-6b', text: 'Avoid the conversation entirely to keep the peace', tag_weights: { eq: 2 } },
        { id: 'eq-6c', text: 'Ask questions to understand their perspective before sharing mine', tag_weights: { eq: 3 } },
      ],
    },
  ],
  results: [
    {
      id: 'eq-developing',
      trigger: 'developing',
      title: 'EQ Apprentice',
      emoji: '🌱',
      description: 'Your emotional intelligence is still developing, and that\'s perfectly okay! You tend to react on impulse and may struggle to read the room sometimes. The good news? EQ is a skill that can be learned. Start by pausing before reacting and practicing active listening.',
      tags: ['developing', 'reactive', 'growing'],
      news_tags: ['self-improvement', 'psychology', 'education'],
    },
    {
      id: 'eq-balanced',
      trigger: 'balanced',
      title: 'EQ Navigator',
      emoji: '🧭',
      description: 'You have a solid emotional foundation! You\'re aware of your feelings and usually handle social situations well, though some tricky moments still trip you up. Keep building on this — you\'re well on your way to emotional mastery.',
      tags: ['aware', 'balanced', 'improving'],
      news_tags: ['psychology', 'lifestyle', 'health'],
    },
    {
      id: 'eq-master',
      trigger: 'master',
      title: 'EQ Master',
      emoji: '🧘',
      description: 'Your emotional intelligence is exceptional! You read people beautifully, manage your own emotions with grace, and navigate complex social situations like a pro. People feel safe, heard, and valued around you. That\'s a rare gift — never stop using it.',
      tags: ['empathetic', 'self-aware', 'masterful'],
      news_tags: ['psychology', 'community', 'health'],
    },
  ],
}
