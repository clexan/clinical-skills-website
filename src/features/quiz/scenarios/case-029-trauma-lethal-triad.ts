import { QuizScenario } from '../quizData';

export const case029: QuizScenario = {
  id: 'case-029',
  slug: 'trauma-lethal-triad-balanced-resuscitation',
  title: 'The Lethal Triad in the Operating Room',
  category: 'Trauma',
  difficulty: 'Hard',
  vignette: "A 42-year-old female is undergoing emergency laparotomy for a Grade IV liver laceration and mesenteric hemorrhage following a high-speed MVC. She has received 2L of crystalloid and 4 units of pRBCs. Intraoperative vital signs: HR 145 bpm, BP 68/42 mmHg, SpO2 92% (FiO2 1.0), core temperature 34.8°C. Blood is oozing from all surgical surfaces and IV sites. Current labs: pH 7.18, lactate 9.2 mmol/L, base deficit -14 mEq/L, Hgb 7.4 g/dL, INR 2.4, aPTT 58 sec, platelets 62,000/μL, fibrinogen 94 mg/dL, ionized calcium 0.82 mmol/L.",
  question: "What is the most appropriate resuscitation strategy to address this patient's clinical state?",
  options: [
    {
      id: "A",
      text: "Administer an additional 2L of warmed normal saline to improve blood pressure and CO2 clearance",
      isCorrect: false
    },
    {
      id: "B",
      text: "Continue pRBC transfusion until Hgb >10 g/dL, then address coagulopathy with FFP and platelets based on repeat labs",
      isCorrect: false
    },
    {
      id: "C",
      text: "Implement balanced 1:1:1 resuscitation with pRBCs:FFP:platelets, administer tranexamic acid, calcium, and active warming measures",
      isCorrect: true
    },
    {
      id: "D",
      text: "Administer recombinant factor VIIa immediately to reverse coagulopathy before proceeding with transfusion",
      isCorrect: false
    },
    {
      id: "E",
      text: "Perform permissive hypotension strategy targeting SBP 80-90 mmHg with minimal crystalloid until surgical control achieved",
      isCorrect: false
    }
  ],
  explanation: "This patient exhibits the lethal triad of trauma: hypothermia (34.8°C), coagulopathy (INR 2.4, low platelets, low fibrinogen), and acidosis (pH 7.18, lactate 9.2, base deficit -14). The most appropriate resuscitation strategy is balanced 1:1:1 ratio of packed RBCs:fresh frozen plasma:platelets, which has been shown to reduce mortality in hemorrhagic shock by preventing dilutional coagulopathy and maintaining hemostatic capacity. Additional critical interventions include: (1) tranexamic acid 1g IV (within 3 hours of injury to reduce mortality from bleeding), (2) calcium replacement (ionized Ca 0.82 is low—citrate in blood products chelates calcium, worsening coagulopathy and cardiac function), (3) aggressive active warming (forced-air warmers, warmed fluids, increased OR temperature) as hypothermia impairs coagulation cascade enzymes, and (4) damage control surgery focusing on hemorrhage control and contamination control, not definitive repair. Option A is incorrect and dangerous—further crystalloid administration will worsen dilutional coagulopathy, hypothermia, and acidosis. Option B represents outdated sequential resuscitation that delays correction of coagulopathy. Option D is incorrect because recombinant factor VIIa is not first-line therapy. Option E misapplies permissive hypotension—once surgical control is being achieved, resuscitation should be aggressive to restore perfusion and reverse the lethal triad. Key Teaching Points: (1) The lethal triad (hypothermia, acidosis, coagulopathy) creates a self-perpetuating cycle leading to death if not aggressively reversed. (2) Balanced 1:1:1 resuscitation reduces mortality compared to RBC-predominant strategies in massive transfusion. (3) Tranexamic acid reduces mortality when given within 3 hours of injury in bleeding trauma patients. (4) Calcium replacement is critical during massive transfusion—monitor ionized calcium and replace aggressively. (5) Damage control surgery is essential when the lethal triad is present.",
  references: [
    "Holcomb JB, et al. Transfusion of plasma, platelets, and red blood cells in a 1:1:1 vs a 1:1:2 ratio and mortality in patients with severe trauma: the PROPPR randomized clinical trial. JAMA. 2015;313(5):471-482.",
    "CRASH-2 trial collaborators. Effects of tranexamic acid on death, vascular occlusive events, and blood transfusion in trauma patients with significant haemorrhage (CRASH-2): a randomised, placebo-controlled trial. Lancet. 2010;376(9734):23-32.",
    "American College of Surgeons Committee on Trauma. ATLS Advanced Trauma Life Support, 10th Edition. 2018."
  ]
};
