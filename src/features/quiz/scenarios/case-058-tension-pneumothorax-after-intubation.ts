import { QuizScenario } from '../quizData';

export const case058: QuizScenario = {
  id: 'case-058',
  slug: 'tension-pneumothorax-after-intubation',
  title: 'Tension Pneumothorax After Intubation',
  category: 'Emergency',
  difficulty: 'Hard',
  vignette:
    'A 45-year-old man with severe pneumonia is intubated in the ICU for worsening hypoxemic respiratory failure. Immediately after positive-pressure ventilation begins, his blood pressure falls from 110/70 to 70/40 mmHg. Within 2 minutes he becomes pulseless. The monitor shows organized electrical activity at 110 bpm. The right hemithorax is hyperexpanded with absent breath sounds, the trachea is deviated to the left, and neck veins are distended.',
  question: 'What is the MOST appropriate immediate intervention to address the underlying cause of this arrest?',
  options: [
    { id: 'A', text: 'Perform immediate needle decompression or finger thoracostomy of the right chest', isCorrect: true },
    { id: 'B', text: 'Administer epinephrine 1 mg IV and continue CPR for 2 minutes before treating the cause', isCorrect: false },
    { id: 'C', text: 'Administer a 1-liter crystalloid bolus for presumed hypovolemia', isCorrect: false },
    { id: 'D', text: 'Perform bedside ultrasound before any chest intervention', isCorrect: false },
    { id: 'E', text: 'Disconnect the ventilator and observe for spontaneous recovery', isCorrect: false }
  ],
  explanation: `
**Correct Answer: Perform immediate needle decompression or finger thoracostomy of the right chest**

This is classic **tension pneumothorax causing PEA arrest** after initiation of positive-pressure ventilation. The diagnosis is clinical: sudden hemodynamic collapse, unilateral absent breath sounds, hyperexpansion, tracheal deviation, and jugular venous distension. The correct response is **immediate decompression**.

**Why the other options are wrong:**
- **B:** Epinephrine is appropriate for PEA, but it will not relieve the mechanical obstruction preventing venous return.
- **C:** Hypovolemia is not the best explanation here, and fluid alone will not correct a tension pneumothorax.
- **D:** Ultrasound can help when the diagnosis is unclear, but in this case it should **not delay decompression**.
- **E:** Removing positive pressure alone does not evacuate the trapped pleural air that is already causing obstructive arrest.
  `,
  references: [
    'Soar J, Becker LB, Berg KM, et al. Cardiopulmonary Resuscitation in Special Circumstances. Lancet. 2021;398(10307):1257-1268. doi:10.1016/S0140-6736(21)01257-5.',
    'Andersen LW, Holmberg MJ, Berg KM, Donnino MW, Granfeldt A. In-Hospital Cardiac Arrest: A Review. JAMA. 2019;321(12):1200-1210. doi:10.1001/jama.2019.1696.',
    'Lyng JW, Ward C, Angelidis M, et al. Prehospital Trauma Compendium: Traumatic Pneumothorax Care: Position Statement and Resource Document of NAEMSP. Prehosp Emerg Care. 2024. doi:10.1080/10903127.2024.2416978.'
  ]
};
