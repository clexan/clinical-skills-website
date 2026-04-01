import { QuizScenario } from '../quizData';

export const case020: QuizScenario = {
  id: 'case-020',
  slug: 'epiglottitis-cicv-cricothyroidotomy',
  title: 'Failed Intubation in Acute Epiglottitis',
  category: 'Emergency',
  difficulty: 'Hard',
  vignette: `
This is a follow-up to the previous case. A 35-year-old man with acute epiglottitis has been receiving bag-mask ventilation for 10 minutes, but his respiratory distress is worsening. 

An anesthesiologist attempts endotracheal intubation using a fiberoptic guide but is unable to place the tube during the first attempt. The patient's respirations are now 31/min and pulse oximetry shows an oxygen saturation of 77%.
  `,
  question: 'Which of the following is the most appropriate next step in management?',
  options: [
    { id: 'A', text: 'Continue bag-mask ventilation and move to intensive care unit', isCorrect: false },
    { id: 'B', text: 'Perform tracheostomy', isCorrect: false },
    { id: 'C', text: 'Reattempt fiberoptic endotracheal intubation', isCorrect: false },
    { id: 'D', text: 'Perform surgical cricothyroidotomy', isCorrect: true },
    { id: 'E', text: 'Place a laryngeal mask', isCorrect: false }
  ],
  explanation: `
**Correct Answer: (D) Perform surgical cricothyroidotomy**

This patient is in a **"Cannot Intubate, Cannot Ventilate" (CICV)** scenario. His oxygen saturation is critically low (77%) and has not responded to bag-mask ventilation or the first intubation attempt.

**Management of CICV in Epiglottitis:**
* **The "One Attempt" Rule:** In adult patients with acute epiglottitis, it is generally recommended to make only **one attempt** at endotracheal intubation. Manipulation of the swollen epiglottis can cause immediate, complete airway obstruction.
* **Surgical Airway:** If the first attempt fails or if oxygenation cannot be maintained, the clinician must immediately proceed to an emergency **surgical cricothyroidotomy** at the bedside.
* **Anatomy:** Cricothyroidotomy is preferred over tracheostomy in emergencies because it is faster, uses more easily identifiable landmarks (the cricothyroid membrane), and involves less risk of significant bleeding.

**Why other options are less appropriate:**
* **Reattempt Intubation (C):** Additional attempts are contraindicated once the first expert attempt fails in a CICV scenario. Repeated trauma to the supraglottic tissues will only worsen the obstruction and prolong hypoxia.
* **Laryngeal Mask (E):** Supraglottic devices (LMAs) are contraindicated in epiglottitis because the obstruction is at or below the level where the device sits. It will not bypass the swollen epiglottis and may worsen the swelling.
* **Bag-Mask/ICU (A):** The patient is failing bag-mask ventilation (SpO2 77%). Moving the patient before securing the airway is unsafe and delays life-saving intervention.
* **Tracheostomy (B):** While a definitive airway, it is a complex surgical procedure usually performed in the OR. Cricothyroidotomy is the standard emergency surgical airway.

**Pediatric Note:** In children under 12, **needle cricothyroidotomy** with percutaneous transtracheal jet ventilation is preferred over surgical cricothyroidotomy due to anatomical differences (funnel-shaped larynx).
  `,
  references: [
    "Difficult Airway Society (DAS) 2015 guidelines for management of unanticipated difficult intubation in adults.",
    "UpToDate: Epiglottitis in adults: Treatment and prognosis."
  ]
};
