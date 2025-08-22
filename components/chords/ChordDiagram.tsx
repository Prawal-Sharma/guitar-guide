"use client";

import { useState } from "react";
import { guitarAudio } from "@/lib/audio/guitar-audio";

interface ChordPosition {
  string: number;
  fret: number;
  finger?: number;
}

interface ChordData {
  name: string;
  positions: ChordPosition[];
  barres?: { fret: number; strings: [number, number] }[];
  openStrings: number[];
  mutedStrings: number[];
}

interface ChordDiagramProps {
  chord: ChordData;
  size?: number;
  showFingers?: boolean;
  onPlay?: () => void;
}

export function ChordDiagram({ 
  chord, 
  size = 200, 
  showFingers = true,
  onPlay
}: ChordDiagramProps) {
  const [hoveredString, setHoveredString] = useState<number | null>(null);
  
  const handlePlayChord = async () => {
    await guitarAudio.playChord(chord);
    onPlay?.();
  };
  
  const strings = 6;
  const frets = 5;
  const startFret = Math.min(...chord.positions.map(p => p.fret).filter(f => f > 0)) || 1;
  
  const width = size;
  const height = size * 1.2;
  const padding = 20;
  const fretWidth = (width - 2 * padding) / frets;
  const stringHeight = (height - 2 * padding) / (strings - 1);
  
  return (
    <div className="inline-block">
      <h3 className="text-xl font-bold text-white mb-2 text-center">{chord.name}</h3>
      <div className="relative">
        <svg
        width={width}
        height={height}
        className="bg-gray-900 rounded"
        onMouseLeave={() => setHoveredString(null)}
      >
        {/* Fretboard */}
        <rect
          x={padding}
          y={padding}
          width={width - 2 * padding}
          height={height - 2 * padding}
          fill="none"
          stroke="#4B5563"
          strokeWidth="2"
        />
        
        {/* Frets */}
        {[...Array(frets)].map((_, i) => (
          <line
            key={`fret-${i}`}
            x1={padding + (i + 1) * fretWidth}
            y1={padding}
            x2={padding + (i + 1) * fretWidth}
            y2={height - padding}
            stroke="#4B5563"
            strokeWidth="1"
          />
        ))}
        
        {/* Strings */}
        {[...Array(strings)].map((_, i) => (
          <line
            key={`string-${i}`}
            x1={padding}
            y1={padding + i * stringHeight}
            x2={width - padding}
            y2={padding + i * stringHeight}
            stroke={hoveredString === i ? "#60A5FA" : "#9CA3AF"}
            strokeWidth={hoveredString === i ? "3" : "2"}
            onMouseEnter={() => setHoveredString(i)}
            className="cursor-pointer transition-all"
          />
        ))}
        
        {/* Nut (if showing from first fret) */}
        {startFret === 1 && (
          <rect
            x={padding - 4}
            y={padding}
            width={4}
            height={height - 2 * padding}
            fill="#D1D5DB"
          />
        )}
        
        {/* Fret number indicator */}
        {startFret > 1 && (
          <text
            x={padding - 10}
            y={padding + 20}
            fill="#9CA3AF"
            fontSize="12"
            textAnchor="end"
          >
            {startFret}fr
          </text>
        )}
        
        {/* Finger positions */}
        {chord.positions.map((pos, i) => {
          const x = padding + (pos.fret - startFret + 0.5) * fretWidth;
          const y = padding + (pos.string - 1) * stringHeight;
          
          return (
            <g key={`pos-${i}`}>
              <circle
                cx={x}
                cy={y}
                r="8"
                fill="#3B82F6"
                stroke="#1D4ED8"
                strokeWidth="2"
                className="cursor-pointer hover:fill-blue-400 transition-colors"
              />
              {showFingers && pos.finger && (
                <text
                  x={x}
                  y={y + 4}
                  fill="white"
                  fontSize="10"
                  textAnchor="middle"
                  pointerEvents="none"
                >
                  {pos.finger}
                </text>
              )}
            </g>
          );
        })}
        
        {/* Barre chords */}
        {chord.barres?.map((barre, i) => {
          const x = padding + (barre.fret - startFret + 0.5) * fretWidth;
          const y1 = padding + (barre.strings[0] - 1) * stringHeight;
          const y2 = padding + (barre.strings[1] - 1) * stringHeight;
          
          return (
            <rect
              key={`barre-${i}`}
              x={x - 8}
              y={y1}
              width="16"
              height={y2 - y1}
              rx="8"
              fill="#3B82F6"
              stroke="#1D4ED8"
              strokeWidth="2"
              opacity="0.9"
            />
          );
        })}
        
        {/* Open and muted strings */}
        {[...Array(strings)].map((_, i) => {
          const stringNum = i + 1;
          const x = padding - 10;
          const y = padding + i * stringHeight;
          
          if (chord.openStrings.includes(stringNum)) {
            return (
              <circle
                key={`open-${i}`}
                cx={x}
                cy={y}
                r="4"
                fill="none"
                stroke="#10B981"
                strokeWidth="2"
              />
            );
          }
          
          if (chord.mutedStrings.includes(stringNum)) {
            return (
              <g key={`muted-${i}`}>
                <line
                  x1={x - 4}
                  y1={y - 4}
                  x2={x + 4}
                  y2={y + 4}
                  stroke="#EF4444"
                  strokeWidth="2"
                />
                <line
                  x1={x - 4}
                  y1={y + 4}
                  x2={x + 4}
                  y2={y - 4}
                  stroke="#EF4444"
                  strokeWidth="2"
                />
              </g>
            );
          }
          
          return null;
        })}
        </svg>
        
        {/* Play button overlay */}
        <button
          onClick={handlePlayChord}
          className="absolute top-2 right-2 p-2 bg-blue-600 hover:bg-blue-700 rounded-full transition-colors"
          aria-label="Play chord"
        >
          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
          </svg>
        </button>
      </div>
      
      {/* String labels */}
      <div className="flex justify-around mt-2 px-5">
        {["E", "A", "D", "G", "B", "e"].map((note, i) => (
          <span
            key={note}
            className={`text-xs ${
              hoveredString === 5 - i ? "text-blue-400" : "text-gray-400"
            }`}
          >
            {note}
          </span>
        ))}
      </div>
    </div>
  );
}