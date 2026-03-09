// src/pages/CreditsPage.tsx
import { Link } from "react-router-dom";
import { ArrowLeft, BookOpen, GraduationCap, Building2, Shield } from "lucide-react";

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
    <main className="min-h-screen bg-neutral-50 dark:bg-neutral-950 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">

        <Link
          to="/"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-teal-600 transition-colors hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Handbook
        </Link>

        {/* Header */}
        <header className="mb-8 rounded-2xl border border-neutral-200 bg-white p-8 text-center shadow-sm dark:border-neutral-800 dark:bg-neutral-900 sm:p-12">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-teal-100 dark:bg-teal-900/50">
            <BookOpen className="h-8 w-8 text-teal-600 dark:text-teal-400" />
          </div>
          <h1 className="mb-2 text-3xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-4xl">
            Kabinet Vještina
          </h1>
          <p className="text-lg font-medium text-neutral-600 dark:text-neutral-300">
            Clinical Skills Handbook
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-2 text-sm text-neutral-500 dark:text-neutral-400 sm:flex-row sm:gap-6">
            <span className="flex items-center gap-2">
              <GraduationCap className="h-4 w-4" />
              Faculty of Medicine, University of Rijeka
            </span>
            <span className="hidden sm:inline">·</span>
            <span className="flex items-center gap-2">
              <Building2 className="h-4 w-4" />
              Clinical Hospital Centre Rijeka
            </span>
          </div>
        </header>

        {/* Authors */}
        <section className="mb-8 overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
          <div className="border-b border-neutral-200 bg-neutral-50/50 p-6 dark:border-neutral-800 dark:bg-neutral-800/30 sm:p-8">
            <h2 className="text-xl font-bold text-neutral-900 dark:text-neutral-100">
              Authors &amp; Contributors
            </h2>
            <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
              Affiliations as listed in the published handbook. Each author holds dual appointments
              at the Faculty of Medicine and Clinical Hospital Centre Rijeka.
            </p>
          </div>

          <ul className="divide-y divide-neutral-100 dark:divide-neutral-800">
            {AUTHORS.map((author) => (
              <li
                key={author.name}
                className="px-6 py-4 sm:px-8"
              >
                <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:gap-3">
                  <span className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                    {author.name}
                  </span>
                  <span className="text-xs text-neutral-500 dark:text-neutral-400">
                    {author.credentials}
                  </span>
                </div>
                <p className="mt-0.5 text-xs text-neutral-600 dark:text-neutral-400">
                  {author.role}
                </p>
                <ul className="mt-1 flex flex-col gap-0.5">
                  {author.departments.map((dept) => (
                    <li
                      key={dept}
                      className="text-[11px] text-neutral-500 dark:text-neutral-500"
                    >
                      {dept}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </section>

        {/* Copyright */}
        <footer className="space-y-3 text-center">
          <div className="inline-flex items-center justify-center rounded-full bg-neutral-200 p-3 text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400">
            <Shield className="h-5 w-5" />
          </div>
          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
            This digital application reproduces the contents of the official Clinical Skills Handbook
            for internal academic use by medical students and staff at the University of Rijeka.
          </p>
          <p className="text-xs text-neutral-400 dark:text-neutral-500">
            &copy; {new Date().getFullYear()} Faculty of Medicine, University of Rijeka. All rights reserved.
          </p>
        </footer>

      </div>
    </main>
  );
}
