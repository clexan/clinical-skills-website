import { QuizScenario } from '../quizData';

export const case042: QuizScenario = {
  id: 'case-042',
  slug: 'pediatric-hemorrhagic-shock-compensation',
  title: 'The Normotensive Toddler',
  category: 'Trauma',
  difficulty: 'Hard',
  vignette: "A 3-year-old girl is brought to the ED after being struck by a car while crossing the street. ABCDE assessment: Airway patent with age-appropriate vocalizations, Breathing 42/min with bilateral breath sounds, Circulation reveals weak radial pulses and capillary refill of 5 seconds. Vitals: HR 168 bpm, BP 96/62 mmHg (normal for age: 95/58 mmHg), RR 42/min, Temp 36.8°C (98.2°F), SpO2 94% on room air. SAMPLE: no medications, no medical history. Physical exam shows pale, cool extremities, altered mental status (lethargic but responsive to painful stimuli), and abdominal distension with diffuse tenderness. The child weighs 15 kg. FAST exam shows free fluid in Morrison's pouch and the pelvis. Initial labs: Hgb 8.2 g/dL, lactate 6.8 mmol/L, base deficit -8.",
  question: "What is the MOST appropriate interpretation of this child's hemodynamic status and immediate management?",
  options: [
    { id: 'A', text: 'The normal blood pressure indicates compensated shock; administer 300 mL (20 mL/kg) crystalloid bolus and reassess', isCorrect: false },
    { id: 'B', text: 'The child is in decompensated hemorrhagic shock despite normal BP; activate massive transfusion protocol with 1:1:1 blood products and proceed to OR', isCorrect: true },
    { id: 'C', text: 'The normal blood pressure rules out significant hemorrhage; obtain CT abdomen/pelvis to characterize injuries', isCorrect: false },
    { id: 'D', text: 'Administer 450 mL (30 mL/kg) crystalloid bolus to achieve supranormal blood pressure before considering blood products', isCorrect: false },
    { id: 'E', text: 'The tachycardia is likely anxiety-related given normal BP; observe for 30 minutes before intervention', isCorrect: false }
  ],
  explanation: `**Correct Answer: The child is in decompensated hemorrhagic shock despite normal BP; activate MTP and proceed to OR**

This case illustrates the critical principle that **children maintain normal blood pressure until severe blood loss** (30-40% of blood volume), making hypotension a late and ominous finding in pediatric hemorrhagic shock.

**Clinical Pathophysiology:**

**Pediatric Compensatory Mechanisms:**
Children possess robust cardiovascular compensatory mechanisms that differ fundamentally from adults:
- **Powerful vasoconstriction**: Increased systemic vascular resistance maintains blood pressure despite significant hypovolemia.
- **Marked tachycardia**: Heart rate increases dramatically to preserve cardiac output (CO = HR × SV).
- **Preferential perfusion**: Blood flow redirected to vital organs (heart, brain) at expense of periphery.
- **Delayed hypotension**: Blood pressure remains normal until ~40% blood volume loss (Class III-IV shock).

**This child demonstrates Class III hemorrhagic shock:**
- **Severe tachycardia**: HR 168 bpm (normal for 3-year-old: 80-120 bpm) indicates 30-40% blood loss.
- **Prolonged capillary refill**: >3 seconds indicates poor peripheral perfusion.
- **Altered mental status**: Lethargy indicates inadequate cerebral perfusion despite "normal" BP.
- **Weak peripheral pulses**: Vasoconstriction maintaining central pressure.
- **Metabolic acidosis**: Lactate 6.8 mmol/L, base deficit -8 confirm tissue hypoperfusion.
- **Anemia**: Hgb 8.2 g/dL indicates significant blood loss.
- **FAST positive**: Hemoperitoneum requiring surgical control.

**Why Hypotension is a Late Finding:**
In children, compensatory mechanisms are so effective that hypotension may not occur until 40% blood volume loss or more. **When a child becomes hypotensive, cardiovascular collapse and cardiac arrest are imminent**—this represents decompensated shock requiring immediate aggressive intervention.

**Why Other Options are Incorrect:**
**A (Crystalloid bolus)**: While 20 mL/kg crystalloid boluses are standard for pediatric shock, this child has clear hemorrhagic shock requiring blood products.
**C (Normal BP rules out hemorrhage)**: Normal blood pressure in children does NOT rule out severe hemorrhagic shock. 
**D (30 mL/kg crystalloid)**: Excessive crystalloid worsens dilutional coagulopathy and targeting supranormal BP violates permissive hypotension principles.
**E (Anxiety)**: The tachycardia is NOT anxiety—it is the primary compensatory mechanism for severe blood loss.`,
  references: ['JAMA Pediatrics (2023)', 'Circulation (2025) - PALS Guidelines', 'Pediatrics (2026) - PALS Guidelines', 'New England Journal of Medicine (2018)']
};
