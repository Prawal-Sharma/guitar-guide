export default function ChordsPage() {
  const chords = [
    { name: "C", difficulty: "Easy", type: "Major", fingers: "x32010" },
    { name: "D", difficulty: "Easy", type: "Major", fingers: "xx0232" },
    { name: "G", difficulty: "Easy", type: "Major", fingers: "320003" },
    { name: "E", difficulty: "Easy", type: "Major", fingers: "022100" },
    { name: "A", difficulty: "Easy", type: "Major", fingers: "x02220" },
    { name: "Em", difficulty: "Easy", type: "Minor", fingers: "022000" },
    { name: "Am", difficulty: "Easy", type: "Minor", fingers: "x02210" },
    { name: "Dm", difficulty: "Easy", type: "Minor", fingers: "xx0231" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">Chord Library</h1>
          <p className="text-gray-300 text-lg">
            Master essential guitar chords with interactive diagrams
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {chords.map((chord) => (
            <div
              key={chord.name}
              className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors cursor-pointer"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-white">{chord.name}</h3>
                <span className="text-xs px-2 py-1 bg-green-900 text-green-300 rounded">
                  {chord.difficulty}
                </span>
              </div>
              
              <div className="bg-gray-900 rounded p-4 mb-4 h-32 flex items-center justify-center">
                <span className="text-gray-500 text-sm">Chord Diagram</span>
              </div>
              
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Type:</span>
                  <span className="text-gray-300">{chord.type}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Pattern:</span>
                  <span className="text-gray-300 font-mono">{chord.fingers}</span>
                </div>
              </div>
              
              <button className="w-full mt-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
                Play Chord
              </button>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gray-800 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-white mb-4">Chord Progressions</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-900 rounded p-4">
              <h3 className="text-lg font-semibold text-white mb-2">G - C - D</h3>
              <p className="text-gray-400 text-sm mb-3">
                The most common progression in popular music
              </p>
              <button className="text-blue-400 hover:text-blue-300 text-sm">
                Practice →
              </button>
            </div>
            <div className="bg-gray-900 rounded p-4">
              <h3 className="text-lg font-semibold text-white mb-2">Am - F - C - G</h3>
              <p className="text-gray-400 text-sm mb-3">
                Classic pop progression used in countless hits
              </p>
              <button className="text-blue-400 hover:text-blue-300 text-sm">
                Practice →
              </button>
            </div>
            <div className="bg-gray-900 rounded p-4">
              <h3 className="text-lg font-semibold text-white mb-2">Em - G - D - C</h3>
              <p className="text-gray-400 text-sm mb-3">
                Emotional progression perfect for ballads
              </p>
              <button className="text-blue-400 hover:text-blue-300 text-sm">
                Practice →
              </button>
            </div>
            <div className="bg-gray-900 rounded p-4">
              <h3 className="text-lg font-semibold text-white mb-2">D - A - Bm - G</h3>
              <p className="text-gray-400 text-sm mb-3">
                Uplifting progression great for practice
              </p>
              <button className="text-blue-400 hover:text-blue-300 text-sm">
                Practice →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}