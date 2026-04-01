import { QuizScenario } from '../quizData';

export const case074: QuizScenario = {
  id: 'case-074',
  slug: 'tca-overdose-qrs-widening',
  title: 'Tricyclic Antidepressant Overdose With QRS Widening',
  category: 'Cardiology',
  difficulty: 'Hard',
  vignette:
    'A 24-year-old woman is brought in after being found unresponsive next to empty amitriptyline bottles. She is obtunded with a GCS of 8. Blood pressure is 88/52 mmHg and heart rate is 128 bpm. ECG shows sinus tachycardia with a QRS duration of 148 ms. She has dry mucous membranes, dilated pupils, and decreased bowel sounds, consistent with tricyclic antidepressant poisoning.',
  question: 'What is the MOST appropriate immediate treatment for this cardiotoxicity?',
  options: [
    { id: 'A', text: 'Give hypertonic sodium bicarbonate 1-2 mEq/kg IV bolus and repeat as needed', isCorrect: true },
    { id: 'B', text: 'Administer amiodarone 150 mg IV for the wide QRS tachycardia', isCorrect: false },
    { id: 'C', text: 'Administer procainamide for sodium channel blockade-related arrhythmia control', isCorrect: false },
    { id: 'D', text: 'Give magnesium sulfate as first-line therapy for the QRS prolongation', isCorrect: false },
    { id: 'E', text: 'Use lidocaine before sodium bicarbonate because it is a cleaner sodium-channel strategy', isCorrect: false }
  ],
  explanation: `
**Correct Answer: Give hypertonic sodium bicarbonate 1-2 mEq/kg IV bolus and repeat as needed**

This is **tricyclic antidepressant cardiotoxicity with sodium channel blockade**, shown by hypotension and a markedly widened QRS. The standard first-line treatment is **hypertonic sodium bicarbonate**, which both **loads sodium** and **alkalinizes serum**, helping reverse sodium channel blockade and narrow the QRS.

**Why the other options are wrong:**
- **B and C:** Class I and class III antiarrhythmics can worsen conduction abnormalities or distract from the primary antidotal therapy.
- **D:** Magnesium is not the first-line answer for classic TCA sodium channel blockade with QRS widening.
- **E:** Lidocaine can be considered in refractory cases, but **sodium bicarbonate remains the primary intervention**.
  `,
  references: [
    'Lavonas EJ, Akpunonu PD, Arens AM, et al. 2023 American Heart Association Focused Update on the Management of Patients With Cardiac Arrest or Life-Threatening Toxicity Due to Poisoning. Circulation. 2023;148(16):e149-e184. doi:10.1161/CIR.0000000000001161.',
    'Cao D, Arens AM, Chow SL, et al. Part 10: Adult and Pediatric Special Circumstances of Resuscitation: 2025 American Heart Association Guidelines for Cardiopulmonary Resuscitation and Emergency Cardiovascular Care. Circulation. 2025;152(16_suppl_2):S578-S672. doi:10.1161/CIR.0000000000001380.',
    'Chan BS, Buckley NA. Common Pitfalls in the Use of Hypertonic Sodium Bicarbonate for Cardiac Toxic Drug Poisonings. Clin Toxicol (Phila). 2024;62(4):213-218. doi:10.1080/15563650.2024.2337028.'
  ]
};
