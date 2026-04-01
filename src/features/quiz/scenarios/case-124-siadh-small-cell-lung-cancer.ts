import { QuizScenario } from '../quizData';

export const case124: QuizScenario = {
  id: 'case-124',
  slug: 'siadh-small-cell-lung-cancer-hyponatremia',
  title: 'SIADH and Euvolemic Hyponatremia',
  category: 'Emergency',
  difficulty: 'Hard',
  vignette: `A 67-year-old woman presents to the ED with confusion and fatigue that has developed over the past week. Her vital signs are: temperature 36.9°C (98.4°F), heart rate 78 bpm, blood pressure 128/76 mmHg, respiratory rate 14 breaths/min, and oxygen saturation 98% on room air. She has a history of small cell lung cancer diagnosed 3 months ago (currently on chemotherapy), hypertension, and depression. Her medications include cisplatin/etoposide (last cycle 2 weeks ago), lisinopril, and sertraline. She has no known drug allergies. Laboratory results show: sodium 118 mEq/L, potassium 4.1 mEq/L, chloride 86 mEq/L, bicarbonate 24 mEq/L, BUN 8 mg/dL, creatinine 0.7 mg/dL, glucose 102 mg/dL, serum osmolality 248 mOsm/kg, urine osmolality 520 mOsm/kg, and urine sodium 58 mEq/L. On examination, she is oriented to person only, has moist mucous membranes, no peripheral edema, normal skin turgor, and JVP is not elevated. Her lungs are clear and cardiac exam is normal.`,
  question: "Based on the clinical and laboratory findings, what is the MOST likely cause of this patient's hyponatremia?",
  options: [
    {
      id: 'A',
      text: 'Syndrome of Inappropriate Antidiuretic Hormone (SIADH) secondary to small cell lung cancer',
      isCorrect: true
    },
    {
      id: 'B',
      text: 'Hypovolemic hyponatremia from chemotherapy-induced nausea and poor oral intake',
      isCorrect: false
    },
    {
      id: 'C',
      text: 'Thiazide diuretic-induced hyponatremia',
      isCorrect: false
    },
    {
      id: 'D',
      text: 'Cerebral salt wasting syndrome from brain metastases',
      isCorrect: false
    },
    {
      id: 'E',
      text: 'Psychogenic polydipsia from underlying depression',
      isCorrect: false
    }
  ],
  explanation: `
**Correct Answer: A - Syndrome of Inappropriate Antidiuretic Hormone (SIADH) secondary to small cell lung cancer**

**Clinical Reasoning:**
This patient has **euvolemic hypotonic hyponatremia** with laboratory findings classic for **SIADH**. The diagnostic criteria for SIADH include: (1) **hypotonic hyponatremia** (serum osmolality 248 mOsm/kg, Na 118 mEq/L), (2) **inappropriately concentrated urine** (urine osmolality 520 mOsm/kg > 100 mOsm/kg), (3) **elevated urine sodium** (>30-40 mEq/L), (4) **clinical euvolemia** (normal BP, moist mucous membranes, no edema), and (5) **normal renal, adrenal, and thyroid function**.

**Small cell lung cancer** is the most common malignancy associated with ectopic ADH production. Additional risk factors here include **sertraline** (SSRIs) and recent **cisplatin** chemotherapy.

| Parameter | SIADH (Euvolemic) | Hypovolemic | Hypervolemic |
| :--- | :--- | :--- | :--- |
| **Volume Status** | Normal | Decreased | Increased (edema, JVD) |
| **Urine Osmolality** | >100 mOsm/kg | >100 mOsm/kg | Variable |
| **Urine Sodium** | >30-40 mEq/L | <20 mEq/L* | <20 mEq/L (CHF/Cirrhosis) |
| **BUN** | Low/Normal | Elevated | Variable |

*\*Exception: Urine Na may be >20 mEq/L in hypovolemia if the cause is renal losses (diuretics).*

**Why Others are Wrong:**
* **B (Hypovolemic):** Patient is clinically euvolemic (normal vital signs, moist mucosa) and has high urine sodium (58 mEq/L), which argues against true volume depletion where kidneys should be sodium-avid.
* **C (Thiazides):** While lisinopril is present, the patient is not on a thiazide. Thiazides are a common cause of hyponatremia but usually present with some features of volume depletion.
* **D (Cerebral Salt Wasting):** CSW presents with **profound volume depletion** and high urine output, unlike the euvolemia seen here.
* **E (Psychogenic Polydipsia):** This would present with **maximally dilute urine** (urine osmolality <100 mOsm/kg), whereas this patient's urine is concentrated (520 mOsm/kg).
  `,
  references: [
    'Verbalis JG, Goldsmith SR, Greenberg A, et al. Diagnosis, evaluation, and treatment of hyponatremia: expert panel recommendations. Am J Med. 2013;126(10 Suppl 1):S1-42.',
    'Spasovski G, Vanholder R, Allolio B, et al. Clinical practice guideline on diagnosis and treatment of hyponatraemia. Eur J Endocrinol. 2014;170(3):G1-47.',
    'Sterns RH. Disorders of plasma sodium—causes, consequences, and correction. N Engl J Med. 2015;372(1):55-65.'
  ]
};
