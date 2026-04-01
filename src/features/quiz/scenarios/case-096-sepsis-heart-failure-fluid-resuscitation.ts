import { QuizScenario } from '../quizData';

export const case096: QuizScenario = {
  id: 'case-096',
  slug: 'sepsis-heart-failure-fluid-resuscitation-serial-boluses',
  title: 'Sepsis Resuscitation in a Patient with Heart Failure',
  category: 'Emergency',
  difficulty: 'Hard',
  vignette: `A 72-year-old man with a history of heart failure with reduced ejection fraction (EF 30%) and chronic kidney disease (baseline creatinine 2.1 mg/dL) presents with septic shock from cellulitis. Vital signs show blood pressure 82/54 mmHg, heart rate 102 bpm, respiratory rate 26/min, and oxygen saturation 91% on room air. Lactate is 4.6 mmol/L. He has mild bibasilar crackles at baseline. The emergency physician is concerned about giving 30 mL/kg of fluid given his cardiac history.`,
  question: 'What is the MOST appropriate approach to fluid resuscitation in this patient?',
  options: [
    {
      id: 'A',
      text: 'Administer 30 mL/kg crystalloid in smaller boluses (250-500 mL) with frequent reassessment for signs of fluid overload',
      isCorrect: true
    },
    {
      id: 'B',
      text: 'Withhold all IV fluids and start norepinephrine immediately given his heart failure',
      isCorrect: false
    },
    {
      id: 'C',
      text: 'Limit fluid to 10 mL/kg maximum due to reduced ejection fraction',
      isCorrect: false
    },
    {
      id: 'D',
      text: 'Administer furosemide 40 mg IV before any fluid resuscitation',
      isCorrect: false
    },
    {
      id: 'E',
      text: 'Use 5% albumin exclusively to minimize total volume administered',
      isCorrect: false
    }
  ],
  explanation: `
**Correct Answer: A - Administer 30 mL/kg crystalloid in smaller boluses (250-500 mL) with frequent reassessment for signs of fluid overload**

**Clinical Reasoning:**
Heart failure and chronic kidney disease make sepsis resuscitation more delicate, but they do **not** eliminate the need for initial fluid therapy. Current guidance still supports **30 mL/kg of crystalloid** for sepsis-induced hypoperfusion or septic shock, while adapting the **delivery strategy** in high-risk patients. The safest approach is to give the fluid in **smaller serial boluses** with frequent reassessment of respiratory status, perfusion, and dynamic measures of responsiveness.

The literature supporting sepsis bundles suggests that appropriate initial fluid resuscitation remains associated with improved outcomes even in patients with heart failure or renal dysfunction. The answer is not to skip fluids, but to give them thoughtfully and transition early to vasopressors if the patient stops responding or shows worsening overload.

**Why Others Are Wrong:**
* **B (Withhold all fluids):** Completely skipping fluid resuscitation in septic shock risks ongoing hypoperfusion and worse outcomes.
* **C (Cap at 10 mL/kg):** There is **no standard evidence-based 10 mL/kg ceiling** for septic shock in heart failure.
* **D (Give furosemide first):** Diuresis before correcting sepsis-induced hypoperfusion is inappropriate and may worsen shock.
* **E (Albumin exclusively):** Albumin is not the routine first-line initial fluid. Crystalloids remain standard, with albumin reserved for selected situations after large crystalloid requirements.
  `,
  references: [
    'Meyer NJ, Prescott HC. Sepsis and Septic Shock. N Engl J Med. 2024;391(22):2133-2146.',
    'Evans L, Rhodes A, Alhazzani W, et al. Surviving Sepsis Campaign: International Guidelines for Management of Sepsis and Septic Shock 2021. Crit Care Med. 2021;49(11):e1063-e1143.',
    'Jones TW, Smith SE, Van Tuyl JS, Newsome AS. Sepsis With Preexisting Heart Failure: Management of Confounding Clinical Features. J Intensive Care Med. 2021;36(9):989-1012.'
  ],
  skillTested: 'Adapt septic shock fluid resuscitation for heart failure without under-resuscitating',
  linkedChapter: 'sepsis',
  verdictOneLineSummary:
    'Heart failure changes how you give the 30 mL/kg, not whether you start it: use smaller boluses and reassess often.'
};
