import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <div className="text-8xl font-bold text-blue-600 mb-4">404</div>
          <h1 className="text-3xl font-bold text-white mb-4">
            Page Not Found
          </h1>
          <p className="text-gray-400 mb-8">
            Looks like this chord doesn&apos;t exist in our library. Let&apos;s get you back on track!
          </p>
        </div>

        <div className="space-y-4">
          <Link
            href="/"
            className="block w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Back to Home
          </Link>
          
          <Link
            href="/chords"
            className="block w-full px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
          >
            Browse Chords
          </Link>
          
          <Link
            href="/learn"
            className="block w-full px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
          >
            Start Learning
          </Link>
        </div>
      </div>
    </div>
  );
}