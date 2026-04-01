import { QuizScenario } from '../quizData';

export const case127: QuizScenario = {
  id: 'case-127',
  slug: 'hypovolemic-hyponatremia-normal-saline-treatment',
  title: 'Hypovolemic Hyponatremia',
  category: 'Emergency',
  difficulty: 'Medium',
  vignette: `A 76-year-old man is brought to the ED by his daughter for progressive weakness and dizziness over the past 5 days. He was recently hospitalized for heart failure exacerbation and discharged 10 days ago on an intensified diuretic regimen. His vital signs are: heart rate 102 bpm, blood pressure 98/62 mmHg (drops to 78/50 mmHg when standing). Laboratory results show: sodium 126 mEq/L, potassium 3.0 mEq/L, chloride 84 mEq/L, bicarbonate 32 mEq/L, BUN 48 mg/dL, creatinine 1.9 mg/dL (baseline 1.3), urine sodium 8 mEq/L, and urine osmolality 620 mOsm/kg. On examination, he has dry mucous membranes and flat neck veins.`,
  question: 'What is the MOST appropriate initial fluid choice for this patient?',
  options: [
    {
      id: 'A',
      text: '0.9% Normal Saline (NS) with potassium supplementation',
      isCorrect: true
    },
    {
      id: 'B',
      text: '3% Hypertonic Saline infusion to correct hyponatremia',
      isCorrect: false
    },
    {
      id: 'C',
      text: '5% Dextrose in Water (D5W) for free water replacement',
      isCorrect: false
    },
    {
      id: 'D',
      text: '0.45% Half-Normal Saline for gradual sodium correction',
      isCorrect: false
    },
    {
      id: 'E',
      text: 'Fluid restriction to 1.5 liters per day',
      isCorrect: false
    }
  ],
  explanation: `
**Correct Answer: A - 0.9% Normal Saline (NS) with potassium supplementation**

**Clinical Reasoning:**
This patient has **hypovolemic hyponatremia** caused by aggressive diuretic therapy. Clinical signs include orthostatic hypotension, dry mucous membranes, and flat neck veins. Laboratory evidence includes a low urine sodium (8 mEq/L), elevated BUN/creatinine ratio, and metabolic alkalosis.

The mechanism is volume depletion triggering non-osmotic ADH release. Treatment is **volume repletion with isotonic (0.9%) saline**. Restoring intravascular volume will suppress ADH, allowing the kidneys to excrete free water and correct the sodium concentration. Potassium supplementation is also necessary as he is hypokalemic (3.0 mEq/L); potassium repletion itself aids in sodium correction.

**Why Others are Wrong:**
* **B (3% Saline):** Hypertonic saline is for severe symptomatic hyponatremia. In hypovolemia, it risks rapid overcorrection because once volume is restored, ADH is suppressed and a large water diuresis often occurs.
* **C (D5W):** Free water would worsen the hyponatremia and provide no volume repletion.
* **D (0.45% NS):** Less effective for volume repletion than isotonic saline and could unnecessarily delay stabilization.
* **E (Fluid Restriction):** This is for hypervolemic (heart failure) or euvolemic (SIADH) hyponatremia. Restricting fluids in a volume-depleted patient would worsen his hemodynamic instability and AKI.
  `,
  references: [
    'Verbalis JG, Goldsmith SR, Greenberg A, et al. Diagnosis, evaluation, and treatment of hyponatremia: expert panel recommendations. Am J Med. 2013;126(10 Suppl 1):S1-42.',
    'Spasovski G, Vanholder R, Allolio B, et al. Clinical practice guideline on diagnosis and treatment of hyponatraemia. Eur J Endocrinol. 2014;170(3):G1-47.',
    'Sterns RH. Disorders of plasma sodium—causes, consequences, and correction. N Engl J Med. 2015;372(1):55-65.'
  ]
};
