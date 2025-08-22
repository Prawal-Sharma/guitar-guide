"use client";

import { useState, useEffect } from "react";
import { ChordDiagram } from "@/components/chords/ChordDiagram";
import { fullChordsDatabase, getChordsByDifficulty, getChordsByCategory } from "@/lib/chords-data";
import { guitarAudio } from "@/lib/audio/guitar-audio";
import { Search, Heart, Volume2, Info } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ChordsPage() {
  const [selectedChord, setSelectedChord] = useState<string>("C");
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedDifficulty, setSelectedDifficulty] = useState<'all' | 'beginner' | 'intermediate' | 'advanced'>('all');
  const [searchQuery, setSearchQuery] = useState("");
  const [favoriteChords, setFavoriteChords] = useState<Set<string>>(new Set());
  const [hoveredChord, setHoveredChord] = useState<string | null>(null);
  const [showFavorites, setShowFavorites] = useState(false);
  
  useEffect(() => {
    const stored = localStorage.getItem("favoriteChords");
    if (stored) {
      setFavoriteChords(new Set(JSON.parse(stored)));
    }
  }, []);
  
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

  const handlePlayChord = async (chordName?: string) => {
    if (isPlaying) return;
    const chord = fullChordsDatabase[chordName || selectedChord];
    if (!chord) return;
    
    setIsPlaying(true);
    await guitarAudio.playChord(chord);
    setTimeout(() => setIsPlaying(false), 1000);
  };
  
  const toggleFavorite = (chordName: string) => {
    const newFavorites = new Set(favoriteChords);
    if (newFavorites.has(chordName)) {
      newFavorites.delete(chordName);
    } else {
      newFavorites.add(chordName);
    }
    setFavoriteChords(newFavorites);
    localStorage.setItem("favoriteChords", JSON.stringify(Array.from(newFavorites)));
  };
  
  const handleChordHover = async (chordName: string) => {
    setHoveredChord(chordName);
    // Optional: Auto-play on hover (can be enabled in settings)
    const autoPlayOnHover = localStorage.getItem("autoPlayChordOnHover") === "true";
    if (autoPlayOnHover && !isPlaying) {
      await handlePlayChord(chordName);
    }
  };

  const filteredChords = (chords: string[]) => {
    let filtered = chords;
    
    if (showFavorites) {
      filtered = filtered.filter(chord => favoriteChords.has(chord));
    }
    
    if (searchQuery) {
      filtered = filtered.filter(chord => 
        chord.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    return filtered;
  };

  const ChordButton = ({ name }: { name: string }) => (
    <motion.button
      onClick={() => setSelectedChord(name)}
      onMouseEnter={() => handleChordHover(name)}
      onMouseLeave={() => setHoveredChord(null)}
      aria-pressed={selectedChord === name}
      aria-label={`Select ${name} chord`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`relative p-2 rounded text-xs font-medium transition-all ${
        selectedChord === name
          ? "bg-blue-600 text-white ring-2 ring-blue-400"
          : hoveredChord === name
          ? "bg-gray-600 text-white"
          : "bg-gray-700 text-gray-300 hover:bg-gray-600"
      }`}
    >
      {name}
      {favoriteChords.has(name) && (
        <Heart className="absolute -top-1 -right-1 w-3 h-3 text-red-500 fill-current" />
      )}
    </motion.button>
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
              
              {/* Favorites Toggle */}
              <div className="mb-4">
                <button
                  onClick={() => setShowFavorites(!showFavorites)}
                  className={`w-full px-4 py-2 rounded-lg flex items-center justify-center gap-2 transition-colors ${
                    showFavorites
                      ? "bg-red-600 text-white"
                      : "bg-gray-900 text-gray-400 hover:text-white"
                  }`}
                >
                  <Heart className={`w-4 h-4 ${showFavorites ? "fill-current" : ""}`} />
                  <span>{showFavorites ? "Showing Favorites" : "Show Favorites"}</span>
                  {favoriteChords.size > 0 && (
                    <span className="text-xs bg-black/30 px-2 py-0.5 rounded-full">
                      {favoriteChords.size}
                    </span>
                  )}
                </button>
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
            <motion.div 
              className="bg-gray-800 rounded-lg p-8"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              key={selectedChord}
              transition={{ duration: 0.3 }}
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                    {currentChord?.name || selectedChord}
                    {hoveredChord && hoveredChord !== selectedChord && (
                      <span className="text-sm text-gray-400 font-normal">
                        (hovering: {hoveredChord})
                      </span>
                    )}
                  </h2>
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
              
              <div className="flex justify-center gap-3 mb-6">
                <button 
                  onClick={() => handlePlayChord()}
                  disabled={isPlaying}
                  aria-label={isPlaying ? "Playing chord" : `Play ${selectedChord} chord`}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all ${
                    isPlaying 
                      ? "bg-gray-600 text-gray-400 cursor-not-allowed" 
                      : "bg-blue-600 text-white hover:bg-blue-700 hover:scale-105"
                  }`}
                >
                  <Volume2 className="w-5 h-5" />
                  {isPlaying ? "Playing..." : "Play Chord"}
                </button>
                
                <button
                  onClick={() => toggleFavorite(selectedChord)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all ${
                    favoriteChords.has(selectedChord)
                      ? "bg-red-600 text-white hover:bg-red-700"
                      : "bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white"
                  }`}
                >
                  <Heart className={`w-5 h-5 ${favoriteChords.has(selectedChord) ? "fill-current" : ""}`} />
                  {favoriteChords.has(selectedChord) ? "Favorited" : "Add to Favorites"}
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
            </motion.div>
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
              <Link href="/practice/progression" className="text-blue-400 hover:text-blue-300 text-sm">
                Practice →
              </Link>
            </div>
            <div className="bg-gray-900 rounded p-4">
              <h3 className="text-lg font-semibold text-white mb-2">Am - F - C - G</h3>
              <p className="text-gray-400 text-sm mb-3">
                Classic pop progression used in countless hits
              </p>
              <Link href="/practice/progression" className="text-blue-400 hover:text-blue-300 text-sm">
                Practice →
              </Link>
            </div>
            <div className="bg-gray-900 rounded p-4">
              <h3 className="text-lg font-semibold text-white mb-2">Em - G - D - C</h3>
              <p className="text-gray-400 text-sm mb-3">
                Emotional progression perfect for ballads
              </p>
              <Link href="/practice/progression" className="text-blue-400 hover:text-blue-300 text-sm">
                Practice →
              </Link>
            </div>
            <div className="bg-gray-900 rounded p-4">
              <h3 className="text-lg font-semibold text-white mb-2">D - A - Bm - G</h3>
              <p className="text-gray-400 text-sm mb-3">
                Uplifting progression great for practice
              </p>
              <Link href="/practice/progression" className="text-blue-400 hover:text-blue-300 text-sm">
                Practice →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}