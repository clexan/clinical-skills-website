import { QuizScenario } from '../quizData';

export const case039: QuizScenario = {
  id: 'case-039',
  slug: 'hemorrhagic-shock-hypothermic-coagulopathy',
  title: 'The Hypothermic Coagulopathy',
  category: 'Trauma',
  difficulty: 'Hard',
  vignette: 'A 35-year-old male is 45 minutes into damage control laparotomy for grade IV liver laceration following a fall from height. He was found outdoors in cold weather. Initial vitals in ED: HR 136 bpm, BP 76/48 mmHg, Temp 34.2°C (93.6°F). FAST was positive. He has received 8 units PRBCs, 8 units FFP, and 2 apheresis platelet units (1:1:1 ratio). Despite packing the liver and achieving temporary hemostasis, diffuse oozing from all raw surfaces persists. Current OR vitals: HR 118 bpm, BP 88/52 mmHg, Temp 33.1°C (91.6°F), SpO2 96%. The anesthesiologist reports the blood products and IV fluids have been running at room temperature. Labs: pH 7.12, lactate 9.2 mmol/L, INR 2.4, fibrinogen 82 mg/dL, ionized calcium 0.92 mmol/L. TEG shows prolonged R-time and reduced maximum amplitude.',
  question: "Which intervention will MOST directly address the primary cause of this patient's ongoing coagulopathy?",
  options: [
    { id: 'A', text: 'Administer recombinant factor VIIa 90 mcg/kg IV', isCorrect: false },
    { id: 'B', text: 'Transfuse 10 units of cryoprecipitate to raise fibrinogen', isCorrect: false },
    { id: 'C', text: 'Initiate aggressive active rewarming with warmed IV fluids, forced-air warming, and warmed blood products', isCorrect: true },
    { id: 'D', text: 'Administer 2 grams of tranexamic acid IV to reduce fibrinolysis', isCorrect: false },
    { id: 'E', text: 'Increase FFP:RBC ratio to 2:1 to provide more clotting factors', isCorrect: false }
  ],
  explanation: `**Correct Answer: Initiate aggressive active rewarming**

This patient demonstrates the **lethal triad** of trauma: hypothermia, coagulopathy, and acidosis. Hypothermia is the primary driver of the refractory coagulopathy despite adequate blood product resuscitation.

**Clinical Pathophysiology:**

The lethal triad represents a self-perpetuating cycle where each component worsens the others:

**Hypothermia (Temp <35°C)** causes coagulopathy by:
- **Inhibiting enzyme activity**: The coagulation cascade is a series of temperature-dependent enzymatic reactions. At 33°C, the activity of these enzymes is reduced by 30-50%.
- **Platelet dysfunction**: Hypothermia impairs platelet adhesion and aggregation by reducing thromboxane A2 production and surface receptor activity.
- **Enhanced fibrinolysis**: Cold temperature increases the activity of fibrinolytic enzymes.

Importantly, **standard coagulation tests (PT/INR, aPTT) do NOT reflect hypothermic coagulopathy** because they are performed in the lab after rewarming the sample to 37°C. The TEG (if performed at the patient's temperature) would correctly show the deficit.

**Lethal Triad Synergism:**
- **Acidosis (pH <7.10)** further reduces the activity of clotting factors. At pH 7.1, the activity of Factor VIIa is reduced by 90%.
- **Hypocalcemia (Ionized Ca <1.1 mmol/L)**: Calcium is Factor IV, essential for multiple steps in the cascade. Massive transfusion of citrated products chelates calcium.

**Why Other Options are Incorrect:**

**A (Factor VIIa)**: Recombinant Factor VIIa is ineffective in the setting of severe hypothermia (<34°C) and acidosis (pH <7.2). It requires a functional environment to work.

**B (Cryoprecipitate)**: While fibrinogen is low (<150-200 mg/dL), transfusing more products without rewarming will not correct the underlying enzymatic dysfunction. Rewarming is the primary intervention.

**D (Tranexamic acid)**: TXA is indicated within 3 hours of injury for trauma patients, but this patient is 45+ minutes into surgery. The coagulopathy here is primarily hypothermia-driven, not hyperfibrinolysis.

**E (Increase FFP ratio to 2:1)**: The patient has already received appropriate 1:1:1 resuscitation. Giving more plasma without correcting hypothermia will not improve coagulation and risks volume overload.`,
  references: ['Nature Reviews Disease Primers (2021)', 'British Journal of Anaesthesia (2016)', 'Journal of Trauma and Acute Care Surgery (2024)', 'International Journal of Environmental Research and Public Health (2021)']
};
