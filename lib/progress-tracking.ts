interface PracticeSession {
  date: string;
  duration: number; // in minutes
  exercises: string[];
  chords: string[];
  lessons: number[];
}

interface UserProgress {
  totalPracticeTime: number;
  currentStreak: number;
  longestStreak: number;
  lastPracticeDate: string;
  completedLessons: number[];
  completedExercises: string[];
  achievements: string[];
  skillLevels: Record<string, number>;
  practiceSessions: PracticeSession[];
}

const DEFAULT_PROGRESS: UserProgress = {
  totalPracticeTime: 0,
  currentStreak: 0,
  longestStreak: 0,
  lastPracticeDate: "",
  completedLessons: [],
  completedExercises: [],
  achievements: [],
  skillLevels: {
    "Open Chords": 0,
    "Strumming": 0,
    "Chord Transitions": 0,
    "Reading Tabs": 0,
    "Rhythm": 0,
    "Music Theory": 0,
  },
  practiceSessions: []
};

export function getProgress(): UserProgress {
  if (typeof window === "undefined") return DEFAULT_PROGRESS;
  
  const stored = localStorage.getItem("userProgress");
  if (stored) {
    return JSON.parse(stored);
  }
  return DEFAULT_PROGRESS;
}

export function saveProgress(progress: UserProgress) {
  if (typeof window === "undefined") return;
  localStorage.setItem("userProgress", JSON.stringify(progress));
}

export function addPracticeSession(duration: number, exercises: string[] = [], chords: string[] = [], lessons: number[] = []) {
  const progress = getProgress();
  const today = new Date().toISOString().split('T')[0];
  
  // Add session
  progress.practiceSessions.push({
    date: today,
    duration,
    exercises,
    chords,
    lessons
  });
  
  // Update total practice time
  progress.totalPracticeTime += duration;
  
  // Update streak
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const yesterdayStr = yesterday.toISOString().split('T')[0];
  
  if (progress.lastPracticeDate === yesterdayStr || progress.lastPracticeDate === today) {
    if (progress.lastPracticeDate !== today) {
      progress.currentStreak++;
    }
  } else {
    progress.currentStreak = 1;
  }
  
  progress.lastPracticeDate = today;
  progress.longestStreak = Math.max(progress.longestStreak, progress.currentStreak);
  
  // Update completed items
  exercises.forEach(ex => {
    if (!progress.completedExercises.includes(ex)) {
      progress.completedExercises.push(ex);
    }
  });
  
  lessons.forEach(lesson => {
    if (!progress.completedLessons.includes(lesson)) {
      progress.completedLessons.push(lesson);
    }
  });
  
  // Check for achievements
  checkAchievements(progress);
  
  saveProgress(progress);
  return progress;
}

export function updateSkillLevel(skill: string, level: number) {
  const progress = getProgress();
  progress.skillLevels[skill] = Math.min(100, Math.max(0, level));
  saveProgress(progress);
  return progress;
}

export function completeLesson(lessonId: number) {
  const progress = getProgress();
  if (!progress.completedLessons.includes(lessonId)) {
    progress.completedLessons.push(lessonId);
    
    // Update skill based on lesson
    if (lessonId <= 3) {
      progress.skillLevels["Open Chords"] = Math.min(100, progress.skillLevels["Open Chords"] + 10);
    } else if (lessonId <= 6) {
      progress.skillLevels["Strumming"] = Math.min(100, progress.skillLevels["Strumming"] + 10);
    } else if (lessonId <= 9) {
      progress.skillLevels["Chord Transitions"] = Math.min(100, progress.skillLevels["Chord Transitions"] + 10);
    }
    
    checkAchievements(progress);
    saveProgress(progress);
  }
  return progress;
}

function checkAchievements(progress: UserProgress) {
  const achievements = [];
  
  // First Chord
  if (progress.practiceSessions.length > 0) {
    achievements.push("first-chord");
  }
  
  // Week Streak
  if (progress.currentStreak >= 7) {
    achievements.push("week-streak");
  }
  
  // Month Streak
  if (progress.currentStreak >= 30) {
    achievements.push("month-streak");
  }
  
  // Song Master
  if (progress.completedExercises.length >= 5) {
    achievements.push("song-master");
  }
  
  // Chord Expert
  if (progress.skillLevels["Open Chords"] >= 75) {
    achievements.push("chord-expert");
  }
  
  // Speed Demon
  if (progress.completedExercises.some(ex => ex.includes("120bpm"))) {
    achievements.push("speed-demon");
  }
  
  // Theory Wizard
  if (progress.skillLevels["Music Theory"] >= 50) {
    achievements.push("theory-wizard");
  }
  
  // Practice Champion
  if (progress.totalPracticeTime >= 1440) { // 24 hours
    achievements.push("practice-champion");
  }
  
  // Dedication
  if (progress.longestStreak >= 14) {
    achievements.push("dedication");
  }
  
  progress.achievements = [...new Set([...progress.achievements, ...achievements])];
}

export function getPracticeHistory(days: number = 28): { date: string; minutes: number }[] {
  const progress = getProgress();
  const history: Record<string, number> = {};
  
  // Initialize all days with 0
  for (let i = 0; i < days; i++) {
    const date = new Date();
    date.setDate(date.getDate() - i);
    const dateStr = date.toISOString().split('T')[0];
    history[dateStr] = 0;
  }
  
  // Fill in actual practice data
  progress.practiceSessions.forEach(session => {
    if (history.hasOwnProperty(session.date)) {
      history[session.date] += session.duration;
    }
  });
  
  // Convert to array and sort by date
  return Object.entries(history)
    .map(([date, minutes]) => ({ date, minutes }))
    .sort((a, b) => a.date.localeCompare(b.date));
}

export function getWeeklyStats() {
  const progress = getProgress();
  const today = new Date();
  const weekAgo = new Date();
  weekAgo.setDate(today.getDate() - 7);
  
  const thisWeekSessions = progress.practiceSessions.filter(session => {
    const sessionDate = new Date(session.date);
    return sessionDate >= weekAgo && sessionDate <= today;
  });
  
  const thisWeekTime = thisWeekSessions.reduce((sum, session) => sum + session.duration, 0);
  
  // Calculate last week for comparison
  const twoWeeksAgo = new Date();
  twoWeeksAgo.setDate(today.getDate() - 14);
  
  const lastWeekSessions = progress.practiceSessions.filter(session => {
    const sessionDate = new Date(session.date);
    return sessionDate >= twoWeeksAgo && sessionDate < weekAgo;
  });
  
  const lastWeekTime = lastWeekSessions.reduce((sum, session) => sum + session.duration, 0);
  
  const percentChange = lastWeekTime > 0 
    ? Math.round(((thisWeekTime - lastWeekTime) / lastWeekTime) * 100)
    : 0;
  
  return {
    thisWeekTime,
    lastWeekTime,
    percentChange,
    sessionsThisWeek: thisWeekSessions.length
  };
}