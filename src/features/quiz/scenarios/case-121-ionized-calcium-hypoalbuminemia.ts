import { QuizScenario } from '../quizData';

export const case121: QuizScenario = {
  id: 'case-121',
  slug: 'ionized-calcium-hypoalbuminemia',
  title: 'Corrected Calcium vs Ionized Calcium in Hypoalbuminemia',
  category: 'Emergency',
  difficulty: 'Medium',
  vignette: `A 72-year-old man with decompensated cirrhosis and ascites is admitted for hepatic encephalopathy. He appears chronically ill with jaundice, muscle wasting, and anasarca. Laboratory studies reveal total calcium 7.2 mg/dL, albumin 1.8 g/dL, total protein 4.8 g/dL, creatinine 1.2 mg/dL, and phosphorus 3.4 mg/dL. The intern is concerned about severe hypocalcemia and wants to start IV calcium gluconate immediately.`,
  question: 'Before initiating treatment, what is the MOST appropriate next step to determine true calcium status?',
  options: [
    {
      id: 'A',
      text: 'Check ionized calcium because it is the most accurate measure in patients with markedly abnormal albumin',
      isCorrect: true
    },
    {
      id: 'B',
      text: 'Use the corrected-calcium formula only; it is always sufficient and ionized calcium adds no value',
      isCorrect: false
    },
    {
      id: 'C',
      text: 'Start IV calcium immediately because a total calcium of 7.2 mg/dL is always dangerous',
      isCorrect: false
    },
    {
      id: 'D',
      text: 'Check PTH first because calcium interpretation depends entirely on the PTH level',
      isCorrect: false
    },
    {
      id: 'E',
      text: 'Repeat the total calcium from a different lab because hypoalbuminemia does not affect calcium interpretation',
      isCorrect: false
    }
  ],
  explanation: `
**Correct Answer: A - Check ionized calcium because it is the most accurate measure in patients with markedly abnormal albumin**

**Clinical Reasoning:**
This patient has **severe hypoalbuminemia**, which lowers the **total** calcium measurement because a large fraction of serum calcium is albumin-bound. What matters physiologically, however, is the **ionized (free) calcium**. In patients with major albumin abnormalities, especially cirrhosis or critical illness, **ionized calcium is the gold standard** for determining whether true hypocalcemia is present.

Corrected-calcium formulas can be useful estimates, but they are often inaccurate in hospitalized, cirrhotic, and critically ill patients.

**Why Others Are Wrong:**
* **B (Corrected formula always enough):** Correction formulas are imperfect and can misclassify calcium status, especially in cirrhosis.
* **C (Treat immediately based on total calcium):** Treatment decisions should be based on true calcium status and symptoms, not a low total calcium alone in profound hypoalbuminemia.
* **D (Check PTH first):** PTH helps determine cause, not whether the patient actually has clinically meaningful hypocalcemia right now.
* **E (Repeat total calcium):** The problem is not necessarily lab error; it is the interpretation of total calcium in the setting of low albumin.
  `,
  references: [
    'Walker MD, Shane E. Hypercalcemia: A Review. JAMA. 2022;328(16):1624-1636.',
    'Ladenson JH. Calcium, Magnesium, and Phosphate. In: Tietz Textbook of Clinical Chemistry and Molecular Diagnostics. 6th ed. Elsevier; 2018.',
    'Dickerson RN, Alexander KH, Minard G, et al. Accuracy of methods to estimate ionized and corrected serum calcium concentrations in critically ill multiple-trauma patients receiving specialized nutrition support. JPEN J Parenter Enteral Nutr. 2004;28(3):133-141.'
  ],
  skillTested: 'Use ionized calcium rather than total calcium when albumin is severely abnormal',
  linkedChapter: 'electrolytes',
  verdictOneLineSummary:
    'Low total calcium in cirrhosis may be a protein problem, not a true free-calcium problem, so check ionized calcium first.'
};
