"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Play, RotateCcw, CheckCircle, Clock, Target } from "lucide-react";
import { TabReader } from "@/components/tabs/TabReader";

const exercises = {
  beginner: [
    {
      id: "chromatic-warmup",
      title: "Chromatic Warm-up",
      description: "Build finger strength and coordination",
      duration: "5 min",
      type: "technique",
      tab: `e|--1--2--3--4--5--4--3--2--1--
B|--1--2--3--4--5--4--3--2--1--
G|--1--2--3--4--5--4--3--2--1--
D|--1--2--3--4--5--4--3--2--1--
A|--1--2--3--4--5--4--3--2--1--
E|--1--2--3--4--5--4--3--2--1--`,
      tips: [
        "Use one finger per fret",
        "Keep fingers close to fretboard",
        "Start slow, focus on accuracy"
      ]
    },
    {
      id: "spider-walk",
      title: "Spider Walk",
      description: "Improve finger independence",
      duration: "5 min",
      type: "technique",
      tab: `e|--1--2--3--4-----4--3--2--1--
B|-----1--2--3--4-----4--3--2--
G|-----------1--2--3--4---------
D|------------------------------
A|------------------------------
E|------------------------------`,
      tips: [
        "Keep unused fingers close to strings",
        "Maintain steady rhythm",
        "Don't lift fingers too high"
      ]
    },
    {
      id: "chord-transitions",
      title: "G-C-D Progression",
      description: "Master basic chord changes",
      duration: "10 min",
      type: "chords",
      progression: ["G", "C", "D", "G"],
      bpm: 60,
      tips: [
        "Practice transitions slowly",
        "Keep common fingers in place",
        "Strum on the beat"
      ]
    }
  ],
  intermediate: [
    {
      id: "pentatonic-scale",
      title: "A Minor Pentatonic",
      description: "Essential scale for lead guitar",
      duration: "10 min",
      type: "scales",
      tab: `e|--5--8--5--8--5--8--5--8--
B|--5--8--5--8--5--8--5--8--
G|--5--7--5--7--5--7--5--7--
D|--5--7--5--7--5--7--5--7--
A|--5--7--5--7--5--7--5--7--
E|--5--8--5--8--5--8--5--8--`,
      tips: [
        "Use alternate picking",
        "Start with downstrokes",
        "Gradually increase speed"
      ]
    },
    {
      id: "hammer-pull",
      title: "Hammer-ons & Pull-offs",
      description: "Smooth legato technique",
      duration: "8 min",
      type: "technique",
      tab: `e|--5h7--7p5--5h7p5----------
B|--5h7--7p5--5h7p5----------
G|--5h7--7p5--5h7p5----------
D|---------------------------
A|---------------------------
E|---------------------------`,
      tips: [
        "Hammer down firmly",
        "Pull off at an angle",
        "Keep notes clear and even"
      ]
    }
  ],
  advanced: [
    {
      id: "sweep-picking",
      title: "Basic Sweep Arpeggios",
      description: "Fluid arpeggio technique",
      duration: "15 min",
      type: "technique",
      tab: `e|--12--17--12------
B|--13------13-------
G|--14------14-------
D|--14------14-------
A|--12------12-------
E|-------------------`,
      tips: [
        "One continuous motion",
        "Mute unwanted strings",
        "Start very slowly"
      ]
    }
  ]
};

