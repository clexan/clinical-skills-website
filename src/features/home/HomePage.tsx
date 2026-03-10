import { Link } from "react-router-dom";

import { chapterIndex } from "@/content/chapter-index";
import { parts } from "@/content/parts";

function getChapterCount(partId: string) {
  return chapterIndex.filter((chapter) => chapter.partId === partId).length;
}

export function HomePage() {
  return (
    <section className="page-shell">
      <div className="page-shell__header">
        <p className="page-shell__eyebrow">Clinical Skills Handbook</p>
        <h1>Core topics in acute and emergency care</h1>
        <p className="page-shell__description">
          Browse the handbook by part to review structured assessment, common emergencies, and
          concise review material.
        </p>
      </div>

      <div className="card-grid">
        {parts.map((part) => {
          const chapterCount = getChapterCount(part.id);

          return (
            <article className="card" key={part.id}>
              <p className="card__eyebrow">Part {part.position}</p>
              <h2>{part.title}</h2>
              <p>{part.description}</p>
              <p className="card__meta">
                {chapterCount} {chapterCount === 1 ? "section" : "sections"}
              </p>
              <div className="card__actions">
                <Link className="button-link" to={`/part/${part.slug}`}>
                  Open part
                </Link>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
