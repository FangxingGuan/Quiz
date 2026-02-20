import type { Quiz } from '../../types'

export const mbtiQuiz: Quiz = {
  id: 'mbti',
  title: 'MBTI Personality Test',
  subtitle: 'Discover your personality type',
  description: 'Answer 10 quick questions to find out which of the 16 MBTI personality types you are. Understand how you perceive the world and make decisions!',
  emoji: '🧠',
  theme: 'mbti',
  duration: '2 min',
  questionCount: 10,
  questions: [
    {
      id: 'mbti-1',
      text: 'At a party, you tend to:',
      type: 'single',
      options: [
        { id: 'mbti-1a', text: 'Talk to many people, including strangers', tag_weights: { E: 1 } },
        { id: 'mbti-1b', text: 'Talk mostly to people you already know', tag_weights: { I: 1 } },
      ],
    },
    {
      id: 'mbti-2',
      text: 'You are more drawn to:',
      type: 'single',
      options: [
        { id: 'mbti-2a', text: 'Practical, real-world experiences', tag_weights: { S: 1 } },
        { id: 'mbti-2b', text: 'Imaginative possibilities and ideas', tag_weights: { N: 1 } },
      ],
    },
    {
      id: 'mbti-3',
      text: 'When making decisions, you rely more on:',
      type: 'single',
      options: [
        { id: 'mbti-3a', text: 'Logic and objective analysis', tag_weights: { T: 1 } },
        { id: 'mbti-3b', text: 'Personal values and how others feel', tag_weights: { F: 1 } },
      ],
    },
    {
      id: 'mbti-4',
      text: 'You prefer your days to be:',
      type: 'single',
      options: [
        { id: 'mbti-4a', text: 'Planned and organized in advance', tag_weights: { J: 1 } },
        { id: 'mbti-4b', text: 'Flexible and spontaneous', tag_weights: { P: 1 } },
      ],
    },
    {
      id: 'mbti-5',
      text: 'After a long day, you recharge by:',
      type: 'single',
      options: [
        { id: 'mbti-5a', text: 'Going out with friends', tag_weights: { E: 1 } },
        { id: 'mbti-5b', text: 'Spending quiet time alone', tag_weights: { I: 1 } },
      ],
    },
    {
      id: 'mbti-6',
      text: 'When learning something new, you prefer:',
      type: 'single',
      options: [
        { id: 'mbti-6a', text: 'Step-by-step instructions and facts', tag_weights: { S: 1 } },
        { id: 'mbti-6b', text: 'Understanding the big picture first', tag_weights: { N: 1 } },
      ],
    },
    {
      id: 'mbti-7',
      text: 'In a disagreement, you are more likely to:',
      type: 'single',
      options: [
        { id: 'mbti-7a', text: 'Stay firm on what\'s logically correct', tag_weights: { T: 1 } },
        { id: 'mbti-7b', text: 'Seek harmony and compromise', tag_weights: { F: 1 } },
      ],
    },
    {
      id: 'mbti-8',
      text: 'Your workspace is usually:',
      type: 'single',
      options: [
        { id: 'mbti-8a', text: 'Neat and well-organized', tag_weights: { J: 1 } },
        { id: 'mbti-8b', text: 'A bit messy but you know where things are', tag_weights: { P: 1 } },
      ],
    },
    {
      id: 'mbti-9',
      text: 'You feel more energized when:',
      type: 'single',
      options: [
        { id: 'mbti-9a', text: 'Brainstorming with a group', tag_weights: { E: 1, N: 1 } },
        { id: 'mbti-9b', text: 'Working through a problem on your own', tag_weights: { I: 1, S: 1 } },
      ],
    },
    {
      id: 'mbti-10',
      text: 'When choosing a movie, you prefer:',
      type: 'single',
      options: [
        { id: 'mbti-10a', text: 'Documentaries or biopics based on real events', tag_weights: { S: 1, T: 1 } },
        { id: 'mbti-10b', text: 'Fantasy or sci-fi with creative world-building', tag_weights: { N: 1, F: 1 } },
      ],
    },
  ],
  results: [
    {
      id: 'mbti-ISTJ', trigger: 'ISTJ', title: 'ISTJ - The Inspector',
      emoji: '📋', description: 'Responsible, thorough, and dependable. You value tradition and loyalty, and you get things done with quiet determination.',
      tags: ['organized', 'reliable', 'practical'], news_tags: ['business', 'politics', 'finance'],
    },
    {
      id: 'mbti-ISFJ', trigger: 'ISFJ', title: 'ISFJ - The Protector',
      emoji: '🛡️', description: 'Warm, caring, and dedicated. You notice what others need and work tirelessly behind the scenes to help.',
      tags: ['caring', 'loyal', 'supportive'], news_tags: ['health', 'community', 'lifestyle'],
    },
    {
      id: 'mbti-INFJ', trigger: 'INFJ', title: 'INFJ - The Advocate',
      emoji: '🌟', description: 'Insightful, principled, and compassionate. You have a deep desire to help others and a unique ability to see connections.',
      tags: ['visionary', 'empathetic', 'idealistic'], news_tags: ['culture', 'psychology', 'social'],
    },
    {
      id: 'mbti-INTJ', trigger: 'INTJ', title: 'INTJ - The Architect',
      emoji: '🏗️', description: 'Strategic, independent, and determined. You see the big picture and work systematically toward your goals.',
      tags: ['strategic', 'independent', 'analytical'], news_tags: ['tech', 'science', 'business'],
    },
    {
      id: 'mbti-ISTP', trigger: 'ISTP', title: 'ISTP - The Craftsperson',
      emoji: '🔧', description: 'Practical, observant, and analytical. You enjoy understanding how things work and solving problems hands-on.',
      tags: ['hands-on', 'logical', 'adaptable'], news_tags: ['tech', 'sports', 'auto'],
    },
    {
      id: 'mbti-ISFP', trigger: 'ISFP', title: 'ISFP - The Composer',
      emoji: '🎨', description: 'Gentle, sensitive, and artistic. You live in the moment and express yourself through actions rather than words.',
      tags: ['artistic', 'gentle', 'spontaneous'], news_tags: ['art', 'music', 'lifestyle'],
    },
    {
      id: 'mbti-INFP', trigger: 'INFP', title: 'INFP - The Mediator',
      emoji: '🦋', description: 'Idealistic, empathetic, and creative. You are guided by your values and always looking for the good in people.',
      tags: ['idealistic', 'creative', 'empathetic'], news_tags: ['culture', 'books', 'environment'],
    },
    {
      id: 'mbti-INTP', trigger: 'INTP', title: 'INTP - The Thinker',
      emoji: '💡', description: 'Logical, innovative, and curious. You love exploring ideas and finding elegant solutions to complex problems.',
      tags: ['analytical', 'innovative', 'curious'], news_tags: ['tech', 'science', 'philosophy'],
    },
    {
      id: 'mbti-ESTP', trigger: 'ESTP', title: 'ESTP - The Dynamo',
      emoji: '⚡', description: 'Energetic, pragmatic, and observant. You thrive on action and are great at thinking on your feet.',
      tags: ['action-oriented', 'bold', 'pragmatic'], news_tags: ['sports', 'business', 'entertainment'],
    },
    {
      id: 'mbti-ESFP', trigger: 'ESFP', title: 'ESFP - The Performer',
      emoji: '🎭', description: 'Spontaneous, energetic, and fun-loving. You light up every room and live life to the fullest.',
      tags: ['fun-loving', 'social', 'energetic'], news_tags: ['entertainment', 'celebrity', 'food'],
    },
    {
      id: 'mbti-ENFP', trigger: 'ENFP', title: 'ENFP - The Champion',
      emoji: '🌈', description: 'Enthusiastic, creative, and sociable. You see life as full of possibilities and inspire others with your energy.',
      tags: ['enthusiastic', 'creative', 'sociable'], news_tags: ['culture', 'travel', 'tech'],
    },
    {
      id: 'mbti-ENTP', trigger: 'ENTP', title: 'ENTP - The Visionary',
      emoji: '🚀', description: 'Inventive, strategic, and outspoken. You love intellectual challenges and are always up for a good debate.',
      tags: ['inventive', 'strategic', 'debater'], news_tags: ['tech', 'politics', 'science'],
    },
    {
      id: 'mbti-ESTJ', trigger: 'ESTJ', title: 'ESTJ - The Supervisor',
      emoji: '📊', description: 'Organized, logical, and assertive. You take charge and make sure things run smoothly and efficiently.',
      tags: ['leader', 'organized', 'decisive'], news_tags: ['business', 'politics', 'finance'],
    },
    {
      id: 'mbti-ESFJ', trigger: 'ESFJ', title: 'ESFJ - The Provider',
      emoji: '🤗', description: 'Caring, social, and tradition-minded. You go out of your way to make others feel welcome and supported.',
      tags: ['nurturing', 'social', 'reliable'], news_tags: ['community', 'health', 'lifestyle'],
    },
    {
      id: 'mbti-ENFJ', trigger: 'ENFJ', title: 'ENFJ - The Teacher',
      emoji: '🎓', description: 'Charismatic, empathetic, and organized. You naturally lead and inspire others toward growth and positive change.',
      tags: ['inspirational', 'empathetic', 'leader'], news_tags: ['education', 'social', 'culture'],
    },
    {
      id: 'mbti-ENTJ', trigger: 'ENTJ', title: 'ENTJ - The Commander',
      emoji: '👑', description: 'Bold, imaginative, and strong-willed. You are a natural leader who always finds a way to achieve your goals.',
      tags: ['commanding', 'strategic', 'ambitious'], news_tags: ['business', 'tech', 'politics'],
    },
  ],
}
