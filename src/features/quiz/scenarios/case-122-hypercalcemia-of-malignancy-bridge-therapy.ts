import { QuizScenario } from '../quizData';

export const case122: QuizScenario = {
  id: 'case-122',
  slug: 'hypercalcemia-of-malignancy-calcitonin-bisphosphonate',
  title: 'Hypercalcemia of Malignancy: Bridge and Definitive Therapy',
  category: 'Emergency',
  difficulty: 'Hard',
  vignette: `A 67-year-old man with newly diagnosed metastatic squamous cell lung cancer presents with worsening confusion, nausea, constipation, and profound fatigue. He is dehydrated but improving after several hours of isotonic saline resuscitation in the ED. Laboratory studies show calcium 15.6 mg/dL, albumin 3.9 g/dL, creatinine 2.1 mg/dL, phosphorus 2.0 mg/dL, PTH suppressed, and PTH-related peptide elevated. ECG shows a shortened QT interval. The team has already started IV fluids and is deciding what to add next.`,
  question: 'Which additional therapy is MOST appropriate after fluids are started?',
  options: [
    {
      id: 'A',
      text: 'Give calcitonin now for rapid bridging and an IV bisphosphonate for sustained calcium lowering',
      isCorrect: true
    },
    {
      id: 'B',
      text: 'Use calcitonin alone because bisphosphonates are contraindicated whenever creatinine is above 2 mg/dL',
      isCorrect: false
    },
    {
      id: 'C',
      text: 'Wait 48 hours to see whether fluids alone normalize the calcium before adding any other therapy',
      isCorrect: false
    },
    {
      id: 'D',
      text: 'Use denosumab instead of both calcitonin and bisphosphonate because it has the fastest onset',
      isCorrect: false
    },
    {
      id: 'E',
      text: 'Begin furosemide immediately as the next routine step after fluids',
      isCorrect: false
    }
  ],
  explanation: `
**Correct Answer: A - Give calcitonin now for rapid bridging and an IV bisphosphonate for sustained calcium lowering**

**Clinical Reasoning:**
This is **hypercalcemia of malignancy**. After isotonic fluids have been started, the best next move is a **two-part strategy**:
* **Calcitonin** for rapid but temporary calcium lowering over hours.
* **IV bisphosphonate** such as zoledronic acid or pamidronate for a more durable effect over the following days.

This pairing matters because bisphosphonates do **not** work immediately, while calcitonin develops **tachyphylaxis** and cannot carry the patient long-term by itself.

**Why Others Are Wrong:**
* **B (Calcitonin alone):** Calcitonin is a bridge, not definitive therapy.
* **C (Wait for fluids only):** With calcium this high and symptoms already present, delaying additional therapy is unsafe.
* **D (Denosumab fastest):** Denosumab is useful in selected or refractory cases, but it is not the fastest bridge therapy.
* **E (Routine furosemide):** Loop diuretics are not a routine next step unless needed later for fluid overload after rehydration.
  `,
  references: [
    'Walker MD, Shane E. Hypercalcemia: A Review. JAMA. 2022;328(16):1624-1636.',
    'Goldner W. Cancer-Related Hypercalcemia. J Oncol Pract. 2016;12(5):426-432.',
    'Hu MI, Glezerman IG, Leboulleux S, et al. Denosumab for Treatment of Hypercalcemia of Malignancy. J Clin Endocrinol Metab. 2014;99(9):3144-3152.'
  ],
  skillTested: 'Pair calcitonin bridging with bisphosphonate therapy in severe hypercalcemia of malignancy',
  linkedChapter: 'electrolytes',
  verdictOneLineSummary:
    'Once fluids are running in malignancy-related hypercalcemia, use calcitonin for hours and a bisphosphonate for days.'
};
