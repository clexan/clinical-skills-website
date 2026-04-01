import { QuizScenario } from '../quizData';

export const case087: QuizScenario = {
  id: 'case-087',
  slug: 'obstructive-urosepsis-emergent-decompression',
  title: 'Obstructive Urosepsis Requiring Source Control',
  category: 'Emergency',
  difficulty: 'Hard',
  vignette: `A 61-year-old woman with a history of recurrent nephrolithiasis presents with fever, rigors, and right flank pain for 2 days. Vital signs show blood pressure 88/52 mmHg, heart rate 118 bpm, temperature 39.8°C, and respiratory rate 24/min. She appears toxic and is confused. Laboratory studies reveal WBC 22,400/µL with 15% bands, creatinine 2.8 mg/dL (baseline 1.0), lactate 5.2 mmol/L, and platelet count 98,000/µL. Urinalysis shows pyuria and bacteriuria. CT abdomen/pelvis reveals a 9 mm obstructing right ureteral stone at the ureterovesical junction with moderate hydronephrosis and perinephric stranding. She has received 30 mL/kg crystalloid and broad-spectrum antibiotics, but remains hypotensive requiring norepinephrine.`,
  question: 'In addition to ongoing resuscitation and antibiotics, what is the MOST critical next intervention?',
  options: [
    {
      id: 'A',
      text: 'Emergent urologic decompression (percutaneous nephrostomy or ureteral stent) within 6 hours',
      isCorrect: true
    },
    {
      id: 'B',
      text: 'Continue antibiotics and vasopressors; schedule elective urologic intervention in 48-72 hours',
      isCorrect: false
    },
    {
      id: 'C',
      text: 'Extracorporeal shock wave lithotripsy (ESWL) for stone fragmentation',
      isCorrect: false
    },
    {
      id: 'D',
      text: 'Increase norepinephrine dose and add hydrocortisone before considering intervention',
      isCorrect: false
    },
    {
      id: 'E',
      text: 'Emergent nephrectomy for definitive source control',
      isCorrect: false
    }
  ],
  explanation: `
**Correct Answer: A - Emergent urologic decompression (percutaneous nephrostomy or ureteral stent) within 6 hours**

**Clinical Reasoning:**
This patient has **obstructive urosepsis with septic shock**—a urologic emergency requiring **emergent decompression**. The 2021 Surviving Sepsis Campaign Guidelines recommend that "a specific anatomical diagnosis of infection requiring emergent source control should be identified or excluded as rapidly as possible... and that any required source control intervention should be implemented **as soon as medically and logistically practical**" (Best Practice Statement).

The 2022 EAU Guidelines on Urological Infections give a **Strong Recommendation** that "in patients with urosepsis and urinary tract obstruction, **urgent decompression of the urinary tract is mandatory**." The guidelines further specify that "decompression of an obstructed urinary tract should be performed within **six hours of presentation** in patients with sepsis."

A 2024 systematic review confirmed that "**early decompression (within 6 hours) was associated with significantly lower mortality** compared to delayed decompression in patients with obstructive urosepsis and septic shock." The choice between percutaneous nephrostomy (PCN) and retrograde ureteral stenting depends on local expertise and patient factors; both are acceptable.

The 2021 SSC Guidelines emphasize that "source control is a key principle in managing sepsis" and that "in cases of septic shock, a delay in source control is associated with increased mortality."

**Why Others are Wrong:**
* **B (Continue antibiotics, elective intervention in 48-72 hours):** Delaying decompression in obstructive urosepsis with septic shock is **associated with increased mortality**. The 2022 EAU Guidelines state that "antibiotics alone are insufficient in the presence of obstruction" because the infected urine cannot drain and antibiotic penetration into the obstructed system is poor. A retrospective study found that each hour of delay in decompression was associated with increased mortality in patients with obstructive urosepsis and shock.
* **C (ESWL for stone fragmentation):** Extracorporeal shock wave lithotripsy is **contraindicated** in the setting of active urinary tract infection and sepsis. The 2022 EAU Guidelines on Urolithiasis state that "ESWL should not be performed in patients with untreated urinary tract infection." ESWL can cause bacteremia and worsen sepsis by fragmenting infected stones and releasing bacteria into the bloodstream. The priority is drainage, not stone treatment; definitive stone management should be deferred until the infection is controlled.
* **D (Increase vasopressors and add hydrocortisone before intervention):** While hemodynamic optimization is important, **source control should not be delayed** for additional medical management. The 2021 SSC Guidelines note that "although adequate resuscitation before surgical intervention may be desirable, prolonged stabilization may not be possible" and that "the urgency of source control should be balanced against the risks of the intervention." This patient has already received appropriate initial resuscitation; further delay for additional vasopressors or steroids would worsen outcomes.
* **E (Emergent nephrectomy):** Nephrectomy is **not indicated** as initial management for obstructive urosepsis. The goal is **drainage**, not organ removal. Nephrectomy may be considered only in cases of pyonephrosis with a non-functioning kidney or emphysematous pyelonephritis refractory to drainage, but these are rare scenarios. Percutaneous nephrostomy or ureteral stenting is the appropriate first-line intervention.
  `,
  references: [
    'Evans L, Rhodes A, Alhazzani W, et al. Surviving Sepsis Campaign: International Guidelines for Management of Sepsis and Septic Shock 2021. Crit Care Med. 2021;49(11):e1063-e1143.',
    'Bonkat G, Bartoletti R, Bruyère F, et al. EAU Guidelines on Urological Infections. European Association of Urology. 2022.',
    'Tandogdu Z, Wagenlehner FME. Global Epidemiology of Urinary Tract Infections. Curr Opin Infect Dis. 2016;29(1):73-79.'
  ]
};
