"use client";

import { useState } from "react";
import { ChordDiagram } from "@/components/chords/ChordDiagram";
import { chordsDatabase, getAllChordNames } from "@/lib/chords-data";

export default function ChordsPage() {
  const [selectedChord, setSelectedChord] = useState<string>("C");
  const chordNames = getAllChordNames();
  
  const basicChords = ["C", "D", "G", "E", "A", "Em", "Am", "Dm"];
  const seventhChords = ["G7", "C7", "D7"];
  const otherChords = chordNames.filter(
    name => !basicChords.includes(name) && !seventhChords.includes(name)
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">Chord Library</h1>
          <p className="text-gray-300 text-lg">
            Master essential guitar chords with interactive diagrams
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <div className="bg-gray-800 rounded-lg p-6 sticky top-4">
              <h2 className="text-xl font-bold text-white mb-4">Select a Chord</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-semibold text-gray-400 mb-2">Basic Chords</h3>
                  <div className="grid grid-cols-4 gap-2">
                    {basicChords.map((name) => (
                      <button
                        key={name}
                        onClick={() => setSelectedChord(name)}
                        className={`p-2 rounded text-sm font-medium transition-colors ${
                          selectedChord === name
                            ? "bg-blue-600 text-white"
                            : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                        }`}
                      >
                        {name}
                      </button>
                    ))}
                  </div>
                </div>
                
                {seventhChords.length > 0 && (
                  <div>
                    <h3 className="text-sm font-semibold text-gray-400 mb-2">7th Chords</h3>
                    <div className="grid grid-cols-4 gap-2">
                      {seventhChords.map((name) => (
                        <button
                          key={name}
                          onClick={() => setSelectedChord(name)}
                          className={`p-2 rounded text-sm font-medium transition-colors ${
                            selectedChord === name
                              ? "bg-blue-600 text-white"
                              : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                          }`}
                        >
                          {name}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
                
                {otherChords.length > 0 && (
                  <div>
                    <h3 className="text-sm font-semibold text-gray-400 mb-2">Power Chords</h3>
                    <div className="grid grid-cols-4 gap-2">
                      {otherChords.map((name) => (
                        <button
                          key={name}
                          onClick={() => setSelectedChord(name)}
                          className={`p-2 rounded text-sm font-medium transition-colors ${
                            selectedChord === name
                              ? "bg-blue-600 text-white"
                              : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                          }`}
                        >
                          {name}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <div className="bg-gray-800 rounded-lg p-8">
              <div className="flex justify-center mb-6">
                {chordsDatabase[selectedChord] && (
                  <ChordDiagram 
                    chord={chordsDatabase[selectedChord]} 
                    size={250}
                  />
                )}
              </div>
              
              <div className="text-center mb-6">
                <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  🔊 Play Chord
                </button>
              </div>
              
              <div className="bg-gray-900 rounded p-6">
                <h3 className="text-lg font-semibold text-white mb-3">Chord Tips</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Press firmly behind the fret, not on top of it</li>
                  <li>• Keep your thumb on the back of the neck for support</li>
                  <li>• Curve your fingers to avoid muting adjacent strings</li>
                  <li>• Practice transitioning to and from this chord</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-gray-800 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-white mb-4">Chord Progressions</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-900 rounded p-4">
              <h3 className="text-lg font-semibold text-white mb-2">G - C - D</h3>
              <p className="text-gray-400 text-sm mb-3">
                The most common progression in popular music
              </p>
              <button className="text-blue-400 hover:text-blue-300 text-sm">
                Practice →
              </button>
            </div>
            <div className="bg-gray-900 rounded p-4">
              <h3 className="text-lg font-semibold text-white mb-2">Am - F - C - G</h3>
              <p className="text-gray-400 text-sm mb-3">
                Classic pop progression used in countless hits
              </p>
              <button className="text-blue-400 hover:text-blue-300 text-sm">
                Practice →
              </button>
            </div>
            <div className="bg-gray-900 rounded p-4">
              <h3 className="text-lg font-semibold text-white mb-2">Em - G - D - C</h3>
              <p className="text-gray-400 text-sm mb-3">
                Emotional progression perfect for ballads
              </p>
              <button className="text-blue-400 hover:text-blue-300 text-sm">
                Practice →
              </button>
            </div>
            <div className="bg-gray-900 rounded p-4">
              <h3 className="text-lg font-semibold text-white mb-2">D - A - Bm - G</h3>
              <p className="text-gray-400 text-sm mb-3">
                Uplifting progression great for practice
              </p>
              <button className="text-blue-400 hover:text-blue-300 text-sm">
                Practice →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}