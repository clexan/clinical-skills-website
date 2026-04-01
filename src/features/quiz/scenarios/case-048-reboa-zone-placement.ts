import { QuizScenario } from '../quizData';

export const case048: QuizScenario = {
  id: 'case-048',
  slug: 'reboa-zone-placement',
  title: 'The Endovascular Bridge',
  category: 'Trauma',
  difficulty: 'Hard',
  vignette: 'A 34-year-old male sustains multiple gunshot wounds to the abdomen and pelvis. ABCDE assessment in trauma bay: Airway patent, Breathing 32/min, Circulation shows barely palpable femoral pulses, absent radial pulses. Vitals: HR 142 bpm, BP 62/38 mmHg, RR 32/min, Temp 35.6°C (96.1°F), SpO2 90% on high-flow oxygen. SAMPLE: no medications, no medical history. FAST exam shows massive free fluid in all four quadrants and the pelvis. Chest X-ray shows no hemothorax or pneumothorax. The patient has received 4 units O-negative RBCs and 4 units plasma with minimal response. The OR is being prepared but will not be available for 15 minutes. The trauma team is considering REBOA as a bridge to definitive hemorrhage control.',
  question: 'What is the MOST appropriate REBOA strategy for this patient?',
  options: [
    { id: 'A', text: 'Place REBOA in Zone I (descending thoracic aorta) to control infradiaphragmatic hemorrhage, with maximum occlusion time 60 min', isCorrect: true },
    { id: 'B', text: 'Place REBOA in Zone III (infrarenal aorta) to control pelvic hemorrhage, with maximum occlusion time 60 min', isCorrect: false },
    { id: 'C', text: 'Place REBOA in Zone I (descending thoracic aorta) to control infradiaphragmatic hemorrhage, with maximum occlusion time 30 min', isCorrect: false },
    { id: 'D', text: 'Place REBOA in Zone III (infrarenal aorta) to control abdominal hemorrhage, with maximum occlusion time 30 min', isCorrect: false },
    { id: 'E', text: 'REBOA is contraindicated due to positive FAST and hemodynamic instability; proceed directly to OR', isCorrect: false }
  ],
  explanation: `**Correct Answer: Place REBOA in Zone I (descending thoracic aorta) with maximum occlusion time 60 min**

REBOA (Resuscitative Endovascular Balloon Occlusion of the Aorta) is a minimally invasive alternative to resuscitative thoracotomy for controlling non-compressible torso hemorrhage below the diaphragm.

**Aortic Zones:**
- **Zone I** (descending thoracic aorta): From left subclavian artery to celiac trunk.
  - **Indication**: Infradiaphragmatic hemorrhage (abdominal or pelvic).
  - **Effect**: Controls all bleeding below the diaphragm.
  - **Ischemia time limit**: Typically up to **60 minutes**, though shorter is preferred to minimize metabolic consequences.
- **Zone II** (pararenal): Between celiac trunk and renal arteries. **Avoided** for REBOA placement.
- **Zone III** (infrarenal): From renal arteries to aortic bifurcation.
  - **Indication**: Isolated pelvic, junctional, or groin hemorrhage.
  - **Effect**: Spares perfusion to abdominal organs.

**This Patient's Strategy:**
The patient has gunshot wounds to both the **abdomen and pelvis** with a positive FAST in all quadrants. A Zone III balloon would only address the pelvic bleeding, failing to control abdominal hemorrhage. Therefore, **Zone I placement** is required.

**Clinical Considerations:**
REBOA provides temporary stabilization ("the bridge") to definitive surgical control. It increases proximal mean arterial pressure and cerebral/myocardial perfusion. Reperfusion injury is a significant risk; therefore, gradual deflation and coordination with the surgical team are essential.

**Why Other Options are Incorrect:**
- **B & D (Zone III)**: Inappropriate because the patient has abdominal bleeding (positive FAST). Zone III only controls bleeding below the renal arteries.
- **E (Contraindicated)**: REBOA is explicitly indicated for these patients as a bridge to surgery when immediate OR is not available.`,
  references: ['Journal of Trauma and Acute Care Surgery (2019)', 'Journal of Trauma and Acute Care Surgery (2020)', 'New England Journal of Medicine (2019)']
};
