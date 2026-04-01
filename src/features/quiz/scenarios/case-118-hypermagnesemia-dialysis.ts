import { QuizScenario } from '../quizData';

export const case118: QuizScenario = {
  id: 'case-118',
  slug: 'hypermagnesemia-esrd-calcium-and-dialysis',
  title: 'Hypermagnesemia in End-Stage Renal Disease',
  category: 'Emergency',
  difficulty: 'Hard',
  vignette: `A 71-year-old woman with end-stage renal disease on hemodialysis presents with progressive lethargy and weakness. She has been constipated and has been taking milk of magnesia several times daily for the past week. On arrival she is somnolent but arousable. Vital signs show heart rate 42 bpm, blood pressure 88/54 mmHg, respiratory rate 10/min, and oxygen saturation 93% on room air. Deep tendon reflexes are absent. ECG shows sinus bradycardia with PR prolongation. Laboratory studies reveal magnesium 8.4 mg/dL, creatinine 9.8 mg/dL, potassium 4.6 mEq/L, and calcium 8.1 mg/dL.`,
  question: 'What is the MOST appropriate immediate treatment?',
  options: [
    {
      id: 'A',
      text: 'IV calcium gluconate for membrane stabilization, followed by emergent hemodialysis',
      isCorrect: true
    },
    {
      id: 'B',
      text: 'Normal saline plus IV furosemide to promote renal magnesium excretion',
      isCorrect: false
    },
    {
      id: 'C',
      text: 'IV sodium bicarbonate to shift magnesium intracellularly',
      isCorrect: false
    },
    {
      id: 'D',
      text: 'Activated charcoal because magnesium hydroxide remains in the gut',
      isCorrect: false
    },
    {
      id: 'E',
      text: 'Supportive care alone because hypermagnesemia is usually self-limited',
      isCorrect: false
    }
  ],
  explanation: `
**Correct Answer: A - IV calcium gluconate for membrane stabilization, followed by emergent hemodialysis**

**Clinical Reasoning:**
This patient has **life-threatening hypermagnesemia** with classic toxicity findings: **bradycardia, hypotension, respiratory depression, somnolence, and areflexia**. The immediate temporizing treatment is **IV calcium**, which antagonizes the effects of magnesium at the neuromuscular junction and myocardium. Because she has **ESRD**, the definitive therapy is **emergent hemodialysis**, as she cannot excrete magnesium effectively.

Loss of deep tendon reflexes is an important clinical clue to worsening magnesium toxicity and often precedes more severe respiratory and cardiac compromise.

**Why Others Are Wrong:**
* **B (Saline plus furosemide):** This can help only if the kidneys can excrete magnesium. In ESRD it is ineffective.
* **C (Bicarbonate):** There is no clinically meaningful intracellular shift maneuver for magnesium analogous to potassium.
* **D (Activated charcoal):** Charcoal does not bind magnesium effectively and is not useful after ongoing absorption over many days.
* **E (Supportive care alone):** This is dangerous in severe symptomatic hypermagnesemia, especially in an anuric dialysis patient.
  `,
  references: [
    'Cascella M, Vaqar S. Hypermagnesemia. StatPearls. 2024.',
    'Kraft MD, Btaiche IF, Sacks GS, Kudsk KA. Treatment of electrolyte disorders in adult patients in the intensive care unit. Am J Health Syst Pharm. 2005;62(16):1663-1682.',
    'Musso CG. Magnesium metabolism in health and disease. Int Urol Nephrol. 2009;41(2):357-362.',
    'Topf JM, Murray PT. Hypomagnesemia and hypermagnesemia. Rev Endocr Metab Disord. 2003;4(2):195-206.'
  ],
  skillTested: 'Recognize severe hypermagnesemia and combine IV calcium with dialysis in ESRD',
  linkedChapter: 'electrolytes',
  verdictOneLineSummary:
    'Symptomatic hypermagnesemia in ESRD is a calcium-now, dialysis-next emergency.'
};
