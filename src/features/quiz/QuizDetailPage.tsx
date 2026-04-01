import ReactMarkdown from 'react-markdown';
import { useNavigate, useParams } from 'react-router-dom';

import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { StatusPage } from '@/components/layout/StatusPage';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';

import { useQuizStore } from '../../store/useQuizStore';
import { ClinicalFindingsStrip } from './ClinicalFindingsStrip';
import { getQuizScenarioBySlug } from './quizData';
import styles from './QuizDetailPage.module.css';

const categoryBadgeColor = {
  Cardiology: 'rose',
  Respiratory: 'sky',
  Neurology: 'violet',
  Emergency: 'amber',
  Trauma: 'teal',
} as const;

export function QuizDetailPage() {
  const navigate = useNavigate();
  const { quizSlug } = useParams();
  const { startScenarioSession } = useQuizStore();

  const scenario = quizSlug ? getQuizScenarioBySlug(quizSlug) : undefined;

  if (!scenario) {
    return (
      <StatusPage
        eyebrow="Quiz unavailable"
        title="Scenario not found"
        description="This quiz case is unavailable or the slug no longer matches the current catalog."
        backLabel="Back to quiz"
        backTo="/quiz"
      />
    );
  }

  const handleStart = (mode: 'learn' | 'exam') => {
    const started = startScenarioSession(scenario.id, mode);

    if (started) {
      navigate('/quiz/session');
    }
  };

  return (
    <section className="page-shell">
      <div className="page-shell__header">
        <Breadcrumb crumbs={[{ label: 'Handbook', to: '/' }, { label: 'Quiz', to: '/quiz' }, { label: scenario.title }]} />
        <div className={styles.detailHeader}>
          <div className={styles.badgeRow}>
            <Badge label={scenario.category} color={categoryBadgeColor[scenario.category]} />
            <Badge label={scenario.difficulty} color="slate" />
            {scenario.skillTested ? <Badge label={scenario.skillTested} color="teal" /> : null}
          </div>
          <h1 className={styles.title}>{scenario.title}</h1>
          <p className={styles.description}>
            Single-case preview. Start this scenario directly in learn mode for guided debrief, or use exam mode for a
            no-hint attempt.
          </p>
          <div className={styles.actionRow}>
            <Button onClick={() => handleStart('learn')}>
              Practice In Learn Mode
            </Button>
            <Button onClick={() => handleStart('exam')} variant="ghost">
              Practice In Exam Mode
            </Button>
          </div>
        </div>
      </div>

      {scenario.findings ? (
        <div className="page-shell__body">
          <p className={styles.sectionHeading}>Clinical Handover</p>
          <ClinicalFindingsStrip findings={scenario.findings} />
        </div>
      ) : null}

      <div className="page-shell__body">
        <p className={styles.sectionHeading}>Scenario</p>
        <div className={styles.caseText}>
          <ReactMarkdown>{scenario.vignette}</ReactMarkdown>
        </div>
      </div>

      <div className="page-shell__body">
        <p className={styles.sectionHeading}>Question</p>
        <p className={styles.prompt}>{scenario.question}</p>
        <ol className={styles.optionList}>
          {scenario.options.map((option) => (
            <li className={styles.optionItem} key={option.id}>
              <span className={styles.optionBadge}>{option.id}</span>
              <span>{option.text}</span>
            </li>
          ))}
        </ol>
      </div>

      <div className="page-shell__body">
        <details className={styles.answerDisclosure}>
          <summary className={styles.answerSummary}>Reveal answer and debrief</summary>
          <div className={styles.answerBody}>
            <div className={styles.caseText}>
              <ReactMarkdown>{scenario.explanation}</ReactMarkdown>
            </div>
            {scenario.references?.length ? (
              <>
                <p className={styles.sectionHeading}>References</p>
                <ol className={styles.referenceList}>
                  {scenario.references.map((reference) => (
                    <li key={reference}>{reference}</li>
                  ))}
                </ol>
              </>
            ) : null}
          </div>
        </details>
      </div>
    </section>
  );
}
