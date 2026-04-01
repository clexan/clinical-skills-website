import { QuizScenario } from '../quizData';

export const case021: QuizScenario = {
  id: 'case-021',
  slug: 'drug-induced-vasoconstriction-necrosis',
  title: 'Bilateral Pedal Cyanosis in the ICU',
  category: 'Emergency',
  difficulty: 'Medium',
  vignette: `
An 85-year-old man develops bilateral pedal cyanosis and beginning necrosis of the toes 5 days after admission to the intensive care unit for community-acquired pneumonia and severe hypotension. 

The patient has received empiric broad-spectrum antibiotics and continuous intravenous norepinephrine and vasopressin since admission. Medical history is remarkable for hypertension and type 2 diabetes mellitus. 

**Physical Examination:**
- **Skin:** Dusky blue discoloration over the distal toes on both feet. All extremities are cold to touch.
- **Pulmonary:** Decreased breath sounds at the left lung base; dullness to percussion.
- **Cardiac:** No abnormalities.
- **Imaging:** Chest X-ray shows opacification of the left lower lung field.
  `,
  question: 'Which of the following is the most likely cause of this patient\'s skin necrosis?',
  options: [
    { id: 'A', text: 'Cholesterol embolization', isCorrect: false },
    { id: 'B', text: 'Increased compartment pressures', isCorrect: false },
    { id: 'C', text: 'Deep vein thrombosis', isCorrect: false },
    { id: 'D', text: 'Cryoglobulin-mediated vasculitis', isCorrect: false },
    { id: 'E', text: 'Drug-induced vasoconstriction', isCorrect: true },
    { id: 'F', text: 'Septic embolization', isCorrect: false }
  ],
  explanation: `
**Correct Answer: (E) Drug-induced vasoconstriction**

This patient's bilateral, symmetric distal cyanosis and necrosis (often termed "symmetrical peripheral gangrene") is a known complication of high-dose **vasopressor therapy**, particularly **norepinephrine** and **vasopressin**.

**Pathophysiology:**
* **Mechanism:** Vasopressors like norepinephrine (α1-agonist) and vasopressin (V1-agonist) cause potent peripheral vasoconstriction to maintain core perfusion in the setting of distributive or septic shock. 
* **Critical Ischemia:** At high doses or with prolonged use, this can lead to severe digital ischemia and necrosis, especially in patients with pre-existing vascular disease (e.g., this patient's history of diabetes and hypertension). 
* **Symmetry:** The bilateral and symmetric nature of the findings strongly points toward a systemic/pharmacological cause rather than an embolic one.

**Why other options are less appropriate:**
* **Septic Embolization (F):** Usually associated with infective endocarditis. It typically presents with asymmetric, localized lesions (e.g., Janeway lesions, splinter hemorrhages) rather than symmetric, bilateral gangrene of all toes.
* **Cholesterol Embolization (A):** Typically occurs after a vascular procedure (e.g., cardiac cath) in a patient with atherosclerosis. While it causes "blue toe syndrome," it usually presents with livedo reticularis and acute kidney injury (eosinophiluria).
* **Deep Vein Thrombosis (C):** Causes swelling, redness, and pain, usually unilaterally. Phlegmasia cerulea dolens (venous gangrene) is a rare, severe form but is typically not bilateral and symmetric unless there is a major IVC obstruction.
* **Cryoglobulin-mediated Vasculitis (D):** Usually associated with Hepatitis C. It presents with palpable purpura, arthralgias, and weakness, rather than acute digital necrosis in a shock state.
* **Compartment Syndrome (B):** Results from localized pressure increases, usually after trauma or reperfusion, and would not present with symmetric toe necrosis across both feet.

**Management:**
If possible, the dose of vasopressors should be titrated down as the shock resolves to improve peripheral perfusion.
  `,
  references: [
    "Vincent JL, et al. The Textbook of Critical Care. 7th Ed.",
    "Symmetrical peripheral gangrene: a rare but dreadful complication of septic shock. BMJ Case Reports."
  ]
};
