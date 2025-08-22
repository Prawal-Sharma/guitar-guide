import { Metronome } from "@/components/tools/Metronome";

export default function MetronomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Metronome</h1>
          <p className="text-gray-300 text-lg">
            Keep perfect time with our interactive metronome
          </p>
        </div>

        <Metronome />

        <div className="mt-12 max-w-2xl mx-auto">
          <div className="bg-gray-800 rounded-lg p-8">
            <h2 className="text-xl font-semibold text-white mb-4">Tips for Practicing with a Metronome</h2>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                <span>Start slow and gradually increase the tempo as you become comfortable</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                <span>Focus on playing exactly on the beat - precision is more important than speed</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                <span>Practice scales, chord changes, and strumming patterns with the metronome</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                <span>Try playing on the off-beats to develop your sense of rhythm</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                <span>Use different time signatures to challenge yourself</span>
              </li>
            </ul>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-3">Tempo Guide</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><span className="text-gray-400">40-60 BPM:</span> Largo (Very slow)</li>
                <li><span className="text-gray-400">60-80 BPM:</span> Adagio (Slow)</li>
                <li><span className="text-gray-400">80-120 BPM:</span> Andante (Walking pace)</li>
                <li><span className="text-gray-400">120-140 BPM:</span> Moderato (Moderate)</li>
                <li><span className="text-gray-400">140-180 BPM:</span> Allegro (Fast)</li>
                <li><span className="text-gray-400">180+ BPM:</span> Presto (Very fast)</li>
              </ul>
            </div>

            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-3">Practice Exercises</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• Single note exercises at 60 BPM</li>
                <li>• Chord transitions at 80 BPM</li>
                <li>• Strumming patterns at 100 BPM</li>
                <li>• Scale runs at 120 BPM</li>
                <li>• Fingerpicking at 90 BPM</li>
                <li>• Power chord changes at 140 BPM</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}