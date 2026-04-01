import { QuizScenario } from '../quizData';

export const case006: QuizScenario = {
  id: 'case-006',
  slug: 'ett-placement-asymmetric-breath-sounds',
  title: 'Asymmetric Breath Sounds After Intubation',
  category: 'Emergency',
  difficulty: 'Medium',
  vignette: `
A 29-year-old man is brought to the emergency department shortly after being found unconscious in a park. He is unresponsive to sternal rub and has pinpoint pupils. His respiratory rate is 6/min. There is a mild improvement in his mental status after administration of an initial dose of intranasal naloxone. 

He is intubated and mechanical ventilation is begun. After intubation, his pulse is 91/min and blood pressure is 135/74 mm Hg. Pulse oximetry on 100% oxygen shows an oxygen saturation of 94%. Pulmonary examination shows asymmetric chest expansion with normal breath sounds on the right and decreased breath sounds on the left. His abdomen is soft and bowel sounds are hypoactive.
  `,
  question: 'Which of the following is the most appropriate next step in management?',
  options: [
    { id: 'A', text: 'Insert a needle into the second intercostal space', isCorrect: false },
    { id: 'B', text: 'Pull back the endotracheal tube', isCorrect: true },
    { id: 'C', text: 'Insert a chest tube into the fifth intercostal space', isCorrect: false },
    { id: 'D', text: 'Administer inhaled albuterol', isCorrect: false },
    { id: 'E', text: 'Remove the endotracheal tube and reintubate', isCorrect: false },
    { id: 'F', text: 'Perform emergent thoracotomy', isCorrect: false }
  ],
  explanation: `
**Correct Answer: (B) Pull back the endotracheal tube**

After intubation, it is critical to confirm correct endotracheal tube (ETT) placement by auscultating for bilateral breath sounds. Absent or decreased breath sounds on the left, especially in the context of recent intubation, strongly suggest inadvertent **right mainstem bronchus intubation**. 

**Why this occurs:**
The right mainstem bronchus is more vertically oriented than the left mainstem bronchus at the bifurcation of the trachea (carina), making it the most common site for "over-insertion" of an ETT. 

**Management:**
When right mainstem intubation is suspected based on unilateral breath sounds, the appropriate next step is to **pull back the ETT** until bilateral breath sounds are heard. The ideal position for the ETT tip is approximately 2–6 cm above the carina. 

**Why other options are less appropriate:**
* **Needle decompression (A):** Used for tension pneumothorax. While asymmetric breath sounds are a feature, this patient is hemodynamically stable and lacks other signs (tracheal deviation, JVD).
* **Chest tube (C):** Indicated for hemothorax or large pneumothorax. ETT malposition should be ruled out first in the post-intubation setting.
* **Reintubation (E):** Indicated for esophageal intubation (characterized by gastric gurgling and lack of CO2 return). Since right-sided breath sounds and chest expansion are present, the tube is in the airway but too deep.
* **Thoracotomy (F):** Reserved for massive trauma or exsanguination; far too invasive for this clinical scenario.

Confirmation of correct placement should be followed up with a chest X-ray to ensure the tip is positioned correctly between the vocal cords and the carina (level of T2–T4).
  `,
  references: [
    "Advanced Trauma Life Support (ATLS) Student Course Manual. 10th Ed.",
    "Roberts and Hedges' Clinical Procedures in Emergency Medicine and Acute Care. 7th Ed."
  ]
};
