import { Link } from "react-router-dom";
import { ArrowLeft, GraduationCap, Building2, Shield } from "lucide-react";

const DEPT_ANAESTHESIOLOGY_FACULTY =
  "Department of Anaesthesiology, Resuscitation, Emergency and Intensive Care Medicine — Faculty of Medicine, University of Rijeka";

const DEPT_ANAESTHESIOLOGY_KBC =
  "Department of Anaesthesiology, Intensive Care and Pain Medicine — Clinical Hospital Centre Rijeka";

const DEPT_INTERNAL_CARDIOLOGY =
  "Department of Internal Medicine / Clinic of Cardiovascular Diseases — Faculty of Medicine & KBC Rijeka";

const DEPT_EMERGENCY_KBC = "Emergency Department — Clinical Hospital Centre Rijeka";

// ─── Author data ──────────────────────────────────────────────────────────────
// Role abbreviations from source:
//   "teaching assistant (nominal title)" = nominal TA
//   "teaching assistant" = full TA
//   EDRA / DESAIC = European specialist credentials

interface Author {
  name: string;
  credentials: string;
  role: string;
  departments: string[];
}

const AUTHORS: Author[] = [
  {
    name: "Gordana Bašić",
    credentials: "MD",
    role: "Teaching assistant (nominal title), specialist in cardiology",
    departments: [DEPT_INTERNAL_CARDIOLOGY],
  },
  {
    name: "Berislav Barbalić",
    credentials: "MD, EDRA",
    role: "Teaching assistant (nominal title), specialist in anaesthesiology, resuscitation, and intensive care medicine",
    departments: [DEPT_ANAESTHESIOLOGY_FACULTY, DEPT_ANAESTHESIOLOGY_KBC],
  },
  {
    name: "Nataša Mavrinac",
    credentials: "MD",
    role: "Teaching assistant (nominal title), specialist in emergency medicine",
    departments: [DEPT_ANAESTHESIOLOGY_FACULTY, DEPT_EMERGENCY_KBC],
  },
  {
    name: "Katarina Božić",
    credentials: "MD",
    role: "Teaching assistant (nominal title), resident in anaesthesiology, resuscitation, and intensive care medicine",
    departments: [DEPT_ANAESTHESIOLOGY_FACULTY, DEPT_ANAESTHESIOLOGY_KBC],
  },
  {
    name: "Matej Bura",
    credentials: "MD",
    role: "Teaching assistant (nominal title), specialist in anaesthesiology, resuscitation, and intensive care medicine",
    departments: [DEPT_ANAESTHESIOLOGY_FACULTY, DEPT_ANAESTHESIOLOGY_KBC],
  },
  {
    name: "Ivana Jurničić",
    credentials: "MD",
    role: "Teaching assistant (nominal title), specialist in anaesthesiology, resuscitation, and intensive care medicine",
    departments: [DEPT_ANAESTHESIOLOGY_FACULTY, DEPT_ANAESTHESIOLOGY_KBC],
  },
  {
    name: "Danijel Knežević",
    credentials: "MD",
    role: "Teaching assistant, specialist in anaesthesiology, resuscitation, and intensive care medicine",
    departments: [DEPT_ANAESTHESIOLOGY_FACULTY, DEPT_ANAESTHESIOLOGY_KBC],
  },
  {
    name: "Mate Lerga",
    credentials: "MD",
    role: "Teaching assistant (nominal title), specialist in emergency medicine",
    departments: [DEPT_ANAESTHESIOLOGY_FACULTY, DEPT_EMERGENCY_KBC],
  },
  {
    name: "Jan Maroević",
    credentials: "MD",
    role: "Teaching assistant (nominal title), resident in anaesthesiology, resuscitation, and intensive care medicine",
    departments: [DEPT_ANAESTHESIOLOGY_FACULTY],
  },
  {
    name: "Mate Matešić",
    credentials: "MD",
    role: "Specialist in emergency medicine",
    // Source lists no faculty affiliation for Matešić — KBC only implied
    departments: [DEPT_EMERGENCY_KBC],
  },
  {
    name: "Marko Milošević",
    credentials: "MD",
    role: "Teaching assistant (nominal title), specialist in anaesthesiology, resuscitation, and intensive care medicine",
    departments: [DEPT_ANAESTHESIOLOGY_FACULTY, DEPT_ANAESTHESIOLOGY_KBC],
  },
  {
    name: "Marinka Otočan",
    credentials: "MD",
    role: "Teaching assistant (nominal title), specialist in emergency medicine",
    departments: [DEPT_ANAESTHESIOLOGY_FACULTY, DEPT_EMERGENCY_KBC],
  },
  {
    name: "Ana Pičuljan",
    credentials: "MD",
    role: "Teaching assistant (nominal title), specialist in anaesthesiology, resuscitation, and intensive care medicine",
    departments: [DEPT_ANAESTHESIOLOGY_FACULTY, DEPT_ANAESTHESIOLOGY_KBC],
  },
  {
    name: "Ivan Ševeljević",
    credentials: "MD",
    role: "Teaching assistant (nominal title), resident in anaesthesiology, resuscitation, and intensive care medicine",
    departments: [DEPT_ANAESTHESIOLOGY_FACULTY, DEPT_ANAESTHESIOLOGY_KBC],
  },
  {
    name: "Erika Šuper-Petrinjac",
    credentials: "MD, DESAIC",
    role: "Teaching assistant, specialist in anaesthesiology, resuscitation, and intensive care medicine",
    departments: [DEPT_ANAESTHESIOLOGY_FACULTY, DEPT_ANAESTHESIOLOGY_KBC],
  },
  {
    name: "Petra Šverko Zinaić",
    credentials: "MD",
    role: "Teaching assistant (nominal title), specialist in emergency medicine",
    departments: [DEPT_ANAESTHESIOLOGY_FACULTY, DEPT_EMERGENCY_KBC],
  },
  {
    name: "Janja Tarčuković",
    credentials: "MD, PhD, DESAIC",
    role: "Assistant professor, specialist in anaesthesiology, resuscitation, and intensive care medicine",
    departments: [DEPT_ANAESTHESIOLOGY_FACULTY, DEPT_ANAESTHESIOLOGY_KBC],
  },
  {
    name: "Lara Valenčić Seršić",
    credentials: "MD",
    role: "Teaching assistant, resident in anaesthesiology, resuscitation, and intensive care medicine",
    departments: [DEPT_ANAESTHESIOLOGY_FACULTY, DEPT_ANAESTHESIOLOGY_KBC],
  },
  {
    name: "Ivan Vuksan",
    credentials: "MD",
    role: "Teaching assistant (nominal title), resident in anaesthesiology, resuscitation, and intensive care medicine",
    departments: [DEPT_ANAESTHESIOLOGY_FACULTY, DEPT_ANAESTHESIOLOGY_KBC],
  },
];

