import { QuizScenario } from '../quizData';

export const case030: QuizScenario = {
  id: 'case-030',
  slug: 'hemorrhagic-shock-pregnancy-masked-blood-loss',
  title: 'The Bleeding Gravida',
  category: 'Trauma',
  difficulty: 'Hard',
  vignette: "A 29-year-old female at 32 weeks gestation presents to the ED after a motor vehicle collision where she was a restrained driver hit from the side. She complains of severe abdominal pain and vaginal bleeding. She appears anxious and pale. Vital signs: HR 108 bpm, BP 102/68 mmHg, RR 24/min, SpO2 96% on room air, temperature 36.9°C. SAMPLE history reveals this is her second pregnancy (G2P1), no medical problems, prenatal vitamins only, last meal 2 hours ago. She reports the airbag deployed and the seatbelt was across her lower abdomen. Physical exam shows a gravid abdomen with a firm, tender uterus and moderate vaginal bleeding with clots. Fetal heart tones are 98 bpm (baseline 140s per patient). No other obvious injuries. Two large-bore IVs are placed. FAST exam shows free fluid in Morrison's pouch and the pelvis, though uterine size limits the exam. Obstetrics is emergently consulted. Initial labs: Hgb 10.2 g/dL (baseline 11.8 g/dL at last prenatal visit 2 weeks ago), platelets 118,000/μL, fibrinogen 168 mg/dL, INR 1.3, lactate 3.8 mmol/L, base deficit -5 mEq/L, Kleihauer-Betke test pending. Her shock index is 1.06.",
  question: "What physiologic factor is masking the severity of this patient's hemorrhagic shock, and what is the most appropriate immediate management?",
  options: [
    {
      id: "A",
      text: "Pregnancy-induced anemia is masking blood loss; administer crystalloid resuscitation and obtain CT abdomen/pelvis with shielding",
      isCorrect: false
    },
    {
      id: "B",
      text: "Increased plasma volume of pregnancy is masking hypovolemia; activate massive transfusion protocol, administer RhoGAM if Rh-negative, and prepare for emergency cesarean delivery",
      isCorrect: true
    },
    {
      id: "C",
      text: "Fetal distress is the primary concern; perform immediate cesarean section before addressing maternal hemorrhage",
      isCorrect: false
    },
    {
      id: "D",
      text: "Uterine size is limiting FAST accuracy; obtain MRI abdomen/pelvis to evaluate for intra-abdominal hemorrhage",
      isCorrect: false
    },
    {
      id: "E",
      text: "Placental abruption is causing isolated uterine bleeding; administer tocolytics and monitor for spontaneous resolution",
      isCorrect: false
    }
  ],
  explanation: "This patient has placental abruption with hemorrhagic shock that is masked by the physiologic changes of pregnancy. Pregnancy increases plasma volume by 40-50% and blood volume by 30-40%, allowing pregnant patients to lose 30-35% of blood volume before showing signs of shock—by the time hypotension develops, the fetus is already severely compromised. The clinical presentation is classic for placental abruption. Immediate management includes: (1) massive transfusion protocol activation, (2) RhoGAM administration if mother is Rh-negative, (3) emergency cesarean delivery for fetal distress and to allow definitive uterine hemorrhage control, and (4) left lateral tilt or manual leftward uterine displacement to relieve aortocaval compression. Option A is incorrect because the patient needs blood products, not crystalloid. Option C violates the principle 'save the mother, save the baby'—maternal resuscitation must occur simultaneously with preparation for delivery. Option E is dangerous—placental abruption is a life-threatening emergency. Key Teaching Points: (1) Pregnant patients can lose 1500-2000 mL of blood before showing hypotension due to increased plasma volume. (2) Fetal distress occurs before maternal decompensation and is an early sign of maternal shock. (3) Shock index >1.0 in pregnancy is highly concerning and predicts need for transfusion. (4) In pregnant trauma patients: resuscitate mother, displace uterus to left, activate MTP early, give RhoGAM if Rh-negative, and prepare for emergency delivery if fetal distress or maternal instability.",
  references: [
    "American College of Obstetricians and Gynecologists. ACOG Practice Bulletin No. 251: Trauma During Pregnancy. Obstet Gynecol. 2022;140(4):e67-e86.",
    "Jain V, et al. Guidelines for the management of a pregnant trauma patient. J Obstet Gynaecol Can. 2015;37(6):553-574.",
    "American College of Surgeons Committee on Trauma. ATLS Advanced Trauma Life Support, 10th Edition. 2018."
  ]
};
