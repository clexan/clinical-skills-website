import { QuizScenario } from '../quizData';

export const case053: QuizScenario = {
  id: 'case-053',
  slug: 'pea-epinephrine-timing',
  title: 'PEA Arrest: Early Epinephrine',
  category: 'Emergency',
  difficulty: 'Medium',
  vignette:
    'A 72-year-old woman is found unresponsive in her hospital bed. She has no pulse. The monitor shows organized electrical activity at 45 bpm without a palpable pulse, consistent with pulseless electrical activity. High-quality CPR is started immediately, and IV access is established within 1 minute.',
  question: 'What is the MOST appropriate pharmacologic intervention?',
  options: [
    { id: 'A', text: 'Administer epinephrine 1 mg IV as soon as possible', isCorrect: true },
    { id: 'B', text: 'Administer atropine 1 mg IV for the bradycardic rhythm', isCorrect: false },
    { id: 'C', text: 'Administer amiodarone 300 mg IV to stabilize the rhythm', isCorrect: false },
    { id: 'D', text: 'Defer epinephrine until after 3 cycles of CPR', isCorrect: false },
    { id: 'E', text: 'Administer calcium chloride 1 g IV empirically', isCorrect: false }
  ],
  explanation: `
**Correct Answer: Administer epinephrine 1 mg IV as soon as possible**

For **non-shockable arrest rhythms** such as PEA and asystole, the recommended drug therapy is **epinephrine 1 mg IV/IO every 3 to 5 minutes**, with the **first dose given as soon as feasible**. The 2025 AHA adult ALS guideline specifically supports early epinephrine for non-shockable rhythms.

**Why the other options are wrong:**
- **B:** Atropine is not part of the modern cardiac arrest algorithm for PEA/asystole.
- **C:** Amiodarone is used for **shock-refractory VF/pVT**, not PEA.
- **D:** Delaying the first epinephrine dose in a non-shockable arrest goes against current ACLS guidance.
- **E:** Routine calcium administration during cardiac arrest is **not recommended** unless there is a specific indication such as hyperkalemia, hypocalcemia, or calcium channel blocker toxicity.
  `,
  references: [
    'Wigginton JG, et al. Part 9: Adult Advanced Life Support: 2025 American Heart Association Guidelines for Cardiopulmonary Resuscitation and Emergency Cardiovascular Care. Circulation. 2025;152(16_suppl_2):S538-S577. doi:10.1161/CIR.0000000000001376.',
    'Perman SM, et al. 2023 American Heart Association Focused Update on Adult Advanced Cardiovascular Life Support. Circulation. 2024;149(5):e254-e273. doi:10.1161/CIR.0000000000001194.',
    'Panchal AR, et al. Part 3: Adult Basic and Advanced Life Support: 2020 American Heart Association Guidelines for Cardiopulmonary Resuscitation and Emergency Cardiovascular Care. Circulation. 2020;142(16_suppl_2):S366-S468. doi:10.1161/CIR.0000000000000916.'
  ]
};
