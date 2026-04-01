import { QuizScenario } from '../quizData';

export const case045: QuizScenario = {
  id: 'case-045',
  slug: 'penetrating-torso-scoop-and-run',
  title: 'Scoop and Run',
  category: 'Trauma',
  difficulty: 'Hard',
  vignette: 'A 28-year-old male sustains a single stab wound to the left chest at the level of the 5th intercostal space, anterior axillary line. EMS arrives within 3 minutes. ABCDE assessment in field: Airway patent, Breathing 26/min with decreased breath sounds on left, Circulation shows weak radial pulses. Vitals: HR 128 bpm, BP 82/56 mmHg, RR 26/min, SpO2 88% on room air. SAMPLE: no medications, no medical history. The patient is alert and anxious. The EMS team is 8 minutes from a Level I trauma center. The paramedic suggests placing a chest tube, establishing two large-bore IVs, and administering 2 liters of normal saline before transport.',
  question: 'What is the MOST appropriate prehospital management strategy?',
  options: [
    { id: 'A', text: 'Perform needle decompression, establish one IV en route, administer minimal crystalloid to maintain mentation, and transport immediately ("scoop and run")', isCorrect: true },
    { id: 'B', text: 'Place chest tube, establish two IVs, administer 2 liters crystalloid, then transport ("stay and play")', isCorrect: false },
    { id: 'C', text: 'Establish two IVs, administer crystalloid to achieve systolic BP >110 mmHg before transport', isCorrect: false },
    { id: 'D', text: 'Perform prehospital resuscitative thoracotomy given hemodynamic instability', isCorrect: false },
    { id: 'E', text: 'Delay transport to initiate prehospital blood product transfusion protocol', isCorrect: false }
  ],
  explanation: `**Correct Answer: Needle decompression, one IV en route, minimal crystalloid, immediate transport ("scoop and run")**

This case illustrates the critical **"scoop and run" versus "stay and play"** decision in penetrating torso trauma.

**Clinical Pathophysiology:**

**Penetrating Torso Trauma Principles:**
Injuries to the torso (chest, abdomen, pelvis) often cause uncontrolled hemorrhage from vascular injuries requiring surgical control. **No prehospital intervention achieves definitive hemostasis**—only surgery can.

**"Scoop and Run" (Penetrating Torso Trauma):**
- **Minimal scene time**: <10 minutes ideal.
- **Limited interventions**: Only life-saving procedures that don't delay transport.
- **Rapid transport**: To trauma center with surgical capability.
- **Permissive hypotension**: Minimal fluid to maintain mentation/radial pulse.

**"Stay and Play" (Blunt Trauma, Medical Emergencies):**
- **Extended scene time**: For stabilization procedures.
- **Advanced interventions**: Intubation, chest tubes, aggressive fluid resuscitation.

**Evidence for "Scoop and Run":**
Landmark studies show improved survival with delayed resuscitation (no IV fluids until OR) because it avoids dilutional coagulopathy and clot disruption. Every minute of delay to definitive hemostasis increases mortality.

**Why Other Options are Incorrect:**
**B ("Stay and play")**: Chest tube placement takes 5-10 minutes and delays transport—it can be performed in the ED/OR.
**C (SBP >110 mmHg)**: Normalizing BP before transport increases hemorrhage through clot disruption.
**D (Prehospital thoracotomy)**: Indicated only for witnessed traumatic cardiac arrest in select systems.
**E (Delay for blood)**: Delaying transport for prehospital blood transfusion is harmful when definitive care is 8 minutes away.`,
  references: ['New England Journal of Medicine (2018)', 'Lancet (2004)', 'Critical Care (2022)', 'New England Journal of Medicine (2019)']
};
