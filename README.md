# Guitar Guide

A comprehensive, interactive web application for learning guitar from scratch. Built with modern web technologies to provide an engaging and effective learning experience.

## Features

### 🎸 Interactive Learning Path
- Step-by-step curriculum based on proven guitar learning methodologies
- Progress tracking with visual indicators
- Structured lessons from beginner to intermediate

### 🎵 Chord Library
- Interactive chord diagrams for 8 essential open chords (C, D, G, E, A, Em, Am, Dm)
- Audio playback for each chord
- Finger position animations
- Practice mode with chord transitions

### 📜 Tab Reader
- Visual tablature display with synchronized playback
- Speed control for practice
- Library of popular beginner songs
- Real-time tab-to-audio synchronization

### 🛠️ Practice Tools
- **Metronome**: Interactive with visual feedback
- **Guitar Tuner**: Built using Web Audio API
- **Daily Practice Tracker**: Monitor your progress
- **Technique Exercises**: Master hammer-ons, pull-offs, and more

### 📚 Music Theory
- Visual fretboard with note identification
- Interactive scales and patterns
- Chord progression builder
- Theory basics explained visually

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with shadcn/ui components
- **Animation**: Framer Motion
- **Audio**: Tone.js for interactive guitar sounds
- **State Management**: Zustand for progress tracking
- **Deployment**: Vercel

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Prawal-Sharma/guitar-guide.git

# Navigate to project directory
cd guitar-guide

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
guitar-guide/
├── app/                # Next.js app directory
│   ├── layout.tsx     # Root layout
│   ├── page.tsx       # Home page
│   └── globals.css    # Global styles
├── components/        # React components
│   ├── chords/       # Chord-related components
│   ├── tabs/         # Tab reader components
│   ├── tools/        # Practice tools
│   └── ui/           # UI components
├── lib/              # Utility functions
├── public/           # Static assets
└── docs/            # Documentation
```

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run typecheck` - Check TypeScript types

### Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Deployment

This project is configured for automatic deployment on Vercel. Simply connect your GitHub repository to Vercel for continuous deployment.

## Learning Path Structure

The application follows a structured learning approach:

1. **Foundation** (Weeks 1-2)
   - Guitar anatomy and tuning
   - Proper posture and hand positioning
   - First chord and strumming patterns

2. **Essential Chords** (Weeks 3-4)
   - Open chords (C, D, G, E, A, Em, Am, Dm)
   - Chord transitions
   - Simple progressions

3. **Reading Music** (Weeks 5-6)
   - Introduction to tablature
   - Rhythm notation
   - First songs

4. **Techniques** (Weeks 7-8)
   - Hammer-ons and pull-offs
   - Slides and bends
   - Fingerpicking basics

5. **Song Practice** (Ongoing)
   - Popular beginner songs
   - Progressive difficulty
   - Play-along features

## License

MIT License - feel free to use this project for learning and educational purposes.

## Acknowledgments

- Guitar learning methodology based on research from leading music education platforms
- UI/UX inspired by modern music learning applications
- Community feedback and contributions