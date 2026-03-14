import { Link } from "react-router-dom";

import { Card } from "@/components/ui/Card";
import { getChaptersForPart } from "@/content/chapter-index";
import { CreditsSection } from "@/features/credits/CreditsSection";
import { AFFILIATIONS } from "@/features/credits/creditsData";
import { parts } from "@/content/parts";

import styles from "./HomePage.module.css";

export function HomePage() {
  return (
    <section className={styles.page}>
      <header className={`${styles.hero} surface`}>
        <hr aria-hidden="true" className={styles.heroRule} />
        <h1 className={styles.heroTitle}>Clinical Skills Handbook</h1>
        <p className={styles.heroSubtitle}>
          Handbook for the Simulation of Clinical Skills course at the {AFFILIATIONS[0]}.
        </p>
      </header>

      <div className={styles.grid}>
        {parts.map((part) => {
          const chapters = getChaptersForPart(part.id);
          const chapterCount = chapters.length;
          const isFeatured = part.position === 1;

          return (
            <Link
              className={`${styles.cardLink}${isFeatured ? ` ${styles.cardLinkFeatured}` : ""}`}
              key={part.id}
              to={`/part/${part.slug}`}
            >
              <Card
                className={`${styles.partCard}${isFeatured ? ` ${styles.partCardFeatured}` : ""}`}
                elevated
              >
                <div className={styles.cardContent}>
                  {isFeatured ? null : (
                    <p className={styles.partEyebrow}>Part {part.position}</p>
                  )}
                  {isFeatured ? (
                    <p className={styles.partCardFeaturedCue}>Start here</p>
                  ) : null}
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
