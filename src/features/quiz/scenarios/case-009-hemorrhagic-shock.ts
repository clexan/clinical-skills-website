import { QuizScenario } from '../quizData';

export const case009: QuizScenario = {
  id: 'case-009',
  slug: 'hemorrhagic-shock-first-response',
  title: 'Cargo Plane Crash and Initial Shock Response',
  category: 'Trauma',
  difficulty: 'Medium',
  vignette: `
A 33-year-old pilot is transported to the emergency department after she was involved in a cargo plane crash during a military training exercise. She is conscious but confused. She has no history of serious illness and takes no medications. 

Physical examination shows numerous lacerations and ecchymoses over the face, trunk, and upper extremities. The lower extremities are cool to the touch. There is continued bleeding despite the application of firm pressure to the sites of injury.
  `,
  question: 'The first physiologic response to develop in this patient was most likely which of the following?',
  options: [
    { id: 'A', text: 'Increased heart rate', isCorrect: true },
    { id: 'B', text: 'Increased production of lactic acid', isCorrect: false },
    { id: 'C', text: 'Decreased urine output', isCorrect: false },
    { id: 'D', text: 'Increased firing of chemoreceptors', isCorrect: false },
    { id: 'E', text: 'Increased capillary refill time', isCorrect: false },
    { id: 'F', text: 'Decreased systolic blood pressure', isCorrect: false },
    { id: 'G', text: 'Increased respiratory rate', isCorrect: false }
  ],
  explanation: `
**Correct Answer: (A) Increased heart rate**

An increase in heart rate is the **first compensatory mechanism** for hypovolemic (hemorrhagic) shock and can be seen as early as Class I hemorrhage (up to 15% blood loss).

**Pathophysiology:**
Blood loss results in decreased stroke volume. In response, the body triggers the **baroreceptor reflex** (via carotid sinus and aortic arch sensors), which increases sympathetic outflow. This elevation in heart rate helps maintain cardiac output ($$CO = HR \\times SV$$) despite the drop in volume.

**Why other options are less appropriate:**
* **Blood Pressure (F):** Systolic blood pressure is typically maintained in Class I and II shock due to compensatory peripheral vasoconstriction. A drop in systolic BP usually signifies Class III shock (>30% blood loss).
* **Urine Output (C) & Respiratory Rate (G):** These typically do not deviate from normal until Class II hemorrhage (15–30% loss).
* **Lactic Acid (B) & Chemoreceptors (D):** These are later responses to tissue hypoxia and metabolic acidosis, occurring once compensatory mechanisms fail to maintain adequate oxygen delivery.
* **Capillary Refill (E):** While peripheral vasoconstriction is early, delayed capillary refill in the skin/nails is generally classified as a Class II finding.

**Classification of Hemorrhagic Shock (ATLS):**
* **Class I:** HR < 100, Normal BP, RR 14-20, Urine > 30mL/hr.
* **Class II:** HR 100-120, Normal BP, RR 20-30, Urine 20-30mL/hr.
* **Class III:** HR 120-140, **Decreased BP**, RR 30-40, Urine 5-15mL/hr.
  `,
  references: [
    "Advanced Trauma Life Support (ATLS) Student Course Manual. 10th Ed.",
    "Guyton and Hall Textbook of Medical Physiology."
  ]
};
