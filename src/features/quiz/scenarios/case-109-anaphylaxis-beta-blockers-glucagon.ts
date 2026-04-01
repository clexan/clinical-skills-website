import { QuizScenario } from '../quizData';

export const case109: QuizScenario = {
  id: 'case-109',
  slug: 'anaphylaxis-beta-blockers-glucagon-treatment',
  title: 'Anaphylaxis in a Patient Taking Beta-Blockers',
  category: 'Emergency',
  difficulty: 'Hard',
  vignette: `A 68-year-old man with coronary artery disease, heart failure (EF 35%), and hypertension is undergoing CT with IV contrast when he develops diffuse urticaria, facial angioedema, severe wheezing, and hypotension (BP 74/42 mmHg). His medications include metoprolol succinate 100 mg daily, lisinopril, and furosemide. He receives IM epinephrine 0.3 mg, IV diphenhydramine, methylprednisolone, and 1 liter of normal saline. After 10 minutes, his blood pressure remains 78/46 mmHg with persistent wheezing. A second dose of IM epinephrine 0.3 mg is given with minimal improvement.`,
  question: 'Given his lack of response to epinephrine, what is the MOST appropriate next intervention?',
  options: [
    {
      id: 'A',
      text: 'Glucagon 1-5 mg IV bolus, followed by infusion if needed',
      isCorrect: true
    },
    {
      id: 'B',
      text: 'Increase epinephrine to 1 mg IM since standard doses are ineffective',
      isCorrect: false
    },
    {
      id: 'C',
      text: 'Administer atropine 1 mg IV for beta-blocker-induced bradycardia',
      isCorrect: false
    },
    {
      id: 'D',
      text: 'Withhold further epinephrine due to cardiac history; use phenylephrine instead',
      isCorrect: false
    },
    {
      id: 'E',
      text: 'Administer IV calcium gluconate to reverse beta-blocker effects',
      isCorrect: false
    }
  ],
  explanation: `
**Correct Answer: A - Glucagon 1-5 mg IV bolus, followed by infusion if needed**

**Clinical Reasoning:**
This patient has anaphylaxis refractory to epinephrine in the setting of beta-blocker therapy. Beta-blockers can blunt the response to epinephrine by blocking beta-adrenergic receptors. Glucagon activates adenylyl cyclase directly, bypassing beta-receptors, and providing positive inotropic and chronotropic effects. Glucagon 1-5 mg IV (bolus followed by infusion if needed) is the treatment of choice for beta-blocker-associated refractory anaphylaxis.

**Why Others are Wrong:**
* **B (High-dose IM Epinephrine):** Receptor blockade, not inadequate drug levels, is the issue. Higher doses may not overcome the blockade and could cause alpha-mediated hypertensive crisis.
* **C (Atropine):** Does not address the underlying pathophysiology of anaphylactic shock.
* **D (Phenylephrine):** A pure alpha-agonist that does not address bronchospasm or the systemic reaction.
* **E (Calcium):** Used for calcium channel blocker overdose, not beta-blocker-associated anaphylaxis.
  `,
  references: [
    'Shaker MS, Wallace DV, Golden DBK, et al. Anaphylaxis—A 2020 Practice Parameter Update, Systematic Review, and GRADE Analysis. J Allergy Clin Immunol. 2020;145(4):1082-1123.',
    'Cardona V, Ansotegui IJ, Ebisawa M, et al. World Allergy Organization Anaphylaxis Guidance 2020. World Allergy Organ J. 2020;13(10):100472.',
    'Thomas M, Crawford I. Best Evidence Topic Report: Glucagon Infusion in Refractory Anaphylactic Shock in Patients on Beta-Blockers. Emerg Med J. 2005;22(4):272-273.'
  ]
};
