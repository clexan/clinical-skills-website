import { QuizScenario } from '../quizData';

export const case114: QuizScenario = {
  id: 'case-114',
  slug: 'epinephrine-dosing-route-anaphylaxis-management',
  title: 'Epinephrine Dosing and Route in Anaphylaxis',
  category: 'Emergency',
  difficulty: 'Medium',
  vignette: `A 28-year-old man with known peanut allergy accidentally ingests a cookie containing peanut butter at a party. Within 10 minutes, he develops diffuse urticaria, facial angioedema, and wheezing. He used his epinephrine auto-injector (0.3 mg) in his thigh before EMS arrival. Upon arrival to the emergency department, his symptoms have partially improved but he still has significant wheezing and lip swelling. Vital signs show blood pressure 102/68 mmHg, heart rate 118 bpm, respiratory rate 24/min, and oxygen saturation 94% on room air. The medical student asks about the appropriate next dose and route of epinephrine if symptoms worsen.`,
  question: 'If this patient requires a repeat dose of epinephrine, what is the MOST appropriate dosing and route?',
  options: [
    {
      id: 'A',
      text: 'Epinephrine 0.3-0.5 mg (1:1000) IM in the lateral thigh; may repeat every 5-15 minutes as needed',
      isCorrect: true
    },
    {
      id: 'B',
      text: 'Epinephrine 0.3 mg (1:1000) subcutaneously in the deltoid for slower, sustained absorption',
      isCorrect: false
    },
    {
      id: 'C',
      text: 'Epinephrine 1 mg (1:10,000) IV push for more rapid onset of action',
      isCorrect: false
    },
    {
      id: 'D',
      text: 'Epinephrine 0.1 mg (1:1000) IM; reduce dose since he already received one injection',
      isCorrect: false
    },
    {
      id: 'E',
      text: 'No additional epinephrine; switch to IV diphenhydramine and steroids only',
      isCorrect: false
    }
  ],
  explanation: `
**Correct Answer: A - Epinephrine 0.3-0.5 mg (1:1000) IM in the lateral thigh; may repeat every 5-15 minutes as needed**

**Clinical Reasoning:**
The 2024 AAAAI/ACAAI Anaphylaxis Practice Parameter recommends: "**Epinephrine 0.3-0.5 mg (1:1000 or 1 mg/mL) should be injected intramuscularly in the mid-outer thigh**... Doses may be **repeated every 5-15 minutes** as needed based on clinical response."

**Why Others are Wrong:**
* **B (Subcutaneous/Deltoid):** IM injection in the thigh provides more rapid and higher peak plasma concentrations than subcutaneous or deltoid injection.
* **C (IV Push 1 mg):** IV bolus epinephrine (1 mg) is reserved for cardiac arrest. It carries a high risk of fatal arrhythmias and hypertensive crisis in patients with a pulse.
* **D (Dose Reduction):** There is no indication to reduce the dose; the standard 0.3-0.5 mg should be used for subsequent doses.
* **E (Switching to Adjuncts):** Antihistamines and steroids do not treat bronchospasm or airway edema and should never replace epinephrine.
  `,
  references: [
    'Shaker MS, Wallace DV, Golden DBK, et al. Anaphylaxis—A 2020 Practice Parameter Update, Systematic Review, and GRADE Analysis. J Allergy Clin Immunol. 2020;145(4):1082-1123.',
    'Cardona V, Ansotegui IJ, Ebisawa M, et al. World Allergy Organization Anaphylaxis Guidance 2020. World Allergy Organ J. 2020;13(10):100472.',
    'Simons FER, Gu X, Simons KJ. Epinephrine Absorption in Adults: Intramuscular Versus Subcutaneous Injection. J Allergy Clin Immunol. 2001;108(5):871-873.'
  ]
};
