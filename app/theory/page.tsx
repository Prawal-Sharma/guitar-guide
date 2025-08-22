"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { BookOpen, Music, Hash, Zap, Target, Info } from "lucide-react";

const theoryModules = [
  {
    id: "basics",
    title: "Music Basics",
    icon: Music,
    description: "Fundamental concepts every guitarist should know",
    topics: [
      {
        title: "The Musical Alphabet",
        content: "Music uses 7 letters: A, B, C, D, E, F, G. These repeat in octaves.",
        details: [
          "Natural notes: A, B, C, D, E, F, G",
          "Sharps (#) raise a note by one fret",
          "Flats (♭) lower a note by one fret",
          "Some notes have no sharp/flat between them: B-C and E-F"
        ]
      },
      {
        title: "The Fretboard",
        content: "Each fret represents a half-step (semitone) in pitch.",
        details: [
          "12 frets = 1 octave",
          "Open strings: E, A, D, G, B, E (thick to thin)",
          "Notes repeat after 12 frets",
          "Learn landmark frets: 3rd, 5th, 7th, 9th, 12th"
        ]
      },
      {
        title: "Rhythm & Time",
        content: "Music is organized in beats and measures.",
        details: [
          "4/4 time: 4 beats per measure (most common)",
          "Note values: whole, half, quarter, eighth, sixteenth",
          "Tempo: Speed measured in BPM (beats per minute)",
          "Rhythm patterns create the groove"
        ]
      }
    ]
  },
  {
    id: "intervals",
    title: "Intervals & Scales",
    icon: Hash,
    description: "Understanding the distance between notes",
    topics: [
      {
        title: "What are Intervals?",
        content: "Intervals are the distance between two notes.",
        details: [
          "Measured in steps (whole and half)",
          "Named by their distance: 2nd, 3rd, 4th, 5th, etc.",
          "Quality: Major, Minor, Perfect, Augmented, Diminished",
          "Foundation of chords and melodies"
        ]
      },
      {
        title: "Major Scale",
        content: "The foundation of Western music: W-W-H-W-W-W-H pattern.",
        details: [
          "Pattern: Whole-Whole-Half-Whole-Whole-Whole-Half",
          "In C: C-D-E-F-G-A-B-C",
          "Each note has a scale degree (1-7)",
          "Forms the basis for chord construction"
        ]
      },
      {
        title: "Minor Scales",
        content: "Three types of minor scales with different moods.",
        details: [
          "Natural Minor: W-H-W-W-H-W-W",
          "Harmonic Minor: Raised 7th degree",
          "Melodic Minor: Raised 6th and 7th ascending",
          "Minor scales sound darker/sadder than major"
        ]
      },
      {
        title: "Pentatonic Scales",
        content: "5-note scales perfect for guitar solos.",
        details: [
          "Major Pentatonic: 1-2-3-5-6",
          "Minor Pentatonic: 1-♭3-4-5-♭7",
          "No half-steps = no dissonance",
          "Foundation of rock, blues, and pop solos"
        ]
      }
    ]
  },
  {
    id: "chords",
    title: "Chord Theory",
    icon: Zap,
    description: "How chords are built and why they work",
    topics: [
      {
        title: "Chord Construction",
        content: "Chords are built by stacking thirds.",
        details: [
          "Triad: Root + 3rd + 5th",
          "Major chord: Major 3rd + Minor 3rd",
          "Minor chord: Minor 3rd + Major 3rd",
          "Add more thirds for 7th, 9th, etc."
        ]
      },
      {
        title: "Chord Types",
        content: "Different chord qualities create different emotions.",
        details: [
          "Major: Happy, bright (1-3-5)",
          "Minor: Sad, dark (1-♭3-5)",
          "Diminished: Tense (1-♭3-♭5)",
          "Augmented: Mysterious (1-3-#5)",
          "7th chords: Add complexity and color"
        ]
      },
      {
        title: "Chord Progressions",
        content: "Common patterns that sound good together.",
        details: [
          "I-IV-V: The most basic progression",
          "I-V-vi-IV: Pop progression",
          "ii-V-I: Jazz standard",
          "I-vi-IV-V: 50s progression",
          "Roman numerals show scale degrees"
        ]
      },
      {
        title: "Chord Functions",
        content: "Each chord has a role in the key.",
        details: [
          "Tonic (I): Home, resolution",
          "Subdominant (IV): Movement away",
          "Dominant (V): Tension, wants to resolve",
          "Leading tones create movement"
        ]
      }
    ]
  },
  {
    id: "keys",
    title: "Keys & Modes",
    icon: Target,
    description: "Understanding musical keys and modal scales",
    topics: [
      {
        title: "What is a Key?",
        content: "A key is a group of notes that sound good together.",
        details: [
          "Based on a scale starting from a root note",
          "Major keys: bright and happy",
          "Minor keys: dark and emotional",
          "Key signature shows sharps/flats"
        ]
      },
      {
        title: "Circle of Fifths",
        content: "A tool showing relationships between keys.",
        details: [
          "Move clockwise: Add sharps",
          "Move counter-clockwise: Add flats",
          "Adjacent keys share most notes",
          "Helps with key changes and progressions"
        ]
      },
      {
        title: "Modes",
        content: "Seven different scales from the same notes.",
        details: [
          "Ionian (Major): Happy, bright",
          "Dorian: Jazzy, sophisticated",
          "Phrygian: Spanish, exotic",
          "Lydian: Dreamy, ethereal",
          "Mixolydian: Bluesy, rock",
          "Aeolian (Natural Minor): Sad",
          "Locrian: Dissonant, rare"
        ]
      }
    ]
  }
];

