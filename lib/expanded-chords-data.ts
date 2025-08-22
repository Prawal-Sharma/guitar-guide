import { ChordData } from './chords-data';

export const expandedChordsDatabase: Record<string, ChordData> = {
  // Beginner Major Chords
  C: {
    name: "C Major",
    positions: [
      { string: 2, fret: 3, finger: 3 },
      { string: 4, fret: 2, finger: 2 },
      { string: 5, fret: 1, finger: 1 },
    ],
    openStrings: [1, 3],
    mutedStrings: [6],
    difficulty: 'beginner',
    category: 'major',
    commonIn: ['pop', 'rock', 'folk', 'country']
  },
  D: {
    name: "D Major",
    positions: [
      { string: 1, fret: 2, finger: 2 },
      { string: 2, fret: 3, finger: 3 },
      { string: 3, fret: 2, finger: 1 },
    ],
    openStrings: [4],
    mutedStrings: [5, 6],
    difficulty: 'beginner',
    category: 'major',
    commonIn: ['pop', 'rock', 'folk', 'country']
  },
  G: {
    name: "G Major",
    positions: [
      { string: 1, fret: 3, finger: 3 },
      { string: 5, fret: 2, finger: 2 },
      { string: 6, fret: 3, finger: 4 },
    ],
    openStrings: [2, 3, 4],
    mutedStrings: [],
    difficulty: 'beginner',
    category: 'major',
    commonIn: ['pop', 'rock', 'folk', 'country', 'blues']
  },
  E: {
    name: "E Major",
    positions: [
      { string: 3, fret: 1, finger: 1 },
      { string: 4, fret: 2, finger: 3 },
      { string: 5, fret: 2, finger: 2 },
    ],
    openStrings: [1, 2, 6],
    mutedStrings: [],
    difficulty: 'beginner',
    category: 'major',
    commonIn: ['rock', 'blues', 'pop']
  },
  A: {
    name: "A Major",
    positions: [
      { string: 2, fret: 2, finger: 3 },
      { string: 3, fret: 2, finger: 2 },
      { string: 4, fret: 2, finger: 1 },
    ],
    openStrings: [1, 5],
    mutedStrings: [6],
    difficulty: 'beginner',
    category: 'major',
    commonIn: ['pop', 'rock', 'folk', 'country']
  },

  // Beginner Minor Chords
  Em: {
    name: "E Minor",
    positions: [
      { string: 4, fret: 2, finger: 3 },
      { string: 5, fret: 2, finger: 2 },
    ],
    openStrings: [1, 2, 3, 6],
    mutedStrings: [],
    difficulty: 'beginner',
    category: 'minor',
    commonIn: ['rock', 'pop', 'folk', 'metal']
  },
  Am: {
    name: "A Minor",
    positions: [
      { string: 2, fret: 1, finger: 1 },
      { string: 3, fret: 2, finger: 3 },
      { string: 4, fret: 2, finger: 2 },
    ],
    openStrings: [1, 5],
    mutedStrings: [6],
    difficulty: 'beginner',
    category: 'minor',
    commonIn: ['pop', 'rock', 'folk', 'classical']
  },
  Dm: {
    name: "D Minor",
    positions: [
      { string: 1, fret: 1, finger: 1 },
      { string: 2, fret: 3, finger: 3 },
      { string: 3, fret: 2, finger: 2 },
    ],
    openStrings: [4],
    mutedStrings: [5, 6],
    difficulty: 'beginner',
    category: 'minor',
    commonIn: ['pop', 'rock', 'folk', 'classical']
  },

  // Intermediate Barre Chords
  F: {
    name: "F Major",
    positions: [
      { string: 1, fret: 1, finger: 1 },
      { string: 2, fret: 1, finger: 1 },
      { string: 3, fret: 2, finger: 2 },
      { string: 4, fret: 3, finger: 4 },
      { string: 5, fret: 3, finger: 3 },
      { string: 6, fret: 1, finger: 1 },
    ],
    barres: [{ fret: 1, strings: [1, 6] as [number, number] }],
    openStrings: [],
    mutedStrings: [],
    difficulty: 'intermediate',
    category: 'major',
    commonIn: ['pop', 'rock', 'jazz']
  },
  B: {
    name: "B Major",
    positions: [
      { string: 1, fret: 2, finger: 1 },
      { string: 2, fret: 4, finger: 3 },
      { string: 3, fret: 4, finger: 4 },
      { string: 4, fret: 4, finger: 2 },
      { string: 5, fret: 2, finger: 1 },
    ],
    barres: [{ fret: 2, strings: [1, 5] as [number, number] }],
    openStrings: [],
    mutedStrings: [6],
    difficulty: 'intermediate',
    category: 'major',
    commonIn: ['rock', 'pop']
  },
  Bm: {
    name: "B Minor",
    positions: [
      { string: 1, fret: 2, finger: 1 },
      { string: 2, fret: 3, finger: 2 },
      { string: 3, fret: 4, finger: 4 },
      { string: 4, fret: 4, finger: 3 },
      { string: 5, fret: 2, finger: 1 },
    ],
    barres: [{ fret: 2, strings: [1, 5] as [number, number] }],
    openStrings: [],
    mutedStrings: [6],
    difficulty: 'intermediate',
    category: 'minor',
    commonIn: ['rock', 'pop', 'folk']
  },
  Fm: {
    name: "F Minor",
    positions: [
      { string: 1, fret: 1, finger: 1 },
      { string: 2, fret: 1, finger: 1 },
      { string: 3, fret: 1, finger: 1 },
      { string: 4, fret: 3, finger: 3 },
      { string: 5, fret: 3, finger: 4 },
      { string: 6, fret: 1, finger: 1 },
    ],
    barres: [{ fret: 1, strings: [1, 6] as [number, number] }],
    openStrings: [],
    mutedStrings: [],
    difficulty: 'intermediate',
    category: 'minor',
    commonIn: ['jazz', 'R&B', 'soul']
  },
  "F#m": {
    name: "F# Minor",
    positions: [
      { string: 1, fret: 2, finger: 1 },
      { string: 2, fret: 2, finger: 1 },
      { string: 3, fret: 2, finger: 1 },
      { string: 4, fret: 4, finger: 3 },
      { string: 5, fret: 4, finger: 4 },
      { string: 6, fret: 2, finger: 1 },
    ],
    barres: [{ fret: 2, strings: [1, 6] as [number, number] }],
    openStrings: [],
    mutedStrings: [],
    difficulty: 'intermediate',
    category: 'minor',
    commonIn: ['rock', 'pop', 'indie']
  },
  Cm: {
    name: "C Minor",
    positions: [
      { string: 1, fret: 3, finger: 1 },
      { string: 2, fret: 4, finger: 2 },
      { string: 3, fret: 5, finger: 4 },
      { string: 4, fret: 5, finger: 3 },
      { string: 5, fret: 3, finger: 1 },
    ],
    barres: [{ fret: 3, strings: [1, 5] as [number, number] }],
    openStrings: [],
    mutedStrings: [6],
    difficulty: 'intermediate',
    category: 'minor',
    commonIn: ['jazz', 'blues', 'R&B']
  },
  Gm: {
    name: "G Minor",
    positions: [
      { string: 1, fret: 3, finger: 1 },
      { string: 2, fret: 3, finger: 1 },
      { string: 3, fret: 3, finger: 1 },
      { string: 4, fret: 5, finger: 3 },
      { string: 5, fret: 5, finger: 4 },
      { string: 6, fret: 3, finger: 1 },
    ],
    barres: [{ fret: 3, strings: [1, 6] as [number, number] }],
    openStrings: [],
    mutedStrings: [],
    difficulty: 'intermediate',
    category: 'minor',
    commonIn: ['rock', 'blues', 'jazz']
  },

  // 7th Chords
  G7: {
    name: "G7",
    positions: [
      { string: 1, fret: 1, finger: 1 },
      { string: 5, fret: 2, finger: 2 },
      { string: 6, fret: 3, finger: 3 },
    ],
    openStrings: [2, 3, 4],
    mutedStrings: [],
    difficulty: 'beginner',
    category: '7th',
    commonIn: ['blues', 'jazz', 'country']
  },
  C7: {
    name: "C7",
    positions: [
      { string: 2, fret: 3, finger: 3 },
      { string: 3, fret: 3, finger: 4 },
      { string: 4, fret: 2, finger: 2 },
      { string: 5, fret: 1, finger: 1 },
    ],
    openStrings: [1],
    mutedStrings: [6],
    difficulty: 'beginner',
    category: '7th',
    commonIn: ['blues', 'jazz', 'rock']
  },
  D7: {
    name: "D7",
    positions: [
      { string: 1, fret: 2, finger: 2 },
      { string: 2, fret: 1, finger: 1 },
      { string: 3, fret: 2, finger: 3 },
    ],
    openStrings: [4],
    mutedStrings: [5, 6],
    difficulty: 'beginner',
    category: '7th',
    commonIn: ['blues', 'jazz', 'folk']
  },
  A7: {
    name: "A7",
    positions: [
      { string: 2, fret: 2, finger: 2 },
      { string: 4, fret: 2, finger: 1 },
    ],
    openStrings: [1, 3, 5],
    mutedStrings: [6],
    difficulty: 'beginner',
    category: '7th',
    commonIn: ['blues', 'jazz', 'rock']
  },
  E7: {
    name: "E7",
    positions: [
      { string: 3, fret: 1, finger: 1 },
      { string: 5, fret: 2, finger: 2 },
    ],
    openStrings: [1, 2, 4, 6],
    mutedStrings: [],
    difficulty: 'beginner',
    category: '7th',
    commonIn: ['blues', 'rock', 'country']
  },
  B7: {
    name: "B7",
    positions: [
      { string: 1, fret: 2, finger: 2 },
      { string: 3, fret: 2, finger: 3 },
      { string: 4, fret: 1, finger: 1 },
      { string: 5, fret: 2, finger: 4 },
    ],
    openStrings: [2],
    mutedStrings: [6],
    difficulty: 'intermediate',
    category: '7th',
    commonIn: ['blues', 'jazz', 'rock']
  },

  // Major 7th Chords
  Cmaj7: {
    name: "Cmaj7",
    positions: [
      { string: 4, fret: 2, finger: 2 },
      { string: 5, fret: 3, finger: 3 },
    ],
    openStrings: [1, 2, 3],
    mutedStrings: [6],
    difficulty: 'intermediate',
    category: 'maj7',
    commonIn: ['jazz', 'R&B', 'neo-soul']
  },
  Gmaj7: {
    name: "Gmaj7",
    positions: [
      { string: 1, fret: 2, finger: 2 },
      { string: 5, fret: 2, finger: 1 },
      { string: 6, fret: 3, finger: 3 },
    ],
    openStrings: [2, 3, 4],
    mutedStrings: [],
    difficulty: 'intermediate',
    category: 'maj7',
    commonIn: ['jazz', 'R&B', 'pop']
  },
  Dmaj7: {
    name: "Dmaj7",
    positions: [
      { string: 1, fret: 2, finger: 2 },
      { string: 2, fret: 2, finger: 1 },
      { string: 3, fret: 2, finger: 3 },
    ],
    openStrings: [4],
    mutedStrings: [5, 6],
    difficulty: 'intermediate',
    category: 'maj7',
    commonIn: ['jazz', 'pop', 'R&B']
  },
  Amaj7: {
    name: "Amaj7",
    positions: [
      { string: 2, fret: 2, finger: 3 },
      { string: 3, fret: 1, finger: 1 },
      { string: 4, fret: 2, finger: 2 },
    ],
    openStrings: [1, 5],
    mutedStrings: [6],
    difficulty: 'intermediate',
    category: 'maj7',
    commonIn: ['jazz', 'R&B', 'neo-soul']
  },
  Emaj7: {
    name: "Emaj7",
    positions: [
      { string: 3, fret: 1, finger: 1 },
      { string: 4, fret: 1, finger: 2 },
      { string: 5, fret: 2, finger: 3 },
    ],
    openStrings: [1, 2, 6],
    mutedStrings: [],
    difficulty: 'intermediate',
    category: 'maj7',
    commonIn: ['jazz', 'indie', 'R&B']
  },
  Fmaj7: {
    name: "Fmaj7",
    positions: [
      { string: 2, fret: 1, finger: 1 },
      { string: 3, fret: 2, finger: 2 },
      { string: 4, fret: 3, finger: 3 },
    ],
    openStrings: [1],
    mutedStrings: [5, 6],
    difficulty: 'intermediate',
    category: 'maj7',
    commonIn: ['jazz', 'pop', 'folk']
  },

  // Minor 7th Chords
  Am7: {
    name: "Am7",
    positions: [
      { string: 2, fret: 1, finger: 1 },
      { string: 4, fret: 2, finger: 2 },
    ],
    openStrings: [1, 3, 5],
    mutedStrings: [6],
    difficulty: 'beginner',
    category: 'min7',
    commonIn: ['jazz', 'R&B', 'pop']
  },
  Em7: {
    name: "Em7",
    positions: [
      { string: 4, fret: 2, finger: 1 },
      { string: 5, fret: 2, finger: 2 },
    ],
    openStrings: [1, 2, 3, 6],
    mutedStrings: [],
    difficulty: 'beginner',
    category: 'min7',
    commonIn: ['jazz', 'R&B', 'pop']
  },
  Dm7: {
    name: "Dm7",
    positions: [
      { string: 1, fret: 1, finger: 1 },
      { string: 2, fret: 1, finger: 1 },
      { string: 3, fret: 2, finger: 2 },
    ],
    barres: [{ fret: 1, strings: [1, 2] as [number, number] }],
    openStrings: [4],
    mutedStrings: [5, 6],
    difficulty: 'intermediate',
    category: 'min7',
    commonIn: ['jazz', 'R&B', 'pop']
  },
  Bm7: {
    name: "Bm7",
    positions: [
      { string: 1, fret: 2, finger: 1 },
      { string: 2, fret: 3, finger: 2 },
      { string: 3, fret: 2, finger: 1 },
      { string: 4, fret: 4, finger: 3 },
      { string: 5, fret: 2, finger: 1 },
    ],
    barres: [{ fret: 2, strings: [1, 5] as [number, number] }],
    openStrings: [],
    mutedStrings: [6],
    difficulty: 'intermediate',
    category: 'min7',
    commonIn: ['jazz', 'R&B', 'funk']
  },
  "F#m7": {
    name: "F#m7",
    positions: [
      { string: 1, fret: 2, finger: 1 },
      { string: 2, fret: 2, finger: 1 },
      { string: 3, fret: 2, finger: 1 },
      { string: 4, fret: 2, finger: 1 },
      { string: 5, fret: 4, finger: 3 },
      { string: 6, fret: 2, finger: 1 },
    ],
    barres: [{ fret: 2, strings: [1, 6] as [number, number] }],
    openStrings: [],
    mutedStrings: [],
    difficulty: 'intermediate',
    category: 'min7',
    commonIn: ['jazz', 'R&B', 'pop']
  },
  Gm7: {
    name: "Gm7",
    positions: [
      { string: 1, fret: 3, finger: 1 },
      { string: 2, fret: 3, finger: 1 },
      { string: 3, fret: 3, finger: 1 },
      { string: 4, fret: 3, finger: 1 },
      { string: 5, fret: 5, finger: 3 },
      { string: 6, fret: 3, finger: 1 },
    ],
    barres: [{ fret: 3, strings: [1, 6] as [number, number] }],
    openStrings: [],
    mutedStrings: [],
    difficulty: 'intermediate',
    category: 'min7',
    commonIn: ['jazz', 'funk', 'R&B']
  },

  // Sus Chords
  Gsus4: {
    name: "Gsus4",
    positions: [
      { string: 1, fret: 3, finger: 3 },
      { string: 2, fret: 1, finger: 1 },
      { string: 5, fret: 3, finger: 2 },
      { string: 6, fret: 3, finger: 4 },
    ],
    openStrings: [3, 4],
    mutedStrings: [],
    difficulty: 'intermediate',
    category: 'sus',
    commonIn: ['rock', 'pop', 'folk']
  },
  Dsus4: {
    name: "Dsus4",
    positions: [
      { string: 1, fret: 3, finger: 3 },
      { string: 2, fret: 3, finger: 2 },
      { string: 3, fret: 2, finger: 1 },
    ],
    openStrings: [4],
    mutedStrings: [5, 6],
    difficulty: 'beginner',
    category: 'sus',
    commonIn: ['rock', 'pop', 'folk']
  },
  Dsus2: {
    name: "Dsus2",
    positions: [
      { string: 2, fret: 3, finger: 2 },
      { string: 3, fret: 2, finger: 1 },
    ],
    openStrings: [1, 4],
    mutedStrings: [5, 6],
    difficulty: 'beginner',
    category: 'sus',
    commonIn: ['rock', 'pop', 'indie']
  },
  Asus2: {
    name: "Asus2",
    positions: [
      { string: 3, fret: 2, finger: 2 },
      { string: 4, fret: 2, finger: 1 },
    ],
    openStrings: [1, 2, 5],
    mutedStrings: [6],
    difficulty: 'beginner',
    category: 'sus',
    commonIn: ['rock', 'pop', 'indie']
  },
  Asus4: {
    name: "Asus4",
    positions: [
      { string: 2, fret: 3, finger: 3 },
      { string: 3, fret: 2, finger: 2 },
      { string: 4, fret: 2, finger: 1 },
    ],
    openStrings: [1, 5],
    mutedStrings: [6],
    difficulty: 'beginner',
    category: 'sus',
    commonIn: ['rock', 'pop', 'folk']
  },
  Esus4: {
    name: "Esus4",
    positions: [
      { string: 3, fret: 2, finger: 2 },
      { string: 4, fret: 2, finger: 3 },
      { string: 5, fret: 2, finger: 1 },
    ],
    openStrings: [1, 2, 6],
    mutedStrings: [],
    difficulty: 'beginner',
    category: 'sus',
    commonIn: ['rock', 'pop', 'folk']
  },

  // Add Chords
  Cadd9: {
    name: "Cadd9",
    positions: [
      { string: 2, fret: 3, finger: 3 },
      { string: 3, fret: 2, finger: 1 },
      { string: 4, fret: 3, finger: 2 },
      { string: 5, fret: 3, finger: 4 },
    ],
    openStrings: [1],
    mutedStrings: [6],
    difficulty: 'intermediate',
    category: 'add',
    commonIn: ['pop', 'rock', 'indie']
  },
  Gadd9: {
    name: "Gadd9",
    positions: [
      { string: 2, fret: 3, finger: 3 },
      { string: 5, fret: 2, finger: 1 },
      { string: 6, fret: 3, finger: 2 },
    ],
    openStrings: [1, 3, 4],
    mutedStrings: [],
    difficulty: 'beginner',
    category: 'add',
    commonIn: ['pop', 'rock', 'indie']
  },
  Dadd9: {
    name: "Dadd9",
    positions: [
      { string: 1, fret: 2, finger: 2 },
      { string: 2, fret: 3, finger: 3 },
      { string: 3, fret: 2, finger: 1 },
    ],
    openStrings: [4],
    mutedStrings: [5, 6],
    difficulty: 'beginner',
    category: 'add',
    commonIn: ['pop', 'rock', 'indie']
  },

  // Power Chords
  "G5": {
    name: "G5 (Power)",
    positions: [
      { string: 5, fret: 3, finger: 1 },
      { string: 6, fret: 3, finger: 1 },
      { string: 4, fret: 5, finger: 3 },
    ],
    barres: [{ fret: 3, strings: [5, 6] as [number, number] }],
    openStrings: [],
    mutedStrings: [1, 2, 3],
    difficulty: 'intermediate',
    category: 'power',
    commonIn: ['rock', 'metal', 'punk']
  },
  "A5": {
    name: "A5 (Power)",
    positions: [
      { string: 4, fret: 2, finger: 1 },
      { string: 5, fret: 2, finger: 1 },
      { string: 3, fret: 4, finger: 3 },
    ],
    barres: [{ fret: 2, strings: [4, 5] as [number, number] }],
    openStrings: [],
    mutedStrings: [1, 2, 6],
    difficulty: 'intermediate',
    category: 'power',
    commonIn: ['rock', 'metal', 'punk']
  },
  "D5": {
    name: "D5 (Power)",
    positions: [
      { string: 3, fret: 2, finger: 1 },
      { string: 4, fret: 2, finger: 1 },
      { string: 2, fret: 4, finger: 3 },
    ],
    barres: [{ fret: 2, strings: [3, 4] as [number, number] }],
    openStrings: [],
    mutedStrings: [1, 5, 6],
    difficulty: 'intermediate',
    category: 'power',
    commonIn: ['rock', 'metal', 'punk']
  },
  "E5": {
    name: "E5 (Power)",
    positions: [
      { string: 5, fret: 2, finger: 1 },
      { string: 4, fret: 2, finger: 2 },
    ],
    openStrings: [6],
    mutedStrings: [1, 2, 3],
    difficulty: 'beginner',
    category: 'power',
    commonIn: ['rock', 'metal', 'punk']
  },
  "C5": {
    name: "C5 (Power)",
    positions: [
      { string: 4, fret: 5, finger: 3 },
      { string: 5, fret: 3, finger: 1 },
      { string: 3, fret: 5, finger: 4 },
    ],
    openStrings: [],
    mutedStrings: [1, 2, 6],
    difficulty: 'intermediate',
    category: 'power',
    commonIn: ['rock', 'metal', 'punk']
  },

  // Diminished Chords
  "Bdim": {
    name: "B Diminished",
    positions: [
      { string: 1, fret: 1, finger: 1 },
      { string: 2, fret: 3, finger: 3 },
      { string: 3, fret: 1, finger: 2 },
      { string: 4, fret: 3, finger: 4 },
    ],
    openStrings: [],
    mutedStrings: [5, 6],
    difficulty: 'advanced',
    category: 'dim',
    commonIn: ['jazz', 'classical']
  },
  "Cdim": {
    name: "C Diminished",
    positions: [
      { string: 1, fret: 2, finger: 1 },
      { string: 2, fret: 4, finger: 3 },
      { string: 3, fret: 2, finger: 2 },
      { string: 4, fret: 4, finger: 4 },
    ],
    openStrings: [],
    mutedStrings: [5, 6],
    difficulty: 'advanced',
    category: 'dim',
    commonIn: ['jazz', 'classical']
  },

  // Augmented Chords
  "Caug": {
    name: "C Augmented",
    positions: [
      { string: 2, fret: 1, finger: 1 },
      { string: 3, fret: 1, finger: 2 },
      { string: 4, fret: 2, finger: 3 },
      { string: 5, fret: 3, finger: 4 },
    ],
    openStrings: [1],
    mutedStrings: [6],
    difficulty: 'advanced',
    category: 'aug',
    commonIn: ['jazz', 'experimental']
  },
  "Gaug": {
    name: "G Augmented",
    positions: [
      { string: 1, fret: 3, finger: 3 },
      { string: 2, fret: 2, finger: 2 },
      { string: 3, fret: 1, finger: 1 },
      { string: 6, fret: 3, finger: 4 },
    ],
    openStrings: [4],
    mutedStrings: [5],
    difficulty: 'advanced',
    category: 'aug',
    commonIn: ['jazz', 'experimental']
  },

  // 9th Chords
  "C9": {
    name: "C9",
    positions: [
      { string: 2, fret: 3, finger: 2 },
      { string: 3, fret: 3, finger: 3 },
      { string: 4, fret: 2, finger: 1 },
      { string: 5, fret: 3, finger: 4 },
    ],
    openStrings: [1],
    mutedStrings: [6],
    difficulty: 'advanced',
    category: '9th',
    commonIn: ['jazz', 'funk', 'R&B']
  },
  "G9": {
    name: "G9",
    positions: [
      { string: 1, fret: 3, finger: 3 },
      { string: 2, fret: 3, finger: 3 },
      { string: 3, fret: 2, finger: 2 },
      { string: 6, fret: 3, finger: 3 },
    ],
    barres: [{ fret: 3, strings: [1, 6] as [number, number] }],
    openStrings: [4, 5],
    mutedStrings: [],
    difficulty: 'advanced',
    category: '9th',
    commonIn: ['jazz', 'funk', 'blues']
  },
  "D9": {
    name: "D9",
    positions: [
      { string: 1, fret: 2, finger: 2 },
      { string: 2, fret: 1, finger: 1 },
      { string: 3, fret: 2, finger: 3 },
      { string: 4, fret: 2, finger: 4 },
    ],
    openStrings: [],
    mutedStrings: [5, 6],
    difficulty: 'advanced',
    category: '9th',
    commonIn: ['jazz', 'funk', 'R&B']
  },

  // 11th Chords
  "Am11": {
    name: "Am11",
    positions: [
      { string: 5, fret: 5, finger: 1 },
    ],
    openStrings: [1, 2, 3, 4],
    mutedStrings: [6],
    difficulty: 'advanced',
    category: '11th',
    commonIn: ['jazz', 'fusion']
  },
  "Dm11": {
    name: "Dm11",
    positions: [
      { string: 1, fret: 1, finger: 1 },
      { string: 2, fret: 1, finger: 1 },
      { string: 3, fret: 2, finger: 2 },
    ],
    barres: [{ fret: 1, strings: [1, 2] as [number, number] }],
    openStrings: [4, 5],
    mutedStrings: [6],
    difficulty: 'advanced',
    category: '11th',
    commonIn: ['jazz', 'fusion']
  },

  // 13th Chords
  "G13": {
    name: "G13",
    positions: [
      { string: 1, fret: 3, finger: 3 },
      { string: 2, fret: 3, finger: 3 },
      { string: 3, fret: 2, finger: 2 },
      { string: 4, fret: 3, finger: 3 },
      { string: 5, fret: 2, finger: 1 },
      { string: 6, fret: 3, finger: 3 },
    ],
    barres: [{ fret: 3, strings: [1, 6] as [number, number] }],
    openStrings: [],
    mutedStrings: [],
    difficulty: 'advanced',
    category: '13th',
    commonIn: ['jazz', 'fusion']
  }
};

export function getChordsByDifficulty(difficulty: 'beginner' | 'intermediate' | 'advanced'): string[] {
  return Object.entries(expandedChordsDatabase)
    .filter(([_, chord]) => chord.difficulty === difficulty)
    .map(([name, _]) => name);
}

export function getChordsByCategory(category: ChordData['category']): string[] {
  return Object.entries(expandedChordsDatabase)
    .filter(([_, chord]) => chord.category === category)
    .map(([name, _]) => name);
}

export function searchChords(query: string): string[] {
  const lowercaseQuery = query.toLowerCase();
  return Object.entries(expandedChordsDatabase)
    .filter(([name, chord]) => 
      name.toLowerCase().includes(lowercaseQuery) ||
      chord.name.toLowerCase().includes(lowercaseQuery) ||
      chord.commonIn?.some(genre => genre.toLowerCase().includes(lowercaseQuery))
    )
    .map(([name, _]) => name);
}