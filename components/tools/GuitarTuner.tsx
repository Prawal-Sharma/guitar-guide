"use client";

import { useState, useEffect, useRef } from "react";
import { Mic, MicOff, Volume2 } from "lucide-react";
import { guitarAudio } from "@/lib/audio/guitar-audio";

const NOTES = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];

const STRING_NOTES = {
  6: { note: 'E', frequency: 82.41, octave: 2 },
  5: { note: 'A', frequency: 110.00, octave: 2 },
  4: { note: 'D', frequency: 146.83, octave: 3 },
  3: { note: 'G', frequency: 196.00, octave: 3 },
  2: { note: 'B', frequency: 246.94, octave: 3 },
  1: { note: 'E', frequency: 329.63, octave: 4 },
};

export function GuitarTuner() {
  const [selectedString, setSelectedString] = useState<number>(1);
  const [isListening, setIsListening] = useState(false);
  const [detectedPitch, setDetectedPitch] = useState<number | null>(null);
  const [detectedNote, setDetectedNote] = useState<string>("");
  const [cents, setCents] = useState<number>(0);
  const [volume, setVolume] = useState<number>(0);
  
  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const microphoneRef = useRef<MediaStreamAudioSourceNode | null>(null);
  const rafIdRef = useRef<number | null>(null);

  // Frequency to note conversion
  const frequencyToNote = (frequency: number): { note: string; cents: number } => {
    const A4 = 440;
    const C0 = A4 * Math.pow(2, -4.75);
    
    if (frequency === 0) {
      return { note: "", cents: 0 };
    }
    
    const halfStepsBelowMiddleC = 12 * Math.log2(frequency / C0);
    const noteIndex = Math.round(halfStepsBelowMiddleC) % 12;
    const cents = Math.round((halfStepsBelowMiddleC - Math.round(halfStepsBelowMiddleC)) * 100);
    
    return {
      note: NOTES[noteIndex],
      cents: cents
    };
  };

  // Autocorrelation pitch detection
  const autoCorrelate = (buffer: Float32Array, sampleRate: number): number => {
    const SIZE = buffer.length;
    const MAX_SAMPLES = Math.floor(SIZE / 2);
    let best_offset = -1;
    let best_correlation = 0;
    let rms = 0;
    
    // Calculate RMS (volume)
    for (let i = 0; i < SIZE; i++) {
      rms += buffer[i] * buffer[i];
    }
    rms = Math.sqrt(rms / SIZE);
    
    setVolume(Math.min(100, Math.round(rms * 200)));
    
    // Not enough signal
    if (rms < 0.01) return -1;
    
    let lastCorrelation = 1;
    for (let offset = 0; offset < MAX_SAMPLES; offset++) {
      let correlation = 0;
      
      for (let i = 0; i < MAX_SAMPLES; i++) {
        correlation += Math.abs((buffer[i]) - (buffer[i + offset]));
      }
      
      correlation = 1 - (correlation / MAX_SAMPLES);
      
      if (correlation > 0.9 && correlation > lastCorrelation) {
        if (correlation > best_correlation) {
          best_correlation = correlation;
          best_offset = offset;
        }
      }
      
      lastCorrelation = correlation;
    }
    
    if (best_correlation > 0.01) {
      return sampleRate / best_offset;
    }
    
    return -1;
  };

  const startListening = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      
      audioContextRef.current = new AudioContext();
      analyserRef.current = audioContextRef.current.createAnalyser();
      analyserRef.current.fftSize = 2048;
      
      microphoneRef.current = audioContextRef.current.createMediaStreamSource(stream);
      microphoneRef.current.connect(analyserRef.current);
      
      const bufferLength = analyserRef.current.fftSize;
      const buffer = new Float32Array(bufferLength);
      
      const updatePitch = () => {
        if (!analyserRef.current) return;
        
        analyserRef.current.getFloatTimeDomainData(buffer);
        const pitch = autoCorrelate(buffer, audioContextRef.current!.sampleRate);
        
        if (pitch > 0) {
          setDetectedPitch(pitch);
          const { note, cents } = frequencyToNote(pitch);
          setDetectedNote(note);
          setCents(cents);
        }
        
        rafIdRef.current = requestAnimationFrame(updatePitch);
      };
      
      updatePitch();
      setIsListening(true);
    } catch (error) {
      console.error("Error accessing microphone:", error);
      alert("Could not access microphone. Please check permissions.");
    }
  };

  const stopListening = () => {
    if (rafIdRef.current) {
      cancelAnimationFrame(rafIdRef.current);
      rafIdRef.current = null;
    }
    
    if (microphoneRef.current) {
      microphoneRef.current.disconnect();
      microphoneRef.current = null;
    }
    
    if (audioContextRef.current) {
      audioContextRef.current.close();
      audioContextRef.current = null;
    }
    
    setIsListening(false);
    setDetectedPitch(null);
    setDetectedNote("");
    setCents(0);
    setVolume(0);
  };

  const playReferenceNote = async (stringNumber: number) => {
    await guitarAudio.playNote(stringNumber, 0, "2n");
  };

  useEffect(() => {
    return () => {
      stopListening();
    };
  }, []);

  const targetFreq = STRING_NOTES[selectedString as keyof typeof STRING_NOTES].frequency;
  const targetNote = STRING_NOTES[selectedString as keyof typeof STRING_NOTES].note;
  
  // Calculate how far off the detected pitch is from target
  let tuningDifference = 0;
  if (detectedPitch && targetFreq) {
    const centsDiff = 1200 * Math.log2(detectedPitch / targetFreq);
    tuningDifference = Math.round(centsDiff);
  }

  return (
    <div className="bg-gray-800 rounded-lg p-8 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-white mb-6 text-center">Guitar Tuner</h2>
      
      {/* String Selector */}
      <div className="mb-8">
        <div className="text-center text-gray-400 mb-3">Select String</div>
        <div className="grid grid-cols-6 gap-2">
          {[6, 5, 4, 3, 2, 1].map((string) => {
            const stringInfo = STRING_NOTES[string as keyof typeof STRING_NOTES];
            return (
              <button
                key={string}
                onClick={() => setSelectedString(string)}
                className={`py-3 px-4 rounded-lg font-bold transition-colors ${
                  selectedString === string
                    ? "bg-blue-600 text-white"
                    : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                }`}
              >
                <div className="text-xs text-gray-400 mb-1">
                  {string === 6 ? "Low" : string === 1 ? "High" : ""}
                </div>
                {stringInfo.note}
                <div className="text-xs">{string}</div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Tuning Display */}
      <div className="mb-8">
        <div className="bg-gray-900 rounded-lg p-6">
          <div className="text-center mb-4">
            <div className="text-4xl font-bold text-white">
              {detectedNote || targetNote}
            </div>
            <div className="text-sm text-gray-400 mt-1">
              Target: {targetNote} ({targetFreq.toFixed(1)} Hz)
            </div>
            {detectedPitch && (
              <div className="text-sm text-gray-400">
                Detected: {detectedPitch.toFixed(1)} Hz
              </div>
            )}
          </div>

          {/* Tuning Meter */}
          <div className="relative h-16 bg-gray-800 rounded-lg overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="absolute w-full h-full flex items-center">
                <div className="w-full flex justify-center gap-1">
                  {[-50, -40, -30, -20, -10, 0, 10, 20, 30, 40, 50].map((cent) => (
                    <div
                      key={cent}
                      className={`h-8 w-1 ${
                        cent === 0 
                          ? "bg-green-500" 
                          : Math.abs(cent) <= 10 
                          ? "bg-yellow-500" 
                          : "bg-red-500"
                      } opacity-30`}
                    />
                  ))}
                </div>
              </div>
              
              {/* Needle */}
              {isListening && detectedPitch && (
                <div
                  className="absolute h-12 w-1 bg-white transition-all duration-100"
                  style={{
                    transform: `translateX(${Math.max(-100, Math.min(100, tuningDifference * 2))}px)`
                  }}
                />
              )}
            </div>
            
            {/* In Tune Indicator */}
            {isListening && Math.abs(tuningDifference) < 5 && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-green-500 text-white px-3 py-1 rounded font-bold animate-pulse">
                  IN TUNE!
                </div>
              </div>
            )}
          </div>

          {/* Tuning Instructions */}
          {isListening && detectedPitch && (
            <div className="text-center mt-4">
              {tuningDifference < -5 && (
                <div className="text-yellow-400">↑ Tune Up</div>
              )}
              {tuningDifference > 5 && (
                <div className="text-yellow-400">↓ Tune Down</div>
              )}
              {Math.abs(tuningDifference) < 5 && (
                <div className="text-green-400">Perfect!</div>
              )}
            </div>
          )}

          {/* Volume Meter */}
          {isListening && (
            <div className="mt-4">
              <div className="text-xs text-gray-400 mb-1">Signal Strength</div>
              <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-green-500 transition-all duration-100"
                  style={{ width: `${volume}%` }}
                />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Controls */}
      <div className="flex justify-center gap-4">
        <button
          onClick={() => playReferenceNote(selectedString)}
          className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors flex items-center gap-2"
        >
          <Volume2 className="w-5 h-5" />
          Play Reference
        </button>
        
        <button
          onClick={isListening ? stopListening : startListening}
          className={`px-6 py-3 rounded-lg text-white transition-colors flex items-center gap-2 ${
            isListening
              ? "bg-red-600 hover:bg-red-700"
              : "bg-green-600 hover:bg-green-700"
          }`}
        >
          {isListening ? (
            <>
              <MicOff className="w-5 h-5" />
              Stop Tuning
            </>
          ) : (
            <>
              <Mic className="w-5 h-5" />
              Start Tuning
            </>
          )}
        </button>
      </div>

      {/* Tips */}
      <div className="mt-8 p-4 bg-gray-900 rounded-lg">
        <h3 className="text-sm font-semibold text-gray-400 mb-2">Tuning Tips:</h3>
        <ul className="text-xs text-gray-500 space-y-1">
          <li>• Play one string at a time</li>
          <li>• Pluck the string firmly near the bridge</li>
          <li>• Let the note ring out clearly</li>
          <li>• Tune up to the note rather than down</li>
          <li>• Check tuning again after adjusting all strings</li>
        </ul>
      </div>
    </div>
  );
}