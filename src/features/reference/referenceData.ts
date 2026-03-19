export type ReferenceSeverity = "critical" | "urgent";
export type ReferenceFilterKey =
  | "all"
  | "critical"
  | "cardiac"
  | "respiratory"
  | "neuro"
  | "metabolic";

type ReferenceTag = Exclude<ReferenceFilterKey, "all">;

export interface EREntry {
  slug: string;
  title: string;
  subtitle: string;
  severity: ReferenceSeverity;
  tags: readonly ReferenceTag[];
  chapterSlug: string;
  firstStep: string;
  alert?: {
    label: string;
    body: string;
  };
  recognition: readonly string[];
  first5Minutes: readonly string[];
  diagnostics: readonly string[];
  priorities: readonly string[];
  medications: ReadonlyArray<{
    name: string;
    dose: string;
    note?: string;
  }>;
  contraindications: readonly string[];
  escalation: readonly string[];
  reassessment: readonly string[];
  keyNumbers?: readonly string[];
  sources: ReadonlyArray<{
    label: string;
    citation: string;
  }>;
}

export const referenceFilterChips = [
  { key: "all", label: "All" },
  { key: "critical", label: "Critical" },
  { key: "cardiac", label: "Cardiac" },
  { key: "respiratory", label: "Respiratory" },
  { key: "neuro", label: "Neuro" },
  { key: "metabolic", label: "Metabolic" },
] as const satisfies ReadonlyArray<{
  key: ReferenceFilterKey;
  label: string;
}>;

