"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useState, useEffect, useRef } from "react";
import { Settings, X, Menu } from "lucide-react";

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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <nav className="bg-gray-900 border-b border-gray-800 relative">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2 z-50">
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
            <Link
              href="/settings"
              className={cn(
                "px-3 py-2 rounded-lg text-sm font-medium transition-colors ml-2",
                "hover:bg-gray-800 hover:text-white",
                pathname === "/settings"
                  ? "bg-gray-800 text-white"
                  : "text-gray-300"
              )}
              aria-label="Settings"
            >
              <Settings size={18} />
            </Link>
          </div>

          <button 
            className="md:hidden text-white p-2 z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div 
          ref={menuRef}
          className="md:hidden absolute top-16 left-0 right-0 bg-gray-900 border-b border-gray-800 z-40"
        >
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                  "hover:bg-gray-800 hover:text-white",
                  pathname === item.href
                    ? "bg-gray-800 text-white"
                    : "text-gray-300"
                )}
              >
                <span className="mr-3 text-lg">{item.icon}</span>
                {item.label}
              </Link>
            ))}
            <Link
              href="/settings"
              className={cn(
                "flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                "hover:bg-gray-800 hover:text-white",
                pathname === "/settings"
                  ? "bg-gray-800 text-white"
                  : "text-gray-300"
              )}
            >
              <Settings size={18} className="mr-3" />
              Settings
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}