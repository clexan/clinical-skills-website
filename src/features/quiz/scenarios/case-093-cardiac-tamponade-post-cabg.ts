import { QuizScenario } from '../quizData';

export const case093: QuizScenario = {
  id: 'case-093',
  slug: 'cardiac-tamponade-post-cardiac-surgery',
  title: 'Cardiac Tamponade in the Post-Surgical Patient',
  category: 'Emergency',
  difficulty: 'Hard',
  vignette: `A 62-year-old woman is in the ICU on post-operative day 2 following coronary artery bypass grafting (CABG). She has been progressively more hypotensive over the past 3 hours despite fluid administration. Her vital signs are: temperature 36.8°C (98.2°F), heart rate 118 bpm, blood pressure 82/64 mmHg (MAP 70 mmHg), respiratory rate 22 breaths/min, and oxygen saturation 94% on 4L nasal cannula. She has a history of coronary artery disease, hypertension, and hyperlipidemia. Her medications include aspirin, metoprolol, atorvastatin, and lisinopril. She has no known drug allergies. On examination, she has distended neck veins, muffled heart sounds, and appears anxious. Her chest tube output has decreased from 100 mL/hour to 15 mL/hour over the past 2 hours. Blood pressure measurement shows systolic pressure drops from 88 mmHg to 72 mmHg during inspiration. Bedside echocardiogram shows a moderate pericardial effusion with right atrial and right ventricular diastolic collapse.`,
  question: 'Which statement BEST describes the diagnosis and management of this patient?',
  options: [
    {
      id: 'A',
      text: "This patient has cardiac tamponade with Beck's triad and pulsus paradoxus; immediate pericardiocentesis or surgical exploration is required",
      isCorrect: true
    },
    {
      id: 'B',
      text: 'The decreased chest tube output indicates resolving bleeding; continue conservative management with fluids',
      isCorrect: false
    },
    {
      id: 'C',
      text: 'Administer diuretics to reduce the pericardial effusion and improve cardiac output',
      isCorrect: false
    },
    {
      id: 'D',
      text: 'Start inotropic support with dobutamine to increase contractility and cardiac output',
      isCorrect: false
    },
    {
      id: 'E',
      text: 'The pericardial effusion is moderate and not causing tamponade; monitor with serial echocardiograms',
      isCorrect: false
    }
  ],
  explanation: `
**Correct Answer: A - This patient has cardiac tamponade with Beck's triad and pulsus paradoxus; immediate pericardiocentesis or surgical exploration is required**

**Clinical Reasoning:**
This patient demonstrates **cardiac tamponade**, a form of obstructive shock caused by pericardial fluid accumulation that impairs ventricular filling. She exhibits **Beck's triad**: (1) **hypotension** (BP 82/64 mmHg), (2) **jugular venous distension** (JVD), and (3) **muffled heart sounds**. Additionally, she has **pulsus paradoxus**—an exaggerated drop in systolic blood pressure (>10 mmHg) during inspiration (88 to 72 mmHg = 16 mmHg drop). The echocardiographic findings of **right atrial and right ventricular diastolic collapse** are highly specific for tamponade physiology. In the post-cardiac surgery setting, the **sudden decrease in chest tube output** (from 100 to 15 mL/hour) is concerning for **clotted hemothorax** or pericardial blood accumulation that is no longer draining, rather than cessation of bleeding. Cardiac tamponade occurs when pericardial pressure exceeds right atrial and right ventricular diastolic pressures, preventing adequate ventricular filling and reducing stroke volume and cardiac output. **Immediate intervention** is required: in post-surgical patients, this typically means **urgent return to the operating room for surgical exploration and evacuation**, as loculated or clotted blood may not be amenable to percutaneous drainage.

**Why Others are Wrong:**
* **B (Decreased output indicates resolving bleeding):** In the post-operative cardiac surgery patient, sudden decrease in chest tube output with concurrent hemodynamic deterioration is a **red flag for clotted hemothorax or tamponade**, not improvement. Blood may be accumulating in the pericardium or pleural space but not draining through the chest tube due to clot formation or tube malposition.
* **C (Diuretics to reduce effusion):** Diuretics are **contraindicated** in cardiac tamponade. They would reduce preload, which is already critically compromised by the tamponade physiology, and would worsen hypotension and cardiac output. The only way to remove pericardial fluid is mechanical drainage.
* **D (Dobutamine for inotropy):** Inotropes are ineffective in cardiac tamponade because the primary problem is **mechanical restriction of ventricular filling**, not contractile dysfunction. The heart cannot fill adequately regardless of contractility.
* **E (Monitor with serial echocardiograms):** While the effusion is described as "moderate" in size, the **presence of chamber collapse** (right atrial and RV diastolic collapse) indicates **tamponade physiology** regardless of effusion size. Tamponade is a **hemodynamic diagnosis**, not an anatomic one.
  `,
  references: [
    'Spodick DH. Acute cardiac tamponade. N Engl J Med. 2003;349(7):684-690.',
    'Imazio M, Adler Y. Management of pericardial effusion. Eur Heart J. 2013;34(16):1186-1197.',
    'Adler Y, Charron P, Imazio M, et al. 2015 ESC Guidelines for the diagnosis and management of pericardial diseases. Eur Heart J. 2015;36(42):2921-2964.',
    'Tsang TS, Enriquez-Sarano M, Freeman WK, et al. Consecutive 1127 therapeutic echocardiographically guided pericardiocenteses: clinical profile, practice patterns, and outcomes spanning 21 years. Mayo Clin Proc. 2002;77(5):429-436.',
    "Cardiac Tamponade. In: Tintinalli JE, Ma O, Yealy DM, et al., eds. Tintinalli's Emergency Medicine: A Comprehensive Study Guide. 9th ed. McGraw-Hill; 2020."
  ]
};
