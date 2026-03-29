import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { getChapterBySlug } from "@/content/chapter-index";

import {
  emergencyEntries,
  matchesReferenceFilter,
  referenceFilterChips,
  type EREntry,
  type ReferenceFilterKey,
} from "./referenceData";
import styles from "./EmergencyReferencePage.module.css";

export function EmergencyReferencePage() {
  const location = useLocation();
  const [activeFilter, setActiveFilter] = useState<ReferenceFilterKey>("all");
  const [openSlug, setOpenSlug] = useState<string | null>(null);

  useEffect(() => {
    const hash = window.location.hash.slice(1);

    if (!hash || !emergencyEntries.some((entry) => entry.slug === hash)) {
      return;
    }

    setActiveFilter("all");
    setOpenSlug(hash);

    window.requestAnimationFrame(() => {
      document.getElementById(hash)?.scrollIntoView({ block: "start" });
    });
  }, [location.hash]);

  const filteredEntries = emergencyEntries.filter((entry) =>
    matchesReferenceFilter(entry, activeFilter),
  );

  const handleFilterChange = (filter: ReferenceFilterKey) => {
    setActiveFilter(filter);

    if (filter === "all") {
      return;
    }

    if (openSlug && !filteredEntries.some((entry) => entry.slug === openSlug && matchesReferenceFilter(entry, filter))) {
      setOpenSlug(null);
    }
  };

  return (
    <section className={styles.page}>
      <header className={`${styles.header} surface`}>
        <Breadcrumb
          crumbs={[
            { label: "Handbook", to: "/" },
            { label: "Emergency Reference" },
          ]}
        />
        <hr aria-hidden="true" className={styles.heroRule} />

        <div className={styles.titleRow}>
          <div>
            <p className={styles.modeBadge}>Reference</p>
            <h1 className={styles.title}>Emergency Treatment Reference</h1>
            <p className={styles.subtitle}>
              Compact first-minutes management algorithms for selected high-risk emergency
              presentations.
            </p>
          </div>
        </div>

        <p className={styles.intro}>
          This mode is deliberately narrow. Use it for rapid recognition, first 5 minutes,
          diagnostics and monitoring, adult treatment anchors, pitfalls, escalation, reassessment,
          and concise sources. Use the handbook for reasoning and the Final Prep layer for
          OSCE-style phrasing.
        </p>

        <div className={styles.scopeGrid}>
          <div className={styles.scopeCard}>
            <p className={styles.scopeLabel}>Coverage</p>
            <p className={styles.scopeValue}>
              {emergencyEntries.length} emergency algorithms with linked handbook chapter families
            </p>
          </div>

          <div className={styles.scopeCard}>
            <p className={styles.scopeLabel}>Use this for</p>
            <p className={styles.scopeValue}>
              Fast first practical priorities in the first minutes of deterioration, not narrative
              study reading
            </p>
          </div>
        </div>

        <p className={styles.safetyNote}>
          Educational reference only. This is not a substitute for clinical judgement, local
          protocols, or senior supervision. Doses are adult defaults; adjust for renal function,
          weight, and comorbidity. Practice may vary by region.
        </p>

        <div aria-label="Reference filters" className={styles.filters}>
          {referenceFilterChips.map((filter) => (
            <button
              aria-pressed={activeFilter === filter.key}
              className={`${styles.chip}${activeFilter === filter.key ? ` ${styles.chipActive}` : ""}`}
              key={filter.key}
              onClick={() => handleFilterChange(filter.key)}
              type="button"
            >
              {filter.label}
            </button>
          ))}
        </div>
      </header>

      <div className={styles.cardList}>
        {filteredEntries.length ? (
          filteredEntries.map((entry) => (
            <ReferenceAccordionCard
              entry={entry}
              isOpen={openSlug === entry.slug}
              key={entry.slug}
              onToggle={() => {
                setOpenSlug((current) => (current === entry.slug ? null : entry.slug));
              }}
            />
          ))
        ) : (
          <div className={`${styles.emptyState} surface`}>
            No entries match the current filter.
          </div>
        )}
      </div>
    </section>
  );
}

type ReferenceAccordionCardProps = {
  entry: EREntry;
  isOpen: boolean;
  onToggle: () => void;
};

