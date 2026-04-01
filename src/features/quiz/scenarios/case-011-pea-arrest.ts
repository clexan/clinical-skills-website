import { QuizScenario } from '../quizData';

export const case011: QuizScenario = {
  id: 'case-011',
  slug: 'pea-arrest-management',
  title: 'Cardiac Arrest with a Non-Shockable Rhythm',
  category: 'Emergency',
  difficulty: 'Hard',
  vignette: `
A 55-year-old woman loses consciousness in the emergency department one hour after being admitted for sharp, acute chest pain and diaphoresis. There are no palpable pulses, and chest compressions are immediately started. 

Her medical history is significant for type 2 diabetes mellitus and breast cancer that was surgically treated 4 years ago. Prior to admission, the patient had been on a long bus ride. Her medications include tamoxifen, atorvastatin, metoprolol, metformin, and insulin. 

The cardiac monitor shows a sinus bradycardia at a rate of 40 bpm.
  `,
  question: 'Which of the following is the most appropriate next step in management?',
  options: [
    { id: 'A', text: 'Intravenous glucagon therapy', isCorrect: false },
    { id: 'B', text: 'Defibrillation', isCorrect: false },
    { id: 'C', text: 'Coronary angiography', isCorrect: false },
    { id: 'D', text: 'Intravenous epinephrine therapy', isCorrect: true },
    { id: 'E', text: 'Intravenous amiodarone therapy', isCorrect: false },
    { id: 'F', text: 'Hypothermia therapy', isCorrect: false },
    { id: 'G', text: 'Intravenous dextrose therapy', isCorrect: false }
  ],
  explanation: `
**Correct Answer: (D) Intravenous epinephrine therapy**

The absence of palpable pulses in the presence of an organized electrical rhythm (sinus bradycardia) confirms the diagnosis of **Pulseless Electrical Activity (PEA)**. 

**Management of PEA:**
PEA and Asystole are **non-shockable rhythms** in the ACLS algorithm. The primary management involves:
1.  **High-quality CPR** (chest compressions and ventilations).
2.  **Epinephrine 1 mg IV/IO**, repeated every 3–5 minutes.
3.  **Identification and treatment of reversible causes** (the "H's and T's").

**Clinical Context (Reversible Causes):**
In this patient, the recent long bus ride and history of tamoxifen use for breast cancer are significant risk factors for **Pulmonary Embolism (PE)**, which is one of the "T's" (Thrombosis, pulmonary) commonly associated with PEA arrest.

**Why other options are less appropriate:**
* **Defibrillation (B):** Only indicated for shockable rhythms—Ventricular Fibrillation (VF) and pulseless Ventricular Tachycardia (pVT).
* **Glucagon (A):** Used for beta-blocker overdose. While she takes metoprolol, the acute arrest setting requires standard ACLS first.
* **Amiodarone (E):** Used as an antiarrhythmic for refractory VF/pVT; it has no role in PEA or asystole.
* **Coronary Angiography (C):** While MI is a potential cause, the patient must first achieve **Return of Spontaneous Circulation (ROSC)** before undergoing invasive procedures.
* **Hypothermia (F):** Now referred to as Targeted Temperature Management (TTM), this is a post-cardiac arrest intervention for patients who remain comatose after ROSC.

The priority is maintaining perfusion through CPR and administering epinephrine to improve coronary and cerebral perfusion pressure.
  `,
  references: [
    "AHA 2020 Guidelines for Cardiopulmonary Resuscitation and Emergency Cardiovascular Care.",
    "ACLS Provider Manual, American Heart Association."
  ]
};
