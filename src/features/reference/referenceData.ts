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
  priorities: readonly string[];
  medications: ReadonlyArray<{
    name: string;
    dose: string;
    note?: string;
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
    firstStep: "Get a 12-lead ECG, give aspirin early, and decide whether the patient needs urgent PCI.",
    alert: {
      label: "PCI target",
      body: "STE-ACS within 12 hours needs urgent coronary angiography and primary PCI as early as possible.",
    },
    priorities: [
      "Give aspirin promptly and avoid routine oxygen unless saturation is below 90%.",
      "Use nitrates and analgesia only if blood pressure and clinical context allow.",
      "Do not routinely preload NSTE-ACS patients with a P2Y12 inhibitor before coronary angiography.",
    ],
    medications: [
      {
        name: "Aspirin",
        dose: "300 mg PO loading dose",
      },
      {
        name: "Nitroglycerin",
        dose: "0.4 mg SL, repeat up to 3 times every 5-10 minutes",
        note: "Avoid if SBP < 90 mmHg or right ventricular infarction is suspected.",
      },
      {
        name: "Morphine",
        dose: "2-4 mg IV every 5 minutes up to 20 mg",
      },
      {
        name: "Ticagrelor or prasugrel",
        dose: "180 mg PO or 60 mg PO loading dose",
        note: "Use in STE-ACS or after coronary anatomy is defined in NSTE-ACS.",
      },
    ],
  },
  {
    slug: "arrhythmia",
    title: "Cardiac arrhythmia",
    subtitle: "Treat instability first, then narrow the rhythm diagnosis with QRS width and regularity.",
    severity: "urgent",
    tags: ["cardiac"],
    chapterSlug: "2-2-arrhythmias",
    firstStep: "Assess haemodynamic stability, attach monitoring, and obtain a 12-lead ECG before choosing drug therapy.",
    alert: {
      label: "Unstable rhythm",
      body: "Unstable tachycardia needs synchronised cardioversion, while unstable bradyarrhythmia usually needs pacing escalation.",
    },
    priorities: [
      "Treat broad-complex tachycardia as ventricular tachycardia until proved otherwise.",
      "Use electricity early when perfusion is threatened instead of delaying for repeated medication trials.",
      "Correct reversible triggers such as hypoxia, electrolyte disorders, and medication effects.",
    ],
    medications: [
      {
        name: "Amiodarone",
        dose: "300 mg IV over 20-60 minutes",
        note: "Used for regular broad-complex tachycardia or after failed cardioversion.",
      },
      {
        name: "Adenosine",
        dose: "6 mg IV rapid bolus, then 12 mg and 18 mg if needed",
        note: "For regular narrow-complex tachycardia.",
      },
      {
        name: "Atropine",
        dose: "0.5 mg IV every 3-5 minutes up to 3 mg",
        note: "May help unstable bradyarrhythmia, but pacing is often the better escalation.",
      },
      {
        name: "Magnesium sulphate",
        dose: "2 g IV",
        note: "Use for torsade de pointes with prolonged QT.",
      },
    ],
  },
  {
    slug: "anaphylaxis",
    title: "Anaphylaxis",
    subtitle: "Adrenaline is first-line treatment for airway, breathing, or circulatory compromise after allergen exposure.",
    severity: "critical",
    tags: ["critical", "respiratory"],
    chapterSlug: "3-4-anaphylaxis",
    firstStep: "Call for help and give IM adrenaline immediately into the anterolateral thigh.",
    alert: {
      label: "First step",
      body: "Give adrenaline 0.5 mg IM immediately; antihistamines and steroids must never delay it.",
    },
    priorities: [
      "Manage airway and breathing early, including high-flow oxygen and intubation support when needed.",
      "Establish IV or IO access quickly because profound vasodilation and capillary leak can cause major hypovolaemia.",
      "Use second-line drugs only after adrenaline and resuscitation priorities are underway.",
    ],
    medications: [
      {
        name: "Adrenaline",
        dose: "0.5 mg IM",
        note: "Give into the anterolateral thigh.",
      },
      {
        name: "IV fluids",
        dose: "Rapid volume replacement",
        note: "Use after IV or IO access is secured.",
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
    firstStep: "Titrate oxygen to the right target and start repeated inhaled bronchodilator therapy immediately.",
    alert: {
      label: "Danger sign",
      body: "A silent chest, altered mental status, or a normal or rising PaCO2 in acute asthma suggests critical obstruction.",
    },
    priorities: [
      "Target SpO2 94-98% in acute asthma and 88-92% in acute COPD exacerbation.",
      "Add anticholinergics and systemic corticosteroids early in severe attacks.",
      "Escalate to ICU or ventilatory support if response remains poor or fatigue develops.",
    ],
    medications: [
      {
        name: "Salbutamol",
        dose: "5 mg nebulised, repeat every 15-20 minutes",
      },
      {
        name: "Ipratropium bromide",
        dose: "0.5 mg nebulised",
      },
      {
        name: "Magnesium",
        dose: "2 g IV slow infusion",
        note: "Consider in severe asthma.",
      },
    ],
  },
  {
    slug: "pulmonary-oedema",
    title: "Pulmonary oedema",
    subtitle: "Treat hypoxia, offload the lungs, and reduce afterload when blood pressure allows.",
    severity: "critical",
    tags: ["critical", "respiratory"],
    chapterSlug: "3-6-pulm-oedema",
    firstStep: "Sit the patient upright, give oxygen if saturation is below 90%, and assess early for NIV.",
    alert: {
      label: "Ventilation trigger",
      body: "Consider NIV when saturation stays below 90% or PaO2 remains below 8 kPa with respiratory rate 25 or higher.",
    },
    priorities: [
      "Escalate to invasive ventilation for life-threatening hypoxia or reduced consciousness.",
      "Use loop diuretics with urine output monitoring and treat the precipitating cardiac problem.",
      "Titrate vasodilators carefully and avoid hypotension.",
    ],
    medications: [
      {
        name: "Furosemide",
        dose: "40 mg IV bolus",
        note: "Suggested initial dose when acute heart failure is new in onset.",
      },
      {
        name: "Nitroglycerin",
        dose: "5-40 mcg/min IV infusion",
        note: "Avoid if SBP is below 110 mmHg.",
      },
      {
        name: "Morphine",
        dose: "2-4 mg IV, then 2 mg increments",
      },
    ],
  },
  {
    slug: "seizures",
    title: "Seizures and status epilepticus",
    subtitle: "Protect the airway, check glucose, and stop prolonged convulsions before secondary injury builds.",
    severity: "critical",
    tags: ["critical", "neuro"],
    chapterSlug: "4-2-seizures",
    firstStep: "Protect the airway, turn the patient onto the left side, give oxygen, and treat active seizures immediately.",
    alert: {
      label: "Status epilepticus",
      body: "Tonic-clonic activity lasting longer than 5 minutes or repeated seizures without recovery needs immediate treatment.",
    },
    priorities: [
      "Check blood glucose early because hypoglycaemia is a common reversible trigger.",
      "Use first-line benzodiazepines promptly, then move to second-line therapy if seizures persist.",
      "Prepare for intubation and ICU support when refractory seizures continue.",
    ],
    medications: [
      {
        name: "Midazolam",
        dose: "0.1 mg/kg IV max 5 mg or 0.2 mg/kg IM max 10 mg",
      },
      {
        name: "Lorazepam",
        dose: "0.1 mg/kg IV max 4 mg",
      },
      {
        name: "Diazepam",
        dose: "0.3 mg/kg IV max 10 mg or 0.5 mg/kg rectal max 20 mg",
      },
      {
        name: "Levetiracetam or phenytoin",
        dose: "60 mg/kg IV max 3000 mg or 20 mg/kg IV max 1000 mg",
      },
    ],
  },
  {
    slug: "sepsis",
    title: "Sepsis and septic shock",
    subtitle: "Think infection plus organ dysfunction, then move fast on fluids, cultures, antibiotics, and pressure support.",
    severity: "critical",
    tags: ["critical"],
    chapterSlug: "5-1-sepsis",
    firstStep: "Secure access, send cultures and lactate, and start broad-spectrum IV antibiotics as soon as possible.",
    alert: {
      label: "First-hour bundle",
      body: "Start antibiotics, obtain cultures, assess lactate, give 30 mL/kg balanced crystalloid, and plan source control early.",
    },
    priorities: [
      "Use large-bore IV access to deliver balanced crystalloid rapidly.",
      "Escalate to vasopressors when hypotension persists after initial fluid resuscitation.",
      "Look actively for the source of infection and arrange source control early when needed.",
    ],
    medications: [
      {
        name: "Balanced crystalloid",
        dose: "30 mL/kg rapid resuscitation",
      },
      {
        name: "Noradrenaline",
        dose: "0.01-0.5 mcg/kg/min",
        note: "Start if hypotension persists after initial fluids.",
      },
      {
        name: "Broad-spectrum antibiotics",
        dose: "Give IV as soon as possible",
        note: "Tailor to the suspected source and likely pathogens.",
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
    firstStep: "Use ABCDE, obtain a 12-lead ECG, and treat empirically if severe hyperkalaemia and arrhythmia are strongly suspected.",
    alert: {
      label: "ECG changes",
      body: "Give IV calcium immediately when ECG changes are present; calcium stabilises the myocardium but does not lower potassium.",
    },
    priorities: [
      "Exclude pseudohyperkalaemia, but do not delay treatment in an unstable patient.",
      "Repeat the ECG after IV calcium and monitor glucose after insulin treatment.",
      "Seek urgent expert help and consider dialysis if potassium stays at or above 6.5 mmol/L despite therapy.",
    ],
    medications: [
      {
        name: "Calcium chloride 10% or calcium gluconate 10%",
        dose: "10 mL IV or 30 mL IV over 5 minutes",
      },
      {
        name: "Insulin-glucose infusion",
        dose: "25 g glucose with 10 units soluble insulin IV over 15-30 minutes",
      },
      {
        name: "Salbutamol",
        dose: "10-20 mg nebulised",
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
