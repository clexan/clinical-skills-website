import { QuizScenario } from '../quizData';

export const case037: QuizScenario = {
  id: 'case-037',
  slug: 'hemorrhagic-shock-crystalloid-harm',
  title: 'The Crystalloid Conundrum',
  category: 'Trauma',
  difficulty: 'Hard',
  vignette: "A 28-year-old male is brought to the ED following a motorcycle collision. ABCDE assessment reveals: Airway patent, Breathing 28/min with bilateral breath sounds, Circulation shows weak radial pulses. Vitals: HR 128 bpm, BP 82/54 mmHg, RR 28/min, Temp 36.1°C (96.9°F), SpO2 92% on room air. SAMPLE history reveals no significant medical history. FAST exam shows free fluid in Morrison's pouch and the pelvis. The trauma team has already administered 3 liters of normal saline over 20 minutes. The patient's BP transiently improved to 94/60 mmHg but has now dropped to 78/50 mmHg. Repeat labs show: Hgb 7.2 g/dL (from initial 10.1 g/dL), INR 1.8 (from 1.1), pH 7.22, lactate 6.2 mmol/L. The patient is becoming more confused and appears pale and cold.",
  question: 'What is the MOST appropriate next step in resuscitation?',
  options: [
    { id: 'A', text: "Administer an additional 2 liters of lactated Ringer's solution", isCorrect: false },
    { id: 'B', text: 'Initiate massive transfusion protocol with 1:1:1 ratio of plasma:platelets:RBCs and proceed to OR', isCorrect: true },
    { id: 'C', text: 'Continue crystalloid resuscitation until systolic BP reaches 110 mmHg', isCorrect: false },
    { id: 'D', text: 'Obtain CT abdomen/pelvis to characterize injuries before surgical intervention', isCorrect: false },
    { id: 'E', text: 'Administer 500 mL colloid solution followed by vasopressor support', isCorrect: false }
  ],
  explanation: `**Correct Answer: Initiate massive transfusion protocol with 1:1:1 ratio and proceed to OR**

This patient demonstrates the harmful effects of excessive crystalloid resuscitation in hemorrhagic shock, evidenced by worsening hemodynamics, dilutional coagulopathy (INR 1.8), and progressive anemia despite initial BP improvement.

**Clinical Pathophysiology:**

The "crystalloid trap" occurs when large-volume crystalloid administration (>2-3 liters) in uncontrolled hemorrhage causes:

- **Dilutional coagulopathy**: Depletion of clotting factors and platelets, worsening bleeding
- **Hypothermia**: Accelerated heat loss from cold IV fluids, impairing enzymatic coagulation
- **Acidosis**: Worsened tissue hypoperfusion and metabolic derangement
- **Clot disruption**: Increased intravascular pressure displaces formed clots before surgical control
- **Inflammatory complications**: ARDS, abdominal compartment syndrome, and multiple organ failure

Current damage control resuscitation principles mandate:

- **Limit crystalloid to ≤3 liters in first 6 hours** after hospital arrival
- **Early blood product resuscitation** with 1:1:1 ratio (plasma:platelets:RBCs) or whole blood
- **Permissive hypotension** (SBP 80-90 mmHg) until hemorrhage control
- **Rapid surgical control** of bleeding in FAST-positive, unstable patients

The PROPPR trial demonstrated that 1:1:1 transfusion ratios achieve hemostasis faster and reduce 24-hour exsanguination deaths. Each additional 500 mL of crystalloid in the first 6 hours increases ARDS risk by 9%.

**Why Other Options are Incorrect:**

**A (Additional crystalloid)**: Further crystalloid worsens dilutional coagulopathy, hypothermia, and acidosis—the "lethal triad." The patient has already received excessive crystalloid (3L), contributing to the deteriorating coagulation profile.

**C (Crystalloid to BP 110 mmHg)**: This violates permissive hypotension principles. Aggressive BP normalization before surgical control increases rebleeding through clot disruption and exacerbates coagulopathy. Target SBP should be 80-90 mmHg in trauma without TBI.

**D (CT imaging)**: A hemodynamically unstable patient with positive FAST exam requires immediate operative intervention, not CT. "A patient with trauma and hypotension does not belong in the CT suite"—this common pitfall delays life-saving hemorrhage control.

**E (Colloid and vasopressors)**: No benefit exists for colloids over crystalloid in hemorrhagic shock. Vasopressors before adequate volume resuscitation worsen tissue perfusion through vasoconstriction in hypovolemic states and are associated with increased mortality in trauma.`,
  references: ['ATLS 11th Edition', 'Journal of Trauma and Acute Care Surgery (2024)', 'New England Journal of Medicine (2018)', 'JAMA (2015) - PROPPR Trial']
};
