import { QuizScenario } from '../quizData';

export const case083: QuizScenario = {
  id: 'case-083',
  slug: 'septic-shock-vasopressin-addition',
  title: 'Vasopressin Addition in Septic Shock',
  category: 'Emergency',
  difficulty: 'Hard',
  vignette: `A 67-year-old woman with pneumococcal pneumonia and septic shock has been in the ICU for 6 hours. She initially received 30 mL/kg crystalloid resuscitation and was started on norepinephrine. Her current vital signs are: temperature 38.1°C (100.6°F), heart rate 102 bpm, blood pressure 88/52 mmHg (MAP 64 mmHg), respiratory rate 18 breaths/min on mechanical ventilation, and oxygen saturation 94% on FiO2 0.50. She is currently receiving norepinephrine at 0.25 mcg/kg/min (approximately 18 mcg/min for her 70 kg weight). Her lactate has improved from 5.2 to 3.1 mmol/L. She has a history of coronary artery disease and atrial fibrillation. Her medications include aspirin, metoprolol, and apixaban. On examination, she is sedated on the ventilator with adequate urine output of 40 mL/hour.`,
  question: 'What is the MOST appropriate next step in vasopressor management?',
  options: [
    {
      id: 'A',
      text: 'Add vasopressin 0.03-0.04 units/min to raise MAP and potentially reduce norepinephrine requirements',
      isCorrect: true
    },
    {
      id: 'B',
      text: 'Continue increasing norepinephrine dose until MAP reaches 65 mmHg before considering additional agents',
      isCorrect: false
    },
    {
      id: 'C',
      text: 'Switch from norepinephrine to epinephrine for more potent vasopressor effect',
      isCorrect: false
    },
    {
      id: 'D',
      text: 'Add dobutamine to increase cardiac output and improve tissue perfusion',
      isCorrect: false
    },
    {
      id: 'E',
      text: 'Administer an additional fluid bolus of 500-1000 mL before escalating vasopressor therapy',
      isCorrect: false
    }
  ],
  explanation: `
**Correct Answer: A - Add vasopressin 0.03-0.04 units/min to raise MAP and potentially reduce norepinephrine requirements**

**Clinical Reasoning:**
This patient is on a moderate dose of norepinephrine (0.25 mcg/kg/min) with a MAP just below target (64 mmHg vs. goal 65 mmHg). The Surviving Sepsis Campaign 2021 guidelines recommend **adding vasopressin as a second-line agent** either to raise MAP to target or to decrease norepinephrine dosage. Vasopressin can be added at **any point** when additional vasopressor support is needed, though it is commonly initiated when norepinephrine doses reach 0.25-0.5 mcg/kg/min. Vasopressin works through V1 receptors on vascular smooth muscle, causing vasoconstriction through a non-adrenergic mechanism. In septic shock, there is relative vasopressin deficiency, and exogenous administration at physiologic replacement doses (0.03-0.04 units/min) can be highly effective. The VASST trial demonstrated that vasopressin addition reduced norepinephrine requirements and showed a mortality benefit in the subgroup with less severe shock. **Vasopressin is given at a fixed dose** (0.03-0.04 units/min), not titrated, as higher doses cause excessive vasoconstriction and cardiac ischemia. Adding vasopressin now is appropriate given the moderate norepinephrine requirement and MAP slightly below target.

**Why Others are Wrong:**
* **B (Continue escalating norepinephrine alone):** While continuing to increase norepinephrine is not wrong, adding a second agent with a different mechanism of action (vasopressin) is preferred once moderate doses are reached. High-dose norepinephrine monotherapy (>0.5-1.0 mcg/kg/min) is associated with increased adverse effects including arrhythmias, digital ischemia, and splanchnic hypoperfusion. Early addition of vasopressin may prevent the need for very high catecholamine doses.
* **C (Switch to epinephrine):** Switching from norepinephrine to epinephrine is not recommended. The approach should be to add agents sequentially, not replace them. Epinephrine is reserved for refractory shock despite norepinephrine and vasopressin, or as an alternative when norepinephrine is unavailable.
* **D (Add dobutamine):** Dobutamine is indicated for patients with evidence of persistent hypoperfusion despite adequate MAP and volume status, particularly when cardiac output is low ("cold" septic shock). This patient has improving lactate and adequate urine output, suggesting reasonable perfusion. There is no indication for inotropic support at this time.
* **E (Additional fluid bolus):** This patient has already received appropriate initial resuscitation (30 mL/kg) and is 6 hours into her ICU course. Additional fluid boluses should be guided by assessment of fluid responsiveness (passive leg raise, pulse pressure variation) and evidence of ongoing hypovolemia. Routine fluid boluses without such assessment can lead to fluid overload without hemodynamic benefit.
  `,
  references: [
    'Evans L, Rhodes A, Alhazzani W, et al. Surviving Sepsis Campaign: International Guidelines for Management of Sepsis and Septic Shock 2021. Crit Care Med. 2021;49(11):e1063-e1143.',
    'Russell JA, Walley KR, Singer J, et al. Vasopressin versus norepinephrine infusion in patients with septic shock. N Engl J Med. 2008;358(9):877-887.',
    'Gordon AC, Mason AJ, Thirunavukkarasu N, et al. Effect of early vasopressin vs norepinephrine on kidney failure in patients with septic shock: the VANISH randomized clinical trial. JAMA. 2016;316(5):509-518.',
    'Nagendran M, Russell JA, Walley KR, et al. Vasopressin in septic shock: an individual patient data meta-analysis of randomised controlled trials. Intensive Care Med. 2019;45(6):844-855.'
  ]
};
