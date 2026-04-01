import { QuizScenario } from '../quizData';

export const case059: QuizScenario = {
  id: 'case-059',
  slug: 'hypovolemic-arrest-ruptured-aaa',
  title: 'Hypovolemic Arrest from Ruptured AAA',
  category: 'Emergency',
  difficulty: 'Hard',
  vignette:
    'A 68-year-old man with hypertension and a long smoking history presents with sudden severe back and abdominal pain. Blood pressure is 80/50 mmHg, heart rate is 120 bpm, and a pulsatile abdominal mass is palpable. Before definitive management can be arranged, he becomes unresponsive and pulseless. The monitor shows organized electrical activity at 130 bpm. Two large-bore IVs are in place and CPR has started.',
  question: 'What is the MOST appropriate management priority for this cardiac arrest?',
  options: [
    { id: 'A', text: 'Activate massive transfusion protocol immediately and obtain emergent vascular/surgical control of bleeding', isCorrect: true },
    { id: 'B', text: 'Prioritize epinephrine every 3-5 minutes as the primary therapy', isCorrect: false },
    { id: 'C', text: 'Give 2 liters of crystalloid before starting blood products', isCorrect: false },
    { id: 'D', text: 'Obtain bedside imaging confirmation before mobilizing definitive care', isCorrect: false },
    { id: 'E', text: 'Begin targeted temperature management during CPR', isCorrect: false }
  ],
  explanation: `
**Correct Answer: Activate massive transfusion protocol immediately and obtain emergent vascular/surgical control of bleeding**

This patient has a classic presentation of **ruptured abdominal aortic aneurysm with hypovolemic PEA arrest**. In hemorrhagic arrest, the priority is **restoring circulating volume with blood products and controlling the source of bleeding**. Standard ACLS drugs alone are unlikely to succeed when the patient has no effective preload.

**Why the other options are wrong:**
- **B:** Epinephrine is not the primary problem-solving intervention in profound hemorrhagic arrest.
- **C:** Large crystalloid loads worsen dilutional coagulopathy and are inferior to prompt blood product resuscitation in massive hemorrhage.
- **D:** The diagnosis is already strongly apparent clinically; additional imaging should not delay blood and definitive hemorrhage control.
- **E:** Targeted temperature management is a **post-ROSC** strategy and is especially inappropriate while uncontrolled hemorrhage continues.
  `,
  references: [
    'Soar J, Becker LB, Berg KM, et al. Cardiopulmonary Resuscitation in Special Circumstances. Lancet. 2021;398(10307):1257-1268. doi:10.1016/S0140-6736(21)01257-5.',
    'Andersen LW, Holmberg MJ, Berg KM, Donnino MW, Granfeldt A. In-Hospital Cardiac Arrest: A Review. JAMA. 2019;321(12):1200-1210. doi:10.1001/jama.2019.1696.',
    'Lott C, Truhlár A. Cardiac Arrest in Special Circumstances. Curr Opin Crit Care. 2021;27(6):642-648. doi:10.1097/MCC.0000000000000876.'
  ]
};
