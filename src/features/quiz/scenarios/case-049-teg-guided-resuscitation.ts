import { QuizScenario } from '../quizData';

export const case049: QuizScenario = {
  id: 'case-049',
  slug: 'teg-guided-resuscitation',
  title: 'Rapid TEG and Targeted Resuscitation',
  category: 'Trauma',
  difficulty: 'Hard',
  vignette: 'A 42-year-old male is 90 minutes into exploratory laparotomy for multiple GSW to the abdomen. He has received 1:1:1 resuscitation with 12 units PRBCs and 12 units FFP. Despite packing the liver and achieving initial control of bowel injuries, the surgical team reports persistent diffuse oozing from all surgical surfaces. Current vitals: HR 122 bpm, BP 88/54 mmHg, Temp 35.1°C (95.2°F). Rapid TEG results: ACT 148 s (N: 118-148), K-time 3.2 min (N: 1-2), α-angle 52° (N: >60°), MA 48 mm (N: >55), LY30 2.1% (N: <3%). Initial labs: INR 1.4, Hgb 8.4 g/dL, platelets 82,000/μL, ionized calcium 1.08 mmol/L.',
  question: 'Based on the TEG results, what is the MOST appropriate blood product intervention?',
  options: [
    { id: 'A', text: 'Transfuse 2 apheresis platelet units to address the low MA', isCorrect: false },
    { id: 'B', text: 'Transfuse 10 units cryoprecipitate to address fibrinogen deficiency indicated by prolonged K-time and reduced α-angle', isCorrect: true },
    { id: 'C', text: 'Transfuse 4 additional units FFP to address the prolonged ACT', isCorrect: false },
    { id: 'D', text: 'Administer tranexamic acid to address the elevated LY30 indicating hyperfibrinolysis', isCorrect: false },
    { id: 'E', text: 'Continue 1:1:1 ratio transfusion without targeted intervention', isCorrect: false }
  ],
  explanation: `**Correct Answer: Transfuse 10 units cryoprecipitate to address fibrinogen deficiency**

This case demonstrates **goal-directed resuscitation** using **thromboelastography (TEG)** to identify specific coagulation defects.

**Rapid TEG Interpretation:**
1. **ACT (Activated Clotting Time)**: Measures time to initial clot formation. This patient's ACT is 148 s (normal), suggesting adequate clotting factors (INR 1.4).
2. **K-time** (3.2 min, prolonged) and **α-angle** (52°, reduced): These parameters together indicate the **rate of clot formation**, which is heavily dependent on **fibrinogen**.
3. **MA (Maximum Amplitude)**: 48 mm (mildly reduced). MA measures maximum clot strength, dependent on platelets and fibrinogen.
4. **LY30**: 2.1% (normal). Rules out hyperfibrinolysis.

**Conclusion:**
The prolonged K-time and low α-angle in the setting of a normal ACT indicate **fibrinogen deficiency**. Fibrinogen is often the first factor to reach critically low levels during massive hemorrhage.

**Appropriate Intervention:**
Transfuse **cryoprecipitate** (10 units) to rapidly raise fibrinogen. Fibrinogen concentrate is an alternative where available.

**Why Other Options are Incorrect:**
- **A (Platelets)**: While MA is low, the low α-angle strongly suggests fibrinogen is the primary deficit.
- **C (FFP)**: ACT is normal, indicating that the patient has adequate coagulation factors for initial clot formation.
- **D (TXA)**: LY30 is 2.1% (normal), so there is no evidence of hyperfibrinolysis.
- **E (Continue 1:1:1)**: While 1:1:1 is the baseline, TEG allows for more surgical, targeted correction of specific deficiencies.`,
  references: ['Journal of Trauma and Acute Care Surgery (2020)', 'Annals of Surgery (2019)', 'American College of Surgeons TQIP Guidelines (2014)']
};
