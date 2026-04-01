import { QuizScenario } from '../quizData';

export const case028: QuizScenario = {
  id: 'case-028',
  slug: 'atypical-hemorrhagic-shock-elderly-beta-blocker-anticoagulation',
  title: 'The Normotensive Bleeder',
  category: 'Trauma',
  difficulty: 'Hard',
  vignette: "A 76-year-old male presents to the ED after a ground-level fall down five stairs at home 4 hours ago. He initially refused EMS transport but his wife called 911 when he became increasingly confused. He is oriented only to person, lethargic, and pale. Vital signs: HR 88 bpm, BP 118/76 mmHg, RR 22/min, SpO2 94% on room air, temperature 36.2°C. SAMPLE history from his wife reveals hypertension, atrial fibrillation, and prior MI. Medications include metoprolol 100 mg BID, apixaban 5 mg BID, atorvastatin, and lisinopril. He ate breakfast 6 hours ago. Physical exam shows a large left flank ecchymosis, left lower rib tenderness, and a distended abdomen with diffuse tenderness but no rigidity. Pelvis is stable. FAST exam demonstrates significant free fluid in Morrison's pouch, the splenorenal recess, and pelvis. Two large-bore IVs are established. Initial labs: Hgb 8.2 g/dL (baseline 13.5 g/dL per wife), lactate 4.8 mmol/L, base deficit -8 mEq/L, INR 1.1, aPTT 32 sec, creatinine 1.4 mg/dL. His shock index is 0.75.",
  question: "What is the most critical factor masking the severity of this patient's hemorrhagic shock, and what is the most appropriate immediate management?",
  options: [
    {
      id: "A",
      text: "Delayed presentation is masking shock; observe with serial exams and repeat Hgb in 6 hours",
      isCorrect: false
    },
    {
      id: "B",
      text: "Beta-blocker therapy is blunting tachycardic response; activate massive transfusion protocol, reverse anticoagulation, and proceed to emergency laparotomy",
      isCorrect: true
    },
    {
      id: "C",
      text: "Normal shock index indicates stable Class I shock; administer 2L crystalloid bolus and obtain CT abdomen/pelvis",
      isCorrect: false
    },
    {
      id: "D",
      text: "Age-related physiologic changes are masking shock; initiate crystalloid resuscitation and admit to ICU for monitoring",
      isCorrect: false
    },
    {
      id: "E",
      text: "Apixaban is causing ongoing bleeding; administer 4-factor PCC and tranexamic acid, then reassess in 30 minutes",
      isCorrect: false
    }
  ],
  explanation: "This patient has severe hemorrhagic shock (Class III-IV) that is masked by beta-blocker therapy preventing the expected tachycardic response. Despite a 'normal' shock index of 0.75 and relatively preserved blood pressure, multiple indicators reveal life-threatening hemorrhage: Hgb drop from 13.5 to 8.2 g/dL (>5 g/dL acute decrease), severe metabolic acidosis (lactate 4.8, base deficit -8), altered mental status, and large-volume hemoperitoneum on FAST. Beta-blockers blunt the compensatory tachycardia that typically signals hypovolemia, creating a false sense of stability. Elderly patients also have decreased physiologic reserve and impaired compensatory mechanisms. The patient requires immediate massive transfusion protocol activation, reversal of apixaban with 4-factor prothrombin complex concentrate (PCC), and emergency laparotomy for definitive hemorrhage control. Option A is dangerous because 'observe and wait' in a patient with >5 g/dL Hgb drop, severe acidosis, altered mental status, and large hemoperitoneum will result in death. Option C is a critical error—relying on shock index alone in a beta-blocked patient ignores the pathophysiology. Option E addresses anticoagulation reversal but fails to recognize the need for immediate surgical hemorrhage control. Key Teaching Points: (1) Beta-blockers mask tachycardia in hemorrhagic shock—rely on lactate, base deficit, mental status, and Hgb trends instead of HR. (2) Shock index is unreliable in patients on beta-blockers, calcium channel blockers, or with pacemakers. (3) Geriatric trauma patients decompensate rapidly with less physiologic reserve—early aggressive intervention is critical. (4) Apixaban (factor Xa inhibitor) is reversed with 4-factor PCC (50 units/kg) or andexanet alfa if available. (5) Metabolic markers (lactate >4, base deficit < -6) are more reliable than vital signs in elderly trauma.",
  references: [
    "American College of Surgeons Committee on Trauma. ATLS Advanced Trauma Life Support, 10th Edition. 2018.",
    "Callaway DW, et al. The effect of preinjury beta-blockade on the heart rate and blood pressure response to traumatic hypovolemia. Arch Surg. 2004;139(2):162-166."
  ]
};
