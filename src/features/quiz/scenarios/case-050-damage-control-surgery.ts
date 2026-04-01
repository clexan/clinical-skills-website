import { QuizScenario } from '../quizData';

export const case050: QuizScenario = {
  id: 'case-050',
  slug: 'damage-control-surgery-decision',
  title: 'Physiology Over Anatomy',
  category: 'Trauma',
  difficulty: 'Hard',
  vignette: 'A 29-year-old male is 3 hours into exploratory laparotomy for multiple gunshot wounds to the abdomen. He has undergone small bowel resection, right hemicolectomy, and repair of a grade IV liver laceration. Current OR vitals: HR 128 bpm, BP 78/48 mmHg on norepinephrine 0.15 mcg/kg/min, Temp 33.8°C (92.8°F), SpO2 92% on FiO2 100%. The patient has received 22 units PRBCs, 22 units FFP, 3 apheresis platelet units, and 10 units cryoprecipitate. Labs: pH 7.08, lactate 11.2 mmol/L, base deficit -16, INR 2.2, fibrinogen 95 mg/dL, ionized calcium 0.88 mmol/L. The anesthesiologist reports increasing difficulty with ventilation and concerns about cardiac arrest.',
  question: 'What is the MOST appropriate surgical decision at this point?',
  options: [
    { id: 'A', text: 'Continue with definitive anastomoses and primary fascial closure to complete the operation', isCorrect: false },
    { id: 'B', text: 'Abort the operation: perform damage control with bowel discontinuity, abdominal packing, and temporary closure; transfer to ICU for resuscitation', isCorrect: true },
    { id: 'C', text: 'Perform the anastomoses but leave the abdomen open with planned ventral hernia', isCorrect: false },
    { id: 'D', text: 'Administer additional blood products and vasopressors to stabilize physiology before proceeding with definitive repair', isCorrect: false },
    { id: 'E', text: 'Perform resuscitative thoracotomy to improve hemodynamics before continuing abdominal surgery', isCorrect: false }
  ],
  explanation: `**Correct Answer: Abort operation with damage control surgery and transfer to ICU**

This patient demonstrates **physiologic exhaustion** requiring immediate **damage control surgery (DCS)**. The principle is **"physiology over anatomy."**

**The Lethal Triad:**
1. **Hypothermia** (33.8°C): Impairs enzymatic coagulation.
2. **Acidosis** (pH 7.08): Reduced cardiac contractility and clotting factor function.
3. **Coagulopathy** (INR 2.2): Refractory despite massive transfusion.

**Damage Control Surgery Strategy:**
1. **Control hemorrhage**: Packing (liver), rapid ligation or shunts.
2. **Control contamination**: Staple off bowel ends; do NOT perform anastomoses.
3. **Temporary abdominal closure**: Negative pressure therapy (e.g., vacuum) to prevent abdominal compartment syndrome.
4. **ICU resuscitation**: Correct hypothermia, acidosis, and coagulopathy in a controlled setting.
5. **Planned reoperation**: Definitive repair when physiology is restored (24-72 hours later).

**Why Other Options are Incorrect:**
- **A & C**: Continuing with definitive repairs or anastomoses in this state will lead to intraoperative death. The patient's metabolic state is too far deranged for healing or surviving a prolonged operation.
- **D**: This patient has already received 22+ units of products with worsening parameters; more products in the OR will not fix enzymatic dysfunction caused by hypothermia and acidosis.
- **E**: Thoracotomy would add a major physiologic insult and is not indicated for this abdominal injury.`,
  references: ['Journal of Trauma and Acute Care Surgery (2024)', 'World Journal of Emergency Surgery (2017)', 'Annals of Surgery (2021)']
};
