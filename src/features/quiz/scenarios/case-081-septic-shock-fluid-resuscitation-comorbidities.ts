import { QuizScenario } from '../quizData';

export const case081: QuizScenario = {
  id: 'case-081',
  slug: 'septic-shock-fluid-resuscitation-heart-failure-renal-failure',
  title: 'Septic Shock and Fluid Resuscitation in Comorbidity',
  category: 'Emergency',
  difficulty: 'Hard',
  vignette: `A 58-year-old woman with a history of chronic kidney disease (baseline creatinine 2.8 mg/dL) and heart failure with reduced ejection fraction (EF 30%) presents to the ED with fever, productive cough, and dyspnea for 3 days. She appears ill and is in moderate respiratory distress. Her vital signs are: temperature 38.7°C (101.7°F), heart rate 118 bpm, blood pressure 84/50 mmHg, respiratory rate 28 breaths/min, and oxygen saturation 88% on room air. Her medications include furosemide, carvedilol, lisinopril, and spironolactone. She has no known drug allergies. On examination, she has crackles bilaterally and jugular venous distension. Chest X-ray shows a right lower lobe infiltrate with mild pulmonary edema. Initial lactate is 3.2 mmol/L. You diagnose septic shock secondary to pneumonia.`,
  question: 'What is the MOST appropriate approach to fluid resuscitation in this patient?',
  options: [
    {
      id: 'A',
      text: 'Administer 30 mL/kg crystalloid bolus as per sepsis guidelines, with frequent reassessment for volume overload and early vasopressor initiation',
      isCorrect: true
    },
    {
      id: 'B',
      text: 'Withhold IV fluids entirely due to heart failure and renal dysfunction; start vasopressors immediately',
      isCorrect: false
    },
    {
      id: 'C',
      text: 'Give a reduced fluid bolus of 10 mL/kg, then reassess; avoid the full 30 mL/kg recommendation',
      isCorrect: false
    },
    {
      id: 'D',
      text: 'Administer the full 30 mL/kg bolus over 6-8 hours to minimize the risk of pulmonary edema',
      isCorrect: false
    },
    {
      id: 'E',
      text: 'Obtain central venous pressure (CVP) measurement before any fluid administration to guide volume status',
      isCorrect: false
    }
  ],
  explanation: `
**Correct Answer: A - Administer 30 mL/kg crystalloid bolus as per sepsis guidelines, with frequent reassessment for volume overload and early vasopressor initiation**

**Clinical Reasoning:**
This case highlights the challenging balance between **aggressive fluid resuscitation** mandated by sepsis guidelines and the risk of **volume overload** in patients with heart failure and renal dysfunction. The Surviving Sepsis Campaign 2021 guidelines recommend **30 mL/kg crystalloid bolus** for sepsis-induced hypoperfusion or septic shock, to be administered within the first 3 hours. However, the guidelines also acknowledge that patients with heart failure or renal disease require **careful monitoring and individualized approaches**. The recommended strategy is to initiate the fluid bolus while performing **frequent reassessments** (every 15-30 minutes) for signs of volume overload (worsening respiratory status, increasing oxygen requirements, worsening pulmonary edema on exam). **Early vasopressor initiation** should be considered if hypotension persists despite initial fluid administration or if signs of volume overload develop. Studies show that while fluid resuscitation is critical in septic shock, delayed or inadequate fluid administration increases mortality, but so does excessive fluid accumulation. The key is dynamic assessment and willingness to transition to vasopressors early in high-risk patients.

**Why Others are Wrong:**
* **B (Withhold fluids entirely):** Complete avoidance of fluid resuscitation in septic shock is inappropriate and increases mortality. Even patients with heart failure require some fluid resuscitation; the approach should be modified, not eliminated. Vasopressors alone without addressing hypovolemia can worsen tissue perfusion.
* **C (Reduced bolus of 10 mL/kg):** While this seems conservative, there is no evidence supporting arbitrary reduction of the recommended bolus. The guidelines recommend 30 mL/kg with reassessment, not a predetermined reduced volume. Inadequate initial resuscitation is associated with worse outcomes.
* **D (Slow administration over 6-8 hours):** The fluid bolus should be given rapidly (typically over 1-3 hours for the full 30 mL/kg) to quickly restore perfusion. Slow administration over 6-8 hours defeats the purpose of rapid resuscitation and delays achievement of resuscitation targets.
* **E (CVP-guided therapy):** CVP is not recommended for guiding fluid resuscitation in sepsis. Multiple studies have shown CVP is a poor predictor of fluid responsiveness and should not be used to determine fluid administration. Dynamic assessments (passive leg raise, pulse pressure variation) are preferred if available.
  `,
  references: [
    'Evans L, Rhodes A, Alhazzani W, et al. Surviving Sepsis Campaign: International Guidelines for Management of Sepsis and Septic Shock 2021. Crit Care Med. 2021;49(11):e1063-e1143.',
    'Marik PE, Lemson J. Fluid responsiveness: an evolution of our understanding. Br J Anaesth. 2014;112(4):617-620.',
    'Malbrain ML, Marik PE, Witters I, et al. Fluid overload, de-resuscitation, and outcomes in critically ill or injured patients: a systematic review with suggestions for clinical practice. Anaesthesiol Intensive Ther. 2014;46(5):361-380.',
    'National Heart, Lung, and Blood Institute Prevention and Early Treatment of Acute Lung Injury Clinical Trials Network. Early neuromuscular blockade in the acute respiratory distress syndrome. N Engl J Med. 2019;380(21):1997-2008.',
    'Marik PE, Baram M, Vahid B. Does central venous pressure predict fluid responsiveness? A systematic review of the literature and the tale of seven mares. Chest. 2008;134(1):172-178.'
  ]
};
