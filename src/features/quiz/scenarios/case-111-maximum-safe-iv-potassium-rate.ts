import { QuizScenario } from '../quizData';

export const case111: QuizScenario = {
  id: 'case-111',
  slug: 'maximum-safe-iv-potassium-rate',
  title: 'Maximum Rate of IV Potassium Infusion',
  category: 'Emergency',
  difficulty: 'Medium',
  vignette: `A 55-year-old woman with diabetic ketoacidosis has a potassium of 2.2 mEq/L with ECG changes including prominent U-waves and flattened T-waves. She has a peripheral IV in her left forearm and a right internal jugular central venous catheter. The ICU team wants to replete potassium urgently. The nurse asks about the maximum safe infusion rate.`,
  question: 'What is the maximum recommended rate of IV potassium infusion for this patient?',
  options: [
    {
      id: 'A',
      text: '10 mEq/hour via peripheral IV; up to 20 mEq/hour via central line with cardiac monitoring',
      isCorrect: true
    },
    {
      id: 'B',
      text: '40 mEq/hour via peripheral IV is safe if the patient is monitored',
      isCorrect: false
    },
    {
      id: 'C',
      text: '5 mEq/hour is the absolute maximum regardless of IV access',
      isCorrect: false
    },
    {
      id: 'D',
      text: 'There is no maximum rate if the potassium deficit is severe enough',
      isCorrect: false
    },
    {
      id: 'E',
      text: '20 mEq/hour is acceptable through a peripheral IV; central access offers no practical advantage',
      isCorrect: false
    }
  ],
  explanation: `
**Correct Answer: A - 10 mEq/hour via peripheral IV; up to 20 mEq/hour via central line with cardiac monitoring**

**Clinical Reasoning:**
IV potassium must be given carefully because two hazards matter: **local vein injury** and **cardiac toxicity**. Peripheral veins do not tolerate concentrated potassium well, so **10 mEq/hour** is the usual upper limit through a peripheral line. Through a **central line**, faster infusion such as **20 mEq/hour** can be used when clinically necessary, provided the patient is on **continuous cardiac monitoring**.

This patient has **severe symptomatic hypokalemia**, so central access is useful because it allows faster, safer repletion than a peripheral line.

**Why Others Are Wrong:**
* **B (40 mEq/hour peripheral):** Far too fast for peripheral administration and risks severe pain, phlebitis, and arrhythmia.
* **C (5 mEq/hour max always):** Too conservative for severe symptomatic hypokalemia and ignores the value of central access.
* **D (No maximum):** Dangerous. Potassium has well-established infusion limits because rapid administration can be lethal.
* **E (20 mEq/hour peripheral):** This exceeds standard peripheral tolerance and ignores why central venous access changes what is safely possible.
  `,
  references: [
    'Kim MJ, Valerio C, Knobloch GK. Potassium Disorders: Hypokalemia and Hyperkalemia. Am Fam Physician. 2023;107(1):59-70.',
    'Kraft MD, Btaiche IF, Sacks GS, Kudsk KA. Treatment of Electrolyte Disorders in Adult Patients in the Intensive Care Unit. Am J Health Syst Pharm. 2005;62(16):1663-1682.',
    'Paltiel O, Bhutta ZA, Bhutta SZ. Potassium Supplementation: A Review. J Pak Med Assoc. 2020;70(5):912-917.'
  ],
  skillTested: 'Choose a safe IV potassium infusion rate based on access type and severity',
  linkedChapter: 'electrolytes',
  verdictOneLineSummary:
    'Use the central line for urgent repletion: 10 mEq/hour peripherally, up to 20 mEq/hour centrally with telemetry.'
};
