import { QuizScenario } from '../quizData';

export const case041: QuizScenario = {
  id: 'case-041',
  slug: 'hemorrhagic-shock-pelvic-binder-error',
  title: 'The Pelvic Binder Error',
  category: 'Trauma',
  difficulty: 'Hard',
  vignette: 'A 38-year-old female is brought in after being struck by a vehicle while walking. ABCDE assessment: Airway patent, Breathing 24/min, Circulation shows weak peripheral pulses. Vitals: HR 126 bpm, BP 78/52 mmHg, RR 24/min, Temp 36.2°C (97.2°F), SpO2 94% on room air. SAMPLE: no medications or medical history. Physical exam reveals pelvic instability with "springing" on anteroposterior compression, ecchymosis over the lower abdomen, and tenderness over the symphysis pubis. FAST exam is negative for intraperitoneal free fluid. Pelvis X-ray shows widening of the symphysis pubis to 4.5 cm and widening of the sacroiliac joints bilaterally (open-book fracture). No pelvic binder has been applied. The patient has received 2 units O-negative RBCs with minimal BP response. Labs: Hgb 7.1 g/dL, lactate 7.8 mmol/L, base deficit -10.',
  question: "What is the MOST critical immediate intervention for this patient's hemorrhagic shock?",
  options: [
    { id: 'A', text: 'Proceed directly to angiography for pelvic arterial embolization', isCorrect: false },
    { id: 'B', text: 'Apply pelvic binder at level of greater trochanters and initiate massive transfusion protocol', isCorrect: true },
    { id: 'C', text: 'Obtain CT angiography of pelvis to identify bleeding source before intervention', isCorrect: false },
    { id: 'D', text: 'Perform exploratory laparotomy given hemodynamic instability', isCorrect: false },
    { id: 'E', text: 'Place external pelvic fixator in the operating room', isCorrect: false }
  ],
  explanation: `**Correct Answer: Apply pelvic binder at level of greater trochanters and initiate massive transfusion protocol**

This case demonstrates a critical error: failure to recognize and immediately stabilize an open-book pelvic fracture as the source of occult hemorrhagic shock.

**Clinical Pathophysiology:**

**Open-book pelvic fracture** (APC-III/Tile Type C):
- Anteroposterior compression injury causing symphysis pubis diastasis (>2.5 cm is severe)
- Bilateral sacroiliac joint disruption
- Creates massive increase in pelvic volume (can accommodate several liters of blood)
- Disrupts pelvic venous plexus (80% of bleeding) and potentially arteries (20%)

**Critical Immediate Intervention - Pelvic Binder:**

Pelvic binder application is a **Grade 1A recommendation** for hemodynamically unstable pelvic fractures:

**Mechanism of hemorrhage control:**
- Reduces pelvic volume by approximating fracture fragments
- Compresses venous plexus (primary bleeding source in 80% of cases)
- Provides tamponade effect in retroperitoneal space
- Stabilizes fracture to prevent further soft tissue and vascular injury

**Proper application:**
- Position at level of **greater trochanters** (NOT over iliac crests)
- Apply over symphysis pubis

**Comprehensive Management Algorithm:**
1. **Immediate**: Pelvic binder + massive transfusion protocol
2. **If persistent instability after binder**:
   - Preperitoneal pelvic packing (PPP) for venous bleeding
   - Angioembolization for arterial bleeding
3. **Definitive**: External fixation or internal fixation when stable

**Why Other Options are Incorrect:**

**A (Direct to angiography)**: While angioembolization is important for arterial bleeding (20% of cases), it does NOT address venous bleeding (80% of cases). The patient needs immediate pelvic volume reduction with a binder first.

**C (CT angiography first)**: This repeats the "CT scanner of death" error. The patient is hemodynamically unstable with an obvious open-book fracture on plain X-ray. CT will delay critical interventions.

**D (Exploratory laparotomy)**: The FAST is negative, ruling out intraperitoneal bleeding. Laparotomy will not address retroperitoneal pelvic hemorrhage.

**E (External fixator in OR)**: While external fixation provides definitive mechanical stability, the pelvic binder provides immediate temporizing stabilization and should be applied NOW in the trauma bay.`,
  references: ['World Journal of Emergency Surgery (2017) - WSES Pelvic Trauma Guidelines', 'JAMA Surgery (2023)', 'Injury (2021)', 'Scientific Reports (2021)']
};
