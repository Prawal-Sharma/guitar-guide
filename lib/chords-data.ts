export interface ChordPosition {
  string: number;
  fret: number;
  finger?: number;
}

export interface ChordData {
  name: string;
  positions: ChordPosition[];
  barres?: { fret: number; strings: [number, number] }[];
  openStrings: number[];
  mutedStrings: number[];
}

export const chordsDatabase: Record<string, ChordData> = {
  // Major Chords
  C: {
    name: "C Major",
    positions: [
      { string: 2, fret: 3, finger: 3 },
      { string: 4, fret: 2, finger: 2 },
      { string: 5, fret: 1, finger: 1 },
    ],
    openStrings: [1, 3],
    mutedStrings: [6],
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
  },
  F: {
    name: "F Major",
    positions: [
      { string: 1, fret: 1, finger: 1 },
      { string: 2, fret: 1, finger: 1 },
      { string: 3, fret: 2, finger: 2 },
      { string: 4, fret: 3, finger: 4 },
      { string: 5, fret: 3, finger: 3 },
    ],
    barres: [{ fret: 1, strings: [1, 2] as [number, number] }],
    openStrings: [],
    mutedStrings: [6],
  },
  
  // Minor Chords
  Em: {
    name: "E Minor",
    positions: [
      { string: 4, fret: 2, finger: 3 },
      { string: 5, fret: 2, finger: 2 },
    ],
    openStrings: [1, 2, 3, 6],
    mutedStrings: [],
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
  },
  
  // Power Chords (moveable shapes)
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
  },
};

export function getChordByName(name: string): ChordData | undefined {
  return chordsDatabase[name];
}

export function getAllChordNames(): string[] {
  return Object.keys(chordsDatabase);
}