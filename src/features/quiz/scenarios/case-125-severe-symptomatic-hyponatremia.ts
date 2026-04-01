import { QuizScenario } from '../quizData';

export const case125: QuizScenario = {
  id: 'case-125',
  slug: 'severe-symptomatic-hyponatremia-hypertonic-saline',
  title: 'Severe Symptomatic Hyponatremia',
  category: 'Emergency',
  difficulty: 'Hard',
  vignette: `A 42-year-old man is brought to the ED by ambulance after having a witnessed generalized tonic-clonic seizure that lasted 2 minutes. On arrival, he is post-ictal and confused. His vital signs are: heart rate 112 bpm, blood pressure 110/70 mmHg, and oxygen saturation 94% on room air. He has a history of severe alcoholism and malnutrition. Laboratory results show: sodium 108 mEq/L, potassium 3.2 mEq/L, and serum osmolality 225 mOsm/kg. While being evaluated, he has another generalized seizure.`,
  question: 'What is the MOST appropriate immediate treatment for this patient\'s hyponatremia?',
  options: [
    {
      id: 'A',
      text: '100 mL bolus of 3% Hypertonic Saline, repeated up to 3 times as needed to stop seizures',
      isCorrect: true
    },
    {
      id: 'B',
      text: 'Start 0.9% Normal Saline at 150 mL/hour to gradually correct sodium',
      isCorrect: false
    },
    {
      id: 'C',
      text: 'Calculate the sodium deficit and replace half over the first 24 hours',
      isCorrect: false
    },
    {
      id: 'D',
      text: 'Restrict free water intake to <1 liter per day',
      isCorrect: false
    },
    {
      id: 'E',
      text: 'Administer IV lorazepam and wait for the post-ictal state to resolve before giving saline',
      isCorrect: false
    }
  ],
  explanation: `
**Correct Answer: A - 100 mL bolus of 3% Hypertonic Saline, repeated up to 3 times as needed to stop seizures**

**Clinical Reasoning:**
This patient has **severe symptomatic hyponatremia (Na 108 mEq/L)** presenting with seizures, which is a medical emergency. The goal of treatment in symptomatic hyponatremia is to rapidly raise the serum sodium by **4-6 mEq/L** to stop neurologic complications (seizures, herniation).

The recommended approach is a **100 mL bolus of 3% hypertonic saline**, which can be repeated every 10 minutes for a total of 300 mL until symptoms improve or the sodium rises by the target amount. A 100 mL bolus of 3% saline typically raises serum sodium by approximately 1.5-2 mEq/L.

**Why Others are Wrong:**
* **B (Normal Saline):** Isotonic saline is insufficient for emergency correction of severe symptomatic hyponatremia. In some cases (like SIADH), normal saline can even worsen hyponatremia if the urine is more concentrated than the saline being infused.
* **C (Deficit Calculation):** Formulas are used for stable patients. In emergencies, bolus therapy is the standard of care to achieve rapid clinical improvement.
* **D (Water Restriction):** This is a long-term management strategy for euvolemic hyponatremia, not an acute treatment for life-threatening seizures.
* **E (Delaying treatment):** While benzodiazpines treat the seizure, they do not address the underlying cause (cerebral edema from hyponatremia). Delaying sodium correction in this setting risks further seizures and permanent neurologic damage.
  `,
  references: [
    'Spasovski G, Vanholder R, Allolio B, et al. Clinical practice guideline on diagnosis and treatment of hyponatraemia. Eur J Endocrinol. 2014;170(3):G1-47.',
    'Verbalis JG, Goldsmith SR, Greenberg A, et al. Diagnosis, evaluation, and treatment of hyponatremia: expert panel recommendations. Am J Med. 2013;126(10 Suppl 1):S1-42.',
    'Sterns RH. Disorders of plasma sodium—causes, consequences, and correction. N Engl J Med. 2015;372(1):55-65.'
  ]
};
