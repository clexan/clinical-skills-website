import { QuizScenario } from '../quizData';

export const case051: QuizScenario = {
  id: 'case-051',
  slug: 'delayed-splenic-rupture',
  title: 'The Two-Stage Bleed',
  category: 'Trauma',
  difficulty: 'Hard',
  vignette: 'A 38-year-old female was admitted 52 hours ago after a motor vehicle collision. Initial CT showed a grade III splenic laceration with small subcapsular hematoma and minimal free fluid. Her hemoglobin remained stable at 11.2-11.8 g/dL over 48 hours. She was transferred to the floor 6 hours ago. She now develops sudden-onset severe left upper quadrant pain, left shoulder pain, and lightheadedness. ABCDE assessment: Airway patent, Breathing 28/min, Circulation shows weak radial pulses. Vitals: HR 132 bpm, BP 82/52 mmHg, RR 28/min, Temp 36.9°C (98.4°F), SpO2 95% on room air. Physical exam shows marked abdominal distension, diffuse tenderness with guarding, and positive Kehr sign (left shoulder pain). FAST exam shows massive free fluid in all quadrants. Stat hemoglobin: 6.8 g/dL (down from 11.6 g/dL 8 hours ago).',
  question: 'What is the MOST likely diagnosis and appropriate management?',
  options: [
    { id: 'A', text: 'Delayed splenic rupture from subcapsular hematoma expansion; activate MTP and proceed emergently to OR for splenectomy', isCorrect: true },
    { id: 'B', text: 'Progression of original splenic injury; perform urgent angioembolization to salvage the spleen', isCorrect: false },
    { id: 'C', text: 'Missed hollow viscus injury with delayed perforation; proceed to OR for exploratory laparotomy', isCorrect: false },
    { id: 'D', text: 'Spontaneous splenic rupture from underlying pathology (lymphoma, mononucleosis); obtain CT before intervention', isCorrect: false },
    { id: 'E', text: 'Rebleeding from original injury; resuscitate with crystalloid and repeat FAST in 2 hours', isCorrect: false }
  ],
  explanation: `**Correct Answer: Delayed splenic rupture; activate MTP and proceed to OR for splenectomy**

This patient demonstrates **delayed splenic rupture**, a well-recognized complication of blunt splenic trauma where a subcapsular hematoma ruptures hours to days after the initial injury.

**Clinical Pathophysiology:**
1. **Initial injury**: Splenic laceration with the capsule intact or minimally disrupted.
2. **Subcapsular hematoma formation**: Blood accumulates beneath the splenic capsule, contained by the tamponade effect of the capsule.
3. **Capsular rupture**: Sudden release of contained blood into the peritoneum, leading to massive hemoperitoneum.
- **Timing**: Most common in the 24-48 hour window but well-documented up to several days later (this patient: 52 hours).

**Classic Presentation:**
- **Sudden deterioration** in a previously stable patient.
- **Kehr sign**: Left shoulder pain from diaphragmatic irritation by phrenic nerve.
- **Hemorrhagic shock**: Tachycardia, hypotension, and acute anemia (Hgb 6.8).
- **Massive hemoperitoneum**: FAST positive in all quadrants.

**Management:**
1. **Activate MTP**: The patient is in Class III-IV shock.
2. **Emergent OR**: Exploratory laparotomy with **splenectomy** is the definitive treatment for free rupture with hemodynamic instability.
- **Why NOT angioembolization?**: Embolization is for stable patients with contained bleeding or contrast blush. Free rupture with shock requires immediate surgical control.

**Why Other Options are Incorrect:**
- **B (Angioembolization)**: The patient is unstable with massive free blood; surgery is required to stop the bleeding.
- **C (Hollow viscus injury)**: Hollow viscus perforation would cause peritonitis and free air (pneumoperitoneum), not sudden massive hemorrhage and shock.
- **D (Spontaneous)**: Given the clear traumatic mechanism 52 hours ago, this is traumatic, not spontaneous. CT is contraindicated in this unstable patient.
- **E (Observation)**: Waiting for another FAST is dangerous; the patient needs surgery NOW to prevent exsanguination.`,
  references: ['World Journal of Emergency Surgery (2020)', 'Journal of Trauma and Acute Care Surgery (2012)', 'Injury (2015)']
};
