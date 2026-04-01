import { QuizScenario } from '../quizData';

export const case038: QuizScenario = {
  id: 'case-038',
  slug: 'hemorrhagic-shock-pressor-pitfall',
  title: 'The Pressor Pitfall',
  category: 'Trauma',
  difficulty: 'Hard',
  vignette: 'A 42-year-old female arrives via EMS following a high-speed MVC with prolonged extrication. ABCDE assessment: Airway secured with endotracheal tube, Breathing shows bilateral breath sounds with RR 16/min on ventilator, Circulation reveals absent radial pulses and weak femoral pulses. Vitals: HR 142 bpm, BP 68/42 mmHg, RR 16/min (ventilated), Temp 35.8°C (96.4°F), SpO2 98% on FiO2 100%. SAMPLE: no medications, no allergies. FAST exam is positive for intraperitoneal free fluid. The patient has received 2 units of O-negative RBCs and 2 units of plasma en route. The ED resident suggests starting norepinephrine at 0.1 mcg/kg/min to "buy time" while awaiting the OR. Labs show: Hgb 6.8 g/dL, INR 1.6, pH 7.18, lactate 8.4 mmol/L, base deficit -12.',
  question: "What is the MOST appropriate management of this patient's hypotension?",
  options: [
    { id: 'A', text: 'Start norepinephrine infusion immediately to achieve MAP >65 mmHg', isCorrect: false },
    { id: 'B', text: 'Continue blood product resuscitation with permissive hypotension (SBP 80-90 mmHg) and proceed emergently to OR', isCorrect: true },
    { id: 'C', text: 'Administer 2 liters of crystalloid bolus before considering vasopressors', isCorrect: false },
    { id: 'D', text: 'Start low-dose vasopressin (0.04 units/min) as it is safer than norepinephrine in hemorrhagic shock', isCorrect: false },
    { id: 'E', text: 'Initiate phenylephrine infusion to avoid the tachycardia associated with norepinephrine', isCorrect: false }
  ],
  explanation: `**Correct Answer: Continue blood product resuscitation with permissive hypotension and proceed emergently to OR**

This case illustrates the critical error of using vasopressors before adequate volume resuscitation and hemorrhage control in traumatic hemorrhagic shock.

**Clinical Pathophysiology:**

In hemorrhagic shock, the pathophysiology evolves through two phases:

1. **Sympathoexcitatory phase**: Initial compensatory vasoconstriction, tachycardia, preserved MAP
2. **Sympathoinhibitory phase**: Progressive vasodilation with hypotension (this patient's state)

Vasopressor use before hemorrhage control causes harm through:

- **Exacerbation of tissue hypoperfusion**: Vasoconstriction in already hypovolemic state worsens capillary perfusion and organ ischemia
- **Masking of ongoing hemorrhage**: Artificially elevated BP obscures continued blood loss
- **Increased cardiac afterload**: Worsened myocardial oxygen demand in shock state
- **Dose-dependent mortality**: Studies show mortality increases with vasopressor dose; norepinephrine >16 mcg/min has 79% mortality in trauma

Retrospective data consistently demonstrate **worse outcomes** in hemorrhagic shock patients treated with vasopressors, attributed to:

- Underresuscitation and persistent hypovolemia
- Delayed recognition of ongoing bleeding
- Worsened microcirculatory dysfunction

**Appropriate Management:**

- **Mechanical hemorrhage control** is the priority (surgery for this FAST-positive patient)
- **Blood product resuscitation**: Continue 1:1:1 ratio transfusion
- **Permissive hypotension**: Target SBP 80-90 mmHg until surgical control
- **Vasopressors only after**: Volume resuscitation AND hemorrhage control, if vasodilatory shock persists

The AVERT-Shock trial showed low-dose vasopressin reduced blood product use in hemorrhagic shock, but this was in patients receiving concurrent aggressive resuscitation—not as a substitute for volume replacement.

**Why Other Options are Incorrect:**

**A (Norepinephrine to MAP >65)**: This violates damage control resuscitation principles. Vasopressors before hemorrhage control worsen tissue perfusion through vasoconstriction in hypovolemia. The target MAP >65 mmHg is inappropriate—permissive hypotension (SBP 80-90 mmHg) is indicated until surgical control.

**C (2L crystalloid before vasopressors)**: This combines two errors: excessive crystalloid worsens dilutional coagulopathy, and vasopressors remain contraindicated before hemorrhage control regardless of crystalloid administration. Blood products, not crystalloid, are indicated.

**D (Low-dose vasopressin)**: While vasopressin showed promise in AVERT-Shock, it was studied as an adjunct to ongoing resuscitation, not as primary therapy before hemorrhage control. The patient needs immediate surgery, not pharmacologic BP support.

**E (Phenylephrine)**: Pure alpha-agonists like phenylephrine cause profound vasoconstriction without inotropic support, worsening tissue perfusion even more than norepinephrine. This is particularly harmful in hemorrhagic shock and offers no advantage.`,
  references: ['Journal of Trauma and Acute Care Surgery (2024) - AAST/ACS-COT Guidelines', 'Anesthesia & Analgesia (2021)', 'Lancet (2012)', 'World Journal of Emergency Surgery (2024)']
};
