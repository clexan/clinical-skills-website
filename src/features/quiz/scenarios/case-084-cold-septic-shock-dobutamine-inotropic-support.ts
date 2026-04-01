import { QuizScenario } from '../quizData';

export const case084: QuizScenario = {
  id: 'case-084',
  slug: 'cold-septic-shock-dobutamine-inotropic-support',
  title: 'Cold Septic Shock and Inotropic Support',
  category: 'Emergency',
  difficulty: 'Hard',
  vignette: `A 44-year-old man with necrotizing fasciitis and septic shock has been in the ICU for 12 hours. Despite aggressive resuscitation with 4 liters of crystalloid, norepinephrine at 0.35 mcg/kg/min, and vasopressin at 0.04 units/min, he continues to have signs of poor perfusion. His vital signs are: temperature 37.2°C (99°F), heart rate 118 bpm, blood pressure 108/68 mmHg (MAP 81 mmHg), respiratory rate 16 breaths/min on mechanical ventilation, and oxygen saturation 96% on FiO2 0.40. His lactate has plateaued at 4.8 mmol/L despite achieving MAP >65 mmHg. Urine output is 15 mL/hour. He has no significant past medical history and takes no medications. On examination, his extremities are cool with delayed capillary refill >4 seconds, and his skin is mottled. A bedside echocardiogram shows a small, hyperdynamic left ventricle with estimated ejection fraction of 35% and low stroke volume.`,
  question: "What is the MOST appropriate addition to this patient's hemodynamic management?",
  options: [
    {
      id: 'A',
      text: 'Add dobutamine 2.5-5 mcg/kg/min to increase cardiac output and improve tissue perfusion',
      isCorrect: true
    },
    {
      id: 'B',
      text: 'Increase norepinephrine to achieve a higher MAP target of 75-80 mmHg',
      isCorrect: false
    },
    {
      id: 'C',
      text: 'Administer an additional 1-2 liter fluid bolus to increase preload and stroke volume',
      isCorrect: false
    },
    {
      id: 'D',
      text: 'Add epinephrine as a third vasopressor given refractory shock',
      isCorrect: false
    },
    {
      id: 'E',
      text: 'Decrease vasopressor support as the MAP is above target and may be causing vasoconstriction',
      isCorrect: false
    }
  ],
  explanation: `
**Correct Answer: A - Add dobutamine 2.5-5 mcg/kg/min to increase cardiac output and improve tissue perfusion**

**Clinical Reasoning:**
This patient demonstrates **"cold" septic shock**—a less common phenotype characterized by low cardiac output rather than the typical high cardiac output, low systemic vascular resistance pattern. Key clinical features include: (1) **adequate MAP but persistent hypoperfusion** (elevated lactate, oliguria, cool extremities, mottling), (2) **echocardiographic evidence of reduced cardiac output** (EF 35%, low stroke volume), and (3) **signs of poor peripheral perfusion despite vasopressor support**. The Surviving Sepsis Campaign 2021 guidelines recommend considering **dobutamine infusion** (up to 20 mcg/kg/min) in patients with evidence of persistent hypoperfusion despite adequate intravascular volume and MAP. Dobutamine is a beta-1 and beta-2 agonist that increases myocardial contractility and heart rate while causing peripheral vasodilation. In "cold" septic shock with myocardial dysfunction (which can occur due to sepsis-induced cardiomyopathy, pre-existing heart disease, or severe acidosis), dobutamine can increase cardiac output and improve oxygen delivery to tissues. The starting dose is typically **2.5-5 mcg/kg/min**, titrated to clinical endpoints (lactate clearance, improved perfusion, increased urine output). Importantly, dobutamine should only be used when MAP is adequate, as its vasodilatory effects can worsen hypotension.

**Why Others are Wrong:**
* **B (Increase MAP target to 75-80 mmHg):** This patient's MAP is already 81 mmHg, well above the standard target of 65 mmHg. The SEPSISPAM trial showed no mortality benefit from higher MAP targets (75-85 mmHg) in general septic shock populations. The problem here is not inadequate MAP but rather inadequate cardiac output and tissue perfusion. Further increasing vasopressors would increase afterload and potentially worsen cardiac output.
* **C (Additional fluid bolus):** While fluid responsiveness should always be assessed, this patient has already received 4 liters of crystalloid and shows echocardiographic evidence of a small, hyperdynamic ventricle, suggesting the heart is underfilled but also unable to generate adequate stroke volume due to contractile dysfunction. Additional fluid without addressing the underlying low cardiac output is unlikely to improve perfusion and may worsen pulmonary edema. If fluid responsiveness is demonstrated (via passive leg raise or other dynamic measures), cautious fluid administration could be considered, but inotropic support is the priority.
* **D (Add epinephrine):** Epinephrine has both vasopressor and inotropic effects and could theoretically help, but it is typically reserved for refractory shock when other measures have failed. Dobutamine is preferred for isolated inotropic support when MAP is adequate because it has less arrhythmogenic potential and more predictable effects on cardiac output. Epinephrine would be appropriate if dobutamine fails or if there is concurrent hypotension.
* **E (Decrease vasopressor support):** While excessive vasoconstriction can impair tissue perfusion, this patient has clear evidence of inadequate cardiac output as the primary problem. Decreasing vasopressors would likely cause hypotension without addressing the underlying low cardiac output state. The MAP is appropriate; the issue is flow, not pressure.
  `,
  references: [
    'Evans L, Rhodes A, Alhazzani W, et al. Surviving Sepsis Campaign: International Guidelines for Management of Sepsis and Septic Shock 2021. Crit Care Med. 2021;49(11):e1063-e1143.',
    'Vieillard-Baron A, Caille V, Charron C, et al. Actual incidence of global left ventricular hypokinesia in adult septic shock. Crit Care Med. 2008;36(6):1701-1706.',
    'De Backer D, Biston P, Devriendt J, et al. Comparison of dopamine and norepinephrine in the treatment of shock. N Engl J Med. 2010;362(9):779-789.',
    'Levy B, Bollaert PE, Charpentier C, et al. Comparison of norepinephrine and dobutamine to epinephrine for hemodynamics, lactate metabolism, and gastric tonometric variables in septic shock: a prospective, randomized study. Intensive Care Med. 1997;23(3):282-287.'
  ]
};
