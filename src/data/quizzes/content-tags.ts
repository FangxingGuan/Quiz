import type { Quiz } from '../../types'

export const contentTagsQuiz: Quiz = {
  id: 'content-tags',
  title: 'What\'s Your Content DNA?',
  subtitle: 'Discover your unique content taste',
  description: 'Answer 8 questions about how you consume content and we will decode your unique content DNA. Find out which topics define your digital personality!',
  emoji: '🏷️',
  theme: 'tags',
  duration: '2 min',
  questionCount: 8,
  questions: [
    {
      id: 'tags-1',
      text: 'You open your phone first thing in the morning. What are you checking?',
      type: 'single',
      options: [
        { id: 'tags-1a', text: 'Stock prices and market news', tag_weights: { finance: 2, tech: 1 } },
        { id: 'tags-1b', text: 'Sports scores from last night', tag_weights: { sports: 2, entertainment: 1 } },
        { id: 'tags-1c', text: 'Social media and trending memes', tag_weights: { entertainment: 2, fashion: 1 } },
      ],
    },
    {
      id: 'tags-2',
      text: 'Pick the YouTube rabbit hole you\'d most likely fall into:',
      type: 'single',
      options: [
        { id: 'tags-2a', text: 'Gadget reviews and tech teardowns', tag_weights: { tech: 2, science: 1 } },
        { id: 'tags-2b', text: 'Street food tours and cooking shows', tag_weights: { food: 2, travel: 1 } },
        { id: 'tags-2c', text: 'Workout routines and fitness transformations', tag_weights: { fitness: 2, sports: 1 } },
      ],
    },
    {
      id: 'tags-3',
      text: 'Which topics could you talk about for hours? (Pick all that apply)',
      type: 'multi',
      options: [
        { id: 'tags-3a', text: 'The latest video games and gaming culture', tag_weights: { gaming: 2, tech: 1 } },
        { id: 'tags-3b', text: 'Travel destinations and hidden gems', tag_weights: { travel: 2, photography: 1 } },
        { id: 'tags-3c', text: 'Fashion trends and personal style', tag_weights: { fashion: 2, entertainment: 1 } },
        { id: 'tags-3d', text: 'Politics and current affairs', tag_weights: { politics: 2, finance: 1 } },
      ],
    },
    {
      id: 'tags-4',
      text: 'You\'re at a bookstore. Which section do you gravitate toward?',
      type: 'single',
      options: [
        { id: 'tags-4a', text: 'Science, space, and the natural world', tag_weights: { science: 2, tech: 1 } },
        { id: 'tags-4b', text: 'Cookbooks and food memoirs', tag_weights: { food: 2, travel: 1 } },
        { id: 'tags-4c', text: 'Business, investing, and self-improvement', tag_weights: { finance: 2, politics: 1 } },
      ],
    },
    {
      id: 'tags-5',
      text: 'What kind of content do you share most with friends? (Pick all that apply)',
      type: 'multi',
      options: [
        { id: 'tags-5a', text: 'Stunning travel photos and destination guides', tag_weights: { travel: 2, photography: 2 } },
        { id: 'tags-5b', text: 'Funny clips, memes, and celebrity gossip', tag_weights: { entertainment: 2, fashion: 1 } },
        { id: 'tags-5c', text: 'Mind-blowing science facts or tech news', tag_weights: { science: 2, tech: 2 } },
        { id: 'tags-5d', text: 'Sports highlights and hot takes', tag_weights: { sports: 2, entertainment: 1 } },
      ],
    },
    {
      id: 'tags-6',
      text: 'Your dream weekend project would be:',
      type: 'single',
      options: [
        { id: 'tags-6a', text: 'Building a home automation system or coding a side project', tag_weights: { tech: 2, science: 1 } },
        { id: 'tags-6b', text: 'Trying a new recipe from a different cuisine', tag_weights: { food: 2, travel: 1 } },
        { id: 'tags-6c', text: 'Going on a photo walk and editing your shots', tag_weights: { photography: 2, travel: 1 } },
        { id: 'tags-6d', text: 'Training for a race or trying a new workout', tag_weights: { fitness: 2, sports: 1 } },
      ],
    },
    {
      id: 'tags-7',
      text: 'Which notification would you tap on first?',
      type: 'single',
      options: [
        { id: 'tags-7a', text: '"Breaking: Major political development"', tag_weights: { politics: 2, finance: 1 } },
        { id: 'tags-7b', text: '"New game release drops today"', tag_weights: { gaming: 2, tech: 1 } },
        { id: 'tags-7c', text: '"This season\'s hottest fashion trends revealed"', tag_weights: { fashion: 2, entertainment: 1 } },
      ],
    },
    {
      id: 'tags-8',
      text: 'If you could master one new skill overnight, it would be:',
      type: 'multi',
      options: [
        { id: 'tags-8a', text: 'Professional photography', tag_weights: { photography: 2, travel: 1 } },
        { id: 'tags-8b', text: 'Gourmet cooking', tag_weights: { food: 2, science: 1 } },
        { id: 'tags-8c', text: 'Day trading and investment analysis', tag_weights: { finance: 2, tech: 1 } },
        { id: 'tags-8d', text: 'Competitive gaming at a pro level', tag_weights: { gaming: 2, entertainment: 1 } },
      ],
    },
  ],
  results: [],
}
