import { getAuthorByName } from "@/features/credits/creditsData";

import styles from "./ChapterAuthorByline.module.css";

type ChapterAuthorBylineProps = {
  names: string[];
};

export function ChapterAuthorByline({ names }: ChapterAuthorBylineProps) {
  const authors = names.map((name) => getAuthorByName(name) ?? { name, credentials: "", role: "" });
  const label = authors.length === 1 ? "Author" : "Authors";

  return (
    <div aria-label="Chapter authors" className={styles.byline}>
      <div className={styles.label}>{label}</div>

      <div className={styles.list}>
        {authors.map((author) => (
          <div className={styles.entry} key={author.name}>
            <div className={styles.identity}>
              <span className={styles.name}>{author.name}</span>
              {author.credentials ? <span className={styles.credentials}>{author.credentials}</span> : null}
            </div>

            {author.role ? <div className={styles.role}>{author.role}</div> : null}
          </div>
        ))}
      </div>
    </div>
  );
}
