import type { PropsWithChildren } from "react";

import styles from "./HandbookLayout.module.css";

type HandbookLayoutProps = PropsWithChildren<{
  title: string;
  description?: string;
}>;

export function HandbookLayout({
  title,
  description,
  children,
}: HandbookLayoutProps) {
  return (
    <section className={styles.layout}>
      <div className={`surface ${styles.mainContent}`}>
        {title || description ? (
          <header className={styles.contentHeader}>
            {title ? <h1 className={styles.contentTitle}>{title}</h1> : null}
            {description ? <p className={styles.contentDescription}>{description}</p> : null}
          </header>
        ) : null}

        {children}
      </div>
    </section>
  );
}
