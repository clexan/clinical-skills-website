import { QuizScenario } from '../quizData';

export const case071: QuizScenario = {
  id: 'case-071',
  slug: 'failed-cardioversion-unstable-vt',
  title: 'Failed Cardioversion in Unstable Wide-Complex Tachycardia',
  category: 'Cardiology',
  difficulty: 'Hard',
  vignette:
    'A 59-year-old man with ischemic cardiomyopathy (EF 30%) presents with dyspnea, diaphoresis, and confusion. Blood pressure is 74/50 mmHg and ECG shows a regular monomorphic wide-complex tachycardia at 188 bpm consistent with VT. After brief sedation, synchronized cardioversion is performed at 100 J biphasic without success. He remains in VT with persistent hypotension and altered mentation.',
  question: 'What is the MOST appropriate next step in management?',
  options: [
    {
      id: 'A',
      text: 'Escalate to a higher synchronized cardioversion energy and repeat the shock; add IV amiodarone if the rhythm remains refractory',
      isCorrect: true
    },
    {
      id: 'B',
      text: 'Administer adenosine as the next step because it is effective for most unstable monomorphic VT',
      isCorrect: false
    },
    {
      id: 'C',
      text: 'Administer verapamil to slow the ventricular rate before any further cardioversion',
      isCorrect: false
    },
    {
      id: 'D',
      text: 'Switch to unsynchronized defibrillation because synchronized cardioversion failed once',
      isCorrect: false
    },
    {
      id: 'E',
      text: 'Use lidocaine instead of repeating cardioversion because electrical therapy has already failed',
      isCorrect: false
    }
  ],
  explanation: `
**Correct Answer: Escalate to a higher synchronized cardioversion energy and repeat the shock; add IV amiodarone if the rhythm remains refractory**

This is **hemodynamically unstable monomorphic VT with a pulse**, so **synchronized cardioversion remains the priority**. If the first attempt fails, the correct move is to **increase the energy and repeat synchronized cardioversion**. Antiarrhythmic therapy such as **IV amiodarone** can be used as an adjunct if the VT remains refractory or recurrent, but it does not replace the need for prompt repeat electrical therapy.

**Why the other options are wrong:**
- **B:** Adenosine is not appropriate for unstable WCT and should not delay definitive therapy.
- **C:** Verapamil and diltiazem should not be used in wide-complex tachycardia because of potential harm.
- **D:** Unsynchronized defibrillation is for VF, pulseless VT, or polymorphic VT, not organized monomorphic VT with a pulse.
- **E:** Drug therapy does not supersede repeat synchronized cardioversion in unstable VT.
  `,
  references: [
    'Wigginton JG, Agarwal S, Bartos JA, et al. Part 9: Adult Advanced Life Support: 2025 American Heart Association Guidelines for Cardiopulmonary Resuscitation and Emergency Cardiovascular Care. Circulation. 2025;152(16_suppl_2):S538-S577. doi:10.1161/CIR.0000000000001376.',
    'Al-Khatib SM, Stevenson WG, Ackerman MJ, et al. 2017 AHA/ACC/HRS Guideline for Management of Patients With Ventricular Arrhythmias and the Prevention of Sudden Cardiac Death. J Am Coll Cardiol. 2018;72(14):e91-e220. doi:10.1016/j.jacc.2017.10.054.',
    'Jentzer JC, Noseworthy PA, Kashou AH, et al. Multidisciplinary Critical Care Management of Electrical Storm: JACC State-of-the-Art Review. J Am Coll Cardiol. 2023;81(22):2189-2206. doi:10.1016/j.jacc.2023.03.424.'
  ]
};
