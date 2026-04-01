import { QuizScenario } from '../quizData';

export const case119: QuizScenario = {
  id: 'case-119',
  slug: 'hypercalcemic-crisis-fluids-first',
  title: 'Hypercalcemic Crisis: Stones, Bones, Groans, and Psychiatric Overtones',
  category: 'Emergency',
  difficulty: 'Hard',
  vignette: `A 61-year-old woman with no significant past medical history presents with 2 weeks of progressive fatigue, confusion, severe constipation, diffuse abdominal pain, and polyuria. Her family reports she has been increasingly disoriented over the past 3 days. She was recently evaluated for back pain and was found to have an L2 compression fracture on X-ray. Vital signs show blood pressure 96/62 mmHg, heart rate 108 bpm, temperature 37.0 C, and respiratory rate 18/min. She appears cachectic and dehydrated with dry mucous membranes and poor skin turgor. ECG shows sinus tachycardia with a shortened QT interval. Laboratory studies reveal calcium 17.2 mg/dL, albumin 3.8 g/dL, creatinine 2.4 mg/dL, BUN 48 mg/dL, phosphorus 2.1 mg/dL, and PTH 285 pg/mL.`,
  question: 'What is the MOST appropriate FIRST step in management?',
  options: [
    {
      id: 'A',
      text: 'Aggressive IV isotonic saline resuscitation, such as 200-500 mL/hour, targeting euvolemia and adequate urine output',
      isCorrect: true
    },
    {
      id: 'B',
      text: 'Zoledronic acid 4 mg IV immediately because bisphosphonates are the definitive treatment',
      isCorrect: false
    },
    {
      id: 'C',
      text: 'Calcitonin 4 IU/kg immediately as the only initial therapy because it has the fastest onset',
      isCorrect: false
    },
    {
      id: 'D',
      text: 'Furosemide 80 mg IV bolus to promote renal calcium excretion before fluids',
      isCorrect: false
    },
    {
      id: 'E',
      text: 'Emergent parathyroidectomy before medical stabilization because the PTH is elevated',
      isCorrect: false
    }
  ],
  explanation: `
**Correct Answer: A - Aggressive IV isotonic saline resuscitation, such as 200-500 mL/hour, targeting euvolemia and adequate urine output**

**Clinical Reasoning:**
This patient has **hypercalcemic crisis** with severe symptoms and marked dehydration. The first priority is **volume resuscitation with isotonic saline**. Hypercalcemia causes a nephrogenic diabetes insipidus-like state with polyuria and worsens volume depletion, which in turn reduces GFR and makes the hypercalcemia worse. Restoring intravascular volume improves renal calcium clearance and is the foundation of treatment.

Once fluids are underway and the patient is being rehydrated, additional calcium-lowering therapies such as **calcitonin** and **bisphosphonates** should follow.

**Why Others Are Wrong:**
* **B (Zoledronic acid first):** Important therapy, but it does not act quickly and should not precede rehydration in a profoundly volume-depleted patient.
* **C (Calcitonin only):** Calcitonin acts quickly, but it is a bridge therapy and does not replace the need for immediate fluid resuscitation.
* **D (Furosemide before fluids):** The old “saline and Lasix” approach is outdated. Loop diuretics before euvolemia can worsen dehydration and kidney injury.
* **E (Immediate surgery):** Definitive management of primary hyperparathyroidism is surgical, but this patient must be medically stabilized first.
  `,
  references: [
    'Minisola S, Pepe J, Piemonte S, Cipriani C. The Diagnosis and Management of Hypercalcaemia. BMJ. 2015;350:h2723.',
    'Goldner W. Cancer-Related Hypercalcemia. J Oncol Pract. 2016;12(5):426-432.',
    'Walker MD, Shane E. Hypercalcemia: A Review. JAMA. 2022;328(16):1624-1636.'
  ],
  skillTested: 'Prioritize isotonic fluid resuscitation first in hypercalcemic crisis',
  linkedChapter: 'electrolytes',
  verdictOneLineSummary:
    'Severe hypercalcemia is a fluid-first emergency because dehydration is part of the physiology keeping calcium high.'
};
