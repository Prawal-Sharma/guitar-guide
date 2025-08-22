"use client";

import { useState, useEffect, useRef } from "react";
import * as Tone from "tone";
import { Play, Pause, Plus, Minus } from "lucide-react";

export function Metronome() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [bpm, setBpm] = useState(120);
  const [timeSignature, setTimeSignature] = useState("4/4");
  const [currentBeat, setCurrentBeat] = useState(0);
  const sequenceRef = useRef<Tone.Sequence | null>(null);
  const synthRef = useRef<Tone.Synth | null>(null);
  
  const beatsPerMeasure = parseInt(timeSignature.split("/")[0]);

  useEffect(() => {
    // Initialize synth
    synthRef.current = new Tone.Synth({
      oscillator: { type: "sine" },
      envelope: {
        attack: 0.001,
        decay: 0.1,
        sustain: 0,
        release: 0.1
      }
    }).toDestination();

    return () => {
      if (sequenceRef.current) {
        sequenceRef.current.dispose();
      }
      if (synthRef.current) {
        synthRef.current.dispose();
      }
      Tone.Transport.stop();
    };
  }, []);

  const startMetronome = async () => {
    await Tone.start();
    
    // Clean up existing sequence
    if (sequenceRef.current) {
      sequenceRef.current.stop();
      sequenceRef.current.dispose();
    }
    
    // Set the tempo
    Tone.Transport.bpm.value = bpm;
    
    // Create beat sequence
    let beatCount = 0;
    sequenceRef.current = new Tone.Sequence(
      (time, note) => {
        const beat = (beatCount % beatsPerMeasure) + 1;
        setCurrentBeat(beat);
        
        // Higher pitch for downbeat
        const frequency = beat === 1 ? 880 : 440;
        synthRef.current?.triggerAttackRelease(frequency, "16n", time);
        
        beatCount++;
      },
      [0],
      "4n"
    );
    
    sequenceRef.current.start(0);
    Tone.Transport.start();
    setIsPlaying(true);
  };

  const stopMetronome = () => {
    if (sequenceRef.current) {
      sequenceRef.current.stop();
    }
    Tone.Transport.stop();
    setIsPlaying(false);
    setCurrentBeat(0);
  };

  const handlePlayPause = () => {
    if (isPlaying) {
      stopMetronome();
    } else {
      startMetronome();
    }
  };

  const changeBpm = (delta: number) => {
    const newBpm = Math.max(40, Math.min(220, bpm + delta));
    setBpm(newBpm);
    
    if (isPlaying) {
      Tone.Transport.bpm.value = newBpm;
    }
  };

  const handleBpmInput = (value: string) => {
    const newBpm = parseInt(value) || 120;
    const clampedBpm = Math.max(40, Math.min(220, newBpm));
    setBpm(clampedBpm);
    
    if (isPlaying) {
      Tone.Transport.bpm.value = clampedBpm;
    }
  };

  return (
    <div className="bg-gray-800 rounded-lg p-8 max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-white mb-6 text-center">Metronome</h2>
      
      {/* Visual Beat Indicator */}
      <div className="flex justify-center gap-2 mb-8">
        {[...Array(beatsPerMeasure)].map((_, i) => (
          <div
            key={i}
            className={`w-12 h-12 rounded-full transition-all duration-100 ${
              currentBeat === i + 1
                ? i === 0
                  ? "bg-red-500 scale-110"
                  : "bg-blue-500 scale-110"
                : "bg-gray-700"
            }`}
          />
        ))}
      </div>

      {/* BPM Display and Controls */}
      <div className="mb-8">
        <div className="flex items-center justify-center gap-4 mb-4">
          <button
            onClick={() => changeBpm(-10)}
            className="p-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
            aria-label="Decrease BPM by 10"
          >
            <Minus className="w-5 h-5 text-white" />
          </button>
          
          <button
            onClick={() => changeBpm(-1)}
            className="p-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
            aria-label="Decrease BPM by 1"
          >
            <Minus className="w-4 h-4 text-white" />
          </button>
          
          <div className="text-center">
            <input
              type="number"
              value={bpm}
              onChange={(e) => handleBpmInput(e.target.value)}
              className="text-4xl font-bold text-white bg-transparent text-center w-24 focus:outline-none"
              min="40"
              max="220"
            />
            <div className="text-gray-400 text-sm">BPM</div>
          </div>
          
          <button
            onClick={() => changeBpm(1)}
            className="p-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
            aria-label="Increase BPM by 1"
          >
            <Plus className="w-4 h-4 text-white" />
          </button>
          
          <button
            onClick={() => changeBpm(10)}
            className="p-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
            aria-label="Increase BPM by 10"
          >
            <Plus className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* BPM Slider */}
        <input
          type="range"
          min="40"
          max="220"
          value={bpm}
          onChange={(e) => handleBpmInput(e.target.value)}
          className="w-full"
        />
      </div>

      {/* Time Signature */}
      <div className="mb-8">
        <label className="text-gray-400 text-sm block mb-2">Time Signature</label>
        <div className="grid grid-cols-4 gap-2">
          {["3/4", "4/4", "5/4", "6/8"].map((sig) => (
            <button
              key={sig}
              onClick={() => {
                setTimeSignature(sig);
                if (isPlaying) {
                  stopMetronome();
                  setTimeout(startMetronome, 100);
                }
              }}
              className={`py-2 px-4 rounded-lg transition-colors ${
                timeSignature === sig
                  ? "bg-blue-600 text-white"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600"
              }`}
            >
              {sig}
            </button>
          ))}
        </div>
      </div>

      {/* Common Tempos */}
      <div className="mb-8">
        <label className="text-gray-400 text-sm block mb-2">Common Tempos</label>
        <div className="grid grid-cols-3 gap-2 text-sm">
          <button
            onClick={() => handleBpmInput("60")}
            className="py-2 px-3 bg-gray-700 hover:bg-gray-600 rounded-lg text-gray-300 transition-colors"
          >
            Slow (60)
          </button>
          <button
            onClick={() => handleBpmInput("90")}
            className="py-2 px-3 bg-gray-700 hover:bg-gray-600 rounded-lg text-gray-300 transition-colors"
          >
            Medium (90)
          </button>
          <button
            onClick={() => handleBpmInput("120")}
            className="py-2 px-3 bg-gray-700 hover:bg-gray-600 rounded-lg text-gray-300 transition-colors"
          >
            Moderate (120)
          </button>
          <button
            onClick={() => handleBpmInput("140")}
            className="py-2 px-3 bg-gray-700 hover:bg-gray-600 rounded-lg text-gray-300 transition-colors"
          >
            Fast (140)
          </button>
          <button
            onClick={() => handleBpmInput("160")}
            className="py-2 px-3 bg-gray-700 hover:bg-gray-600 rounded-lg text-gray-300 transition-colors"
          >
            Vivace (160)
          </button>
          <button
            onClick={() => handleBpmInput("180")}
            className="py-2 px-3 bg-gray-700 hover:bg-gray-600 rounded-lg text-gray-300 transition-colors"
          >
            Presto (180)
          </button>
        </div>
      </div>

      {/* Play/Pause Button */}
      <button
        onClick={handlePlayPause}
        className={`w-full py-4 rounded-lg font-semibold text-white transition-colors flex items-center justify-center gap-3 ${
          isPlaying
            ? "bg-red-600 hover:bg-red-700"
            : "bg-green-600 hover:bg-green-700"
        }`}
      >
        {isPlaying ? (
          <>
            <Pause className="w-6 h-6" />
            Stop Metronome
          </>
        ) : (
          <>
            <Play className="w-6 h-6" />
            Start Metronome
          </>
        )}
      </button>
    </div>
  );
}