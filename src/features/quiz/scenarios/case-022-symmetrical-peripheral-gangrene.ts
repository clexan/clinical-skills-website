import { QuizScenario } from '../quizData';

export const case022: QuizScenario = {
  id: 'case-022',
  slug: 'symmetrical-peripheral-gangrene-vasopressors',
  title: 'Digital Necrosis and Vasopressor Use',
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

The persistent vasoplegia associated with septic shock frequently requires prolonged treatment with vasopressors to maintain a mean arterial blood pressure > 65 mm Hg. 

**Pathophysiology:**
Norepinephrine is a vasopressor that preferentially agonizes alpha-1 receptors, causing vasoconstriction and an increase in systemic vascular resistance. Prolonged alpha receptor agonism can cause distal arterioles and their branches (especially cutaneous branches) to constrict to the point of causing distal ischemia and consequent necrosis. 

**Clinical Presentation:**
This phenomenon is most commonly observed in the fingertips and distal toes (symmetrical peripheral gangrene) and manifests with symmetrical discoloration and coldness.

**Why other options are less appropriate:**
* **Cholesterol embolization (A):** Most commonly occurs after plaque rupture or vascular intervention (e.g., cardiac catheterization). While it causes "blue toe syndrome," bilateral and symmetric acute limb ischemia without a recent procedure is very unlikely.
* **Compartment pressures (B):** Lacks other findings of compartment syndrome such as pain with passive motion, tense edematous skin, or pain out of proportion to examination.
* **Deep vein thrombosis (C):** Typically manifests with pain and swelling of the affected leg; bilateral DVT is uncommon and usually doesn't present with pure distal necrosis without significant limb-wide edema.
* **Cryoglobulin-mediated vasculitis (D):** Commonly associated with hepatitis C or multiple myeloma; typically presents with arthralgia and palpable purpura.
* **Septic embolization (F):** A complication of infective endocarditis; usually presents with splinter hemorrhages, Janeway lesions, or a new murmur. Bilateral symmetric occlusion is highly unlikely.
  `,
  references: [
    "Symmetrical peripheral gangrene: a rare but dreadful complication of septic shock. BMJ Case Reports.",
    "Vincent JL, et al. The Textbook of Critical Care. 7th Ed."
  ]
};
