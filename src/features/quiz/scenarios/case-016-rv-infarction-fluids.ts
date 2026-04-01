import { QuizScenario } from '../quizData';

export const case016: QuizScenario = {
  id: 'case-016',
  slug: 'rv-infarction-fluid-resuscitation',
  title: 'Hypotension and Bradycardia in Inferior STEMI',
  category: 'Cardiology',
  difficulty: 'Hard',
  vignette: `
A 54-year-old man is brought to the emergency department 1 hour after the sudden onset of shortness of breath, epigastric pain, and sweating. He has hypertension and type 2 diabetes mellitus, managed with amlodipine and metformin. He has a 20-pack-year smoking history.

**Physical Examination:**
- **Appearance:** Weak and pale.
- **Vitals:** Pulse 59/min, Resp 18/min, BP 85/56 mmHg.
- **Skin:** Cold to the touch (suggesting hypoperfusion).
- **Lungs:** Clear to auscultation.
- **Heart:** Normal heart sounds.

**Diagnostic Findings:**
- **ECG:** ST-segment elevation in leads II, III, and aVF (Inferior STEMI).
- **Echocardiography (Bedside TTE):** Normal left ventricular function.
  `,
  question: 'Administration of which of the following is the most appropriate next step in management?',
  options: [
    { id: 'A', text: 'Intravenous atropine', isCorrect: false },
    { id: 'B', text: 'Oral metoprolol', isCorrect: false },
    { id: 'C', text: 'Intravenous morphine', isCorrect: false },
    { id: 'D', text: 'Sublingual nitroglycerin', isCorrect: false },
    { id: 'E', text: 'Phenylephrine infusion', isCorrect: false },
    { id: 'F', text: 'Normal saline bolus', isCorrect: true }
  ],
  explanation: `
**Correct Answer: (F) Normal saline bolus**

The patient's presentation of **inferior STEMI** (ST elevations in II, III, aVF) accompanied by **hypotension, bradycardia, and clear lungs** is highly suggestive of **Right Ventricular (RV) Infarction**. RV involvement occurs in approximately 30-50% of inferior wall MIs.

**Pathophysiology & Management:**
* **Preload Dependence:** The ischemic right ventricle is unable to pump blood effectively to the left side of the heart. To maintain cardiac output, the RV becomes extremely dependent on **preload**.
* **First-line Therapy:** Intravenous fluids (usually **normal saline boluses**) should be administered to optimize RV preload and facilitate passive flow through the pulmonary circulation to the left ventricle.
* **Contraindications:** Agents that reduce preload—such as **nitroglycerin**, **morphine**, and **diuretics**—are strictly contraindicated as they can cause profound, life-threatening hypotension.

**Why other options are less appropriate:**
* **Nitroglycerin (D) & Morphine (C):** Both decrease preload (venous dilation) and would exacerbate the shock state in an RV infarct.
* **Metoprolol (B):** Beta-blockers are contraindicated in the setting of hypotension, bradycardia, or signs of heart failure/cardiogenic shock.
* **Atropine (A):** While used for symptomatic bradycardia, in the setting of RV infarct, volume expansion should be prioritized first to address the underlying hemodynamic instability.
* **Phenylephrine (E):** Increases systemic vascular resistance but also increases pulmonary vascular resistance, which increases RV afterload and can worsen RV failure.

If hypotension persists despite adequate fluid resuscitation, inotropic support (e.g., dobutamine) or mechanical support may be necessary.
  `,
  references: [
    "2022 ACC/AHA Guideline for the Diagnosis and Management of Patients With Myocardial Infarction.",
    "O'Gara PT, et al. 2013 ACCF/AHA Guideline for the Management of ST-Elevation Myocardial Infarction. Circulation. 2013."
  ]
};
