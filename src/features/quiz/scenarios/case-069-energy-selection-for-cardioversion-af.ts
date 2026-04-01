import { QuizScenario } from '../quizData';

export const case069: QuizScenario = {
  id: 'case-069',
  slug: 'energy-selection-for-cardioversion-af',
  title: 'Energy Selection for Synchronized Cardioversion',
  category: 'Cardiology',
  difficulty: 'Medium',
  vignette:
    'A 68-year-old woman with hypertension and diabetes presents with dyspnea and palpitations that began yesterday. Blood pressure is 82/54 mmHg, heart rate is 148 bpm, and oxygen saturation is 91% on room air. She is confused, with bibasilar crackles and jugular venous distension. ECG shows atrial fibrillation with rapid ventricular response. Immediate synchronized cardioversion is planned.',
  question: 'What is the MOST appropriate initial biphasic energy setting for synchronized cardioversion?',
  options: [
    { id: 'A', text: 'Start with 200 J biphasic energy', isCorrect: true },
    { id: 'B', text: 'Start with 50 J biphasic energy', isCorrect: false },
    { id: 'C', text: 'Start with 100 J biphasic energy', isCorrect: false },
    { id: 'D', text: 'Start with 360 J biphasic energy', isCorrect: false },
    { id: 'E', text: 'Start with 150 J biphasic energy', isCorrect: false }
  ],
  explanation: `
**Correct Answer: Start with 200 J biphasic energy**

This patient has **hemodynamically unstable atrial fibrillation**, so synchronized cardioversion is required. Current AHA and AF guideline recommendations favor **an initial biphasic energy of at least 200 J** for AF, with escalation if the first shock fails.

The evidence behind this change is that higher initial energy improves first-shock success, reduces repeated shocks, and has not shown excess cardiac injury compared with lower-energy strategies.

**Why the other options are wrong:**
- **B and C:** These lower energies may work for some organized atrial arrhythmias, but they are less effective than 200 J for AF.
- **D:** 360 J is safe in many settings, but current guidance recommends starting at **at least 200 J**, not necessarily maximum energy.
- **E:** 150 J is below the recommended threshold supported by contemporary AF cardioversion evidence.
  `,
  references: [
    'Joglar JA, Chung MK, Armbruster AL, et al. 2023 ACC/AHA/ACCP/HRS Guideline for the Diagnosis and Management of Atrial Fibrillation. J Am Coll Cardiol. 2024;83(1):109-279. doi:10.1016/j.jacc.2023.08.017.',
    'Wigginton JG, Agarwal S, Bartos JA, et al. Part 9: Adult Advanced Life Support: 2025 American Heart Association Guidelines for Cardiopulmonary Resuscitation and Emergency Cardiovascular Care. Circulation. 2025;152(16_suppl_2):S538-S577. doi:10.1161/CIR.0000000000001376.'
  ]
};
