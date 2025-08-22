export default function TabsPage() {
  const songs = [
    {
      title: "Wonderwall",
      artist: "Oasis",
      difficulty: "Beginner",
      chords: ["Em", "G", "D", "C"],
      plays: "12.5k",
    },
    {
      title: "House of the Rising Sun",
      artist: "The Animals",
      difficulty: "Beginner",
      chords: ["Am", "C", "D", "F", "E"],
      plays: "8.3k",
    },
    {
      title: "Smoke on the Water",
      artist: "Deep Purple",
      difficulty: "Beginner",
      chords: ["E", "G"],
      plays: "15.2k",
    },
    {
      title: "Sweet Child O' Mine",
      artist: "Guns N' Roses",
      difficulty: "Intermediate",
      chords: ["D", "C", "G", "A"],
      plays: "9.7k",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">Tab Library</h1>
          <p className="text-gray-300 text-lg">
            Learn to play your favorite songs with interactive tablature
          </p>
        </div>

        <div className="bg-gray-800 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">How to Read Tabs</h2>
          <div className="bg-gray-900 rounded p-6 font-mono text-sm">
            <div className="text-gray-400 mb-2">String names:</div>
            <div className="text-white space-y-1">
              <div>e|------------------------</div>
              <div>B|------------------------</div>
              <div>G|------------------------</div>
              <div>D|------------------------</div>
              <div>A|------------------------</div>
              <div>E|------------------------</div>
            </div>
            <div className="text-gray-400 mt-4">
              Numbers = Frets | 0 = Open string | x = Muted
            </div>
          </div>
        </div>

        <div className="mb-6">
          <input
            type="text"
            placeholder="Search for songs..."
            className="w-full max-w-md px-4 py-2 bg-gray-800 text-white rounded-lg border border-gray-700 focus:border-blue-500 focus:outline-none"
          />
        </div>

        <div className="space-y-4">
          {songs.map((song, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors cursor-pointer"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-1">
                    {song.title}
                  </h3>
                  <p className="text-gray-400 mb-3">by {song.artist}</p>
                  <div className="flex items-center gap-4">
                    <span className="text-sm px-2 py-1 bg-green-900 text-green-300 rounded">
                      {song.difficulty}
                    </span>
                    <div className="flex gap-2">
                      {song.chords.map((chord) => (
                        <span
                          key={chord}
                          className="text-xs px-2 py-1 bg-gray-700 text-gray-300 rounded"
                        >
                          {chord}
                        </span>
                      ))}
                    </div>
                    <span className="text-gray-500 text-sm">
                      👁 {song.plays} plays
                    </span>
                  </div>
                </div>
                <button className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
                  View Tab
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <button className="px-6 py-2 text-gray-400 hover:text-white transition-colors">
            Load More Songs →
          </button>
        </div>
      </div>
    </div>
  );
}