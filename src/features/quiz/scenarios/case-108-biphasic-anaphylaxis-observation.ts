import { QuizScenario } from '../quizData';

export const case108: QuizScenario = {
  id: 'case-108',
  slug: 'biphasic-anaphylaxis-observation-period',
  title: 'Biphasic Anaphylaxis and Observation Period',
  category: 'Emergency',
  difficulty: 'Medium',
  vignette: `A 28-year-old woman with peanut allergy experienced anaphylaxis after accidental peanut ingestion at a restaurant. She self-administered her epinephrine auto-injector and was brought to the ED by EMS. In the ED, she received a second dose of IM epinephrine, IV diphenhydramine, and IV methylprednisolone. Her symptoms (urticaria, wheezing, throat tightness) resolved completely within 45 minutes. She now feels well, with normal vital signs and clear lungs. She asks if she can go home.`,
  question: 'What is the MOST appropriate recommendation regarding observation and discharge?',
  options: [
    {
      id: 'A',
      text: 'Observe for at least 4-6 hours after symptom resolution; longer for severe reactions or high-risk patients',
      isCorrect: true
    },
    {
      id: 'B',
      text: 'Discharge immediately since symptoms have resolved and she received corticosteroids',
      isCorrect: false
    },
    {
      id: 'C',
      text: 'Mandatory 24-hour hospital admission for all anaphylaxis patients',
      isCorrect: false
    },
    {
      id: 'D',
      text: 'Observe for 1 hour only; biphasic reactions are rare and unpredictable',
      isCorrect: false
    },
    {
      id: 'E',
      text: 'Discharge with oral corticosteroids; steroids prevent all biphasic reactions',
      isCorrect: false
    }
  ],
  explanation: `
**Correct Answer: A - Observe for at least 4-6 hours after symptom resolution; longer for severe reactions or high-risk patients**

**Clinical Reasoning:**
**Biphasic anaphylaxis** occurs when symptoms recur after initial resolution, typically within 1-72 hours (most commonly within 8-10 hours). Current guidelines recommend observing patients for at least 4-6 hours after resolution. Longer observation (up to 24 hours) should be considered for those with severe initial reactions, requirement for multiple doses of epinephrine, or a history of biphasic reactions.

**Why Others are Wrong:**
* **B (Immediate Discharge):** Symptoms can recur even after initial complete resolution.
* **C (Routine Admission):** Routine 24-hour admission is not evidence-based for all patients; the decision should be individualized.
* **D (1-hour Observation):** This is insufficient to detect the majority of biphasic reactions.
* **E (Steroid Prevention):** There is no high-quality evidence that corticosteroids prevent biphasic reactions.
  `,
  references: [
    'Shaker MS, Wallace DV, Golden DBK, et al. Anaphylaxis—A 2020 Practice Parameter Update, Systematic Review, and GRADE Analysis. J Allergy Clin Immunol. 2020;145(4):1082-1123.',
    'Cardona V, Ansotegui IJ, Ebisawa M, et al. World Allergy Organization Anaphylaxis Guidance 2020. World Allergy Organ J. 2020;13(10):100472.',
    'Grunau BE, Li J, Yi TW, et al. Incidence of Clinically Important Biphasic Reactions in Emergency Department Patients With Allergic Reactions or Anaphylaxis. Ann Emerg Med. 2014;63(6):736-744.'
  ]
};
