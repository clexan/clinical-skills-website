import React from 'react';
import { ClinicalFindings } from './quizData';
import styles from './ClinicalFindingsStrip.module.css';

interface Props {
  findings: ClinicalFindings;
}

const ROWS: Array<{ key: keyof ClinicalFindings; abbr: string; label: string }> = [
  { key: 'mechanism',    abbr: 'MECH', label: 'Mechanism'     },
  { key: 'airway',       abbr: 'A',    label: 'Airway'        },
  { key: 'breathing',    abbr: 'B',    label: 'Breathing'     },
  { key: 'circulation',  abbr: 'C',    label: 'Circulation'   },
  { key: 'fast',         abbr: 'FAST', label: 'FAST'          },
  { key: 'interventions',abbr: 'Rx',   label: 'Interventions' },
  { key: 'response',     abbr: 'RESP', label: 'Response'      },
];

export function ClinicalFindingsStrip({ findings }: Props) {
  return (
    <div className={styles.strip} role="region" aria-label="Clinical handover summary">
      <header className={styles.header}>
        <span className={styles.headerTitle}>Clinical Handover</span>
        <span className={styles.headerSub}>ABCDE · FAST · Response</span>
      </header>

      <div className={styles.rows}>
        {ROWS.map(({ key, abbr, label }) => {
          const finding = findings[key];
          if (!finding) return null;

          return (
            <div
              key={key}
              className={`${styles.row} ${styles[`row_${finding.status}`]}`}
            >
              <div className={styles.rowMeta}>
                <span className={styles.abbr}>{abbr}</span>
              </div>
              <div className={styles.rowValue}>
                <span
                  className={styles.dot}
                  aria-label={finding.status}
                />
                <span>{finding.value}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
