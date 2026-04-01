import { QuizScenario } from '../quizData';

export const case078: QuizScenario = {
  id: 'case-078',
  slug: 'occult-sepsis-elderly-atypical-presentation',
  title: 'Occult Sepsis in the Elderly: Atypical Presentation',
  category: 'Emergency',
  difficulty: 'Hard',
  vignette: `An 82-year-old man is brought to the ED by his daughter for "not acting right" over the past day. She reports he has been more confused than usual and has had several falls. He denies fever, chest pain, or shortness of breath. His vital signs are: temperature 36.4°C (97.5°F), heart rate 102 bpm, blood pressure 108/68 mmHg, respiratory rate 22 breaths/min, and oxygen saturation 94% on room air. He has a history of dementia, atrial fibrillation, and benign prostatic hyperplasia. His medications include donepezil, apixaban, and tamsulosin. He has no known allergies. On examination, he is lethargic but arousable, with dry mucous membranes. His abdomen is soft with mild suprapubic tenderness. Urinalysis shows 50-100 WBCs, positive nitrites, and moderate bacteria. Initial lactate is 4.2 mmol/L.`,
  question: 'Which statement BEST describes the management approach for this patient?',
  options: [
    {
      id: 'A',
      text: 'This patient has sepsis despite the absence of fever; initiate the 1-hour sepsis bundle immediately',
      isCorrect: true
    },
    {
      id: 'B',
      text: 'The normal temperature excludes sepsis; treat as uncomplicated urinary tract infection with oral antibiotics',
      isCorrect: false
    },
    {
      id: 'C',
      text: 'The elevated lactate is likely due to dehydration; give IV fluids and recheck lactate before considering sepsis',
      isCorrect: false
    },
    {
      id: 'D',
      text: 'Obtain blood cultures but defer antibiotics until fever develops or lactate exceeds 5 mmol/L',
      isCorrect: false
    },
    {
      id: 'E',
      text: 'The altered mental status is attributable to dementia; no urgent intervention is needed',
      isCorrect: false
    }
  ],
  explanation: `
**Correct Answer: A - This patient has sepsis despite the absence of fever; initiate the 1-hour sepsis bundle immediately**

**Clinical Reasoning:**
This case illustrates **"occult sepsis"** in an elderly patient with an atypical presentation. The patient meets **Sepsis-3 criteria**: suspected infection (urinalysis findings) plus acute organ dysfunction (altered mental status representing acute brain dysfunction, tachycardia, tachypnea, and elevated lactate ≥2 mmol/L). Elderly patients frequently present with sepsis **without fever**—up to 30% of geriatric sepsis patients are afebrile or hypothermic. The absence of fever should never delay sepsis recognition or treatment. The lactate of 4.2 mmol/L is significantly elevated and, combined with infection and altered mental status, indicates septic shock even without overt hypotension. The 1-hour bundle should be initiated immediately: measure lactate (done), obtain blood cultures, administer broad-spectrum antibiotics, give 30 mL/kg crystalloid bolus (approximately 2-2.5 L for this patient), and reassess. Delayed recognition of sepsis in elderly patients with atypical presentations is a major contributor to mortality.

**Why Others are Wrong:**
* **B (Normal temperature excludes sepsis):** Fever is not required for sepsis diagnosis. Elderly, immunocompromised, and critically ill patients often lack febrile responses. Sepsis is defined by infection plus organ dysfunction, not fever.
* **C (Lactate due to dehydration alone):** While dehydration can contribute to lactate elevation, a lactate of 4.2 mmol/L in the setting of suspected infection and altered mental status represents sepsis until proven otherwise. Waiting to "see if it improves" delays critical treatment.
* **D (Defer antibiotics):** Antibiotics should never be deferred in suspected sepsis. The 1-hour bundle applies regardless of fever presence or specific lactate threshold above 2 mmol/L.
* **E (Attribute to dementia):** Acute changes in mental status in patients with baseline dementia should prompt evaluation for acute illness, particularly infection. This represents acute organ dysfunction and should not be dismissed.
  `,
  references: [
    'Singer M, Deutschman CS, Seymour CW, et al. The Third International Consensus Definitions for Sepsis and Septic Shock (Sepsis-3). JAMA. 2016;315(8):801-810.',
    'Gavazzi G, Krause KH. Ageing and infection. Lancet Infect Dis. 2002;2(11):659-666.',
    'Nasa P, Juneja D, Singh O. Severe sepsis and septic shock in the elderly: An overview. World J Crit Care Med. 2012;1(1):23-30.',
    'Evans L, Rhodes A, Alhazzani W, et al. Surviving Sepsis Campaign: International Guidelines for Management of Sepsis and Septic Shock 2021. Crit Care Med. 2021;49(11):e1063-e1143.'
  ]
};
