import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { QuizScenario, getRandomScenarios, getQuizScenarioById, getQuizScenariosByIds } from '../features/quiz/quizData';

export type QuizMode = 'learn' | 'exam';
export type ConfidenceLevel = 'low' | 'medium' | 'high';
export type QuizStatus = 'idle' | 'active' | 'finished';

type QuizSessionFilters = {
  category: string;
  difficulty: string;
  count: number;
};

type PersistedQuizState = {
  mode: QuizMode;
  status: QuizStatus;
  queueIds: string[];
  currentIndex: number;
  score: number;
  answers: Record<string, string>;
  confidence: Record<string, ConfidenceLevel>;
  timePerQuestion: Record<string, number>;
  flags: string[];
  questionStartTime: number | null;
  sessionFilters: QuizSessionFilters | null;
};

interface QuizState {
  hasHydrated: boolean;
  mode: QuizMode;
  status: QuizStatus;
  queue: QuizScenario[];
  queueIds: string[];
  currentIndex: number;
  score: number;
  answers: Record<string, string>;       // scenarioId → optionId
  confidence: Record<string, ConfidenceLevel>; // scenarioId → confidence
  timePerQuestion: Record<string, number>; // scenarioId → ms elapsed
  flags: string[];                        // flagged scenario IDs
  questionStartTime: number | null;
  sessionFilters: QuizSessionFilters | null;

  markHydrated: () => void;
  startSession: (category: string, difficulty: string, count: number, mode: QuizMode) => void;
  startScenarioSession: (scenarioId: string, mode?: QuizMode) => boolean;
  startReviewSession: (mode?: QuizMode) => boolean;
  submitAnswer: (scenarioId: string, optionId: string, isCorrect: boolean) => void;
  setConfidence: (scenarioId: string, level: ConfidenceLevel) => void;
  toggleFlag: (scenarioId: string) => void;
  nextQuestion: () => void;
  resetSession: () => void;
}

function createSessionState(): Omit<QuizState, 'hasHydrated' | 'markHydrated' | 'startSession' | 'startScenarioSession' | 'startReviewSession' | 'submitAnswer' | 'setConfidence' | 'toggleFlag' | 'nextQuestion' | 'resetSession'> {
  return {
    mode: 'learn',
    status: 'idle',
    queue: [],
    queueIds: [],
    currentIndex: 0,
    score: 0,
    answers: {},
    confidence: {},
    timePerQuestion: {},
    flags: [],
    questionStartTime: null,
    sessionFilters: null,
  };
}

function isCorrectChoice(scenario: QuizScenario, optionId?: string) {
  return Boolean(optionId && scenario.options.some((option) => option.id === optionId && option.isCorrect));
}

function buildSessionPatch(state: QuizState, patch: Partial<Omit<QuizState, 'hasHydrated' | 'markHydrated' | 'startSession' | 'startScenarioSession' | 'startReviewSession' | 'submitAnswer' | 'setConfidence' | 'toggleFlag' | 'nextQuestion' | 'resetSession'>>) {
  return {
    ...createSessionState(),
    ...patch,
    hasHydrated: state.hasHydrated,
  };
}

export const useQuizStore = create<QuizState>()(
  persist(
    (set, get) => ({
      hasHydrated: false,
      ...createSessionState(),

      markHydrated: () => {
        set({ hasHydrated: true });
      },

      startSession: (category, difficulty, count, mode) => {
        const questions = getRandomScenarios(category, difficulty, count);
        const queueIds = questions.map((question) => question.id);

        set((state) =>
          buildSessionPatch(state, {
            mode,
            status: 'active',
            queue: questions,
            queueIds,
            questionStartTime: Date.now(),
            sessionFilters: {
              category,
              difficulty,
              count,
            },
          }),
        );
      },

      startScenarioSession: (scenarioId, mode = 'learn') => {
        const scenario = getQuizScenarioById(scenarioId);

        if (!scenario) {
          return false;
        }

        set((state) =>
          buildSessionPatch(state, {
            mode,
            status: 'active',
            queue: [scenario],
            queueIds: [scenario.id],
            questionStartTime: Date.now(),
          }),
        );

        return true;
      },

      startReviewSession: (mode = 'learn') => {
        const state = get();
        const questions = state.queue.filter((scenario) => !isCorrectChoice(scenario, state.answers[scenario.id]));

        if (!questions.length) {
          return false;
        }

        set((currentState) =>
          buildSessionPatch(currentState, {
            mode,
            status: 'active',
            queue: questions,
            queueIds: questions.map((question) => question.id),
            questionStartTime: Date.now(),
          }),
        );

        return true;
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
            ? state.flags.filter((id) => id !== scenarioId)
            : [...state.flags, scenarioId];
          return { flags };
        });
      },

      nextQuestion: () => {
        const { currentIndex, queue } = get();
        if (currentIndex + 1 < queue.length) {
          set({ currentIndex: currentIndex + 1, questionStartTime: Date.now() });
        } else {
          set({ status: 'finished', questionStartTime: null });
        }
      },

      resetSession: () =>
        set((state) =>
          buildSessionPatch(state, {
            mode: 'learn',
          }),
        ),
    }),
    {
      name: 'quiz-session',
      storage: createJSONStorage(() => sessionStorage),
      partialize: (state): PersistedQuizState => ({
        mode: state.mode,
        status: state.status,
        queueIds: state.queueIds,
        currentIndex: state.currentIndex,
        score: state.score,
        answers: state.answers,
        confidence: state.confidence,
        timePerQuestion: state.timePerQuestion,
        flags: state.flags,
        questionStartTime: state.questionStartTime,
        sessionFilters: state.sessionFilters,
      }),
      merge: (persistedState, currentState) => {
        const typedPersistedState = persistedState as Partial<PersistedQuizState>;
        const queueIds = typedPersistedState.queueIds ?? [];

        return {
          ...currentState,
          ...typedPersistedState,
          queueIds,
          queue: getQuizScenariosByIds(queueIds),
        };
      },
      onRehydrateStorage: () => (state) => {
        state?.markHydrated();
      },
    },
  ),
);
