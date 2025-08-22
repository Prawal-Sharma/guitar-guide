"use client";

import { useState } from "react";
import { ChordDiagram } from "@/components/chords/ChordDiagram";
import { fullChordsDatabase, getChordsByDifficulty, getChordsByCategory } from "@/lib/chords-data";
import { guitarAudio } from "@/lib/audio/guitar-audio";
import { Search } from "lucide-react";

export default function ChordsPage() {
  const [selectedChord, setSelectedChord] = useState<string>("C");
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedDifficulty, setSelectedDifficulty] = useState<'all' | 'beginner' | 'intermediate' | 'advanced'>('all');
  const [searchQuery, setSearchQuery] = useState("");
  
  const beginnerChords = getChordsByDifficulty('beginner');
  const intermediateChords = getChordsByDifficulty('intermediate');
  const advancedChords = getChordsByDifficulty('advanced');
  
  const majorChords = getChordsByCategory('major');
  const minorChords = getChordsByCategory('minor');
  const seventhChords = getChordsByCategory('7th');
  const maj7Chords = getChordsByCategory('maj7');
  const min7Chords = getChordsByCategory('min7');
  const susChords = getChordsByCategory('sus');
  const addChords = getChordsByCategory('add');
  const powerChords = getChordsByCategory('power');
  const dimChords = getChordsByCategory('dim');
  const augChords = getChordsByCategory('aug');
  const ninthChords = getChordsByCategory('9th');
  const eleventhChords = getChordsByCategory('11th');
  const thirteenthChords = getChordsByCategory('13th');

  const handlePlayChord = async () => {
    if (isPlaying) return;
    const chord = fullChordsDatabase[selectedChord];
    if (!chord) return;
    
    setIsPlaying(true);
    await guitarAudio.playChord(chord);
    setTimeout(() => setIsPlaying(false), 1000);
  };

  const filteredChords = (chords: string[]) => {
    if (!searchQuery) return chords;
    return chords.filter(chord => 
      chord.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  const ChordButton = ({ name }: { name: string }) => (
    <button
      onClick={() => setSelectedChord(name)}
      aria-pressed={selectedChord === name}
      aria-label={`Select ${name} chord`}
      className={`p-2 rounded text-xs font-medium transition-colors ${
        selectedChord === name
          ? "bg-blue-600 text-white"
          : "bg-gray-700 text-gray-300 hover:bg-gray-600"
      }`}
    >
      {name}
    </button>
  );

  const currentChord = fullChordsDatabase[selectedChord];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">Chord Library</h1>
          <p className="text-gray-300 text-lg">
            Master over 60+ guitar chords with interactive diagrams
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <div className="bg-gray-800 rounded-lg p-6 sticky top-4 max-h-[calc(100vh-8rem)] overflow-y-auto">
              <h2 className="text-xl font-bold text-white mb-4">Select a Chord</h2>
              
              {/* Search Bar */}
              <div className="mb-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Search chords..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 bg-gray-900 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              
              {/* Difficulty Filter */}
              <div className="mb-4">
                <div className="flex gap-1 p-1 bg-gray-900 rounded-lg">
                  {(['all', 'beginner', 'intermediate', 'advanced'] as const).map((level) => (
                    <button
                      key={level}
                      onClick={() => setSelectedDifficulty(level)}
                      className={`flex-1 px-3 py-2 rounded text-xs font-medium transition-colors capitalize ${
                        selectedDifficulty === level
                          ? "bg-blue-600 text-white"
                          : "text-gray-400 hover:text-white"
                      }`}
                    >
                      {level}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="space-y-4">
                {/* Beginner Chords */}
                {(selectedDifficulty === 'all' || selectedDifficulty === 'beginner') && (
                  <>
                    <div>
                      <h3 className="text-sm font-semibold text-green-400 mb-2">🟢 Beginner - Major</h3>
                      <div className="grid grid-cols-4 gap-2">
                        {filteredChords(majorChords.filter(c => beginnerChords.includes(c))).map((name) => (
                          <ChordButton key={name} name={name} />
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-sm font-semibold text-green-400 mb-2">🟢 Beginner - Minor</h3>
                      <div className="grid grid-cols-4 gap-2">
                        {filteredChords(minorChords.filter(c => beginnerChords.includes(c))).map((name) => (
                          <ChordButton key={name} name={name} />
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-sm font-semibold text-green-400 mb-2">🟢 Beginner - 7th</h3>
                      <div className="grid grid-cols-3 gap-2">
                        {filteredChords(seventhChords.filter(c => beginnerChords.includes(c))).map((name) => (
                          <ChordButton key={name} name={name} />
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-sm font-semibold text-green-400 mb-2">🟢 Beginner - Sus</h3>
                      <div className="grid grid-cols-3 gap-2">
                        {filteredChords(susChords.filter(c => beginnerChords.includes(c))).map((name) => (
                          <ChordButton key={name} name={name} />
                        ))}
                      </div>
                    </div>
                  </>
                )}
                
                {/* Intermediate Chords */}
                {(selectedDifficulty === 'all' || selectedDifficulty === 'intermediate') && (
                  <>
                    <div>
                      <h3 className="text-sm font-semibold text-yellow-400 mb-2">🟡 Intermediate - Barre</h3>
                      <div className="grid grid-cols-3 gap-2">
                        {filteredChords(['F', 'B', 'Bm', 'Fm', 'F#m', 'Cm', 'Gm']).map((name) => (
                          <ChordButton key={name} name={name} />
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-sm font-semibold text-yellow-400 mb-2">🟡 Intermediate - Maj7</h3>
                      <div className="grid grid-cols-3 gap-2">
                        {filteredChords(maj7Chords).map((name) => (
                          <ChordButton key={name} name={name} />
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-sm font-semibold text-yellow-400 mb-2">🟡 Intermediate - Min7</h3>
                      <div className="grid grid-cols-3 gap-2">
                        {filteredChords(min7Chords).map((name) => (
                          <ChordButton key={name} name={name} />
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-sm font-semibold text-yellow-400 mb-2">🟡 Intermediate - Add</h3>
                      <div className="grid grid-cols-3 gap-2">
                        {filteredChords(addChords).map((name) => (
                          <ChordButton key={name} name={name} />
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-sm font-semibold text-yellow-400 mb-2">🟡 Intermediate - Power</h3>
                      <div className="grid grid-cols-4 gap-2">
                        {filteredChords(powerChords).map((name) => (
                          <ChordButton key={name} name={name} />
                        ))}
                      </div>
                    </div>
                  </>
                )}
                
                {/* Advanced Chords */}
                {(selectedDifficulty === 'all' || selectedDifficulty === 'advanced') && (
                  <>
                    <div>
                      <h3 className="text-sm font-semibold text-red-400 mb-2">🔴 Advanced - 9th</h3>
                      <div className="grid grid-cols-3 gap-2">
                        {filteredChords(ninthChords).map((name) => (
                          <ChordButton key={name} name={name} />
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-sm font-semibold text-red-400 mb-2">🔴 Advanced - 11th & 13th</h3>
                      <div className="grid grid-cols-3 gap-2">
                        {filteredChords([...eleventhChords, ...thirteenthChords]).map((name) => (
                          <ChordButton key={name} name={name} />
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-sm font-semibold text-red-400 mb-2">🔴 Advanced - Dim & Aug</h3>
                      <div className="grid grid-cols-3 gap-2">
                        {filteredChords([...dimChords, ...augChords]).map((name) => (
                          <ChordButton key={name} name={name} />
                        ))}
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <div className="bg-gray-800 rounded-lg p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-white">{currentChord?.name || selectedChord}</h2>
                  {currentChord && (
                    <div className="flex gap-2 mt-2">
                      {currentChord.difficulty && (
                        <span className={`px-2 py-1 rounded text-xs font-medium ${
                          currentChord.difficulty === 'beginner' ? 'bg-green-600 text-white' :
                          currentChord.difficulty === 'intermediate' ? 'bg-yellow-600 text-white' :
                          'bg-red-600 text-white'
                        }`}>
                          {currentChord.difficulty}
                        </span>
                      )}
                      {currentChord.category && (
                        <span className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs">
                          {currentChord.category}
                        </span>
                      )}
                      {currentChord.commonIn && currentChord.commonIn.length > 0 && (
                        <span className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs">
                          {currentChord.commonIn.join(', ')}
                        </span>
                      )}
                    </div>
                  )}
                </div>
              </div>
              
              <div className="flex justify-center mb-6">
                {currentChord && (
                  <ChordDiagram 
                    chord={currentChord} 
                    size={250}
                  />
                )}
              </div>
              
              <div className="text-center mb-6">
                <button 
                  onClick={handlePlayChord}
                  disabled={isPlaying}
                  aria-label={isPlaying ? "Playing chord" : `Play ${selectedChord} chord`}
                  className={`px-8 py-3 rounded-lg transition-colors ${
                    isPlaying 
                      ? "bg-gray-600 text-gray-400 cursor-not-allowed" 
                      : "bg-blue-600 text-white hover:bg-blue-700"
                  }`}
                >
                  {isPlaying ? "🔊 Playing..." : "🔊 Play Chord"}
                </button>
              </div>
              
              <div className="bg-gray-900 rounded p-6">
                <h3 className="text-lg font-semibold text-white mb-3">Chord Tips</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Press firmly behind the fret, not on top of it</li>
                  <li>• Keep your thumb on the back of the neck for support</li>
                  <li>• Curve your fingers to avoid muting adjacent strings</li>
                  <li>• Practice transitioning to and from this chord</li>
                  {currentChord?.barres && currentChord.barres.length > 0 && (
                    <li>• This is a barre chord - use your index finger to press multiple strings</li>
                  )}
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
              <a href="/practice/progression" className="text-blue-400 hover:text-blue-300 text-sm">
                Practice →
              </a>
            </div>
            <div className="bg-gray-900 rounded p-4">
              <h3 className="text-lg font-semibold text-white mb-2">Am - F - C - G</h3>
              <p className="text-gray-400 text-sm mb-3">
                Classic pop progression used in countless hits
              </p>
              <a href="/practice/progression" className="text-blue-400 hover:text-blue-300 text-sm">
                Practice →
              </a>
            </div>
            <div className="bg-gray-900 rounded p-4">
              <h3 className="text-lg font-semibold text-white mb-2">Em - G - D - C</h3>
              <p className="text-gray-400 text-sm mb-3">
                Emotional progression perfect for ballads
              </p>
              <a href="/practice/progression" className="text-blue-400 hover:text-blue-300 text-sm">
                Practice →
              </a>
            </div>
            <div className="bg-gray-900 rounded p-4">
              <h3 className="text-lg font-semibold text-white mb-2">D - A - Bm - G</h3>
              <p className="text-gray-400 text-sm mb-3">
                Uplifting progression great for practice
              </p>
              <a href="/practice/progression" className="text-blue-400 hover:text-blue-300 text-sm">
                Practice →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}