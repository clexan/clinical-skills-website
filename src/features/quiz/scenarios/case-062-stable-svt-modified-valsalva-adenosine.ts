import { QuizScenario } from '../quizData';

export const case062: QuizScenario = {
  id: 'case-062',
  slug: 'stable-svt-modified-valsalva-adenosine',
  title: 'Stable SVT: Modified Valsalva First',
  category: 'Cardiology',
  difficulty: 'Medium',
  vignette:
    'A 32-year-old woman presents with sudden-onset palpitations that began 45 minutes ago while exercising. She reports similar self-limited episodes in the past. Blood pressure is 118/72 mmHg, heart rate is 180 bpm, and oxygen saturation is 98% on room air. She is alert, anxious, and hemodynamically stable. ECG shows a regular narrow-complex tachycardia at 180 bpm with no clearly visible P waves.',
  question: 'What is the MOST appropriate initial management approach for this patient?',
  options: [
    { id: 'A', text: 'Perform a modified Valsalva maneuver, then give adenosine 6 mg IV rapid push if unsuccessful', isCorrect: true },
    { id: 'B', text: 'Administer diltiazem 20 mg IV over 2 minutes as first-line therapy', isCorrect: false },
    { id: 'C', text: 'Proceed immediately to synchronized cardioversion at 100 J', isCorrect: false },
    { id: 'D', text: 'Administer metoprolol 5 mg IV as the first step', isCorrect: false },
    { id: 'E', text: 'Administer adenosine 12 mg IV as the initial dose', isCorrect: false }
  ],
  explanation: `
**Correct Answer: Perform a modified Valsalva maneuver, then give adenosine 6 mg IV rapid push if unsuccessful**

This patient has a **stable regular narrow-complex tachycardia**, most consistent with paroxysmal SVT such as AVNRT or orthodromic AVRT. The 2025 AHA adult ALS guideline recommends **vagal maneuvers first**, followed by **adenosine** for acute treatment of regular narrow-complex tachycardia.

Modified Valsalva is preferred over a casual, unstructured vagal attempt because the REVERT trial showed higher conversion rates than standard Valsalva. If vagal maneuvers fail, the usual **first adenosine dose is 6 mg rapid IV push**, followed by a flush; higher doses are used only if the first dose fails.

**Why the other options are wrong:**
- **B:** IV diltiazem or verapamil can be effective in stable regular narrow-complex tachycardia, but they are not the preferred first step before vagal maneuvers and adenosine.
- **C:** Synchronized cardioversion is reserved for unstable patients or for stable patients when vagal maneuvers and drug therapy fail or are contraindicated.
- **D:** IV beta-blockers can be used in selected stable tachycardias, but they are not first-line ahead of vagal maneuvers and adenosine for regular narrow-complex SVT.
- **E:** The initial adenosine dose is **6 mg**, not 12 mg.
  `,
  references: [
    'Wigginton JG, Agarwal S, Bartos JA, et al. Part 9: Adult Advanced Life Support: 2025 American Heart Association Guidelines for Cardiopulmonary Resuscitation and Emergency Cardiovascular Care. Circulation. 2025;152(16_suppl_2):S538-S577. doi:10.1161/CIR.0000000000001376.',
    'Page RL, Joglar JA, Caldwell MA, et al. 2015 ACC/AHA/HRS Guideline for the Management of Adult Patients With Supraventricular Tachycardia. J Am Coll Cardiol. 2016;67(13):e27-e115. doi:10.1016/j.jacc.2015.08.856.',
    'Appelboam A, Reuben A, Mann C, et al. Postural Modification to the Standard Valsalva Manoeuvre for Emergency Treatment of Supraventricular Tachycardias (REVERT): A Randomised Controlled Trial. Lancet. 2015;386(10005):1747-1753. doi:10.1016/S0140-6736(15)61485-4.'
  ]
};
