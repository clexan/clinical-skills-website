import { QuizScenario } from '../quizData';

export const case026: QuizScenario = {
  id: 'case-026',
  slug: 'hemorrhagic-shock-class-2-vs-3-shock-index',
  title: 'The Tachycardic Motorcyclist',
  category: 'Trauma',
  difficulty: 'Hard',
  vignette: "A 28-year-old male arrives via EMS after a motorcycle collision at highway speed. He is alert but anxious, complaining of severe left-sided abdominal pain. His skin is cool and pale with delayed capillary refill. Vital signs: HR 118 bpm, BP 96/64 mmHg, RR 24/min, SpO2 97% on room air, temperature 36.8°C. SAMPLE history reveals no significant medical history, no medications, last meal 3 hours ago, and the collision occurred when he lost control avoiding debris. Physical exam shows left upper quadrant tenderness with guarding, a seatbelt sign across the abdomen, and a pelvic binder applied in the field. Two large-bore IVs are established. FAST exam demonstrates free fluid in Morrison's pouch and the splenorenal recess. Initial labs: Hgb 12.8 g/dL, lactate 3.2 mmol/L, base deficit -6 mEq/L. His shock index is 1.23.",
  question: "What is the most appropriate classification of this patient's hemorrhagic shock and immediate management priority?",
  options: [
    {
      id: "A",
      text: "Class I shock; observe with serial abdominal exams and repeat FAST in 30 minutes",
      isCorrect: false
    },
    {
      id: "B",
      text: "Class II shock; initiate crystalloid resuscitation with 2L bolus and prepare for possible operative intervention",
      isCorrect: false
    },
    {
      id: "C",
      text: "Class III shock; activate massive transfusion protocol and proceed urgently to the operating room",
      isCorrect: true
    },
    {
      id: "D",
      text: "Class IV shock; perform emergency department thoracotomy for hemorrhage control",
      isCorrect: false
    },
    {
      id: "E",
      text: "Compensated shock; continue crystalloid resuscitation and obtain CT abdomen/pelvis with IV contrast",
      isCorrect: false
    }
  ],
  explanation: "This patient has Class III hemorrhagic shock based on multiple clinical indicators. The shock index (HR/SBP = 118/96 = 1.23) exceeds the critical threshold of 1.0, which is highly sensitive for significant blood loss requiring transfusion. Class III shock (30-40% blood volume loss) presents with tachycardia >120 bpm, hypotension, tachypnea, altered mental status (anxiety), cool extremities, and oliguria. The elevated lactate (3.2 mmol/L) and base deficit (-6 mEq/L) confirm tissue hypoperfusion. With positive FAST showing hemoperitoneum and hemodynamic instability, this patient requires immediate activation of massive transfusion protocol and urgent laparotomy for definitive hemorrhage control. Option A is incorrect because Class I shock involves <15% blood loss and normal vitals. Option B is incorrect because a shock index >1.0 and hypotension indicate progression beyond Class II. Option D is incorrect because Class IV shock (>40% loss) presents with severe hypotension (SBP <70) and profound mental status changes; thoracotomy is for cardiac arrest. Key Teaching Points: (1) Shock index >1.0 predicts need for massive transfusion and correlates with Class III or worse hemorrhagic shock. (2) FAST-positive with hemodynamic instability mandates immediate operative intervention without further imaging. (3) Lactate and base deficit are critical markers of shock severity and tissue hypoperfusion. (4) The traditional classification (Classes I-IV) should be integrated with modern metrics like shock index for accurate assessment. (5) Avoid the 'crystalloid trap'—patients in Class III/IV shock require blood products, not liters of saline.",
  references: [
    "American College of Surgeons Committee on Trauma. ATLS Advanced Trauma Life Support, 10th Edition. 2018.",
    "Mutschler M, et al. The Shock Index revisited - a fast guide to transfusion requirement? A retrospective analysis on 21,853 patients derived from the TraumaRegister DGU. Crit Care. 2013;17(4):R172."
  ]
};
