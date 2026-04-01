import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuizStore } from '../../store/useQuizStore';
import styles from './QuizResultsPage.module.css';

type GradeBand = { label: string; color: string };

function gradeBand(pct: number): GradeBand {
  if (pct >= 80) return { label: 'Excellent',    color: 'var(--m3-success)' };
  if (pct >= 60) return { label: 'Good',         color: 'var(--m3-warning)' };
  return                 { label: 'Needs Review', color: 'var(--m3-error)' };
}

export function QuizResultsPage() {
  const navigate = useNavigate();
  const { score, queue, answers, confidence, flags, mode, resetSession } = useQuizStore();

  const total  = queue.length;
  const pct    = total > 0 ? Math.round((score / total) * 100) : 0;
  const grade  = gradeBand(pct);

  // Domain breakdown
  const categories = [...new Set(queue.map(q => q.category))];
  const domainStats = categories.map(cat => {
    const qs = queue.filter(q => q.category === cat);
    const correct = qs.filter(q => {
      const chosen = answers[q.id];
      return chosen && q.options.find(o => o.id === chosen)?.isCorrect;
    }).length;
    return { cat, correct, total: qs.length };
  });

  // Confidence calibration
  const wrongWithHighConfidence = queue.filter(q => {
    const chosen = answers[q.id];
    const isW = chosen && !q.options.find(o => o.id === chosen)?.isCorrect;
    return isW && confidence[q.id] === 'high';
  });

  const correctWithLowConfidence = queue.filter(q => {
    const chosen = answers[q.id];
    const isC = chosen && q.options.find(o => o.id === chosen)?.isCorrect;
    return isC && confidence[q.id] === 'low';
  });

  const flaggedItems = queue.filter(q => flags.includes(q.id));

  const handleRestart = () => {
    resetSession();
    navigate('/quiz');
  };

  const handleReview = () => {
    // Future: launch a filtered Learn session for wrong answers only
    // For now, restart from index
    resetSession();
    navigate('/quiz');
  };

  return (
    <div className={styles.page}>

      {/* ── Score card ──────────────────────────────────────────────────────── */}
      <div className={styles.scoreCard}>
        <div className={styles.scoreHeader}>
          <span className={styles.modeTag} data-mode={mode}>
            {mode === 'learn' ? '📖 Learn Mode' : '📋 Exam Mode'}
          </span>
          <h1 className={styles.resultTitle}>Session Complete</h1>
        </div>

        <div className={styles.scoreDisplay}>
          <span className={styles.scoreFraction}>{score}<span className={styles.scoreOf}>/{total}</span></span>
          <span className={styles.scorePct} style={{ color: grade.color }}>{pct}%</span>
          <span className={styles.gradeLabel} style={{ color: grade.color }}>{grade.label}</span>
        </div>

        {/* Score bar */}
        <div className={styles.scoreBar} aria-label={`Score: ${pct}%`}>
          <div
            className={styles.scoreBarFill}
            style={{ width: `${pct}%`, background: grade.color }}
          />
        </div>
      </div>

      {/* ── Domain breakdown ────────────────────────────────────────────────── */}
      {domainStats.length > 0 && (
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Performance by Domain</h2>
          <div className={styles.domainGrid}>
            {domainStats.map(({ cat, correct, total: t }) => {
              const p = Math.round((correct / t) * 100);
              const g = gradeBand(p);
              return (
                <div key={cat} className={styles.domainCard}>
                  <div className={styles.domainHeader}>
                    <span className={styles.domainName}>{cat}</span>
                    <span className={styles.domainScore} style={{ color: g.color }}>
                      {correct}/{t}
                    </span>
                  </div>
                  <div className={styles.domainBar}>
                    <div
                      className={styles.domainBarFill}
                      style={{ width: `${p}%`, background: g.color }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ── Confidence calibration ──────────────────────────────────────────── */}
      {(wrongWithHighConfidence.length > 0 || correctWithLowConfidence.length > 0) && (
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Confidence Calibration</h2>

          {wrongWithHighConfidence.length > 0 && (
            <div className={styles.calibrationBlock}>
              <div className={styles.calibrationHeader}>
                <span className={styles.calibrationIcon}>⚠</span>
                <span className={styles.calibrationLabel}>Unsafe certainty</span>
                <span className={styles.calibrationCount}>{wrongWithHighConfidence.length} question{wrongWithHighConfidence.length > 1 ? 's' : ''}</span>
              </div>
              <p className={styles.calibrationDesc}>
                You were wrong but highly confident. These are the highest-priority items to review — confident errors are the most clinically dangerous.
              </p>
              <ul className={styles.questionList}>
                {wrongWithHighConfidence.map(q => (
                  <li key={q.id} className={styles.questionListItem}>
                    <span className={styles.qBadge} data-type="wrong">✗</span>
                    <span>{q.title}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {correctWithLowConfidence.length > 0 && (
            <div className={styles.calibrationBlock} style={{ marginTop: 'var(--space-3)' }}>
              <div className={styles.calibrationHeader}>
                <span className={styles.calibrationIcon} style={{ color: 'var(--accent-amber)' }}>◒</span>
                <span className={styles.calibrationLabel}>Low-confidence correct</span>
                <span className={styles.calibrationCount}>{correctWithLowConfidence.length} question{correctWithLowConfidence.length > 1 ? 's' : ''}</span>
              </div>
              <p className={styles.calibrationDesc}>
                You got these right but weren't sure. Consider reviewing the underlying principles to build reliable recall.
              </p>
              <ul className={styles.questionList}>
                {correctWithLowConfidence.map(q => (
                  <li key={q.id} className={styles.questionListItem}>
                    <span className={styles.qBadge} data-type="correct">✓</span>
                    <span>{q.title}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      {/* ── Flagged items ────────────────────────────────────────────────────── */}
      {flaggedItems.length > 0 && (
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Flagged for Review</h2>
          <ul className={styles.questionList}>
            {flaggedItems.map(q => (
              <li key={q.id} className={styles.questionListItem}>
                <span className={styles.qBadge} data-type="flag">⚑</span>
                <span>{q.title}</span>
                <span className={styles.qCategory}>{q.category}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* ── CTAs ────────────────────────────────────────────────────────────── */}
      <div className={styles.ctas}>
        <button id="results-review-btn" className={styles.ctaSecondary} onClick={handleReview}>
          Review Incorrect Answers
        </button>
        <button id="results-restart-btn" className={styles.ctaPrimary} onClick={handleRestart}>
          Back to Quiz Index
        </button>
      </div>
    </div>
  );
}
