import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { getPartById } from "@/content/parts";
import { buildPartSequence } from "@/lib/handbook-sequence";
import type { PartId } from "@/types/content";

import styles from "./ChapterRail.module.css";

type ChapterRailProps = {
  currentPartId: PartId;
  currentSlug: string;
  headings: Array<{ id: string; label: string }>;
};

export function ChapterRail({ currentPartId, currentSlug, headings }: ChapterRailProps) {
  const [activeHeading, setActiveHeading] = useState<string | null>(null);
  const sequence = buildPartSequence(currentPartId);
  const part = getPartById(currentPartId);

  useEffect(() => {
    const hashHeading = decodeURIComponent(window.location.hash.slice(1));

    if (hashHeading && headings.some((heading) => heading.id === hashHeading)) {
      setActiveHeading(hashHeading);
      return;
    }

    setActiveHeading(headings[0]?.id ?? null);
  }, [headings]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    headings.forEach(({ id }) => {
      const element = document.getElementById(id);

      if (!element) {
        return;
      }

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveHeading(id);
          }
        },
        { rootMargin: "0px 0px -70% 0px", threshold: 0 },
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [headings]);

  return (
    <div className={styles.rail}>
      <nav aria-label="Part chapters">
        <div className={styles.partLabel}>{part?.title ?? currentPartId}</div>

        <ul className={styles.chapterList}>
          {sequence.map((item) => {
            const isReview = item.kind === "review";
            const isActive = item.slug === currentSlug;

            return (
              <li className={isReview ? styles.reviewItem : undefined} key={item.slug}>
                {isReview ? <div aria-hidden="true" className={styles.reviewDivider} /> : null}

                <Link
                  aria-current={isActive ? "page" : undefined}
                  className={`${styles.chapterLink}${isActive ? ` ${styles.active}` : ""}`}
                  to={`/chapter/${item.slug}`}
                >
                  {!isReview ? <span className={styles.chapterNumber}>{item.number}</span> : null}
                  <span className={styles.chapterTitle}>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {headings.length > 0 ? (
        <nav aria-label="In this chapter">
          <div aria-hidden="true" className={styles.sectionDivider} />
          <div className={styles.tocLabel}>In this chapter</div>
          <ul className={styles.tocList}>
            {headings.map((heading) => (
              <li key={heading.id}>
                <a
                  className={`${styles.tocLink}${activeHeading === heading.id ? ` ${styles.tocActive}` : ""}`}
                  href={`#${heading.id}`}
                >
                  {heading.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </div>
  );
}
