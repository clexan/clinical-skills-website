import type { PropsWithChildren } from "react";
import { Link } from "react-router-dom";

import styles from "./HandbookLayout.module.css";

type HandbookLayoutProps = PropsWithChildren<{
  eyebrow: string;
  title: string;
  description?: string;
  backTo?: string;
  backLabel?: string;
}>;

export function HandbookLayout({
  eyebrow,
  title,
  description,
  backTo = "/",
  backLabel = "Back to handbook",
  children,
}: HandbookLayoutProps) {
  return (
    <section className={styles.layout}>
      <div className={`surface ${styles.mainContent}`}>
        <header className={styles.contentHeader}>
          <h1 className={styles.contentTitle}>{title}</h1>
          {description ? <p className={styles.contentDescription}>{description}</p> : null}
        </header>

        {children}
      </div>

      <aside className={styles.sidebar}>
        <Link className={styles.backLink} to={backTo}>
          {backLabel}
        </Link>
        <p className={styles.eyebrow}>{eyebrow}</p>
      </aside>
    </section>
  );
}
