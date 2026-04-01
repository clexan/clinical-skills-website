import { QuizScenario } from '../quizData';

export const case066: QuizScenario = {
  id: 'case-066',
  slug: 'adenosine-diagnostic-narrow-complex-tachycardia',
  title: 'Adenosine as a Diagnostic and Therapeutic Tool',
  category: 'Cardiology',
  difficulty: 'Hard',
  vignette:
    'A 45-year-old woman presents with palpitations that began 2 hours ago. Blood pressure is 132/78 mmHg and heart rate is 168 bpm. She is alert and hemodynamically stable. ECG shows a regular narrow-complex tachycardia, but at this rate it is difficult to tell whether this is AV nodal reentrant tachycardia or atrial flutter with 2:1 conduction. Vagal maneuvers have already been attempted without success.',
  question: 'What is the MOST appropriate next step to both clarify the rhythm mechanism and potentially terminate the arrhythmia?',
  options: [
    { id: 'A', text: 'Administer adenosine 6 mg IV rapid push with continuous ECG monitoring', isCorrect: true },
    { id: 'B', text: 'Administer diltiazem 20 mg IV before establishing the rhythm mechanism', isCorrect: false },
    { id: 'C', text: 'Obtain bedside echocardiography to define the atrial rhythm before treatment', isCorrect: false },
    { id: 'D', text: 'Proceed directly to synchronized cardioversion despite hemodynamic stability', isCorrect: false },
    { id: 'E', text: 'Administer metoprolol 5 mg IV first and reassess later', isCorrect: false }
  ],
  explanation: `
**Correct Answer: Administer adenosine 6 mg IV rapid push with continuous ECG monitoring**

In a **stable regular narrow-complex tachycardia** after failed vagal maneuvers, adenosine is the best next step because it is both **therapeutic and diagnostic**. If the rhythm is AV nodal-dependent SVT, adenosine may terminate it. If the rhythm is atrial flutter or another atrial tachycardia, transient AV nodal block can unmask the underlying atrial activity and clarify the diagnosis.

The 2025 AHA ALS guideline specifically notes that adenosine blocks the AV node and can confirm atrial flutter or fibrillation by revealing the underlying rhythm. This diagnostic benefit is why continuous ECG monitoring during administration matters.

**Why the other options are wrong:**
- **B:** Diltiazem may slow the rate, but it sacrifices the brief high-yield diagnostic information that adenosine provides and is not the preferred next step here.
- **C:** Echo is not the standard acute tool for rhythm differentiation in this scenario.
- **D:** She is stable, so immediate cardioversion is not the preferred next step.
- **E:** Metoprolol may slow the ventricular response, but it is less useful than adenosine when the goal is both diagnosis and potential immediate termination.
  `,
  references: [
    'Wigginton JG, Agarwal S, Bartos JA, et al. Part 9: Adult Advanced Life Support: 2025 American Heart Association Guidelines for Cardiopulmonary Resuscitation and Emergency Cardiovascular Care. Circulation. 2025;152(16_suppl_2):S538-S577. doi:10.1161/CIR.0000000000001376.',
    'Page RL, Joglar JA, Caldwell MA, et al. 2015 ACC/AHA/HRS Guideline for the Management of Adult Patients With Supraventricular Tachycardia. J Am Coll Cardiol. 2016;67(13):e27-e115. doi:10.1016/j.jacc.2015.08.856.'
  ]
};
