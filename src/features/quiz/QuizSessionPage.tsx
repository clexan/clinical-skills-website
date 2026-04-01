import React, { useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { useNavigate } from 'react-router-dom';
import { useQuizStore } from '../../store/useQuizStore';
import { QuizQuestion } from './QuizQuestion';
import { ClinicalFindingsStrip } from './ClinicalFindingsStrip';
import { Badge } from '../../components/ui/Badge';
import styles from './QuizDetailPage.module.css';

export function QuizSessionPage() {
  const navigate = useNavigate();
  const { status, queue, currentIndex, mode, submitAnswer, nextQuestion } = useQuizStore();

  useEffect(() => {
    if (status === 'idle')     navigate('/quiz');
    if (status === 'finished') navigate('/quiz/results');
  }, [status, navigate]);

  if (status !== 'active' || queue.length === 0) return null;

  const scenario = queue[currentIndex];
  const progressPct = Math.round(((currentIndex) / queue.length) * 100);

  const modeBadgeColor = mode === 'learn' ? 'teal' : 'amber';
  const modeLabel      = mode === 'learn' ? 'Learn Mode' : 'Exam Mode';

  return (
    <div className={styles.page}>

      {/* Progress bar */}
      <div className={styles.progressTrack} aria-label="Quiz progress">
        <div
          className={styles.progressFill}
          style={{ width: `${progressPct}%` }}
          data-mode={mode}
        />
      </div>

      {/* Two-column layout */}
      <div className={styles.sessionLayout}>

        {/* ── LEFT PANEL: context ─────────────────────────────────────────── */}
        <aside className={styles.leftPanel}>

          {/* Header meta */}
          <div className={styles.panelMeta}>
            <div className={styles.metaRow}>
              <span className={`${styles.modePill} ${styles[`mode_${mode}`]}`}>
                {modeLabel}
              </span>
              <span className={styles.progressLabel}>
                {currentIndex + 1} / {queue.length}
              </span>
            </div>
            <div className={styles.badgeRow}>
              <Badge
                label={scenario.category}
                color={
                  scenario.category === 'Cardiology'  ? 'rose'   :
                  scenario.category === 'Respiratory' ? 'sky'    :
                  scenario.category === 'Neurology'   ? 'violet' :
                  scenario.category === 'Emergency'   ? 'amber'  :
                  scenario.category === 'Trauma'      ? 'teal'   : 'slate'
                }
              />
              <Badge label={scenario.difficulty} color="slate" />
            </div>
            <h1 className={styles.caseTitle}>{scenario.title}</h1>
          </div>

          {/* Clinical findings strip — Learn mode only */}
          {mode === 'learn' && scenario.findings && (
            <ClinicalFindingsStrip findings={scenario.findings} />
          )}

          {/* Narrative vignette */}
          <div className={styles.vignette}>
            <p className={styles.vignetteLabel}>Scenario</p>
            <div className={styles.vignetteText}>
              <ReactMarkdown>{scenario.vignette}</ReactMarkdown>
            </div>
          </div>
        </aside>

        {/* ── RIGHT PANEL: question + interaction ─────────────────────────── */}
        <main className={styles.rightPanel}>
          <QuizQuestion
            scenario={scenario}
            onAnswerSubmit={submitAnswer}
            onNext={nextQuestion}
            isLastQuestion={currentIndex === queue.length - 1}
            mode={mode}
          />
        </main>
      </div>
    </div>
  );
}
