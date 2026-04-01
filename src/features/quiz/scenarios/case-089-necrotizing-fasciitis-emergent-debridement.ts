import { QuizScenario } from '../quizData';

export const case089: QuizScenario = {
  id: 'case-089',
  slug: 'necrotizing-fasciitis-emergent-surgical-debridement',
  title: 'Differentiating Necrotizing Fasciitis from Cellulitis',
  category: 'Emergency',
  difficulty: 'Hard',
  vignette: `A 56-year-old man with poorly controlled type 2 diabetes (HbA1c 10.2%) presents with rapidly progressive right lower extremity pain and swelling for 24 hours following a minor abrasion. He describes the pain as "out of proportion" to the visible findings. Vital signs show blood pressure 92/58 mmHg, heart rate 126 bpm, temperature 39.4°C, and respiratory rate 26/min. Examination reveals tense edema of the right calf extending to the thigh, dusky discoloration with scattered hemorrhagic bullae, and crepitus on palpation. The patient reports decreased sensation over the affected area. Laboratory studies show WBC 26,200/µL, sodium 131 mEq/L, creatinine 2.6 mg/dL, glucose 342 mg/dL, and lactate 5.8 mmol/L.`,
  question: 'What is the MOST critical next step in management?',
  options: [
    {
      id: 'A',
      text: 'Emergent surgical exploration and debridement without waiting for imaging confirmation',
      isCorrect: true
    },
    {
      id: 'B',
      text: 'MRI of the lower extremity to confirm fascial involvement before surgery',
      isCorrect: false
    },
    {
      id: 'C',
      text: 'CT scan with contrast to evaluate for gas in the soft tissues',
      isCorrect: false
    },
    {
      id: 'D',
      text: 'Bedside needle aspiration and Gram stain to guide antibiotic selection',
      isCorrect: false
    },
    {
      id: 'E',
      text: 'IV antibiotics and close observation with serial examinations every 6 hours',
      isCorrect: false
    }
  ],
  explanation: `
**Correct Answer: A - Emergent surgical exploration and debridement without waiting for imaging confirmation**

**Clinical Reasoning:**
This patient has **classic clinical features of necrotizing fasciitis (NF)**: pain out of proportion to examination, rapidly progressive infection, hemorrhagic bullae, crepitus, skin anesthesia, and systemic toxicity with septic shock. The 2014 IDSA Guidelines for Skin and Soft Tissue Infections give a **Strong Recommendation** that "**surgical exploration should not be delayed** when there is clinical suspicion for necrotizing fasciitis" (Strong, Low).

The 2014 IDSA Guidelines state: "Distinguishing necrotizing fasciitis from severe cellulitis is difficult... **The most important diagnostic feature is the presence of pain out of proportion to the physical findings**... Surgical exploration is the most accurate way to diagnose necrotizing fasciitis and should not be delayed while awaiting imaging studies."

A 2024 JAMA Surgery systematic review confirmed that "**each hour of delay in surgical debridement was associated with increased mortality** in patients with necrotizing soft tissue infections. Early surgical intervention (within 6 hours of presentation) was associated with significantly improved survival."

The clinical findings in this patient—**crepitus** (indicating gas-forming organisms), **hemorrhagic bullae** (indicating dermal vessel thrombosis), **skin anesthesia** (indicating cutaneous nerve destruction), and **pain out of proportion**—are highly specific for necrotizing fasciitis and mandate immediate surgical exploration.

**Why Others are Wrong:**
* **B (MRI to confirm fascial involvement):** While MRI has high sensitivity for detecting fascial edema, **imaging should not delay surgery** when clinical suspicion is high. The 2014 IDSA Guidelines state that "imaging studies may be helpful but should not delay surgical intervention when clinical suspicion is high." MRI requires time to obtain and interpret, and false negatives can occur early in the disease course. This patient has multiple clinical features diagnostic of NF; waiting for MRI would delay life-saving surgery.
* **C (CT scan to evaluate for gas):** CT can detect subcutaneous gas, but **absence of gas does not exclude necrotizing fasciitis**. Many cases of NF (particularly Group A streptococcal infections) do not produce gas. The 2014 IDSA Guidelines note that "the presence of gas in the soft tissues is highly suggestive but is present in only a minority of cases." This patient already has clinical crepitus; CT would not change management and would delay surgery.
* **D (Needle aspiration and Gram stain):** While tissue cultures are important for guiding antibiotic therapy, **bedside aspiration should not delay surgical exploration**. The 2014 IDSA Guidelines recommend obtaining cultures intraoperatively during debridement, not as a prerequisite to surgery. Gram stain results would not change the immediate need for surgical debridement in this patient with obvious clinical NF.
* **E (IV antibiotics and serial examinations):** This approach is appropriate for **uncomplicated cellulitis**, not necrotizing fasciitis. The 2014 IDSA Guidelines emphasize that "necrotizing fasciitis is a surgical emergency" and that "antibiotics alone are insufficient." Serial observation would allow disease progression, increased tissue loss, and higher mortality. The mortality rate for NF increases significantly with each hour of delayed debridement.
  `,
  references: [
    'Stevens DL, Bisno AL, Chambers HF, et al. Practice Guidelines for the Diagnosis and Management of Skin and Soft Tissue Infections: 2014 Update by the IDSA. Clin Infect Dis. 2014;59(2):e10-52.',
    'Nawijn F, Smeeing DPJ, Houwert RM, et al. Time Is of the Essence When Treating Necrotizing Soft Tissue Infections: A Systematic Review and Meta-Analysis. World J Emerg Surg. 2020;15:4.',
    'Bonne SL, Kadri SS. Evaluation and Management of Necrotizing Soft Tissue Infections. Infect Dis Clin North Am. 2017;31(3):497-511.'
  ]
};
