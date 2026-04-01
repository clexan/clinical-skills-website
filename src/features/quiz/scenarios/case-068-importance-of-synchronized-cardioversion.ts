import { QuizScenario } from '../quizData';

export const case068: QuizScenario = {
  id: 'case-068',
  slug: 'importance-of-synchronized-cardioversion',
  title: 'Importance of the Sync Button',
  category: 'Cardiology',
  difficulty: 'Hard',
  vignette:
    'A 62-year-old man with coronary artery disease presents with a regular narrow-complex tachycardia at 180 bpm. He is hypotensive, diaphoretic, and confused, so immediate cardioversion is planned. After etomidate is given, a junior resident charges the defibrillator to 100 J and delivers a shock. Immediately after the shock, the patient becomes pulseless and the monitor shows a chaotic irregular wide-complex rhythm consistent with ventricular fibrillation.',
  question: 'What is the MOST likely explanation for this deterioration, and what is the immediate next step?',
  options: [
    {
      id: 'A',
      text: 'An unsynchronized shock likely struck during the vulnerable period and induced ventricular fibrillation; start CPR and defibrillate immediately',
      isCorrect: true
    },
    {
      id: 'B',
      text: 'The original rhythm was probably misdiagnosed VT; give amiodarone before any further shocks',
      isCorrect: false
    },
    {
      id: 'C',
      text: 'The energy was too low and caused myocardial stunning; repeat synchronized cardioversion',
      isCorrect: false
    },
    {
      id: 'D',
      text: 'This represents worsening cardiogenic shock from the original tachycardia; begin vasopressors first',
      isCorrect: false
    },
    {
      id: 'E',
      text: 'This is a transient post-cardioversion rhythm; observe briefly for spontaneous recovery',
      isCorrect: false
    }
  ],
  explanation: `
**Correct Answer: An unsynchronized shock likely struck during the vulnerable period and induced ventricular fibrillation; start CPR and defibrillate immediately**

The most likely explanation is **failure to synchronize the shock to the QRS**, producing an **R-on-T event** that precipitated VF. The AF guideline explicitly warns that **unsynchronized or inappropriately synchronized cardioversion can induce VF** if shock energy is delivered during the vulnerable period on the T wave. It also emphasizes that the **sync feature must be turned on or confirmed before each shock**.

Now that the patient is pulseless in VF, this is a **shockable cardiac arrest**. The immediate response is **CPR plus unsynchronized defibrillation**.

**Why the other options are wrong:**
- **B:** Even if the original diagnosis were uncertain, the patient is now in VF and requires immediate defibrillation, not antiarrhythmic-first management.
- **C:** Myocardial stunning does not explain immediate conversion to pulseless VF.
- **D:** Vasopressors do not treat VF; electrical therapy is the priority.
- **E:** VF with no pulse is never an observation rhythm.
  `,
  references: [
    'Joglar JA, Chung MK, Armbruster AL, et al. 2023 ACC/AHA/ACCP/HRS Guideline for the Diagnosis and Management of Atrial Fibrillation. J Am Coll Cardiol. 2024;83(1):109-279. doi:10.1016/j.jacc.2023.08.017.',
    'Wigginton JG, Agarwal S, Bartos JA, et al. Part 9: Adult Advanced Life Support: 2025 American Heart Association Guidelines for Cardiopulmonary Resuscitation and Emergency Cardiovascular Care. Circulation. 2025;152(16_suppl_2):S538-S577. doi:10.1161/CIR.0000000000001376.'
  ]
};
