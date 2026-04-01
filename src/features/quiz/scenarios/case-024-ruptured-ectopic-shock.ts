import { QuizScenario } from '../quizData';

export const case024: QuizScenario = {
  id: 'case-024',
  slug: 'ruptured-ectopic-pregnancy-shock',
  title: 'Sudden Abdominal Pain and Shock in a Young Woman',
  category: 'Emergency',
  difficulty: 'Hard',
  vignette: `
A 25-year-old woman comes to the emergency department one hour after the sudden onset of diffuse abdominal pain and nausea. She has no history of serious illness. Menses occur at regular 27-day intervals; her last menstrual period was 6 weeks ago. She is sexually active and uses oral contraceptive pills inconsistently. 

**Physical Examination:**
- **Appearance:** Pale and diaphoretic.
- **Vitals:** Temp 37.7°C (99.9°F), Pulse 120/min, Resp 22/min, BP 75/55 mmHg.
- **Abdomen:** Diffuse abdominal tenderness.
- **Pelvis:** Normal-appearing vagina and cervix; right adnexal tenderness.

**Laboratory Results:**
- **Hemoglobin:** 10 g/dL.
- **Leukocytes:** 10,000/mm³.
- **Platelets:** 350,000/mm³.
- **Pregnancy Test:** Results are pending.
  `,
  question: 'Which of the following is the most appropriate next step in management?',
  options: [
    { id: 'A', text: 'Administer intravenous antibiotics', isCorrect: false },
    { id: 'B', text: 'Perform exploratory laparoscopy', isCorrect: false },
    { id: 'C', text: 'Administer intravenous lactated Ringer\'s solution', isCorrect: true },
    { id: 'D', text: 'Perform CT scan of the abdomen and pelvis with contrast', isCorrect: false },
    { id: 'E', text: 'Perform pelvic ultrasound', isCorrect: false }
  ],
  explanation: `
**Correct Answer: (C) Administer intravenous lactated Ringer's solution**

This patient is in **hypovolemic (hemorrhagic) shock**, likely due to a **ruptured ectopic pregnancy**. This is a life-threatening emergency characterized by her late menses (6 weeks ago), acute abdominal pain, adnexal tenderness, and profound hypotension (75/55 mmHg).

**Immediate Management:**
* **Stabilization:** The primary goal is immediate hemodynamic stabilization. In a patient with hemorrhagic shock, **aggressive fluid resuscitation** with balanced crystalloids (e.g., **Lactated Ringer's**) should be initiated immediately. 
* **Blood Products:** Preparation for emergency transfusion should occur concurrently. Type O-negative blood can be used if crossmatched blood is not yet available.
* **Prioritization:** Stabilization must occur **before** sending the patient for time-consuming imaging like CT or waiting for a formal ultrasound in the radiology suite.

**Why other options are less appropriate:**
* **Pelvic Ultrasound (E):** While transvaginal ultrasound is the definitive diagnostic tool for ectopic pregnancy, it should not delay the stabilization of a patient in frank shock. A bedside FAST exam may be performed, but resuscitation remains the priority.
* **Exploratory Laparoscopy (B):** This patient needs emergency surgery to control the bleeding, but she must be resuscitated and stabilized first to safely undergo anesthesia.
* **Antibiotics (A):** There is no evidence of sepsis (no high fever, normal WBC count). The history points clearly to a gynecological hemorrhage.
* **CT Scan (D):** CT is not the first-line imaging for suspected ectopic pregnancy and is inappropriate for an unstable patient.

**Clinical Pearl:** In any woman of childbearing age presenting with sudden abdominal pain and shock, ruptured ectopic pregnancy is the "must-not-miss" diagnosis until proven otherwise.
  `,
  references: [
    "ACOG Practice Bulletin No. 193: Tubal Ectopic Pregnancy.",
    "Advanced Trauma Life Support (ATLS) Student Course Manual. 10th Ed."
  ]
};
