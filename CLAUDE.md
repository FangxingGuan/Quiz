# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

NewsBreak interactive quiz product — a quiz system integrated into the NewsBreak news app that drives user engagement, social sharing, and user profiling for recommendation optimization.

The PRD is in `NewsBreak_Quiz_PRD.md` (Chinese). Key user flow: Entry → Quiz intro → Questions (5-10, <2 min) → Result page (with 3-5 related news + share button) → Share → Tag data stored to user profile.

## Architecture

Three-layer system:

1. **Frontend**: Quiz entry → Question page → Result page → Share component
2. **Business Logic**: Question bank management, scoring engine, result generation, share tracking
3. **Data Layer**: Question bank DB, user answer records, tag system, recommendation engine integration

### Core Data Models

- **Quiz**: Contains questions (single/multi/scale types), each option has `tag_weights` contributing to user tags. Results have trigger conditions (score ranges/tag matching) and associated news recommendation tags.
- **UserQuizRecord**: Stores user answers, matched result, share status, and generated tags.
- **UserProfile extension**: Accumulated interest/personality tags with weights, quiz history.

### Key Technical Decisions

- Share poster generation: server-side Canvas rendering or frontend html2canvas
- Share tracking: unique short links + UTM parameters
- Tag persistence: async message queue → user profile service
- Question bank: CMS-managed with dynamic enable/disable
- A/B testing support for question/result variants

## Priority Phases

- **P0** (weeks 1-3): MBTI, News Preference, Love Style, Content Tags — validate full pipeline
- **P1** (weeks 4-6): Movie Character, Horoscope, Stress Index, Trending Topics, Weekend Type, Celebrity Match
- **P2** (weeks 7-10): Big Five, Decision Style, Confidence, Book/Music recommendations, Brain Games
- **P3** (weeks 11-14): Friend Comparison, 7-day Challenge, Social Style, AI Avatar Generation
