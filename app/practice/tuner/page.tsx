import { GuitarTuner } from "@/components/tools/GuitarTuner";

export default function TunerPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Guitar Tuner</h1>
          <p className="text-gray-300 text-lg">
            Tune your guitar accurately using your device&apos;s microphone
          </p>
        </div>

        <GuitarTuner />

        <div className="mt-12 max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
          <div className="bg-gray-800 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-white mb-4">Standard Tuning</h2>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-400">6th String (Thickest)</span>
                <span className="text-white font-mono">E2 - 82.41 Hz</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">5th String</span>
                <span className="text-white font-mono">A2 - 110.00 Hz</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">4th String</span>
                <span className="text-white font-mono">D3 - 146.83 Hz</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">3rd String</span>
                <span className="text-white font-mono">G3 - 196.00 Hz</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">2nd String</span>
                <span className="text-white font-mono">B3 - 246.94 Hz</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">1st String (Thinnest)</span>
                <span className="text-white font-mono">E4 - 329.63 Hz</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-white mb-4">Alternative Tunings</h2>
            <div className="space-y-3">
              <div>
                <h3 className="text-white font-semibold mb-1">Drop D</h3>
                <p className="text-gray-400 text-sm">D-A-D-G-B-E (Lower 6th string)</p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">Open G</h3>
                <p className="text-gray-400 text-sm">D-G-D-G-B-D (Blues/Slide)</p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">DADGAD</h3>
                <p className="text-gray-400 text-sm">D-A-D-G-A-D (Celtic/Folk)</p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">Half Step Down</h3>
                <p className="text-gray-400 text-sm">Eb-Ab-Db-Gb-Bb-Eb (All strings -1)</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 max-w-4xl mx-auto bg-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-white mb-4">How to Tune Your Guitar</h2>
          <ol className="space-y-3 text-gray-300">
            <li className="flex items-start">
              <span className="text-blue-400 font-bold mr-3">1.</span>
              <span>Start with the 6th string (thickest, low E) and work your way to the 1st string</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 font-bold mr-3">2.</span>
              <span>Click &quot;Start Tuning&quot; to activate the microphone</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 font-bold mr-3">3.</span>
              <span>Play one string at a time and adjust the tuning peg until the meter shows green</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 font-bold mr-3">4.</span>
              <span>If the needle is to the left, tighten the string (tune up)</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 font-bold mr-3">5.</span>
              <span>If the needle is to the right, loosen the string (tune down)</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 font-bold mr-3">6.</span>
              <span>Once all strings are tuned, play a few chords and check again</span>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}