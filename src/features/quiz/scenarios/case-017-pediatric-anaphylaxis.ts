import { QuizScenario } from '../quizData';

export const case017: QuizScenario = {
  id: 'case-017',
  slug: 'pediatric-anaphylaxis-post-cefazolin',
  title: 'Sudden Hypotension and Wheezing in a 10-Year-Old Boy',
  category: 'Emergency',
  difficulty: 'Medium',
  vignette: `
A 10-year-old boy is brought to the emergency department after a fall from a horse. He has severe pain in his right forearm. He has a history of asthma and atopy. Current medications include an albuterol inhaler and hydrocortisone cream. 

Examination shows an open fracture of the right forearm. The patient is given an infusion of 1 L 0.9% saline, cefazolin, morphine, and ondansetron. The forearm is splinted, and surgical consent is obtained. 

Fifteen minutes later, the patient complains of shortness of breath. 

**Physical Examination:**
- **Vitals:** Temp 37.0°C (98.6°F), Pulse 130/min, Resp 25/min, BP 80/54 mmHg.
- **Oxygen Saturation:** 96% on room air.
- **Skin:** Generalized urticaria and mild lip swelling.
- **Lungs:** Scattered wheezing throughout both lung fields; no stridor.
- **Oropharynx:** Normal.
  `,
  question: 'Which of the following is the most appropriate next step in management?',
  options: [
    { id: 'A', text: 'Administer an additional 2-L bolus of 0.9% saline', isCorrect: false },
    { id: 'B', text: 'Administer nebulized albuterol', isCorrect: false },
    { id: 'C', text: 'Administer intravenous diphenhydramine', isCorrect: false },
    { id: 'D', text: 'Administer vancomycin and piperacillin-tazobactam', isCorrect: false },
    { id: 'E', text: 'Administer intravenous methylprednisolone', isCorrect: false },
    { id: 'F', text: 'Administer intramuscular epinephrine', isCorrect: true },
    { id: 'G', text: 'Perform endotracheal intubation', isCorrect: false }
  ],
  explanation: `
**Correct Answer: (F) Administer intramuscular epinephrine**

This patient is experiencing **anaphylaxis**, most likely triggered by the administration of **cefazolin** (a beta-lactam antibiotic). He meets the clinical criteria for anaphylaxis due to the rapid onset of multi-system involvement: cutaneous (urticaria, lip swelling), respiratory (dyspnea, wheezing), and cardiovascular (hypotension, tachycardia).

**Management of Anaphylaxis:**
* **First-line Therapy:** **Intramuscular (IM) epinephrine** (1:1000 concentration) is the gold standard and must be administered immediately. In children, the dose is 0.01 mg/kg (max 0.3 mg) IM in the mid-outer thigh.
* **Mechanism:** Epinephrine's alpha-1 effects increase systemic vascular resistance (treating hypotension), while its beta-2 effects cause bronchodilation and decrease mediator release from mast cells.
* **Urgency:** A delay in epinephrine administration is the primary factor associated with fatality in anaphylaxis.

**Why other options are less appropriate:**
* **Antihistamines (C) & Steroids (E):** These are adjunctive therapies. Antihistamines help with hives/itching, and steroids may reduce the risk of a biphasic reaction, but neither treats life-threatening airway or circulatory collapse.
* **IV Fluids (A):** While fluid boluses are indicated for persistent hypotension in anaphylaxis, they should be administered *after* or concurrent with the initial dose of IM epinephrine.
* **Albuterol (B):** May be used for refractory wheezing but does not address the systemic nature of the shock.
* **Intubation (G):** Not indicated here as there are no signs of upper airway obstruction (no stridor, normal oropharynx).
* **Antibiotics (D):** Septic shock is unlikely given the rapid onset and the presence of urticaria/wheezing.

**Pre-existing Conditions:** The patient's history of asthma is a significant risk factor for more severe or fatal anaphylaxis.
  `,
  references: [
    "World Allergy Organization (WAO) Anaphylaxis Guidance 2020.",
    "Practice Parameter: Anaphylaxis—a 2020 practice parameter update. AAAAI/ACAAI."
  ]
};
