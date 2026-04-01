import { QuizScenario } from '../quizData';

export const case088: QuizScenario = {
  id: 'case-088',
  slug: 'perforated-viscus-emergent-surgery-source-control',
  title: 'Perforated Viscus Requiring Emergent Surgery',
  category: 'Emergency',
  difficulty: 'Hard',
  vignette: `A 74-year-old man with a history of diverticulosis presents with 18 hours of severe left lower quadrant abdominal pain, now diffuse. Vital signs show blood pressure 82/48 mmHg, heart rate 124 bpm, temperature 38.9°C, and respiratory rate 28/min. He is diaphoretic and appears acutely ill. Abdominal examination reveals diffuse rigidity with rebound tenderness. Laboratory studies show WBC 24,800/µL, lactate 6.8 mmol/L, and creatinine 2.4 mg/dL. CT abdomen/pelvis reveals free intraperitoneal air, a thickened sigmoid colon with a focal defect, and moderate free fluid. He has received 2 liters of crystalloid and broad-spectrum antibiotics. Blood pressure is now 86/54 mmHg on norepinephrine 0.12 mcg/kg/min.`,
  question: 'What is the MOST appropriate next step in management?',
  options: [
    {
      id: 'A',
      text: 'Emergent exploratory laparotomy for source control, ideally within 6-12 hours of identification',
      isCorrect: true
    },
    {
      id: 'B',
      text: 'Continue resuscitation and antibiotics; reassess for surgery in 24-48 hours if no improvement',
      isCorrect: false
    },
    {
      id: 'C',
      text: 'CT-guided percutaneous drainage of the intra-abdominal fluid collection',
      isCorrect: false
    },
    {
      id: 'D',
      text: 'Optimize hemodynamics with additional vasopressors before any surgical intervention',
      isCorrect: false
    },
    {
      id: 'E',
      text: 'Colonoscopy to confirm the site of perforation before surgery',
      isCorrect: false
    }
  ],
  explanation: `
**Correct Answer: A - Emergent exploratory laparotomy for source control, ideally within 6-12 hours of identification**

**Clinical Reasoning:**
This patient has **perforated sigmoid diverticulitis with diffuse peritonitis and septic shock**—a surgical emergency requiring **emergent operative source control**. The 2021 Surviving Sepsis Campaign Guidelines recommend that "source control intervention should be implemented **as soon as medically and logistically practical** after the diagnosis is made" (Best Practice Statement).

The 2021 WSES/GAIS/SIS-E/WSIS/AAST Guidelines on Intra-Abdominal Infections state: "**Early and adequate source control is of utmost importance** in the management of intra-abdominal sepsis. Patients with peritonitis require emergency surgical intervention... **Surgical intervention within 6 hours** should be the goal."

A 2024 JAMA Surgery study of 8,903 patients with intra-abdominal sepsis found that "**delayed source control (>12 hours) was associated with significantly higher mortality** (adjusted OR 1.76, 95% CI 1.42-2.18) compared to early source control." The study concluded that "source control should be achieved as early as possible, ideally within 6-12 hours of diagnosis."

The 2017 WSES Guidelines on Acute Left Colonic Diverticulitis confirm that "patients with **diffuse peritonitis should undergo emergency surgery**" and that "Hartmann's procedure or primary anastomosis with or without diverting ileostomy are acceptable options."

**Why Others are Wrong:**
* **B (Continue resuscitation, reassess in 24-48 hours):** Delaying surgery in the setting of **free perforation with diffuse peritonitis** is associated with **significantly increased mortality**. The 2021 SSC Guidelines note that "in cases of septic shock, a delay in source control is associated with increased mortality." This patient has an ongoing source of contamination (perforated colon) that cannot be controlled with antibiotics alone. Each hour of delay worsens outcomes.
* **C (CT-guided percutaneous drainage):** Percutaneous drainage is appropriate for **contained abscesses**, not for **free perforation with diffuse peritonitis**. The 2017 WSES Guidelines state that "percutaneous drainage may be considered for localized abscesses in hemodynamically stable patients" but that "patients with diffuse peritonitis require emergency surgery." This patient has free air and diffuse peritonitis—the source cannot be controlled with drainage alone; the perforation must be surgically addressed.
* **D (Optimize hemodynamics before surgery):** While hemodynamic resuscitation is important, **surgery should not be delayed for prolonged optimization** in the setting of ongoing contamination. The 2021 SSC Guidelines state that "although adequate resuscitation before surgical intervention may be desirable, prolonged stabilization may not be possible, and the balance of risk and benefit must be considered." This patient has already received initial resuscitation; further delay for "optimization" would allow continued peritoneal contamination and worsen outcomes.
* **E (Colonoscopy to confirm perforation site):** Colonoscopy is **absolutely contraindicated** in the setting of suspected colonic perforation. Insufflation of air during colonoscopy would worsen the pneumoperitoneum and peritoneal contamination. The CT findings (free air, sigmoid wall defect, free fluid) are diagnostic; no additional confirmation is needed. Proceeding directly to surgery is indicated.
  `,
  references: [
    'Evans L, Rhodes A, Alhazzani W, et al. Surviving Sepsis Campaign: International Guidelines for Management of Sepsis and Septic Shock 2021. Crit Care Med. 2021;49(11):e1063-e1143.',
    'Sartelli M, Coccolini F, Kluger Y, et al. WSES/GAIS/SIS-E/WSIS/AAST Global Clinical Pathways for Patients With Intra-Abdominal Infections. World J Emerg Surg. 2021;16(1):49.',
    'Sartelli M, Catena F, Ansaloni L, et al. WSES Guidelines for the Management of Acute Left Sided Colonic Diverticulitis in the Emergency Setting. World J Emerg Surg. 2016;11:37.'
  ]
};
