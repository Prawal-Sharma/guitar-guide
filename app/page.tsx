"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight, Music, BookOpen, Target, TrendingUp } from "lucide-react";

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4 py-16">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1 
            className="text-5xl md:text-6xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Welcome to Guitar Guide
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-300 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Your journey to mastering the guitar starts here
          </motion.p>
          <motion.div 
            className="inline-flex gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link 
              href="/learn"
              className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all hover:scale-105 flex items-center gap-2"
            >
              Start Learning
              <ChevronRight className="w-5 h-5" />
            </Link>
            <Link 
              href="/chords"
              className="px-8 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-all hover:scale-105"
            >
              View Lessons
            </Link>
          </motion.div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {[
            {
              title: "Learn Chords",
              description: "Master the essential open chords with interactive diagrams and audio playback",
              icon: Music,
              href: "/chords",
              color: "from-blue-600 to-blue-700"
            },
            {
              title: "Read Tabs",
              description: "Learn to read tablature and play your favorite songs step by step",
              icon: BookOpen,
              href: "/tabs",
              color: "from-purple-600 to-purple-700"
            },
            {
              title: "Practice Tools",
              description: "Use our metronome, tuner, and exercises to improve your skills",
              icon: Target,
              href: "/practice",
              color: "from-green-600 to-green-700"
            }
          ].map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="group"
            >
              <Link href={feature.href}>
                <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-all cursor-pointer h-full">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400">
                    {feature.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div 
          className="mt-20 grid md:grid-cols-4 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          {[
            { number: "8", label: "Essential Chords" },
            { number: "50+", label: "Song Tabs" },
            { number: "15", label: "Lessons" },
            { number: "5", label: "Practice Tools" }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
            >
              <div className="text-4xl font-bold text-blue-500 mb-2">{stat.number}</div>
              <div className="text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}