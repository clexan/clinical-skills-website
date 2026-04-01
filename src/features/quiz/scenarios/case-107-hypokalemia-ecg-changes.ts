import { QuizScenario } from '../quizData';

export const case107: QuizScenario = {
  id: 'case-107',
  slug: 'hypokalemia-ecg-changes-u-waves',
  title: 'ECG Manifestations of Hypokalemia',
  category: 'Emergency',
  difficulty: 'Medium',
  vignette: `A 72-year-old woman with heart failure and hypertension presents with generalized weakness and muscle cramps for 2 days. Her medications include furosemide 40 mg twice daily, lisinopril, and metoprolol. She admits to poor oral intake due to a recent viral illness. Vital signs show blood pressure 138/82 mmHg, heart rate 88 bpm, and respiratory rate 16/min. Physical examination reveals diminished deep tendon reflexes. An ECG is obtained and shows flattened T-waves, prominent U-waves following the T-waves, ST-segment depression, and an apparently prolonged QT interval. Laboratory studies are pending.`,
  question: 'Based on the ECG findings, which electrolyte abnormality is MOST likely, and what serum value is most consistent with it?',
  options: [
    {
      id: 'A',
      text: 'Hypokalemia; serum potassium likely about 2.6 mEq/L',
      isCorrect: true
    },
    {
      id: 'B',
      text: 'Hyperkalemia; serum potassium likely 6.5 mEq/L',
      isCorrect: false
    },
    {
      id: 'C',
      text: 'Hypocalcemia; serum calcium likely 7.0 mg/dL',
      isCorrect: false
    },
    {
      id: 'D',
      text: 'Hypomagnesemia alone; serum magnesium likely 1.1 mg/dL with no potassium abnormality',
      isCorrect: false
    },
    {
      id: 'E',
      text: 'Hypernatremia; serum sodium likely 155 mEq/L',
      isCorrect: false
    }
  ],
  explanation: `
**Correct Answer: A - Hypokalemia; serum potassium likely about 2.6 mEq/L**

**Clinical Reasoning:**
The key ECG clue is the **prominent U-wave**, especially when accompanied by **flattened T-waves** and **ST-segment depression**. That constellation is classic for **hypokalemia**, typically when the potassium has fallen into the **moderate range** below about 3.0 mEq/L. This patient's history also fits: **loop diuretic use**, poor oral intake, weakness, cramps, and decreased reflexes all point toward potassium depletion.

The apparently prolonged QT in hypokalemia is often really a prolonged **QU interval**, because the U-wave becomes so prominent that it blends into the repolarization complex.

**Why Others Are Wrong:**
* **B (Hyperkalemia):** Hyperkalemia produces **peaked T-waves**, PR prolongation, and QRS widening, not flattened T-waves with U-waves.
* **C (Hypocalcemia):** Hypocalcemia can prolong the QT interval, but it does **not** produce the classic U-wave pattern seen here.
* **D (Isolated hypomagnesemia):** Hypomagnesemia may coexist and may worsen potassium repletion, but the described ECG findings are more typical of **hypokalemia**.
* **E (Hypernatremia):** Sodium disorders do not produce this characteristic ECG pattern.
  `,
  references: [
    'Kim MJ, Valerio C, Knobloch GK. Potassium Disorders: Hypokalemia and Hyperkalemia. Am Fam Physician. 2023;107(1):59-70.',
    'Diercks DB, Shumaik GM, Harrigan RA, et al. Electrocardiographic Manifestations: Electrolyte Abnormalities. J Emerg Med. 2004;27(2):153-160.',
    "Mount DB. Disorders of Potassium Balance. In: Brenner and Rector's The Kidney. 11th ed. Elsevier; 2020."
  ],
  skillTested: 'Recognize the classic ECG pattern of hypokalemia and correlate it with potassium severity',
  linkedChapter: 'electrolytes',
  verdictOneLineSummary:
    'Flattened T-waves plus prominent U-waves in a patient on loop diuretics should make you think moderate hypokalemia first.'
};
