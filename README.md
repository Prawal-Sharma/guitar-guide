# 🎸 Guitar Guide - Learn Guitar Step by Step

A comprehensive, interactive web application for learning guitar from beginner to advanced levels. Built with Next.js, TypeScript, and modern web technologies.

![Guitar Guide](https://img.shields.io/badge/Guitar-Guide-blue)
![Next.js](https://img.shields.io/badge/Next.js-15.5-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC)

## 🌟 Features

### 📚 Comprehensive Learning System
- **15+ Structured Lessons**: Complete curriculum from beginner to advanced
- **10-Week Learning Path**: Progressive lessons organized by difficulty
- **Interactive Content**: Step-by-step instructions with practice exercises
- **Real-time Progress Tracking**: Monitor your learning journey

### 🎵 Extensive Chord Library
- **60+ Guitar Chords**: From basic open chords to advanced jazz chords
- **Interactive Chord Diagrams**: Visual representation with finger positions
- **Difficulty Levels**: Organized by beginner, intermediate, and advanced
- **Audio Playback**: Hear how each chord sounds
- **Smart Search & Filtering**: Find chords by name, category, or difficulty

### 🎯 Practice Tools
- **Metronome**: Adjustable tempo with visual and audio feedback
- **Guitar Tuner**: Tune your guitar using microphone input
- **Chord Progression Practice**: Learn common progressions with tempo control
- **Practice Exercises**: Structured exercises with difficulty ratings

### 🎼 Music Theory
- **Interactive Theory Modules**: Learn scales, intervals, and chord construction
- **Visual Learning**: Expandable content with practical examples
- **Applied Theory**: Connect theory to practical playing

### 📊 Progress Tracking
- **Skill Monitoring**: Track progress across different skill areas
- **Achievement System**: Earn badges and celebrate milestones
- **Practice History**: Visual representation of practice consistency
- **Personalized Dashboard**: See your learning statistics at a glance

### ⚙️ User Experience
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- **Dark Theme**: Easy on the eyes during long practice sessions
- **Accessibility**: ARIA labels and keyboard navigation support
- **Settings & Preferences**: Customize your learning experience
- **Offline Support**: PWA capabilities for practicing anywhere

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/guitar-guide.git
cd guitar-guide
```

2. Install dependencies:
```bash
npm install
```

3. Create environment variables:
```bash
cp .env.example .env.local
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## 📖 Curriculum Overview

### Week 1-2: Foundation
- Guitar anatomy and proper posture
- First chords (G, C, D)
- Basic strumming patterns
- Tuning your guitar

### Week 3-4: Essential Chords
- Minor chords (Em, Am, Dm)
- Your first barre chord (F)
- 7th chords for blues and jazz
- Chord transitions

### Week 5-6: Reading Music
- Understanding tablature
- Fingerpicking basics
- Introduction to music notation

### Week 7-8: Techniques
- Hammer-ons and pull-offs
- Bending and vibrato
- Introduction to scales
- Pentatonic patterns

### Week 9+: Advanced
- Barre chord mastery
- Music theory fundamentals
- Advanced chord types
- Improvisation techniques

## 🎸 Chord Categories

- **Major Chords**: C, D, E, F, G, A, B
- **Minor Chords**: Am, Bm, Cm, Dm, Em, Fm, Gm, F#m
- **7th Chords**: C7, D7, E7, G7, A7, B7
- **Major 7th**: Cmaj7, Dmaj7, Emaj7, Fmaj7, Gmaj7, Amaj7
- **Minor 7th**: Am7, Bm7, Dm7, Em7, F#m7, Gm7
- **Sus Chords**: Dsus2, Dsus4, Asus2, Asus4, Gsus4, Esus4
- **Add Chords**: Cadd9, Gadd9, Dadd9
- **Power Chords**: G5, A5, C5, D5, E5
- **Extended**: 9th, 11th, and 13th chords
- **Diminished & Augmented**: Advanced harmonic colors

## 🛠️ Tech Stack

- **Frontend**: Next.js 15.5, React 19, TypeScript
- **Styling**: Tailwind CSS, Framer Motion
- **Audio**: Tone.js for sound synthesis
- **State Management**: Zustand
- **Icons**: Lucide React
- **Build Tools**: PostCSS, Autoprefixer

## 📁 Project Structure

```
guitar-guide/
├── app/                    # Next.js app directory
│   ├── chords/            # Chord library page
│   ├── learn/             # Lessons and curriculum
│   │   └── [id]/          # Individual lesson pages
│   ├── practice/          # Practice tools
│   │   ├── metronome/     # Metronome tool
│   │   ├── tuner/         # Guitar tuner
│   │   ├── exercises/     # Practice exercises
│   │   └── progression/   # Chord progression practice
│   ├── progress/          # Progress tracking
│   ├── settings/          # User preferences
│   ├── tabs/              # Tab library
│   └── theory/            # Music theory
├── components/            # React components
│   ├── chords/           # Chord-related components
│   ├── layout/           # Layout components
│   └── ui/               # UI components
├── lib/                   # Utilities and data
│   ├── audio/            # Audio synthesis
│   ├── chords-data.ts    # Chord database
│   ├── expanded-chords-data.ts # Extended chord library
│   └── lessons-data.ts   # Lesson content
└── public/               # Static assets
```

## 🎯 Key Features Implementation

### Interactive Chord Diagrams
- SVG-based visualization
- Finger position indicators
- Open and muted string markers
- Barre chord support

### Audio System
- Real-time chord playback using Tone.js
- Adjustable volume and tempo
- Metronome with visual feedback
- Guitar tuner with pitch detection

### Progress Persistence
- LocalStorage for settings
- Progress tracking across sessions
- Customizable user preferences

### Responsive Design
- Mobile-first approach
- Touch-friendly interfaces
- Adaptive layouts for all screen sizes

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file with:

```env
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_APP_NAME="Guitar Guide"
NEXT_PUBLIC_ENABLE_ANALYTICS=false
NEXT_PUBLIC_ENABLE_PWA=true
NEXT_PUBLIC_ENABLE_NOTIFICATIONS=false
NEXT_PUBLIC_DEBUG_MODE=true
```

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run typecheck` - Check TypeScript types

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Guitar chord fingering data and music theory content
- Tone.js for audio synthesis
- Next.js team for the amazing framework
- All contributors and guitar enthusiasts

## 📧 Contact

For questions or feedback, please open an issue on GitHub.

---

Built with ❤️ for guitar learners everywhere