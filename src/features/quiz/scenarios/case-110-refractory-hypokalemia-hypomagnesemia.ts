import { QuizScenario } from '../quizData';

export const case110: QuizScenario = {
  id: 'case-110',
  slug: 'refractory-hypokalemia-hypomagnesemia',
  title: 'Refractory Hypokalemia Due to Hypomagnesemia',
  category: 'Emergency',
  difficulty: 'Hard',
  vignette: `A 64-year-old woman with chronic alcohol use disorder is admitted for pneumonia. Initial labs show potassium 2.4 mEq/L and magnesium 1.1 mg/dL (normal 1.7-2.4). She receives 80 mEq of IV potassium chloride over 8 hours. Repeat potassium is 2.5 mEq/L. She receives another 60 mEq of IV potassium over the next 6 hours. Repeat potassium is 2.6 mEq/L. The intern is frustrated that the potassium "won't correct" despite aggressive repletion.`,
  question: 'What is the MOST likely reason for the refractory hypokalemia, and what is the appropriate next step?',
  options: [
    {
      id: 'A',
      text: 'Concurrent hypomagnesemia is causing ongoing renal potassium wasting; replete magnesium now',
      isCorrect: true
    },
    {
      id: 'B',
      text: 'The potassium dose is still inadequate; increase IV potassium to 200 mEq/day without changing anything else',
      isCorrect: false
    },
    {
      id: 'C',
      text: 'The most likely cause is occult vomiting; start a proton pump inhibitor',
      isCorrect: false
    },
    {
      id: 'D',
      text: 'Primary hyperaldosteronism is the most likely explanation; check an aldosterone-renin ratio first',
      isCorrect: false
    },
    {
      id: 'E',
      text: 'This pattern is most consistent with laboratory error; repeat the potassium from a different site',
      isCorrect: false
    }
  ],
  explanation: `
**Correct Answer: A - Concurrent hypomagnesemia is causing ongoing renal potassium wasting; replete magnesium now**

**Clinical Reasoning:**
This is classic **magnesium-dependent refractory hypokalemia**. When magnesium is severely low, the kidney continues to waste potassium, so repeated potassium administration produces little or no sustained rise in serum potassium. In patients with persistent hypokalemia despite adequate replacement, **always check and correct magnesium**.

This patient also has a strong cause for magnesium depletion: **chronic alcohol use disorder**.

**Why Others Are Wrong:**
* **B (Just give more potassium):** More potassium alone is often ineffective until magnesium is corrected and may increase infusion risk.
* **C (Occult vomiting):** There is no history here pointing to GI losses, and it does not explain the specific pattern as well as the documented magnesium deficiency.
* **D (Hyperaldosteronism):** Possible in some patients with unexplained hypokalemia, but this patient already has a clear reason for refractory repletion: **magnesium 1.1 mg/dL**.
* **E (Lab error):** Repeatedly low potassium values after substantial repletion are far more consistent with persistent wasting than a random analytic problem.
  `,
  references: [
    'Kim MJ, Valerio C, Knobloch GK. Potassium Disorders: Hypokalemia and Hyperkalemia. Am Fam Physician. 2023;107(1):59-70.',
    'Huang CL, Kuo E. Mechanism of Hypokalemia in Magnesium Deficiency. J Am Soc Nephrol. 2007;18(10):2649-2652.',
    'Gragossian A, Bashir K, Friede R. Hypomagnesemia. In: StatPearls. StatPearls Publishing; 2023.'
  ],
  skillTested: 'Recognize and correct hypomagnesemia as the cause of refractory hypokalemia',
  linkedChapter: 'electrolytes',
  verdictOneLineSummary:
    'If potassium refuses to rise, especially in alcohol use disorder, think magnesium before ordering even more potassium.'
};
