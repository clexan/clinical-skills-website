import { QuizScenario } from '../quizData';

export const case046: QuizScenario = {
  id: 'case-046',
  slug: 'grade-iv-splenic-laceration-management',
  title: 'The Splenic Salvage Decision',
  category: 'Trauma',
  difficulty: 'Hard',
  vignette: 'A 32-year-old male presents after a high-speed MVC. ABCDE assessment: Airway patent, Breathing 22/min, Circulation shows palpable radial pulses. Vitals: HR 108 bpm, BP 102/68 mmHg, RR 22/min, Temp 36.6°C (97.9°F), SpO2 96% on room air. SAMPLE: no medications, no medical history. FAST exam shows free fluid in the left upper quadrant and pelvis. After 1 unit PRBCs, BP stabilizes at 108/72 mmHg with HR 98 bpm. CT abdomen/pelvis with IV contrast shows a Grade IV splenic laceration (>3 cm parenchymal depth involving segmental vessels) with active contrast extravasation (blush) and a 2 cm pseudoaneurysm. No other significant injuries identified (ISS 20). The patient remains hemodynamically stable 30 minutes after initial resuscitation with no further transfusion requirements. Labs: Hgb 10.2 g/dL, lactate 2.8 mmol/L, INR 1.1.',
  question: "What is the MOST appropriate management strategy for this patient's splenic injury?",
  options: [
    { id: 'A', text: 'Non-operative management with serial abdominal exams and ICU monitoring alone', isCorrect: false },
    { id: 'B', text: 'Angiography with splenic artery embolization followed by ICU monitoring', isCorrect: true },
    { id: 'C', text: 'Immediate exploratory laparotomy with splenectomy', isCorrect: false },
    { id: 'D', text: 'Observation in ICU with repeat CT in 24 hours to reassess for delayed bleeding', isCorrect: false },
    { id: 'E', text: 'Laparoscopic splenorrhaphy to preserve splenic function', isCorrect: false }
  ],
  explanation: `**Correct Answer: Angiography with splenic artery embolization followed by ICU monitoring**

This case illustrates the modern approach to high-grade splenic injury management.

**Clinical Pathophysiology:**

**Contrast Blush/Pseudoaneurysm Significance:**
- **Contrast blush**: Active arterial extravasation on CT indicating ongoing bleeding.
- **Pseudoaneurysm**: Contained vascular disruption with high risk of rupture.
These are predictors of non-operative management (NOM) failure in 60-85% of cases without intervention.

**Evolution of Splenic Management:**
Modern paradigms favor splenic preservation (NOM) when possible to avoid **Overwhelming post-splenectomy infection (OPSI)**, a lifetime risk of fulminant sepsis from encapsulated organisms (S. pneumoniae, H. influenzae, N. meningitidis).

**NOM Criteria:**
1. Hemodynamic stability.
2. No peritonitis (rules out hollow viscus injury).
3. ICU-level monitoring.
4. Immediate OR availability.

**Angioembolization Indications:**
- Contrast blush (active extravasation) on CT.
- Pseudoaneurysm formation.
- Grade IV-V injuries in hemodynamically stable patients.
Angioembolization increases NOM success for Grade IV-V injuries from 60-75% to 85-95%.

**Why Other Options are Incorrect:**
**A (Observation alone)**: This patient has contrast blush and pseudoaneurysm; without intervention, the risk of delayed hemorrhage is unacceptably high.
**C (Immediate laparotomy)**: The patient is hemodynamically stable and isolated high-grade splenic injuries can be managed with angioembolization to preserve immune function.
**D (Repeat CT in 24 hours)**: Active extravasation (blush) requires urgent intervention, not delayed imaging.
**E (Laparoscopic splenorrhaphy)**: Laparoscopic approaches are generally contraindicated in acute trauma with active bleeding; angioembolization is the standard minimally invasive approach.`,
  references: ['Journal of Trauma and Acute Care Surgery (2012)', 'World Journal of Emergency Surgery (2020)', 'Journal of Trauma and Acute Care Surgery (2024)', 'British Journal of Surgery (2017)']
};
