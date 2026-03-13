import { Link, useParams } from "react-router-dom";

import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { Badge } from "@/components/ui/Badge";
import { getChaptersForPart } from "@/content/chapter-index";
import { getPartBySlug } from "@/content/parts";
import { hasDistinctChapterNumber } from "@/lib/chapter-display";
import { getEditorialStatusColor, getEditorialStatusLabel } from "@/types/editorial";

import styles from "./PartPage.module.css";

export function PartPage() {
  const { partSlug = "" } = useParams();
  const part = getPartBySlug(partSlug);

  if (!part) {
    return (
      <section className="page-shell">
        <div className="page-shell__header">
          <p className="page-shell__eyebrow">Part unavailable</p>
          <h1>This section could not be found</h1>
        </div>
      </section>
    );
  }

  const chapters = getChaptersForPart(part.id, { includeReviews: true });

  return (
    <section className={styles.page}>
      <header className={`${styles.header} surface`}>
        <Breadcrumb
          crumbs={[
            { label: "Home", to: "/" },
            { label: part.title },
          ]}
        />
        <h1 className={styles.title}>
          Part {part.position} · {part.title}
        </h1>
        <p className={styles.description}>{part.description}</p>
      </header>

      <div className={`${styles.list} surface`}>
        {chapters.map((chapter) => (
          <Link className={styles.row} key={chapter.id} to={`/chapter/${chapter.slug}`}>
            <div className={styles.rowCopy}>
              {hasDistinctChapterNumber(chapter) ? <p className={styles.number}>{chapter.number}</p> : null}
              <div className={styles.rowBody}>
                <h2 className={styles.rowTitle}>{chapter.title}</h2>
                <p className={styles.rowDescription}>{chapter.description}</p>
              </div>
            </div>

            <Badge
              color={getEditorialStatusColor(chapter.status)}
              label={getEditorialStatusLabel(chapter.status)}
            />
          </Link>
        ))}
      </div>
    </section>
  );
}
