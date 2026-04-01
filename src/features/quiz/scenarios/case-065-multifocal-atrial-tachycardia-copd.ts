import { QuizScenario } from '../quizData';

export const case065: QuizScenario = {
  id: 'case-065',
  slug: 'multifocal-atrial-tachycardia-copd',
  title: 'Multifocal Atrial Tachycardia in COPD Exacerbation',
  category: 'Cardiology',
  difficulty: 'Hard',
  vignette:
    'A 72-year-old man with severe COPD is admitted for an acute exacerbation with worsening dyspnea and productive cough. He is receiving albuterol, ipratropium, and IV steroids. Blood pressure is 138/82 mmHg, heart rate is 132 bpm, and oxygen saturation is 89% on 2 L nasal cannula. ECG shows an irregular narrow-complex tachycardia with at least 3 distinct P-wave morphologies, variable PR intervals, and an isoelectric baseline between P waves. Potassium is 3.2 mEq/L and magnesium is 1.4 mg/dL.',
  question: 'What is the MOST appropriate management approach for this arrhythmia?',
  options: [
    { id: 'A', text: 'Optimize the COPD exacerbation, correct potassium and magnesium, and consider verapamil or diltiazem for rate control', isCorrect: true },
    { id: 'B', text: 'Administer adenosine 6 mg IV to terminate the arrhythmia', isCorrect: false },
    { id: 'C', text: 'Perform synchronized cardioversion at 100 J', isCorrect: false },
    { id: 'D', text: 'Administer amiodarone 150 mg IV for rhythm conversion', isCorrect: false },
    { id: 'E', text: 'Use esmolol as first-line therapy despite active bronchospasm', isCorrect: false }
  ],
  explanation: `
**Correct Answer: Optimize the COPD exacerbation, correct potassium and magnesium, and consider verapamil or diltiazem for rate control**

This ECG is classic for **multifocal atrial tachycardia (MAT)**. MAT is strongly associated with pulmonary disease and metabolic or electrolyte derangements, both of which are present here. The first-line response is to **treat the underlying trigger** and correct abnormalities such as hypoxia, hypokalemia, and hypomagnesemia. The SVT guideline also supports **verapamil or diltiazem** as reasonable acute therapy for MAT.

**Why the other options are wrong:**
- **B:** Adenosine does not terminate MAT because the mechanism is not AV nodal reentry.
- **C:** Cardioversion is not useful for MAT.
- **D:** Antiarrhythmic rhythm-control strategies are not standard first-line therapy for MAT.
- **E:** Beta-blockers can worsen bronchospasm and are not the preferred first approach in a patient with active COPD exacerbation.
  `,
  references: [
    'Page RL, Joglar JA, Caldwell MA, et al. 2015 ACC/AHA/HRS Guideline for the Management of Adult Patients With Supraventricular Tachycardia. J Am Coll Cardiol. 2016;67(13):e27-e115. doi:10.1016/j.jacc.2015.08.856.',
    'Wigginton JG, Agarwal S, Bartos JA, et al. Part 9: Adult Advanced Life Support: 2025 American Heart Association Guidelines for Cardiopulmonary Resuscitation and Emergency Cardiovascular Care. Circulation. 2025;152(16_suppl_2):S538-S577. doi:10.1161/CIR.0000000000001376.'
  ]
};
