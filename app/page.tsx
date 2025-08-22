export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-white mb-4">
            Welcome to Guitar Guide
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Your journey to mastering the guitar starts here
          </p>
          <div className="inline-flex gap-4">
            <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Start Learning
            </button>
            <button className="px-8 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors">
              View Lessons
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-3">Learn Chords</h3>
            <p className="text-gray-400">
              Master the essential open chords with interactive diagrams and audio playback
            </p>
          </div>
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-3">Read Tabs</h3>
            <p className="text-gray-400">
              Learn to read tablature and play your favorite songs step by step
            </p>
          </div>
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-3">Practice Tools</h3>
            <p className="text-gray-400">
              Use our metronome, tuner, and exercises to improve your skills
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}