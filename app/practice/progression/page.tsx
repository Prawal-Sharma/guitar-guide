"use client";

import { useState, useEffect, useCallback } from "react";
import { ChordDiagram } from "@/components/chords/ChordDiagram";
import { fullChordsDatabase } from "@/lib/chords-data";
import { guitarAudio } from "@/lib/audio/guitar-audio";
import { Play, Pause, RotateCcw, Settings } from "lucide-react";

interface Progression {
  name: string;
  chords: string[];
  tempo: number;
  description: string;
  difficulty: "beginner" | "intermediate" | "advanced";
}

const progressions: Progression[] = [
  {
    name: "G - C - D",
    chords: ["G", "C", "D"],
    tempo: 120,
    description: "The most common progression in popular music",
    difficulty: "beginner",
  },
  {
    name: "Am - F - C - G",
    chords: ["Am", "F", "C", "G"],
    tempo: 100,
    description: "Classic pop progression used in countless hits",
    difficulty: "intermediate",
  },
  {
    name: "Em - G - D - C",
    chords: ["Em", "G", "D", "C"],
    tempo: 90,
    description: "Emotional progression perfect for ballads",
    difficulty: "beginner",
  },
  {
    name: "D - A - Bm - G",
    chords: ["D", "A", "Bm", "G"],
    tempo: 110,
    description: "Uplifting progression great for practice",
    difficulty: "intermediate",
  },
  {
    name: "C - Am - F - G",
    chords: ["C", "Am", "F", "G"],
    tempo: 120,
    description: "50s progression, doo-wop classic",
    difficulty: "beginner",
  },
  {
    name: "G - Em - C - D",
    chords: ["G", "Em", "C", "D"],
    tempo: 100,
    description: "Versatile progression for many styles",
    difficulty: "beginner",
  },
];

export default function ProgressionPracticePage() {
  const [selectedProgression, setSelectedProgression] = useState<Progression>(progressions[0]);
  const [currentChordIndex, setCurrentChordIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [tempo, setTempo] = useState(selectedProgression.tempo);
  const [beatsPerChord, setBeatsPerChord] = useState(4);
  const [loopCount, setLoopCount] = useState(0);
  const [showSettings, setShowSettings] = useState(false);

  const currentChord = selectedProgression.chords[currentChordIndex];
  const chordData = fullChordsDatabase[currentChord];

  const playChord = useCallback(async () => {
    if (chordData) {
      await guitarAudio.playChord(chordData);
    }
  }, [chordData]);

  useEffect(() => {
    if (!isPlaying) return;

    const beatDuration = 60000 / tempo;
    const chordDuration = beatDuration * beatsPerChord;

    const interval = setInterval(() => {
      setCurrentChordIndex((prev) => {
        const nextIndex = (prev + 1) % selectedProgression.chords.length;
        if (nextIndex === 0) {
          setLoopCount((count) => count + 1);
        }
        return nextIndex;
      });
    }, chordDuration);

    return () => clearInterval(interval);
  }, [isPlaying, tempo, beatsPerChord, selectedProgression.chords.length]);

  useEffect(() => {
    if (isPlaying) {
      playChord();
    }
  }, [currentChordIndex, isPlaying, playChord]);

  const handlePlayPause = () => {
    if (!isPlaying) {
      setCurrentChordIndex(0);
      setLoopCount(0);
    }
    setIsPlaying(!isPlaying);
  };

  const handleReset = () => {
    setIsPlaying(false);
    setCurrentChordIndex(0);
    setLoopCount(0);
  };

  const handleProgressionChange = (progression: Progression) => {
    setSelectedProgression(progression);
    setTempo(progression.tempo);
    handleReset();
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">Chord Progression Practice</h1>
          <p className="text-gray-300 text-lg">
            Master chord transitions with guided progression practice
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <div className="bg-gray-800 rounded-lg p-6">
              <h2 className="text-xl font-bold text-white mb-4">Select Progression</h2>
              
              <div className="space-y-2">
                {progressions.map((prog) => (
                  <button
                    key={prog.name}
                    onClick={() => handleProgressionChange(prog)}
                    className={`w-full text-left p-3 rounded-lg transition-colors ${
                      selectedProgression.name === prog.name
                        ? "bg-blue-600 text-white"
                        : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                    }`}
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="font-medium">{prog.name}</div>
                        <div className="text-sm opacity-80 mt-1">{prog.description}</div>
                      </div>
                      <span className={`text-xs px-2 py-1 rounded ${
                        prog.difficulty === "beginner" ? "bg-green-600" :
                        prog.difficulty === "intermediate" ? "bg-yellow-600" :
                        "bg-red-600"
                      }`}>
                        {prog.difficulty}
                      </span>
                    </div>
                  </button>
                ))}
              </div>

              <div className="mt-6">
                <button
                  onClick={() => setShowSettings(!showSettings)}
                  className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                >
                  <Settings size={16} />
                  <span>Settings</span>
                </button>
                
                {showSettings && (
                  <div className="mt-4 space-y-4 p-4 bg-gray-900 rounded-lg">
                    <div>
                      <label className="text-sm text-gray-400 block mb-2">
                        Tempo (BPM): {tempo}
                      </label>
                      <input
                        type="range"
                        min="60"
                        max="180"
                        value={tempo}
                        onChange={(e) => setTempo(Number(e.target.value))}
                        className="w-full"
                      />
                    </div>
                    
                    <div>
                      <label className="text-sm text-gray-400 block mb-2">
                        Beats per Chord: {beatsPerChord}
                      </label>
                      <input
                        type="range"
                        min="1"
                        max="8"
                        value={beatsPerChord}
                        onChange={(e) => setBeatsPerChord(Number(e.target.value))}
                        className="w-full"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-gray-800 rounded-lg p-8">
              <div className="mb-6">
                <div className="flex justify-center gap-4 mb-8">
                  {selectedProgression.chords.map((chord, index) => (
                    <div
                      key={index}
                      className={`px-6 py-3 rounded-lg font-medium transition-all ${
                        index === currentChordIndex
                          ? "bg-blue-600 text-white scale-110"
                          : index < currentChordIndex
                          ? "bg-gray-700 text-gray-400"
                          : "bg-gray-700 text-gray-300"
                      }`}
                    >
                      {chord}
                    </div>
                  ))}
                </div>

                <div className="flex justify-center mb-6">
                  {chordData && (
                    <ChordDiagram 
                      chord={chordData} 
                      size={250}
                    />
                  )}
                </div>

                <div className="flex justify-center gap-4 mb-6">
                  <button
                    onClick={handlePlayPause}
                    className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    {isPlaying ? <Pause size={20} /> : <Play size={20} />}
                    {isPlaying ? "Pause" : "Start Practice"}
                  </button>
                  
                  <button
                    onClick={handleReset}
                    className="flex items-center gap-2 px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
                  >
                    <RotateCcw size={20} />
                    Reset
                  </button>
                </div>

                {isPlaying && (
                  <div className="text-center">
                    <p className="text-gray-400">
                      Loop: {loopCount + 1} | Tempo: {tempo} BPM | {beatsPerChord} beats per chord
                    </p>
                  </div>
                )}
              </div>

              <div className="bg-gray-900 rounded p-6">
                <h3 className="text-lg font-semibold text-white mb-3">Practice Tips</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Start slowly and gradually increase the tempo</li>
                  <li>• Focus on clean chord transitions</li>
                  <li>• Keep your strumming hand steady and relaxed</li>
                  <li>• Practice with a metronome to maintain timing</li>
                  <li>• Try different strumming patterns once comfortable</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}