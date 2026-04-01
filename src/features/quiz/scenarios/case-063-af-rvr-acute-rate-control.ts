import { QuizScenario } from '../quizData';

export const case063: QuizScenario = {
  id: 'case-063',
  slug: 'af-rvr-acute-rate-control',
  title: 'Atrial Fibrillation With Rapid Ventricular Response',
  category: 'Cardiology',
  difficulty: 'Medium',
  vignette:
    'A 67-year-old man presents with palpitations and mild dyspnea that started 6 hours ago. He has hypertension and type 2 diabetes. Blood pressure is 142/88 mmHg, heart rate is 145 bpm, and oxygen saturation is 96% on room air. ECG shows atrial fibrillation with rapid ventricular response. He has no chest pain, shock, altered mental status, or pulmonary edema. A recent echocardiogram showed normal LV systolic function with an ejection fraction of 55%.',
  question: 'What is the MOST appropriate initial pharmacologic intervention for acute rate control?',
  options: [
    { id: 'A', text: 'Administer metoprolol 5 mg IV or diltiazem 20 mg IV for acute rate control', isCorrect: true },
    { id: 'B', text: 'Administer digoxin 0.5 mg IV as first-line therapy', isCorrect: false },
    { id: 'C', text: 'Administer amiodarone 150 mg IV as the preferred initial agent', isCorrect: false },
    { id: 'D', text: 'Administer adenosine 6 mg IV rapid push to convert the rhythm', isCorrect: false },
    { id: 'E', text: 'Proceed immediately to synchronized cardioversion', isCorrect: false }
  ],
  explanation: `
**Correct Answer: Administer metoprolol 5 mg IV or diltiazem 20 mg IV for acute rate control**

This patient has **hemodynamically stable AF with RVR** and preserved LV systolic function. The 2023 ACC/AHA/ACCP/HRS atrial fibrillation guideline recommends **beta-blockers or nondihydropyridine calcium channel blockers** for acute rate control in stable patients, with diltiazem or verapamil appropriate when EF is >40%. The 2025 AHA ALS guideline similarly recommends an IV beta-blocker or nondihydropyridine calcium channel blocker for acute rate control in AF/flutter with RVR without preexcitation.

**Why the other options are wrong:**
- **B:** Digoxin can be considered if beta-blockers and calcium channel blockers are ineffective or contraindicated, but it is not first-line for acute rate control in a stable patient like this.
- **C:** IV amiodarone may be useful in critically ill patients or when standard rate-control agents cannot be used, but it is not the preferred first-line agent here.
- **D:** Adenosine does not terminate atrial fibrillation and is not a rate-control treatment for AF.
- **E:** Immediate synchronized cardioversion is reserved for hemodynamic instability or other compelling urgent indications.
  `,
  references: [
    'Joglar JA, Chung MK, Armbruster AL, et al. 2023 ACC/AHA/ACCP/HRS Guideline for the Diagnosis and Management of Atrial Fibrillation. J Am Coll Cardiol. 2024;83(1):109-279. doi:10.1016/j.jacc.2023.08.017.',
    'Wigginton JG, Agarwal S, Bartos JA, et al. Part 9: Adult Advanced Life Support: 2025 American Heart Association Guidelines for Cardiopulmonary Resuscitation and Emergency Cardiovascular Care. Circulation. 2025;152(16_suppl_2):S538-S577. doi:10.1161/CIR.0000000000001376.'
  ]
};
