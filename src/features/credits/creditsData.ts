export type Author = {
  name: string;
  credentials: string;
  role: string;
  departments: string[];
};

const DEPT_ANAESTHESIOLOGY_FACULTY =
  "Department of Anaesthesiology, Resuscitation, Emergency and Intensive Care Medicine — Faculty of Medicine, University of Rijeka";

const DEPT_ANAESTHESIOLOGY_KBC =
  "Department of Anaesthesiology, Intensive Care and Pain Medicine — Clinical Hospital Centre Rijeka";

const DEPT_INTERNAL_CARDIOLOGY =
  "Department of Internal Medicine / Clinic of Cardiovascular Diseases — Faculty of Medicine & KBC Rijeka";

const DEPT_EMERGENCY_KBC = "Emergency Department — Clinical Hospital Centre Rijeka";

export const AFFILIATIONS = [
  "Faculty of Medicine, University of Rijeka",
  "Clinical Hospital Centre Rijeka",
] as const;

export const AUTHORS: Author[] = [
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
