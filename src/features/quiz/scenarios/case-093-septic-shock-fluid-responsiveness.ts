import { QuizScenario } from '../quizData';

export const case093: QuizScenario = {
  id: 'case-093',
  slug: 'septic-shock-fluid-responsiveness-dynamic-measures',
  title: 'Assessing Fluid Responsiveness in Septic Shock',
  category: 'Emergency',
  difficulty: 'Hard',
  vignette: `A 64-year-old woman with septic shock from pneumonia has received 35 mL/kg of crystalloid over the past 3 hours. Her blood pressure has improved from 72/48 to 88/58 mmHg, but she remains on norepinephrine at 0.08 mcg/kg/min. Lactate has decreased from 5.2 to 3.8 mmol/L. The ICU team is debating whether to give additional fluid. A central venous catheter shows CVP of 12 mmHg. The bedside nurse performs a passive leg raise maneuver while monitoring cardiac output with a non-invasive device, which shows a 15% increase in stroke volume.`,
  question: 'Based on current evidence, which assessment method BEST predicts whether this patient will benefit from additional fluid administration?',
  options: [
    {
      id: 'A',
      text: 'Passive leg raise with stroke volume monitoring showing >10% increase',
      isCorrect: true
    },
    {
      id: 'B',
      text: 'Central venous pressure of 12 mmHg indicating adequate preload',
      isCorrect: false
    },
    {
      id: 'C',
      text: 'Mean arterial pressure response to a 500 mL fluid challenge',
      isCorrect: false
    },
    {
      id: 'D',
      text: 'Heart rate decrease after fluid administration',
      isCorrect: false
    },
    {
      id: 'E',
      text: 'Systolic blood pressure of 88 mmHg indicating need for more fluid',
      isCorrect: false
    }
  ],
  explanation: `
**Correct Answer: A - Passive leg raise with stroke volume monitoring showing >10% increase**

**Clinical Reasoning:**
Once initial resuscitation is underway, the key question is not whether the patient still looks sick, but whether **additional fluid will increase cardiac output**. The Surviving Sepsis Campaign recommends using **dynamic measures** over static parameters alone to guide further fluid administration. A **passive leg raise (PLR)** acts like a reversible autotransfusion. If it produces a meaningful rise in stroke volume or cardiac output, the patient is likely to be fluid responsive.

Evidence summarized in major reviews shows that dynamic testing with PLR performs much better than static measures such as CVP. In this case, a **15% increase in stroke volume** strongly suggests the patient is likely to benefit from more fluid.

**Why Others Are Wrong:**
* **B (CVP 12 mmHg):** CVP is a **poor predictor of fluid responsiveness**. It measures pressure, not whether the ventricle is on the responsive portion of the Frank-Starling curve.
* **C (MAP response to a 500 mL fluid challenge):** A fluid challenge can assess response, but it requires actually giving the fluid. PLR gives similar information **before** committing to the bolus.
* **D (Heart rate decrease):** Heart rate is affected by many variables in sepsis and is an **unreliable guide** to fluid responsiveness.
* **E (SBP 88 mmHg):** Persistent hypotension may reflect vasodilation rather than volume responsiveness. Blood pressure alone does not show whether more fluid will increase stroke volume.
  `,
  references: [
    'Evans L, Rhodes A, Alhazzani W, et al. Surviving Sepsis Campaign: International Guidelines for Management of Sepsis and Septic Shock 2021. Crit Care Med. 2021;49(11):e1063-e1143.',
    'Zampieri FG, Bagshaw SM, Semler MW. Fluid Therapy for Critically Ill Adults With Sepsis: A Review. JAMA. 2023;329(22):1967-1980.',
    'Chaves RCF, Barbas CSV, Queiroz VNF, et al. Assessment of Fluid Responsiveness Using Pulse Pressure Variation, Stroke Volume Variation, Plethysmographic Variability Index, Central Venous Pressure, and Inferior Vena Cava Variation. Crit Care. 2024;28(1):289.'
  ],
  skillTested: 'Use dynamic hemodynamic assessment to predict fluid responsiveness',
  linkedChapter: 'sepsis',
  verdictOneLineSummary:
    'After initial fluids, use dynamic testing like passive leg raise with stroke-volume monitoring, not CVP alone, to decide on more fluid.'
};
