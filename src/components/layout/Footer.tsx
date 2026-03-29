import { Link } from "react-router-dom";

import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerInner}`}>
        <div className={styles.footerIdentity}>
          <span className={styles.footerTitle}>Clinical Skills Handbook</span>
          <span className={styles.footerInstitution}>
            Open-access clinical review platform aligned with the Faculty of Medicine, University
            of Rijeka
          </span>
        </div>

        <nav aria-label="Secondary navigation" className={styles.footerNav}>
          <Link className={styles.footerLink} to="/credits">
            Credits
          </Link>
          <Link className={styles.footerLink} to="/videos">
            Videos
          </Link>
          <Link className={styles.footerLink} to="/reference">
            Emergency Reference
          </Link>
          <Link className={styles.footerLink} to="/contents">
            Handbook
          </Link>
        </nav>

        <p className={styles.footerNote}>
          {new Date().getFullYear()} open digital edition for senior medical students, OSCE
          learners, and early-clinical review.
        </p>
      </div>
    </footer>
  );
}