export default function TheoryPage() {
  const [selectedModule, setSelectedModule] = useState(theoryModules[0]);
  const [expandedTopic, setExpandedTopic] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-8 text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Music Theory</h1>
            <p className="text-gray-300 text-lg">
              Essential theory knowledge for guitarists
            </p>
          </div>

          {/* Module Selector */}
          <div className="grid md:grid-cols-4 gap-4 mb-8">
            {theoryModules.map((module) => (
              <motion.button
                key={module.id}
                onClick={() => setSelectedModule(module)}
                className={`p-4 rounded-lg transition-all ${
                  selectedModule.id === module.id
                    ? "bg-blue-600 text-white"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <module.icon className="w-8 h-8 mx-auto mb-2" />
                <h3 className="font-semibold">{module.title}</h3>
              </motion.button>
            ))}
          </div>

          {/* Module Content */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Module Overview */}
            <div className="lg:col-span-1">
              <motion.div
                key={selectedModule.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-gray-800 rounded-lg p-6 sticky top-4"
              >
                <div className="flex items-center mb-4">
                  <selectedModule.icon className="w-10 h-10 text-blue-500 mr-3" />
                  <div>
                    <h2 className="text-xl font-bold text-white">
                      {selectedModule.title}
                    </h2>
                    <p className="text-sm text-gray-400">
                      {selectedModule.topics.length} topics
                    </p>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">
                  {selectedModule.description}
                </p>
                
                {/* Quick Navigation */}
                <div className="space-y-2">
                  <h3 className="text-sm font-semibold text-gray-400 mb-2">
                    Topics in this module:
                  </h3>
                  {selectedModule.topics.map((topic, index) => (
                    <button
                      key={index}
                      onClick={() => setExpandedTopic(index)}
                      className={`w-full text-left p-2 rounded text-sm transition-colors ${
                        expandedTopic === index
                          ? "bg-blue-600 text-white"
                          : "text-gray-400 hover:bg-gray-700 hover:text-white"
                      }`}
                    >
                      {topic.title}
                    </button>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Topics Detail */}
            <div className="lg:col-span-2">
              <div className="space-y-4">
                {selectedModule.topics.map((topic, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="bg-gray-800 rounded-lg overflow-hidden"
                  >
                    <button
                      onClick={() => setExpandedTopic(expandedTopic === index ? null : index)}
                      className="w-full p-6 text-left hover:bg-gray-700 transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-xl font-semibold text-white mb-2">
                            {topic.title}
                          </h3>
                          <p className="text-gray-400">
                            {topic.content}
                          </p>
                        </div>
                        <motion.div
                          animate={{ rotate: expandedTopic === index ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </motion.div>
                      </div>
                    </button>
                    
                    {expandedTopic === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        className="px-6 pb-6"
                      >
                        <div className="border-t border-gray-700 pt-4">
                          <ul className="space-y-3">
                            {topic.details.map((detail, i) => (
                              <li key={i} className="flex items-start">
                                <Info className="w-4 h-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-300 text-sm">
                                  {detail}
                                </span>
                              </li>
                            ))}
                          </ul>
                          
                          {/* Practice Button */}
                          <button className="mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm transition-colors">
                            Practice This Concept
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Interactive Elements */}
              <motion.div
                className="mt-8 bg-gray-800 rounded-lg p-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <h3 className="text-xl font-bold text-white mb-4">
                  Quick Reference
                </h3>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-gray-900 rounded p-4">
                    <h4 className="font-semibold text-white mb-2">Note Values</h4>
                    <div className="space-y-1 text-sm text-gray-400">
                      <div>𝅝 Whole note = 4 beats</div>
                      <div>𝅗𝅥 Half note = 2 beats</div>
                      <div>♩ Quarter note = 1 beat</div>
                      <div>♫ Eighth note = 1/2 beat</div>
                      <div>♬ Sixteenth note = 1/4 beat</div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-900 rounded p-4">
                    <h4 className="font-semibold text-white mb-2">Intervals</h4>
                    <div className="space-y-1 text-sm text-gray-400">
                      <div>Minor 2nd = 1 half-step</div>
                      <div>Major 2nd = 2 half-steps</div>
                      <div>Minor 3rd = 3 half-steps</div>
                      <div>Major 3rd = 4 half-steps</div>
                      <div>Perfect 5th = 7 half-steps</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Theory Quiz Section */}
          <motion.div
            className="mt-12 bg-gray-800 rounded-lg p-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <BookOpen className="w-16 h-16 text-blue-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-white mb-4">
              Test Your Knowledge
            </h2>
            <p className="text-gray-400 mb-6">
              Take interactive quizzes to reinforce your understanding of music theory concepts
            </p>
            <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors">
              Start Theory Quiz
            </button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}