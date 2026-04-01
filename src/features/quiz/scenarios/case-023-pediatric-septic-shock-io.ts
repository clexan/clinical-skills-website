import { QuizScenario } from '../quizData';

export const case023: QuizScenario = {
  id: 'case-023',
  slug: 'pediatric-septic-shock-io-access',
  title: 'Lethargy and Hypotension in a 3-Week-Old Infant',
  category: 'Emergency',
  difficulty: 'Hard',
  vignette: `
A 3-week-old boy is brought to the emergency department by his parents because of a 3-day history of progressive lethargy and difficulty feeding. He was born at term and did not have difficulty feeding previously. 

**Physical Examination:**
- **Vitals:** Temp 39.4°C (103°F), Pulse 220/min, Resp 45/min, BP 50/30 mmHg.
- **Oxygen Saturation:** 97% on 100% oxygen.
- **General:** Lethargic, dry mucous membranes, delayed capillary refill time, and cool skin with poor turgor.

Despite multiple attempts by the nursing staff, they are unable to establish peripheral intravenous access.
  `,
  question: 'Which of the following is the most appropriate next step in management?',
  options: [
    { id: 'A', text: 'Rapid sequence intubation', isCorrect: false },
    { id: 'B', text: 'Intramuscular epinephrine', isCorrect: false },
    { id: 'C', text: 'Femoral vein cannulation', isCorrect: false },
    { id: 'D', text: 'Internal jugular vein cannulation', isCorrect: false },
    { id: 'E', text: 'Intraosseous cannulation', isCorrect: true },
    { id: 'F', text: 'Ultrasound-guided antecubital vein cannulation', isCorrect: false },
    { id: 'G', text: 'Umbilical vein cannulation', isCorrect: false }
  ],
  explanation: `
**Correct Answer: (E) Intraosseous cannulation**

This infant presents with classic signs of **septic shock**: high fever, extreme tachycardia (220/min), hypotension (50/30 mmHg), and poor perfusion. In pediatric resuscitation, establishing rapid vascular access is a critical priority.

**Vascular Access Guidelines:**
* **Intraosseous (IO) Access:** Indicated in critically ill children if peripheral intravenous access cannot be established within **three attempts or 90 seconds**. 
* **Speed and Success:** IO access is preferred over central venous catheters (femoral or jugular) in the acute phase because it is faster to perform, requires less technical skill, and has a very high first-attempt success rate.
* **Sites:** The most common site in infants and children is the **proximal tibia**.

**Why other options are less appropriate:**
* **Umbilical Vein (G):** While a great option in newborns, the umbilical vein typically closes within **10–14 days** of birth. At 3 weeks old, it is unlikely to be patent.
* **Central Lines (C, D):** Internal jugular or femoral cannulation is too time-consuming in an unstable infant needing immediate fluid resuscitation.
* **Intramuscular Epinephrine (B):** IM epinephrine is for anaphylaxis. In septic shock, vasopressors are given IV or IO, and only *after* initial fluid resuscitation has failed.
* **Intubation (A):** While he may eventually need it, his oxygenation is currently stable. The more immediate life-threat is circulatory collapse (hypotension).
* **Ultrasound-guided IV (F):** Even for experts, this is slower than an IO needle in a crashing infant.

The immediate goal is a 20 mL/kg bolus of isotonic crystalloid via the new IO line.
  `,
  references: [
    "PALS (Pediatric Advanced Life Support) Provider Manual, American Heart Association.",
    "Surviving Sepsis Campaign International Guidelines for the Management of Septic Shock and Sepsis-Associated Organ Dysfunction in Children (2020)."
  ]
};
