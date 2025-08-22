export default function LearnPage() {
  const lessons = [
    {
      id: 1,
      title: "Getting Started",
      description: "Learn the basics of holding a guitar and proper posture",
      duration: "15 min",
      level: "Beginner",
      completed: false,
    },
    {
      id: 2,
      title: "Your First Chord",
      description: "Master the G major chord - the foundation of many songs",
      duration: "20 min",
      level: "Beginner",
      completed: false,
    },
    {
      id: 3,
      title: "Basic Strumming",
      description: "Develop rhythm with essential strumming patterns",
      duration: "25 min",
      level: "Beginner",
      completed: false,
    },
    {
      id: 4,
      title: "Chord Transitions",
      description: "Learn to switch between chords smoothly",
      duration: "30 min",
      level: "Beginner",
      completed: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">Learn Guitar</h1>
          <p className="text-gray-300 text-lg">
            Follow our structured curriculum to master the guitar step by step
          </p>
        </div>

        <div className="grid gap-4 max-w-4xl">
          {lessons.map((lesson) => (
            <div
              key={lesson.id}
              className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors cursor-pointer"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Lesson {lesson.id}: {lesson.title}
                  </h3>
                  <p className="text-gray-400 mb-3">{lesson.description}</p>
                  <div className="flex items-center gap-4 text-sm">
                    <span className="text-gray-500">⏱ {lesson.duration}</span>
                    <span className="px-2 py-1 bg-green-900 text-green-300 rounded">
                      {lesson.level}
                    </span>
                  </div>
                </div>
                <div className="ml-4">
                  <div className="w-12 h-12 rounded-full border-2 border-gray-600 flex items-center justify-center">
                    {lesson.completed ? (
                      <span className="text-green-500 text-xl">✓</span>
                    ) : (
                      <span className="text-gray-500">→</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gray-800 rounded-lg p-8 max-w-4xl">
          <h2 className="text-2xl font-bold text-white mb-4">Your Learning Path</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-gray-300">Foundation (Week 1-2)</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
              <span className="text-gray-400">Essential Chords (Week 3-4)</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
              <span className="text-gray-400">Reading Music (Week 5-6)</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
              <span className="text-gray-400">Techniques (Week 7-8)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}