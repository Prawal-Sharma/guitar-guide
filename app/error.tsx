"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <div className="text-6xl mb-4">🎸</div>
          <h1 className="text-4xl font-bold text-white mb-4">
            Oops! Something went wrong
          </h1>
          <p className="text-gray-400 mb-8">
            We encountered an unexpected error. Don&apos;t worry, even the best
            guitarists hit wrong notes sometimes!
          </p>
        </div>

        <div className="space-y-4">
          <button
            onClick={reset}
            className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Try Again
          </button>
          
          <Link
            href="/"
            className="block w-full px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
          >
            Go Home
          </Link>
        </div>

        {error.digest && (
          <p className="mt-6 text-xs text-gray-500">
            Error ID: {error.digest}
          </p>
        )}
      </div>
    </div>
  );
}