export const emergencyEntries = [
  {
    slug: "acs",
    title: "Acute coronary syndrome",
    subtitle: "Separate STE-ACS from NSTE-ACS early and move toward reperfusion without delay.",
    severity: "critical",
    tags: ["critical", "cardiac"],
    chapterSlug: "2-1-acs",
    firstStep: "12-lead ECG within 10 minutes, aspirin 300 mg PO, and activate the cath lab if STE-ACS is confirmed.",
    alert: {
      label: "PCI target",
      body: "Primary PCI within 120 min of first medical contact for STE-ACS. Fibrinolysis within 30 min if PCI unavailable within 120 min.",
    },
    recognition: [
      "Central chest pain or pressure, possibly radiating to arm, jaw, or back — with diaphoresis, nausea, or dyspnoea.",
      "ST elevation ≥ 1 mm in ≥ 2 contiguous limb leads, or ≥ 2 mm in precordial leads → STE-ACS.",
      "New LBBB or isolated posterior changes may represent a STE-ACS equivalent.",
      "Dynamic high-sensitivity troponin rise with ischaemic symptoms or ECG changes → NSTE-ACS.",
    ],
    first5Minutes: [
      "12-lead ECG — obtain and interpret within 10 min.",
      "Aspirin 300 mg PO immediately.",
      "IV access, continuous cardiac monitoring; supplemental oxygen only if SpO2 < 90%.",
      "Venous bloods: hs-troponin, FBC, renal, coagulation, lipids.",
      "STE-ACS: activate cath lab. NSTE-ACS: urgent cardiology review and GRACE risk score.",
    ],
    diagnostics: [
      "Serial ECGs at 15–30 min if initial tracing is non-diagnostic.",
      "hs-Troponin at 0 h and 1–2 h (0/1 h or 0/2 h rule-in/rule-out algorithm).",
      "CXR — do not delay PCI to obtain it. Echo when diagnosis is uncertain.",
      "Continuous cardiac monitoring, SpO2, and BP.",
    ],
    priorities: [
      "STE-ACS: primary PCI within 120 min from first medical contact; fibrinolysis only if PCI unavailable.",
      "NSTE-ACS: risk-stratify with GRACE score; timing of invasive strategy is risk-dependent.",
      "Do not preload a P2Y12 inhibitor in NSTE-ACS before coronary anatomy is defined.",
      "Anticoagulate with UFH or fondaparinux in NSTE-ACS; UFH or bivalirudin during PCI.",
    ],
    medications: [
      {
        name: "Aspirin",
        dose: "300 mg PO loading, then 75 mg daily",
      },
      {
        name: "Ticagrelor",
        dose: "180 mg PO loading",
        note: "Preferred P2Y12 agent in STE-ACS. In NSTE-ACS, give after coronary anatomy is defined.",
      },
      {
        name: "Nitroglycerin",
        dose: "0.4 mg SL every 5 min, up to 3 doses",
        note: "Avoid if SBP < 90 mmHg, right ventricular infarction, or PDE5 inhibitor use within 24–48 h.",
      },
      {
        name: "Morphine",
        dose: "2–5 mg IV titrated",
        note: "Use with caution in NSTE-ACS — delays P2Y12 inhibitor absorption.",
      },
      {
        name: "UFH",
        dose: "60 IU/kg IV bolus (max 4000 IU) for PCI",
      },
    ],
    contraindications: [
      "Nitrates with right ventricular infarction (inferior STE + V4R changes) or recent PDE5 inhibitor use.",
      "Anticoagulation before excluding type A aortic dissection if back pain or unequal pulses are present.",
      "P2Y12 preloading before coronary anatomy is defined in NSTE-ACS.",
    ],
    escalation: [
      "Cardiogenic shock: urgent PCI, vasopressors, and early consideration of mechanical circulatory support.",
      "Failed fibrinolysis (< 50% ST resolution at 60–90 min): rescue PCI.",
      "Refractory ventricular arrhythmia: amiodarone IV, correct electrolytes, senior cardiology input.",
    ],
    reassessment: [
      "Repeat ECG at 60–90 min after fibrinolysis: > 50% ST resolution indicates successful reperfusion.",
      "Serial hs-troponin per local 0/1 h or 0/2 h protocol for NSTE-ACS.",
      "Monitor for acute heart failure, recurrent ischaemia, and arrhythmia.",
    ],
    keyNumbers: [
      "Primary PCI target: < 120 min from first medical contact.",
      "Fibrinolysis door-to-needle target: < 30 min.",
      "Supplemental oxygen: only if SpO2 < 90%.",
    ],
    sources: [
      {
        label: "ESC 2023 ACS Guidelines",
        citation:
          "Byrne RA et al. 2023 ESC Guidelines for the management of acute coronary syndromes. Eur Heart J. 2023;44(38):3720–3826.",
      },
    ],
  },
  {
    slug: "arrhythmia",
    title: "Cardiac arrhythmia",
    subtitle: "Treat haemodynamic instability first, then narrow the rhythm diagnosis using QRS width and regularity.",
    severity: "urgent",
    tags: ["cardiac"],
    chapterSlug: "2-2-arrhythmias",
    firstStep: "Assess haemodynamic stability immediately — if unstable, prepare for cardioversion or pacing before drug therapy.",
    alert: {
      label: "Unstable rhythm",
      body: "Haemodynamically unstable tachycardia needs synchronised DC cardioversion. Unstable bradycardia needs atropine and early pacing.",
    },
    recognition: [
      "Broad-complex tachycardia (QRS ≥ 120 ms, rate > 100 bpm) — treat as VT until proven otherwise.",
      "Narrow-complex regular tachycardia suggests SVT (usually AV nodal re-entry).",
      "AF: irregularly irregular rhythm, absent P waves.",
      "Instability features: hypotension, reduced consciousness, chest pain, acute pulmonary oedema.",
      "Bradyarrhythmia with compromise: consider complete heart block or sinus arrest.",
    ],
    first5Minutes: [
      "Attach monitoring, obtain 12-lead ECG, IV access, continuous SpO2 and BP.",
      "If haemodynamically unstable tachycardia: synchronised DC cardioversion (200 J biphasic).",
      "If unstable bradycardia: atropine 0.5 mg IV; prepare transcutaneous pacing.",
      "Correct reversible causes: hypoxia, hypokalaemia, hypomagnesaemia, ischaemia, drug toxicity.",
    ],
    diagnostics: [
      "12-lead ECG: QRS width, regularity, P-wave morphology, axis, and QT interval.",
      "Electrolytes (K, Mg, Ca), thyroid function, and troponin if ischaemia is possible.",
      "Continuous cardiac monitoring throughout assessment and treatment.",
    ],
    priorities: [
      "Broad-complex tachycardia: treat as VT — do not give verapamil or diltiazem.",
      "Use electrical treatment early when perfusion is threatened; do not delay for repeated drug trials.",
      "Identify and treat the precipitating cause to prevent recurrence.",
    ],
    medications: [
      {
        name: "Amiodarone",
        dose: "300 mg IV over 20–60 min",
        note: "For stable broad-complex tachycardia or VT, or following failed cardioversion.",
      },
      {
        name: "Adenosine",
        dose: "6 mg rapid IV bolus; 12 mg, then 18 mg if needed",
        note: "For regular narrow-complex tachycardia. Caution in asthma; contraindicated in WPW.",
      },
      {
        name: "Atropine",
        dose: "0.5 mg IV every 3–5 min, up to 3 mg total",
        note: "For unstable bradyarrhythmia; pacing is usually the next step.",
      },
      {
        name: "Magnesium sulphate",
        dose: "2 g IV over 10 min",
        note: "For torsades de pointes with prolonged QT.",
      },
    ],
    contraindications: [
      "Verapamil and diltiazem are contraindicated in broad-complex tachycardia (risk of VF in VT).",
      "Adenosine is contraindicated in pre-excited AF (WPW) — can cause rapid conduction and VF.",
      "Do not cardiovert digoxin toxicity without correction first.",
      "Check QT interval before adding QT-prolonging antiarrhythmics.",
    ],
    escalation: [
      "Pulseless VT or VF: immediate unsynchronised defibrillation and ALS algorithm.",
      "Refractory VT: lidocaine 100 mg IV as an alternative; seek senior cardiology input.",
      "Symptomatic complete heart block: transcutaneous pacing, then arrange transvenous pacing.",
    ],
    reassessment: [
      "Repeat 12-lead ECG after any rhythm conversion.",
      "Monitor QT interval after amiodarone infusion.",
      "Identify and treat the precipitating cause to prevent recurrence.",
    ],
    keyNumbers: [
      "Broad-complex tachycardia: QRS ≥ 120 ms + rate > 100 bpm.",
      "DC cardioversion energy: 200 J biphasic for VT/AF; 100 J for atrial flutter.",
      "Maximum atropine dose: 3 mg total.",
    ],
    sources: [
      {
        label: "ERC ALS Guidelines 2021",
        citation:
          "Soar J et al. European Resuscitation Council Guidelines 2021: Advanced Life Support. Resuscitation. 2021;161:115–151.",
      },
      {
        label: "AHA/ACC/HRS Guideline 2018",
        citation:
          "Al-Khatib SM et al. 2017 AHA/ACC/HRS Guideline for management of patients with ventricular arrhythmias and prevention of sudden cardiac death. Circulation. 2018;138(13):e272–e391.",
      },
    ],
  },
  {
    slug: "anaphylaxis",
    title: "Anaphylaxis",
    subtitle: "Adrenaline IM is the only first-line treatment — give it immediately and do not let other drugs delay it.",
    severity: "critical",
    tags: ["critical", "respiratory"],
    chapterSlug: "3-4-anaphylaxis",
    firstStep: "Give adrenaline 0.5 mg IM into the anterolateral thigh immediately — before anything else.",
    alert: {
      label: "Adrenaline first",
      body: "Antihistamines and steroids must never delay or replace IM adrenaline. Give it before everything else.",
    },
    recognition: [
      "Sudden onset (within minutes to hours of a trigger) of skin or mucosal changes: urticaria, angioedema, flushing.",
      "Plus airway compromise (stridor, hoarseness), bronchospasm (wheeze, dyspnoea), or circulatory collapse (hypotension, syncope).",
      "Skin signs may be absent — especially in drug-induced anaphylaxis.",
      "Common triggers: foods (nuts, shellfish), drugs (beta-lactams, NSAIDs), insect venom, latex.",
    ],
    first5Minutes: [
      "Remove or stop the trigger if possible.",
      "Adrenaline 0.5 mg IM (anterolateral mid-thigh) — the single most important immediate action.",
      "Call for the resuscitation team.",
      "Position: supine with legs elevated (or semi-recumbent if severe dyspnoea).",
      "High-flow oxygen via non-rebreather mask.",
      "IV access; rapid fluid bolus if hypotensive.",
    ],
    diagnostics: [
      "Serum mast cell tryptase: at presentation, 1–2 h after onset, and at 24 h or follow-up (baseline).",
      "Continuous monitoring: BP every 2–5 min, SpO2, HR, ECG.",
      "Clinical reassessment within 5 min of each adrenaline dose.",
    ],
    priorities: [
      "Repeat adrenaline IM every 5 min if no improvement — there is no maximum number of IM doses.",
      "Early intubation for worsening laryngeal oedema; delay makes the airway progressively more difficult.",
      "IV adrenaline only by experienced clinicians for refractory shock.",
      "Observe for biphasic reaction: minimum 6 h after full resolution, 12–24 h if severe.",
    ],
    medications: [
      {
        name: "Adrenaline (epinephrine)",
        dose: "0.5 mg IM (0.5 mL of 1:1000), anterolateral thigh; repeat every 5 min",
      },
      {
        name: "0.9% NaCl or Hartmann's",
        dose: "500 mL–1 L IV rapid bolus if hypotensive; repeat as needed",
      },
      {
        name: "Chlorphenamine",
        dose: "10 mg IM or slow IV",
        note: "Second-line only — never before or instead of adrenaline.",
      },
      {
        name: "Hydrocortisone",
        dose: "200 mg IV",
        note: "Second-line only; no proven benefit for biphasic reaction prevention.",
      },
      {
        name: "Salbutamol",
        dose: "5 mg nebulised",
        note: "For bronchospasm not responding to adrenaline.",
      },
    ],
    contraindications: [
      "No absolute contraindication to IM adrenaline in anaphylaxis — the risk of withholding it exceeds any cardiac risk.",
      "IV adrenaline (1:10 000) must not be given without cardiac monitoring and experienced supervision.",
      "Beta-blockers blunt the response to adrenaline; consider glucagon 1–2 mg IV in these patients.",
    ],
    escalation: [
      "Refractory hypotension: IV adrenaline infusion (0.05–0.5 mcg/kg/min) under expert supervision; ICU admission.",
      "Patients on beta-blockers: glucagon 1–2 mg IV (may repeat once).",
      "Refractory airway: early surgical airway if intubation fails.",
    ],
    reassessment: [
      "Reassess response to each adrenaline dose within 5 min.",
      "Observe ≥ 6 h after full recovery; ≥ 12–24 h after severe or biphasic reaction.",
      "At discharge: prescribe adrenaline auto-injector, refer to allergy clinic, advise on avoidance.",
    ],
    keyNumbers: [
      "Adrenaline IM dose (adult): 0.5 mg from 1:1000 solution.",
      "Minimum observation period: 6 h after full resolution.",
      "Tryptase: draw at presentation, 1–2 h, and 24 h.",
    ],
    sources: [
      {
        label: "Resuscitation Council UK 2021",
        citation:
          "Resuscitation Council UK. Emergency Treatment of Anaphylaxis: Guidelines for Healthcare Providers. 2021.",
      },
      {
        label: "WAO Anaphylaxis Guidance 2020",
        citation:
          "Cardona V et al. World Allergy Organization Anaphylaxis Guidance 2020. World Allergy Organ J. 2020;13(10):100472.",
      },
    ],
  },
  {
    slug: "bronchospasm",
    title: "Acute bronchospasm",
    subtitle: "Repeat bronchodilators early and watch closely for fatigue, silent chest, and rising CO2.",
    severity: "urgent",
    tags: ["respiratory"],
    chapterSlug: "3-5-bronchospasm",
    firstStep: "Sit the patient upright, start nebulised salbutamol immediately, and titrate oxygen to the appropriate target.",
    alert: {
      label: "Life-threatening features",
      body: "Silent chest, cyanosis, poor respiratory effort, exhaustion, altered consciousness, or a normal/rising PaCO2 signal critical obstruction — escalate immediately.",
    },
    recognition: [
      "Wheeze, dyspnoea, accessory muscle use, prolonged expiratory phase.",
      "Severe acute asthma: SpO2 < 92%, RR ≥ 25, HR ≥ 110, or PEFR 33–50% predicted.",
      "Life-threatening: silent chest, PEFR < 33%, SpO2 < 92%, PaCO2 normal or raised, exhaustion, or altered consciousness.",
      "Acute COPD exacerbation: increased dyspnoea, sputum volume or purulence above personal baseline.",
    ],
    first5Minutes: [
      "Sit upright, apply controlled oxygen (see targets below), continuous SpO2 and cardiac monitoring.",
      "Salbutamol 5 mg nebulised immediately — repeat every 15–20 min in severe attacks.",
      "Ipratropium 0.5 mg nebulised (add from the outset in severe attacks).",
      "Prednisolone 40–50 mg PO or hydrocortisone 100 mg IV if unable to swallow.",
      "PEFR before and 15–30 min after treatment; VBG if SpO2 < 92% or not improving.",
    ],
    diagnostics: [
      "SpO2, PEFR (pre- and post-treatment at 15–30 min), RR, HR.",
      "ABG or VBG if SpO2 < 92%, life-threatening features, or inadequate response.",
      "CXR on first presentation or if pneumothorax or consolidation is suspected.",
      "FBC, CRP, and sputum culture if infective COPD exacerbation.",
    ],
    priorities: [
      "Target SpO2 94–98% in asthma; 88–92% with controlled Venturi oxygen in COPD.",
      "Systemic corticosteroids within 1 h — reduce hospital admission and relapse.",
      "Magnesium sulphate 2 g IV over 20 min for severe or life-threatening acute asthma.",
      "NIV/CPAP may benefit COPD exacerbation; avoid in acute asthma outside experienced ICU settings.",
    ],
    medications: [
      {
        name: "Salbutamol",
        dose: "5 mg nebulised every 15–20 min (or continuous 10 mg/h in extremis)",
      },
      {
        name: "Ipratropium bromide",
        dose: "0.5 mg nebulised every 4–6 h in severe attacks",
      },
      {
        name: "Prednisolone",
        dose: "40–50 mg PO daily for 5 days",
        note: "Hydrocortisone 100 mg IV every 6 h if unable to swallow.",
      },
      {
        name: "Magnesium sulphate",
        dose: "2 g IV over 20 min",
        note: "Severe or life-threatening acute asthma only.",
      },
    ],
    contraindications: [
      "Sedatives and anxiolytics are dangerous in spontaneously breathing patients with bronchospasm.",
      "Uncontrolled high-flow oxygen in COPD can suppress hypoxic drive, causing CO2 retention.",
      "Beta-blockers (including ophthalmic preparations) are contraindicated in asthma.",
      "NIV is not recommended in acute asthma outside specialist settings.",
    ],
    escalation: [
      "ICU referral: life-threatening features, clinical fatigue, rising PaCO2, or inadequate response after 1 h.",
      "IV salbutamol 250 mcg bolus, then 5–20 mcg/min infusion if nebulisation is impossible.",
      "Intubation in acute asthma carries high risk — early expert anaesthetic involvement is essential.",
    ],
    reassessment: [
      "PEFR at 15–30 min after each treatment; document the trajectory.",
      "Repeat ABG/VBG if initial PaCO2 is borderline or the patient is not improving.",
      "Discharge criteria: PEFR > 75% predicted, SpO2 > 92% on air, symptoms well controlled.",
    ],
    keyNumbers: [
      "Severe asthma: PEFR 33–50%, SpO2 < 92%, RR ≥ 25, HR ≥ 110.",
      "Life-threatening asthma: PEFR < 33%, silent chest, or altered consciousness.",
      "O2 targets: 94–98% in asthma; 88–92% in COPD.",
    ],
    sources: [
      {
        label: "BTS/SIGN Asthma Guideline (SIGN 158)",
        citation:
          "British Thoracic Society / SIGN. British Guideline on the Management of Asthma. SIGN 158. 2019 (updated 2023).",
      },
      {
        label: "GOLD 2024",
        citation:
          "Global Initiative for Chronic Obstructive Lung Disease. Global Strategy for Prevention, Diagnosis and Management of COPD: 2024 Report.",
      },
    ],
  },
  {
    slug: "pulmonary-oedema",
    title: "Acute pulmonary oedema",
    subtitle: "Treat hypoxia, offload the lungs, and reduce afterload when blood pressure allows.",
    severity: "critical",
    tags: ["critical", "respiratory"],
    chapterSlug: "3-6-pulm-oedema",
    firstStep: "Sit the patient upright, give oxygen if SpO2 < 90%, and assess early for NIV.",
    alert: {
      label: "NIV trigger",
      body: "Start CPAP if SpO2 stays below 90% or PaO2 below 8 kPa with RR ≥ 25, despite initial measures.",
    },
    recognition: [
      "Acute severe dyspnoea, orthopnoea, frothy pink sputum.",
      "Bilateral crepitations (mid-zones or higher), elevated JVP, cold peripheries if output is low.",
      "SpO2 reduced, RR elevated; peripheral oedema may be absent in acute flash pulmonary oedema.",
      "Common precipitants: ACS, arrhythmia, hypertensive crisis, valvular rupture, medication non-compliance.",
    ],
    first5Minutes: [
      "Sit upright.",
      "Oxygen if SpO2 < 90%; target 94–98% (avoid hyperoxia in non-hypoxic patients).",
      "IV access, 12-lead ECG, continuous monitoring, urinary catheter.",
      "If SBP ≥ 110 mmHg: start GTN/nitrates. If hypotensive with shock: vasopressors, senior input.",
      "Treat the precipitant: activate cath lab for ACS, cardiovert for arrhythmia.",
    ],
    diagnostics: [
      "12-lead ECG (ACS, arrhythmia, LVH).",
      "CXR: cardiomegaly, upper lobe diversion, Kerley B lines, perihilar infiltrates.",
      "BNP or NT-proBNP — elevation supports cardiac aetiology.",
      "Bloods: troponin, renal function, FBC; echocardiogram early for aetiology and ejection fraction.",
    ],
    priorities: [
      "Loop diuretics reduce preload; titrate to urine output ≥ 0.5 mL/kg/h.",
      "Nitrate infusion is the primary vasodilator when SBP ≥ 110 mmHg.",
      "NIV (CPAP 5–7.5 cmH2O) reduces need for intubation and improves breathlessness.",
      "Treat the underlying precipitant — oedema will recur without addressing the cause.",
    ],
    medications: [
      {
        name: "Furosemide",
        dose: "40–80 mg IV bolus",
        note: "Use 1–2.5× the patient's usual oral dose if already taking a loop diuretic.",
      },
      {
        name: "Nitroglycerin infusion",
        dose: "5–20 mcg/min IV; uptitrate every 5–10 min",
        note: "Avoid if SBP < 110 mmHg, severe obstructive valvular disease, or recent PDE5 inhibitor use.",
      },
      {
        name: "Morphine",
        dose: "2–4 mg IV with further 2 mg increments",
        note: "Use cautiously — associated with increased need for ventilation in some registry data.",
      },
    ],
    contraindications: [
      "Nitrates contraindicated if SBP < 110 mmHg, in severe aortic/mitral stenosis, or with recent PDE5 inhibitor use.",
      "Fluid bolus is harmful unless cardiogenic shock is accompanied by RV failure and clear preload dependence.",
      "Avoid hyperoxia in patients who are not hypoxaemic — excess oxygen increases systemic vascular resistance.",
    ],
    escalation: [
      "Invasive ventilation: life-threatening hypoxia, exhaustion, or reduced consciousness despite NIV.",
      "Cardiogenic shock (SBP < 90 mmHg): noradrenaline or dobutamine; discuss IABP or mechanical circulatory support.",
      "Refractory oedema: consider ultrafiltration.",
    ],
    reassessment: [
      "Urine output at 30–60 min: target ≥ 0.5 mL/kg/h.",
      "SpO2 and RR response to NIV at 30–60 min; escalate if not improving.",
      "Renal function and electrolytes within 24–48 h of diuresis.",
    ],
    keyNumbers: [
      "NIV trigger: SpO2 < 90% or PaO2 < 8 kPa with RR ≥ 25.",
      "Nitrate threshold: SBP ≥ 110 mmHg.",
      "CPAP starting pressure: 5–7.5 cmH2O.",
    ],
    sources: [
      {
        label: "ESC Heart Failure Guidelines 2021",
        citation:
          "McDonagh TA et al. 2021 ESC Guidelines for the diagnosis and treatment of acute and chronic heart failure. Eur Heart J. 2021;42(36):3599–3726.",
      },
    ],
  },
  {
    slug: "seizures",
    title: "Seizures and status epilepticus",
    subtitle: "Protect the airway, check glucose, and stop prolonged convulsions before secondary brain injury accumulates.",
    severity: "critical",
    tags: ["critical", "neuro"],
    chapterSlug: "4-2-seizures",
    firstStep: "Lateral recovery position, blood glucose point-of-care immediately, and give first-line benzodiazepine without delay.",
    alert: {
      label: "Status epilepticus",
      body: "Tonic-clonic activity ≥ 5 min, or ≥ 2 seizures without recovery between them, requires immediate treatment. Move to second-line AED by T = 10 min if seizure continues.",
    },
    recognition: [
      "Convulsive SE: tonic-clonic activity ≥ 5 min, or ≥ 2 seizures without recovery between them.",
      "Post-ictal confusion, tongue bite, and incontinence support a seizure diagnosis.",
      "Non-convulsive SE: altered consciousness or subtle motor signs after CSE — EEG is required to diagnose.",
      "Common triggers: AED non-compliance, hypoglycaemia, alcohol withdrawal, CNS infection, structural lesion.",
    ],
    first5Minutes: [
      "Lateral recovery position, jaw thrust if needed, high-flow oxygen.",
      "Blood glucose point-of-care immediately — treat hypoglycaemia before anything else.",
      "IV access; give first-line benzodiazepine (IV preferred if available within 2 min; IM/buccal otherwise).",
      "Thiamine 250 mg IV before glucose in suspected alcohol excess or malnutrition.",
      "Venous bloods: electrolytes (Na, Ca, Mg), AED levels, FBC, and cultures if febrile.",
    ],
    diagnostics: [
      "Blood glucose (immediate), electrolytes, FBC, AED levels; cultures if fever present.",
      "CT head if: first seizure, focal features, recent head trauma, signs of raised ICP, or immunocompromised.",
      "LP if meningitis or encephalitis is suspected (after CT to exclude mass effect).",
      "EEG in ICU to detect non-convulsive SE after motor activity ceases.",
    ],
    priorities: [
      "Timeline: benzodiazepine at T = 0 → second-line IV AED by T = 10 min → ICU/anaesthetics by T = 30 min.",
      "Do not exceed two doses of first-line benzodiazepine before escalating.",
      "Sodium valproate: avoid in females of childbearing age unless no suitable alternative (teratogenic).",
      "Have bag-mask ventilation ready before benzodiazepines — respiratory depression can occur.",
    ],
    medications: [
      {
        name: "Lorazepam",
        dose: "0.1 mg/kg IV (max 4 mg); may repeat once after 5 min",
        note: "Preferred first-line IV benzodiazepine.",
      },
      {
        name: "Midazolam",
        dose: "10 mg buccal or IM (or 0.1 mg/kg IV, max 5 mg)",
        note: "Use when IV access is not immediately available.",
      },
      {
        name: "Levetiracetam",
        dose: "60 mg/kg IV (max 4500 mg) over 10 min",
        note: "Preferred second-line AED in most patients.",
      },
      {
        name: "Sodium valproate",
        dose: "40 mg/kg IV (max 3000 mg) over 10–15 min",
        note: "Second-line alternative; avoid in females of childbearing age.",
      },
      {
        name: "Phenytoin",
        dose: "20 mg/kg IV (max 2000 mg) at ≤ 50 mg/min with cardiac monitoring",
        note: "Second-line alternative; risk of arrhythmia at rapid infusion rates.",
      },
    ],
    contraindications: [
      "Never skip the glucose check — hypoglycaemia is a common, easily reversible cause.",
      "Sodium valproate is teratogenic; avoid unless no suitable alternative exists in females of childbearing potential.",
      "Phenytoin must not be infused faster than 50 mg/min — risk of cardiac arrhythmia and hypotension.",
      "Do not physically restrain a convulsing patient or place any object in their mouth.",
    ],
    escalation: [
      "Refractory SE (T ≥ 30 min or failure of two IV AEDs): anaesthetic induction, intubation, and ICU admission.",
      "ICU agents (specialist decision): propofol, thiopentone, midazolam, or ketamine infusion.",
      "Continuous EEG monitoring in ICU to detect and treat non-convulsive SE.",
    ],
    reassessment: [
      "Confirm seizure has stopped — check responsiveness, not just the absence of motor activity.",
      "Repeat blood glucose after treatment; hypoglycaemia can persist.",
      "Investigate underlying cause after seizure control: neuroimaging, LP, metabolic screen.",
    ],
    keyNumbers: [
      "SE definition: ≥ 5 min continuous OR ≥ 2 seizures without recovery.",
      "Escalation timeline: T = 0 benzodiazepine → T = 10 min second-line AED → T = 30 min ICU.",
      "Glucose threshold for IV dextrose: < 4.0 mmol/L.",
    ],
    sources: [
      {
        label: "NICE CG137 (2022 update)",
        citation:
          "National Institute for Health and Care Excellence. Epilepsies in children, young people and adults. NICE guideline CG137. 2022.",
      },
      {
        label: "Glauser et al. SE treatment guideline",
        citation:
          "Glauser T et al. Evidence-based guideline: treatment of convulsive status epilepticus in children and adults. Epilepsy Curr. 2016;16(1):48–61.",
      },
    ],
  },
  {
    slug: "sepsis",
    title: "Sepsis and septic shock",
    subtitle: "Infection plus organ dysfunction — act within the first hour on cultures, antibiotics, fluids, and source control.",
    severity: "critical",
    tags: ["critical"],
    chapterSlug: "5-1-sepsis",
    firstStep: "Blood cultures × 2 and lactate, then start IV broad-spectrum antibiotics as soon as possible — target within 1 hour of recognition.",
    alert: {
      label: "Hour-1 bundle",
      body: "Cultures × 2, serum lactate, IV antibiotics, 30 mL/kg balanced crystalloid if hypotensive or lactate ≥ 4 mmol/L, and early source control plan.",
    },
    recognition: [
      "Sepsis: suspected infection plus acute organ dysfunction (SOFA score ≥ 2 points above baseline).",
      "Bedside qSOFA ≥ 2: altered mentation, RR ≥ 22, SBP ≤ 100 mmHg.",
      "Septic shock: sepsis + vasopressor requirement to maintain MAP ≥ 65 mmHg + lactate > 2 mmol/L despite adequate fluids.",
      "Common sources: lung, urinary tract, abdomen, skin and soft tissue, CNS, intravascular lines.",
    ],
    first5Minutes: [
      "Large-bore IV access × 2; senior review or ICU alert for septic shock.",
      "Blood cultures × 2 from separate sites before antibiotics (do not delay antibiotics significantly for cultures).",
      "Serum lactate; VBG for pH, base excess, and haemoglobin.",
      "FBC, renal function, LFTs, CRP, coagulation, and blood glucose.",
      "Start broad-spectrum IV antibiotics as soon as possible.",
      "Balanced crystalloid 250–500 mL IV bolus; reassess and repeat as needed.",
    ],
    diagnostics: [
      "Blood cultures × 2; urine MC&S; wound or sputum cultures as appropriate.",
      "Lactate — repeat at 2 h if initially elevated.",
      "Continuous BP, SpO2, HR; urinary catheter for hourly output.",
      "Source imaging: CXR; CT abdomen/pelvis if source is unclear.",
    ],
    priorities: [
      "Antibiotics within 1 h of recognition — critical in septic shock.",
      "Reassess fluid status at 30 min using dynamic measures (pulse pressure variation, passive leg raise).",
      "Vasopressors for MAP < 65 mmHg despite fluids: noradrenaline via central line is first choice.",
      "Source control: remove infected lines, drain abscesses — within 6–12 h of identification.",
    ],
    medications: [
      {
        name: "Balanced crystalloid (Hartmann's or Plasmalyte)",
        dose: "250–500 mL IV boluses; 30 mL/kg in first 3 h if hypotensive or lactate ≥ 4 mmol/L",
        note: "Prefer balanced over 0.9% NaCl to reduce hyperchloraemic acidosis risk.",
      },
      {
        name: "Noradrenaline",
        dose: "0.01–0.5 mcg/kg/min IV infusion",
        note: "Vasopressor of choice; use central line when possible.",
      },
      {
        name: "Broad-spectrum antibiotics",
        dose: "IV as soon as possible; follow local empirical protocol",
        note: "Tailor to suspected source and local resistance patterns.",
      },
      {
        name: "Vasopressin",
        dose: "0.03 units/min IV (fixed dose)",
        note: "Add to noradrenaline to reduce catecholamine requirement in refractory shock.",
      },
      {
        name: "Hydrocortisone",
        dose: "200 mg/day IV (50 mg every 6 h or continuous infusion)",
        note: "Consider if shock is refractory to adequate fluids and vasopressors.",
      },
    ],
    contraindications: [
      "Never delay antibiotics by more than 45 min to obtain cultures in a critically ill patient.",
      "Excessive fluid beyond the initial resuscitation bolus may worsen outcomes — reassess after each 250–500 mL.",
      "Colloids (albumin) are not superior to crystalloid for initial resuscitation.",
      "Avoid 0.9% saline as the primary resuscitation fluid (hyperchloraemic acidosis risk).",
    ],
    escalation: [
      "ICU referral: vasopressor requirement, lactate ≥ 4 mmol/L, refractory hypotension, or new organ failure.",
      "Refractory shock: add vasopressin, consider hydrocortisone, senior review.",
      "Organ support: renal replacement therapy, mechanical ventilation, or ECMO in specialist centres.",
    ],
    reassessment: [
      "Lactate at 2 h: target ≥ 10% reduction or < 2 mmol/L.",
      "MAP ≥ 65 mmHg; urine output ≥ 0.5 mL/kg/h.",
      "Review antibiotic choice at 24–48 h when cultures return — de-escalate where possible.",
    ],
    keyNumbers: [
      "MAP target: ≥ 65 mmHg.",
      "Antibiotic target: < 1 h from recognition (especially septic shock).",
      "Lactate target: < 2 mmol/L.",
      "Initial fluid: 30 mL/kg in first 3 h if hypotensive or lactate ≥ 4 mmol/L.",
    ],
    sources: [
      {
        label: "Surviving Sepsis Campaign 2021",
        citation:
          "Evans L et al. Surviving Sepsis Campaign: International Guidelines for Management of Sepsis and Septic Shock 2021. Crit Care Med. 2021;49(11):e1063–e1143.",
      },
    ],
  },
  {
    slug: "hyperkalaemia",
    title: "Hyperkalaemia",
    subtitle: "Protect the myocardium first, then shift potassium intracellularly and remove it from the body.",
    severity: "critical",
    tags: ["critical", "metabolic"],
    chapterSlug: "6-2-electrolytes",
    firstStep: "12-lead ECG immediately — if ECG changes are present, give IV calcium without delay.",
    alert: {
      label: "ECG changes",
      body: "Peaked T waves, PR prolongation, wide QRS, or sine-wave pattern require immediate IV calcium — it stabilises the myocardium but does not lower potassium.",
    },
    recognition: [
      "Serum K ≥ 6.5 mmol/L: severe; ≥ 6.0: moderate; ≥ 5.5: mild (UK Renal Association thresholds).",
      "ECG sequence: peaked T waves → PR prolongation → widened QRS → sine wave → VF or asystole.",
      "Symptoms: weakness, paraesthesia, palpitations — cardiac arrest may be the first presentation.",
      "Common causes: AKI, CKD, metabolic acidosis, rhabdomyolysis, Addison's disease, drugs (ACEi, ARBs, K-sparing diuretics, heparin).",
    ],
    first5Minutes: [
      "12-lead ECG immediately — any ECG changes mandate IV calcium without further delay.",
      "Calcium chloride 10% 10 mL IV over 5–10 min if ECG changes present.",
      "Continuous cardiac monitoring; IV access.",
      "VBG for immediate K, pH, and lactate; confirm with formal serum K.",
      "Rule out pseudohyperkalaemia (haemolysed sample), but do not delay treatment in an unstable patient.",
    ],
    diagnostics: [
      "VBG: immediate K, pH, bicarbonate, glucose.",
      "Serum K (formal), renal function, FBC.",
      "12-lead ECG mandatory for K ≥ 6.0 mmol/L or any symptoms.",
      "Continuous cardiac monitoring until K < 5.5 mmol/L and ECG is normalised.",
    ],
    priorities: [
      "Calcium: membrane stabilisation only (onset 1–3 min, duration 30–60 min). Repeat if ECG changes persist.",
      "Insulin-glucose: shifts K intracellularly (onset 15–30 min, duration 4–6 h).",
      "Salbutamol nebulised: additional intracellular shift, additive with insulin-glucose.",
      "Removal agents: sodium bicarbonate (if metabolic acidosis), Patiromer or SPS (oral, slower), dialysis (definitive).",
    ],
    medications: [
      {
        name: "Calcium chloride 10%",
        dose: "10 mL IV over 5–10 min",
        note: "Preferred in emergency (3× calcium content of gluconate). Repeat if ECG changes persist after 5 min.",
      },
      {
        name: "Calcium gluconate 10%",
        dose: "30 mL IV over 5–10 min",
        note: "Alternative if chloride is not available.",
      },
      {
        name: "Insulin-glucose",
        dose: "10 units soluble insulin + 25 g glucose (50 mL of 50% dextrose) IV over 15–30 min",
        note: "Monitor blood glucose every 30 min for 6 h — hypoglycaemia peaks at 60–90 min post-infusion.",
      },
      {
        name: "Salbutamol",
        dose: "10–20 mg nebulised",
        note: "Adjunct to insulin-glucose; may be less effective in beta-blocked patients.",
      },
      {
        name: "Sodium bicarbonate 8.4%",
        dose: "50 mmol IV over 30 min",
        note: "Only if concurrent severe metabolic acidosis (pH < 7.1); limited evidence for K lowering alone.",
      },
    ],
    contraindications: [
      "Calcium does not lower potassium — always follow with a shifting agent (insulin-glucose).",
      "Do not start insulin if K < 3.5 mmol/L — fatal hypokalaemia can result.",
      "Salbutamol is less effective in patients on beta-blockers.",
      "Sodium bicarbonate: avoid in fluid-overloaded patients; do not use as routine first-line.",
    ],
    escalation: [
      "Cardiac arrest from hyperkalaemia: double the calcium dose (20 mL CaCl2 10%); high-dose insulin-glucose; expedite dialysis.",
      "Refractory K ≥ 6.5 mmol/L despite medical treatment: urgent nephrology input and renal replacement therapy.",
      "K > 7.0 mmol/L with life-threatening ECG changes: immediate dialysis if available.",
    ],
    reassessment: [
      "Serum K at 1 h and 4 h after insulin-glucose; adjust KCl supplementation accordingly.",
      "Blood glucose every 30 min for 6 h post-insulin (hypoglycaemia risk highest at 60–90 min).",
      "Repeat 12-lead ECG after calcium and after K normalisation.",
      "Identify and address the underlying cause.",
    ],
    keyNumbers: [
      "Severe K: ≥ 6.5 mmol/L — treat immediately regardless of symptoms.",
      "Do not start insulin if K < 3.5 mmol/L.",
      "Insulin-glucose onset: 15–30 min; duration 4–6 h.",
      "Glucose monitoring: every 30 min for 6 h post-insulin.",
    ],
    sources: [
      {
        label: "UK Renal Association 2020",
        citation:
          "UK Renal Association. Treatment of Acute Hyperkalaemia in Adults: Clinical Practice Guideline. 2020.",
      },
    ],
  },
  {
    slug: "stroke",
    title: "Acute ischaemic stroke",
    subtitle: "Time is brain — confirm imaging, check glucose, and act on the thrombolysis and thrombectomy window.",
    severity: "critical",
    tags: ["critical", "neuro"],
    chapterSlug: "4-3-stroke",
    firstStep: "Note precise time of symptom onset, check blood glucose, activate the stroke team, and get a non-contrast CT head immediately.",
    alert: {
      label: "Treatment window",
      body: "IV alteplase within 4.5 hours of symptom onset if eligible. Mechanical thrombectomy for proximal LVO up to 24 hours in selected patients.",
    },
    recognition: [
      "FAST: Face droop, Arm weakness, Speech disturbance, Time to call emergency services.",
      "Additional features: sudden visual field defect, unilateral neglect, limb ataxia, diplopia, severe sudden headache.",
      "Onset is typically sudden — symptoms that develop gradually over minutes to hours suggest an alternative diagnosis.",
      "Always exclude hypoglycaemia first — blood glucose < 4 mmol/L can mimic focal stroke exactly.",
    ],
    first5Minutes: [
      "Check blood glucose immediately — correct hypoglycaemia before any other assessment.",
      "Note precise time of symptom onset (or time last seen well) — this determines treatment eligibility.",
      "Activate stroke team or code stroke protocol.",
      "Rapid NIHSS assessment, IV access, bloods, 12-lead ECG.",
      "Non-contrast CT head urgently — required before any thrombolysis to exclude haemorrhage.",
    ],
    diagnostics: [
      "Non-contrast CT head: mandatory before thrombolysis (excludes haemorrhage).",
      "CT angiography: if proximal large vessel occlusion suspected — determines thrombectomy eligibility.",
      "Blood glucose, FBC, coagulation, renal function, group and save.",
      "12-lead ECG: AF detected in 15–25% of ischaemic stroke.",
      "MRI/DWI if CT is equivocal or posterior fossa stroke is suspected.",
    ],
    priorities: [
      "IV alteplase within 4.5 h of onset if eligible — check exclusion criteria carefully before giving.",
      "Mechanical thrombectomy within 24 h for proximal LVO (ICA, M1/M2, basilar) in eligible patients.",
      "Blood pressure: only lower actively if > 185/110 before thrombolysis, or > 220/120 without thrombolysis.",
      "Aspirin 300 mg after imaging; delay 24 h if thrombolysis was given.",
      "Dedicated stroke unit admission independently reduces mortality and disability.",
    ],
    medications: [
      {
        name: "Alteplase",
        dose: "0.9 mg/kg IV (max 90 mg): 10% as IV bolus, remainder over 60 min",
        note: "Eligible patients only — confirm no contraindications. Tenecteplase 0.25 mg/kg (max 25 mg) IV bolus is an emerging alternative per local protocol.",
      },
      {
        name: "Aspirin",
        dose: "300 mg PO or NG after imaging",
        note: "Give immediately if no thrombolysis; delay 24 h post-thrombolysis.",
      },
      {
        name: "Paracetamol",
        dose: "1 g PO or IV every 6 h if temperature > 37.5°C",
        note: "Target normothermia — fever worsens neurological outcome.",
      },
    ],
    contraindications: [
      "Thrombolysis exclusions include: haemorrhage on CT, active bleeding, recent major surgery (< 14 days), therapeutic anticoagulation, uncontrolled BP > 185/110 mmHg, and unknown onset time (unless DWI-FLAIR mismatch criteria met for wake-up stroke).",
      "Aggressive BP lowering can extend infarct in ischaemic penumbra — avoid unless specific thresholds are exceeded.",
      "Do not give glucose-containing fluids to euglycaemic patients.",
      "Routine anticoagulation is not indicated in acute ischaemic stroke for most patients.",
    ],
    escalation: [
      "Malignant MCA infarction with declining consciousness: neurosurgical decompressive hemicraniectomy within 48 h.",
      "Proximal large vessel occlusion: urgent interventional neuroradiology for mechanical thrombectomy.",
      "Space-occupying cerebellar infarction with brainstem compression: urgent neurosurgical referral.",
    ],
    reassessment: [
      "Neurological observations (GCS, NIHSS) every 15–30 min for 2 h post-thrombolysis, then hourly.",
      "BP monitoring: every 15 min for 2 h, every 30 min for 6 h, then hourly for 16 h post-alteplase.",
      "CT head immediately if neurological deterioration post-thrombolysis — rule out haemorrhagic transformation.",
      "Swallowing assessment before any oral intake or medications.",
    ],
    keyNumbers: [
      "Thrombolysis window: ≤ 4.5 h from symptom onset.",
      "Thrombectomy window: up to 24 h in selected patients with LVO.",
      "BP threshold pre-thrombolysis: ≤ 185/110 mmHg.",
      "Alteplase dose: 0.9 mg/kg IV (max 90 mg).",
    ],
    sources: [
      {
        label: "ESO/EAN IV Thrombolysis Guideline 2022",
        citation:
          "Turc G et al. European Stroke Organisation / European Academy of Neurology guideline on IV thrombolysis in acute ischaemic stroke. Eur Stroke J. 2022;7(1):I–LIX.",
      },
      {
        label: "AHA/ASA Acute Ischaemic Stroke Guideline 2019",
        citation:
          "Powers WJ et al. 2019 AHA/ASA Guidelines for the early management of patients with acute ischaemic stroke. Stroke. 2019;50(12):e344–e418.",
      },
    ],
  },
  {
    slug: "dka",
    title: "Diabetic ketoacidosis",
    subtitle: "Fix the biochemistry in sequence: fluid first, then insulin only once potassium is confirmed safe.",
    severity: "critical",
    tags: ["critical", "metabolic"],
    chapterSlug: "6-3-dka",
    firstStep: "IV access, check blood glucose and blood ketones, and confirm serum K ≥ 3.5 mmol/L before starting insulin.",
    alert: {
      label: "Potassium first",
      body: "Do not start insulin until serum K ≥ 3.5 mmol/L. Fatal hypokalaemia has occurred when insulin was started without checking potassium.",
    },
    recognition: [
      "Diagnostic triad: blood glucose > 11 mmol/L (or known diabetes) + blood ketones ≥ 3 mmol/L (or urine ketones ≥ 2+) + metabolic acidosis (pH < 7.3 or bicarbonate < 15 mmol/L).",
      "Symptoms: polyuria, polydipsia, nausea, vomiting, abdominal pain, Kussmaul breathing (deep, sighing respirations).",
      "Severe DKA: pH < 7.1, K < 3.5 or > 6 mmol/L, reduced GCS, SpO2 < 92%, or anion gap > 16.",
      "Euglycaemic DKA: blood glucose may be normal in patients taking SGLT-2 inhibitors — check ketones in any unwell patient on these drugs.",
    ],
    first5Minutes: [
      "Large-bore IV access × 2; continuous cardiac monitoring.",
      "Bloods: blood glucose, blood ketones (≥ 3 mmol/L is diagnostic), VBG, serum K, renal function, FBC, HbA1c.",
      "Check serum K before insulin: if K < 3.5 mmol/L, replace potassium first and hold insulin.",
      "Start 0.9% NaCl 1 L IV over 1 h (faster if haemodynamically compromised).",
      "Hourly urine output via catheter; identify and treat the precipitant (infection, ACS, omitted insulin).",
    ],
    diagnostics: [
      "VBG or ABG every 1–2 h (pH, HCO3, K, glucose).",
      "Blood ketones every 1 h — target fall ≥ 0.5 mmol/L/h.",
      "Blood glucose every 1 h — target fall 3–4 mmol/L/h (not too fast).",
      "ECG (hypo- or hyperkalaemia risk); CXR, MSU, and cultures if infection is the precipitant.",
    ],
    priorities: [
      "Fluid first — IV fluids correct acidosis and reduce glucose before insulin is started.",
      "Fixed-rate insulin infusion at 0.1 units/kg/h — start only when K ≥ 3.5 mmol/L.",
      "When blood glucose falls to ≤ 14 mmol/L: switch to 5% dextrose + 0.45% NaCl and continue insulin.",
      "Potassium replacement: add KCl to fluids to maintain K 4–5 mmol/L (see key numbers).",
    ],
    medications: [
      {
        name: "0.9% NaCl",
        dose: "1 L over 1 h, then 1 L over 2 h, then 1 L over 2 h, then 1 L over 4 h",
        note: "Adjust rate for age, renal function, and cardiac status. Faster if haemodynamically compromised.",
      },
      {
        name: "Soluble insulin (actrapid)",
        dose: "0.1 units/kg/h IV infusion — no bolus",
        note: "Start only when K ≥ 3.5 mmol/L. Do not stop until ketones < 0.6 mmol/L AND pH > 7.3.",
      },
      {
        name: "Potassium chloride (KCl)",
        dose: "K 3.5–5.5 mmol/L: add 40 mmol KCl per litre of IV fluid. K < 3.5: replace first, hold insulin. K > 5.5: withhold KCl, recheck hourly.",
      },
      {
        name: "5% dextrose + 0.45% NaCl",
        dose: "Start when blood glucose ≤ 14 mmol/L — run alongside insulin to allow continuation of infusion",
      },
    ],
    contraindications: [
      "Never start insulin if K < 3.5 mmol/L — life-threatening hypokalaemia.",
      "Do not stop insulin based on glucose normalisation alone — stop only when ketones < 0.6 AND pH > 7.3 AND patient eating and drinking.",
      "Sodium bicarbonate is not recommended routinely; consider only if pH < 6.9 after initial fluids, under specialist guidance.",
      "SGLT-2 inhibitor-related euDKA: glucose may be normal — diagnose from ketones and pH, not glucose alone.",
    ],
    escalation: [
      "Severe DKA (pH < 7.1, K abnormal, reduced GCS): HDU or ICU, continuous monitoring.",
      "Reduced GCS or airway compromise: airway management and ICU referral.",
      "Refractory acidosis or ketosis after 4–6 h: check insulin infusion is running correctly, reassess diagnosis, consider HDU.",
    ],
    reassessment: [
      "Blood ketones every 1 h: target ≥ 0.5 mmol/L/h decline.",
      "Blood glucose every 1 h: target 3–4 mmol/L/h decline.",
      "VBG every 2 h for pH, HCO3, and K; adjust IV fluids and KCl accordingly.",
      "Resolution criteria: ketones < 0.6 mmol/L AND pH > 7.3 AND HCO3 > 15 mmol/L AND eating and drinking — then convert to SC insulin.",
    ],
    keyNumbers: [
      "Diagnostic thresholds: glucose > 11 + ketones ≥ 3 + pH < 7.3 (or HCO3 < 15).",
      "Insulin start requires: K ≥ 3.5 mmol/L.",
      "Ketone clearance target: ≥ 0.5 mmol/L/h.",
      "Switch to dextrose-containing fluid when glucose ≤ 14 mmol/L.",
    ],
    sources: [
      {
        label: "JBDS DKA Guideline 2023",
        citation:
          "Joint British Diabetes Societies Inpatient Care Group. The Management of Diabetic Ketoacidosis in Adults. 3rd edition. 2023.",
      },
    ],
  },
] as const satisfies readonly EREntry[];

export function matchesReferenceFilter(entry: EREntry, filter: ReferenceFilterKey) {
  if (filter === "all") {
    return true;
  }

  return entry.tags.includes(filter);
}
