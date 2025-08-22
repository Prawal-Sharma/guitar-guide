export interface Lesson {
  id: number;
  title: string;
  description: string;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  category: 'foundation' | 'chords' | 'rhythm' | 'technique' | 'theory' | 'songs';
  week: number;
  completed: boolean;
  content: {
    overview: string;
    objectives: string[];
    steps: {
      title: string;
      description: string;
      practice?: string;
      tips?: string[];
    }[];
    practiceExercises: {
      name: string;
      description: string;
      duration: string;
      difficulty: 'easy' | 'medium' | 'hard';
    }[];
    relatedChords?: string[];
    relatedSongs?: string[];
    nextLesson?: number;
  };
}

export const lessonsData: Lesson[] = [
  // Week 1-2: Foundation
  {
    id: 1,
    title: "Getting Started with Guitar",
    description: "Learn the basics of holding a guitar, proper posture, and guitar anatomy",
    duration: "30 min",
    level: "Beginner",
    category: "foundation",
    week: 1,
    completed: false,
    content: {
      overview: "This foundational lesson introduces you to the guitar, teaching proper posture, hand positioning, and the parts of the instrument.",
      objectives: [
        "Identify all parts of the guitar",
        "Hold the guitar with proper posture",
        "Position both hands correctly",
        "Understand basic guitar maintenance"
      ],
      steps: [
        {
          title: "Guitar Anatomy",
          description: "Learn the parts of your guitar: headstock, tuning pegs, nut, neck, frets, body, bridge, and sound hole (acoustic) or pickups (electric).",
          practice: "Point to and name each part of your guitar",
          tips: [
            "The headstock holds the tuning pegs",
            "Frets are the metal strips on the neck",
            "The body produces the sound"
          ]
        },
        {
          title: "Proper Sitting Position",
          description: "Sit up straight with feet flat on floor. Rest guitar on right thigh (for right-handed players). Keep the neck at about 45-degree angle.",
          practice: "Practice sitting with the guitar for 5 minutes",
          tips: [
            "Use a footstool to elevate your right leg if needed",
            "Keep your back straight",
            "The guitar should feel balanced without holding it"
          ]
        },
        {
          title: "Left Hand Position",
          description: "Place thumb behind neck, fingers curved over fretboard. Fingertips should press strings, not finger pads.",
          practice: "Practice placing fingers on different frets",
          tips: [
            "Thumb should be opposite your middle finger",
            "Keep wrist straight",
            "Fingers should arch over strings"
          ]
        },
        {
          title: "Right Hand Position",
          description: "For strumming: hold pick between thumb and index finger. For fingerpicking: rest thumb on bass strings, fingers on treble strings.",
          practice: "Practice holding a pick and strumming motion",
          tips: [
            "Hold pick firmly but not too tight",
            "Use wrist motion, not arm",
            "Pick should hit strings at slight angle"
          ]
        }
      ],
      practiceExercises: [
        {
          name: "Posture Check",
          description: "Sit with guitar for 5 minutes maintaining proper posture",
          duration: "5 min",
          difficulty: "easy"
        },
        {
          name: "Finger Placement",
          description: "Place fingers on frets 1-4 on each string",
          duration: "10 min",
          difficulty: "easy"
        }
      ],
      nextLesson: 2
    }
  },
  {
    id: 2,
    title: "Tuning Your Guitar",
    description: "Learn how to tune your guitar using different methods",
    duration: "20 min",
    level: "Beginner",
    category: "foundation",
    week: 1,
    completed: false,
    content: {
      overview: "A properly tuned guitar is essential for good sound. Learn multiple tuning methods and develop your ear.",
      objectives: [
        "Memorize standard tuning notes",
        "Use an electronic tuner",
        "Understand relative tuning",
        "Develop pitch recognition"
      ],
      steps: [
        {
          title: "Standard Tuning",
          description: "From thickest to thinnest: E-A-D-G-B-E. Remember: 'Eddie Ate Dynamite, Good Bye Eddie'",
          practice: "Say the notes while pointing to each string",
          tips: [
            "6th string (thickest) = Low E",
            "1st string (thinnest) = High E",
            "Practice memorizing the order"
          ]
        },
        {
          title: "Using a Tuner",
          description: "Clip tuner on headstock or use app. Play each string individually and adjust tuning peg until indicator shows green/centered.",
          practice: "Tune all strings with a tuner",
          tips: [
            "Tune up to pitch, not down",
            "Make small adjustments",
            "Mute other strings when tuning"
          ]
        },
        {
          title: "Relative Tuning (5th Fret Method)",
          description: "Press 5th fret of 6th string (A note) should match open 5th string. Continue pattern (except 3rd string use 4th fret).",
          practice: "Try tuning without a tuner using this method",
          tips: [
            "This method tunes strings relative to each other",
            "Good for quick tuning checks",
            "Develops your ear for pitch"
          ]
        }
      ],
      practiceExercises: [
        {
          name: "Daily Tuning",
          description: "Tune your guitar at the start of each practice session",
          duration: "5 min",
          difficulty: "easy"
        },
        {
          name: "Ear Training",
          description: "Tune one string by ear, check with tuner",
          duration: "10 min",
          difficulty: "medium"
        }
      ],
      nextLesson: 3
    }
  },
  {
    id: 3,
    title: "Your First Chord - G Major",
    description: "Master the G major chord - one of the most important chords in guitar",
    duration: "30 min",
    level: "Beginner",
    category: "chords",
    week: 1,
    completed: false,
    content: {
      overview: "The G major chord is often the first chord guitarists learn. It's used in thousands of songs and sounds great!",
      objectives: [
        "Form the G major chord correctly",
        "Get a clean sound from each string",
        "Strum the chord smoothly",
        "Build finger strength and muscle memory"
      ],
      steps: [
        {
          title: "Finger Placement",
          description: "Place middle finger on 3rd fret of 1st string, index finger on 2nd fret of 5th string, ring finger on 3rd fret of 6th string.",
          practice: "Place fingers one at a time, then all together",
          tips: [
            "Press firmly behind the frets",
            "Arch fingers to avoid touching other strings",
            "Keep thumb behind neck for support"
          ]
        },
        {
          title: "Checking Each String",
          description: "Play each string individually to ensure it rings clearly. Adjust finger pressure and position as needed.",
          practice: "Play each string slowly, fix any buzzing",
          tips: [
            "Buzzing means you're not pressing hard enough",
            "Muted strings mean you're touching them accidentally",
            "Take breaks if fingers get sore"
          ]
        },
        {
          title: "Strumming the Chord",
          description: "Strum all six strings from top to bottom in one smooth motion.",
          practice: "Strum G chord 4 times slowly, then 4 times quickly",
          tips: [
            "Use a relaxed grip on the pick",
            "Strum from the wrist, not the arm",
            "All strings should sound together"
          ]
        }
      ],
      practiceExercises: [
        {
          name: "Chord Formation",
          description: "Form G chord, release, repeat 20 times",
          duration: "5 min",
          difficulty: "easy"
        },
        {
          name: "Clean Sound Check",
          description: "Play each string individually, ensure clarity",
          duration: "5 min",
          difficulty: "medium"
        },
        {
          name: "Strumming Practice",
          description: "Strum G chord with different rhythms",
          duration: "10 min",
          difficulty: "easy"
        }
      ],
      relatedChords: ["G"],
      nextLesson: 4
    }
  },
  {
    id: 4,
    title: "C and D Major Chords",
    description: "Learn C and D major chords to play your first chord progression",
    duration: "35 min",
    level: "Beginner",
    category: "chords",
    week: 2,
    completed: false,
    content: {
      overview: "Adding C and D to your G chord gives you the ability to play hundreds of songs. These three chords form the I-IV-V progression in the key of G.",
      objectives: [
        "Form C major chord correctly",
        "Form D major chord correctly",
        "Practice switching between G, C, and D",
        "Understand chord diagrams"
      ],
      steps: [
        {
          title: "C Major Chord",
          description: "Ring finger on 3rd fret of 5th string, middle finger on 2nd fret of 4th string, index finger on 1st fret of 2nd string.",
          practice: "Form C chord 20 times",
          tips: [
            "Don't play the 6th string",
            "Stretch fingers to reach positions",
            "Keep fingers curved"
          ]
        },
        {
          title: "D Major Chord",
          description: "Index finger on 2nd fret of 3rd string, middle finger on 2nd fret of 1st string, ring finger on 3rd fret of 2nd string.",
          practice: "Form D chord 20 times",
          tips: [
            "Only strum the top 4 strings",
            "This is a triangular shape",
            "Watch for accidental muting"
          ]
        },
        {
          title: "Chord Changes",
          description: "Practice switching between G, C, and D chords smoothly.",
          practice: "G to C (10 times), C to D (10 times), D to G (10 times)",
          tips: [
            "Move fingers together as a unit",
            "Look for common finger positions",
            "Start slowly, speed will come"
          ]
        }
      ],
      practiceExercises: [
        {
          name: "Chord Progression",
          description: "Play G-C-D-G progression slowly",
          duration: "10 min",
          difficulty: "medium"
        },
        {
          name: "One Minute Changes",
          description: "Switch between two chords for one minute, count successful changes",
          duration: "5 min",
          difficulty: "medium"
        }
      ],
      relatedChords: ["C", "D", "G"],
      relatedSongs: ["Wild Thing", "La Bamba"],
      nextLesson: 5
    }
  },
  {
    id: 5,
    title: "Basic Strumming Patterns",
    description: "Develop rhythm with essential strumming patterns",
    duration: "30 min",
    level: "Beginner",
    category: "rhythm",
    week: 2,
    completed: false,
    content: {
      overview: "Rhythm is the heartbeat of music. Learn fundamental strumming patterns that work with thousands of songs.",
      objectives: [
        "Understand downstrokes and upstrokes",
        "Master basic 4/4 patterns",
        "Keep steady tempo",
        "Combine strumming with chord changes"
      ],
      steps: [
        {
          title: "Downstrokes",
          description: "Strum from top to bottom (thick to thin strings). This is the foundation of rhythm guitar.",
          practice: "Play 4 downstrokes per measure on G chord",
          tips: [
            "Keep wrist loose and relaxed",
            "Maintain consistent volume",
            "Count: 1, 2, 3, 4"
          ]
        },
        {
          title: "Adding Upstrokes",
          description: "Upstrokes go from thin to thick strings. Usually played between beats.",
          practice: "Alternate down-up-down-up pattern",
          tips: [
            "Upstrokes are usually lighter",
            "Hit fewer strings on upstrokes",
            "Count: 1 & 2 & 3 & 4 &"
          ]
        },
        {
          title: "Common Pattern: D-D-U-U-D-U",
          description: "Down-Down-Up-Up-Down-Up. One of the most versatile patterns in popular music.",
          practice: "Play pattern on each chord (G, C, D)",
          tips: [
            "Emphasize the first downstroke",
            "Keep hand moving even on missed strokes",
            "Start slowly with metronome"
          ]
        }
      ],
      practiceExercises: [
        {
          name: "Metronome Practice",
          description: "Play patterns with metronome at 60 BPM",
          duration: "10 min",
          difficulty: "easy"
        },
        {
          name: "Pattern with Changes",
          description: "Play D-D-U-U-D-U while changing chords",
          duration: "15 min",
          difficulty: "medium"
        }
      ],
      relatedChords: ["G", "C", "D"],
      nextLesson: 6
    }
  },
  
  // Week 3-4: Essential Chords
  {
    id: 6,
    title: "Minor Chords - Em and Am",
    description: "Learn your first minor chords for emotional expression",
    duration: "30 min",
    level: "Beginner",
    category: "chords",
    week: 3,
    completed: false,
    content: {
      overview: "Minor chords add emotional depth to your playing. Em and Am are the easiest minor chords to learn.",
      objectives: [
        "Understand major vs minor sound",
        "Form Em and Am chords",
        "Use minor chords in progressions",
        "Develop emotional expression"
      ],
      steps: [
        {
          title: "E Minor Chord",
          description: "The easiest chord! Middle finger on 2nd fret of 5th string, ring finger on 2nd fret of 4th string.",
          practice: "Strum Em and listen to its sad/moody sound",
          tips: [
            "Only two fingers needed",
            "Strum all six strings",
            "Compare sound to E major"
          ]
        },
        {
          title: "A Minor Chord",
          description: "Index on 1st fret of 2nd string, middle on 2nd fret of 4th string, ring on 2nd fret of 3rd string.",
          practice: "Form Am chord 20 times",
          tips: [
            "Don't play 6th string",
            "Similar shape to C major",
            "Keep fingers close to frets"
          ]
        },
        {
          title: "Major-Minor Progressions",
          description: "Combine major and minor chords for emotional contrast.",
          practice: "Play: G-Em-C-D, Am-F-C-G progressions",
          tips: [
            "Notice the mood change with minor chords",
            "Minor chords often lead back to major",
            "Used in countless pop songs"
          ]
        }
      ],
      practiceExercises: [
        {
          name: "Minor Chord Changes",
          description: "Switch between Em-Am repeatedly",
          duration: "5 min",
          difficulty: "easy"
        },
        {
          name: "Emotional Progression",
          description: "Play C-Am-F-G (pop progression)",
          duration: "10 min",
          difficulty: "medium"
        }
      ],
      relatedChords: ["Em", "Am", "E", "A"],
      relatedSongs: ["Wonderwall", "House of the Rising Sun"],
      nextLesson: 7
    }
  },
  {
    id: 7,
    title: "The F Chord - Your First Barre",
    description: "Conquer the challenging F major barre chord",
    duration: "40 min",
    level: "Intermediate",
    category: "chords",
    week: 3,
    completed: false,
    content: {
      overview: "The F chord is often the first major challenge for guitarists. It requires barring multiple strings with one finger.",
      objectives: [
        "Understand barre chord technique",
        "Build finger strength",
        "Form F major chord",
        "Learn easier alternatives"
      ],
      steps: [
        {
          title: "Mini F (Easy Version)",
          description: "Start with partial F: index on 1st fret of 1st and 2nd strings, middle on 2nd fret of 3rd string, ring on 3rd fret of 4th string.",
          practice: "Master mini F before full barre",
          tips: [
            "Only play top 4 strings",
            "Builds toward full F",
            "Sounds good in most songs"
          ]
        },
        {
          title: "Full F Barre",
          description: "Index finger barres all strings at 1st fret, other fingers form E shape at 3rd and 2nd frets.",
          practice: "Hold F chord for 30 seconds at a time",
          tips: [
            "Roll index finger slightly to use bony edge",
            "Pull back with fretting arm",
            "Takes weeks to master - be patient!"
          ]
        },
        {
          title: "F Chord in Progressions",
          description: "F is the IV chord in key of C, essential for many songs.",
          practice: "Play C-Am-F-G progression",
          tips: [
            "Prepare fingers during previous chord",
            "Start with mini F in songs",
            "Speed comes with practice"
          ]
        }
      ],
      practiceExercises: [
        {
          name: "Barre Strength Builder",
          description: "Hold barre position for 30 seconds, rest, repeat",
          duration: "10 min",
          difficulty: "hard"
        },
        {
          name: "F Chord Changes",
          description: "Practice C to F, F to G changes",
          duration: "15 min",
          difficulty: "hard"
        }
      ],
      relatedChords: ["F", "Fm", "F7"],
      nextLesson: 8
    }
  },
  {
    id: 8,
    title: "7th Chords for Blues and Jazz",
    description: "Add sophistication with dominant 7th chords",
    duration: "35 min",
    level: "Intermediate",
    category: "chords",
    week: 4,
    completed: false,
    content: {
      overview: "7th chords add color and tension to your playing, essential for blues, jazz, and many rock songs.",
      objectives: [
        "Understand 7th chord theory",
        "Learn G7, C7, D7, A7, E7",
        "Play 12-bar blues",
        "Develop jazzy sound"
      ],
      steps: [
        {
          title: "What Makes a 7th Chord",
          description: "Adding the 7th note creates tension that wants to resolve. Dominant 7ths are major chords with minor 7th added.",
          practice: "Compare G to G7 sound",
          tips: [
            "7th chords sound 'bluesy'",
            "Create movement in progressions",
            "Often lead to next chord"
          ]
        },
        {
          title: "Open 7th Chords",
          description: "G7: Add index on 1st fret of 1st string to G chord. C7: Add pinky on 3rd fret of 3rd string to C.",
          practice: "Form each 7th chord variation",
          tips: [
            "Small changes from major chords",
            "E7 and A7 are very easy",
            "D7 removes one finger from D"
          ]
        },
        {
          title: "12-Bar Blues",
          description: "Classic blues progression: I7-I7-I7-I7-IV7-IV7-I7-I7-V7-IV7-I7-V7",
          practice: "Play 12-bar blues in G (G7-C7-D7)",
          tips: [
            "Count 4 beats per chord",
            "Shuffle rhythm sounds great",
            "Foundation of blues music"
          ]
        }
      ],
      practiceExercises: [
        {
          name: "7th Chord Tour",
          description: "Play all five 7th chords in sequence",
          duration: "10 min",
          difficulty: "medium"
        },
        {
          name: "Blues Jam",
          description: "Play 12-bar blues with backing track",
          duration: "15 min",
          difficulty: "medium"
        }
      ],
      relatedChords: ["G7", "C7", "D7", "A7", "E7", "B7"],
      relatedSongs: ["Johnny B. Goode", "Blue Suede Shoes"],
      nextLesson: 9
    }
  },
  
  // Week 5-6: Reading Music & Techniques
  {
    id: 9,
    title: "Reading Tablature",
    description: "Learn to read guitar tabs - the universal language of guitar",
    duration: "30 min",
    level: "Beginner",
    category: "theory",
    week: 5,
    completed: false,
    content: {
      overview: "Tablature (TAB) is a simple way to notate guitar music showing which frets to play on which strings.",
      objectives: [
        "Understand TAB notation",
        "Read rhythm in TABs",
        "Learn common symbols",
        "Play songs from TABs"
      ],
      steps: [
        {
          title: "TAB Basics",
          description: "Six lines represent strings (bottom line = thick E string). Numbers show which fret to press.",
          practice: "Write out TAB for chords you know",
          tips: [
            "0 means open string",
            "Numbers stacked = play together",
            "Read left to right like text"
          ]
        },
        {
          title: "TAB Symbols",
          description: "h = hammer-on, p = pull-off, / = slide up, \\ = slide down, b = bend, ~ = vibrato",
          practice: "Practice each technique slowly",
          tips: [
            "Techniques add expression",
            "Start with hammer-ons and pull-offs",
            "Combine with standard notation when possible"
          ]
        },
        {
          title: "Playing from TABs",
          description: "Start with simple melodies, work up to full songs.",
          practice: "Learn 'Smoke on the Water' riff from TAB",
          tips: [
            "Listen to the song while reading",
            "Start slowly, build speed",
            "TABs don't show rhythm precisely"
          ]
        }
      ],
      practiceExercises: [
        {
          name: "TAB Reading",
          description: "Read and play simple melodies from TAB",
          duration: "15 min",
          difficulty: "easy"
        },
        {
          name: "Riff Learning",
          description: "Learn famous riff from TAB",
          duration: "15 min",
          difficulty: "medium"
        }
      ],
      nextLesson: 10
    }
  },
  {
    id: 10,
    title: "Fingerpicking Basics",
    description: "Develop independence with fingerstyle guitar",
    duration: "35 min",
    level: "Intermediate",
    category: "technique",
    week: 5,
    completed: false,
    content: {
      overview: "Fingerpicking opens up a whole new world of guitar playing, allowing you to play bass, melody, and harmony simultaneously.",
      objectives: [
        "Learn proper finger positioning",
        "Master basic patterns",
        "Develop finger independence",
        "Play simple fingerstyle songs"
      ],
      steps: [
        {
          title: "Hand Position",
          description: "Thumb (p) plays strings 6-4, index (i) plays 3rd, middle (m) plays 2nd, ring (a) plays 1st.",
          practice: "Rest fingers on assigned strings",
          tips: [
            "P-I-M-A naming from classical guitar",
            "Keep hand relaxed",
            "Anchor pinky on body (optional)"
          ]
        },
        {
          title: "Basic Pattern: P-i-m-a",
          description: "Thumb plays bass note, then fingers play treble strings in sequence.",
          practice: "Play pattern on C chord slowly",
          tips: [
            "Keep steady rhythm",
            "Thumb provides the beat",
            "Let strings ring out"
          ]
        },
        {
          title: "Travis Picking",
          description: "Alternating bass pattern: thumb alternates between two bass strings while fingers play melody.",
          practice: "Thumb alternates 5-4 strings on C chord",
          tips: [
            "Foundation of folk/country fingerpicking",
            "Creates rolling sound",
            "Practice thumb independence first"
          ]
        }
      ],
      practiceExercises: [
        {
          name: "Finger Gym",
          description: "Play p-i-m-a pattern on each chord",
          duration: "10 min",
          difficulty: "medium"
        },
        {
          name: "Travis Pattern",
          description: "Alternating bass with melody notes",
          duration: "15 min",
          difficulty: "hard"
        }
      ],
      relatedSongs: ["Dust in the Wind", "Blackbird"],
      nextLesson: 11
    }
  },
  
  // Week 7-8: Advanced Techniques
  {
    id: 11,
    title: "Hammer-ons and Pull-offs",
    description: "Add fluidity to your playing with legato techniques",
    duration: "30 min",
    level: "Intermediate",
    category: "technique",
    week: 7,
    completed: false,
    content: {
      overview: "Hammer-ons and pull-offs create smooth, connected notes without picking every note, essential for lead guitar.",
      objectives: [
        "Execute clean hammer-ons",
        "Master pull-off technique",
        "Combine both techniques",
        "Increase playing speed"
      ],
      steps: [
        {
          title: "Hammer-on Technique",
          description: "Pick first note, then 'hammer' finger onto higher fret to sound second note without picking.",
          practice: "Pick 5th fret, hammer to 7th fret on 3rd string",
          tips: [
            "Hammer down quickly and firmly",
            "Aim just behind the fret",
            "Second note should be clear"
          ]
        },
        {
          title: "Pull-off Technique",
          description: "Opposite of hammer-on: pick fretted note, then pull finger off to sound lower note.",
          practice: "Fret 7th and 5th frets, pick, then pull off",
          tips: [
            "Pull down slightly as you release",
            "Both fingers must be in place first",
            "Creates descending sound"
          ]
        },
        {
          title: "Combining Techniques",
          description: "Chain hammer-ons and pull-offs for fluid lead lines.",
          practice: "Try: 5h7p5 pattern (hammer to 7, pull to 5)",
          tips: [
            "Start slowly for accuracy",
            "Common in solos and riffs",
            "Builds finger strength"
          ]
        }
      ],
      practiceExercises: [
        {
          name: "Hammer-on Drills",
          description: "Practice hammers on each string",
          duration: "10 min",
          difficulty: "medium"
        },
        {
          name: "Trill Exercise",
          description: "Rapid hammer-pull combinations",
          duration: "10 min",
          difficulty: "hard"
        }
      ],
      nextLesson: 12
    }
  },
  {
    id: 12,
    title: "Bending and Vibrato",
    description: "Add emotion and expression with string bending and vibrato",
    duration: "35 min",
    level: "Intermediate",
    category: "technique",
    week: 7,
    completed: false,
    content: {
      overview: "Bending and vibrato are essential for expressive lead guitar, allowing you to add vocal-like qualities to your playing.",
      objectives: [
        "Bend strings to pitch",
        "Develop vibrato technique",
        "Control bend intensity",
        "Add emotion to solos"
      ],
      steps: [
        {
          title: "Basic Bending",
          description: "Push string up (or pull down on lower strings) to raise pitch. Use multiple fingers for strength.",
          practice: "Bend 7th fret of 3rd string up whole step",
          tips: [
            "Support with multiple fingers",
            "Bend from wrist rotation",
            "Match pitch of target note"
          ]
        },
        {
          title: "Vibrato Technique",
          description: "Rapid, controlled bending and releasing creates vibrato effect.",
          practice: "Hold note and add subtle vibrato",
          tips: [
            "Like a singer's vibrato",
            "Keep it controlled and even",
            "Width and speed vary by style"
          ]
        },
        {
          title: "Expressive Bending",
          description: "Use bends for emotional impact: slow bends, quick bends, pre-bends.",
          practice: "Practice different bend types",
          tips: [
            "Slow bends build tension",
            "Quick bends add aggression",
            "Pre-bend then strike for unique sound"
          ]
        }
      ],
      practiceExercises: [
        {
          name: "Pitch Matching",
          description: "Bend to match target notes",
          duration: "10 min",
          difficulty: "medium"
        },
        {
          name: "Vibrato Control",
          description: "Practice even vibrato at different speeds",
          duration: "10 min",
          difficulty: "medium"
        }
      ],
      nextLesson: 13
    }
  },
  {
    id: 13,
    title: "Introduction to Scales",
    description: "Learn the pentatonic scale - your gateway to lead guitar",
    duration: "40 min",
    level: "Intermediate",
    category: "theory",
    week: 8,
    completed: false,
    content: {
      overview: "The pentatonic scale is the most important scale for guitar solos, used in rock, blues, country, and pop music.",
      objectives: [
        "Understand scale construction",
        "Learn minor pentatonic shape",
        "Practice scale patterns",
        "Begin improvisation"
      ],
      steps: [
        {
          title: "What is Pentatonic?",
          description: "Five-note scale that sounds good over many chords. Minor pentatonic: 1-♭3-4-5-♭7",
          practice: "Play A minor pentatonic: A-C-D-E-G",
          tips: [
            "Penta = five, tonic = notes",
            "No half-steps = no dissonance",
            "Works over major and minor"
          ]
        },
        {
          title: "Box 1 Pattern",
          description: "First position of A minor pentatonic starts at 5th fret. Learn the box shape.",
          practice: "Play pattern ascending and descending",
          tips: [
            "Most common solo position",
            "Root note on 6th string, 5th fret",
            "Moveable to any key"
          ]
        },
        {
          title: "Basic Improvisation",
          description: "Use pentatonic notes to create melodies over chord progressions.",
          practice: "Solo over 12-bar blues backing track",
          tips: [
            "Start with few notes",
            "Focus on rhythm and phrasing",
            "Bend and vibrato add expression"
          ]
        }
      ],
      practiceExercises: [
        {
          name: "Scale Runs",
          description: "Play scale up and down with metronome",
          duration: "10 min",
          difficulty: "medium"
        },
        {
          name: "Improvisation",
          description: "Create melodies using pentatonic scale",
          duration: "15 min",
          difficulty: "hard"
        }
      ],
      relatedChords: ["Am", "A", "A7"],
      nextLesson: 14
    }
  },
  
  // Advanced Lessons (Weeks 9+)
  {
    id: 14,
    title: "Barre Chord Mastery",
    description: "Master moveable barre chord shapes for playing in any key",
    duration: "45 min",
    level: "Advanced",
    category: "chords",
    week: 9,
    completed: false,
    content: {
      overview: "Barre chords are moveable shapes that allow you to play any chord anywhere on the neck.",
      objectives: [
        "Master E-shape barre chords",
        "Learn A-shape barre chords",
        "Understand root notes",
        "Play in any key"
      ],
      steps: [
        {
          title: "E-Shape Barre Chords",
          description: "F chord is E shape with barre. Move this shape up the neck for different chords.",
          practice: "Play F, G, A using E-shape barre",
          tips: [
            "Root on 6th string determines chord",
            "3rd fret = G, 5th fret = A",
            "Works for major and minor"
          ]
        },
        {
          title: "A-Shape Barre Chords",
          description: "Barre with index, form A shape with other fingers. Root on 5th string.",
          practice: "Play B♭, C, D using A-shape",
          tips: [
            "Harder than E-shape",
            "Ring finger can barre 3 strings",
            "1st fret = B♭, 3rd = C, 5th = D"
          ]
        },
        {
          title: "Minor Barre Chords",
          description: "Same concept with Em and Am shapes for minor barre chords.",
          practice: "Play Fm, Gm, B♭m",
          tips: [
            "Lift middle finger for minor",
            "Same root note rules apply",
            "Essential for playing in minor keys"
          ]
        }
      ],
      practiceExercises: [
        {
          name: "Barre Chord Workout",
          description: "Play major barre chords up the neck",
          duration: "15 min",
          difficulty: "hard"
        },
        {
          name: "Shape Switching",
          description: "Alternate E-shape and A-shape barres",
          duration: "15 min",
          difficulty: "hard"
        }
      ],
      relatedChords: ["F", "Bm", "B♭", "E♭", "F#m"],
      nextLesson: 15
    }
  },
  {
    id: 15,
    title: "Music Theory Fundamentals",
    description: "Understand the theory behind what you're playing",
    duration: "45 min",
    level: "Advanced",
    category: "theory",
    week: 10,
    completed: false,
    content: {
      overview: "Understanding music theory helps you communicate with other musicians and write your own music.",
      objectives: [
        "Learn the major scale",
        "Understand intervals",
        "Build chords from scales",
        "Identify key signatures"
      ],
      steps: [
        {
          title: "The Major Scale",
          description: "Pattern of whole and half steps: W-W-H-W-W-W-H. C major = C-D-E-F-G-A-B-C",
          practice: "Play C major scale on one string",
          tips: [
            "Foundation of Western music",
            "Each note has a number (1-7)",
            "Chords built from scale degrees"
          ]
        },
        {
          title: "Intervals",
          description: "Distance between notes. Major 3rd = 4 half-steps, Perfect 5th = 7 half-steps",
          practice: "Play intervals from root note",
          tips: [
            "Intervals create chord quality",
            "Major 3rd = major chord",
            "Minor 3rd = minor chord"
          ]
        },
        {
          title: "Chord Construction",
          description: "Chords are built in thirds. Major = 1-3-5, Minor = 1-♭3-5",
          practice: "Build chords from scale notes",
          tips: [
            "Stack thirds to build chords",
            "7th chords add another third",
            "Understanding helps with chord substitution"
          ]
        }
      ],
      practiceExercises: [
        {
          name: "Scale Practice",
          description: "Play major scales in different keys",
          duration: "15 min",
          difficulty: "medium"
        },
        {
          name: "Chord Building",
          description: "Construct chords from scales",
          duration: "15 min",
          difficulty: "hard"
        }
      ],
      nextLesson: 16
    }
  }
];

export function getLessonById(id: number): Lesson | undefined {
  return lessonsData.find(lesson => lesson.id === id);
}

export function getLessonsByWeek(week: number): Lesson[] {
  return lessonsData.filter(lesson => lesson.week === week);
}

export function getLessonsByLevel(level: 'Beginner' | 'Intermediate' | 'Advanced'): Lesson[] {
  return lessonsData.filter(lesson => lesson.level === level);
}

export function getLessonsByCategory(category: Lesson['category']): Lesson[] {
  return lessonsData.filter(lesson => lesson.category === category);
}

export function getNextLesson(currentId: number): Lesson | undefined {
  const current = getLessonById(currentId);
  if (current?.content.nextLesson) {
    return getLessonById(current.content.nextLesson);
  }
  return undefined;
}