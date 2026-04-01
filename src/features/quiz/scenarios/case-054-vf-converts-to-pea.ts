import { QuizScenario } from '../quizData';

export const case054: QuizScenario = {
  id: 'case-054',
  slug: 'vf-converts-to-pea',
  title: 'Rhythm Switch During Resuscitation',
  category: 'Emergency',
  difficulty: 'Hard',
  vignette:
    'A 65-year-old man in cardiac arrest initially presented with ventricular fibrillation. After the second defibrillation attempt and 2 minutes of CPR, a rhythm check shows organized electrical activity at 70 bpm, but the patient remains pulseless. Epinephrine has not yet been given.',
  question: 'What is the MOST appropriate next step in management?',
  options: [
    { id: 'A', text: 'Resume CPR immediately and administer epinephrine 1 mg IV', isCorrect: true },
    { id: 'B', text: 'Deliver another defibrillation shock for the organized rhythm', isCorrect: false },
    { id: 'C', text: 'Administer amiodarone 300 mg IV before resuming CPR', isCorrect: false },
    { id: 'D', text: 'Check for a pulse for 30 seconds before making any decisions', isCorrect: false },
    { id: 'E', text: 'Perform synchronized cardioversion at 100 J', isCorrect: false }
  ],
  explanation: `
**Correct Answer: Resume CPR immediately and administer epinephrine 1 mg IV**

This patient has transitioned from **VF to PEA**, which changes the algorithm from a **shockable** to a **non-shockable** arrest pathway. Once PEA is identified, the priorities are:

1. **Immediate resumption of high-quality CPR**
2. **Epinephrine 1 mg IV/IO**
3. **Search for reversible causes**

An organized rhythm without a pulse is **not ROSC**. A pulse check should be brief, and if no definite pulse is felt, compressions should restart immediately.

**Why the other options are wrong:**
- **B:** PEA is not a shockable rhythm.
- **C:** Amiodarone is for refractory VF/pVT, not PEA, and should not delay CPR.
- **D:** Pulse checks should not exceed about 10 seconds because longer pauses worsen compression fraction.
- **E:** Synchronized cardioversion is for unstable tachyarrhythmias **with a pulse**, not cardiac arrest.
  `,
  references: [
    'Kleinman ME, et al. Part 7: Adult Basic Life Support: 2025 American Heart Association Guidelines for Cardiopulmonary Resuscitation and Emergency Cardiovascular Care. Circulation. 2025;152(16_suppl_2):S448-S478. doi:10.1161/CIR.0000000000001369.',
    'Wigginton JG, et al. Part 9: Adult Advanced Life Support: 2025 American Heart Association Guidelines for Cardiopulmonary Resuscitation and Emergency Cardiovascular Care. Circulation. 2025;152(16_suppl_2):S538-S577. doi:10.1161/CIR.0000000000001376.',
    'Panchal AR, et al. Part 3: Adult Basic and Advanced Life Support: 2020 American Heart Association Guidelines for Cardiopulmonary Resuscitation and Emergency Cardiovascular Care. Circulation. 2020;142(16_suppl_2):S366-S468. doi:10.1161/CIR.0000000000000916.'
  ]
};
