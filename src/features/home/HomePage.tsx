import { useState } from "react";
import type { FormEvent } from "react";
import { Link } from "react-router-dom";

import { getChaptersForPart } from "@/content/chapter-index";
import { parts } from "@/content/parts";
import { openResourceSubtitle, siteTitle } from "@/content/site-framing";
import { emergencyEntries, type EREntry } from "@/features/reference/referenceData";
import { preloadSearchExperience } from "@/features/search/search-loader";
import { useSearchModal } from "@/features/search/SearchModalContext";

import styles from "./HomePage.module.css";

const FEATURED_SLUGS = ["acs", "anaphylaxis", "sepsis"] as const;

const chapterFamilies = parts.map((part) => ({
  ...part,
  chapterCount: getChaptersForPart(part.id).length,
}));

export function HomePage() {
  return (
    <section className={styles.page}>
      <HomeHero />
      <ChapterFamilies />
      <ReferencePreview />
    </section>
  );
}

function HomeHero() {
  const { openSearch } = useSearchModal();
  const [query, setQuery] = useState("");

  const warmSearch = () => {
    void preloadSearchExperience();
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    openSearch(query.trim());
    setQuery("");
  };

  const titleWords = siteTitle.split(" ");
  const accentWord = titleWords.length >= 2 ? titleWords[1] : null;
  const beforeAccent = titleWords[0];
  const afterAccent = titleWords.slice(2).join(" ");

  return (
    <header className={styles.hero}>
      <div className={styles.heroIntro}>
        <h1 className={styles.heroTitle}>
          <span>{beforeAccent}</span>
          {accentWord ? <span className={styles.heroTitleAccent}>{accentWord}</span> : null}
          {afterAccent ? <span>{afterAccent}</span> : null}
        </h1>
        <p className={styles.heroSubtitle}>{openResourceSubtitle}</p>
      </div>

      <form
        className={styles.searchForm}
        onMouseEnter={warmSearch}
        onSubmit={handleSubmit}
      >
        <label className={styles.visuallyHidden} htmlFor="home-search">
          Search chapters, emergencies, practicals, and final prep
        </label>
        <div className={styles.searchField}>
          <span aria-hidden="true" className={styles.searchIconWrap}>
            <svg
              className={styles.searchIcon}
              fill="none"
              focusable="false"
              viewBox="0 0 24 24"
            >
              <circle
                cx="11"
                cy="11"
                r="6.5"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path
                d="M16 16l4.5 4.5"
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="2"
              />
            </svg>
          </span>
          <input
            aria-label="Search content"
            autoComplete="off"
            className={styles.searchInput}
            id="home-search"
            onChange={(event) => setQuery(event.target.value)}
            onFocus={warmSearch}
            placeholder="Search chapters, emergencies, practicals, and final prep"
            spellCheck={false}
            type="search"
            value={query}
          />
          <button
            aria-label="Search"
            className={styles.searchSubmit}
            type="submit"
          >
            <svg
              className={styles.searchSubmitIcon}
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                d="M5 12h14m-6-6l6 6-6 6"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
              />
            </svg>
          </button>
        </div>
      </form>
    </header>
  );
}

function ChapterFamilies() {
  return (
    <section aria-labelledby="chapter-families-title" className={styles.chapterFamilies}>
      <div className={styles.sectionIntro}>
        <h2 className={styles.sectionTitle} id="chapter-families-title">
          Chapter families
        </h2>
        <p className={styles.sectionDescription}>Browse the handbook by topic family.</p>
      </div>

      <div className={styles.familyGrid}>
        {chapterFamilies.map((part) => (
          <Link className={`${styles.familyCard} surface`} key={part.id} to={`/part/${part.slug}`}>
            <div className={styles.familyHeader}>
              <p className={styles.familyEyebrow}>Part {part.position}</p>
              <p className={styles.familyMeta}>
                {part.chapterCount} {part.chapterCount === 1 ? "chapter" : "chapters"}
              </p>
            </div>
            <h3 className={styles.familyTitle}>{part.title}</h3>
            <p className={styles.familyDescription}>{part.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}

function ReferencePreview() {
  const featured = FEATURED_SLUGS.flatMap((slug) => {
    const match = emergencyEntries.find((entry) => entry.slug === slug);
    return match ? [match] : [];
  });

  return (
    <section className={styles.referencePreview}>
      <div className={styles.previewHeader}>
        <div className={styles.sectionIntro}>
          <h2 className={styles.sectionTitle}>Emergency Reference</h2>
          <p className={styles.sectionDescription}>
            Compact first-minutes guidance for selected high-risk emergencies.
          </p>
        </div>
        <Link className={styles.previewCta} to="/reference">
          Open emergency reference
        </Link>
      </div>

      <div className={styles.previewGrid}>
        {featured.map((entry) => (
          <ReferencePreviewCard entry={entry} key={entry.slug} />
        ))}
      </div>
    </section>
  );
}

function ReferencePreviewCard({ entry }: { entry: EREntry }) {
  return (
    <Link
      className={`${styles.previewCard} ${styles[`severity-${entry.severity}`]}`}
      to={`/reference#${entry.slug}`}
    >
      <div className={styles.previewCardHeader}>
        <h3 className={styles.previewCardTitle}>{entry.title}</h3>
        <span
          className={`${styles.badge} ${styles[`badge-${entry.severity}`]}`}
        >
          {entry.severity}
        </span>
      </div>

      <p className={styles.previewCardAlert}>{entry.subtitle}</p>
    </Link>
  );
}
