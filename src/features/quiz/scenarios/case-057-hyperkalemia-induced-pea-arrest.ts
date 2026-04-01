import { QuizScenario } from '../quizData';

export const case057: QuizScenario = {
  id: 'case-057',
  slug: 'hyperkalemia-induced-pea-arrest',
  title: 'Hyperkalemia-Induced PEA Arrest',
  category: 'Emergency',
  difficulty: 'Hard',
  vignette:
    'A 62-year-old man with end-stage renal disease on hemodialysis presents with weakness and palpitations after missing his last two dialysis sessions. Blood pressure is 98/62 mmHg and heart rate is 48 bpm. His ECG shows peaked T waves and a widened QRS. While treatment is being prepared, he becomes unresponsive and pulseless. The monitor shows organized electrical activity at 35 bpm.',
  question: 'What is the MOST appropriate immediate pharmacologic intervention directed at the likely reversible cause of this arrest?',
  options: [
    { id: 'A', text: 'Administer calcium chloride 1 g IV or calcium gluconate 3 g IV', isCorrect: true },
    { id: 'B', text: 'Administer epinephrine 1 mg IV as the first specific therapy', isCorrect: false },
    { id: 'C', text: 'Administer sodium bicarbonate 50 mEq IV as the only immediate therapy', isCorrect: false },
    { id: 'D', text: 'Administer insulin 10 units IV with dextrose 50 g IV before calcium', isCorrect: false },
    { id: 'E', text: 'Administer albuterol 10-20 mg by nebulizer during CPR', isCorrect: false }
  ],
  explanation: `
**Correct Answer: Administer calcium chloride 1 g IV or calcium gluconate 3 g IV**

This arrest is highly suspicious for **severe hyperkalemia**: missed dialysis, bradycardia, peaked T waves, QRS widening, and progression to PEA. In the 2025 AHA special-circumstances guidance, IV calcium **may be considered** in cardiac arrest from suspected hyperkalemia. Among the listed options, it is the best immediate drug aimed at the reversible cause because it provides **myocardial membrane stabilization**.

Standard ACLS should continue in parallel, including CPR and epinephrine for PEA, but the question asks for the **most immediate etiologic pharmacologic intervention**.

**Why the other options are wrong:**
- **B:** Epinephrine remains part of the PEA algorithm, but it does not directly stabilize the hyperkalemic myocardium.
- **C:** Sodium bicarbonate may also be considered, but calcium is typically the first targeted drug when ECG changes suggest life-threatening hyperkalemia.
- **D:** Insulin with dextrose shifts potassium intracellularly, but its effect is not as immediate as calcium's membrane-stabilizing effect.
- **E:** Inhaled beta-agonists are **not recommended** during cardiac arrest from suspected hyperkalemia.
  `,
  references: [
    'Cao D, Arens AM, Chow SL, et al. Part 10: Adult and Pediatric Special Circumstances of Resuscitation: 2025 American Heart Association Guidelines for Cardiopulmonary Resuscitation and Emergency Cardiovascular Care. Circulation. 2025;152(16_suppl_2):S578-S672. doi:10.1161/CIR.0000000000001380.',
    'Eggertsen MA, Munch Johannsen C, Kovacevic A, et al. Sodium Bicarbonate and Calcium Chloride for the Treatment of Hyperkalemia-Induced Cardiac Arrest: A Randomized, Blinded, Placebo-Controlled Animal Study. Crit Care Med. 2024;52(2):e67-e78. doi:10.1097/CCM.0000000000006089.',
    'Long B, Warix JR, Koyfman A. Controversies in Management of Hyperkalemia. J Emerg Med. 2018;55(2):192-205. doi:10.1016/j.jemermed.2018.04.004.'
  ]
};
