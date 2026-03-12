import { Link } from "react-router-dom";

import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { getChaptersForPart } from "@/content/chapter-index";
import { CreditsSection } from "@/features/credits/CreditsSection";
import { parts } from "@/content/parts";

import styles from "./HomePage.module.css";

export function HomePage() {
  return (
    <section className={styles.page}>
      <header className={`${styles.hero} surface`}>
        <h1 className={styles.title}>Clinical Skills Handbook</h1>
        <p className={styles.description}>
          A structured reference for simulation course students at the University of Rijeka
          Faculty of Medicine
        </p>
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

      <CreditsSection includeAuthors={false} />
    </section>
  );
}
