import { QuizScenario } from '../quizData';

export const case077: QuizScenario = {
  id: 'case-077',
  slug: 'sepsis-1hr-bundle-cultures-antibiotics',
  title: 'Sepsis 1-Hour Bundle: Cultures and Antibiotics',
  category: 'Emergency',
  difficulty: 'Medium',
  vignette: `A 68-year-old woman presents to the ED with a 2-day history of productive cough, fever, and progressive dyspnea. She appears ill and is breathing rapidly. Her vital signs are: temperature 39.2°C (102.6°F), heart rate 118 bpm, blood pressure 88/54 mmHg, respiratory rate 28 breaths/min, and oxygen saturation 89% on room air. She has a history of type 2 diabetes and hypertension, takes metformin and lisinopril, and has no known drug allergies. On examination, she has decreased breath sounds and crackles in the right lower lung field. You suspect community-acquired pneumonia with septic shock. The time is now 14:00 (2:00 PM).`,
  question: 'What is the MOST appropriate immediate next step in management?',
  options: [
    {
      id: 'A',
      text: 'Obtain blood cultures, then administer broad-spectrum antibiotics within 1 hour of sepsis recognition',
      isCorrect: true
    },
    {
      id: 'B',
      text: 'Administer antibiotics immediately, then obtain blood cultures within 45 minutes',
      isCorrect: false
    },
    {
      id: 'C',
      text: 'Order chest X-ray and wait for radiographic confirmation before starting antibiotics',
      isCorrect: false
    },
    {
      id: 'D',
      text: 'Obtain sputum culture and gram stain to guide antibiotic selection before administration',
      isCorrect: false
    },
    {
      id: 'E',
      text: 'Start vasopressors first to stabilize blood pressure before obtaining cultures or giving antibiotics',
      isCorrect: false
    }
  ],
  explanation: `
**Correct Answer: A - Obtain blood cultures, then administer broad-spectrum antibiotics within 1 hour of sepsis recognition**

**Clinical Reasoning:**
This patient meets criteria for septic shock (suspected infection with hypotension requiring vasopressors and lactate >2 mmol/L). The Surviving Sepsis Campaign 2021 guidelines emphasize the **1-hour bundle**, which includes: (1) measuring lactate, (2) obtaining blood cultures **before** antibiotics, (3) administering broad-spectrum antibiotics, (4) beginning rapid fluid resuscitation (30 mL/kg crystalloid for hypotension or lactate ≥4 mmol/L), and (5) applying vasopressors if hypotensive during or after fluid resuscitation. **Blood cultures should be obtained before antibiotics whenever possible**, but antibiotics must not be delayed more than 45 minutes if cultures cannot be obtained promptly. The entire bundle should be completed within 1 hour of sepsis/septic shock recognition. Each hour of delay in antibiotic administration increases mortality by approximately 7.6% in septic shock.

**Why Others are Wrong:**
* **B (Antibiotics before cultures):** While antibiotics should not be delayed beyond 45 minutes if cultures cannot be obtained, the preferred sequence is cultures first, then antibiotics, as long as antibiotics are given within the 1-hour window. Giving antibiotics before cultures significantly reduces the diagnostic yield of blood cultures.
* **C (Wait for chest X-ray):** Diagnostic imaging should never delay antibiotic administration in suspected sepsis. Clinical suspicion is sufficient to initiate the sepsis bundle.
* **D (Wait for sputum culture):** Sputum cultures have poor sensitivity and specificity and should never delay antibiotic therapy. Empiric broad-spectrum coverage is indicated immediately.
* **E (Vasopressors first):** While vasopressors are part of the bundle for refractory hypotension, they should not delay blood culture collection or antibiotic administration. These interventions should occur in parallel, not sequentially.
  `,
  references: [
    'Evans L, Rhodes A, Alhazzani W, et al. Surviving Sepsis Campaign: International Guidelines for Management of Sepsis and Septic Shock 2021. Crit Care Med. 2021;49(11):e1063-e1143.',
    'Kumar A, Roberts D, Wood KE, et al. Duration of hypotension before initiation of effective antimicrobial therapy is the critical determinant of survival in human septic shock. Crit Care Med. 2006;34(6):1589-1596.',
    'Seymour CW, Gesten F, Prescott HC, et al. Time to Treatment and Mortality during Mandated Emergency Care for Sepsis. N Engl J Med. 2017;376(23):2235-2244.'
  ]
};
