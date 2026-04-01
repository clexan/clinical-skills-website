import { Link, useParams } from "react-router-dom";

import { StatusPage } from "@/components/layout/StatusPage";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { getChaptersForPart } from "@/content/chapter-index";
import { getPartBySlug } from "@/content/parts";
import { hasDistinctChapterNumber } from "@/lib/chapter-display";

import styles from "./PartPage.module.css";

export function PartPage() {
  const { partSlug = "" } = useParams();
  const part = getPartBySlug(partSlug);

  if (!part) {
    return (
      <StatusPage
        description="The requested part could not be found in this edition of the handbook."
        eyebrow="Part unavailable"
        title="This section could not be found"
      />
    );
  }

  const chapters = getChaptersForPart(part.id, { includeReviews: true });

  return (
    <section className={styles.page}>
      <header className={`${styles.header} surface`}>
        <Breadcrumb
          crumbs={[
            { label: "Contents", to: "/" },
            { label: part.title },
          ]}
        />
        <h1 className={styles.title}>
          Part {part.position} · {part.title}
        </h1>
        <p className={styles.description}>{part.description}</p>
      </header>

      <section aria-labelledby="part-contents-title" className={`${styles.chapterSection} surface`}>
        <div className={styles.sectionHeader}>
          <p className={styles.sectionEyebrow}>In this part</p>
          <h2 className={styles.sectionTitle} id="part-contents-title">
            Chapters and review
          </h2>
        </div>

        <div className={styles.list}>
          {chapters.map((chapter) => {
            const isReview = chapter.kind === "review";

            return (
              <Link
                className={`${styles.row}${isReview ? ` ${styles.reviewRow}` : ""}`}
                key={chapter.id}
                to={`/chapter/${chapter.slug}`}
              >
                <div className={styles.rowCopy}>
                  {hasDistinctChapterNumber(chapter) ? (
                    <p className={styles.number}>{chapter.number}</p>
                  ) : (
                    <p className={styles.reviewLabel}>Review</p>
                  )}
                  <div className={styles.rowBody}>
                    <h3 className={styles.rowTitle}>{chapter.title}</h3>
                    <p className={styles.rowDescription}>{chapter.description}</p>
                  </div>
                </div>
                <span aria-hidden="true" className={styles.rowArrow}>
                  &gt;
                </span>
              </Link>
            );
          })}
        </div>
      </section>
    </section>
  );
}
