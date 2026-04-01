import { QuizScenario } from '../quizData';

export const case040: QuizScenario = {
  id: 'case-040',
  slug: 'hemorrhagic-shock-ct-scanner-death',
  title: 'The CT Scanner of Death',
  category: 'Trauma',
  difficulty: 'Hard',
  vignette: "A 52-year-old male presents after being struck by a car while crossing the street. ABCDE assessment: Airway patent, Breathing 26/min with decreased breath sounds on left, Circulation shows thready radial pulses. Vitals: HR 134 bpm, BP 84/56 mmHg, RR 26/min, Temp 36.4°C (97.5°F), SpO2 91% on 15L non-rebreather. SAMPLE: takes aspirin daily, no other history. FAST exam performed in trauma bay shows moderate free fluid in Morrison's pouch, splenorenal recess, and pelvis. Left chest tube placed, draining 400 mL blood initially. After 1 unit O-negative RBCs and 1 unit plasma, BP improves to 92/58 mmHg. The trauma attending is in another OR. The radiology resident suggests obtaining a CT chest/abdomen/pelvis 'to better characterize injuries and guide surgical planning.' The patient would need to be transported 2 floors away to the CT scanner.",
  question: 'What is the MOST appropriate next step in management?',
  options: [
    { id: 'A', text: 'Proceed with CT imaging as the patient has responded to initial resuscitation', isCorrect: false },
    { id: 'B', text: 'Activate massive transfusion protocol and proceed directly to operating room for exploratory laparotomy', isCorrect: true },
    { id: 'C', text: 'Obtain CT only if the patient can be continuously resuscitated in the scanner with blood products', isCorrect: false },
    { id: 'D', text: 'Perform diagnostic peritoneal lavage to confirm need for surgery before CT', isCorrect: false },
    { id: 'E', text: 'Administer additional 2 units RBCs and reassess hemodynamic stability before imaging decision', isCorrect: false },
  ],
  explanation: `**Correct Answer: Activate massive transfusion protocol and proceed directly to OR**

This case illustrates a critical and potentially fatal error: sending a hemodynamically unstable patient with a positive FAST exam to CT imaging. This patient requires immediate surgical hemorrhage control.

**Clinical Pathophysiology:**

The patient demonstrates **hemodynamic instability** despite transient response to resuscitation:

- Persistent tachycardia (HR 134 bpm)
- Hypotension requiring blood products (SBP 84→92 mmHg)
- FAST positive for hemoperitoneum
- Hemothorax (400 mL initial output)
- Aspirin use (impaired platelet function)

**Transient response** to resuscitation indicates ongoing hemorrhage requiring surgical control. The temporary BP improvement does NOT indicate stability—it reflects brief compensation that will deteriorate with continued bleeding.

**Why CT is Contraindicated:**

"A patient with trauma and hypotension does not belong in the CT suite." This principle exists because:

1. **Delays definitive hemorrhage control**: Every minute delays life-saving surgery
2. **Loss of monitoring and access**: Limited ability to resuscitate during transport and scanning
3. **Decompensation risk**: Patients often deteriorate catastrophically in the scanner, away from resuscitation resources
4. **No change in management**: FAST-positive + unstable = laparotomy regardless of CT findings

**Correct Management:**

1. Activate massive transfusion protocol (1:1:1 ratio)
2. Notify OR and surgical team immediately
3. Continue resuscitation en route to OR
4. Damage control laparotomy for hemorrhage control
5. Address hemothorax (chest tube already placed; may need thoracotomy if ongoing bleeding)`,
  references: [
    'New England Journal of Medicine (2019)',
    'ACR Appropriateness Criteria (2026)',
    'American College of Surgeons Best Practices Guidelines (2018)',
    'Journal of the American College of Radiology (2020)',
  ],

  // ── Enhanced clinical decision interface data ──────────────────────────────
  findings: {
    mechanism: { value: 'Pedestrian struck by vehicle at road speed', status: 'normal' },
    airway:    { value: 'Patent', status: 'normal' },
    breathing: { value: '26/min · ↓ L breath sounds · SpO₂ 91% on 15L NRB', status: 'warning' },
    circulation: { value: 'Thready pulses · HR 134 bpm · BP 84/56 mmHg', status: 'critical' },
    fast:      { value: 'Positive — Morrison\'s, splenorenal recess, pelvis', status: 'critical' },
    interventions: { value: 'L chest tube → 400 mL · 1u pRBC + 1u FFP given', status: 'warning' },
    response:  { value: 'Transient only — BP 84 → 92 mmHg; still tachycardic', status: 'critical' },
  },

  skillTested: 'Identify haemodynamic instability · avoid CT in FAST-positive unstable trauma',

  linkedChapter: 'haemorrhagic-shock',

  verdictOneLineSummary:
    'Unstable blunt trauma + positive FAST + transient resuscitation response. CT is the wrong move — OR immediately.',

  optionRationale: {
    A: 'Transient BP improvement (84→92) does not equal stability. The patient remains tachycardic at HR 134 and hypotensive. Transport to CT removes resuscitation infrastructure and delays life-saving surgery by critical minutes — the definition of the "CT scanner of death" error.',
    B: 'FAST-positive + haemodynamic instability + transient response = damage-control laparotomy with MTP activation (1:1:1 ratio). No further imaging changes this decision. This is the only correct immediate step.',
    C: 'Even with in-scanner blood products, transport delay, reduced monitoring capacity, and inability to perform surgical haemostasis in the CT suite make this unacceptable. The physiology demands OR, not optimised CT logistics.',
    D: 'DPL is obsolete when FAST is already positive for haemoperitoneum. It adds dangerous delay with zero change in management. DPL is reserved for FAST-equivocal or FAST-unavailable cases only.',
    E: 'Additional products without surgical source control will not stop ongoing haemorrhage. The transient response is the signal — bleeding continues. Further temporising leads to exsanguination and lethal triad entrenchment.',
  },
};
