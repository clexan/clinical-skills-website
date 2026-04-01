import { create } from 'zustand';
import { QuizScenario, getRandomScenarios } from '../features/quiz/quizData';

export type QuizMode = 'learn' | 'exam';
export type ConfidenceLevel = 'low' | 'medium' | 'high';

interface QuizState {
  mode: QuizMode;
  status: 'idle' | 'active' | 'finished';
  queue: QuizScenario[];
  currentIndex: number;
  score: number;
  answers: Record<string, string>;       // scenarioId → optionId
  confidence: Record<string, ConfidenceLevel>; // scenarioId → confidence
  timePerQuestion: Record<string, number>; // scenarioId → ms elapsed
  flags: string[];                        // flagged scenario IDs
  questionStartTime: number | null;

  startSession: (category: string, difficulty: string, count: number, mode: QuizMode) => void;
  submitAnswer: (scenarioId: string, optionId: string, isCorrect: boolean) => void;
  setConfidence: (scenarioId: string, level: ConfidenceLevel) => void;
  toggleFlag: (scenarioId: string) => void;
  nextQuestion: () => void;
  resetSession: () => void;
}

export const useQuizStore = create<QuizState>((set, get) => ({
  mode: 'learn',
  status: 'idle',
  queue: [],
  currentIndex: 0,
  score: 0,
  answers: {},
  confidence: {},
  timePerQuestion: {},
  flags: [],
  questionStartTime: null,

  startSession: (category, difficulty, count, mode) => {
    const questions = getRandomScenarios(category, difficulty, count);
    set({
      mode,
      status: 'active',
      queue: questions,
      currentIndex: 0,
      score: 0,
      answers: {},
      confidence: {},
      timePerQuestion: {},
      flags: [],
      questionStartTime: Date.now(),
    });
  },

  submitAnswer: (scenarioId, optionId, isCorrect) => {
    const { questionStartTime, timePerQuestion } = get();
    const elapsed = questionStartTime ? Date.now() - questionStartTime : 0;
    set((state) => ({
      answers: { ...state.answers, [scenarioId]: optionId },
      score: isCorrect ? state.score + 1 : state.score,
      timePerQuestion: { ...timePerQuestion, [scenarioId]: elapsed },
    }));
  },

  setConfidence: (scenarioId, level) => {
    set((state) => ({
      confidence: { ...state.confidence, [scenarioId]: level },
    }));
  },

  toggleFlag: (scenarioId) => {
    set((state) => {
      const flags = state.flags.includes(scenarioId)
        ? state.flags.filter(id => id !== scenarioId)
        : [...state.flags, scenarioId];
      return { flags };
    });
  },

  nextQuestion: () => {
    const { currentIndex, queue } = get();
    if (currentIndex + 1 < queue.length) {
      set({ currentIndex: currentIndex + 1, questionStartTime: Date.now() });
    } else {
      set({ status: 'finished' });
    }
  },

  resetSession: () => set({
    status: 'idle',
    queue: [],
    currentIndex: 0,
    score: 0,
    answers: {},
    confidence: {},
    timePerQuestion: {},
    flags: [],
    questionStartTime: null,
    mode: 'learn',
  }),
}));
