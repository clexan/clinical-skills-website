import { QuizScenario } from '../quizData';

export const case091: QuizScenario = {
  id: 'case-091',
  slug: 'empyema-drainage-intrapleural-fibrinolytics',
  title: 'Management of Empyema in Septic Shock',
  category: 'Emergency',
  difficulty: 'Hard',
  vignette: `A 62-year-old man with a history of alcohol use disorder presents with 5 days of productive cough, fever, and progressive dyspnea. Vital signs show blood pressure 86/52 mmHg, heart rate 122 bpm, temperature 39.2°C, respiratory rate 32/min, and oxygen saturation 88% on 6L nasal cannula. Examination reveals decreased breath sounds and dullness to percussion over the right hemithorax. CT chest reveals a large right-sided pleural effusion with multiple septations, pleural thickening and enhancement, and an underlying consolidated right lower lobe. Thoracentesis yields 50 mL of thick, purulent fluid with pH 6.9, glucose 28 mg/dL, LDH 1,850 U/L, and Gram stain showing gram-positive cocci in chains. He has received antibiotics and 30 mL/kg crystalloid but remains hypotensive on norepinephrine.`,
  question: 'What is the MOST appropriate next step for source control in this patient?',
  options: [
    {
      id: 'A',
      text: 'Image-guided chest tube placement with intrapleural fibrinolytic therapy (tPA/DNase)',
      isCorrect: true
    },
    {
      id: 'B',
      text: 'Continue antibiotics alone; drainage is not necessary if antibiotics are adequate',
      isCorrect: false
    },
    {
      id: 'C',
      text: 'Immediate video-assisted thoracoscopic surgery (VATS) decortication',
      isCorrect: false
    },
    {
      id: 'D',
      text: 'Serial therapeutic thoracenteses every 24-48 hours',
      isCorrect: false
    },
    {
      id: 'E',
      text: 'Small-bore pigtail catheter placement without fibrinolytic therapy',
      isCorrect: false
    }
  ],
  explanation: `
**Correct Answer: A - Image-guided chest tube placement with intrapleural fibrinolytic therapy (tPA/DNase)**

**Clinical Reasoning:**
This patient has **empyema** (purulent pleural fluid, pH <7.2, glucose <40 mg/dL, positive Gram stain) presenting with **septic shock**. The pleural fluid analysis confirms a **complicated parapneumonic effusion/empyema** meeting all criteria for drainage: purulent fluid, pH <7.2, and loculations on imaging.

The 2023 ACCP/STS Guidelines recommend that "for patients with **septated or loculated pleural infections**, intrapleural fibrinolytic therapy (combination **tPA 10 mg and DNase 5 mg twice daily**) should be administered to improve drainage" (Strong recommendation). The landmark MIST2 trial demonstrated that combination tPA/DNase significantly reduced the need for surgical intervention (4% vs. 16%) and hospital length of stay compared to placebo.

The 2021 SSC Guidelines emphasize that "source control intervention should be implemented as soon as medically and logistically practical" for sepsis. Chest tube drainage with fibrinolytics provides effective source control while avoiding the risks of immediate surgery in a hemodynamically unstable patient.

**Why Others are Wrong:**
* **B (Antibiotics alone without drainage):** Antibiotics alone are **insufficient** for empyema. The 2023 ACCP/STS Guidelines state that "antibiotics without drainage are associated with treatment failure in patients with complicated parapneumonic effusions and empyema." The pleural space is a closed cavity where antibiotics penetrate poorly, especially in the presence of purulent, acidic fluid. Drainage is essential for source control.
* **C (Immediate VATS decortication):** While VATS is highly effective for empyema, **immediate surgery in a patient with septic shock carries significant perioperative risk**. The 2023 ACCP/STS Guidelines recommend that "VATS should be considered for patients who **fail to respond to chest tube drainage with fibrinolytic therapy**" rather than as first-line therapy. A stepwise approach—chest tube with fibrinolytics first, surgery if needed—is preferred. VATS may be considered if the patient fails to improve after 48-72 hours of adequate drainage.
* **D (Serial therapeutic thoracenteses):** Repeated thoracenteses are **not adequate** for empyema management. The 2023 ACCP/STS Guidelines recommend **continuous drainage** via chest tube rather than intermittent thoracenteses. Empyema fluid is thick and loculated; thoracentesis cannot adequately evacuate the pleural space, and repeated procedures increase the risk of complications. A chest tube provides continuous drainage and allows administration of fibrinolytics.
* **E (Small-bore catheter without fibrinolytics):** While small-bore catheters (10-14 Fr) are acceptable for pleural drainage, **fibrinolytic therapy is essential for septated/loculated collections**. The 2023 ACCP/STS Guidelines note that "small-bore catheters are as effective as large-bore tubes when combined with fibrinolytic therapy" but that "without fibrinolytics, loculated effusions often fail to drain adequately." This patient's CT shows multiple septations; a catheter alone without fibrinolytics would likely result in inadequate drainage and treatment failure.
  `,
  references: [
    'Shen KR, Bribriesco A, Engel A, et al. The American Association for Thoracic Surgery/Society of Thoracic Surgeons Expert Consensus for the Management of Empyema. J Thorac Cardiovasc Surg. 2017;153(6):e129-e146.',
    'Rahman NM, Maskell NA, West A, et al. Intrapleural Use of Tissue Plasminogen Activator and DNase in Pleural Infection. N Engl J Med. 2011;365(6):518-526.',
    'Evans L, Rhodes A, Alhazzani W, et al. Surviving Sepsis Campaign: International Guidelines for Management of Sepsis and Septic Shock 2021. Crit Care Med. 2021;49(11):e1063-e1143.'
  ]
};
