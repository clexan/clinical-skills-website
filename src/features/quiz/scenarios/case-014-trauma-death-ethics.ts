import { QuizScenario } from '../quizData';

export const case014: QuizScenario = {
  id: 'case-014',
  slug: 'trauma-resuscitation-ethics-training',
  title: 'Resuscitation Futility and Ethics in Training',
  category: 'Emergency',
  difficulty: 'Hard',
  vignette: `
A 66-year-old man is brought to the emergency department by ambulance 30 minutes after having fallen from the balcony of his fifth-floor apartment. EMTs arrived 10 minutes after the fall and performed CPR en route. On arrival, he is unconscious (GCS 3) with nonpalpable pulses and asystole. 

CPR is continued, and he is intubated. Point-of-care ultrasound shows visible sliding of the pleura (ruling out tension pneumothorax) and no cardiac wall motion. There is no evidence of pericardial fluid, ventricular dilation, or IVC collapse. After 20 minutes of continued CPR in the ED (30 minutes total cumulative), the ECG persistently shows asystole. 

**Other Findings:**
- **Pupils:** 9 mm and nonreactive to light.
- **End-tidal CO2 (ETCO2):** 8 mmHg (N = 35–45).
- **Electrolytes:** Within normal limits.

Two first-year residents ask the attending if they can practice femoral vein catheterization and scalpel cricothyroidotomy on the patient. There are no advance directives or emergency contacts available in the records.
  `,
  question: 'At this time, which of the following is the most appropriate instruction by the attending physician to the team?',
  options: [
    { id: 'A', text: 'Continue CPR and attempt to contact the patient\'s family', isCorrect: false },
    { id: 'B', text: 'Pronounce death and attempt to contact the patient\'s family', isCorrect: true },
    { id: 'C', text: 'Pronounce death and allow both procedures to be performed under supervision', isCorrect: false },
    { id: 'D', text: 'Pronounce death and allow femoral vein catheterization under supervision', isCorrect: false },
    { id: 'E', text: 'Continue CPR and allow femoral vein catheterization under supervision', isCorrect: false },
    { id: 'F', text: 'Continue CPR and allow both procedures to be performed under supervision', isCorrect: false }
  ],
  explanation: `
**Correct Answer: (B) Pronounce death and attempt to contact the patient's family**

This case addresses two critical areas: the determination of futility in traumatic cardiac arrest and the ethics of practicing medical procedures on the newly deceased.

**Determination of Futility:**
Resuscitative efforts in this patient are considered futile based on several poor prognostic factors:
* **Mechanism:** High-energy blunt trauma (fall from 5th floor).
* **Duration:** Cumulative CPR time >30 minutes without ROSC or a rhythm change.
* **Objective Markers:** Persistent asystole, brainstem areflexia (nonreactive pupils), and an **ETCO2 < 10 mmHg** despite high-quality CPR and intubation. Low ETCO2 is a highly reliable predictor of failure to achieve ROSC.

**Ethics of Training on the Deceased:**
While practicing procedures on the newly deceased provides valuable hands-on training for residents, it is governed by strict ethical and legal guidelines:
* **Consent:** If the patient's prior preferences are unknown (no advance directives), **explicit consent from the next of kin is required** for any training procedure, regardless of the level of invasiveness.
* **Identification:** In the absence of contact info, physicians are permitted to search belongings or share info with authorities to identify and locate family.
* **Dignity:** Procedures should only be performed if consent is obtained, ensuring a respectful environment.

**Why other options are less appropriate:**
* **Continuing CPR (A, E, F):** In the face of overwhelming evidence of futility, continuing CPR is not medically indicated and delays the appropriate process of death notification and family contact.
* **Allowing procedures without consent (C, D):** It is ethically inappropriate to use a body for training purposes without prior consent from the patient or current consent from the legal next of kin.
  `,
  references: [
    "AMA Code of Medical Ethics Opinion 11.2.2: Training on the Newly Deceased.",
    "Guidelines for Terminating Resuscitation in Out-of-Hospital Traumatic Cardiopulmonary Arrest. NAEMSP/ACS-COT.",
    "Uniform Anatomical Gifts Act (UAGA)."
  ]
};
