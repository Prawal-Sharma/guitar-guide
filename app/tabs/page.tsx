"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Search, Music, Clock, Hash, TrendingUp } from "lucide-react";
import Link from "next/link";
import { tabsDatabase, searchTabs } from "@/lib/tabs-data";

export default function TabsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState("all");

  const filteredSongs = useMemo(() => {
    return searchTabs(searchQuery, selectedDifficulty);
  }, [searchQuery, selectedDifficulty]);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner":
        return "bg-green-900 text-green-300 border-green-700";
      case "Intermediate":
        return "bg-yellow-900 text-yellow-300 border-yellow-700";
      case "Advanced":
        return "bg-red-900 text-red-300 border-red-700";
      default:
        return "bg-gray-700 text-gray-300";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-white mb-4">Tab Library</h1>
            <p className="text-gray-300 text-lg">
              Learn to play your favorite songs with interactive tablature
            </p>
          </div>

          <div className="bg-gray-800 rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">How to Read Tabs</h2>
            <div className="bg-gray-900 rounded p-6 font-mono text-sm">
              <div className="text-gray-400 mb-2">String names (from highest to lowest pitch):</div>
              <div className="text-white space-y-1">
                <div>e|------------------------ (1st string - thinnest)</div>
                <div>B|------------------------ (2nd string)</div>
                <div>G|------------------------ (3rd string)</div>
                <div>D|------------------------ (4th string)</div>
                <div>A|------------------------ (5th string)</div>
                <div>E|------------------------ (6th string - thickest)</div>
              </div>
              <div className="text-gray-400 mt-4 space-y-1">
                <div>• Numbers = Fret positions (0 = open string)</div>
                <div>• x = Muted/Don&apos;t play</div>
                <div>• h = Hammer-on | p = Pull-off | / = Slide up | \ = Slide down</div>
              </div>
            </div>
          </div>

          {/* Search and Filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for songs, artists, or chords..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:border-blue-500 focus:outline-none"
              />
            </div>
            
            <div className="flex gap-2">
              <button
                onClick={() => setSelectedDifficulty("all")}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  selectedDifficulty === "all"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-800 text-gray-400 hover:text-white"
                }`}
              >
                All Levels
              </button>
              <button
                onClick={() => setSelectedDifficulty("Beginner")}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  selectedDifficulty === "Beginner"
                    ? "bg-green-600 text-white"
                    : "bg-gray-800 text-gray-400 hover:text-white"
                }`}
              >
                Beginner
              </button>
              <button
                onClick={() => setSelectedDifficulty("Intermediate")}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  selectedDifficulty === "Intermediate"
                    ? "bg-yellow-600 text-white"
                    : "bg-gray-800 text-gray-400 hover:text-white"
                }`}
              >
                Intermediate
              </button>
              <button
                onClick={() => setSelectedDifficulty("Advanced")}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  selectedDifficulty === "Advanced"
                    ? "bg-red-600 text-white"
                    : "bg-gray-800 text-gray-400 hover:text-white"
                }`}
              >
                Advanced
              </button>
            </div>
          </div>

          {/* Results count */}
          <div className="text-gray-400 mb-4">
            Showing {filteredSongs.length} of {tabsDatabase.length} songs
          </div>

          {/* Songs List */}
          <div className="space-y-4">
            {filteredSongs.map((song, index) => (
              <motion.div
                key={song.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Link href={`/tabs/${song.id}`}>
                  <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-all hover:scale-[1.01] cursor-pointer">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-white mb-1">
                          {song.title}
                        </h3>
                        <p className="text-gray-400 mb-3">by {song.artist}</p>
                        
                        <div className="flex flex-wrap items-center gap-3">
                          <span className={`text-sm px-3 py-1 rounded border ${getDifficultyColor(song.difficulty)}`}>
                            {song.difficulty}
                          </span>
                          
                          <div className="flex items-center gap-1 text-gray-400 text-sm">
                            <Music className="w-4 h-4" />
                            <span>{song.genre}</span>
                          </div>
                          
                          <div className="flex items-center gap-1 text-gray-400 text-sm">
                            <Clock className="w-4 h-4" />
                            <span>{song.tempo} BPM</span>
                          </div>
                          
                          <div className="flex items-center gap-1 text-gray-400 text-sm">
                            <Hash className="w-4 h-4" />
                            <span>{song.key}</span>
                          </div>
                          
                          <div className="flex gap-1">
                            {song.chords.map((chord) => (
                              <span
                                key={chord}
                                className="text-xs px-2 py-1 bg-gray-700 text-gray-300 rounded"
                              >
                                {chord}
                              </span>
                            ))}
                          </div>
                          
                          <div className="flex items-center gap-1 text-gray-500 text-sm ml-auto">
                            <TrendingUp className="w-4 h-4" />
                            <span>{song.plays} plays</span>
                          </div>
                        </div>
                      </div>
                      
                      <button className="ml-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
                        View Tab
                      </button>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {filteredSongs.length === 0 && (
            <div className="text-center py-12">
              <Music className="w-16 h-16 text-gray-600 mx-auto mb-4" />
              <p className="text-gray-400 text-lg">No songs found matching your criteria</p>
              <p className="text-gray-500 text-sm mt-2">Try adjusting your search or filters</p>
            </div>
          )}

          {filteredSongs.length > 0 && filteredSongs.length < tabsDatabase.length && (
            <div className="mt-8 text-center">
              <button 
                onClick={() => {
                  setSearchQuery("");
                  setSelectedDifficulty("all");
                }}
                className="px-6 py-2 text-gray-400 hover:text-white transition-colors"
              >
                Show All Songs →
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}