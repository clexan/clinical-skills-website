import { QuizScenario } from '../quizData';

export const case126: QuizScenario = {
  id: 'case-126',
  slug: 'hyponatremia-overcorrection-ddavp-and-d5w',
  title: 'Managing Hyponatremia Overcorrection',
  category: 'Emergency',
  difficulty: 'Hard',
  vignette: `A 54-year-old man with a history of liver cirrhosis and heavy alcohol use was admitted 24 hours ago for severe hyponatremia (Na 104 mEq/L). He received 3% hypertonic saline boluses initially for lethargy, which improved. His sodium was 108 mEq/L 12 hours ago. He has since had a large volume of dilute urine output. Repeat sodium now is 122 mEq/L (an 18 mEq/L rise in 24 hours). He is currently awake but has developed new-onset slurred speech and mild ataxia.`,
  question: 'What is the MOST appropriate next step to manage this overcorrection and reduce the risk of osmotic demyelination syndrome (ODS)?',
  options: [
    {
      id: 'A',
      text: 'Administer desmopressin (DDAVP) 2 mcg IV and start D5W infusion to re-lower serum sodium',
      isCorrect: true
    },
    {
      id: 'B',
      text: 'No action needed; the correction rate is appropriate for severe hyponatremia',
      isCorrect: false
    },
    {
      id: 'C',
      text: 'Continue 3% hypertonic saline at a slow rate to reach a target of 130 mEq/L',
      isCorrect: false
    },
    {
      id: 'D',
      text: 'Administer IV furosemide to promote free water excretion',
      isCorrect: false
    },
    {
      id: 'E',
      text: 'Stop all IV fluids and monitor sodium every 6 hours',
      isCorrect: false
    }
  ],
  explanation: `
**Correct Answer: A - Administer desmopressin (DDAVP) 2 mcg IV and start D5W infusion to re-lower serum sodium**

**Clinical Reasoning:**
This patient has **dangerous overcorrection of hyponatremia** (18 mEq/L in 24 hours), which exceeds the recommended maximum of 8-10 mEq/L in 24 hours. The risk of **osmotic demyelination syndrome (ODS)** is high, especially in patients with additional risk factors like cirrhosis, alcoholism, and malnutrition.

The large volume of dilute urine suggests "aquaresis" (spontaneous water diuresis) occurring as the underlying cause of hyponatremia (e.g., volume depletion) resolves, causing sodium to rise too rapidly. **Desmopressin (DDAVP)** is used to "clamp" the urine output by stopping water diuresis, while **D5W** is used to re-lower the serum sodium back toward the safe target range. Re-lowering the sodium within the first 24-48 hours of overcorrection can prevent or minimize ODS.

**Why Others are Wrong:**
* **B (Appropriate rate):** 18 mEq/L in 24 hours is nearly double the safe limit.
* **C (Continue 3% saline):** This would further worsen the overcorrection and increase ODS risk.
* **D (Furosemide):** This would cause additional electrolyte losses and likely raise sodium further.
* **E (Stop fluids):** "Stop and watch" is inadequate once overcorrection has already occurred; active re-lowering is indicated.
  `,
  references: [
    'Sterns RH, Nigwekar SU, Hix JK. The treatment of hyponatremia. Semin Nephrol. 2009;29(3):282-299.',
    'Verbalis JG, Goldsmith SR, Greenberg A, et al. Diagnosis, evaluation, and treatment of hyponatremia: expert panel recommendations. Am J Med. 2013;126(10 Suppl 1):S1-42.',
    'Perianayagam A, Sterns RH, Silver SM, et al. DDAVP is effective in preventing and reversing inadvertent overcorrection of hyponatremia. Clin J Am Soc Nephrol. 2008;3(2):331-336.'
  ]
};
