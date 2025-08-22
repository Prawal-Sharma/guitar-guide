"use client";

import { use } from "react";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, Play, Pause, RotateCcw, Music, Clock, Hash, Download, Heart } from "lucide-react";
import Link from "next/link";
import { getTabById } from "@/lib/tabs-data";
import { useState, useEffect } from "react";
import * as Tone from "tone";

export default function TabDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const song = getTabById(resolvedParams.id);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTempo, setCurrentTempo] = useState(song?.tempo || 80);
  const [isFavorite, setIsFavorite] = useState(false);
  
  useEffect(() => {
    // Check if song is in favorites
    const favorites = JSON.parse(localStorage.getItem("favoriteTabs") || "[]");
    setIsFavorite(favorites.includes(resolvedParams.id));
  }, [resolvedParams.id]);

  if (!song) {
    notFound();
  }

  const toggleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem("favoriteTabs") || "[]");
    if (isFavorite) {
      const updated = favorites.filter((id: string) => id !== song.id);
      localStorage.setItem("favoriteTabs", JSON.stringify(updated));
    } else {
      favorites.push(song.id);
      localStorage.setItem("favoriteTabs", JSON.stringify(favorites));
    }
    setIsFavorite(!isFavorite);
  };

  const handlePlayPause = async () => {
    if (isPlaying) {
      await Tone.Transport.stop();
      setIsPlaying(false);
    } else {
      await Tone.start();
      Tone.Transport.bpm.value = currentTempo;
      await Tone.Transport.start();
      setIsPlaying(true);
    }
  };

  const handleReset = async () => {
    await Tone.Transport.stop();
    Tone.Transport.position = 0;
    setIsPlaying(false);
  };

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
          {/* Back Button */}
          <Link href="/tabs" className="inline-flex items-center text-gray-400 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Tab Library
          </Link>

          {/* Song Header */}
          <div className="bg-gray-800 rounded-lg p-8 mb-8">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h1 className="text-3xl font-bold text-white mb-2">{song.title}</h1>
                <p className="text-xl text-gray-400 mb-4">by {song.artist}</p>
                
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
                </div>
              </div>
              
              <div className="flex gap-2">
                <button
                  onClick={toggleFavorite}
                  className={`p-3 rounded-lg transition-colors ${
                    isFavorite 
                      ? "bg-red-600 text-white hover:bg-red-700" 
                      : "bg-gray-700 text-gray-400 hover:text-white"
                  }`}
                >
                  <Heart className={`w-5 h-5 ${isFavorite ? "fill-current" : ""}`} />
                </button>
                
                <button className="p-3 bg-gray-700 text-gray-400 hover:text-white rounded-lg transition-colors">
                  <Download className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Chords Used */}
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-gray-400 mb-2">Chords Used:</h3>
              <div className="flex gap-2">
                {song.chords.map((chord) => (
                  <Link
                    key={chord}
                    href={`/chords?search=${chord}`}
                    className="px-3 py-1 bg-gray-700 text-gray-300 rounded hover:bg-gray-600 transition-colors"
                  >
                    {chord}
                  </Link>
                ))}
              </div>
            </div>

            {/* Strumming Pattern */}
            {song.strummingPattern && (
              <div>
                <h3 className="text-sm font-semibold text-gray-400 mb-2">Strumming Pattern:</h3>
                <div className="font-mono text-xl text-white bg-gray-900 rounded px-4 py-2 inline-block">
                  {song.strummingPattern}
                </div>
                <p className="text-xs text-gray-500 mt-1">D = Down, U = Up, X = Mute</p>
              </div>
            )}
          </div>

          {/* Playback Controls */}
          <div className="bg-gray-800 rounded-lg p-6 mb-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <button
                  onClick={handlePlayPause}
                  className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  {isPlaying ? (
                    <>
                      <Pause className="w-5 h-5" />
                      Pause
                    </>
                  ) : (
                    <>
                      <Play className="w-5 h-5" />
                      Play
                    </>
                  )}
                </button>
                
                <button
                  onClick={handleReset}
                  className="p-3 bg-gray-700 text-gray-400 hover:text-white rounded-lg transition-colors"
                >
                  <RotateCcw className="w-5 h-5" />
                </button>
              </div>
              
              <div className="flex items-center gap-4">
                <label className="text-gray-400 text-sm">Tempo:</label>
                <div className="flex items-center gap-2">
                  <input
                    type="range"
                    min="40"
                    max="200"
                    value={currentTempo}
                    onChange={(e) => {
                      setCurrentTempo(Number(e.target.value));
                      if (Tone.Transport.state === "started") {
                        Tone.Transport.bpm.value = Number(e.target.value);
                      }
                    }}
                    className="w-32"
                  />
                  <span className="text-white font-mono w-12">{currentTempo}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Tab Content */}
          <div className="bg-gray-800 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Guitar Tab</h2>
            
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto">
              <pre className="font-mono text-sm text-white whitespace-pre">
                {song.tab}
              </pre>
            </div>

            {/* Tab Legend */}
            <div className="mt-6 p-4 bg-gray-900 rounded-lg">
              <h3 className="text-sm font-semibold text-gray-400 mb-2">Tab Notation:</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs text-gray-400">
                <div>h = hammer-on</div>
                <div>p = pull-off</div>
                <div>b = bend</div>
                <div>r = release bend</div>
                <div>/ = slide up</div>
                <div>\ = slide down</div>
                <div>v = vibrato</div>
                <div>t = tap</div>
                <div>x = muted note</div>
                <div>PM = palm mute</div>
                <div>~ = let ring</div>
                <div>() = ghost note</div>
              </div>
            </div>
          </div>

          {/* Practice Tips */}
          <div className="mt-8 bg-gray-800 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Practice Tips</h2>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                Start slowly at 50-60% of the original tempo and gradually increase speed
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                Practice the chord transitions separately before attempting the full song
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                Use a metronome to maintain consistent timing
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                Focus on clean, clear notes rather than speed
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                Break the song into sections and master each part individually
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
}