import Link from "next/link";

export default function PracticePage() {
  const tools = [
    {
      title: "Metronome",
      description: "Keep perfect time with our interactive metronome",
      icon: "⏱",
      href: "/practice/metronome",
      color: "bg-blue-900",
    },
    {
      title: "Guitar Tuner",
      description: "Tune your guitar accurately using your microphone",
      icon: "🎵",
      href: "/practice/tuner",
      color: "bg-green-900",
    },
    {
      title: "Chord Trainer",
      description: "Practice chord transitions with timed exercises",
      icon: "🎸",
      href: "/practice/chords",
      color: "bg-purple-900",
    },
    {
      title: "Rhythm Patterns",
      description: "Master strumming patterns with visual guides",
      icon: "🥁",
      href: "/practice/rhythm",
      color: "bg-orange-900",
    },
    {
      title: "Finger Exercises",
      description: "Build strength and dexterity with targeted exercises",
      icon: "✋",
      href: "/practice/exercises",
      color: "bg-red-900",
    },
    {
      title: "Ear Training",
      description: "Develop your musical ear with interval recognition",
      icon: "👂",
      href: "/practice/ear",
      color: "bg-indigo-900",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">Practice Tools</h1>
          <p className="text-gray-300 text-lg">
            Essential tools to enhance your guitar practice sessions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {tools.map((tool) => (
            <Link
              key={tool.title}
              href={tool.href}
              className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors group"
            >
              <div className={`${tool.color} rounded-lg p-4 mb-4 text-center`}>
                <span className="text-4xl">{tool.icon}</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                {tool.title}
              </h3>
              <p className="text-gray-400">{tool.description}</p>
            </Link>
          ))}
        </div>

        <div className="bg-gray-800 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-white mb-6">Today's Practice</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-gray-900 rounded p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Quick Warm-up</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <input type="checkbox" className="w-4 h-4" />
                  <span className="text-gray-300">Finger stretches (2 min)</span>
                </li>
                <li className="flex items-center gap-3">
                  <input type="checkbox" className="w-4 h-4" />
                  <span className="text-gray-300">Chromatic exercise (5 min)</span>
                </li>
                <li className="flex items-center gap-3">
                  <input type="checkbox" className="w-4 h-4" />
                  <span className="text-gray-300">Scale practice (5 min)</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-900 rounded p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Daily Goals</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <input type="checkbox" className="w-4 h-4" />
                  <span className="text-gray-300">Practice G-C-D progression</span>
                </li>
                <li className="flex items-center gap-3">
                  <input type="checkbox" className="w-4 h-4" />
                  <span className="text-gray-300">Learn new strumming pattern</span>
                </li>
                <li className="flex items-center gap-3">
                  <input type="checkbox" className="w-4 h-4" />
                  <span className="text-gray-300">Play one complete song</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex items-center justify-between bg-gray-900 rounded p-4">
            <div>
              <p className="text-gray-400 text-sm">Practice Streak</p>
              <p className="text-2xl font-bold text-white">7 days 🔥</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm">Total Practice Time</p>
              <p className="text-2xl font-bold text-white">12h 30m</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm">Lessons Completed</p>
              <p className="text-2xl font-bold text-white">23</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}