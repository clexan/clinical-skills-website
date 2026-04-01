import { QuizScenario } from '../quizData';

export const case079: QuizScenario = {
  id: 'case-079',
  slug: 'sepsis-lactate-clearance-resuscitation-endpoint',
  title: 'Sepsis: Lactate Clearance as a Resuscitation Endpoint',
  category: 'Emergency',
  difficulty: 'Medium',
  vignette: `A 45-year-old woman presents to the ED with a 1-day history of severe abdominal pain, nausea, and vomiting. She appears acutely ill and diaphoretic. Her vital signs are: temperature 38.9°C (102°F), heart rate 128 bpm, blood pressure 92/58 mmHg, respiratory rate 24 breaths/min, and oxygen saturation 96% on room air. She has a history of cholecystectomy 5 years ago and takes no regular medications. She has no known drug allergies. On examination, her abdomen is diffusely tender with guarding, most pronounced in the right upper quadrant. You suspect ascending cholangitis or intra-abdominal sepsis. Initial lactate at 15:00 is 5.8 mmol/L. You initiate the sepsis bundle: blood cultures are obtained, broad-spectrum antibiotics are administered at 15:30, and a 30 mL/kg crystalloid bolus is started. At 16:00, her blood pressure is 98/62 mmHg and heart rate is 118 bpm.`,
  question: 'What is the MOST appropriate next step regarding lactate monitoring?',
  options: [
    {
      id: 'A',
      text: 'Remeasure lactate within 2-4 hours to assess lactate clearance and guide ongoing resuscitation',
      isCorrect: true
    },
    {
      id: 'B',
      text: 'Lactate monitoring is only necessary if the patient remains hypotensive; no repeat needed at this time',
      isCorrect: false
    },
    {
      id: 'C',
      text: 'Repeat lactate in 12-24 hours as part of routine laboratory monitoring',
      isCorrect: false
    },
    {
      id: 'D',
      text: 'Lactate clearance is not a reliable marker; focus solely on blood pressure and urine output',
      isCorrect: false
    },
    {
      id: 'E',
      text: 'Obtain arterial blood gas for lactate measurement instead of venous lactate for greater accuracy',
      isCorrect: false
    }
  ],
  explanation: `
**Correct Answer: A - Remeasure lactate within 2-4 hours to assess lactate clearance and guide ongoing resuscitation**

**Clinical Reasoning:**
**Lactate clearance** is a critical component of sepsis resuscitation and prognostication. The Surviving Sepsis Campaign 2021 guidelines recommend remeasuring lactate within **2-4 hours** if initial lactate is elevated (≥2 mmol/L). This patient's initial lactate of 5.8 mmol/L indicates significant tissue hypoperfusion and septic shock. Lactate clearance—defined as a decrease in lactate levels over time—serves as a marker of adequate resuscitation and tissue perfusion. Studies show that failure to clear lactate (typically defined as >10-20% reduction or normalization) is associated with increased mortality and should prompt escalation of care, including additional fluid resuscitation, vasopressor initiation, or consideration of other causes of persistent hypoperfusion. Serial lactate measurements guide the adequacy and duration of resuscitation efforts. A repeat lactate at 2-4 hours (approximately 17:00-19:00 in this case) will help determine if the initial interventions are effective.

**Why Others are Wrong:**
* **B (Only if hypotensive):** Lactate clearance monitoring is indicated for all patients with elevated initial lactate, regardless of blood pressure response. Tissue hypoperfusion can persist despite blood pressure normalization (cryptic shock).
* **C (Repeat in 12-24 hours):** This delay is too long. Early lactate clearance assessment (2-4 hours) allows for timely adjustment of resuscitation strategies. Waiting 12-24 hours misses the critical window for intervention.
* **D (Not reliable):** Lactate clearance is a validated marker of resuscitation adequacy and is associated with improved outcomes. While blood pressure and urine output are important, lactate provides additional information about tissue perfusion.
* **E (Arterial vs. venous):** Venous lactate is equivalent to arterial lactate for clinical decision-making in sepsis and is preferred because it is less invasive and easier to obtain. Arterial sampling offers no clinical advantage for lactate measurement.
  `,
  references: [
    'Evans L, Rhodes A, Alhazzani W, et al. Surviving Sepsis Campaign: International Guidelines for Management of Sepsis and Septic Shock 2021. Crit Care Med. 2021;49(11):e1063-e1143.',
    'Nguyen HB, Rivers EP, Knoblich BP, et al. Early lactate clearance is associated with improved outcome in severe sepsis and septic shock. Crit Care Med. 2004;32(8):1637-1642.',
    'Marty P, Roquilly A, Vallée F, et al. Lactate clearance for death prediction in severe sepsis or septic shock patients during the first 24 hours in Intensive Care Unit: an observational study. Ann Intensive Care. 2013;3(1):3.',
    'Casserly B, Phillips GS, Schorr C, et al. Lactate measurements in sepsis-induced tissue hypoperfusion: results from the Surviving Sepsis Campaign database. Crit Care Med. 2015;43(3):567-573.'
  ]
};
