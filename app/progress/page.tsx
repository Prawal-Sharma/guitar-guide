export default function ProgressPage() {
  const achievements = [
    { name: "First Chord", description: "Played your first chord", earned: true, icon: "🎸" },
    { name: "Week Streak", description: "Practice 7 days in a row", earned: true, icon: "🔥" },
    { name: "Song Master", description: "Complete 5 songs", earned: false, icon: "🎵" },
    { name: "Chord Expert", description: "Master all basic chords", earned: false, icon: "🌟" },
    { name: "Speed Demon", description: "Play at 120 BPM", earned: false, icon: "⚡" },
    { name: "Theory Wizard", description: "Complete theory module", earned: false, icon: "🧙" },
  ];

  const skills = [
    { name: "Open Chords", level: 75 },
    { name: "Strumming", level: 60 },
    { name: "Chord Transitions", level: 45 },
    { name: "Reading Tabs", level: 30 },
    { name: "Rhythm", level: 50 },
    { name: "Music Theory", level: 20 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">Your Progress</h1>
          <p className="text-gray-300 text-lg">
            Track your guitar learning journey and celebrate achievements
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-400 mb-2">Practice Streak</h3>
            <p className="text-4xl font-bold text-white mb-2">7 days</p>
            <p className="text-green-400">🔥 Keep it going!</p>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-400 mb-2">Total Practice</h3>
            <p className="text-4xl font-bold text-white mb-2">24.5 hours</p>
            <p className="text-blue-400">📈 15% more than last week</p>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-400 mb-2">Lessons Completed</h3>
            <p className="text-4xl font-bold text-white mb-2">12 / 48</p>
            <p className="text-purple-400">25% Complete</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-gray-800 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Skill Levels</h2>
            <div className="space-y-4">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300">{skill.name}</span>
                    <span className="text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-blue-400 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Achievements</h2>
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement) => (
                <div
                  key={achievement.name}
                  className={`p-4 rounded-lg border-2 ${
                    achievement.earned
                      ? "bg-gray-700 border-yellow-600"
                      : "bg-gray-900 border-gray-700"
                  }`}
                >
                  <div className="text-2xl mb-2">{achievement.icon}</div>
                  <h4 className={`font-semibold mb-1 ${
                    achievement.earned ? "text-white" : "text-gray-500"
                  }`}>
                    {achievement.name}
                  </h4>
                  <p className="text-xs text-gray-400">
                    {achievement.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 bg-gray-800 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-white mb-6">Practice History</h2>
          <div className="bg-gray-900 rounded p-6">
            <div className="grid grid-cols-7 gap-2">
              {[...Array(28)].map((_, i) => {
                const intensity = Math.random();
                return (
                  <div
                    key={i}
                    className={`aspect-square rounded ${
                      intensity > 0.7
                        ? "bg-green-500"
                        : intensity > 0.4
                        ? "bg-green-600"
                        : intensity > 0.1
                        ? "bg-green-700"
                        : "bg-gray-700"
                    }`}
                    title={`Day ${i + 1}`}
                  ></div>
                );
              })}
            </div>
            <div className="flex items-center gap-4 mt-4 text-xs text-gray-400">
              <span>Less</span>
              <div className="flex gap-1">
                <div className="w-3 h-3 bg-gray-700 rounded"></div>
                <div className="w-3 h-3 bg-green-700 rounded"></div>
                <div className="w-3 h-3 bg-green-600 rounded"></div>
                <div className="w-3 h-3 bg-green-500 rounded"></div>
              </div>
              <span>More</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}