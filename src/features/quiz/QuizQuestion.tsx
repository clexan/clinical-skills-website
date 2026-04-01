import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { Link } from 'react-router-dom';
import { QuizScenario, QuizOption } from './quizData';
import { QuizMode, ConfidenceLevel, useQuizStore } from '../../store/useQuizStore';
import styles from './QuizQuestion.module.css';

interface Props {
  scenario: QuizScenario;
  onAnswerSubmit: (scenarioId: string, optionId: string, isCorrect: boolean) => void;
  onNext: () => void;
  isLastQuestion: boolean;
  mode: QuizMode;
}

function AccordionSection({
  label,
  id,
  open,
  onToggle,
  children,
}: {
  label: string;
  id: string;
  open: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}) {
  return (
    <div className={styles.accordionItem}>
      <button
        className={styles.accordionTrigger}
        onClick={onToggle}
        aria-expanded={open}
        aria-controls={`acc-${id}`}
        id={`acc-btn-${id}`}
      >
        <span>{label}</span>
        <span className={`${styles.chevron} ${open ? styles.chevronOpen : ''}`} aria-hidden="true">
          ▾
        </span>
      </button>
      {open && (
        <div
          className={styles.accordionContent}
          id={`acc-${id}`}
          role="region"
          aria-labelledby={`acc-btn-${id}`}
        >
          {children}
        </div>
      )}
    </div>
  );
}

