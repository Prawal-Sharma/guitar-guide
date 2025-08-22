import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white font-semibold mb-3">Learn</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link href="/learn" className="hover:text-white transition-colors">Getting Started</Link></li>
              <li><Link href="/chords" className="hover:text-white transition-colors">Chord Library</Link></li>
              <li><Link href="/tabs" className="hover:text-white transition-colors">Tab Reader</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-3">Practice</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link href="/practice/metronome" className="hover:text-white transition-colors">Metronome</Link></li>
              <li><Link href="/practice/tuner" className="hover:text-white transition-colors">Guitar Tuner</Link></li>
              <li><Link href="/practice/exercises" className="hover:text-white transition-colors">Exercises</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-3">Resources</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link href="/theory" className="hover:text-white transition-colors">Music Theory</Link></li>
              <li><Link href="/tabs" className="hover:text-white transition-colors">Song Library</Link></li>
              <li><Link href="/progress" className="hover:text-white transition-colors">Track Progress</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-3">About</h3>
            <p className="text-gray-400 text-sm">
              Guitar Guide is your comprehensive platform for learning guitar, 
              from beginner basics to advanced techniques.
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>&copy; 2024 Guitar Guide. Built with passion for music education.</p>
        </div>
      </div>
    </footer>
  );
}