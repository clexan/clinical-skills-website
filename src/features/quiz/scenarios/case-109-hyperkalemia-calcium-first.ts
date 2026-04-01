import { QuizScenario } from '../quizData';

export const case109: QuizScenario = {
  id: 'case-109',
  slug: 'hyperkalemia-calcium-first-ecg-changes',
  title: 'Hyperkalemia With ECG Changes: Calcium First',
  category: 'Emergency',
  difficulty: 'Hard',
  vignette: `A 68-year-old man with end-stage renal disease on hemodialysis, who missed his last two sessions, presents with generalized weakness. Vital signs show blood pressure 162/94 mmHg, heart rate 52 bpm, and respiratory rate 18/min. ECG reveals peaked T-waves, a prolonged PR interval of 280 ms, and a widened QRS complex of 140 ms. Point-of-care potassium returns at 7.8 mEq/L. The nurse asks which medication to draw up first.`,
  question: 'What is the MOST appropriate FIRST medication to administer?',
  options: [
    {
      id: 'A',
      text: 'Calcium gluconate 1-2 g IV over 2-3 minutes',
      isCorrect: true
    },
    {
      id: 'B',
      text: 'Regular insulin 10 units IV with dextrose 25 g IV',
      isCorrect: false
    },
    {
      id: 'C',
      text: 'Sodium bicarbonate 50 mEq IV push',
      isCorrect: false
    },
    {
      id: 'D',
      text: 'Albuterol 10-20 mg nebulized',
      isCorrect: false
    },
    {
      id: 'E',
      text: 'Sodium polystyrene sulfonate 30 g orally',
      isCorrect: false
    }
  ],
  explanation: `
**Correct Answer: A - Calcium gluconate 1-2 g IV over 2-3 minutes**

**Clinical Reasoning:**
This patient has **severe hyperkalemia with ECG toxicity**. The first priority is **cardiac membrane stabilization**, which is achieved with **IV calcium**. Calcium does **not** lower the serum potassium, but it works within minutes to reduce the immediate risk of malignant dysrhythmia while other potassium-lowering therapies are prepared.

After calcium, the next steps are to **shift potassium intracellularly** with insulin/dextrose and other temporizing measures, and then **remove potassium** definitively, often with dialysis in ESRD.

**Why Others Are Wrong:**
* **B (Insulin/dextrose first):** Important, but it takes longer to work and does not immediately stabilize the myocardium.
* **C (Bicarbonate first):** Bicarbonate has a more limited and less reliable role unless significant metabolic acidosis is also present.
* **D (Albuterol first):** Nebulized beta-agonists help shift potassium but do not provide immediate membrane stabilization.
* **E (Kayexalate first):** GI potassium binders are too slow for acute ECG-toxic hyperkalemia.
  `,
  references: [
    'Kim MJ, Valerio C, Knobloch GK. Potassium Disorders: Hypokalemia and Hyperkalemia. Am Fam Physician. 2023;107(1):59-70.',
    'Palmer BF, Carrero JJ, Clegg DJ, et al. Clinical Management of Hyperkalemia. Mayo Clin Proc. 2021;96(3):744-762.',
    'Panchal AR, Bartos JA, Cabanas JG, et al. Part 3: Adult Basic and Advanced Life Support: 2020 AHA Guidelines for CPR and ECC. Circulation. 2020;142(16_suppl_2):S366-S468.'
  ],
  skillTested: 'Prioritize IV calcium before temporizing potassium-shift therapies in ECG-toxic hyperkalemia',
  linkedChapter: 'electrolytes',
  verdictOneLineSummary:
    'In hyperkalemia with ECG changes, calcium comes before insulin, albuterol, bicarbonate, or binders.'
};
