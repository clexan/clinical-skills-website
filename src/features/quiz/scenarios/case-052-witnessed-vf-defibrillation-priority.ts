import { QuizScenario } from '../quizData';

export const case052: QuizScenario = {
  id: 'case-052',
  slug: 'witnessed-vf-defibrillation-priority',
  title: 'Witnessed VF Arrest: Shock First',
  category: 'Emergency',
  difficulty: 'Medium',
  vignette:
    'A 58-year-old man collapses in the cardiac catheterization lab immediately after PCI. He is unresponsive and pulseless. The monitor shows coarse ventricular fibrillation. The defibrillator is at bedside, pads are already in place, and high-quality CPR is being performed.',
  question: 'What is the MOST appropriate immediate next step?',
  options: [
    { id: 'A', text: 'Deliver immediate defibrillation without delay', isCorrect: true },
    { id: 'B', text: 'Continue CPR for 2 minutes before attempting defibrillation', isCorrect: false },
    { id: 'C', text: 'Administer epinephrine 1 mg IV before defibrillation', isCorrect: false },
    { id: 'D', text: 'Administer amiodarone 300 mg IV before defibrillation', isCorrect: false },
    { id: 'E', text: 'Establish an advanced airway before attempting defibrillation', isCorrect: false }
  ],
  explanation: `
**Correct Answer: Immediate defibrillation without delay**

This is a **witnessed, monitored VF arrest** with a defibrillator immediately available. In that setting, **early defibrillation is the priority**. The 2025 AHA adult ALS guidance emphasizes that defibrillation is most effective when delivered as soon as possible after onset of VF/pVT, while pauses in compressions should be kept as short as possible.

**Why the other options are wrong:**
- **B:** A 2-minute CPR-first strategy is more relevant when VF duration is prolonged or unknown. It should not delay a ready shock in a monitored arrest.
- **C:** Epinephrine is part of the algorithm, but it does **not** come before the first shock in VF/pVT.
- **D:** Amiodarone or lidocaine may be considered for **VF/pVT unresponsive to defibrillation**, not before the initial defibrillation attempt.
- **E:** Advanced airway placement should not interrupt or delay priority interventions. In shockable arrest, CPR and defibrillation come first.
  `,
  references: [
    'Wigginton JG, et al. Part 9: Adult Advanced Life Support: 2025 American Heart Association Guidelines for Cardiopulmonary Resuscitation and Emergency Cardiovascular Care. Circulation. 2025;152(16_suppl_2):S538-S577. doi:10.1161/CIR.0000000000001376.',
    'Panchal AR, et al. Part 3: Adult Basic and Advanced Life Support: 2020 American Heart Association Guidelines for Cardiopulmonary Resuscitation and Emergency Cardiovascular Care. Circulation. 2020;142(16_suppl_2):S366-S468. doi:10.1161/CIR.0000000000000916.'
  ]
};
