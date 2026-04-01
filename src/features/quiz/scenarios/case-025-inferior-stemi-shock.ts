import { QuizScenario } from '../quizData';

export const case025: QuizScenario = {
  id: 'case-025',
  slug: 'inferior-stemi-cardiogenic-shock',
  title: 'Acute Chest Pain and Shock on the Tennis Court',
  category: 'Cardiology',
  difficulty: 'Hard',
  vignette: `
A 64-year-old man is brought to the emergency department 30 minutes after the sudden onset of substernal chest pain and nausea while playing tennis. He has hypertension and hyperlipidemia, managed with hydrochlorothiazide and atorvastatin. 

**Physical Examination:**
- **Appearance:** Diaphoretic and distressed.
- **Vitals:** Pulse 110/min, Resp 31/min, BP 85/55 mmHg.
- **Cardiovascular:** Jugular venous distention (JVD) noted.
- **Respiratory:** Crackles over the lower lung fields bilaterally.
- **Perfusion:** Capillary refill time is delayed; extremities are cool to touch.

**Diagnostic Findings:**
- **Troponin I:** 0.04 ng/mL.
- **ECG:** ST-segment elevations in leads II, III, and aVF.
  `,
  question: 'Which of the following is the most appropriate next step in management?',
  options: [
    { id: 'A', text: 'Administer sublingual nitroglycerin and start metoprolol therapy', isCorrect: false },
    { id: 'B', text: 'Initiate close cardiac monitoring and repeat troponin measurement in 1 hour', isCorrect: false },
    { id: 'C', text: 'Perform percutaneous transluminal coronary angioplasty', isCorrect: true },
    { id: 'D', text: 'Start clopidogrel therapy', isCorrect: false },
    { id: 'E', text: 'Administer intravenous recombinant tissue plasminogen activator', isCorrect: false }
  ],
  explanation: `
**Correct Answer: (C) Perform percutaneous transluminal coronary angioplasty (PTCA)**

This patient has an **inferior ST-segment elevation myocardial infarction (STEMI)** complicated by **cardiogenic shock** (hypotension, JVD, pulmonary edema, and poor peripheral perfusion).

**Management of Acute STEMI:**
* **Emergency Revascularization:** This is the most critical step to restore coronary patency and limit infarct size. PTCA (Primary PCI) is the preferred method.
* **Timing:** The "door-to-balloon" time should ideally be < 90 minutes. 
* **Fibrinolytics (E):** Only considered if PCI cannot be performed within 120 minutes of hospital arrival.

**Why other options are less appropriate:**
* **Nitroglycerin & Metoprolol (A):** Both are strictly contraindicated in this scenario. Nitrates can cause profound hypotension in inferior/RV infarctions, and beta-blockers are contraindicated in the setting of acute heart failure or cardiogenic shock.
* **Monitoring/Repeat Troponin (B):** STEMI is a clinical and ECG diagnosis. Revascularization should never be delayed for serial biomarkers.
* **Clopidogrel (D):** While dual antiplatelet therapy (DAPT) is required, the single most important "next step" for survival in shock is mechanical revascularization. PTCA takes priority.

**Clinical Pearl:** Cardiogenic shock in the setting of STEMI requires aggressive management, often including inotropic support or mechanical circulatory assistance, alongside immediate reperfusion.
  `,
  references: [
    "2022 ACC/AHA Guideline for the Diagnosis and Management of Patients With Myocardial Infarction.",
    "O'Gara PT, et al. 2013 ACCF/AHA Guideline for the Management of ST-Elevation Myocardial Infarction. Circulation. 2013."
  ]
};
