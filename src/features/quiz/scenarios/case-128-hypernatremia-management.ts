import { QuizScenario } from '../quizData';

export const case128: QuizScenario = {
  id: 'case-128',
  slug: 'hypernatremia-free-water-deficit-correction-rate',
  title: 'Managing Severe Hypernatremia',
  category: 'Emergency',
  difficulty: 'Hard',
  vignette: `An 84-year-old woman is brought to the ED from her assisted living facility for altered mental status. Staff reports she has had decreased oral intake for 5 days. Her vital signs are: heart rate 108 bpm, blood pressure 102/68 mmHg. She weighs 55 kg. Laboratory results show: sodium 162 mEq/L, BUN 58 mg/dL, and creatinine 1.6 mg/dL (baseline 0.9). On examination, she is confused and lethargic, has dry mucous membranes, and decreased skin turgor with tenting.`,
  question: 'After initial stabilization with isotonic saline for hemodynamic support, what is the MOST appropriate fluid and rate for correcting this patient\'s hypernatremia?',
  options: [
    {
      id: 'A',
      text: '5% Dextrose in Water (D5W) or 0.45% NS, targeting sodium reduction of 10-12 mEq/L per 24 hours with frequent monitoring',
      isCorrect: true
    },
    {
      id: 'B',
      text: '0.9% Normal Saline at 250 mL/hour until sodium normalizes',
      isCorrect: false
    },
    {
      id: 'C',
      text: '5% Dextrose in Water (D5W) at maximum rate to correct sodium within 24 hours',
      isCorrect: false
    },
    {
      id: 'D',
      text: '3% Hypertonic Saline at low rate to prevent rapid sodium shifts',
      isCorrect: false
    },
    {
      id: 'E',
      text: 'Oral free water 2 liters daily if the patient can tolerate PO intake',
      isCorrect: false
    }
  ],
  explanation: `
**Correct Answer: A - 5% Dextrose in Water (D5W) or 0.45% NS, targeting sodium reduction of 10-12 mEq/L per 24 hours with frequent monitoring**

**Clinical Reasoning:**
This patient has **severe hypernatremia (162 mEq/L)** from dehydration. Treatment requires **free water replacement**. The rate of correction must be limited to **10-12 mEq/L per 24 hours** to prevent **cerebral edema**.

The estimated **Free Water Deficit** for this patient is approximately 4.3 liters. This should be replaced over 48-72 hours. Initial resuscitation with 0.9% NS is appropriate for hemodynamic instability, but once stabilized, hypotonic fluids (D5W or 0.45% NS) are needed for definitive correction.

**Why Others are Wrong:**
* **B (Normal Saline):** Inefficient for correcting hypernatremia as it provides very little free water.
* **C (Rapid Correction):** Correcting Na 162 to 140 in 24 hours is too fast and risks life-threatening cerebral edema.
* **D (3% Saline):** This would raise sodium further, worsening the hypernatremia.
* **E (Oral Intake):** This patient has altered mental status and is at high risk for aspiration; IV replacement is required until mental status improves.
  `,
  references: [
    'Adrogué HJ, Madias NE. Hypernatremia. N Engl J Med. 2000;342(20):1493-1499.',
    'Sterns RH. Disorders of plasma sodium—causes, consequences, and correction. N Engl J Med. 2015;372(1):55-65.',
    'Muhsin SA, Mount DB. Diagnosis and treatment of hypernatremia. Best Pract Res Clin Endocrinol Metab. 2016;30(2):189-203.'
  ]
};
