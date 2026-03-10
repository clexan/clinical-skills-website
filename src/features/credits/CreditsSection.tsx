import { Building2, GraduationCap, Shield } from "lucide-react";

import { AFFILIATIONS, AUTHORS } from "./creditsData";
import styles from "./CreditsSection.module.css";

export function CreditsSection() {
  return (
    <section aria-labelledby="credits-title" className={styles.section} id="credits">
      <header className={`surface ${styles.hero}`}>
        <p className={styles.eyebrow}>Institutional Credits</p>
        <h2 className={styles.title} id="credits-title">
          Kabinet Vještina
        </h2>
        <p className={styles.subtitle}>Clinical Skills Handbook</p>

        <div aria-label="Institutional affiliations" className={styles.affiliations}>
          <span className={styles.affiliation}>
            <GraduationCap aria-hidden="true" size={16} />
            {AFFILIATIONS[0]}
          </span>
          <span className={styles.affiliation}>
            <Building2 aria-hidden="true" size={16} />
            {AFFILIATIONS[1]}
          </span>
        </div>
      </header>

      <section aria-labelledby="credits-authors-title" className={`surface ${styles.panel}`}>
        <div className={styles.panelHeader}>
          <p className={styles.eyebrow}>Published Attribution</p>
          <h3 className={styles.panelTitle} id="credits-authors-title">
            Authors &amp; Contributors
          </h3>
          <p className={styles.panelDescription}>
            Affiliations as listed in the published handbook. Each author holds dual appointments
            at the Faculty of Medicine and Clinical Hospital Centre Rijeka.
          </p>
        </div>

        <ul className={styles.authors}>
          {AUTHORS.map((author) => (
            <li className={styles.author} key={author.name}>
              <div className={styles.identity}>
                <h4 className={styles.name}>{author.name}</h4>
                <p className={styles.credentials}>{author.credentials}</p>
              </div>

              <p className={styles.role}>{author.role}</p>

              <ul className={styles.departments}>
                {author.departments.map((department) => (
                  <li className={styles.department} key={department}>
                    {department}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </section>

      <footer className={`surface ${styles.footer}`}>
        <div aria-hidden="true" className={styles.footerMark}>
          <Shield size={20} />
        </div>
        <p className={styles.footerCopy}>
          This digital application reproduces the contents of the official Clinical Skills Handbook
          for internal academic use by medical students and staff at the University of Rijeka.
        </p>
        <p className={styles.footerLegal}>
          &copy; {new Date().getFullYear()} Faculty of Medicine, University of Rijeka. All rights reserved.
        </p>
      </footer>
    </section>
  );
}
