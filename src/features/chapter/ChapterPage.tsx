import type { ComponentType } from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { HandbookLayout } from "@/app/layouts/HandbookLayout";
import { getChapterBySlug, loadChapterModule } from "@/content/chapter-index";
import { getPartById } from "@/content/parts";
import "@/styles/prose.css";

import styles from "./ChapterPage.module.css";

export function ChapterPage() {
  const { chapterSlug = "" } = useParams();
  const chapter = getChapterBySlug(chapterSlug);
  const [Content, setContent] = useState<ComponentType | null>(null);
  const [error, setError] = useState<string | null>(null);
  const showDevMetadata =
    import.meta.env.DEV && import.meta.env.VITE_SHOW_CHAPTER_METADATA === "true";

  useEffect(() => {
    if (!chapter) {
      return;
    }

    let isActive = true;

    setContent(null);
    setError(null);

    loadChapterModule(chapter.sourcePath)
      .then((module) => {
        if (isActive) {
          setContent(() => module.default);
        }
      })
      .catch((loadError) => {
        if (isActive) {
          setError(
            showDevMetadata && loadError instanceof Error
              ? loadError.message
              : "This chapter could not be loaded.",
          );
        }
      });

    return () => {
      isActive = false;
    };
  }, [chapter]);

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

  return (
    <HandbookLayout
      eyebrow={part ? `Part ${part.position} · ${part.title}` : chapter.partId}
      title={chapter.title}
      description={chapter.description}
      backTo={part ? `/part/${part.slug}` : "/"}
      backLabel={part ? `Back to ${part.title}` : "Back to handbook"}
    >
      {showDevMetadata ? (
        <div className={styles.status}>
          <span>Status: {chapter.status}</span>
          <span>Source: {chapter.sourcePath}</span>
        </div>
      ) : null}

      {error ? <p className={`${styles.message} ${styles.error}`}>{error}</p> : null}
      {!Content && !error ? <p className={styles.message}>Loading chapter…</p> : null}

      {Content ? (
        <article className="prose">
          <Content />
        </article>
      ) : null}
    </HandbookLayout>
  );
}
