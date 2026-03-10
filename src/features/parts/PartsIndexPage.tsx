import { Link } from "react-router-dom";

import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { getChaptersForPart } from "@/content/chapter-index";
import { parts } from "@/content/parts";

import styles from "./PartsIndexPage.module.css";

export function PartsIndexPage() {
  return (
    <section className={styles.page}>
      <header className={`${styles.header} surface`}>
        <h1 className={styles.title}>All Parts</h1>
      </header>

      <div className={styles.grid}>
        {parts.map((part) => {
          const chapterCount = getChaptersForPart(part.id).length;

          return (
            <Link className={styles.cardLink} key={part.id} to={`/part/${part.slug}`}>
              <Card elevated>
                <div className={styles.cardContent}>
                  <Badge color="slate" label={`Part ${part.position}`} />
                  <h2 className={styles.cardTitle}>{part.title}</h2>
                  <p className={styles.cardDescription}>{part.description}</p>
                  <p className={styles.cardMeta}>
                    {chapterCount} {chapterCount === 1 ? "chapter" : "chapters"}
                  </p>
                </div>
              </Card>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
