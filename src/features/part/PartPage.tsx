import { Link, useParams } from "react-router-dom";

import { getChaptersForPart } from "@/content/chapter-index";
import { getPartBySlug } from "@/content/parts";

export function PartPage() {
  const { partSlug = "" } = useParams();
  const part = getPartBySlug(partSlug);

  if (!part) {
    return (
      <section className="page-shell">
        <div className="page-shell__header">
          <p className="page-shell__eyebrow">Part not found</p>
          <h1>Unknown part slug</h1>
        </div>
      </section>
    );
  }

  const chapters = getChaptersForPart(part.id);

  return (
    <section className="page-shell">
      <div className="page-shell__header">
        <p className="page-shell__eyebrow">Part {part.position}</p>
        <h1>{part.title}</h1>
        <p className="page-shell__description">{part.description}</p>
      </div>

      <div className="list-panel">
        {chapters.map((chapter) => (
          <article className="list-row" key={chapter.id}>
            <div>
              <p className="list-row__eyebrow">{chapter.kind === "review" ? "Review" : "Chapter"}</p>
              <h2>{chapter.title}</h2>
              <p>{chapter.description}</p>
              <p className="list-row__meta">{chapter.sourcePath}</p>
            </div>

            <Link className="button-link" to={`/chapter/${chapter.slug}`}>
              Read chapter
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