export default function ExercisesPage() {
  const [selectedLevel, setSelectedLevel] = useState<"beginner" | "intermediate" | "advanced">("beginner");
  const [selectedExercise, setSelectedExercise] = useState<any>(null);
  const [completedExercises, setCompletedExercises] = useState<Set<string>>(new Set());

  const handleCompleteExercise = (exerciseId: string) => {
    setCompletedExercises(new Set([...completedExercises, exerciseId]));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-8 text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Practice Exercises</h1>
            <p className="text-gray-300 text-lg">
              Structured exercises to improve your technique and skills
            </p>
          </div>

          {/* Level Selector */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex bg-gray-800 rounded-lg p-1">
              {(["beginner", "intermediate", "advanced"] as const).map((level) => (
                <button
                  key={level}
                  onClick={() => setSelectedLevel(level)}
                  className={`px-6 py-2 rounded-lg capitalize transition-colors ${
                    selectedLevel === level
                      ? "bg-blue-600 text-white"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {level}
                </button>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Exercise List */}
            <div className="lg:col-span-1">
              <div className="bg-gray-800 rounded-lg p-6">
                <h2 className="text-xl font-bold text-white mb-4">
                  {selectedLevel.charAt(0).toUpperCase() + selectedLevel.slice(1)} Exercises
                </h2>
                
                <div className="space-y-3">
                  {exercises[selectedLevel].map((exercise, index) => (
                    <motion.div
                      key={exercise.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <button
                        onClick={() => setSelectedExercise(exercise)}
                        className={`w-full text-left p-4 rounded-lg transition-colors ${
                          selectedExercise?.id === exercise.id
                            ? "bg-blue-600"
                            : "bg-gray-700 hover:bg-gray-600"
                        }`}
                      >
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="font-semibold text-white mb-1">
                              {exercise.title}
                            </h3>
                            <p className="text-sm text-gray-300">
                              {exercise.description}
                            </p>
                            <div className="flex items-center gap-3 mt-2 text-xs">
                              <span className="text-gray-400 flex items-center gap-1">
                                <Clock className="w-3 h-3" />
                                {exercise.duration}
                              </span>
                              <span className="px-2 py-1 bg-gray-800 rounded text-gray-300">
                                {exercise.type}
                              </span>
                            </div>
                          </div>
                          {completedExercises.has(exercise.id) && (
                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                          )}
                        </div>
                      </button>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Exercise Detail */}
            <div className="lg:col-span-2">
              {selectedExercise ? (
                <motion.div
                  key={selectedExercise.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="bg-gray-800 rounded-lg p-8"
                >
                  <div className="mb-6">
                    <h2 className="text-2xl font-bold text-white mb-2">
                      {selectedExercise.title}
                    </h2>
                    <p className="text-gray-400">
                      {selectedExercise.description}
                    </p>
                  </div>

                  {/* Tab Display */}
                  {selectedExercise.tab && (
                    <div className="mb-6">
                      <TabReader
                        tab={selectedExercise.tab}
                        title="Exercise Tab"
                        tempo={selectedExercise.bpm || 80}
                      />
                    </div>
                  )}

                  {/* Chord Progression */}
                  {selectedExercise.progression && (
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-white mb-3">
                        Chord Progression
                      </h3>
                      <div className="flex gap-2 mb-4">
                        {selectedExercise.progression.map((chord: string, index: number) => (
                          <div
                            key={index}
                            className="px-4 py-2 bg-gray-700 rounded text-white font-mono"
                          >
                            {chord}
                          </div>
                        ))}
                      </div>
                      <p className="text-sm text-gray-400">
                        Practice at {selectedExercise.bpm} BPM
                      </p>
                    </div>
                  )}

                  {/* Tips */}
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-white mb-3">
                      Practice Tips
                    </h3>
                    <ul className="space-y-2">
                      {selectedExercise.tips.map((tip: string, index: number) => (
                        <li key={index} className="flex items-start text-gray-300">
                          <Target className="w-4 h-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    <button
                      onClick={() => handleCompleteExercise(selectedExercise.id)}
                      className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                        completedExercises.has(selectedExercise.id)
                          ? "bg-green-600 text-white"
                          : "bg-blue-600 hover:bg-blue-700 text-white"
                      }`}
                    >
                      {completedExercises.has(selectedExercise.id) ? (
                        <>
                          <CheckCircle className="w-5 h-5 inline mr-2" />
                          Completed
                        </>
                      ) : (
                        "Mark as Complete"
                      )}
                    </button>
                    
                    <button
                      onClick={() => setSelectedExercise(null)}
                      className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg font-semibold transition-colors"
                    >
                      <RotateCcw className="w-5 h-5 inline mr-2" />
                      Reset
                    </button>
                  </div>
                </motion.div>
              ) : (
                <div className="bg-gray-800 rounded-lg p-8 text-center">
                  <div className="text-gray-400">
                    <Target className="w-16 h-16 mx-auto mb-4 opacity-50" />
                    <p className="text-lg">Select an exercise to begin practicing</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Daily Practice Routine */}
          <motion.div
            className="mt-12 bg-gray-800 rounded-lg p-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="text-2xl font-bold text-white mb-6">Suggested Daily Routine</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-900 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-3">
                  Warm-up (10 min)
                </h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>• Finger stretches</li>
                  <li>• Chromatic exercise</li>
                  <li>• Slow scales</li>
                </ul>
              </div>
              
              <div className="bg-gray-900 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-3">
                  Main Practice (20 min)
                </h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>• Chord transitions</li>
                  <li>• New techniques</li>
                  <li>• Song practice</li>
                </ul>
              </div>
              
              <div className="bg-gray-900 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-3">
                  Cool Down (5 min)
                </h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>• Play favorite riffs</li>
                  <li>• Improvisation</li>
                  <li>• Finger relaxation</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}