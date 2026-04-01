import { QuizScenario } from '../quizData';

export const case047: QuizScenario = {
  id: 'case-047',
  slug: 'retroperitoneal-hemorrhage-occult-shock',
  title: 'The Hidden Bleed',
  category: 'Trauma',
  difficulty: 'Hard',
  vignette: 'A 68-year-old male presents 6 hours after a fall from standing height. He was initially evaluated at an outside hospital where pelvic X-ray showed a minimally displaced left superior pubic ramus fracture. He now returns with worsening abdominal and flank pain. ABCDE assessment: Airway patent, Breathing 24/min, Circulation shows weak radial pulses. Vitals: HR 118 bpm, BP 88/54 mmHg, RR 24/min, Temp 36.4°C (97.5°F), SpO2 94% on room air. SAMPLE: takes warfarin for atrial fibrillation (INR 2.8), aspirin, and metoprolol. Physical exam reveals diffuse abdominal tenderness, left flank ecchymosis (Grey Turner sign), and a palpable left flank mass. Labs: Hgb 7.8 g/dL (baseline 14.2 g/dL), lactate 5.2 mmol/L, base deficit -8, creatinine 1.8 mg/dL.',
  question: "What is the MOST likely source of this patient's hemorrhagic shock and appropriate next step?",
  options: [
    { id: 'A', text: 'Intraperitoneal bleeding from occult solid organ injury; perform FAST exam and proceed to OR if positive', isCorrect: false },
    { id: 'B', text: 'Retroperitoneal hemorrhage from pelvic fracture; obtain CT angiography and proceed to angioembolization if contrast extravasation present', isCorrect: true },
    { id: 'C', text: 'Gastrointestinal bleeding from warfarin; reverse anticoagulation and perform upper endoscopy', isCorrect: false },
    { id: 'D', text: 'Intramuscular hematoma in the psoas; manage conservatively with warfarin reversal and observation', isCorrect: false },
    { id: 'E', text: 'Ruptured abdominal aortic aneurysm; proceed emergently to OR for open repair', isCorrect: false }
  ],
  explanation: `**Correct Answer: Retroperitoneal hemorrhage from pelvic fracture; obtain CT angiography and proceed to angioembolization**

This patient demonstrates **occult retroperitoneal hemorrhage** from a pelvic fracture.

**Clinical Pathophysiology:**

**Retroperitoneal Hemorrhage:**
The retroperitoneal space can accommodate **several liters of blood** before clinical signs become apparent. Bleeding here is **not detectable by FAST exam**.

**This Patient's Presentation:**
- **Grey Turner sign**: Flank ecchymosis from retroperitoneal blood tracking along tissue planes.
- **Palpable flank mass**: Indicates a significant retroperitoneal hematoma.
- **Severe anemia**: Hgb drop of 6.4 g/dL from baseline.
- **High-risk factors**: Warfarin (INR 2.8), aspirin, and beta-blockers (metoprolol) which can blunt compensatory tachycardia.

**Pelvic Fracture Hemorrhage:**
Even minimally displaced fractures in elderly, anticoagulated patients can cause life-threatening hemorrhage. 80% of bleeding is typically venous (pelvic plexus), but 20% can be arterial, requiring targeted intervention.

**Management:**
1. **Immediate resuscitation**: MTP activation and reversal of warfarin (PCC, Vitamin K).
2. **CT angiography**: Gold standard for identifying active arterial extravasation in stable or transiently stable patients.
3. **Angioembolization**: First-line for pelvic arterial hemorrhage; more effective than surgery for these deep vessels.

**Why Other Options are Incorrect:**
- **A (Intraperitoneal)**: Grey Turner sign and flank mass are classic for retroperitoneal, not intraperitoneal, blood. FAST will be negative.
- **C (GI Bleeding)**: Does not explain the flank ecchymosis or mass following trauma.
- **D (Conservative)**: Hemorrhagic shock (lactate 5.2) mandates active intervention.
- **E (AAA)**: While possible in this age group, the traumatic mechanism and pelvic fracture make the fracture the much more likely source.`,
  references: ['Journal of the American College of Radiology (2021)', 'Journal of Vascular and Interventional Radiology (2020)', 'JAMA Surgery (2023)']
};
