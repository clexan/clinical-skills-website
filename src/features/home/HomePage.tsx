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
        <p className="page-shell__eyebrow">v0 Application Spine</p>
        <h1>Handbook shell reading from the existing `src/docs` tree</h1>
        <p className="page-shell__description">
          The content stays in place. Parts and chapters are now described by explicit registries,
          and the pilot chapter loads through the same MDX pipeline the rest of the handbook will
          use.
        </p>
      </div>

      <div className="card-grid">
        {parts.map((part) => (
          <article className="card" key={part.id}>
            <p className="card__eyebrow">Part {part.position}</p>
            <h2>{part.title}</h2>
            <p>{part.description}</p>
            <p className="card__meta">{getChapterCount(part.id)} entries in registry</p>
            <div className="card__actions">
              <Link className="button-link" to={`/part/${part.slug}`}>
                Open part page
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
