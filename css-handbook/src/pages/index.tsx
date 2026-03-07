import {useEffect, useState, type ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import styles from './index.module.css';

type StatCounter = {
  key: string;
  value: number;
  label: string;
};

const heroStats: StatCounter[] = [
  {key: 'pages', value: 108, label: 'Pages'},
  {key: 'parts', value: 7, label: 'Clinical Parts'},
  {key: 'ects', value: 6, label: 'ECTS Credits'},
];

const partCards = [
  {
    number: '01',
    title: 'Deteriorating Patient',
    topics: ['ABCDE & SAMPLE Assessment', 'ECG Interpretation Essentials', 'Intravascular & Intraosseous Access', 'Advanced Life Support Algorithm'],
  },
  {
    number: '02',
    title: 'Cardiac Emergencies',
    topics: ['Acute Coronary Syndrome', 'STEMI & NSTEMI on ECG', 'Cardiac Arrhythmias', 'Cardioversion & Pacing'],
  },
  {
    number: '03',
    title: 'Respiratory Emergencies',
    topics: ['Acute Respiratory Failure', 'Arterial Blood Gases', 'Anaphylaxis & Bronchospasm', 'Pulmonary Oedema'],
  },
  {
    number: '04',
    title: 'Neurological Deterioration',
    topics: ['Sudden Neurological Deterioration', 'Glasgow Coma Scale', 'Stroke & Traumatic Brain Injury', 'Seizures & Acute Poisoning'],
  },
  {
    number: '05',
    title: 'Sepsis',
    topics: ['Sepsis & Septic Shock', 'qSOFA & SOFA Scoring', 'First Hour Bundle', 'Common Pathogens & Sources'],
  },
  {
    number: '06',
    title: 'Blood, Fluids & Electrolytes',
    topics: ['Intravenous Fluid Selection', 'Electrolyte Disorders', 'Haemorrhage & Haemorrhagic Shock', 'Burns Assessment'],
  },
  {
    number: '07',
    title: 'Injuries',
    topics: ['Trauma Assessment & Management', 'Primary & Secondary Survey', 'Thoracic & Abdominal Trauma', 'Burns & Immobilisation'],
  },
];

const examDates = ['17 Feb 2026', '27 Apr 2026', '07 Jul 2026', '15 Sep 2026'];

export default function Home(): ReactNode {
  const [menuOpen, setMenuOpen] = useState(false);
  const [navScrolled, setNavScrolled] = useState(false);
  const [counts, setCounts] = useState<Record<string, number>>(() =>
    Object.fromEntries(heroStats.map((s) => [s.key, 0])),
  );

  useEffect(() => {
    const onScroll = () => setNavScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener('scroll', onScroll, {passive: true});
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) {
      document.body.style.overflow = '';
      return;
    }
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  useEffect(() => {
    const start = performance.now();
    const duration = 1100;
    let raf = 0;

    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const ease = 1 - (1 - p) ** 3;
      setCounts(
        Object.fromEntries(
          heroStats.map((stat) => [stat.key, Math.round(stat.value * ease)]),
        ),
      );
      if (p < 1) {
        raf = requestAnimationFrame(tick);
      }
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <Layout
      title="Kabinet Vjestina"
      noFooter
      description="Simulation of Clinical Skills digital handbook for medical students.">
      <div className={clsx(styles.mobileMenu, menuOpen && styles.open)}>
        <a href="#about" onClick={closeMenu}>
          About
        </a>
        <a href="#curriculum" onClick={closeMenu}>
          Curriculum
        </a>
        <a href="#kabinet" onClick={closeMenu}>
          The Lab
        </a>
        <Link to="/handbook" onClick={closeMenu} className={styles.mobileCta}>
          Open Handbook -&gt;
        </Link>
      </div>

      <nav className={clsx(styles.nav, navScrolled && styles.scrolled)}>
        <div className={styles.navLogo}>KV - Kabinet Vjestina</div>
        <ul className={styles.navLinks}>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#curriculum">Curriculum</a>
          </li>
          <li>
            <a href="#kabinet">The Lab</a>
          </li>
          <li>
            <Link to="/handbook" className={styles.cta}>
              Open Handbook -&gt;
            </Link>
          </li>
        </ul>
        <button
          type="button"
          className={clsx(styles.hamburger, menuOpen && styles.open)}
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((v) => !v)}>
          <span />
          <span />
          <span />
        </button>
      </nav>

      <section className={styles.hero}>
        <div className={styles.heroGrid} />
        <div className={styles.heroVignette} />
        <div className={styles.heroBar} />

        <div className={styles.ecgWrap}>
          <svg viewBox="0 0 960 180" fill="none" xmlns="http://www.w3.org/2000/svg">
            <polyline
              className={styles.ecgLine}
              points="0,90 55,90 70,90 82,18 98,162 114,90 160,90 178,68 196,112 214,90 270,90 290,90 302,20 318,160 334,90 390,90 408,70 426,110 444,90 500,90 520,90 532,18 548,162 564,90 620,90 638,68 656,112 674,90 730,90 750,90 762,20 778,160 794,90 850,90 868,70 886,110 904,90 960,90"
              stroke="#BC9C51"
              strokeWidth="1.5"
              strokeLinejoin="round"
              strokeLinecap="round"
            />
          </svg>
        </div>

        <div className={styles.heroContent}>
          <p className={styles.heroEyebrow}>University of Rijeka - Faculty of Medicine</p>
          <h1>
            Simulation of
            <br />
            <em>Clinical Skills</em>
          </h1>
          <p className={styles.heroSubtitle}>
            A comprehensive digital handbook for sixth-year medical students. From acute
            deterioration to trauma life support - the essential knowledge, accessible anywhere.
          </p>
          <div className={styles.heroActions}>
            <Link to="/handbook" className={styles.btnPrimary}>
              Open Handbook -&gt;
            </Link>
            <a href="#about" className={styles.btnGhost}>
              About the Course
            </a>
          </div>
        </div>

        <div className={styles.heroMeta}>
          {heroStats.map((stat) => (
            <div className={styles.metaItem} key={stat.key}>
              <div className={styles.metaValue}>{counts[stat.key] ?? 0}</div>
              <div className={styles.metaLabel}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className={styles.about}>
        <div className={styles.aboutGrid}>
          <div>
            <p className={styles.sectionLabel}>About the Course</p>
            <h2 className={styles.sectionTitle}>Where knowledge becomes the path from chaos to care</h2>
            <p className={styles.sectionBody}>
              Simulation of Clinical Skills is a mandatory sixth-year course bridging theoretical
              knowledge and real-world clinical practice. Through simulation scenarios,
              structured debriefs, and flipped-classroom learning, students develop the judgment
              needed to manage medical emergencies.
            </p>
            <div className={styles.statRow}>
              <div className={styles.stat}>
                <div className={styles.statN}>133h</div>
                <div className={styles.statD}>Total Hours</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statN}>125h</div>
                <div className={styles.statD}>Practicals</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statN}>10</div>
                <div className={styles.statD}>Units</div>
              </div>
            </div>
          </div>
          <div className={styles.aboutRight}>
            <div className={styles.pullQuote}>
              <p>
                "This book stands in the space between deterioration and decision - where
                knowledge becomes the path from chaos to care."
              </p>
              <cite>- Simulation of Clinical Skills: A Practical Guide</cite>
            </div>
            <p className={styles.sectionBody}>
              Led by Assist. Prof. Janja Tarcukovic and a multidisciplinary team from
              Anaesthesiology, Surgery, Urology, Paediatrics, and Emergency Medicine at Clinical
              Hospital Centre Rijeka.
            </p>
            <p className={styles.sectionBody}>
              Each session follows a consistent loop: theory overview to team simulation to
              personalised debrief. Students rotate roles, building clinical and communication
              competence under pressure.
            </p>
          </div>
        </div>
      </section>

      <hr className={styles.divider} />

      <section id="curriculum" className={styles.curriculum}>
        <div className={styles.partsHeader}>
          <div>
            <p className={styles.sectionLabel}>Course Content</p>
            <h2 className={styles.sectionTitle}>The Seven Clinical Parts</h2>
          </div>
          <p className={styles.partsHint}>Select any part to open its chapter</p>
        </div>

        <div className={styles.partsGrid}>
          {partCards.map((part) => (
            <Link to="/handbook" className={styles.partCard} key={part.number}>
              <div className={styles.partNumber}>
                Part <span>{part.number}</span>
              </div>
              <h3 className={styles.partTitle}>{part.title}</h3>
              <ul className={styles.partTopics}>
                {part.topics.map((topic) => (
                  <li key={topic}>{topic}</li>
                ))}
              </ul>
            </Link>
          ))}
        </div>
      </section>

      <hr className={styles.divider} />

      <section id="kabinet" className={styles.kabinet}>
        <div className={styles.kabinetInner}>
          <div>
            <p className={styles.sectionLabel}>The Skills Lab</p>
            <h2 className={styles.sectionTitle}>
              Kabinet <em>Vjestina</em>
            </h2>
            <p className={styles.sectionBody}>
              The Skills Cabinet at the Faculty of Medicine, University of Rijeka - a dedicated
              simulation environment where medical students practice clinical decision-making
              before encountering emergencies in real clinical settings.
            </p>
          </div>

          <div>
            <div className={styles.locationCard}>
              <h3>Skills Lab Simulation Centre</h3>
              <p className={styles.sub}>Primary Teaching Location</p>
              <p className={styles.locationLine}>
                Campus, Faculty of Medicine, University of Rijeka, Croatia
              </p>
              <p className={styles.locationLine}>
                Additional sessions at Clinical Hospital Centre Rijeka, location Susak - lecture
                halls P12 and P112
              </p>
              <p className={styles.locationLine}>kabinet.vjestina@gmail.com</p>
              <div className={styles.mapFallback}>
                <a
                  href="https://maps.google.com/?q=Faculty+of+Medicine+Rijeka+Croatia"
                  target="_blank"
                  rel="noreferrer">
                  View on Google Maps -&gt;
                </a>
              </div>
            </div>

            <div className={styles.examDates}>
              <p className={styles.examDatesLabel}>Final Exam Dates - 2025/2026</p>
              <div className={styles.examGrid}>
                {examDates.map((date, index) => (
                  <div className={styles.examItem} key={date}>
                    <span className={styles.examN}>{`${index + 1}`.padStart(2, '0')}</span>
                    <span className={styles.examDate}>{date}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div>
          <div className={styles.footerBrand}>Kabinet Vjestina</div>
          <div className={styles.footerSub}>Simulation of Clinical Skills - University of Rijeka</div>
        </div>
        <div className={styles.footerRight}>
          Academic Year 2025/2026
          <br />
          Faculty of Medicine, University of Rijeka
          <br />
          Coord. Assist. Prof. Janja Tarcukovic, MD, PhD, DESAIC
        </div>
      </footer>
    </Layout>
  );
}
