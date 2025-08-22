"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { getLessonById } from "@/lib/lessons-data";
import { ChevronLeft, ChevronRight, Clock, Target, BookOpen, Award, CheckCircle } from "lucide-react";
import { ChordDiagram } from "@/components/chords/ChordDiagram";
import { fullChordsDatabase } from "@/lib/chords-data";

export default function LessonDetailPage() {
  const params = useParams();
  const router = useRouter();
  const lessonId = parseInt(params.id as string);
  const lesson = getLessonById(lessonId);
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [lessonComplete, setLessonComplete] = useState(false);

  useEffect(() => {
    if (!lesson) {
      router.push('/learn');
    }
  }, [lesson, router]);

  if (!lesson) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
          <p className="mt-4 text-gray-400">Loading lesson...</p>
        </div>
      </div>
    );
  }

  const handleStepComplete = (stepIndex: number) => {
    if (!completedSteps.includes(stepIndex)) {
      setCompletedSteps([...completedSteps, stepIndex]);
    }
    if (stepIndex < lesson.content.steps.length - 1) {
      setCurrentStep(stepIndex + 1);
    } else if (completedSteps.length === lesson.content.steps.length - 1) {
      setLessonComplete(true);
    }
  };

  const progress = ((completedSteps.length / lesson.content.steps.length) * 100);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <Link 
            href="/learn"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-4 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            Back to Lessons
          </Link>
          
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-3xl font-bold text-white">
              Lesson {lesson.id}: {lesson.title}
            </h1>
            <span className={`px-2 py-1 rounded text-xs font-medium ${
              lesson.level === 'Beginner' ? 'bg-green-600 text-white' :
              lesson.level === 'Intermediate' ? 'bg-yellow-600 text-white' :
              'bg-red-600 text-white'
            }`}>
              {lesson.level}
            </span>
          </div>
          
          <p className="text-gray-400 mb-4">{lesson.description}</p>
          
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {lesson.duration}
            </span>
            <span>Week {lesson.week}</span>
            <span className="capitalize">{lesson.category}</span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="bg-gray-800 rounded-lg p-4 mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-400">Lesson Progress</span>
            <span className="text-sm text-gray-400">
              {completedSteps.length} / {lesson.content.steps.length} steps
            </span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-blue-500 to-blue-400 h-2 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Overview */}
        <div className="bg-gray-800 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-blue-500" />
            Overview
          </h2>
          <p className="text-gray-300 mb-6">{lesson.content.overview}</p>
          
          <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
            <Target className="w-5 h-5 text-green-500" />
            Learning Objectives
          </h3>
          <ul className="space-y-2">
            {lesson.content.objectives.map((objective, i) => (
              <li key={i} className="flex items-start gap-2 text-gray-300">
                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                {objective}
              </li>
            ))}
          </ul>
        </div>

        {/* Step Navigation */}
        <div className="bg-gray-800 rounded-lg p-4 mb-8">
          <div className="flex gap-2 overflow-x-auto pb-2">
            {lesson.content.steps.map((step, index) => (
              <button
                key={index}
                onClick={() => setCurrentStep(index)}
                className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                  currentStep === index
                    ? "bg-blue-600 text-white"
                    : completedSteps.includes(index)
                    ? "bg-green-600 text-white"
                    : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                }`}
              >
                {completedSteps.includes(index) && "✓ "}
                Step {index + 1}
              </button>
            ))}
          </div>
        </div>

        {/* Current Step Content */}
        <div className="bg-gray-800 rounded-lg p-8 mb-8">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-white mb-2">
              Step {currentStep + 1}: {lesson.content.steps[currentStep].title}
            </h2>
            <p className="text-gray-300">
              {lesson.content.steps[currentStep].description}
            </p>
          </div>

          {lesson.content.steps[currentStep].practice && (
            <div className="bg-blue-900 bg-opacity-30 border border-blue-700 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold text-blue-400 mb-3">Practice Exercise</h3>
              <p className="text-gray-300">
                {lesson.content.steps[currentStep].practice}
              </p>
            </div>
          )}

          {lesson.content.steps[currentStep].tips && (
            <div className="bg-gray-900 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold text-yellow-400 mb-3">💡 Pro Tips</h3>
              <ul className="space-y-2">
                {lesson.content.steps[currentStep].tips.map((tip, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-300">
                    <span className="text-yellow-500">•</span>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Related Chords Display */}
          {lesson.content.relatedChords && currentStep === 0 && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-white mb-4">Related Chords</h3>
              <div className="flex gap-4 overflow-x-auto pb-4">
                {lesson.content.relatedChords.map(chordName => {
                  const chord = fullChordsDatabase[chordName];
                  return chord ? (
                    <div key={chordName} className="flex-shrink-0">
                      <h4 className="text-center text-gray-300 mb-2">{chordName}</h4>
                      <ChordDiagram chord={chord} size={150} />
                    </div>
                  ) : null;
                })}
              </div>
            </div>
          )}

          {/* Step Navigation */}
          <div className="flex justify-between items-center">
            <button
              onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
              disabled={currentStep === 0}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                currentStep === 0
                  ? "bg-gray-700 text-gray-500 cursor-not-allowed"
                  : "bg-gray-700 text-white hover:bg-gray-600"
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
              Previous
            </button>

            {!completedSteps.includes(currentStep) ? (
              <button
                onClick={() => handleStepComplete(currentStep)}
                className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
              >
                Mark as Complete
              </button>
            ) : (
              <span className="text-green-400 font-medium">✓ Completed</span>
            )}

            <button
              onClick={() => setCurrentStep(Math.min(lesson.content.steps.length - 1, currentStep + 1))}
              disabled={currentStep === lesson.content.steps.length - 1}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                currentStep === lesson.content.steps.length - 1
                  ? "bg-gray-700 text-gray-500 cursor-not-allowed"
                  : "bg-gray-700 text-white hover:bg-gray-600"
              }`}
            >
              Next
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Practice Exercises */}
        <div className="bg-gray-800 rounded-lg p-8 mb-8">
          <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <Award className="w-5 h-5 text-yellow-500" />
            Practice Exercises
          </h2>
          <div className="grid gap-4">
            {lesson.content.practiceExercises.map((exercise, i) => (
              <div key={i} className="bg-gray-900 rounded-lg p-6 flex justify-between items-center">
                <div>
                  <h3 className="font-semibold text-white mb-2">{exercise.name}</h3>
                  <p className="text-gray-400">{exercise.description}</p>
                </div>
                <div className="text-right">
                  <div className="text-gray-500 mb-2">{exercise.duration}</div>
                  <span className={`px-3 py-1 rounded text-xs font-medium ${
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

        {/* Lesson Complete */}
        {lessonComplete && (
          <div className="bg-gradient-to-r from-green-900 to-green-800 rounded-lg p-8 text-center">
            <div className="text-5xl mb-4">🎉</div>
            <h2 className="text-2xl font-bold text-white mb-3">
              Lesson Complete!
            </h2>
            <p className="text-gray-300 mb-6">
              Great job! You&apos;ve completed all steps in this lesson.
            </p>
            <div className="flex gap-4 justify-center">
              <Link
                href="/learn"
                className="px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
              >
                Back to Lessons
              </Link>
              {lesson.content.nextLesson && (
                <Link
                  href={`/learn/${lesson.content.nextLesson}`}
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  Next Lesson →
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}