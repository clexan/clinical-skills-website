import { QuizScenario } from '../quizData';

export const case113: QuizScenario = {
  id: 'case-113',
  slug: 'anaphylaxis-without-skin-signs-recognition-emergency',
  title: 'Anaphylaxis Without Cutaneous Manifestations',
  category: 'Emergency',
  difficulty: 'Medium',
  vignette: `A 34-year-old woman with a history of asthma is eating lunch at a restaurant when she suddenly develops throat tightness, difficulty swallowing, and a hoarse voice. Within minutes, she experiences severe abdominal cramping, nausea, and vomiting. Her friend calls 911. EMS arrives to find her in moderate respiratory distress with audible stridor. Vital signs show blood pressure 118/72 mmHg, heart rate 112 bpm, respiratory rate 26/min, and oxygen saturation 91% on room air. Notably, her skin examination reveals no urticaria, flushing, or angioedema. She reports eating shrimp for the first time in several years.`,
  question: 'What is the MOST appropriate immediate intervention?',
  options: [
    {
      id: 'A',
      text: 'Intramuscular epinephrine 0.3-0.5 mg in the lateral thigh',
      isCorrect: true
    },
    {
      id: 'B',
      text: 'Diphenhydramine 50 mg IV and observe for skin manifestations before giving epinephrine',
      isCorrect: false
    },
    {
      id: 'C',
      text: 'Albuterol nebulizer for bronchospasm; epinephrine only if hypotension develops',
      isCorrect: false
    },
    {
      id: 'D',
      text: 'Methylprednisolone 125 mg IV as first-line therapy to prevent biphasic reaction',
      isCorrect: false
    },
    {
      id: 'E',
      text: 'Withhold epinephrine since urticaria is absent; this is likely food poisoning',
      isCorrect: false
    }
  ],
  explanation: `
**Correct Answer: A - Intramuscular epinephrine 0.3-0.5 mg in the lateral thigh**

**Clinical Reasoning:**
This patient has **anaphylaxis** despite the absence of skin findings. She meets diagnostic criteria with respiratory compromise (stridor, throat tightness, hypoxia) and gastrointestinal symptoms (cramping, vomiting) following a likely allergen exposure (shrimp). The 2024 AAAAI/ACAAI Joint Task Force Anaphylaxis Practice Parameter states: "**Epinephrine is the first-line treatment for anaphylaxis** and should be administered promptly... The absence of cutaneous findings should not delay treatment."

**Why Others are Wrong:**
* **B (Antihistamines):** Antihistamines are adjunctive and do not prevent airway obstruction or shock.
* **C (Albuterol):** Does not address upper airway edema or the underlying systemic reaction.
* **D (Steroids):** Have a slow onset (4-6 hours) and do not treat acute life-threatening symptoms.
* **E (Misdiagnosis):** The temporal relationship and combination of respiratory/GI symptoms strongly support anaphylaxis.
  `,
  references: [
    'Shaker MS, Wallace DV, Golden DBK, et al. Anaphylaxis—A 2020 Practice Parameter Update, Systematic Review, and GRADE Analysis. J Allergy Clin Immunol. 2020;145(4):1082-1123.',
    'Cardona V, Ansotegui IJ, Ebisawa M, et al. World Allergy Organization Anaphylaxis Guidance 2020. World Allergy Organ J. 2020;13(10):100472.',
    'Dribin TE, Schnadower D, Spergel JM, et al. Severity Grading System for Acute Allergic Reactions: A Multidisciplinary Delphi Study. J Allergy Clin Immunol. 2021;148(1):173-181.'
  ]
};
