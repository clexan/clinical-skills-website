import { QuizScenario } from '../quizData';

export const case115: QuizScenario = {
  id: 'case-115',
  slug: 'delayed-epinephrine-fatality-risk-anaphylaxis-emergency',
  title: 'Delayed Epinephrine and Anaphylaxis Fatality Risk',
  category: 'Emergency',
  difficulty: 'Hard',
  vignette: `A 19-year-old college student with known tree nut allergy eats a dessert at a restaurant that she was told was nut-free. Within 15 minutes, she develops throat tightness, diffuse urticaria, and difficulty breathing. Her roommate drives her to the nearest urgent care clinic (25-minute drive) rather than calling 911. She has an epinephrine auto-injector in her purse but does not use it, hoping symptoms will resolve. Upon arrival at urgent care, she is in severe respiratory distress with stridor, diffuse wheezing, blood pressure 78/40 mmHg, and oxygen saturation 82%. Despite aggressive resuscitation including multiple doses of epinephrine, she suffers cardiac arrest and cannot be resuscitated.`,
  question: 'Which factor is MOST strongly associated with fatal anaphylaxis in this case?',
  options: [
    {
      id: 'A',
      text: 'Delayed administration of epinephrine',
      isCorrect: true
    },
    {
      id: 'B',
      text: 'Failure to administer antihistamines early',
      isCorrect: false
    },
    {
      id: 'C',
      text: 'Lack of corticosteroid administration',
      isCorrect: false
    },
    {
      id: 'D',
      text: 'Young age of the patient',
      isCorrect: false
    },
    {
      id: 'E',
      text: 'Food allergen as the trigger rather than insect venom',
      isCorrect: false
    }
  ],
  explanation: `
**Correct Answer: A - Delayed administration of epinephrine**

**Clinical Reasoning:**
**Delayed epinephrine administration is the most consistently identified risk factor for fatal anaphylaxis.** The 2024 AAAAI/ACAAI Anaphylaxis Practice Parameter states: "**Delayed epinephrine administration is associated with increased risk of death** and biphasic reactions. Fatality reviews consistently identify failure to administer epinephrine promptly as a major contributing factor."

**Why Others are Wrong:**
* **B (Antihistamines):** Antihistamines do not prevent death as they do not address airway obstruction or shock.
* **C (Corticosteroids):** These have no role in acute resuscitation and there is no evidence they prevent death from acute anaphylaxis.
* **D (Age):** While certain age groups have higher rates of fatality due to risk-taking behaviors, the primary preventable factor is the treatment delay itself.
* **E (Trigger Type):** Fatalities occur with all triggers and are most strongly linked to delayed epinephrine regardless of the cause.
  `,
  references: [
    'Shaker MS, Wallace DV, Golden DBK, et al. Anaphylaxis—A 2020 Practice Parameter Update, Systematic Review, and GRADE Analysis. J Allergy Clin Immunol. 2020;145(4):1082-1123.',
    'Cardona V, Ansotegui IJ, Ebisawa M, et al. World Allergy Organization Anaphylaxis Guidance 2020. World Allergy Organ J. 2020;13(10):100472.',
    'Pumphrey RSH. Lessons for Management of Anaphylaxis From a Study of Fatal Reactions. Clin Exp Allergy. 2000;30(8):1144-1150.'
  ]
};
