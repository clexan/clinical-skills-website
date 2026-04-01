import { QuizScenario } from '../quizData';

export const case118: QuizScenario = {
  id: 'case-118',
  slug: 'refractory-anaphylaxis-iv-epinephrine-treatment',
  title: 'Refractory Anaphylaxis Requiring IV Epinephrine',
  category: 'Emergency',
  difficulty: 'Hard',
  vignette: `A 45-year-old man with a history of asthma develops anaphylaxis after a bee sting. He has received three doses of IM epinephrine 0.5 mg (at 0, 5, and 15 minutes), IV diphenhydramine, methylprednisolone, 2 liters of crystalloid, and continuous albuterol nebulization. Despite these interventions, he remains hypotensive with blood pressure 72/40 mmHg, heart rate 134 bpm, and has persistent severe bronchospasm with oxygen saturation 86% on high-flow oxygen. He is becoming increasingly obtunded.`,
  question: 'What is the MOST appropriate next step in management?',
  options: [
    {
      id: 'A',
      text: 'Start IV epinephrine infusion at 1-10 mcg/min and titrate to clinical response',
      isCorrect: true
    },
    {
      id: 'B',
      text: 'Administer a fourth dose of IM epinephrine 0.5 mg and continue observation',
      isCorrect: false
    },
    {
      id: 'C',
      text: 'Switch to vasopressin infusion as epinephrine has failed',
      isCorrect: false
    },
    {
      id: 'D',
      text: 'Administer IV epinephrine 1 mg bolus (cardiac arrest dose)',
      isCorrect: false
    },
    {
      id: 'E',
      text: 'Administer glucagon 1-5 mg IV for catecholamine-resistant anaphylaxis',
      isCorrect: false
    }
  ],
  explanation: `
**Correct Answer: A - Start IV epinephrine infusion at 1-10 mcg/min and titrate to clinical response**

**Clinical Reasoning:**
This patient has **refractory anaphylaxis**—defined as anaphylaxis that does not respond to two or more appropriate doses of IM epinephrine. In severe or refractory cases, particularly with cardiovascular collapse, a continuous IV epinephrine infusion (starting at 1-4 mcg/min and titrating up to 10 mcg/min) is indicated. This provides more reliable drug delivery and allows for careful titration compared to bolus dosing.

**Why Others are Wrong:**
* **B (More IM Epinephrine):** Failure to respond to 2-3 IM doses should prompt transition to an IV infusion, as peripheral vasoconstriction from shock may impair further IM absorption.
* **C (Vasopressin):** Epinephrine remains the first-line agent because it addresses all mechanisms of anaphylaxis. Vasopressin is considered only as an adjunct in catecholamine-resistant shock.
* **D (IV Push 1 mg):** Bolus doses of 1 mg are reserved for cardiac arrest. Using them in a patient with a pulse risks fatal arrhythmias and myocardial infarction.
* **E (Glucagon):** Glucagon is specifically indicated for patients on beta-blockers who do not respond to epinephrine. There is no mention of beta-blocker use here.
  `,
  references: [
    'Shaker MS, Wallace DV, Golden DBK, et al. Anaphylaxis—A 2020 Practice Parameter Update, Systematic Review, and GRADE Analysis. J Allergy Clin Immunol. 2020;145(4):1082-1123.',
    'Cardona V, Ansotegui IJ, Ebisawa M, et al. World Allergy Organization Anaphylaxis Guidance 2020. World Allergy Organ J. 2020;13(10):100472.',
    'Lieberman P, Nicklas RA, Randolph C, et al. Anaphylaxis—A Practice Parameter Update 2015. Ann Allergy Asthma Immunol. 2015;115(5):341-384.'
  ]
};
