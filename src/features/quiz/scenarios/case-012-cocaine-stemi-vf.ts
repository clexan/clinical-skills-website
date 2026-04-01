import { QuizScenario } from '../quizData';

export const case012: QuizScenario = {
  id: 'case-012',
  slug: 'cocaine-induced-stemi-vf',
  title: 'Sudden Loss of Consciousness During Chest Pain Evaluation',
  category: 'Cardiology',
  difficulty: 'Hard',
  vignette: `
A 42-year-old man is brought to the emergency department 20 minutes after the sudden onset of severe chest pain, diaphoresis, shortness of breath, and palpitations. His symptoms occurred while he was at a party. He has a 24-pack-year smoking history and uses cocaine occasionally, with the last use three hours ago. 

**Physical Examination:**
- **Appearance:** Pale, anxious.
- **Vitals:** Pulse 110/min, BP 178/106 mmHg, Resp 24/min.
- **Eyes:** Pupils are dilated and react sluggishly to light.
- **Lungs:** Clear to auscultation.

An ECG initially shows sinus tachycardia with ST-segment elevation in leads II, III, and aVF. While recording the ECG, the patient suddenly loses consciousness. The cardiac monitor now shows a rapid, completely disorganized rhythm without identifiable P waves, QRS complexes, or T waves.
  `,
  question: 'Which of the following is the most appropriate next step in management?',
  options: [
    { id: 'A', text: 'Administer lidocaine', isCorrect: false },
    { id: 'B', text: 'Unsynchronized cardioversion', isCorrect: true },
    { id: 'C', text: 'Coronary angiography', isCorrect: false },
    { id: 'D', text: 'Administer amiodarone', isCorrect: false },
    { id: 'E', text: 'Administer epinephrine', isCorrect: false },
    { id: 'F', text: 'Synchronized cardioversion', isCorrect: false }
  ],
  explanation: `
**Correct Answer: (B) Unsynchronized cardioversion**

The patient's clinical presentation (cocaine use, inferior STEMI) has progressed to **Ventricular Fibrillation (VF)**, as evidenced by the sudden loss of consciousness and the disorganized rhythm on the monitor.

**Management of VF:**
* **Defibrillation (Unsynchronized Cardioversion):** This is the only effective treatment to convert VF into a perfusing rhythm. It should be performed immediately.
* **CPR:** High-quality chest compressions should be initiated immediately and continued until the defibrillator is charged and ready to shock.
* **Context:** The initial STEMI was likely caused by cocaine-induced coronary vasospasm or acute thrombosis.

**Why other options are less appropriate:**
* **Synchronized Cardioversion (F):** Used for organized rhythms like Atrial Fibrillation or VT with a pulse. It requires a QRS complex to "sync" the shock to avoid the R-on-T phenomenon. In VF, there are no QRS complexes, so the machine will not fire in synced mode.
* **Amiodarone (D) & Lidocaine (A):** Antiarrhythmics used for refractory VF (after several shocks and epinephrine), but not as the initial management.
* **Epinephrine (E):** Used in the ACLS algorithm after the second shock, but electricity is the priority for a witnessed VF arrest.
* **Coronary Angiography (C):** Essential once the patient achieves ROSC, but cannot be performed during active cardiac arrest.

**Cocaine and STEMI:** Cocaine increases myocardial oxygen demand while simultaneously causing coronary vasoconstriction. This "supply-demand" mismatch can lead to myocardial infarction and subsequent lethal arrhythmias like VF.
  `,
  references: [
    "AHA 2020 Guidelines for Cardiopulmonary Resuscitation and Emergency Cardiovascular Care.",
    "2022 ACC/AHA Guideline for the Diagnosis and Management of Patients With Myocardial Infarction."
  ]
};
