import { QuizScenario } from '../quizData';

export const case117: QuizScenario = {
  id: 'case-117',
  slug: 'anaphylaxis-diagnostic-criteria-normal-bp-emergency',
  title: 'Diagnosing Anaphylaxis with Normal Blood Pressure',
  category: 'Emergency',
  difficulty: 'Medium',
  vignette: `A 42-year-old woman receives her first dose of IV amoxicillin-clavulanate for a skin infection. Within 5 minutes, she develops diffuse pruritus, flushing, and urticaria over her trunk and extremities. She then reports "feeling like something is stuck in her throat" and develops a dry cough. Vital signs show blood pressure 124/78 mmHg, heart rate 102 bpm, respiratory rate 22/min, and oxygen saturation 96% on room air. Lung examination reveals mild diffuse wheezing. She has no abdominal pain, nausea, or vomiting.`,
  question: 'Does this patient meet diagnostic criteria for anaphylaxis, and what is the appropriate management?',
  options: [
    {
      id: 'A',
      text: 'Yes, anaphylaxis (skin + respiratory involvement); administer epinephrine 0.3-0.5 mg IM immediately',
      isCorrect: true
    },
    {
      id: 'B',
      text: 'No, this is an allergic reaction but not anaphylaxis since blood pressure is normal; give antihistamines only',
      isCorrect: false
    },
    {
      id: 'C',
      text: 'No, anaphylaxis requires involvement of three or more organ systems; observe and give diphenhydramine',
      isCorrect: false
    },
    {
      id: 'D',
      text: 'Possible anaphylaxis; give diphenhydramine first and reserve epinephrine if symptoms worsen',
      isCorrect: false
    },
    {
      id: 'E',
      text: 'Yes, anaphylaxis; but epinephrine is contraindicated since blood pressure is elevated',
      isCorrect: false
    }
  ],
  explanation: `
**Correct Answer: A - Yes, anaphylaxis (skin + respiratory involvement); administer epinephrine 0.3-0.5 mg IM immediately**

**Clinical Reasoning:**
This patient meets **diagnostic criteria for anaphylaxis** and requires immediate epinephrine. The 2024 AAAAI/ACAAI Anaphylaxis Practice Parameter defines anaphylaxis by acute onset of illness with involvement of skin/mucosal tissue AND at least one of: (a) respiratory compromise, (b) hypotension or end-organ dysfunction, or (c) severe gastrointestinal symptoms. This patient has **skin involvement** (urticaria, flushing) AND **respiratory compromise** (throat tightness, wheezing). **Hypotension is not required for the diagnosis**; it is often a late finding.

**Why Others are Wrong:**
* **B (Normal BP):** Hypotension is a sign of decompensation. Waiting for it to develop delays life-saving treatment.
* **C (Three systems):** Guidelines require two or more organ systems after likely allergen exposure.
* **D (Delaying Epinephrine):** Antihistamines should not be given before or instead of epinephrine in anaphylaxis.
* **E (Contraindications):** There are no absolute contraindications to epinephrine in anaphylaxis. A BP of 124/78 is normal.
  `,
  references: [
    'Shaker MS, Wallace DV, Golden DBK, et al. Anaphylaxis—A 2020 Practice Parameter Update, Systematic Review, and GRADE Analysis. J Allergy Clin Immunol. 2020;145(4):1082-1123.',
    'Cardona V, Ansotegui IJ, Ebisawa M, et al. World Allergy Organization Anaphylaxis Guidance 2020. World Allergy Organ J. 2020;13(10):100472.',
    'Sampson HA, Muñoz-Furlong A, Campbell RL, et al. Second Symposium on the Definition and Management of Anaphylaxis: Summary Report. J Allergy Clin Immunol. 2006;117(2):391-397.'
  ]
};
