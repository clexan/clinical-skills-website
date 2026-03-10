// search not yet implemented — placeholder only
import { Link } from "react-router-dom";

import styles from "./SearchPage.module.css";

export function SearchPage() {
  return (
    <section className={styles.page}>
      <Link className={styles.backLink} to="/">
        ← Home
      </Link>

      <div className={`${styles.content} surface`}>
        <h1 className={styles.title}>Search</h1>
        <p className={styles.description}>Search is not yet available.</p>
      </div>
    </section>
  );
}
