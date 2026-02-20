import type { Quiz } from '../../types'

export const newsPreferenceQuiz: Quiz = {
  id: 'news-preference',
  title: 'News Preference Quiz',
  subtitle: 'What news matters most to you?',
  description: 'Answer 5 quick questions to uncover your ideal news diet. We will match you with the topics that resonate most with how you see the world!',
  emoji: '📰',
  theme: 'news',
  duration: '1 min',
  questionCount: 5,
  questions: [
    {
      id: 'news-1',
      text: 'It\'s Sunday morning. Which headline grabs your attention first?',
      type: 'single',
      options: [
        { id: 'news-1a', text: 'A breakthrough AI model just disrupted the tech industry', tag_weights: { tech: 2, science: 1 } },
        { id: 'news-1b', text: 'The Senate passes a major bipartisan infrastructure bill', tag_weights: { politics: 2, business: 1 } },
      ],
    },
    {
      id: 'news-2',
      text: 'You have 10 minutes to kill. What do you scroll through?',
      type: 'single',
      options: [
        { id: 'news-2a', text: 'Sports highlights and game recaps', tag_weights: { sports: 2, entertainment: 1 } },
        { id: 'news-2b', text: 'Wellness tips and healthy recipes', tag_weights: { health: 2, food: 1 } },
      ],
    },
    {
      id: 'news-3',
      text: 'A friend asks for a podcast recommendation. You suggest one about:',
      type: 'single',
      options: [
        { id: 'news-3a', text: 'The global economy and market trends', tag_weights: { business: 2, politics: 1 } },
        { id: 'news-3b', text: 'Pop culture, movies, and celebrity interviews', tag_weights: { entertainment: 2, culture: 1 } },
      ],
    },
    {
      id: 'news-4',
      text: 'Which long-read would you bookmark for later?',
      type: 'single',
      options: [
        { id: 'news-4a', text: 'How climate science is reshaping energy policy', tag_weights: { science: 2, politics: 1 } },
        { id: 'news-4b', text: 'The rise of street food culture across America', tag_weights: { food: 2, lifestyle: 1 } },
      ],
    },
    {
      id: 'news-5',
      text: 'You\'re sharing a story in the group chat. It\'s probably about:',
      type: 'single',
      options: [
        { id: 'news-5a', text: 'A fascinating art exhibit or cultural event', tag_weights: { culture: 2, lifestyle: 1 } },
        { id: 'news-5b', text: 'A new gadget launch or space mission update', tag_weights: { tech: 2, science: 1 } },
      ],
    },
  ],
  results: [],
}
