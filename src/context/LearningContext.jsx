
import { createContext, useContext, useState, useEffect, useCallback } from "react";

const LearningContext = createContext(null);

const STORAGE_KEY = "athencert_learning_state_v1";
const LEGACY_STORAGE_KEY = "certpath_learning_state_v1";

const DEFAULT_STATE = {
  completedLessons: {
    aws: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
    "aws-saa": [1, 2],
    azure: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    google: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    cisco: [1, 2, 3, 4, 5],
    comptia: [1, 2, 3],
    kubernetes: [1, 2, 3, 4, 5, 6, 7, 8, 9]
  },
  bookmarkedLessons: {
    aws: [3, 8],
    "aws-saa": [2],
    azure: [2],
    google: [4],
    cisco: [1, 4],
    comptia: [2],
    kubernetes: [3, 5]
  },
  quizHistory: [
    { id: "qh-1", provider: "aws", score: 5, total: 5, date: "2026-08-16" },
    { id: "qh-2", provider: "google", score: 4, total: 5, date: "2026-08-17" },
    { id: "qh-3", provider: "kubernetes", score: 5, total: 5, date: "2026-08-18" }
  ],
  mockExamHistory: [
    { id: "mh-1", provider: "aws", score: 85, total: 100, passed: true, date: "2026-08-15" }
  ],
  flashcardMastery: {
    "aws-fc-1": true,
    "aws-fc-2": true,
    "az-fc-1": true,
    "k8-fc-1": true
  },
  streakDays: 7,
  lastStudyDate: "2026-08-18",
  lastActiveLesson: {
    provider: "aws",
    lessonId: 8,
    title: "AWS Global Infrastructure",
    category: "Cloud Concepts",
    path: "/certifications/aws/cloud-practitioner/lesson/8"
  },
  completedTasks: ["Review IAM fundamentals", "Complete short quiz: Regions and Availability Zones"]
};

export function LearningProvider({ children }) {
  const [state, setState] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY) || localStorage.getItem(LEGACY_STORAGE_KEY);
      if (saved) {
        return { ...DEFAULT_STATE, ...JSON.parse(saved) };
      }
    } catch (e) {
      console.error("Failed to load Athencert learning state from localStorage", e);
    }
    return DEFAULT_STATE;
  });

  const [activeModal, setActiveModal] = useState(null); 
  const [modalProvider, setModalProvider] = useState("aws");
  const [modalInitialData, setModalInitialData] = useState(null);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
      console.error("Failed to persist Athencert learning state", e);
    }
  }, [state]);

  const openPracticeModal = (type, provider = "aws", initialData = null) => {
    setModalProvider(provider.toLowerCase());
    setModalInitialData(initialData);
    setActiveModal(type);
  };

  const closeModal = () => {
    setActiveModal(null);
    setModalInitialData(null);
  };

  const isLessonCompleted = (provider, lessonId) => {
    const pKey = provider.toLowerCase();
    const list = state.completedLessons[pKey] || [];
    return list.includes(Number(lessonId));
  };

  const toggleLessonCompleted = (provider, lessonId) => {
    const pKey = provider.toLowerCase();
    const idNum = Number(lessonId);
    setState((prev) => {
      const currentList = prev.completedLessons[pKey] || [];
      const isDone = currentList.includes(idNum);
      const updated = isDone
        ? currentList.filter((id) => id !== idNum)
        : [...currentList, idNum];

      return {
        ...prev,
        completedLessons: {
          ...prev.completedLessons,
          [pKey]: updated
        }
      };
    });
  };

  const isLessonBookmarked = (provider, lessonId) => {
    const pKey = provider.toLowerCase();
    const list = state.bookmarkedLessons[pKey] || [];
    return list.includes(Number(lessonId));
  };

  const toggleLessonBookmarked = (provider, lessonId) => {
    const pKey = provider.toLowerCase();
    const idNum = Number(lessonId);
    setState((prev) => {
      const currentList = prev.bookmarkedLessons[pKey] || [];
      const isSaved = currentList.includes(idNum);
      const updated = isSaved
        ? currentList.filter((id) => id !== idNum)
        : [...currentList, idNum];

      return {
        ...prev,
        bookmarkedLessons: {
          ...prev.bookmarkedLessons,
          [pKey]: updated
        }
      };
    });
  };

  const recordLastActive = useCallback((provider, lessonId, title, category, path) => {
    setState((prev) => {
      if (
        prev.lastActiveLesson?.provider === provider &&
        prev.lastActiveLesson?.lessonId === lessonId
      ) {
        return prev;
      }
      return {
        ...prev,
        lastActiveLesson: {
          provider,
          lessonId,
          title,
          category,
          path
        }
      };
    });
  }, []);

  const recordQuizScore = (provider, score, total) => {
    const record = {
      id: `qh-${Date.now()}`,
      provider,
      score,
      total,
      date: new Date().toISOString().split("T")[0]
    };
    setState((prev) => ({
      ...prev,
      quizHistory: [record, ...prev.quizHistory]
    }));
  };

  const recordMockExamScore = (provider, score, total, passed) => {
    const record = {
      id: `mh-${Date.now()}`,
      provider,
      score,
      total,
      passed,
      date: new Date().toISOString().split("T")[0]
    };
    setState((prev) => ({
      ...prev,
      mockExamHistory: [record, ...prev.mockExamHistory]
    }));
  };

  const toggleTask = (taskTitle) => {
    setState((prev) => {
      const exists = prev.completedTasks.includes(taskTitle);
      return {
        ...prev,
        completedTasks: exists
          ? prev.completedTasks.filter((t) => t !== taskTitle)
          : [...prev.completedTasks, taskTitle]
      };
    });
  };

  const getProviderProgress = (provider, totalLessons = 1) => {
    const pKey = provider.toLowerCase();
    const completed = state.completedLessons[pKey]?.length || 0;
    const pct = Math.min(100, Math.round((completed / (totalLessons || 1)) * 100));
    return {
      completedCount: completed,
      totalLessons,
      percentage: pct
    };
  };

  const getOverallStats = () => {
    let totalCompleted = 0;
    Object.values(state.completedLessons).forEach((list) => {
      totalCompleted += list.length;
    });

    let totalQuizCorrect = 0;
    let totalQuizAttempted = 0;
    state.quizHistory.forEach((q) => {
      totalQuizCorrect += q.score;
      totalQuizAttempted += q.total;
    });

    const accuracy =
      totalQuizAttempted > 0
        ? Math.round((totalQuizCorrect / totalQuizAttempted) * 100)
        : 92;

    return {
      totalCompletedLessons: totalCompleted,
      streakDays: state.streakDays,
      activeCoursesCount: Object.keys(state.completedLessons).length,
      accuracyPercentage: accuracy,
      quizzesTaken: state.quizHistory.length,
      examsTaken: state.mockExamHistory.length
    };
  };

  return (
    <LearningContext.Provider
      value={{
        state,
        activeModal,
        modalProvider,
        modalInitialData,
        openPracticeModal,
        closeModal,
        isLessonCompleted,
        toggleLessonCompleted,
        isLessonBookmarked,
        toggleLessonBookmarked,
        recordLastActive,
        recordQuizScore,
        recordMockExamScore,
        toggleTask,
        getProviderProgress,
        getOverallStats
      }}
    >
      {children}
    </LearningContext.Provider>
  );
}

export function useLearning() {
  const context = useContext(LearningContext);
  if (!context) {
    throw new Error("useLearning must be used within a LearningProvider");
  }
  return context;
}
