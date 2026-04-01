import { QuizScenario } from '../quizData';

export const case095: QuizScenario = {
  id: 'case-095',
  slug: 'fluid-refractory-septic-shock-when-to-start-norepinephrine',
  title: 'Recognizing Fluid-Refractory Septic Shock',
  category: 'Emergency',
  difficulty: 'Hard',
  vignette: `A 68-year-old man with septic shock from cholangitis has received 30 mL/kg (2,400 mL) of lactated Ringer's over 2.5 hours. Despite this, his blood pressure remains 76/42 mmHg with a diastolic pressure of 42 mmHg. Heart rate is 112 bpm. Lactate has increased from 4.2 to 5.1 mmol/L. He has developed bibasilar crackles on lung examination. Point-of-care ultrasound shows B-lines in multiple lung zones bilaterally and a plethoric IVC with minimal respiratory variation. A passive leg raise shows no increase in stroke volume.`,
  question: 'What is the MOST appropriate next step in hemodynamic management?',
  options: [
    {
      id: 'A',
      text: 'Start norepinephrine infusion via peripheral IV, targeting MAP >=65 mmHg',
      isCorrect: true
    },
    {
      id: 'B',
      text: 'Administer another 1,000 mL crystalloid bolus to achieve adequate preload',
      isCorrect: false
    },
    {
      id: 'C',
      text: 'Wait for central venous access before initiating any vasopressor',
      isCorrect: false
    },
    {
      id: 'D',
      text: 'Start dopamine as first-line vasopressor for its inotropic effects',
      isCorrect: false
    },
    {
      id: 'E',
      text: 'Administer phenylephrine for pure alpha-agonist vasoconstriction',
      isCorrect: false
    }
  ],
  explanation: `
**Correct Answer: A - Start norepinephrine infusion via peripheral IV, targeting MAP >=65 mmHg**

**Clinical Reasoning:**
This patient has **fluid-refractory septic shock**. He has already received the recommended initial fluid load and now shows several signs that more fluid is unlikely to help and may cause harm: **no increase in stroke volume with passive leg raise**, **plethoric IVC**, and **pulmonary edema with bilateral B-lines and crackles**. The appropriate next step is **norepinephrine**, which is the first-line vasopressor in septic shock.

Modern guidance supports starting norepinephrine **through a well-functioning peripheral IV** while central access is being arranged, rather than delaying vasopressor therapy. The target MAP is **at least 65 mmHg** in most patients.

**Why Others Are Wrong:**
* **B (More crystalloid):** This patient is now showing **evidence of volume overload and no fluid responsiveness**. More fluid would likely worsen pulmonary edema without improving perfusion.
* **C (Wait for central access):** Delaying vasopressors until central access is placed is outdated when the patient remains profoundly hypotensive. Peripheral norepinephrine is acceptable with proper monitoring.
* **D (Dopamine first-line):** Dopamine is **not first-line** because it causes more arrhythmias and is generally inferior to norepinephrine in septic shock.
* **E (Phenylephrine):** Phenylephrine is not the preferred first vasopressor in septic shock because pure alpha-agonism can reduce cardiac output in the wrong setting.
  `,
  references: [
    'Evans L, Rhodes A, Alhazzani W, et al. Surviving Sepsis Campaign: International Guidelines for Management of Sepsis and Septic Shock 2021. Crit Care Med. 2021;49(11):e1063-e1143.',
    'Meyer NJ, Prescott HC. Sepsis and Septic Shock. N Engl J Med. 2024;391(22):2133-2146.',
    'Monnet X, Lai C, Ospina-Tascon G, De Backer D. Evidence for a Personalized Early Start of Norepinephrine in Septic Shock. Crit Care. 2023;27(1):322.'
  ],
  skillTested: 'Recognize fluid-refractory septic shock and start norepinephrine promptly',
  linkedChapter: 'sepsis',
  verdictOneLineSummary:
    'Persistent hypotension after adequate fluids plus signs of overload means stop chasing fluid and start norepinephrine.'
};