export function QuizQuestion({ scenario, onAnswerSubmit, onNext, isLastQuestion, mode }: Props) {
  const { answers, confidence, setConfidence, toggleFlag, flags } = useQuizStore();
  const storedAnswer = answers[scenario.id] ?? null;
  const storedConfidence = confidence[scenario.id];

  const [selectedOption, setSelectedOption] = useState<string | null>(storedAnswer);
  const [confidenceSet, setConfidenceSet] = useState(Boolean(storedConfidence));
  const [openSections, setOpenSections] = useState<Set<string>>(
    storedAnswer && storedConfidence ? new Set(['correct', 'wrong']) : new Set(),
  );
  const isFlagged = flags.includes(scenario.id);

  useEffect(() => {
    setSelectedOption(storedAnswer);
    setConfidenceSet(mode === 'learn' ? Boolean(storedConfidence) : false);
    setOpenSections(mode === 'learn' && storedAnswer && storedConfidence ? new Set(['correct', 'wrong']) : new Set());
  }, [mode, scenario.id, storedAnswer, storedConfidence]);

  const isAnswered = selectedOption !== null;
  const selectedObj = scenario.options.find(o => o.id === selectedOption);
  const isCorrect = selectedObj?.isCorrect ?? false;
  const correctOption = scenario.options.find(o => o.isCorrect);

  const showConfidenceCheck = mode === 'learn' && isAnswered && !confidenceSet;
  const showLearnFeedback   = mode === 'learn' && isAnswered && confidenceSet;
  const showExamAck         = mode === 'exam'  && isAnswered;
  const hasRevealedAnswer   = mode === 'learn' && confidenceSet;

  // ── Option display helpers ───────────────────────────────────────────────

  const getOptionMod = (opt: QuizOption): string => {
    if (!isAnswered) return '';
    if (!hasRevealedAnswer) {
      return opt.id === selectedOption ? styles.opt_selected : styles.opt_unselected;
    }
    if (opt.isCorrect) return styles.opt_correct;
    if (opt.id === selectedOption) return styles.opt_incorrect;
    return styles.opt_faded;
  };

  const getBadgeContent = (opt: QuizOption): string => {
    if (!isAnswered || !hasRevealedAnswer) return opt.id;
    if (opt.isCorrect) return '✓';
    if (opt.id === selectedOption) return '✗';
    return opt.id;
  };

  const getBadgeMod = (opt: QuizOption): string => {
    if (!isAnswered) return '';
    if (!hasRevealedAnswer) {
      return opt.id === selectedOption ? styles.badge_selected : styles.badge_unselected;
    }
    if (opt.isCorrect) return styles.badge_correct;
    if (opt.id === selectedOption) return styles.badge_incorrect;
    return styles.badge_unselected;
  };

  // ── Handlers ─────────────────────────────────────────────────────────────

  const handleSelect = (opt: QuizOption) => {
    if (isAnswered) return;
    setSelectedOption(opt.id);
    onAnswerSubmit(scenario.id, opt.id, opt.isCorrect);
  };

  const handleConfidence = (level: ConfidenceLevel) => {
    setConfidence(scenario.id, level);
    setConfidenceSet(true);
    setOpenSections(new Set(['correct', 'wrong']));
  };

  const toggleSection = (key: string) =>
    setOpenSections(prev => {
      const next = new Set(prev);
      next.has(key) ? next.delete(key) : next.add(key);
      return next;
    });

  const handleNext = () => {
    setSelectedOption(null);
    setConfidenceSet(false);
    setOpenSections(new Set());
    onNext();
  };

  // ── Per-option rationale for accordion labels ─────────────────────────────
  const hasRationale = !!scenario.optionRationale;

  return (
    <div className={styles.container}>

      {/* Skill tag — Learn mode only */}
      {scenario.skillTested && mode === 'learn' && (
        <div className={styles.skillTag}>
          <span className={styles.skillIcon} aria-hidden="true">⚕</span>
          <span className={styles.skillText}>Skill tested: {scenario.skillTested}</span>
        </div>
      )}

      {/* Question stem */}
      <div className={styles.questionBlock}>
        <p className={styles.questionLabel}>Clinical Decision</p>
        <h3 className={styles.questionText}>{scenario.question}</h3>
      </div>

      {/* Answer options */}
      <div className={styles.optionsList} role="group" aria-label="Answer options">
        {scenario.options.map((opt) => (
          <button
            key={opt.id}
            id={`opt-${scenario.id}-${opt.id}`}
            className={`${styles.option} ${getOptionMod(opt)}`}
            onClick={() => handleSelect(opt)}
            disabled={isAnswered}
            aria-pressed={selectedOption === opt.id}
          >
            <span className={`${styles.optionBadge} ${getBadgeMod(opt)}`}>
              {getBadgeContent(opt)}
            </span>
            <span className={styles.optionText}>{opt.text}</span>
            {hasRevealedAnswer && opt.isCorrect && (
              <span className={styles.correctTag} aria-label="Correct answer">✓</span>
            )}
          </button>
        ))}
      </div>

      {/* ── Confidence check (Learn mode, pre-reveal) ─────────────────────── */}
      {showConfidenceCheck && (
        <div className={styles.confidenceBlock}>
          <p className={styles.confidenceLabel}>Before seeing the answer — how confident were you?</p>
          <div className={styles.confidenceRow}>
            {(['low', 'medium', 'high'] as ConfidenceLevel[]).map(level => (
              <button
                key={level}
                id={`conf-${scenario.id}-${level}`}
                className={`${styles.confBtn} ${styles[`conf_${level}`]}`}
                onClick={() => handleConfidence(level)}
              >
                {level === 'low' ? '⊘ Low' : level === 'medium' ? '◒ Medium' : '● High'}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* ── Exam mode acknowledgement ─────────────────────────────────────── */}
      {showExamAck && (
        <div className={styles.examAck}>
          <span className={`${styles.examAckIcon} ${isCorrect ? styles.examAckCorrect : styles.examAckWrong}`}>
            {isCorrect ? '✓' : '○'}
          </span>
          <span className={styles.examAckText}>Answer recorded</span>
          <button className={styles.nextBtn} onClick={handleNext} id={`next-${scenario.id}`}>
            {isLastQuestion ? 'Finish Exam →' : 'Next Question →'}
          </button>
        </div>
      )}

      {/* ── Learn mode layered feedback ───────────────────────────────────── */}
      {showLearnFeedback && (
        <div className={`${styles.feedback} ${isCorrect ? styles.feedback_correct : styles.feedback_incorrect}`}>

          {/* Verdict banner */}
          <div className={styles.verdictBanner}>
            <span className={styles.verdictPill}>
              {isCorrect ? '✓ Correct' : '✗ Incorrect'}
            </span>
            {scenario.verdictOneLineSummary && (
              <p className={styles.verdictSummary}>{scenario.verdictOneLineSummary}</p>
            )}
          </div>

          {/* Accordion layers */}
          <div className={styles.accordion}>

            {/* Why the correct answer is right */}
            <AccordionSection
              label={`Why ${correctOption?.id} is correct`}
              id={`correct-${scenario.id}`}
              open={openSections.has('correct')}
              onToggle={() => toggleSection('correct')}
            >
              {hasRationale && correctOption ? (
                <p className={styles.rationaleText}>
                  {scenario.optionRationale![correctOption.id]}
                </p>
              ) : (
                <div className={styles.mdBlock}>
                  <ReactMarkdown>{scenario.explanation}</ReactMarkdown>
                </div>
              )}
            </AccordionSection>

            {/* Why the chosen wrong answer fails */}
            {!isCorrect && selectedOption && hasRationale && (
              <AccordionSection
                label={`Why ${selectedOption} is the wrong choice`}
                id={`wrong-${scenario.id}`}
                open={openSections.has('wrong')}
                onToggle={() => toggleSection('wrong')}
              >
                <p className={styles.rationaleText}>
                  {scenario.optionRationale![selectedOption]}
                </p>
              </AccordionSection>
            )}

            {/* Full explanation fallback (no optionRationale) */}
            {!isCorrect && !hasRationale && (
              <AccordionSection
                label="Full Explanation"
                id={`full-${scenario.id}`}
                open={openSections.has('full')}
                onToggle={() => toggleSection('full')}
              >
                <div className={styles.mdBlock}>
                  <ReactMarkdown>{scenario.explanation}</ReactMarkdown>
                </div>
              </AccordionSection>
            )}

            {/* References */}
            {scenario.references && scenario.references.length > 0 && (
              <AccordionSection
                label="References"
                id={`refs-${scenario.id}`}
                open={openSections.has('refs')}
                onToggle={() => toggleSection('refs')}
              >
                <ol className={styles.refList}>
                  {scenario.references.map((ref, i) => (
                    <li key={i}>{ref}</li>
                  ))}
                </ol>
              </AccordionSection>
            )}
          </div>

          {/* Bottom controls */}
          <div className={styles.feedbackControls}>
            <button
              className={`${styles.flagBtn} ${isFlagged ? styles.flagged : ''}`}
              onClick={() => toggleFlag(scenario.id)}
              title={isFlagged ? 'Remove flag' : 'Flag this question for review'}
            >
              {isFlagged ? '⚑ Flagged' : '⚐ Flag'}
            </button>
            {scenario.linkedChapter && (
              <Link
                to={`/chapter/${scenario.linkedChapter}`}
                className={styles.handbookLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                📖 Handbook →
              </Link>
            )}
            <button
              className={styles.nextBtn}
              onClick={handleNext}
              id={`next-learn-${scenario.id}`}
            >
              {isLastQuestion ? 'View Results →' : 'Next Question →'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
