"use client";

import { useState } from "react";
import { lessonsData, getLessonsByWeek } from "@/lib/lessons-data";
import { ChevronRight, Clock, Award, Target, BookOpen } from "lucide-react";
import Link from "next/link";

export default function LearnPage() {
  const [selectedWeek, setSelectedWeek] = useState<number | null>(null);
  const [expandedLesson, setExpandedLesson] = useState<number | null>(null);

  const weeks = Array.from(new Set(lessonsData.map(l => l.week))).sort();
  const beginnerLessons = lessonsData.filter(l => l.level === 'Beginner');
  const intermediateLessons = lessonsData.filter(l => l.level === 'Intermediate');
  const advancedLessons = lessonsData.filter(l => l.level === 'Advanced');

  const totalLessons = lessonsData.length;
  const completedLessons = lessonsData.filter(l => l.completed).length;
  const progressPercentage = (completedLessons / totalLessons) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">Learn Guitar</h1>
          <p className="text-gray-300 text-lg">
            Comprehensive curriculum from beginner to advanced
          </p>
        </div>

        {/* Progress Overview */}
        <div className="bg-gray-800 rounded-lg p-6 mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-white">Your Progress</h2>
            <span className="text-gray-400">{completedLessons} / {totalLessons} lessons</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-3 mb-4">
            <div
              className="bg-gradient-to-r from-blue-500 to-blue-400 h-3 rounded-full transition-all duration-500"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-green-400">{beginnerLessons.length}</div>
              <div className="text-sm text-gray-400">Beginner</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-yellow-400">{intermediateLessons.length}</div>
              <div className="text-sm text-gray-400">Intermediate</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-red-400">{advancedLessons.length}</div>
              <div className="text-sm text-gray-400">Advanced</div>
            </div>
          </div>
        </div>

        {/* Week Filter */}
        <div className="mb-6">
          <div className="flex gap-2 flex-wrap">
            <button
              onClick={() => setSelectedWeek(null)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                selectedWeek === null
                  ? "bg-blue-600 text-white"
                  : "bg-gray-800 text-gray-400 hover:text-white"
              }`}
            >
              All Weeks
            </button>
            {weeks.map(week => (
              <button
                key={week}
                onClick={() => setSelectedWeek(week)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedWeek === week
                    ? "bg-blue-600 text-white"
                    : "bg-gray-800 text-gray-400 hover:text-white"
                }`}
              >
                Week {week}
              </button>
            ))}
          </div>
        </div>

        {/* Lessons List */}
        <div className="grid gap-4 max-w-4xl">
          {(selectedWeek ? getLessonsByWeek(selectedWeek) : lessonsData).map((lesson) => (
            <div
              key={lesson.id}
              className="bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-700 transition-colors"
            >
              <div
                className="p-6 cursor-pointer"
                onClick={() => setExpandedLesson(expandedLesson === lesson.id ? null : lesson.id)}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-semibold text-white">
                        Lesson {lesson.id}: {lesson.title}
                      </h3>
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        lesson.level === 'Beginner' ? 'bg-green-600 text-white' :
                        lesson.level === 'Intermediate' ? 'bg-yellow-600 text-white' :
                        'bg-red-600 text-white'
                      }`}>
                        {lesson.level}
                      </span>
                      <span className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs">
                        {lesson.category}
                      </span>
                    </div>
                    <p className="text-gray-400 mb-3">{lesson.description}</p>
                    <div className="flex items-center gap-4 text-sm">
                      <span className="text-gray-500 flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {lesson.duration}
                      </span>
                      <span className="text-gray-500">Week {lesson.week}</span>
                      {lesson.content.relatedChords && (
                        <span className="text-gray-500">
                          Chords: {lesson.content.relatedChords.join(', ')}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="ml-4">
                    <div className={`w-12 h-12 rounded-full border-2 flex items-center justify-center ${
                      lesson.completed 
                        ? "border-green-500 bg-green-500 bg-opacity-20"
                        : "border-gray-600"
                    }`}>
                      {lesson.completed ? (
                        <span className="text-green-500 text-xl">✓</span>
                      ) : (
                        <ChevronRight className={`w-5 h-5 text-gray-500 transition-transform ${
                          expandedLesson === lesson.id ? "rotate-90" : ""
                        }`} />
                      )}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Expanded Content */}
              {expandedLesson === lesson.id && (
                <div className="px-6 pb-6 border-t border-gray-700">
                  <div className="pt-6">
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                        <Target className="w-5 h-5 text-blue-500" />
                        Learning Objectives
                      </h4>
                      <ul className="space-y-2">
                        {lesson.content.objectives.map((objective, i) => (
                          <li key={i} className="flex items-start gap-2 text-gray-300">
                            <span className="text-blue-500 mt-1">•</span>
                            {objective}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                        <BookOpen className="w-5 h-5 text-green-500" />
                        Lesson Steps
                      </h4>
                      <div className="space-y-4">
                        {lesson.content.steps.map((step, i) => (
                          <div key={i} className="bg-gray-900 rounded-lg p-4">
                            <h5 className="font-semibold text-white mb-2">
                              {i + 1}. {step.title}
                            </h5>
                            <p className="text-gray-400 text-sm mb-2">{step.description}</p>
                            {step.practice && (
                              <div className="bg-gray-800 rounded p-3 mt-2">
                                <span className="text-xs text-green-400 font-semibold">PRACTICE:</span>
                                <p className="text-gray-300 text-sm mt-1">{step.practice}</p>
                              </div>
                            )}
                            {step.tips && (
                              <ul className="mt-2 space-y-1">
                                {step.tips.map((tip, j) => (
                                  <li key={j} className="text-xs text-gray-500">
                                    💡 {tip}
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                        <Award className="w-5 h-5 text-yellow-500" />
                        Practice Exercises
                      </h4>
                      <div className="grid gap-3">
                        {lesson.content.practiceExercises.map((exercise, i) => (
                          <div key={i} className="bg-gray-900 rounded-lg p-4 flex justify-between items-center">
                            <div>
                              <h5 className="font-medium text-white">{exercise.name}</h5>
                              <p className="text-gray-400 text-sm">{exercise.description}</p>
                            </div>
                            <div className="text-right">
                              <div className="text-gray-500 text-sm">{exercise.duration}</div>
                              <span className={`text-xs px-2 py-1 rounded inline-block mt-1 ${
                                exercise.difficulty === 'easy' ? 'bg-green-600 text-white' :
                                exercise.difficulty === 'medium' ? 'bg-yellow-600 text-white' :
                                'bg-red-600 text-white'
                              }`}>
                                {exercise.difficulty}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <Link
                        href={`/learn/${lesson.id}`}
                        className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg text-center hover:bg-blue-700 transition-colors font-medium"
                      >
                        Start Lesson
                      </Link>
                      {lesson.content.nextLesson && (
                        <button className="px-6 py-3 bg-gray-700 text-gray-300 rounded-lg hover:bg-gray-600 transition-colors">
                          Next: Lesson {lesson.content.nextLesson}
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Learning Path */}
        <div className="mt-12 bg-gray-800 rounded-lg p-8 max-w-4xl">
          <h2 className="text-2xl font-bold text-white mb-6">Your Learning Path</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className={`w-3 h-3 rounded-full ${completedLessons >= 4 ? 'bg-green-500' : 'bg-gray-500'}`}></div>
              <div>
                <span className="text-gray-300 font-medium">Foundation (Week 1-2)</span>
                <p className="text-gray-500 text-sm">Guitar basics, first chords, strumming</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className={`w-3 h-3 rounded-full ${completedLessons >= 8 ? 'bg-green-500' : 'bg-gray-500'}`}></div>
              <div>
                <span className="text-gray-300 font-medium">Essential Chords (Week 3-4)</span>
                <p className="text-gray-500 text-sm">Minor chords, barre chords, 7th chords</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className={`w-3 h-3 rounded-full ${completedLessons >= 10 ? 'bg-green-500' : 'bg-gray-500'}`}></div>
              <div>
                <span className="text-gray-300 font-medium">Reading Music (Week 5-6)</span>
                <p className="text-gray-500 text-sm">Tablature, fingerpicking, basic theory</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className={`w-3 h-3 rounded-full ${completedLessons >= 13 ? 'bg-green-500' : 'bg-gray-500'}`}></div>
              <div>
                <span className="text-gray-300 font-medium">Techniques (Week 7-8)</span>
                <p className="text-gray-500 text-sm">Lead techniques, scales, improvisation</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className={`w-3 h-3 rounded-full ${completedLessons >= 15 ? 'bg-green-500' : 'bg-gray-500'}`}></div>
              <div>
                <span className="text-gray-300 font-medium">Advanced (Week 9+)</span>
                <p className="text-gray-500 text-sm">Advanced chords, theory, composition</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}