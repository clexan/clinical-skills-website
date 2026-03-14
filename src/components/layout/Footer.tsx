import { Link } from "react-router-dom";

import { chapterIndex } from "@/content/chapter-index";

import styles from "./Footer.module.css";

const firstChapter = chapterIndex.find((chapter) => chapter.kind === "chapter");
const startHerePath = firstChapter ? `/chapter/${firstChapter.slug}` : "/";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerInner}`}>
        <div className={styles.footerIdentity}>
          <span className={styles.footerTitle}>Clinical Skills Handbook</span>
          <span className={styles.footerInstitution}>Faculty of Medicine, University of Rijeka</span>
        </div>

        <nav aria-label="Secondary navigation" className={styles.footerNav}>
          <Link className={styles.footerLink} to="/credits">
            Credits
          </Link>
          <Link className={styles.footerLink} to="/reference">
            Reference
          </Link>
          <Link className={styles.footerLink} to={startHerePath}>
            Start here
          </Link>
        </nav>

        <p className={styles.footerNote}>Beta educational edition · {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}
