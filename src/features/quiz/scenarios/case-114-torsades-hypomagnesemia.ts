import { QuizScenario } from '../quizData';

export const case129: QuizScenario = {
  id: 'case-129',
  slug: 'torsades-hypomagnesemia-iv-magnesium',
  title: 'Torsades de Pointes From Hypomagnesemia',
  category: 'Emergency',
  difficulty: 'Hard',
  vignette: `A 58-year-old woman presents to the ED with palpitations and near-syncope. She was recently hospitalized for heart failure exacerbation and discharged 5 days ago on an intensified diuretic regimen. While being evaluated, she suddenly becomes poorly responsive. Telemetry shows a polymorphic wide-complex tachycardia with a characteristic twisting pattern around the baseline at a rate of about 220 bpm. A femoral pulse is faintly palpable. Before the event, her baseline ECG showed a prolonged QTc of 540 ms with frequent PVCs. She has heart failure with reduced ejection fraction, atrial fibrillation, hypertension, and type 2 diabetes. Her medications include furosemide 80 mg twice daily, metolazone 5 mg daily, carvedilol, lisinopril, amiodarone, and metformin. Laboratory results drawn minutes earlier showed potassium 3.1 mEq/L, magnesium 1.1 mg/dL, calcium 8.8 mg/dL, and creatinine 1.2 mg/dL.`,
  question: 'What is the MOST appropriate immediate pharmacologic treatment for this arrhythmia?',
  options: [
    {
      id: 'A',
      text: 'IV magnesium sulfate 2 grams bolus over 2-5 minutes, followed by infusion',
      isCorrect: true
    },
    {
      id: 'B',
      text: 'Synchronized cardioversion at 100 joules',
      isCorrect: false
    },
    {
      id: 'C',
      text: 'IV amiodarone 150 mg over 10 minutes',
      isCorrect: false
    },
    {
      id: 'D',
      text: 'IV lidocaine 1-1.5 mg/kg bolus as first-line therapy',
      isCorrect: false
    },
    {
      id: 'E',
      text: 'Immediate defibrillation at 200 joules biphasic as sole definitive therapy',
      isCorrect: false
    }
  ],
  explanation: `
**Correct Answer: A - IV magnesium sulfate 2 grams bolus over 2-5 minutes, followed by infusion**

**Clinical Reasoning:**
This patient has **torsades de pointes (TdP)**: a polymorphic ventricular tachycardia occurring in the setting of a **prolonged QT interval**. She has several strong triggers: **hypomagnesemia**, **hypokalemia**, aggressive diuresis, structural heart disease, and a **QT-prolonging drug** (amiodarone).

The first-line pharmacologic therapy is **IV magnesium sulfate 2 g**, even if the serum magnesium were normal. Magnesium suppresses the early afterdepolarizations that trigger TdP and stabilizes repolarization. After the bolus, a magnesium infusion is commonly continued while potassium is repleted and QT-prolonging agents are stopped.

**Why Others Are Wrong:**
* **B (Synchronized cardioversion):** TdP is polymorphic, so synchronized cardioversion is unreliable because the machine cannot consistently identify a stable R wave.
* **C (Amiodarone):** Amiodarone can **worsen QT prolongation** and is the wrong drug in TdP.
* **D (Lidocaine first-line):** Lidocaine may be considered as an adjunct in some settings, but **magnesium is the first-line pharmacologic treatment**.
* **E (Defibrillation as sole therapy):** If the patient loses pulses or remains profoundly unstable, unsynchronized shocks may be needed, but **magnesium must still be given** because the arrhythmia will recur if the underlying repolarization problem is not treated.
  `,
  references: [
    'Al-Khatib SM, Stevenson WG, Ackerman MJ, et al. 2017 AHA/ACC/HRS Guideline for Management of Patients With Ventricular Arrhythmias and the Prevention of Sudden Cardiac Death. Circulation. 2018;138(13):e272-e391.',
    'Panchal AR, Bartos JA, Cabanas JG, et al. Part 3: Adult Basic and Advanced Life Support: 2020 American Heart Association Guidelines for Cardiopulmonary Resuscitation and Emergency Cardiovascular Care. Circulation. 2020;142(16 Suppl 2):S366-S468.',
    'Drew BJ, Ackerman MJ, Funk M, et al. Prevention of torsade de pointes in hospital settings: a scientific statement from the American Heart Association. Circulation. 2010;121(8):1047-1060.',
    'Lazzerini PE, Bertolozzi I, Finizola F, et al. Proarrhythmic, antiarrhythmic and therapeutic implications of QT interval prolongation. Nat Rev Cardiol. 2022;19(6):375-391.'
  ],
  skillTested: 'Recognize torsades de pointes and give IV magnesium immediately',
  linkedChapter: 'electrolytes',
  verdictOneLineSummary:
    'Polymorphic VT with prolonged QT should make you reach for IV magnesium first, not amiodarone.'
};
