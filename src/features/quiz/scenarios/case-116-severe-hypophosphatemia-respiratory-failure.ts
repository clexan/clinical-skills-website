import { QuizScenario } from '../quizData';

export const case116: QuizScenario = {
  id: 'case-116',
  slug: 'severe-hypophosphatemia-respiratory-failure-hemolysis',
  title: 'Severe Hypophosphatemia Causing Respiratory Failure',
  category: 'Emergency',
  difficulty: 'Hard',
  vignette: `A 45-year-old man with alcohol use disorder is admitted to the ICU with severe alcohol withdrawal requiring high-dose benzodiazepines. He has been NPO for 4 days and receiving dextrose-containing IV fluids. On ICU day 3, he develops progressive respiratory distress despite minimal secretions and a clear chest X-ray. He appears weak and has difficulty lifting his arms. Arterial blood gas shows pH 7.38, PaCO2 52 mmHg, and PaO2 68 mmHg on 4L nasal cannula. Laboratory studies show potassium 3.3 mEq/L, magnesium 1.4 mg/dL, phosphorus 0.7 mg/dL, hemoglobin 9.2 g/dL (down from 12.1 g/dL on admission), LDH 580 U/L, and low haptoglobin.`,
  question: 'What is the MOST likely cause of his deterioration, and what is the MOST appropriate immediate treatment?',
  options: [
    {
      id: 'A',
      text: 'Severe hypophosphatemia causing diaphragmatic weakness and hemolysis; give IV phosphate repletion now',
      isCorrect: true
    },
    {
      id: 'B',
      text: 'Aspiration pneumonia; broaden antibiotics and increase oxygen support',
      isCorrect: false
    },
    {
      id: 'C',
      text: 'Alcoholic cardiomyopathy with pulmonary edema; give IV furosemide',
      isCorrect: false
    },
    {
      id: 'D',
      text: 'Autoimmune hemolytic anemia; send a direct antiglobulin test and transfuse first',
      isCorrect: false
    },
    {
      id: 'E',
      text: 'ARDS related to alcohol withdrawal; intubate for primary lung injury',
      isCorrect: false
    }
  ],
  explanation: `
**Correct Answer: A - Severe hypophosphatemia causing diaphragmatic weakness and hemolysis; give IV phosphate repletion now**

**Clinical Reasoning:**
This patient has **severe hypophosphatemia** with two classic major complications: **respiratory muscle weakness** and **hemolysis**. A phosphorus of **0.7 mg/dL** is profoundly low. The clear chest X-ray plus **hypercapnia** point away from parenchymal lung disease and toward **neuromuscular ventilatory failure** from ATP depletion in the diaphragm and accessory muscles. The falling hemoglobin with elevated LDH and low haptoglobin is consistent with hemolysis, which can also occur in severe phosphate depletion because red blood cells lose ATP and become fragile.

Because the hypophosphatemia is **severe and symptomatic**, the correct treatment is **IV phosphate repletion**, with close monitoring of calcium and repeat phosphorus levels.

**Why Others Are Wrong:**
* **B (Aspiration pneumonia):** The chest X-ray is clear, and the respiratory failure pattern is hypercapnic rather than typical pneumonia-associated hypoxemic failure.
* **C (Cardiomyopathy/pulmonary edema):** There is no radiographic evidence of pulmonary edema and this does not explain the hemolysis.
* **D (Autoimmune hemolysis):** Could explain anemia, but not the simultaneous respiratory muscle weakness with severe phosphate depletion.
* **E (ARDS):** ARDS requires lung injury with infiltrates and usually causes hypoxemia out of proportion to ventilation, not isolated diaphragmatic weakness with a clear film.
  `,
  references: [
    'Gaasbeek A, Meinders AE. Hypophosphatemia: an update on its etiology and treatment. Am J Med. 2005;118(10):1094-1101.',
    'Amanzadeh J, Reilly RF Jr. Hypophosphatemia: an evidence-based approach to its clinical consequences and management. Nat Clin Pract Nephrol. 2006;2(3):136-148.',
    'Geerse DA, Bindels AJ, Kuiper MA, et al. Treatment of hypophosphatemia in the intensive care unit: a review. Crit Care. 2010;14(4):R147.',
    'Aubier M, Murciano D, Lecocguic Y, et al. Effect of hypophosphatemia on diaphragmatic contractility in patients with acute respiratory failure. N Engl J Med. 1985;313(7):420-424.'
  ],
  skillTested: 'Recognize severe hypophosphatemia as a cause of respiratory muscle failure and hemolysis',
  linkedChapter: 'electrolytes',
  verdictOneLineSummary:
    'A clear chest X-ray does not rule out impending respiratory collapse when severe hypophosphatemia is taking down the diaphragm.'
};
