import { QuizScenario } from '../quizData';

export const case104: QuizScenario = {
  id: 'case-104',
  slug: 'anaphylaxis-second-vasopressor-norepinephrine',
  title: 'Fluid-Refractory Anaphylactic Shock',
  category: 'Emergency',
  difficulty: 'Hard',
  vignette: `A 34-year-old woman with no significant past medical history developed anaphylaxis after eating shrimp at a restaurant. She has received IM epinephrine 0.5 mg x 2 doses, IV diphenhydramine 50 mg, IV methylprednisolone 125 mg, and aggressive fluid resuscitation with 4 liters of lactated Ringer's over 45 minutes. An epinephrine infusion was started at 0.1 mcg/kg/min and titrated up to 0.5 mcg/kg/min. Her urticaria and wheezing have improved significantly, but she remains hypotensive. Current vital signs are: temperature 37.0 C (98.6 F), heart rate 124 bpm, blood pressure 78/48 mmHg (MAP 58 mmHg), respiratory rate 20 breaths/min, and oxygen saturation 96% on 6L nasal cannula. She takes only oral contraceptives and has no known drug allergies. On examination, her urticaria is fading, breath sounds are clear, there is no angioedema, but she has warm flushed skin and bounding pulses. Bedside echocardiogram shows hyperdynamic left ventricular function with an estimated ejection fraction of 70% and a collapsible IVC.`,
  question: 'What is the MOST appropriate next step in management?',
  options: [
    {
      id: 'A',
      text: 'Add norepinephrine infusion as a second vasopressor while continuing epinephrine',
      isCorrect: true
    },
    {
      id: 'B',
      text: 'Increase epinephrine infusion to 2-3 mcg/kg/min for additional vasoconstriction',
      isCorrect: false
    },
    {
      id: 'C',
      text: 'Administer an additional 2-liter crystalloid bolus given the collapsible IVC',
      isCorrect: false
    },
    {
      id: 'D',
      text: 'Switch from epinephrine to vasopressin infusion for catecholamine-sparing effect',
      isCorrect: false
    },
    {
      id: 'E',
      text: 'Add dobutamine infusion to increase cardiac output and improve perfusion',
      isCorrect: false
    }
  ],
  explanation: `
**Correct Answer: A - Add norepinephrine infusion as a second vasopressor while continuing epinephrine**

**Clinical Reasoning:**
This patient has ongoing **distributive shock** despite large-volume fluids and a substantial epinephrine infusion. Her bronchospasm and urticaria are improving, her left ventricle is **hyperdynamic**, and she has warm flushed skin with bounding pulses. That profile favors persistent **vasodilatory shock**, not pump failure.

The next step is to **continue epinephrine** for its core anti-anaphylaxis effects and **add norepinephrine** for stronger alpha-mediated vasoconstriction. This is analogous to refractory vasodilatory shock management elsewhere in critical care. Additional fluid may still be considered judiciously, but the dominant problem is low systemic vascular resistance.

**Why Others Are Wrong:**
* **B (Push epinephrine much higher):** Very high epinephrine doses increase the risk of tachyarrhythmia and ischemia, with diminishing benefit compared with adding a second vasopressor.
* **C (Another 2 liters immediately):** The patient has already received substantial fluid. The clinical picture points more toward persistent vasodilation than isolated preload failure.
* **D (Switch off epinephrine):** Epinephrine should be **maintained**, because it still provides bronchodilation and mast-cell stabilization that norepinephrine and vasopressin do not.
* **E (Dobutamine):** Inotropy is not the problem in a patient with a hyperdynamic ventricle and warm vasodilatory shock.
  `,
  references: [
    'Lieberman P, Nicklas RA, Randolph C, et al. Anaphylaxis-a practice parameter update 2015. Ann Allergy Asthma Immunol. 2015;115(5):341-384.',
    'Simons FE, Ardusso LR, Bilo MB, et al. World Allergy Organization Guidelines for the Assessment and Management of Anaphylaxis. World Allergy Organ J. 2011;4(2):13-37.',
    'Jang DH, Nelson LS, Hoffman RS. Methylene blue for distributive shock: a potential new use of an old antidote. J Med Toxicol. 2013;9(3):242-249.',
    'Brown SG. Cardiovascular aspects of anaphylaxis: implications for treatment and diagnosis. Curr Opin Allergy Clin Immunol. 2005;5(4):359-364.',
    'Dewachter P, Mouton-Faivre C, Emala CW. Anaphylaxis and anesthesia: controversies and new insights. Anesthesiology. 2009;111(5):1141-1150.'
  ],
  skillTested: 'Add a second vasopressor for refractory distributive shock in anaphylaxis while continuing epinephrine',
  linkedChapter: 'anaphylaxis',
  verdictOneLineSummary:
    'If epinephrine plus fluids improve the allergy symptoms but not the shock, continue epinephrine and add norepinephrine for persistent vasodilation.'
};
