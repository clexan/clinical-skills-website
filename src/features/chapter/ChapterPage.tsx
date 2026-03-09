import type { ComponentType } from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { HandbookLayout } from "@/app/layouts/HandbookLayout";
import { getChapterBySlug, loadChapterModule } from "@/content/chapter-index";
import { getPartById } from "@/content/parts";

export function ChapterPage() {
  const { chapterSlug = "" } = useParams();
  const chapter = getChapterBySlug(chapterSlug);
  const [Content, setContent] = useState<ComponentType | null>(null);
  const [error, setError] = useState<string | null>(null);

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
          setError(loadError instanceof Error ? loadError.message : "Failed to load chapter.");
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
          <p className="page-shell__eyebrow">Chapter not found</p>
          <h1>Unknown chapter slug</h1>
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
      <div className="chapter-status">
        <span>Status: {chapter.status}</span>
        <span>Source: {chapter.sourcePath}</span>
      </div>

      {error ? <p className="chapter-message chapter-message--error">{error}</p> : null}
      {!Content && !error ? <p className="chapter-message">Loading chapter content…</p> : null}

      {Content ? (
        <article className="prose">
          <Content />
        </article>
      ) : null}
    </HandbookLayout>
  );
}
