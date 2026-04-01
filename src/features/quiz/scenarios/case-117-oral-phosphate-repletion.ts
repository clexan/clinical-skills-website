import { QuizScenario } from '../quizData';

export const case117: QuizScenario = {
  id: 'case-117',
  slug: 'oral-phosphate-repletion-moderate-asymptomatic',
  title: 'Oral vs IV Phosphate Repletion',
  category: 'Emergency',
  difficulty: 'Medium',
  vignette: `A 62-year-old man is hospitalized for community-acquired pneumonia. On hospital day 2, routine labs reveal a phosphorus level of 1.8 mg/dL. He is clinically stable with no muscle weakness, confusion, or respiratory distress. He is tolerating a regular diet and taking oral medications without difficulty. His other laboratory values include potassium 3.8 mEq/L, magnesium 1.9 mg/dL, calcium 9.2 mg/dL, and creatinine 0.9 mg/dL. The medical team is considering phosphate repletion.`,
  question: 'What is the MOST appropriate phosphate repletion strategy for this patient?',
  options: [
    {
      id: 'A',
      text: 'Oral phosphate supplementation such as Neutra-Phos or K-Phos in divided doses',
      isCorrect: true
    },
    {
      id: 'B',
      text: 'IV sodium phosphate 15 mmol over 6 hours with calcium monitoring',
      isCorrect: false
    },
    {
      id: 'C',
      text: 'No repletion is needed because phosphorus 1.8 mg/dL will always self-correct',
      isCorrect: false
    },
    {
      id: 'D',
      text: 'IV potassium phosphate 30 mmol over 4 hours for rapid normalization',
      isCorrect: false
    },
    {
      id: 'E',
      text: 'Oral calcium carbonate to improve phosphate absorption',
      isCorrect: false
    }
  ],
  explanation: `
**Correct Answer: A - Oral phosphate supplementation such as Neutra-Phos or K-Phos in divided doses**

**Clinical Reasoning:**
This patient has **moderate, asymptomatic hypophosphatemia** and is tolerating oral intake. That makes **oral phosphate** the preferred treatment. Oral therapy is safer, simpler, and avoids the risks of IV phosphate, especially **hypocalcemia** and precipitation issues.

IV phosphate is typically reserved for **severe hypophosphatemia**, clinically important symptoms, or inability to take oral medications.

**Why Others Are Wrong:**
* **B (IV sodium phosphate):** IV therapy is unnecessary for a clinically stable patient who can take oral medication.
* **C (No treatment):** A phosphorus of **1.8 mg/dL is abnormal** and often merits replacement rather than passive observation alone.
* **D (Aggressive IV potassium phosphate):** Too aggressive for this severity and not needed when the patient is stable and potassium is normal.
* **E (Calcium carbonate):** Calcium carbonate can actually **bind phosphate** in the gut and lower phosphate absorption rather than improve it.
  `,
  references: [
    'Gaasbeek A, Meinders AE. Hypophosphatemia: an update on its etiology and treatment. Am J Med. 2005;118(10):1094-1101.',
    'Amanzadeh J, Reilly RF Jr. Hypophosphatemia: an evidence-based approach to its clinical consequences and management. Nat Clin Pract Nephrol. 2006;2(3):136-148.',
    'Geerse DA, Bindels AJ, Kuiper MA, et al. Treatment of hypophosphatemia in the intensive care unit: a review. Crit Care. 2010;14(4):R147.'
  ],
  skillTested: 'Choose oral rather than IV phosphate in stable moderate hypophosphatemia',
  linkedChapter: 'electrolytes',
  verdictOneLineSummary:
    'Moderate asymptomatic hypophosphatemia in a patient who can take PO is an oral phosphate problem.'
};
