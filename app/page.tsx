"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight, Music, BookOpen, Target, TrendingUp, Sparkles, RefreshCw } from "lucide-react";
import { ChordDiagram } from "@/components/chords/ChordDiagram";
import { fullChordsDatabase } from "@/lib/chords-data";
import { guitarAudio } from "@/lib/audio/guitar-audio";

export default function Home() {
  const [chordOfTheDay, setChordOfTheDay] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  
  useEffect(() => {
    // Get chord of the day based on date
    const getChordOfTheDay = () => {
      const chords = Object.keys(fullChordsDatabase);
      const today = new Date();
      const dayOfYear = Math.floor((today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / 1000 / 60 / 60 / 24);
      const index = dayOfYear % chords.length;
      return chords[index];
    };
    setChordOfTheDay(getChordOfTheDay());
  }, []);
  
  const handlePlayChord = async () => {
    if (!chordOfTheDay || isPlaying) return;
    const chord = fullChordsDatabase[chordOfTheDay];
    if (!chord) return;
    
    setIsPlaying(true);
    await guitarAudio.playChord(chord);
    setTimeout(() => setIsPlaying(false), 1000);
  };
  return (
    <div className="bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4 py-16">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1 
            className="text-5xl md:text-6xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Welcome to Guitar Guide
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-300 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Your journey to mastering the guitar starts here
          </motion.p>
          <motion.div 
            className="inline-flex gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link 
              href="/learn"
              className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all hover:scale-105 flex items-center gap-2"
            >
              Start Learning
              <ChevronRight className="w-5 h-5" />
            </Link>
            <Link 
              href="/chords"
              className="px-8 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-all hover:scale-105"
            >
              Explore Chords
            </Link>
          </motion.div>
        </motion.div>

        {/* Chord of the Day */}
        {chordOfTheDay && fullChordsDatabase[chordOfTheDay] && (
          <motion.div 
            className="mt-16 bg-gray-800 rounded-lg p-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <Sparkles className="w-6 h-6 text-yellow-500" />
                <h2 className="text-2xl font-bold text-white">Chord of the Day</h2>
              </div>
              <div className="text-sm text-gray-400">
                {new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex flex-col items-center">
                <h3 className="text-3xl font-bold text-white mb-4">
                  {fullChordsDatabase[chordOfTheDay].name}
                </h3>
                <ChordDiagram 
                  chord={fullChordsDatabase[chordOfTheDay]} 
                  size={200}
                />
                <button
                  onClick={handlePlayChord}
                  disabled={isPlaying}
                  className={`mt-4 px-6 py-2 rounded-lg flex items-center gap-2 transition-all ${
                    isPlaying 
                      ? "bg-gray-600 text-gray-400 cursor-not-allowed" 
                      : "bg-blue-600 text-white hover:bg-blue-700 hover:scale-105"
                  }`}
                >
                  <Music className="w-4 h-4" />
                  {isPlaying ? "Playing..." : "Play Chord"}
                </button>
              </div>
              
              <div className="flex flex-col justify-center">
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-400 mb-2">Difficulty</h4>
                    <span className={`px-3 py-1 rounded text-sm font-medium ${
                      fullChordsDatabase[chordOfTheDay].difficulty === 'beginner' ? 'bg-green-600 text-white' :
                      fullChordsDatabase[chordOfTheDay].difficulty === 'intermediate' ? 'bg-yellow-600 text-white' :
                      'bg-red-600 text-white'
                    }`}>
                      {fullChordsDatabase[chordOfTheDay].difficulty || 'Beginner'}
                    </span>
                  </div>
                  
                  {fullChordsDatabase[chordOfTheDay].commonIn && (
                    <div>
                      <h4 className="text-sm font-semibold text-gray-400 mb-2">Common in</h4>
                      <div className="flex flex-wrap gap-2">
                        {fullChordsDatabase[chordOfTheDay].commonIn.map((genre) => (
                          <span key={genre} className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs">
                            {genre}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  <div>
                    <h4 className="text-sm font-semibold text-gray-400 mb-2">Practice Tip</h4>
                    <p className="text-gray-300 text-sm">
                      {fullChordsDatabase[chordOfTheDay].barres && fullChordsDatabase[chordOfTheDay].barres.length > 0
                        ? "This is a barre chord. Focus on applying even pressure across all strings with your index finger."
                        : "Practice transitioning to this chord from other open chords you know. Start slowly and focus on accuracy."}
                    </p>
                  </div>
                  
                  <Link 
                    href={`/chords?selected=${chordOfTheDay}`}
                    className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors mt-2"
                  >
                    Learn more about this chord
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Quick Practice Section */}
        <motion.div 
          className="mt-12 bg-gradient-to-r from-purple-900/50 to-pink-900/50 rounded-lg p-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h3 className="text-xl font-bold text-white mb-3">⚡ Quick Practice Mode</h3>
          <p className="text-gray-300 mb-4">
            Generate random chord progressions to practice your transitions
          </p>
          <Link 
            href="/practice/progression"
            className="inline-flex items-center gap-2 px-6 py-2 bg-white text-purple-900 rounded-lg font-semibold hover:bg-gray-100 transition-all hover:scale-105"
          >
            Start Quick Practice
            <ChevronRight className="w-4 h-4" />
          </Link>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {[
            {
              title: "Learn Chords",
              description: "Master the essential open chords with interactive diagrams and audio playback",
              icon: Music,
              href: "/chords",
              color: "from-blue-600 to-blue-700"
            },
            {
              title: "Read Tabs",
              description: "Learn to read tablature and play your favorite songs step by step",
              icon: BookOpen,
              href: "/tabs",
              color: "from-purple-600 to-purple-700"
            },
            {
              title: "Practice Tools",
              description: "Use our metronome, tuner, and exercises to improve your skills",
              icon: Target,
              href: "/practice",
              color: "from-green-600 to-green-700"
            }
          ].map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="group"
            >
              <Link href={feature.href}>
                <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-all cursor-pointer h-full">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400">
                    {feature.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div 
          className="mt-20 grid md:grid-cols-4 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          {[
            { number: "8", label: "Essential Chords" },
            { number: "50+", label: "Song Tabs" },
            { number: "15", label: "Lessons" },
            { number: "5", label: "Practice Tools" }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
            >
              <div className="text-4xl font-bold text-blue-500 mb-2">{stat.number}</div>
              <div className="text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}