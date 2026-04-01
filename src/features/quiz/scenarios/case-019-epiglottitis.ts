import { QuizScenario } from '../quizData';

export const case019: QuizScenario = {
  id: 'case-019',
  slug: 'epiglottitis-airway-management',
  title: 'Acute Sore Throat and Drooling in an Adult',
  category: 'Emergency',
  difficulty: 'Hard',
  vignette: `
A 35-year-old man comes to the emergency department because of a 1-day history of worsening shortness of breath and difficulty breathing. Yesterday, he developed a sore throat with painful swallowing. He has psoriasis and his only medication is topical calcipotriene. 

**Physical Examination:**
- **Appearance:** Panicked, drooling from the mouth, hoarse voice.
- **Vitals:** Temp 40.0°C (104.0°F), Pulse 85/min, Resp 26/min, BP 114/75 mmHg.
- **Oxygen Saturation:** 91% on room air.
- **Respiratory:** Inspiratory stridor with retractions along the rib cage.
- **Cardiopulmonary:** No other abnormalities noted.
  `,
  question: 'Which of the following is the most appropriate next step in management?',
  options: [
    { id: 'A', text: 'Administration of dexamethasone', isCorrect: false },
    { id: 'B', text: 'Administration of ceftriaxone', isCorrect: false },
    { id: 'C', text: 'X-ray of the lateral neck', isCorrect: false },
    { id: 'D', text: 'Bag-mask ventilation with 100% oxygen', isCorrect: true },
    { id: 'E', text: 'Cricothyroidotomy', isCorrect: false }
  ],
  explanation: `
**Correct Answer: (D) Bag-mask ventilation with 100% oxygen**

This patient's acute respiratory distress (tachypnea, inspiratory stridor, accessory muscle use), severe odynophagia (painful swallowing), high fever, and **drooling** are classic for **acute epiglottitis**.

**Management of Impending Airway Obstruction:**
* **Immediate Priority:** In an unstable patient with signs of partial airway obstruction and hypoxia (91% saturation), the first step is providing respiratory support with **100% oxygen via bag-mask ventilation**. This serves as a vital bridge to definitive airway management.
* **Definitive Airway:** Emergency **endotracheal intubation** should be performed in a controlled setting (ideally the operating room) by a practitioner experienced in difficult airways, using direct visualization or video-laryngoscopy.
* **Adult Epiglottitis:** While historically a pediatric disease caused by *Haemophilus influenzae* type b (Hib), it is increasingly seen in adults following the introduction of the Hib vaccine.

**Why other options are less appropriate:**
* **Lateral Neck X-ray (C):** While the "thumbprint sign" is diagnostic, "never leave the patient's side" and "do not send to radiology" are the rules for suspected epiglottitis with respiratory distress. Airway stabilization takes precedence over imaging.
* **Ceftriaxone (B):** IV antibiotics are essential but must wait until the airway is secured.
* **Dexamethasone (A):** More relevant for croup (barking cough, no drooling) in children; its role in epiglottitis is adjunctive and not the immediate priority.
* **Cricothyroidotomy (E):** This is a "last resort" procedure in a "cannot intubate, cannot ventilate" scenario. The initial attempt should be bag-mask ventilation followed by controlled intubation.

**Clinical Pearl:** Drooling in an adult with a sore throat should always raise immediate suspicion for epiglottitis or peritonsillar abscess.
  `,
  references: [
    "UpToDate: Epiglottitis in adults: Clinical features and diagnosis.",
    "Walls RM, et al. Rosen's Emergency Medicine: Concepts and Clinical Practice. 9th Ed."
  ]
};
