import { QuizScenario } from '../quizData';

export const case073: QuizScenario = {
  id: 'case-073',
  slug: 'preexcited-af-wpw',
  title: 'Pre-excited Atrial Fibrillation in Wolff-Parkinson-White Syndrome',
  category: 'Cardiology',
  difficulty: 'Hard',
  vignette:
    'A 28-year-old man presents with palpitations and lightheadedness that began 30 minutes ago. He is alert and oriented. Blood pressure is 102/68 mmHg and the ventricular rate is about 220 bpm. ECG shows an irregularly irregular wide-complex tachycardia with varying QRS widths and morphologies. A prior ECG showed a short PR interval and delta wave consistent with Wolff-Parkinson-White pattern.',
  question: 'Which of the following medication approaches is CONTRAINDICATED in this patient?',
  options: [
    {
      id: 'A',
      text: 'Adenosine, beta-blockers, calcium channel blockers, digoxin, and amiodarone are all contraindicated',
      isCorrect: true
    },
    {
      id: 'B',
      text: 'Only adenosine is contraindicated; beta-blockers and diltiazem are safe',
      isCorrect: false
    },
    { id: 'C', text: 'Amiodarone is preferred because it slows both the AV node and the accessory pathway safely', isCorrect: false },
    { id: 'D', text: 'Diltiazem is safe because it only affects the AV node', isCorrect: false },
    { id: 'E', text: 'Digoxin is safe because it slows AV nodal conduction without affecting the accessory pathway', isCorrect: false }
  ],
  explanation: `
**Correct Answer: Adenosine, beta-blockers, calcium channel blockers, digoxin, and amiodarone are all contraindicated**

This is **pre-excited atrial fibrillation**, an emergency rhythm in which atrial impulses can conduct rapidly over an accessory pathway. The 2023 AF guideline explicitly states that AV nodal blocking agents, including **verapamil, diltiazem, amiodarone, digoxin, adenosine, and beta-blockers**, are **contraindicated** because they can accelerate conduction over the pathway and precipitate **ventricular fibrillation or hemodynamic deterioration**.

For **stable** pre-excited AF, the preferred drugs are **IV procainamide or IV ibutilide**. For instability, use **immediate electrical cardioversion**.

**Why the other options are wrong:**
- **B:** It is not just adenosine. The whole AV nodal blocker group is dangerous here.
- **C:** Amiodarone is specifically listed as harmful in pre-excited AF.
- **D:** Diltiazem can worsen pathway-mediated ventricular response.
- **E:** Digoxin can also worsen conduction over the accessory pathway.
  `,
  references: [
    'Joglar JA, Chung MK, Armbruster AL, et al. 2023 ACC/AHA/ACCP/HRS Guideline for the Diagnosis and Management of Atrial Fibrillation. J Am Coll Cardiol. 2024;83(1):109-279. doi:10.1016/j.jacc.2023.08.017.',
    'Page RL, Joglar JA, Caldwell MA, et al. 2015 ACC/AHA/HRS Guideline for the Management of Adult Patients With Supraventricular Tachycardia. Heart Rhythm. 2016;13(4):e136-e221. doi:10.1016/j.hrthm.2015.09.019.',
    'Peng G, Zei PC. Diagnosis and Management of Paroxysmal Supraventricular Tachycardia. JAMA. 2024;331(7):601-610. doi:10.1001/jama.2024.0076.'
  ]
};
