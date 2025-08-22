export interface TabSong {
  id: string;
  title: string;
  artist: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  chords: string[];
  plays: string;
  genre: string;
  tempo: number;
  key: string;
  tab: string;
  strummingPattern?: string;
}

export const tabsDatabase: TabSong[] = [
  {
    id: "wonderwall",
    title: "Wonderwall",
    artist: "Oasis",
    difficulty: "Beginner",
    chords: ["Em7", "G", "D", "C", "Cadd9"],
    plays: "125.3k",
    genre: "Rock",
    tempo: 87,
    key: "G Major",
    strummingPattern: "D-D-U-D-U",
    tab: `[Intro]
e|---3---3---3---3---3---3---3---3-|
B|---3---3---3---3---3---3---3---3-|
G|---0---0---0---0---0---0---0---0-|
D|---0---0---0---0---2---2---2---2-|
A|---2---2---2---2---3---3---3---3-|
E|---3---3---3---3-----------------|

[Verse]
Em7       G         D         C
e|---3-------3-------2-------0---|
B|---3-------3-------3-------1---|
G|---0-------0-------2-------0---|
D|---2-------0-------0-------2---|
A|---2-------2---------------3---|
E|---0-------3-------------------|`
  },
  {
    id: "house-rising-sun",
    title: "House of the Rising Sun",
    artist: "The Animals",
    difficulty: "Beginner",
    chords: ["Am", "C", "D", "F", "E"],
    plays: "98.7k",
    genre: "Folk Rock",
    tempo: 120,
    key: "A Minor",
    strummingPattern: "D-U-D-U-D-U",
    tab: `[Intro - Arpeggio Pattern]
    Am              C               D               F
e|-------0---------------0---------------2---------------1-------|
B|-----1---1-----------1---1-----------3---3-----------1---1-----|
G|---2-------2-------0-------0-------2-------2-------2-------2---|
D|-2-----------2---2-----------2---0-----------0---3-----------3-|
A|---------------3-------------------------------3---------------|
E|----------------------------------------------------------------|

    Am              E               Am              E
e|-------0---------------0---------------0---------------0-------|
B|-----1---1-----------0---0-----------1---1-----------0---0-----|
G|---2-------2-------1-------1-------2-------2-------1-------1---|
D|-2-----------2---2-----------2---2-----------2---2-----------2-|
A|----------------------------------------------------------------|
E|---------------0---------------0---------------0---------------|`
  },
  {
    id: "smoke-on-water",
    title: "Smoke on the Water",
    artist: "Deep Purple",
    difficulty: "Beginner",
    chords: ["E5", "G5"],
    plays: "156.2k",
    genre: "Hard Rock",
    tempo: 112,
    key: "G Minor",
    tab: `[Main Riff]
e|-----------------------------------|
B|-----------------------------------|
G|---0---3---5-----0---3---6-5------|
D|---0---3---5-----0---3---6-5------|
A|-----------------------------------|
E|-----------------------------------|

e|-----------------------------------|
B|-----------------------------------|
G|---0---3---5-----3---0-------------|
D|---0---3---5-----3---0-------------|
A|-----------------------------------|
E|-----------------------------------|`
  },
  {
    id: "sweet-child",
    title: "Sweet Child O' Mine",
    artist: "Guns N' Roses",
    difficulty: "Intermediate",
    chords: ["D", "C", "G", "A"],
    plays: "112.4k",
    genre: "Rock",
    tempo: 122,
    key: "D Major",
    tab: `[Intro]
e|----15--14--12--14--15--14--12--14--15--14--12--14--15--14--12--14--|
B|--12--12--12--12--12--12--12--12--13--13--13--13--13--13--13--13----|
G|---------------------------------------------------------------------|
D|---------------------------------------------------------------------|
A|---------------------------------------------------------------------|
E|---------------------------------------------------------------------|

[Verse]
D                           C
She's got a smile that it seems to me
G                           D
Reminds me of childhood memories`
  },
  {
    id: "nothing-else-matters",
    title: "Nothing Else Matters",
    artist: "Metallica",
    difficulty: "Intermediate",
    chords: ["Em", "D", "C", "G", "B7"],
    plays: "143.8k",
    genre: "Metal Ballad",
    tempo: 69,
    key: "E Minor",
    tab: `[Intro]
e|---0---0---0---0---0---0---0---0---|
B|-----0-------0-------0-------0-----|
G|-------0-------0-------0-------0---|
D|-----------------------------------|
A|-----------------------------------|
E|-0-------0-------0-------0---------|

e|---3---3---3---3---2---2---2---2---|
B|-----3-------3-------3-------3-----|
G|-------0-------0-------2-------2---|
D|---------0---------------0---------|
A|-----------------------------------|
E|-3---------------2-----------------|`
  },
  {
    id: "hotel-california",
    title: "Hotel California",
    artist: "Eagles",
    difficulty: "Intermediate",
    chords: ["Am", "E", "G", "D", "F", "C", "Dm"],
    plays: "167.9k",
    genre: "Rock",
    tempo: 75,
    key: "B Minor",
    strummingPattern: "D-U-X-U-D-U",
    tab: `[Intro]
    Am                          E
e|-------0-------0-------0-------0-------0-------0-------0-------|
B|-----1---1---1---1---1---1---0---0---0---0---0---0---0---0-----|
G|---2-------2-------2-------1-------1-------1-------1-------1---|
D|-2-------------------------------2------------------------------|
A|---------------0-------2---------------2-------1-------0-------|
E|----------------------------------------------------------------|`
  },
  {
    id: "stairway-to-heaven",
    title: "Stairway to Heaven",
    artist: "Led Zeppelin",
    difficulty: "Advanced",
    chords: ["Am", "C", "D", "F", "G", "Am7"],
    plays: "189.3k",
    genre: "Rock",
    tempo: 82,
    key: "A Minor",
    tab: `[Intro]
e|-------5-7-----7-8-----8-2-----2-0---------0--------|
B|-----5-----5-------5-------3-------1---1-----1------|
G|---5---------5-------5-------2-------2---------2----|
D|-7-------6-------5-------4-------3------------------|
A|-----------------------------------------------------|
E|-----------------------------------------------------|`
  },
  {
    id: "blackbird",
    title: "Blackbird",
    artist: "The Beatles",
    difficulty: "Advanced",
    chords: ["G", "Am7", "C", "D"],
    plays: "134.5k",
    genre: "Folk Rock",
    tempo: 93,
    key: "G Major",
    tab: `[Intro/Verse]
    G           Am7         G/B         G
e|-----3-0-------1-0-------3-0-------3-0---|
B|---0-----3---1-----3---3-----3---0-----3-|
G|-0---------2---------0---------0---------|
D|------------------------------------------|
A|---------0---------2----------------------|
E|-3-------------------------------3-------|`
  },
  {
    id: "tears-in-heaven",
    title: "Tears in Heaven",
    artist: "Eric Clapton",
    difficulty: "Intermediate",
    chords: ["A", "E", "F#m", "D", "C#m"],
    plays: "121.7k",
    genre: "Soft Rock",
    tempo: 78,
    key: "A Major",
    tab: `[Intro]
A       E/G#    F#m     F#m/E
e|---0-------0-------2-------2---|
B|---2-------0-------2-------2---|
G|---2-------1-------2-------2---|
D|---2-------2-------4-------4---|
A|---0---------------4-------4---|
E|-------4-------2-------0-------|`
  },
  {
    id: "wish-you-were-here",
    title: "Wish You Were Here",
    artist: "Pink Floyd",
    difficulty: "Intermediate",
    chords: ["Em7", "G", "C", "D", "Am"],
    plays: "145.2k",
    genre: "Progressive Rock",
    tempo: 60,
    key: "G Major",
    tab: `[Intro]
Em7              G               Em7              G
e|-------3---------------3---------------3---------------3-------|
B|-----3---3-----------3---3-----------3---3-----------3---3-----|
G|---0-------0-------0-------0-------0-------0-------0-------0---|
D|----------------------------------------------------------------|
A|-2-----------2-2-----------2-2-----------2-2-----------2-------|
E|-0---------------3---------------0---------------3--------------|`
  }
];

export function searchTabs(query: string, difficulty?: string): TabSong[] {
  let results = tabsDatabase;
  
  if (query) {
    const searchTerm = query.toLowerCase();
    results = results.filter(song => 
      song.title.toLowerCase().includes(searchTerm) ||
      song.artist.toLowerCase().includes(searchTerm) ||
      song.genre.toLowerCase().includes(searchTerm) ||
      song.chords.some(chord => chord.toLowerCase().includes(searchTerm))
    );
  }
  
  if (difficulty && difficulty !== "all") {
    results = results.filter(song => song.difficulty === difficulty);
  }
  
  return results;
}

export function getTabById(id: string): TabSong | undefined {
  return tabsDatabase.find(song => song.id === id);
}