"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Trophy, Flame, TrendingUp, Calendar, Target, Award, Clock, CheckCircle } from "lucide-react";
import { getProgress, getPracticeHistory, getWeeklyStats } from "@/lib/progress-tracking";

const achievementData = {
  "first-chord": { name: "First Chord", description: "Played your first chord", icon: "🎸" },
  "week-streak": { name: "Week Streak", description: "Practice 7 days in a row", icon: "🔥" },
  "month-streak": { name: "Month Streak", description: "Practice 30 days in a row", icon: "🌟" },
  "song-master": { name: "Song Master", description: "Complete 5 exercises", icon: "🎵" },
  "chord-expert": { name: "Chord Expert", description: "Master open chords (75%)", icon: "⭐" },
  "speed-demon": { name: "Speed Demon", description: "Play at 120 BPM", icon: "⚡" },
  "theory-wizard": { name: "Theory Wizard", description: "Reach 50% in theory", icon: "🧙" },
  "practice-champion": { name: "Practice Champion", description: "24 hours total practice", icon: "🏆" },
  "dedication": { name: "Dedication", description: "14 day streak", icon: "💪" },
};

export default function ProgressPage() {
  const [progress, setProgress] = useState<any>(null);
  const [practiceHistory, setPracticeHistory] = useState<any[]>([]);
  const [weeklyStats, setWeeklyStats] = useState<any>(null);
  const [viewMode, setViewMode] = useState<"week" | "month">("week");

  useEffect(() => {
    const userProgress = getProgress();
    setProgress(userProgress);
    
    const history = getPracticeHistory(viewMode === "week" ? 7 : 28);
    setPracticeHistory(history);
    
    const stats = getWeeklyStats();
    setWeeklyStats(stats);
  }, [viewMode]);

  if (!progress) {
    return <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-12">
      <div className="container mx-auto px-4">
        <div className="animate-pulse">Loading...</div>
      </div>
    </div>;
  }

  const formatTime = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    if (hours > 0) {
      return `${hours}h ${mins}m`;
    }
    return `${mins}m`;
  };

  const getIntensityClass = (minutes: number) => {
    if (minutes === 0) return "bg-gray-700";
    if (minutes < 15) return "bg-green-700";
    if (minutes < 30) return "bg-green-600";
    if (minutes < 60) return "bg-green-500";
    return "bg-green-400";
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-white mb-4">Your Progress</h1>
            <p className="text-gray-300 text-lg">
              Track your guitar learning journey and celebrate achievements
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid lg:grid-cols-4 gap-6 mb-8">
            <motion.div 
              className="bg-gray-800 rounded-lg p-6"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold text-gray-400">Practice Streak</h3>
                <Flame className="w-5 h-5 text-orange-500" />
              </div>
              <p className="text-4xl font-bold text-white mb-2">{progress.currentStreak} days</p>
              <p className="text-green-400 text-sm">
                {progress.currentStreak > 0 ? "🔥 Keep it going!" : "Start practicing today!"}
              </p>
              <div className="mt-2 text-xs text-gray-500">
                Longest: {progress.longestStreak} days
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-gray-800 rounded-lg p-6"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold text-gray-400">Total Practice</h3>
                <Clock className="w-5 h-5 text-blue-500" />
              </div>
              <p className="text-4xl font-bold text-white mb-2">
                {formatTime(progress.totalPracticeTime)}
              </p>
              {weeklyStats && (
                <p className={`text-sm ${weeklyStats.percentChange > 0 ? "text-green-400" : "text-gray-400"}`}>
                  {weeklyStats.percentChange > 0 ? "📈" : "📊"} {Math.abs(weeklyStats.percentChange)}% vs last week
                </p>
              )}
            </motion.div>
            
            <motion.div 
              className="bg-gray-800 rounded-lg p-6"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold text-gray-400">Lessons Done</h3>
                <CheckCircle className="w-5 h-5 text-purple-500" />
              </div>
              <p className="text-4xl font-bold text-white mb-2">
                {progress.completedLessons.length} / 48
              </p>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-purple-500 to-purple-400 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${(progress.completedLessons.length / 48) * 100}%` }}
                ></div>
              </div>
              <p className="text-purple-400 text-sm mt-2">
                {Math.round((progress.completedLessons.length / 48) * 100)}% Complete
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-gray-800 rounded-lg p-6"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold text-gray-400">Achievements</h3>
                <Trophy className="w-5 h-5 text-yellow-500" />
              </div>
              <p className="text-4xl font-bold text-white mb-2">
                {progress.achievements.length} / 9
              </p>
              <div className="flex flex-wrap gap-1 mt-2">
                {progress.achievements.slice(0, 4).map((id: string) => (
                  <span key={id} className="text-lg" title={achievementData[id as keyof typeof achievementData]?.name}>
                    {achievementData[id as keyof typeof achievementData]?.icon}
                  </span>
                ))}
                {progress.achievements.length > 4 && (
                  <span className="text-gray-500 text-sm">+{progress.achievements.length - 4}</span>
                )}
              </div>
            </motion.div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Skill Levels */}
            <motion.div 
              className="bg-gray-800 rounded-lg p-8"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold text-white mb-6">Skill Levels</h2>
              <div className="space-y-4">
                {Object.entries(progress.skillLevels).map(([skill, level]) => (
                  <div key={skill}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300">{skill}</span>
                      <span className="text-gray-400">{level as number}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <motion.div
                        className="bg-gradient-to-r from-blue-500 to-blue-400 h-2 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${level as number}%` }}
                        transition={{ duration: 1, delay: 0.5 }}
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Achievements */}
            <motion.div 
              className="bg-gray-800 rounded-lg p-8"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h2 className="text-2xl font-bold text-white mb-6">Achievements</h2>
              <div className="grid grid-cols-2 gap-4">
                {Object.entries(achievementData).map(([id, achievement]) => {
                  const earned = progress.achievements.includes(id);
                  return (
                    <motion.div
                      key={id}
                      className={`p-4 rounded-lg border-2 transition-all ${
                        earned
                          ? "bg-gray-700 border-yellow-600"
                          : "bg-gray-900 border-gray-700 opacity-50"
                      }`}
                      whileHover={earned ? { scale: 1.05 } : {}}
                    >
                      <div className="text-2xl mb-2">{achievement.icon}</div>
                      <h4 className={`font-semibold mb-1 text-sm ${
                        earned ? "text-white" : "text-gray-500"
                      }`}>
                        {achievement.name}
                      </h4>
                      <p className="text-xs text-gray-400">
                        {achievement.description}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Practice History */}
          <motion.div 
            className="mt-8 bg-gray-800 rounded-lg p-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-white">Practice History</h2>
              <div className="flex gap-2">
                <button
                  onClick={() => setViewMode("week")}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    viewMode === "week"
                      ? "bg-blue-600 text-white"
                      : "bg-gray-700 text-gray-400 hover:text-white"
                  }`}
                >
                  Week
                </button>
                <button
                  onClick={() => setViewMode("month")}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    viewMode === "month"
                      ? "bg-blue-600 text-white"
                      : "bg-gray-700 text-gray-400 hover:text-white"
                  }`}
                >
                  Month
                </button>
              </div>
            </div>
            
            <div className="bg-gray-900 rounded p-6">
              <div className={`grid ${viewMode === "week" ? "grid-cols-7" : "grid-cols-7"} gap-2`}>
                {practiceHistory.map((day, i) => {
                  const date = new Date(day.date);
                  const isToday = day.date === new Date().toISOString().split('T')[0];
                  return (
                    <div
                      key={i}
                      className="text-center"
                      title={`${day.date}: ${formatTime(day.minutes)}`}
                    >
                      {viewMode === "week" && (
                        <div className="text-xs text-gray-500 mb-1">
                          {date.toLocaleDateString('en', { weekday: 'short' })}
                        </div>
                      )}
                      <div
                        className={`aspect-square rounded ${getIntensityClass(day.minutes)} ${
                          isToday ? "ring-2 ring-blue-500" : ""
                        }`}
                      ></div>
                      {viewMode === "week" && (
                        <div className="text-xs text-gray-600 mt-1">
                          {date.getDate()}
                        </div>
                      )}
                    </div>
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
                  <div className="w-3 h-3 bg-green-400 rounded"></div>
                </div>
                <span>More</span>
              </div>
            </div>
            
            {weeklyStats && (
              <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-gray-900 rounded p-4">
                  <div className="text-xs text-gray-500 mb-1">This Week</div>
                  <div className="text-lg font-semibold text-white">
                    {formatTime(weeklyStats.thisWeekTime)}
                  </div>
                </div>
                <div className="bg-gray-900 rounded p-4">
                  <div className="text-xs text-gray-500 mb-1">Last Week</div>
                  <div className="text-lg font-semibold text-white">
                    {formatTime(weeklyStats.lastWeekTime)}
                  </div>
                </div>
                <div className="bg-gray-900 rounded p-4">
                  <div className="text-xs text-gray-500 mb-1">Sessions</div>
                  <div className="text-lg font-semibold text-white">
                    {weeklyStats.sessionsThisWeek}
                  </div>
                </div>
                <div className="bg-gray-900 rounded p-4">
                  <div className="text-xs text-gray-500 mb-1">Daily Avg</div>
                  <div className="text-lg font-semibold text-white">
                    {formatTime(Math.round(weeklyStats.thisWeekTime / 7))}
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}