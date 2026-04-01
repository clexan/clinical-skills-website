import { QuizScenario } from '../quizData';

export const case061: QuizScenario = {
  id: 'case-061',
  slug: 'cardiac-tamponade-after-central-line',
  title: 'Cardiac Tamponade After Central Line Placement',
  category: 'Emergency',
  difficulty: 'Hard',
  vignette:
    'A 71-year-old man undergoes left internal jugular central venous catheter placement for chemotherapy access. Thirty minutes later he develops progressive dyspnea, hypotension to 75/55 mmHg, tachycardia to 125 bpm, and distended neck veins. Breath sounds are clear bilaterally. Bedside echocardiography shows a pericardial effusion with right atrial and right ventricular diastolic collapse. He then becomes unresponsive and pulseless with organized electrical activity at 110 bpm.',
  question: 'What is the MOST appropriate immediate intervention for this arrest?',
  options: [
    { id: 'A', text: 'Perform emergency pericardiocentesis or proceed to immediate surgical decompression if required', isCorrect: true },
    { id: 'B', text: 'Administer a large IV fluid bolus as definitive management', isCorrect: false },
    { id: 'C', text: 'Continue standard ACLS alone because medications should restore circulation', isCorrect: false },
    { id: 'D', text: 'Perform bilateral chest decompression for presumed pneumothorax', isCorrect: false },
    { id: 'E', text: 'Obtain chest radiography to confirm the complication before intervention', isCorrect: false }
  ],
  explanation: `
**Correct Answer: Perform emergency pericardiocentesis or proceed to immediate surgical decompression if required**

This patient has **cardiac tamponade causing PEA arrest** after a recent invasive procedure, and the bedside echo already shows tamponade physiology. The definitive treatment is **immediate pericardial decompression**. Fluids and ACLS medications may be temporizing measures, but they do not relieve the mechanical compression preventing cardiac filling.

**Why the other options are wrong:**
- **B:** Fluids may transiently support preload, but they are not definitive in tamponade arrest.
- **C:** Standard ACLS alone is insufficient when the main problem is obstructive physiology.
- **D:** Clear lungs plus echo-confirmed pericardial effusion make pneumothorax the wrong target.
- **E:** Further imaging would only delay the lifesaving procedure.
  `,
  references: [
    'Soar J, Becker LB, Berg KM, et al. Cardiopulmonary Resuscitation in Special Circumstances. Lancet. 2021;398(10307):1257-1268. doi:10.1016/S0140-6736(21)01257-5.',
    'Adler Y, Ristić AD, Imazio M, et al. Cardiac Tamponade. Nat Rev Dis Primers. 2023;9(1):36. doi:10.1038/s41572-023-00446-1.',
    'Andersen LW, Holmberg MJ, Berg KM, Donnino MW, Granfeldt A. In-Hospital Cardiac Arrest: A Review. JAMA. 2019;321(12):1200-1210. doi:10.1001/jama.2019.1696.'
  ]
};
