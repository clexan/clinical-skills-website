import { QuizScenario } from '../quizData';

export const case064: QuizScenario = {
  id: 'case-064',
  slug: 'atrial-flutter-2-to-1',
  title: 'Atrial Flutter With 2:1 Conduction',
  category: 'Cardiology',
  difficulty: 'Hard',
  vignette:
    'A 58-year-old woman with hypertension presents with palpitations that began earlier today. Blood pressure is 128/76 mmHg and heart rate is 150 bpm. She is comfortable and hemodynamically stable. ECG shows a regular narrow-complex tachycardia at 150 bpm with sawtooth flutter waves in leads II, III, and aVF, consistent with atrial flutter with 2:1 AV conduction. Her CHA₂DS₂-VASc score is 3.',
  question: 'What is the MOST appropriate management approach for this patient?',
  options: [
    { id: 'A', text: 'Begin rate control with a beta-blocker or diltiazem/verapamil and manage anticoagulation using AF stroke-risk principles', isCorrect: true },
    { id: 'B', text: 'Perform immediate cardioversion without anticoagulation considerations because flutter has negligible stroke risk', isCorrect: false },
    { id: 'C', text: 'Administer adenosine 6 mg IV to terminate the flutter circuit', isCorrect: false },
    { id: 'D', text: 'Defer anticoagulation until after cardioversion because symptoms started today', isCorrect: false },
    { id: 'E', text: 'Administer flecainide alone as the first acute step', isCorrect: false }
  ],
  explanation: `
**Correct Answer: Begin rate control with a beta-blocker or diltiazem/verapamil and manage anticoagulation using AF stroke-risk principles**

This is **typical atrial flutter with 2:1 conduction**. In a stable patient, **rate control** is appropriate with an IV or oral beta-blocker or a nondihydropyridine calcium channel blocker. Just as important, stroke prevention in atrial flutter should follow the **same risk-based approach used for atrial fibrillation**. The 2015 ACC/AHA/HRS SVT guideline explicitly recommends anticoagulation for atrial flutter according to AF risk stratification.

**Why the other options are wrong:**
- **B:** Atrial flutter does carry thromboembolic risk, so anticoagulation issues cannot be ignored simply because the rhythm is flutter rather than AF.
- **C:** Adenosine may transiently increase AV block and make flutter waves easier to see, but it does **not** terminate the flutter circuit.
- **D:** Anticoagulation decisions should not be postponed just because symptoms began recently; stroke-risk assessment still matters.
- **E:** Flecainide is not the best first acute step here and can be problematic without prior assessment of structural heart disease and AV nodal blockade.
  `,
  references: [
    'Page RL, Joglar JA, Caldwell MA, et al. 2015 ACC/AHA/HRS Guideline for the Management of Adult Patients With Supraventricular Tachycardia. J Am Coll Cardiol. 2016;67(13):e27-e115. doi:10.1016/j.jacc.2015.08.856.',
    'Joglar JA, Chung MK, Armbruster AL, et al. 2023 ACC/AHA/ACCP/HRS Guideline for the Diagnosis and Management of Atrial Fibrillation. J Am Coll Cardiol. 2024;83(1):109-279. doi:10.1016/j.jacc.2023.08.017.',
    'Wigginton JG, Agarwal S, Bartos JA, et al. Part 9: Adult Advanced Life Support: 2025 American Heart Association Guidelines for Cardiopulmonary Resuscitation and Emergency Cardiovascular Care. Circulation. 2025;152(16_suppl_2):S538-S577. doi:10.1161/CIR.0000000000001376.'
  ]
};
