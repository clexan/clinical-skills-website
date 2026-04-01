import { QuizScenario } from '../quizData';

export const case015: QuizScenario = {
  id: 'case-015',
  slug: 'pea-arrest-chest-compressions',
  title: 'Sudden Unresponsiveness After Coronary Stent Placement',
  category: 'Emergency',
  difficulty: 'Medium',
  vignette: `
Two days after coronary artery stent placement for a posterior myocardial infarction, a 70-year-old woman complains of difficulty breathing and retrosternal chest pain. She has a history of atrial fibrillation, for which she takes verapamil. Following stent placement, she was started on aspirin and clopidogrel. 

She appears to be in acute distress and is disoriented. Respirations are 22/min. Pulse oximetry on room air shows an oxygen saturation of 80%. Diffuse crackles are heard on auscultation. The patient is intubated and mechanical ventilation is started. 

Shortly afterwards, she becomes unresponsive. Heart sounds are inaudible and her carotid pulses are not palpable. The cardiac monitor shows normal sinus rhythm with T-wave inversion.
  `,
  question: 'Which of the following is the most appropriate next step in management?',
  options: [
    { id: 'A', text: 'Unsynchronized cardioversion', isCorrect: false },
    { id: 'B', text: 'Intravenous epinephrine therapy', isCorrect: false },
    { id: 'C', text: 'Chest compressions', isCorrect: true },
    { id: 'D', text: 'Intravenous amiodarone therapy', isCorrect: false },
    { id: 'E', text: 'Mild hypothermia therapy', isCorrect: false },
    { id: 'F', text: 'Coronary angiography', isCorrect: false },
    { id: 'G', text: 'Synchronized cardioversion', isCorrect: false }
  ],
  explanation: `
**Correct Answer: (C) Chest compressions**

This patient is in **cardiac arrest**, specifically **Pulseless Electrical Activity (PEA)**. The monitor shows an organized rhythm (normal sinus rhythm), but the patient has no palpable pulses and is unresponsive.

**Management of PEA:**
* **Immediate Action:** The first and most critical step in any cardiac arrest is the initiation of **high-quality chest compressions**. 
* **Prioritization:** While other interventions like epinephrine are part of the algorithm, they must never delay or interrupt the start of effective CPR.
* **Algorithm:** For non-shockable rhythms (PEA/Asystole), the focus is on continuous CPR, early epinephrine, and identifying reversible causes (H's and T's).

**Differential Diagnosis (Reversible Causes):**
In this post-procedural patient, potential etiologies include:
* **Tension Pneumothorax:** A potential complication following intubation and positive-pressure ventilation.
* **Hypoxia:** Suggested by her initial low oxygen saturation.
* **Thrombosis (Stent Thrombosis):** Given her recent coronary intervention.
* **Pulmonary Embolism:** Especially in a post-operative/immobile patient.

**Why other options are less appropriate:**
* **Defibrillation/Unsynchronized Cardioversion (A):** Only for VF or pulseless VT. It has no role in PEA.
* **Epinephrine (B):** Administered as soon as possible for PEA, but it follows the initiation of chest compressions.
* **Amiodarone (D):** Used for shockable rhythms (VF/pVT) that are refractory to defibrillation and epinephrine.
* **Coronary Angiography (F):** Important to consider *after* ROSC is achieved, particularly if stent thrombosis is suspected.
* **Synchronized Cardioversion (G):** Requires a pulse. It is used for unstable tachyarrhythmias (e.g., AF with RVR), not for cardiac arrest.
  `,
  references: [
    "AHA 2020 Guidelines for Cardiopulmonary Resuscitation and Emergency Cardiovascular Care.",
    "ACLS Provider Manual, American Heart Association."
  ]
};
