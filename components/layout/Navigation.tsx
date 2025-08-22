"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Home", icon: "🏠" },
  { href: "/learn", label: "Learn", icon: "📚" },
  { href: "/chords", label: "Chords", icon: "🎸" },
  { href: "/tabs", label: "Tabs", icon: "📜" },
  { href: "/practice", label: "Practice", icon: "🎯" },
  { href: "/theory", label: "Theory", icon: "🎓" },
  { href: "/progress", label: "Progress", icon: "📈" },
];

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="bg-gray-900 border-b border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl">🎸</span>
            <span className="text-xl font-bold text-white">Guitar Guide</span>
          </Link>

          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                  "hover:bg-gray-800 hover:text-white",
                  pathname === item.href
                    ? "bg-gray-800 text-white"
                    : "text-gray-300"
                )}
              >
                <span className="mr-2">{item.icon}</span>
                {item.label}
              </Link>
            ))}
          </div>

          <button className="md:hidden text-white p-2">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}