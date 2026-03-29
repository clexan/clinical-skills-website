import type { ElementType } from "react";
import { Link } from "react-router-dom";
import { Building2, GraduationCap, Shield } from "lucide-react";

import { AFFILIATIONS, AUTHORS } from "./creditsData";
import styles from "./CreditsSection.module.css";

type CreditsSectionProps = {
  includeAuthors?: boolean;
  titleTag?: ElementType;
  authorsTitleTag?: ElementType;
};

export function CreditsSection({
  includeAuthors = true,
  titleTag: TitleTag = "h2",
  authorsTitleTag: AuthorsTitleTag = "h3",
}: CreditsSectionProps) {
  if (!includeAuthors) {
    return (
      <section aria-labelledby="credits-title" className={styles.section} id="credits">
        <div className={`surface ${styles.summaryBlock}`}>
          <p className={`${styles.eyebrow} ${styles.summaryEyebrow}`}>Institutional Credits</p>
          <TitleTag className={styles.title} id="credits-title">
            Clinical Skills Handbook
          </TitleTag>
          <p className={styles.subtitle}>Kabinet Vještina</p>

          <div aria-label="Institutional affiliations" className={styles.summaryAffiliations}>
            <p className={styles.summaryAffiliation}>
              <GraduationCap aria-hidden="true" size={16} />
              {AFFILIATIONS[0]}
            </p>
            <p className={styles.summaryAffiliation}>
              <Building2 aria-hidden="true" size={16} />
              {AFFILIATIONS[1]}
            </p>
          </div>

          <p className={styles.summaryLegal}>
            Open-access educational edition aligned with the University of Rijeka clinical skills
            curriculum.
          </p>
          <Link className={styles.summaryLink} to="/credits">
            View authors, affiliations, and publication context
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section aria-labelledby="credits-title" className={styles.section} id="credits">
      <header className={`surface ${styles.hero}`}>
        <p className={styles.eyebrow}>Institutional Credits</p>
        <TitleTag className={styles.title} id="credits-title">
          Clinical Skills Handbook
        </TitleTag>
        <p className={styles.subtitle}>Kabinet Vještina</p>

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
          <AuthorsTitleTag className={styles.panelTitle} id="credits-authors-title">
            Authors &amp; Contributors
          </AuthorsTitleTag>
          <p className={styles.panelDescription}>
            Attribution carried forward from the published handbook and teaching materials that this
            open digital edition is derived from. Each author holds dual appointments at the
            Faculty of Medicine and Clinical Hospital Centre Rijeka.
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
          This digital edition is derived from the Clinical Skills Handbook used for teaching and
          simulation at the University of Rijeka Faculty of Medicine, and is presented here as an
          open-access clinical review and emergency-reference resource.
        </p>
        <p className={styles.footerLegal}>
          University of Rijeka aligned educational resource · updated digital edition {new Date().getFullYear()}
        </p>
      </footer>
    </section>
  );
}