function ReferenceAccordionCard({ entry, isOpen, onToggle }: ReferenceAccordionCardProps) {
  const chapter = getChapterBySlug(entry.chapterSlug);
  const panelId = `reference-panel-${entry.slug}`;

  return (
    <article
      className={`${styles.referenceCard} ${styles[`severity-${entry.severity}`]}${isOpen ? ` ${styles.referenceCardOpen}` : ""}`}
      id={entry.slug}
    >
      <button
        aria-controls={panelId}
        aria-expanded={isOpen}
        className={styles.referenceCardToggle}
        onClick={onToggle}
        type="button"
      >
        <div className={styles.referenceCardHeader}>
          <div className={styles.referenceCardHeaderMain}>
            <h2 className={styles.referenceCardTitle}>{entry.title}</h2>
            <p className={styles.referenceCardSub}>{entry.subtitle}</p>
            {chapter ? (
              <p className={styles.referenceCardMeta}>Handbook family: {chapter.title}</p>
            ) : null}
          </div>

          <span className={`${styles.badge} ${styles[`badge-${entry.severity}`]}`}>
            {entry.severity}
          </span>
        </div>

        <div className={styles.referenceCardSummary}>
          {entry.alert ? (
            <p className={styles.referenceCardAlert}>
              <strong>{entry.alert.label}:</strong> {entry.alert.body}
            </p>
          ) : null}

          <p className={styles.referenceCardAlert}>
            <strong>First step:</strong> {entry.firstStep}
          </p>
        </div>

        <span aria-hidden="true" className={styles.referenceCardHint}>
          {isOpen ? "Hide algorithm" : "Show algorithm"}
        </span>
      </button>

      {isOpen ? (
        <div className={styles.referenceCardBody} id={panelId}>

          {/* Recognition */}
          <section className={styles.section}>
            <h3 className={styles.sectionTitle}>Recognition</h3>
            <ul className={styles.contentList}>
              {entry.recognition.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          {/* First 5 Minutes + Adult Doses */}
          <div className={styles.bodyGrid}>
            <section className={styles.section}>
              <h3 className={styles.sectionTitle}>First 5 Minutes</h3>
              <ol className={styles.stepList}>
                {entry.first5Minutes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ol>
            </section>

            <section className={styles.section}>
              <h3 className={styles.sectionTitle}>Adult Treatment</h3>
              <ul className={styles.medicationList}>
                {entry.medications.map((medication) => (
                  <li key={`${medication.name}-${medication.dose}`}>
                    <strong>{medication.name}:</strong> {medication.dose}
                    {medication.note ? (
                      <span className={styles.medicationNote}> {medication.note}</span>
                    ) : null}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Diagnostics */}
          <section className={styles.section}>
            <h3 className={styles.sectionTitle}>Diagnostics &amp; Monitoring</h3>
            <ul className={styles.contentList}>
              {entry.diagnostics.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          {/* Clinical Priorities */}
          <section className={styles.section}>
            <h3 className={styles.sectionTitle}>Clinical Priorities</h3>
            <ul className={styles.contentList}>
              {entry.priorities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          {/* Contraindications + Escalation */}
          <div className={styles.bodyGrid}>
            <section className={styles.section}>
              <h3 className={styles.sectionTitle}>Contraindications &amp; Pitfalls</h3>
              <ul className={styles.contentList}>
                {entry.contraindications.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section className={styles.section}>
              <h3 className={styles.sectionTitle}>Escalation</h3>
              <ul className={styles.contentList}>
                {entry.escalation.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          </div>

          {/* Reassessment */}
          <section className={styles.section}>
            <h3 className={styles.sectionTitle}>Reassessment</h3>
            <ul className={styles.contentList}>
              {entry.reassessment.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          {/* Key Numbers */}
          {entry.keyNumbers ? (
            <section className={styles.section}>
              <h3 className={styles.sectionTitle}>Key Numbers</h3>
              <ul className={styles.keyNumbersList}>
                {entry.keyNumbers.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          ) : null}

          {/* Sources */}
          <section className={styles.section}>
            <h3 className={styles.sectionTitle}>Sources</h3>
            <ol className={styles.sourcesList}>
              {entry.sources.map((source) => (
                <li key={source.label}>
                  <strong>{source.label}.</strong> {source.citation}
                </li>
              ))}
            </ol>
          </section>

          {chapter ? (
            <div className={styles.cardFooter}>
              <Link className={styles.cardChapterLink} to={`/chapter/${chapter.slug}`}>
                Read handbook explanation
              </Link>
            </div>
          ) : null}
        </div>
      ) : null}
    </article>
  );
}
