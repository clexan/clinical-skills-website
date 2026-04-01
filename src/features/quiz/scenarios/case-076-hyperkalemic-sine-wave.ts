import { QuizScenario } from '../quizData';

export const case076: QuizScenario = {
  id: 'case-076',
  slug: 'hyperkalemic-sine-wave',
  title: 'Hyperkalemia With Widened QRS Mimicking Ventricular Tachycardia',
  category: 'Cardiology',
  difficulty: 'Hard',
  vignette:
    'A 62-year-old man with end-stage renal disease on hemodialysis has missed his last two dialysis sessions. He presents with progressive weakness and lightheadedness. Blood pressure is 92/58 mmHg and heart rate is 48 bpm. ECG shows a wide-complex bradycardic rhythm with absent P waves, a QRS duration of 180 ms, peaked T waves, and a sine-wave appearance. Point-of-care potassium is 8.2 mEq/L.',
  question: 'What is the MOST appropriate immediate intervention?',
  options: [
    {
      id: 'A',
      text: 'Administer IV calcium gluconate 1-2 g over 2-5 minutes for immediate membrane stabilization',
      isCorrect: true
    },
    { id: 'B', text: 'Give IV regular insulin with dextrose before any calcium', isCorrect: false },
    { id: 'C', text: 'Administer sodium bicarbonate as the first maneuver', isCorrect: false },
    { id: 'D', text: 'Treat the rhythm as ventricular tachycardia with amiodarone', isCorrect: false },
    { id: 'E', text: 'Arrange emergent dialysis as the only initial step', isCorrect: false }
  ],
  explanation: `
**Correct Answer: Administer IV calcium gluconate 1-2 g over 2-5 minutes for immediate membrane stabilization**

This is **life-threatening hyperkalemia with severe ECG toxicity**, approaching cardiac arrest. The immediate priority is **cardiac membrane stabilization with IV calcium**. Calcium does **not** lower the potassium concentration, but it buys time by reducing the immediate risk of fatal dysrhythmia.

After calcium, the next steps are to **shift potassium intracellularly** with insulin/dextrose and other temporizing therapies, and then **remove potassium** definitively, usually with dialysis in a patient with ESRD.

**Why the other options are wrong:**
- **B:** Insulin/dextrose is essential, but it is not the first move when the ECG is this unstable.
- **C:** Bicarbonate has a more limited and less reliable role than immediate calcium.
- **D:** This is hyperkalemic cardiotoxicity, not primary VT.
- **E:** Dialysis is definitive, but it is not fast enough to replace immediate calcium in a pre-arrest rhythm.
  `,
  references: [
    'Kim MJ, Valerio C, Knobloch GK. Potassium Disorders: Hypokalemia and Hyperkalemia. Am Fam Physician. 2023;107(1):59-70.',
    'Lindner G, Burdmann EA, Clase CM, et al. Acute Hyperkalemia in the Emergency Department: A Summary From a Kidney Disease: Improving Global Outcomes Conference. Eur J Emerg Med. 2020;27(5):329-337. doi:10.1097/MEJ.0000000000000731.',
    'Panchal AR, Bartos JA, Cabañas JG, et al. Part 3: Adult Basic and Advanced Life Support: 2020 American Heart Association Guidelines for Cardiopulmonary Resuscitation and Emergency Cardiovascular Care. Circulation. 2020;142(16_suppl_2):S366-S468. doi:10.1161/CIR.0000000000000916.'
  ]
};
