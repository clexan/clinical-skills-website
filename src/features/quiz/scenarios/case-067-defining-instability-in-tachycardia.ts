import { QuizScenario } from '../quizData';

export const case067: QuizScenario = {
  id: 'case-067',
  slug: 'defining-instability-in-tachycardia',
  title: 'Defining Hemodynamic Instability in Tachycardia',
  category: 'Cardiology',
  difficulty: 'Hard',
  vignette:
    'A 55-year-old woman presents with palpitations that began 3 hours ago. She has hypertension treated with lisinopril. Blood pressure is 88/58 mmHg, heart rate is 165 bpm, and oxygen saturation is 97% on room air. She feels lightheaded when standing, but she is alert, oriented, and speaking normally. She denies chest pain, dyspnea, and syncope. Lungs are clear, there is no JVD, and ECG shows a regular narrow-complex tachycardia at 165 bpm consistent with SVT.',
  question:
    'Based on current guidelines, does this patient meet criteria for hemodynamically unstable tachycardia requiring immediate synchronized cardioversion?',
  options: [
    {
      id: 'A',
      text: 'No. She does not meet clear instability criteria; attempt vagal maneuvers and adenosine first',
      isCorrect: true
    },
    {
      id: 'B',
      text: 'Yes. Any systolic blood pressure below 90 mmHg automatically mandates immediate synchronized cardioversion',
      isCorrect: false
    },
    {
      id: 'C',
      text: 'Yes. Borderline hypotension plus subjective lightheadedness is sufficient to define unstable tachycardia',
      isCorrect: false
    },
    {
      id: 'D',
      text: 'No, but IV diltiazem should be given before any vagal maneuvers are attempted',
      isCorrect: false
    },
    {
      id: 'E',
      text: 'Yes. Any tachycardia faster than 150 bpm with low blood pressure should be cardioverted immediately',
      isCorrect: false
    }
  ],
  explanation: `
**Correct Answer: No. She does not meet clear instability criteria; attempt vagal maneuvers and adenosine first**

Current ALS guidance defines unstable narrow-complex tachycardia by evidence of **poor organ perfusion**, such as **hypotension with shock, acutely altered mental status, ischemic chest discomfort, or acute heart failure**. This patient has a low blood pressure, but she is still **alert, oriented, perfusing, and without ischemia or heart failure**. Borderline hypotension alone is not enough to mandate immediate cardioversion.

For a stable regular narrow-complex tachycardia, the recommended first steps are **vagal maneuvers** followed by **adenosine** if needed.

**Why the other options are wrong:**
- **B:** There is no single systolic BP threshold that automatically defines unstable tachycardia in isolation.
- **C:** Subjective lightheadedness without altered mentation, shock, chest pain, or pulmonary edema does not by itself establish instability.
- **D:** Vagal maneuvers should not be skipped in a stable regular narrow-complex SVT.
- **E:** Heart rate alone does not define instability; the key issue is end-organ hypoperfusion.
  `,
  references: [
    'Wigginton JG, Agarwal S, Bartos JA, et al. Part 9: Adult Advanced Life Support: 2025 American Heart Association Guidelines for Cardiopulmonary Resuscitation and Emergency Cardiovascular Care. Circulation. 2025;152(16_suppl_2):S538-S577. doi:10.1161/CIR.0000000000001376.',
    'Panchal AR, Bartos JA, Cabañas JG, et al. Part 3: Adult Basic and Advanced Life Support: 2020 American Heart Association Guidelines for Cardiopulmonary Resuscitation and Emergency Cardiovascular Care. Circulation. 2020;142(16_suppl_2):S366-S468. doi:10.1161/CIR.0000000000000916.',
    'Peng G, Zei PC. Diagnosis and Management of Paroxysmal Supraventricular Tachycardia. JAMA. 2024;331(7):601-610. doi:10.1001/jama.2024.0076.'
  ]
};
