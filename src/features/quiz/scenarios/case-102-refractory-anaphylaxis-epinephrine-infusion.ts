import { QuizScenario } from '../quizData';

export const case102: QuizScenario = {
  id: 'case-102',
  slug: 'refractory-anaphylaxis-epinephrine-infusion',
  title: 'Refractory Anaphylaxis Requiring IV Epinephrine',
  category: 'Emergency',
  difficulty: 'Hard',
  vignette: `A 45-year-old woman developed anaphylaxis after receiving IV ceftriaxone for community-acquired pneumonia. She initially presented with diffuse urticaria, angioedema, wheezing, and hypotension. She has received three doses of intramuscular epinephrine 0.5 mg in the anterolateral thigh at 5-minute intervals over the past 15 minutes, along with IV diphenhydramine 50 mg, methylprednisolone 125 mg, and 2 liters of normal saline. Despite these interventions, her vital signs remain: temperature 37.2 C (99.0 F), heart rate 138 bpm, blood pressure 72/44 mmHg (MAP 53 mmHg), respiratory rate 28 breaths/min, and oxygen saturation 89% on 15L non-rebreather mask. She has a history of asthma and hypertension, takes albuterol and amlodipine, and has no previously known drug allergies. On examination, she has persistent diffuse wheezing, tongue swelling, and mottled extremities with delayed capillary refill.`,
  question: 'What is the MOST appropriate next step in management?',
  options: [
    {
      id: 'A',
      text: 'Initiate IV epinephrine infusion starting at 0.1-0.5 mcg/kg/min and titrate to blood pressure and clinical response',
      isCorrect: true
    },
    {
      id: 'B',
      text: 'Administer a fourth dose of IM epinephrine 0.5 mg and continue monitoring for response',
      isCorrect: false
    },
    {
      id: 'C',
      text: 'Switch to IV epinephrine bolus 1 mg (1:10,000) for more rapid effect',
      isCorrect: false
    },
    {
      id: 'D',
      text: 'Start norepinephrine infusion as the first-line vasopressor for anaphylactic shock',
      isCorrect: false
    },
    {
      id: 'E',
      text: 'Administer IV vasopressin 20 units bolus for catecholamine-resistant shock',
      isCorrect: false
    }
  ],
  explanation: `
**Correct Answer: A - Initiate IV epinephrine infusion starting at 0.1-0.5 mcg/kg/min and titrate to blood pressure and clinical response**

**Clinical Reasoning:**
This patient has **refractory anaphylaxis** with ongoing shock and airway involvement despite repeated IM epinephrine, adjunctive medications, and fluid resuscitation. After **2-3 appropriate IM epinephrine doses** without adequate response, the correct escalation is **continuous IV epinephrine infusion**. In severe shock, peripheral perfusion is impaired, so IM absorption may be unreliable. IV infusion allows rapid titration to effect while preserving the unique benefits of epinephrine in anaphylaxis.

Epinephrine remains the **first-line drug even in refractory disease** because it treats all major pathophysiologic components of anaphylaxis: alpha-1 mediated vasoconstriction, beta-1 inotropy/chronotropy, and beta-2 bronchodilation plus reduced mast-cell mediator release. Airway management and additional fluids should continue in parallel, but the next pharmacologic step is an epinephrine infusion, not a switch to another primary vasopressor.

**Why Others Are Wrong:**
* **B (Fourth IM dose):** More IM epinephrine may delay appropriate escalation when three properly dosed injections have already failed.
* **C (1 mg IV bolus):** This is the **cardiac arrest dose** and is dangerous in a patient with a pulse. If IV push epinephrine is used at all, it must be in **small microgram boluses**, not 1 mg.
* **D (Norepinephrine first-line):** Norepinephrine may be added later, but it does **not** replace epinephrine because it lacks the same bronchodilatory and mast-cell stabilizing effects.
* **E (Vasopressin 20-unit bolus):** This is not standard early therapy for refractory anaphylaxis and the proposed bolus is excessive.
  `,
  references: [
    'Lieberman P, Nicklas RA, Randolph C, et al. Anaphylaxis-a practice parameter update 2015. Ann Allergy Asthma Immunol. 2015;115(5):341-384.',
    'Simons FE, Ardusso LR, Bilo MB, et al. World Allergy Organization Guidelines for the Assessment and Management of Anaphylaxis. World Allergy Organ J. 2011;4(2):13-37.',
    'Campbell RL, Li JT, Nicklas RA, et al. Emergency department diagnosis and treatment of anaphylaxis: a practice parameter. Ann Allergy Asthma Immunol. 2014;113(6):599-608.',
    'Brown SG, Blackman KE, Stenlake V, et al. Insect sting anaphylaxis; prospective evaluation of treatment with intravenous adrenaline and volume resuscitation. Emerg Med J. 2004;21(2):149-154.',
    'Muraro A, Roberts G, Worm M, et al. Anaphylaxis: guidelines from the European Academy of Allergy and Clinical Immunology. Allergy. 2014;69(8):1026-1045.'
  ],
  skillTested: 'Escalate from repeated IM epinephrine to IV epinephrine infusion in refractory anaphylaxis',
  linkedChapter: 'anaphylaxis',
  verdictOneLineSummary:
    'Persistent anaphylactic shock after repeated IM epinephrine requires IV epinephrine infusion, not cardiac-arrest dosing or vasopressor substitution.'
};
