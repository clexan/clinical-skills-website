import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuizStore, QuizMode } from '../../store/useQuizStore';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import styles from './QuizIndexPage.module.css';

const CATEGORIES = [
  { label: 'Mixed cases', value: 'All' },
  { label: 'Cardiology',  value: 'Cardiology'  },
  { label: 'Respiratory', value: 'Respiratory' },
  { label: 'Neurology',   value: 'Neurology'   },
  { label: 'Emergency',   value: 'Emergency'   },
  { label: 'Trauma',      value: 'Trauma'      },
];

const DIFFICULTIES = [
  { label: 'Mixed',  value: 'All'    },
  { label: 'Easy',   value: 'Easy'   },
  { label: 'Medium', value: 'Medium' },
  { label: 'Hard',   value: 'Hard'   },
];

const COUNTS = [5, 10, 15, 20];

function estimateTime(count: number, difficulty: string): string {
  const mins = count * (difficulty === 'Hard' ? 2.5 : difficulty === 'Easy' ? 1 : 1.5);
  return `~${Math.round(mins)}–${Math.round(mins * 1.3)} min`;
}

export function QuizIndexPage() {
  const navigate = useNavigate();
  const { startSession } = useQuizStore();

  const [mode,       setMode]       = useState<QuizMode | null>(null);
  const [category,   setCategory]   = useState('All');
  const [difficulty, setDifficulty] = useState('All');
  const [count,      setCount]      = useState(10);

  const catLabel  = CATEGORIES.find(c => c.value === category)?.label ?? category;
  const diffLabel = DIFFICULTIES.find(d => d.value === difficulty)?.label ?? difficulty;
  const timeEst   = estimateTime(count, difficulty === 'All' ? 'Medium' : difficulty);

  const handleStart = () => {
    if (!mode) return;
    startSession(category, difficulty, count, mode);
    navigate('/quiz/session');
  };

  return (
    <section className={styles.page}>

      <header className={styles.header}>
        <Breadcrumb crumbs={[{ label: 'Handbook', to: '/' }, { label: 'Quiz' }]} />
        <div className={styles.headerBody}>
          <h1 className={styles.title}>Case Scenario Quiz</h1>
          <p className={styles.tagline}>
            Triage the case. Commit to a plan. Review your reasoning.
          </p>
        </div>
      </header>

      <div className={styles.modeGrid}>
        <button
          id="mode-learn"
          className={`${styles.modeCard} ${styles.learn} ${mode === 'learn' ? styles.selected : ''}`}
          onClick={() => setMode('learn')}
          aria-pressed={mode === 'learn'}
        >
          <div className={styles.modeHead}>
            <span className={styles.modeName}>Learn</span>
            {mode === 'learn' && <span className={styles.modeCheck} aria-hidden="true">✓</span>}
          </div>
          <p className={styles.modeLine}>
            Guided reasoning with immediate debrief after every answer.
          </p>
        </button>

        <button
          id="mode-exam"
          className={`${styles.modeCard} ${styles.exam} ${mode === 'exam' ? styles.selected : ''}`}
          onClick={() => setMode('exam')}
          aria-pressed={mode === 'exam'}
        >
          <div className={styles.modeHead}>
            <span className={styles.modeName}>Exam</span>
            {mode === 'exam' && <span className={styles.modeCheck} aria-hidden="true">✓</span>}
          </div>
          <p className={styles.modeLine}>
            Simulated assessment with delayed review at the end.
          </p>
        </button>
      </div>

      <div className={styles.builder}>
        <div className={styles.builderRow}>
          <span className={styles.fieldLabel}>Focus</span>
          <div className={styles.chips}>
            {CATEGORIES.map(c => (
              <button
                key={c.value}
                id={`cat-${c.value}`}
                className={`${styles.chip} ${category === c.value ? styles.chipActive : ''}`}
                onClick={() => setCategory(c.value)}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        <hr className={styles.builderRule} />

        <div className={styles.builderRow}>
          <span className={styles.fieldLabel}>Difficulty</span>
          <div className={styles.chips}>
            {DIFFICULTIES.map(d => (
              <button
                key={d.value}
                id={`diff-${d.value}`}
                className={`${styles.chip} ${difficulty === d.value ? styles.chipActive : ''}`}
                onClick={() => setDifficulty(d.value)}
              >
                {d.label}
              </button>
            ))}
          </div>
        </div>

        <hr className={styles.builderRule} />

        <div className={styles.builderRow}>
          <span className={styles.fieldLabel}>Length</span>
          <div className={styles.chips}>
            {COUNTS.map(n => (
              <button
                key={n}
                id={`count-${n}`}
                className={`${styles.chip} ${count === n ? styles.chipActive : ''}`}
                onClick={() => setCount(n)}
              >
                {n}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.ctaBlock}>
        {mode && (
          <div className={styles.summaryRow}>
             <span className={styles.summaryItem}>{catLabel}</span>
             <span className={styles.summaryDot}>·</span>
             <span className={styles.summaryItem}>{diffLabel}</span>
             <span className={styles.summaryDot}>·</span>
             <span className={styles.summaryItem}>{count} questions</span>
             <span className={styles.summaryDot}>·</span>
             <span className={styles.summaryItem}>{timeEst}</span>
          </div>
        )}

        <button
          id="start-quiz-btn"
          className={styles.startBtn}
          onClick={handleStart}
          disabled={!mode}
        >
          Start
        </button>
      </div>

    </section>
  );
}
