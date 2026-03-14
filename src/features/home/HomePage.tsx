import { useState } from "react";
import { Link } from "react-router-dom";

import { Card } from "@/components/ui/Card";
import { getChaptersForPart } from "@/content/chapter-index";
import { parts } from "@/content/parts";
import { CreditsSection } from "@/features/credits/CreditsSection";
import { AFFILIATIONS } from "@/features/credits/creditsData";
import {
  emergencyEntries,
  referenceFilterChips,
  type EREntry,
} from "@/features/reference/referenceData";
import type { ChapterRecord, PartRecord } from "@/types/content";

import styles from "./HomePage.module.css";

const FEATURED_SLUGS = ["acs", "anaphylaxis", "sepsis"] as const;

type PartEntry = PartRecord & {
  chapterCount: number;
  firstChapter: ChapterRecord;
};

const homePartEntries = parts.flatMap<PartEntry>((part) => {
  const chapters = getChaptersForPart(part.id);
  const [firstChapter] = chapters;

  if (!firstChapter) {
    return [];
  }

  return [
    {
      ...part,
      chapterCount: chapters.length,
      firstChapter,
    },
  ];
});

const [featuredPart, ...gridParts] = homePartEntries;

export function HomePage() {
  return (
    <section className={styles.page}>
      <HomeHero />
      {featuredPart ? <FeaturedPartCard part={featuredPart} /> : null}

      <div className={styles.partsGrid}>
        {gridParts.map((part) => (
          <PartCard key={part.id} part={part} />
        ))}
      </div>

      <ReferencePreview />

      <CreditsSection includeAuthors={false} />
    </section>
  );
}

function HomeHero() {
  return (
    <header className={`${styles.hero} surface`}>
      <hr aria-hidden="true" className={styles.heroRule} />
      <h1 className={styles.heroTitle}>Clinical Skills Handbook</h1>
      <p className={styles.heroSubtitle}>
        Handbook for the Simulation of Clinical Skills course at the {AFFILIATIONS[0]}.
      </p>
    </header>
  );
}

function ReferencePreview() {
  const [active, setActive] = useState(0);
  const featured = FEATURED_SLUGS.flatMap((slug) => {
    const match = emergencyEntries.find((entry) => entry.slug === slug);
    return match ? [match] : [];
  });

  const activeEntry = featured[active];

  return (
    <section className={styles.referencePreview}>
      <div className={styles.previewHeader}>
        <div>
          <hr aria-hidden="true" className={styles.heroRule} />
          <h2 className={styles.previewTitle}>Emergency Treatment Reference</h2>
          <p className={styles.previewSubtitle}>
            First-line drugs · adult doses · clinical priorities
          </p>
        </div>

        <Link className={styles.previewCta} to="/reference">
          Open full reference -&gt;
        </Link>
      </div>

      <div aria-hidden="true" className={styles.chips}>
        {referenceFilterChips.map((filter) => (
          <span
            className={`${styles.chip}${filter.key === "all" ? ` ${styles.chipActive}` : ""}`}
            key={filter.key}
          >
            {filter.label}
          </span>
        ))}
      </div>

      <div className={styles.desktopGrid}>
        {featured.map((entry) => (
          <ReferencePreviewCard entry={entry} key={entry.slug} />
        ))}
      </div>

      {activeEntry ? (
        <div className={styles.mobileCarousel}>
          <div
            aria-atomic="true"
            aria-live="polite"
            className={styles.carouselViewport}
          >
            <ReferencePreviewCard entry={activeEntry} />
          </div>

          <div className={styles.carouselControls}>
            <button
              aria-label="Show previous featured reference"
              className={styles.carouselBtn}
              disabled={active === 0}
              onClick={() => {
                setActive((current) => Math.max(0, current - 1));
              }}
              type="button"
            >
              ←
            </button>

            <div
              aria-label="Featured emergency reference entries"
              className={styles.carouselDots}
              role="group"
            >
              {featured.map((entry, index) => (
                <button
                  aria-current={index === active ? "true" : undefined}
                  aria-label={`Show ${entry.title}`}
                  className={`${styles.dot}${index === active ? ` ${styles.dotActive}` : ""}`}
                  key={entry.slug}
                  onClick={() => {
                    setActive(index);
                  }}
                  type="button"
                />
              ))}
            </div>

            <button
              aria-label="Show next featured reference"
              className={styles.carouselBtn}
              disabled={active === featured.length - 1}
              onClick={() => {
                setActive((current) => Math.min(featured.length - 1, current + 1));
              }}
              type="button"
            >
              →
            </button>
          </div>
        </div>
      ) : null}
    </section>
  );
}

function ReferencePreviewCard({ entry }: { entry: EREntry }) {
  const previewLabel = entry.alert?.label ?? "First step";
  const previewBody = entry.alert?.body ?? entry.firstStep;

  return (
    <Link
      className={`${styles.previewCard} ${styles[`severity-${entry.severity}`]}`}
      to={`/reference#${entry.slug}`}
    >
      <div className={styles.previewCardHeader}>
        <span className={styles.previewCardTitle}>{entry.title}</span>
        <span className={`${styles.badge} ${styles[`badge-${entry.severity}`]}`}>
          {entry.severity.toUpperCase()}
        </span>
      </div>

      <p className={styles.previewCardSub}>{entry.subtitle}</p>
      <p className={styles.previewCardAlert}>
        <span className={styles.previewCardAlertCopy}>
          <strong>{previewLabel}:</strong> {previewBody}
        </span>
      </p>
    </Link>
  );
}

function FeaturedPartCard({ part }: { part: PartEntry }) {
  return (
    <Link className={styles.cardLink} to={`/chapter/${part.firstChapter.slug}`}>
      <Card className={`${styles.partCard} ${styles.partCardFeatured}`} elevated>
        <div className={styles.featuredLeft}>
          <p className={styles.startHere}>Start here</p>
          <h2 className={styles.partTitle}>{part.title}</h2>
          <p className={styles.partDesc}>{part.description}</p>
        </div>

        <div className={styles.featuredRight}>
          <span className={styles.featuredChapterCount}>
            {part.chapterCount} {part.chapterCount === 1 ? "chapter" : "chapters"}
          </span>
          <span className={styles.featuredFirstChapter}>
            Begin with {part.firstChapter.number}
            <br />
            <em>{part.firstChapter.title}</em>
          </span>
          <span aria-hidden="true" className={styles.featuredArrow}>
            -&gt;
          </span>
        </div>
      </Card>
    </Link>
  );
}

function PartCard({ part }: { part: PartEntry }) {
  return (
    <Link className={styles.cardLink} to={`/part/${part.slug}`}>
      <Card className={styles.partCard} elevated>
        <div className={styles.partCardBody}>
          <p className={styles.partEyebrow}>Part {part.position}</p>
          <h2 className={styles.partTitle}>{part.title}</h2>
          <p className={styles.partDesc}>{part.description}</p>
          <p className={styles.partMeta}>
            {part.chapterCount} {part.chapterCount === 1 ? "chapter" : "chapters"}
          </p>
        </div>
      </Card>
    </Link>
  );
}
