import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface Lesson {
  id: string;
  completed: boolean;
  completedAt?: Date;
  score?: number;
}

interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  earned: boolean;
  earnedAt?: Date;
}

interface PracticeSession {
  date: Date;
  duration: number; // in minutes
  type: 'lesson' | 'practice' | 'freeplay';
}

interface ProgressState {
  // User progress
  lessons: Record<string, Lesson>;
  achievements: Achievement[];
  practiceStreak: number;
  totalPracticeTime: number; // in minutes
  lastPracticeDate: Date | null;
  
  // Skill levels (0-100)
  skills: {
    openChords: number;
    barreChords: number;
    strumming: number;
    fingerpicking: number;
    rhythm: number;
    theory: number;
    tabReading: number;
    earTraining: number;
  };
  
  // Practice history
  practiceSessions: PracticeSession[];
  
  // Actions
  completeLesson: (lessonId: string, score?: number) => void;
  updateSkill: (skill: keyof ProgressState['skills'], value: number) => void;
  addPracticeSession: (duration: number, type: PracticeSession['type']) => void;
  checkAchievements: () => void;
  resetProgress: () => void;
}

const initialSkills = {
  openChords: 0,
  barreChords: 0,
  strumming: 0,
  fingerpicking: 0,
  rhythm: 0,
  theory: 0,
  tabReading: 0,
  earTraining: 0,
};

const defaultAchievements: Achievement[] = [
  {
    id: 'first-chord',
    name: 'First Chord',
    description: 'Played your first chord',
    icon: '🎸',
    earned: false,
  },
  {
    id: 'week-streak',
    name: 'Week Warrior',
    description: 'Practice 7 days in a row',
    icon: '🔥',
    earned: false,
  },
  {
    id: 'chord-master',
    name: 'Chord Master',
    description: 'Master all basic open chords',
    icon: '🌟',
    earned: false,
  },
  {
    id: 'speed-demon',
    name: 'Speed Demon',
    description: 'Play at 120 BPM or faster',
    icon: '⚡',
    earned: false,
  },
  {
    id: 'theory-wizard',
    name: 'Theory Wizard',
    description: 'Complete all theory lessons',
    icon: '🧙',
    earned: false,
  },
  {
    id: 'song-master',
    name: 'Song Master',
    description: 'Learn 5 complete songs',
    icon: '🎵',
    earned: false,
  },
  {
    id: 'practice-hero',
    name: 'Practice Hero',
    description: 'Practice for 100 hours total',
    icon: '🏆',
    earned: false,
  },
  {
    id: 'dedication',
    name: 'Dedication',
    description: '30-day practice streak',
    icon: '💎',
    earned: false,
  },
];

export const useProgressStore = create<ProgressState>()(
  persist(
    (set, get) => ({
      lessons: {},
      achievements: defaultAchievements,
      practiceStreak: 0,
      totalPracticeTime: 0,
      lastPracticeDate: null,
      skills: initialSkills,
      practiceSessions: [],

      completeLesson: (lessonId, score) => {
        set((state) => ({
          lessons: {
            ...state.lessons,
            [lessonId]: {
              id: lessonId,
              completed: true,
              completedAt: new Date(),
              score,
            },
          },
        }));
        
        // Check for achievements after completing a lesson
        get().checkAchievements();
      },

      updateSkill: (skill, value) => {
        set((state) => ({
          skills: {
            ...state.skills,
            [skill]: Math.min(100, Math.max(0, value)),
          },
        }));
        
        get().checkAchievements();
      },

      addPracticeSession: (duration, type) => {
        const now = new Date();
        const lastDate = get().lastPracticeDate;
        let newStreak = get().practiceStreak;
        
        // Calculate streak
        if (lastDate) {
          const daysDiff = Math.floor(
            (now.getTime() - new Date(lastDate).getTime()) / (1000 * 60 * 60 * 24)
          );
          
          if (daysDiff === 1) {
            newStreak += 1;
          } else if (daysDiff > 1) {
            newStreak = 1;
          }
          // If same day, don't change streak
        } else {
          newStreak = 1;
        }
        
        set((state) => ({
          practiceSessions: [
            ...state.practiceSessions,
            { date: now, duration, type },
          ],
          totalPracticeTime: state.totalPracticeTime + duration,
          practiceStreak: newStreak,
          lastPracticeDate: now,
        }));
        
        get().checkAchievements();
      },

      checkAchievements: () => {
        const state = get();
        const updatedAchievements = [...state.achievements];
        let hasChanges = false;
        
        // Check each achievement condition
        updatedAchievements.forEach((achievement) => {
          if (achievement.earned) return;
          
          let earned = false;
          
          switch (achievement.id) {
            case 'first-chord':
              earned = state.skills.openChords > 0;
              break;
            case 'week-streak':
              earned = state.practiceStreak >= 7;
              break;
            case 'chord-master':
              earned = state.skills.openChords >= 80;
              break;
            case 'speed-demon':
              // This would be checked when using metronome
              break;
            case 'theory-wizard':
              earned = state.skills.theory >= 80;
              break;
            case 'practice-hero':
              earned = state.totalPracticeTime >= 6000; // 100 hours
              break;
            case 'dedication':
              earned = state.practiceStreak >= 30;
              break;
          }
          
          if (earned && !achievement.earned) {
            achievement.earned = true;
            achievement.earnedAt = new Date();
            hasChanges = true;
          }
        });
        
        if (hasChanges) {
          set({ achievements: updatedAchievements });
        }
      },

      resetProgress: () => {
        set({
          lessons: {},
          achievements: defaultAchievements,
          practiceStreak: 0,
          totalPracticeTime: 0,
          lastPracticeDate: null,
          skills: initialSkills,
          practiceSessions: [],
        });
      },
    }),
    {
      name: 'guitar-guide-progress',
    }
  )
);