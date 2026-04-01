import { QuizScenario } from '../quizData';

export const case056: QuizScenario = {
  id: 'case-056',
  slug: 'fine-vf-vs-asystole',
  title: 'Fine VF vs Asystole',
  category: 'Emergency',
  difficulty: 'Hard',
  vignette:
    'A 68-year-old woman is in cardiac arrest. After 8 minutes of CPR, a rhythm check shows a nearly flat tracing with only minimal undulations in lead II. The team is uncertain whether this represents true asystole or fine ventricular fibrillation.',
  question: 'What is the MOST appropriate next step to clarify the rhythm and guide management?',
  options: [
    { id: 'A', text: 'Check the rhythm in a second lead and increase gain if available', isCorrect: true },
    { id: 'B', text: 'Deliver immediate defibrillation assuming this is fine VF', isCorrect: false },
    { id: 'C', text: 'Resume CPR and treat as asystole without further rhythm analysis', isCorrect: false },
    { id: 'D', text: 'Administer epinephrine and reassess the rhythm in 2 minutes', isCorrect: false },
    { id: 'E', text: 'Attempt transcutaneous pacing immediately', isCorrect: false }
  ],
  explanation: `
**Correct Answer: Check the rhythm in a second lead and increase gain if available**

When the tracing is nearly flat, one major pitfall is mistaking **fine VF** for **asystole**. The safest immediate step is to **confirm the rhythm in another lead** and ensure the monitor gain is adequate. That helps avoid two errors:

1. **Missing fine VF**, which is a shockable rhythm
2. **Shocking true asystole**, which is not

**Why the other options are wrong:**
- **B:** Defibrillation should not be given for confirmed asystole, so the rhythm should be clarified first if uncertainty remains.
- **C:** Treating presumed asystole without checking another lead can miss fine VF.
- **D:** Epinephrine is appropriate for asystole/PEA, but delaying rhythm clarification could postpone a needed shock if this is actually VF.
- **E:** Transcutaneous pacing is not recommended for established asystolic cardiac arrest and would distract from effective ACLS care.
  `,
  references: [
    'Kleinman ME, et al. Part 7: Adult Basic Life Support: 2025 American Heart Association Guidelines for Cardiopulmonary Resuscitation and Emergency Cardiovascular Care. Circulation. 2025;152(16_suppl_2):S448-S478. doi:10.1161/CIR.0000000000001369.',
    'Wigginton JG, et al. Part 9: Adult Advanced Life Support: 2025 American Heart Association Guidelines for Cardiopulmonary Resuscitation and Emergency Cardiovascular Care. Circulation. 2025;152(16_suppl_2):S538-S577. doi:10.1161/CIR.0000000000001376.',
    'Zipes DP, et al. ACC/AHA/ESC 2006 Guidelines for Management of Patients With Ventricular Arrhythmias and the Prevention of Sudden Cardiac Death. J Am Coll Cardiol. 2006;48(5):e247-e346. doi:10.1016/j.jacc.2006.07.010.'
  ]
};
