import type { ComponentType } from "react";
import { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { HandbookLayout } from "@/app/layouts/HandbookLayout";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { Badge } from "@/components/ui/Badge";
import buttonStyles from "@/components/ui/Button.module.css";
import {
  getAdjacentChapters,
  getChapterBySlug,
  getChapterLoader,
} from "@/content/chapter-index";
import { getPartById } from "@/content/parts";
import { getEditorialStatusColor, getEditorialStatusLabel } from "@/types/editorial";
import "@/styles/prose.css";

import styles from "./ChapterPage.module.css";

function slugifyHeading(text: string) {
  const slug = text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

  return slug || "section";
}

export function ChapterPage() {
  const { chapterSlug = "" } = useParams();
  const chapter = getChapterBySlug(chapterSlug);
  const [Content, setContent] = useState<ComponentType | null>(null);
  const [keyPoints, setKeyPoints] = useState<string[] | null>(null);
  const [headings, setHeadings] = useState<Array<{ id: string; text: string }>>([]);
  const [error, setError] = useState<string | null>(null);
  const proseRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!chapter) {
      return;
    }

    let isActive = true;

    setContent(null);
    setKeyPoints(null);
    setHeadings([]);
    setError(null);

    const chapterLoader = getChapterLoader(chapter.sourcePath);

    chapterLoader()
      .then((module) => {
        if (isActive) {
          const { default: MDXContent, keyPoints: moduleKeyPoints } = module;

          setContent(() => MDXContent);
          setKeyPoints(Array.isArray(moduleKeyPoints) ? moduleKeyPoints : null);
        }
      })
      .catch(() => {
        if (isActive) {
          setError("This chapter could not be loaded.");
        }
      });

    return () => {
      isActive = false;
    };
  }, [chapter]);

  useEffect(() => {
    if (!Content || !proseRef.current) {
      setHeadings([]);
      return;
    }

    const usedIds = new Set<string>();
    const nextHeadings = Array.from(proseRef.current.querySelectorAll("h2"))
      .map((heading, index) => {
        const text = heading.textContent?.trim();

        if (!text) {
          return null;
        }

        const baseId = slugifyHeading(text);
        let id = heading.id || baseId;

        if (usedIds.has(id)) {
          let suffix = index + 1;

          while (usedIds.has(`${baseId}-${suffix}`)) {
            suffix += 1;
          }

          id = `${baseId}-${suffix}`;
        }

        heading.id = id;
        usedIds.add(id);

        return { id, text };
      })
      .filter((heading): heading is { id: string; text: string } => heading !== null);

    setHeadings(nextHeadings.length >= 3 ? nextHeadings : []);
  }, [Content]);

  if (!chapter) {
    return (
      <section className="page-shell">
        <div className="page-shell__header">
          <p className="page-shell__eyebrow">Chapter unavailable</p>
          <h1>This chapter could not be found</h1>
        </div>
      </section>
    );
  }

  const part = getPartById(chapter.partId);
  const { previous, next } = getAdjacentChapters(chapter);
  const statusLabel = getEditorialStatusLabel(chapter.status);
  const hasKeyPoints = Boolean(keyPoints?.length);
  const hasToc = headings.length > 0;

  return (
    <HandbookLayout
      eyebrow={part ? `Part ${part.position} · ${part.title}` : chapter.partId}
      title=""
      backTo={part ? `/part/${part.slug}` : "/"}
      backLabel={part ? `Back to ${part.title}` : "Back to handbook"}
    >
      <Breadcrumb
        crumbs={
          part
            ? [
                { label: "Home", to: "/" },
                { label: part.title, to: `/part/${part.slug}` },
                { label: `${chapter.number} ${chapter.title}` },
              ]
            : [
                { label: "Home", to: "/" },
                { label: `${chapter.number} ${chapter.title}` },
              ]
        }
      />

      <header className={styles.titleBlock}>
        <p className={styles.number}>{chapter.number}</p>
        <h1 className={styles.title}>{chapter.title}</h1>
        <p className={styles.description}>{chapter.description}</p>
        <Badge color={getEditorialStatusColor(chapter.status)} label={statusLabel} />
      </header>

      {hasKeyPoints ? (
        <>
          <section
            className={`${styles.keyPoints} ${styles.keyPointsDesktop} surface`}
            aria-labelledby="chapter-key-points"
          >
            <h2 className={styles.keyPointsHeading} id="chapter-key-points">
              Key Points
            </h2>
            <ul className={styles.keyPointsList}>
              {keyPoints?.map((item) => (
                <li className={styles.keyPointsItem} key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <details className={styles.keyPointsDisclosure}>
            <summary className={`${styles.disclosureSummary} ${styles.keyPointsSummary}`}>Key Points</summary>
            <div className={styles.disclosureBody}>
              <ul className={styles.keyPointsList}>
                {keyPoints?.map((item) => (
                  <li className={styles.keyPointsItem} key={item}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </details>
        </>
      ) : null}

      {error ? <p className={`${styles.message} ${styles.error}`}>{error}</p> : null}
      {!Content && !error ? <p className={styles.message}>Loading chapter…</p> : null}

      {Content ? (
        <>
          {hasToc ? (
            <>
              <nav className={`${styles.toc} ${styles.tocDesktop}`} aria-label="In this chapter">
                <p className={styles.tocLabel}>In this chapter</p>
                <ul className={styles.tocList}>
                  {headings.map((heading) => (
                    <li key={heading.id}>
                      <a className={styles.tocLink} href={`#${heading.id}`}>
                        {heading.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              <details className={styles.tocDisclosure}>
                <summary className={`${styles.disclosureSummary} ${styles.tocSummary}`}>In this chapter</summary>
                <ul className={`${styles.tocList} ${styles.tocDisclosureList}`}>
                  {headings.map((heading) => (
                    <li key={heading.id}>
                      <a className={styles.tocLink} href={`#${heading.id}`}>
                        {heading.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </details>
            </>
          ) : null}

          <div className={`${styles.proseBody} prose`} ref={proseRef}>
            <Content />
          </div>
        </>
      ) : null}

      {previous || next ? (
        <nav className={styles.pagination} aria-label="Chapter navigation">
          {previous ? (
            <Link
              className={`${buttonStyles.button} ${buttonStyles.ghost} ${styles.paginationLink}`}
              to={`/chapter/${previous.slug}`}
            >
              <span className={styles.paginationLabel}>← Previous</span>
              <span className={styles.paginationTitle}>{previous.title}</span>
            </Link>
          ) : null}

          {next ? (
            <Link
              className={`${buttonStyles.button} ${buttonStyles.ghost} ${styles.paginationLink} ${styles.paginationLinkNext}`}
              to={`/chapter/${next.slug}`}
            >
              <span className={styles.paginationLabel}>Next →</span>
              <span className={styles.paginationTitle}>{next.title}</span>
            </Link>
          ) : null}
        </nav>
      ) : null}
    </HandbookLayout>
  );
}
