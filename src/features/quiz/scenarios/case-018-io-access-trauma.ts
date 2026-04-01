import { QuizScenario } from '../quizData';

export const case018: QuizScenario = {
  id: 'case-018',
  slug: 'traumatic-amputation-io-access',
  title: 'Traumatic Amputation and Vascular Access in Shock',
  category: 'Trauma',
  difficulty: 'Medium',
  vignette: `
A 27-year-old soldier stationed in Libya sustains a shrapnel injury during an attack, causing a traumatic above-elbow amputation. The resulting arterial bleed is managed with a tourniquet prior to transport. 

On arrival, he is alert and oriented. His pulse is 145/min, respirations are 28/min, and blood pressure is 95/52 mmHg. 

**Physical Examination:**
- **Lungs:** Symmetric chest rise, clear to auscultation.
- **Abdomen:** Unremarkable.
- **Extremities:** Multiple shrapnel wounds; a tourniquet is in place around the right upper extremity; the right proximal forearm has been amputated. 

One large-bore intravenous (IV) catheter is placed in the left antecubital fossa. Despite multiple attempts, medical staff are unable to establish a second point of IV access.
  `,
  question: 'Which of the following is the most appropriate next step in management?',
  options: [
    { id: 'A', text: 'Irrigate the shrapnel wounds', isCorrect: false },
    { id: 'B', text: 'Establish central venous access', isCorrect: false },
    { id: 'C', text: 'Replace the tourniquet with a pressure dressing', isCorrect: false },
    { id: 'D', text: 'Establish intraosseous access', isCorrect: true },
    { id: 'E', text: 'Perform endotracheal intubation', isCorrect: false }
  ],
  explanation: `
**Correct Answer: (D) Establish intraosseous access**

This patient is in **Class III hemorrhagic shock** (tachycardia >140, tachypnea, hypotension). Following the ABCDE approach, airway (A) and breathing (B) are currently stable. The priority is **Circulation (C)**, which requires rapid volume resuscitation.

**Vascular Access in Trauma:**
* **Standard Protocol:** The standard trauma protocol requires **two large-bore (14-16 gauge) peripheral IV lines**. 
* **The "90-Second Rule":** If peripheral IV access cannot be established within two attempts or 90 seconds in a critically ill patient, **intraosseous (IO) access** should be established immediately. 
* **IO vs. IV:** IO access is faster to establish than a central line in an emergency and can be used to administer any fluids, blood products, or medications that can be given intravenously.

**Why other options are less appropriate:**
* **Central Venous Access (B):** While a valid route for resuscitation, placing a central line is significantly more time-consuming and technically difficult than an IO insertion during the initial "Golden Hour" of trauma.
* **Tourniquet Management (C):** Releasing a tourniquet in a hemodynamically unstable patient risks recurrent life-threatening hemorrhage and is contraindicated until the patient is stabilized.
* **Wound Irrigation (A):** Important for preventing long-term infection but secondary to immediate life-saving circulation management.
* **Intubation (E):** The patient is currently conscious with a protected airway. His tachypnea is a compensatory response to shock, not primary respiratory failure.

**Summary of Hemorrhage Control:** The tourniquet successfully addressed the primary source of bleeding, but the patient now requires aggressive volume replacement to manage the consequences of the blood already lost.
  `,
  references: [
    "Advanced Trauma Life Support (ATLS) Student Course Manual. 10th Ed.",
    "Tactical Combat Casualty Care (TCCC) Guidelines 2021."
  ]
};
