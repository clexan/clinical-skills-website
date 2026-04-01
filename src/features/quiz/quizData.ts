import { allScenarios } from './scenarios';

export interface ClinicalFinding {
  value: string;
  status: 'normal' | 'warning' | 'critical';
}

export interface ClinicalFindings {
  mechanism?: ClinicalFinding;
  airway?: ClinicalFinding;
  breathing?: ClinicalFinding;
  circulation?: ClinicalFinding;
  fast?: ClinicalFinding;
  interventions?: ClinicalFinding;
  response?: ClinicalFinding;
}

export interface QuizOption {
  id: string;
  text: string;
  isCorrect: boolean;
}

export interface QuizScenario {
  id: string;
  slug: string;
  title: string;
  category: 'Cardiology' | 'Respiratory' | 'Neurology' | 'Emergency' | 'Trauma';
  difficulty: 'Easy' | 'Medium' | 'Hard';
  vignette: string;
  question: string;
  options: QuizOption[];
  explanation: string;
  references?: string[];
  // Enhanced clinical decision interface fields (all optional for backward compat)
  findings?: ClinicalFindings;
  skillTested?: string;
  linkedChapter?: string;
  verdictOneLineSummary?: string;
  optionRationale?: Record<string, string>;
}

export const quizScenarios: QuizScenario[] = allScenarios;

const quizScenarioIndexById = new Map(quizScenarios.map((scenario) => [scenario.id, scenario] as const));
const quizScenarioIndexBySlug = new Map(quizScenarios.map((scenario) => [scenario.slug, scenario] as const));

export function getQuizScenarioById(id: string): QuizScenario | undefined {
  return quizScenarioIndexById.get(id);
}

export function getQuizScenarioBySlug(slug: string): QuizScenario | undefined {
  return quizScenarioIndexBySlug.get(slug);
}

export function getQuizScenariosByIds(ids: string[]): QuizScenario[] {
  return ids
    .map((id) => quizScenarioIndexById.get(id))
    .filter((scenario): scenario is QuizScenario => Boolean(scenario));
}

export function getRandomScenarios(
  categoryFilter: string | null,
  difficultyFilter: string | null,
  count: number
): QuizScenario[] {
  let pool = [...quizScenarios];

  if (categoryFilter && categoryFilter !== 'All') {
    pool = pool.filter(q => q.category === categoryFilter);
  }
  if (difficultyFilter && difficultyFilter !== 'All') {
    pool = pool.filter(q => q.difficulty === difficultyFilter);
  }

  // Fisher-Yates shuffle
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }

  return pool.slice(0, count);
}
