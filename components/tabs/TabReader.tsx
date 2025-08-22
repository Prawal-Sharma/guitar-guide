"use client";

import { useState, useEffect, useRef } from "react";
import { Play, Pause, RotateCcw, Plus, Minus } from "lucide-react";
import { guitarAudio } from "@/lib/audio/guitar-audio";

interface TabNote {
  string: number;
  fret: number;
  duration: string;
}

interface TabReaderProps {
  tab: string;
  title?: string;
  tempo?: number;
}

export function TabReader({ tab, title = "Tab Reader", tempo = 120 }: TabReaderProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentPosition, setCurrentPosition] = useState(0);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const [loop, setLoop] = useState(false);
  const stopFunctionRef = useRef<(() => void) | null>(null);

  // Parse tab string into playable notes
  const parseTab = (tabString: string): TabNote[] => {
    const lines = tabString.trim().split('\n');
    const notes: TabNote[] = [];
    
    // Simple parser for demonstration - would need enhancement for real tabs
    lines.forEach((line, stringIndex) => {
      const matches = line.matchAll(/(\d+)/g);
      for (const match of matches) {
        const fret = parseInt(match[0]);
        const position = match.index || 0;
        notes.push({
          string: 6 - stringIndex, // Reverse string order (E is string 6)
          fret,
          duration: "8n"
        });
      }
    });
    
    return notes.sort((a, b) => a.string - b.string);
  };

  const handlePlay = async () => {
    const notes = parseTab(tab);
    if (notes.length === 0) return;

    setIsPlaying(true);
    const adjustedTempo = tempo * playbackSpeed;
    
    const stopFunction = await guitarAudio.playSequence(notes, adjustedTempo);
    stopFunctionRef.current = stopFunction || null;
  };

  const handleStop = () => {
    if (stopFunctionRef.current) {
      stopFunctionRef.current();
      stopFunctionRef.current = null;
    }
    setIsPlaying(false);
    setCurrentPosition(0);
  };

  const handleReset = () => {
    handleStop();
    setCurrentPosition(0);
  };

  const adjustSpeed = (delta: number) => {
    const newSpeed = Math.max(0.5, Math.min(2, playbackSpeed + delta));
    setPlaybackSpeed(newSpeed);
  };

  useEffect(() => {
    return () => {
      if (stopFunctionRef.current) {
        stopFunctionRef.current();
      }
    };
  }, []);

  return (
    <div className="bg-gray-800 rounded-lg p-6">
      <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
      
      {/* Tab Display */}
      <div className="bg-gray-900 rounded-lg p-4 mb-6 overflow-x-auto">
        <pre className="text-green-400 font-mono text-sm whitespace-pre">
          {tab}
        </pre>
        
        {/* Progress bar */}
        <div className="mt-4 h-1 bg-gray-700 rounded-full overflow-hidden">
          <div 
            className="h-full bg-blue-500 transition-all duration-300"
            style={{ width: `${currentPosition}%` }}
          />
        </div>
      </div>

      {/* Playback Controls */}
      <div className="space-y-4">
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={handleReset}
            className="p-3 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
            aria-label="Reset"
          >
            <RotateCcw className="w-5 h-5 text-white" />
          </button>
          
          <button
            onClick={isPlaying ? handleStop : handlePlay}
            className={`p-4 rounded-lg text-white transition-colors ${
              isPlaying 
                ? "bg-red-600 hover:bg-red-700" 
                : "bg-green-600 hover:bg-green-700"
            }`}
            aria-label={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? (
              <Pause className="w-6 h-6" />
            ) : (
              <Play className="w-6 h-6" />
            )}
          </button>
          
          <button
            onClick={() => setLoop(!loop)}
            className={`p-3 rounded-lg transition-colors ${
              loop 
                ? "bg-blue-600 hover:bg-blue-700" 
                : "bg-gray-700 hover:bg-gray-600"
            }`}
            aria-label="Toggle loop"
          >
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          </button>
        </div>

        {/* Speed Control */}
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={() => adjustSpeed(-0.1)}
            className="p-2 bg-gray-700 hover:bg-gray-600 rounded transition-colors"
            aria-label="Decrease speed"
          >
            <Minus className="w-4 h-4 text-white" />
          </button>
          
          <div className="text-center">
            <div className="text-white font-semibold">{(playbackSpeed * 100).toFixed(0)}%</div>
            <div className="text-gray-400 text-xs">Speed</div>
          </div>
          
          <button
            onClick={() => adjustSpeed(0.1)}
            className="p-2 bg-gray-700 hover:bg-gray-600 rounded transition-colors"
            aria-label="Increase speed"
          >
            <Plus className="w-4 h-4 text-white" />
          </button>
        </div>
      </div>

      {/* Tab Legend */}
      <div className="mt-6 p-4 bg-gray-900 rounded-lg">
        <h4 className="text-sm font-semibold text-gray-400 mb-2">How to Read:</h4>
        <div className="grid grid-cols-2 gap-2 text-xs text-gray-500">
          <div>Numbers = Fret positions</div>
          <div>0 = Open string</div>
          <div>h = Hammer-on</div>
          <div>p = Pull-off</div>
          <div>/ = Slide up</div>
          <div>\ = Slide down</div>
          <div>b = Bend</div>
          <div>~ = Vibrato</div>
        </div>
      </div>
    </div>
  );
}