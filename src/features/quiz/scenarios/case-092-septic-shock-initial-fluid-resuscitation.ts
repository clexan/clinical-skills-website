import { QuizScenario } from '../quizData';

export const case092: QuizScenario = {
  id: 'case-092',
  slug: 'septic-shock-initial-fluid-resuscitation-30-ml-kg',
  title: 'Initial Fluid Resuscitation in Septic Shock',
  category: 'Emergency',
  difficulty: 'Medium',
  vignette: `A 58-year-old man presents to the emergency department with fever, confusion, and hypotension. He has a history of well-controlled type 2 diabetes. Vital signs show blood pressure 78/52 mmHg, heart rate 118 bpm, respiratory rate 24/min, temperature 39.2°C, and oxygen saturation 94% on room air. Physical examination reveals warm extremities with bounding pulses, delayed capillary refill of 4 seconds, and skin mottling on the knees. Laboratory studies show WBC 18,500/microL, lactate 4.8 mmol/L, and creatinine 1.9 mg/dL (baseline 1.0). Urinalysis reveals pyuria. The patient weighs 80 kg.`,
  question: 'According to the Surviving Sepsis Campaign guidelines, what is the recommended initial fluid resuscitation strategy for this patient?',
  options: [
    {
      id: 'A',
      text: 'At least 30 mL/kg (2,400 mL) of IV crystalloid within the first 3 hours, delivered in serial boluses with reassessment',
      isCorrect: true
    },
    {
      id: 'B',
      text: '500 mL normal saline bolus, then reassess before giving additional fluid',
      isCorrect: false
    },
    {
      id: 'C',
      text: '10 mL/kg crystalloid bolus followed by immediate vasopressor initiation',
      isCorrect: false
    },
    {
      id: 'D',
      text: 'Continuous crystalloid infusion at 250 mL/hour until blood pressure normalizes',
      isCorrect: false
    },
    {
      id: 'E',
      text: 'Hydroxyethyl starch 30 mL/kg for more effective volume expansion',
      isCorrect: false
    }
  ],
  explanation: `
**Correct Answer: A - At least 30 mL/kg (2,400 mL) of IV crystalloid within the first 3 hours, delivered in serial boluses with reassessment**

**Clinical Reasoning:**
This patient has **septic shock** from a likely urinary source, with hypotension and lactate elevation indicating sepsis-induced hypoperfusion. The 2021 Surviving Sepsis Campaign recommends giving **at least 30 mL/kg of IV crystalloid within the first 3 hours** for sepsis-induced hypoperfusion or septic shock. For this 80 kg patient, that is **2,400 mL**. Current reviews also emphasize giving this volume as **serial boluses** with repeated clinical reassessment rather than as a single blind infusion.

Observational data cited by the guidelines found that failure to administer 30 mL/kg within 3 hours was associated with higher in-hospital mortality, slower resolution of hypotension, and longer ICU stay. This recommendation still applies broadly, including in many patients with common comorbidities, though the pace and monitoring strategy may need adjustment.

**Why Others Are Wrong:**
* **B (500 mL then reassess):** Reassessment matters, but **500 mL alone is inadequate** as the recommended initial target in septic shock.
* **C (10 mL/kg then vasopressors):** Early vasopressors may be needed in severe shock, but **10 mL/kg is below the recommended starting fluid volume** and should not replace appropriate initial resuscitation.
* **D (250 mL/hour infusion):** This is **too slow**. It would deliver only 750 mL in 3 hours, well below the recommended amount for initial shock resuscitation.
* **E (Hydroxyethyl starch):** Starches are **not recommended in sepsis** because they increase harm, including acute kidney injury and mortality.
  `,
  references: [
    'Evans L, Rhodes A, Alhazzani W, et al. Surviving Sepsis Campaign: International Guidelines for Management of Sepsis and Septic Shock 2021. Crit Care Med. 2021;49(11):e1063-e1143.',
    'Meyer NJ, Prescott HC. Sepsis and Septic Shock. N Engl J Med. 2024;391(22):2133-2146.',
    'Arnold MJ. Surviving Sepsis: Updated Guidelines From the Society of Critical Care Medicine. Am Fam Physician. 2022;106(5):589-590.'
  ],
  skillTested: 'Apply initial 30 mL/kg crystalloid resuscitation target in septic shock',
  linkedChapter: 'sepsis',
  verdictOneLineSummary:
    'Septic shock needs prompt crystalloid resuscitation: at least 30 mL/kg in the first 3 hours, given as boluses with reassessment.'
};
