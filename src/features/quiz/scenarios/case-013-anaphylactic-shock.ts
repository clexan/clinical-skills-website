import { QuizScenario } from '../quizData';

export const case013: QuizScenario = {
  id: 'case-013',
  slug: 'anaphylactic-shock-management',
  title: 'Sudden Respiratory Distress and Hypotension After Seafood',
  category: 'Emergency',
  difficulty: 'Medium',
  vignette: `
A 43-year-old woman is brought to the emergency department 10 minutes after the sudden onset of shortness of breath, dry cough, nausea, and an itchy rash. The symptoms started 15 minutes after eating at a local seafood restaurant. 

**Medical History:**
- Hypertension (treated with enalapril).
- Exercise-induced asthma (uses albuterol inhaler as needed).
- Smoking: 20-pack-year history.

**Physical Examination:**
- **Appearance:** Uncomfortable and anxious.
- **Vitals:** Pulse 124/min, Resp 22/min (labored), BP 82/68 mmHg.
- **Oxygen Saturation:** 97% on room air.
- **Skin:** Erythematous patches and wheals over trunk, back, and extremities.
- **HEENT:** Lips slightly swollen; no swelling of the tongue or uvula.
- **Lungs:** Diffuse expiratory wheezing throughout both lung fields.

Empiric treatment with her albuterol inhaler has not improved her symptoms.
  `,
  question: 'Which of the following is the most appropriate next step in the management of this patient?',
  options: [
    { id: 'A', text: 'Intramuscular epinephrine administration', isCorrect: true },
    { id: 'B', text: 'Intravenous methylprednisolone administration', isCorrect: false },
    { id: 'C', text: 'Nebulized albuterol administration', isCorrect: false },
    { id: 'D', text: 'Endotracheal intubation', isCorrect: false },
    { id: 'E', text: 'Intravenous diphenhydramine and cimetidine administration', isCorrect: false }
  ],
  explanation: `
**Correct Answer: (A) Intramuscular epinephrine administration**

This patient presents with **anaphylactic shock** (likely triggered by seafood), characterized by multi-system involvement: cutaneous (hives, lip swelling), respiratory (dyspnea, wheezing), cardiovascular (hypotension, tachycardia), and gastrointestinal (nausea).

**Management of Anaphylaxis:**
* **First-line Treatment:** **Intramuscular (IM) epinephrine** (1:1000 concentration) is the single most important intervention. It should be administered immediately in the mid-outer thigh.
* **Mechanism:** Epinephrine's alpha-1 agonist effects cause vasoconstriction (increasing BP and decreasing mucosal edema), while its beta-2 effects cause bronchodilation.
* **Timing:** Delays in epinephrine administration are directly associated with increased mortality and biphasic reactions.

**Why other options are less appropriate:**
* **Methylprednisolone (B):** Glucocorticoids are adjunctive and take hours to work. They may help prevent biphasic reactions but do not treat the acute life-threatening symptoms.
* **Nebulized Albuterol (C):** While it helps with bronchospasm, it does not treat the upper airway edema, hypotension, or cutaneous symptoms.
* **Intubation (D):** Reserved for patients in respiratory arrest or those with severe, progressive oropharyngeal edema (stridor). This patient's wheezing is lower airway, and her blood pressure is the more immediate threat.
* **Antihistamines (E):** H1 and H2 blockers help with itching and hives but do **not** treat life-threatening respiratory or cardiovascular compromise.

**Note on ACE inhibitors:** This patient takes enalapril. ACE inhibitors can worsen anaphylaxis by interfering with the breakdown of bradykinin, potentially making the reaction more severe or refractory to treatment.
  `,
  references: [
    "World Allergy Organization (WAO) Anaphylaxis Guidance 2020.",
    "AAAAI/ACAAI Anaphylaxis Practice Parameter Update 2020."
  ]
};