export function CreditsPage() {
  return (
    <section className="page-shell credits-page">
      <header className="page-shell__header credits-hero">
        <Link to="/" className="page-shell__back credits-hero__back">
          <ArrowLeft aria-hidden="true" size={16} />
          Back to Handbook
        </Link>

        <p className="page-shell__eyebrow">Institutional Credits</p>
        <h1>Kabinet Vještina</h1>
        <p className="credits-hero__subtitle">Clinical Skills Handbook</p>

        <div className="credits-hero__affiliations" aria-label="Institutional affiliations">
          <span className="credits-affiliation">
            <GraduationCap aria-hidden="true" size={16} />
            Faculty of Medicine, University of Rijeka
          </span>
          <span className="credits-affiliation">
            <Building2 aria-hidden="true" size={16} />
            Clinical Hospital Centre Rijeka
          </span>
        </div>
      </header>

      <section className="page-shell__body credits-panel">
        <div className="credits-panel__header">
          <p className="page-shell__eyebrow">Published Attribution</p>
          <h2>Authors &amp; Contributors</h2>
          <p className="page-shell__description">
            Affiliations as listed in the published handbook. Each author holds dual appointments
            at the Faculty of Medicine and Clinical Hospital Centre Rijeka.
          </p>
        </div>

        <ul className="credits-authors">
          {AUTHORS.map((author) => (
            <li key={author.name} className="credits-author">
              <div className="credits-author__identity">
                <h3>{author.name}</h3>
                <p className="credits-author__credentials">{author.credentials}</p>
              </div>

              <p className="credits-author__role">{author.role}</p>

              <ul className="credits-author__departments">
                {author.departments.map((dept) => (
                  <li key={dept}>{dept}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </section>

      <footer className="page-shell__body credits-footer">
        <div className="credits-footer__mark" aria-hidden="true">
          <Shield size={20} />
        </div>
        <p className="credits-footer__copy">
          This digital application reproduces the contents of the official Clinical Skills Handbook
          for internal academic use by medical students and staff at the University of Rijeka.
        </p>
        <p className="credits-footer__legal">
          &copy; {new Date().getFullYear()} Faculty of Medicine, University of Rijeka. All rights reserved.
        </p>
      </footer>
    </section>
  );
}
