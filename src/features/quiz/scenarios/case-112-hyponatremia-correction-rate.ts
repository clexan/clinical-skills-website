import { QuizScenario } from '../quizData';

export const case112: QuizScenario = {
  id: 'case-112',
  slug: 'hyponatremia-correction-rate-osmotic-demyelination-risk',
  title: 'Hyponatremia Correction Rate and Osmotic Demyelination Risk',
  category: 'Emergency',
  difficulty: 'Hard',
  vignette: `A 58-year-old woman with a history of depression and hypothyroidism is brought to the ED by her family for confusion and lethargy that developed gradually over the past week. Medications include sertraline and levothyroxine. She has had poor oral intake and increased water consumption. Vital signs show blood pressure 128/78 mmHg, heart rate 82 bpm, and she is euvolemic on examination. Laboratory studies reveal sodium 112 mEq/L, potassium 3.8 mEq/L, serum osmolality 240 mOsm/kg, and urine osmolality 450 mOsm/kg. She is confused but has no seizures or focal neurologic deficits.`,
  question: 'What is the MOST appropriate target for sodium correction in the first 24 hours?',
  options: [
    {
      id: 'A',
      text: 'Increase sodium by no more than 8-10 mEq/L in the first 24 hours',
      isCorrect: true
    },
    {
      id: 'B',
      text: 'Rapidly correct to normal, around 140 mEq/L, within 24 hours to prevent brain edema',
      isCorrect: false
    },
    {
      id: 'C',
      text: 'Increase sodium by 1-2 mEq/L per hour until symptoms resolve, regardless of total correction',
      isCorrect: false
    },
    {
      id: 'D',
      text: 'No correction is needed because sodium 112 mEq/L is safe if the patient is not seizing',
      isCorrect: false
    },
    {
      id: 'E',
      text: 'Correct by about 20 mEq/L in the first 24 hours to quickly reach a safer range',
      isCorrect: false
    }
  ],
  explanation: `
**Correct Answer: A - Increase sodium by no more than 8-10 mEq/L in the first 24 hours**

**Clinical Reasoning:**
This patient has **chronic severe hyponatremia** because her symptoms developed gradually over about a week rather than suddenly over a few hours. In chronic hyponatremia, the brain adapts by extruding osmolytes to reduce cerebral edema. If sodium is corrected too rapidly, water shifts out of brain cells and the patient is at risk for **osmotic demyelination syndrome (ODS)**.

For that reason, the major management principle is **controlled correction**, generally **no more than 8-10 mEq/L in the first 24 hours**, with an even more cautious approach in especially high-risk patients. She does need treatment because her sodium is profoundly low and she has neurologic symptoms, but the goal is **careful partial correction**, not immediate normalization.

**Why Others Are Wrong:**
* **B (Normalize in 24 hours):** Rapid normalization of chronic hyponatremia is exactly what increases the risk of **ODS**.
* **C (1-2 mEq/L per hour regardless of total):** This ignores the total daily correction limit and can easily overshoot into dangerous overcorrection.
* **D (No correction needed):** A sodium of **112 mEq/L is dangerous**, and confusion/lethargy means she is already symptomatic.
* **E (Correct by 20 mEq/L in 24 hours):** This is far too rapid for chronic hyponatremia and substantially raises the risk of demyelination.
  `,
  references: [
    'Spasovski G, Vanholder R, Allolio B, et al. Clinical practice guideline on diagnosis and treatment of hyponatraemia. Eur J Endocrinol. 2014;170(3):G1-G47.',
    'Verbalis JG, Goldsmith SR, Greenberg A, et al. Diagnosis, Evaluation, and Treatment of Hyponatremia: Expert Panel Recommendations. Am J Med. 2013;126(10 Suppl 1):S1-S42.',
    'Hoorn EJ, Zietse R. Diagnosis and Treatment of Hyponatremia: Compilation of the Guidelines. J Am Soc Nephrol. 2017;28(5):1340-1349.'
  ],
  skillTested: 'Set a safe sodium correction goal in chronic symptomatic hyponatremia',
  linkedChapter: 'electrolytes',
  verdictOneLineSummary:
    'Chronic severe hyponatremia should be corrected enough to improve safety, but not so fast that you cause osmotic demyelination.'
};
