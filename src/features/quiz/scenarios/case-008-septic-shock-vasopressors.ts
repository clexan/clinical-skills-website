import { QuizScenario } from '../quizData';

export const case008: QuizScenario = {
  id: 'case-008',
  slug: 'septic-shock-vasopressor-choice',
  title: 'Altered Mental Status and Persistent Hypotension',
  category: 'Emergency',
  difficulty: 'Hard',
  vignette: `
A 68-year-old man with bilateral percutaneous nephrostomy tubes is brought to the emergency department for altered mental status. His wife reports he was responding with nonsensical phrases this morning. Four days ago, his nephrostomy tubes were exchanged; since then, output from the right bag has been low, and he complained of right flank pain yesterday. He has prostate cancer and receives leuprolide injections.

**Physical Examination:**
- **Mental Status:** Oriented to person, but not to place or time.
- **Vitals:** Temp 36.8°C (98.2°F), Pulse 124/min, Resp 22/min, BP 76/50 mmHg (supine).
- **Other:** Diaphoretic, uncomfortable. Right nephrostomy bag contains a small amount of cloudy urine; left bag contains clear urine.

**Laboratory Results:**
- **WBC:** 22,000/mm³
- **Lactic Acid:** 4.2 mmol/L (Normal < 2)
- **Hemodynamics (Central Venous Catheter):**
  - PCWP: 4 mmHg (N: 5–16)
  - SVR: 455 dynes·sec/cm⁵ (N: 900–1400)
  - Cardiac Index: 5.3 L/min/m² (N: 2.5–4.2)
  - SvO₂: 81% (N: 65–70)

Fluid resuscitation (2.5 L of 0.9% saline) and broad-spectrum antibiotics were initiated. After fluids, his blood pressure remains 78/54 mmHg.
  `,
  question: 'Which of the following is the most appropriate next step in pharmacotherapy?',
  options: [
    { id: 'A', text: 'Phenylephrine therapy', isCorrect: false },
    { id: 'B', text: 'Dopamine therapy', isCorrect: false },
    { id: 'C', text: 'Dobutamine therapy', isCorrect: false },
    { id: 'D', text: 'Norepinephrine therapy', isCorrect: true },
    { id: 'E', text: 'Hydrocortisone therapy', isCorrect: false },
    { id: 'F', text: 'No additional pharmacotherapy is indicated', isCorrect: false }
  ],
  explanation: `
**Correct Answer: (D) Norepinephrine therapy**

This patient meets the criteria for **septic shock** (likely secondary to an obstructed/infected nephrostomy tube) and has persistent hypotension despite adequate fluid resuscitation (2.5 L of saline). 

**Hemodynamic Profile in Septic Shock:**
* **Low SVR (Afterload):** Pathologic vasodilation caused by cytokines.
* **Low PCWP (Preload):** Relative hypovolemia.
* **High Cardiac Index:** Compensatory increase in heart rate and stroke volume.
* **High SvO₂:** Peripheral microcirculatory shunting leads to a lower oxygen extraction rate.

**Management:**
**Norepinephrine (NE)** is the first-line vasopressor of choice for septic shock. It provides potent α1-mediated vasoconstriction (increasing SVR) and modest β1-mediated inotropy, which helps maintain cardiac output against the increased afterload.

**Why other options are less appropriate:**
* **Phenylephrine (A):** Primarily a pure alpha-agonist. It is generally second-line in sepsis and used when NE causes limiting tachyarrhythmias.
* **Dopamine (B):** Associated with a higher risk of arrhythmias and higher mortality compared to NE in shock states.
* **Dobutamine (C):** An inotrope/vasodilator. While used in "cold" septic shock (low CI), it is not first-line for the "warm" distributive shock seen here (CI is already high).
* **Hydrocortisone (E):** Considered for septic shock that is refractory to vasopressor therapy.
* **Phenylephrine (A):** First-line for neurogenic shock, but this patient's high CI and clinical history of infection point strongly to sepsis.

**Note on Normothermia:** The absence of fever does not rule out sepsis, especially in elderly patients who may be normothermic or even hypothermic, often indicating a poorer prognosis.
  `,
  references: [
    "Surviving Sepsis Campaign: International Guidelines for Management of Sepsis and Septic Shock 2021.",
    "Rhodes A, et al. Intensive Care Med. 2017.",
    "De Backer D, et al. Comparison of Dopamine and Norepinephrine in the Treatment of Shock. NEJM. 2010."
  ]
};
