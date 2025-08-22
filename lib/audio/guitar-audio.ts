import * as Tone from 'tone';

// Guitar string frequencies (standard tuning)
const STRING_FREQUENCIES = {
  6: 82.41,  // Low E
  5: 110.00, // A
  4: 146.83, // D
  3: 196.00, // G
  2: 246.94, // B
  1: 329.63, // High E
};

// Frequency calculation for fretted notes
function getFrequency(string: number, fret: number): number {
  const openFreq = STRING_FREQUENCIES[string as keyof typeof STRING_FREQUENCIES];
  if (!openFreq) return 0;
  
  // Each fret is a semitone higher
  return openFreq * Math.pow(2, fret / 12);
}

class GuitarAudio {
  private synth: Tone.PolySynth | null = null;
  private reverb: Tone.Reverb | null = null;
  private isInitialized = false;

  async initialize() {
    if (this.isInitialized) return;
    
    await Tone.start();
    
    // Create a polyphonic synth for playing multiple notes
    this.synth = new Tone.PolySynth(Tone.Synth, {
      oscillator: {
        type: 'triangle'
      },
      envelope: {
        attack: 0.02,
        decay: 0.1,
        sustain: 0.3,
        release: 1.5
      }
    });
    
    // Add reverb for a more natural sound
    this.reverb = new Tone.Reverb({
      decay: 2.5,
      wet: 0.3
    });
    
    // Connect the audio chain
    this.synth.connect(this.reverb);
    this.reverb.toDestination();
    
    this.isInitialized = true;
  }

  async playChord(chordData: {
    positions: { string: number; fret: number }[];
    openStrings: number[];
    mutedStrings: number[];
  }) {
    await this.initialize();
    
    if (!this.synth) return;
    
    const frequencies: number[] = [];
    
    // Add fretted notes
    chordData.positions.forEach(pos => {
      const freq = getFrequency(pos.string, pos.fret);
      if (freq > 0) frequencies.push(freq);
    });
    
    // Add open strings
    chordData.openStrings.forEach(string => {
      const freq = getFrequency(string, 0);
      if (freq > 0) frequencies.push(freq);
    });
    
    // Sort frequencies for a more natural strum
    frequencies.sort((a, b) => a - b);
    
    // Play the chord with a slight strum effect
    const now = Tone.now();
    frequencies.forEach((freq, index) => {
      this.synth?.triggerAttackRelease(
        freq,
        '2n',
        now + index * 0.02 // Slight delay for strum effect
      );
    });
  }

  async playNote(string: number, fret: number, duration: string = '8n') {
    await this.initialize();
    
    if (!this.synth) return;
    
    const frequency = getFrequency(string, fret);
    if (frequency > 0) {
      this.synth.triggerAttackRelease(frequency, duration);
    }
  }

  async playSequence(
    notes: { string: number; fret: number; duration?: string }[],
    tempo: number = 120
  ) {
    await this.initialize();
    
    if (!this.synth) return;
    
    Tone.Transport.bpm.value = tempo;
    
    const sequence = new Tone.Sequence(
      (time, note) => {
        const frequency = getFrequency(note.string, note.fret);
        if (frequency > 0) {
          this.synth?.triggerAttackRelease(
            frequency,
            note.duration || '8n',
            time
          );
        }
      },
      notes,
      '8n'
    );
    
    sequence.start(0);
    Tone.Transport.start();
    
    // Return a function to stop the sequence
    return () => {
      sequence.stop();
      sequence.dispose();
      Tone.Transport.stop();
    };
  }

  setVolume(volume: number) {
    if (!this.synth) return;
    
    // Convert 0-100 to decibels (-60 to 0)
    const db = Math.log10(Math.max(0.001, volume / 100)) * 20;
    this.synth.volume.value = db;
  }

  dispose() {
    if (this.synth) {
      this.synth.dispose();
      this.synth = null;
    }
    if (this.reverb) {
      this.reverb.dispose();
      this.reverb = null;
    }
    this.isInitialized = false;
  }
}

// Export singleton instance
export const guitarAudio = new GuitarAudio();