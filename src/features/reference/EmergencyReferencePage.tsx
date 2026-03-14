import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

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
        <hr aria-hidden="true" className={styles.heroRule} />

        <div className={styles.titleRow}>
          <div>
            <h1 className={styles.title}>Emergency Treatment Reference</h1>
            <p className={styles.subtitle}>
              First-line drugs, adult doses, and clinical priorities for high-risk emergency presentations.
            </p>
          </div>

          <Link className={styles.backLink} to="/">
            Back to contents
          </Link>
        </div>

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
          </div>

          <span className={`${styles.badge} ${styles[`badge-${entry.severity}`]}`}>
            {entry.severity.toUpperCase()}
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
          {isOpen ? "Hide details" : "Show details"}
        </span>
      </button>

      {isOpen ? (
        <div className={styles.referenceCardBody} id={panelId}>
          <div className={styles.bodyGrid}>
            <section className={styles.section}>
              <h3 className={styles.sectionTitle}>Clinical Priorities</h3>
              <p className={styles.step}>{entry.firstStep}</p>

              <ul className={styles.priorityList}>
                {entry.priorities.map((priority) => (
                  <li key={priority}>{priority}</li>
                ))}
              </ul>
            </section>

            <section className={styles.section}>
              <h3 className={styles.sectionTitle}>Adult Doses</h3>

              <ul className={styles.medicationList}>
                {entry.medications.map((medication) => (
                  <li key={`${medication.name}-${medication.dose}`}>
                    <strong>{medication.name}:</strong> {medication.dose}
                    {medication.note ? ` ${medication.note}` : ""}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {chapter ? (
            <div className={styles.cardFooter}>
              <Link className={styles.cardChapterLink} to={`/chapter/${chapter.slug}`}>
                Open handbook chapter
              </Link>
            </div>
          ) : null}
        </div>
      ) : null}
    </article>
  );
}
