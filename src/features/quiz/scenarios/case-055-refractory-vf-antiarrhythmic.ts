import { QuizScenario } from '../quizData';

export const case055: QuizScenario = {
  id: 'case-055',
  slug: 'refractory-vf-antiarrhythmic',
  title: 'Refractory VF: Antiarrhythmic Choice',
  category: 'Emergency',
  difficulty: 'Hard',
  vignette:
    'A 55-year-old man remains in ventricular fibrillation despite 3 defibrillation attempts and ongoing high-quality CPR. He has already received epinephrine 1 mg IV after the second shock. The team is preparing for the next rhythm check, and IV access is secure.',
  question: 'What is the MOST appropriate antiarrhythmic intervention at this time?',
  options: [
    { id: 'A', text: 'Administer amiodarone 300 mg IV or lidocaine 1-1.5 mg/kg IV', isCorrect: true },
    { id: 'B', text: 'Administer magnesium sulfate 2 g IV empirically', isCorrect: false },
    { id: 'C', text: 'Administer procainamide by slow IV infusion', isCorrect: false },
    { id: 'D', text: 'Defer antiarrhythmic therapy until after several more shocks', isCorrect: false },
    { id: 'E', text: 'Administer sodium bicarbonate 50 mEq IV routinely', isCorrect: false }
  ],
  explanation: `
**Correct Answer: Administer amiodarone 300 mg IV or lidocaine 1-1.5 mg/kg IV**

This is **VF/pVT unresponsive to defibrillation**, so current ACLS guidance allows **either amiodarone or lidocaine**. These drugs do not replace CPR or defibrillation, but they may be considered once the rhythm is clearly shock-refractory.

**Why the other options are wrong:**
- **B:** Routine magnesium is not recommended in cardiac arrest; it is reserved mainly for torsades de pointes or another specific indication.
- **C:** Procainamide is not part of the standard cardiac arrest algorithm and is not practical during active arrest because it requires a slow infusion.
- **D:** Once VF is refractory to defibrillation, delaying antiarrhythmic therapy is not supported by the ACLS algorithm.
- **E:** Routine sodium bicarbonate is not recommended during cardiac arrest except in selected situations such as hyperkalemia or certain toxicologic arrests.
  `,
  references: [
    'Wigginton JG, et al. Part 9: Adult Advanced Life Support: 2025 American Heart Association Guidelines for Cardiopulmonary Resuscitation and Emergency Cardiovascular Care. Circulation. 2025;152(16_suppl_2):S538-S577. doi:10.1161/CIR.0000000000001376.',
    'Panchal AR, Berg KM, Kudenchuk PJ, et al. 2018 American Heart Association Focused Update on Advanced Cardiovascular Life Support Use of Antiarrhythmic Drugs During and Immediately After Cardiac Arrest. Circulation. 2018;138(23):e740-e749. doi:10.1161/CIR.0000000000000613.'
  ]
};
