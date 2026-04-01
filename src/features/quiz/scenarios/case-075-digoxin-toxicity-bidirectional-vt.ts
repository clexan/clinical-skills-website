import { QuizScenario } from '../quizData';

export const case075: QuizScenario = {
  id: 'case-075',
  slug: 'digoxin-toxicity-bidirectional-vt',
  title: 'Digoxin Toxicity With Bidirectional Ventricular Tachycardia',
  category: 'Cardiology',
  difficulty: 'Hard',
  vignette:
    'A 78-year-old woman with atrial fibrillation and HFrEF presents with nausea, vomiting, weakness, and visual symptoms described as yellow halos. She has become dehydrated and her creatinine has risen from 1.2 to 2.8 mg/dL over the past week. Blood pressure is 98/62 mmHg. ECG shows a regular wide-complex tachycardia at 110 bpm with beat-to-beat alternation in the frontal plane axis, consistent with bidirectional VT. Her potassium is 5.8 mEq/L and serum digoxin concentration is 4.2 ng/mL.',
  question: 'What is the MOST appropriate treatment for this arrhythmia?',
  options: [
    { id: 'A', text: 'Administer digoxin-specific antibody fragments (DigiFab) IV', isCorrect: true },
    { id: 'B', text: 'Administer amiodarone 150 mg IV over 10 minutes', isCorrect: false },
    { id: 'C', text: 'Perform synchronized cardioversion at 100 J', isCorrect: false },
    { id: 'D', text: 'Administer lidocaine as definitive first-line therapy', isCorrect: false },
    { id: 'E', text: 'Initiate hemodialysis for digoxin removal', isCorrect: false }
  ],
  explanation: `
**Correct Answer: Administer digoxin-specific antibody fragments (DigiFab) IV**

This patient has **severe digoxin toxicity** with classic extracardiac symptoms plus **bidirectional ventricular tachycardia**, which is highly suggestive of digoxin poisoning. She also has renal dysfunction, elevated digoxin concentration, and hyperkalemia. In this setting, **digoxin-specific Fab fragments** are the definitive treatment.

**Why the other options are wrong:**
- **B:** Amiodarone does not neutralize digoxin toxicity and is not the treatment of choice here.
- **C:** Cardioversion is generally avoided in digoxin-toxic arrhythmias unless absolutely necessary because it can precipitate worse rhythms.
- **D:** Lidocaine may occasionally be used adjunctively, but it is not superior to Fab when true severe digoxin toxicity is present.
- **E:** Digoxin has a large volume of distribution and is **not effectively removed by dialysis**.
  `,
  references: [
    'Al-Khatib SM, Stevenson WG, Ackerman MJ, et al. 2017 AHA/ACC/HRS Guideline for Management of Patients With Ventricular Arrhythmias and the Prevention of Sudden Cardiac Death. J Am Coll Cardiol. 2018;72(14):e91-e220. doi:10.1016/j.jacc.2017.10.054.',
    'Food and Drug Administration. DigiFab (ovine digoxin immune Fab) Prescribing Information. 2015.',
    'Kusumoto FM, Schoenfeld MH, Barrett C, et al. 2018 ACC/AHA/HRS Guideline on the Evaluation and Management of Patients With Bradycardia and Cardiac Conduction Delay. J Am Coll Cardiol. 2019;74(7):e51-e156. doi:10.1016/j.jacc.2018.10.044.'
  ]
};
