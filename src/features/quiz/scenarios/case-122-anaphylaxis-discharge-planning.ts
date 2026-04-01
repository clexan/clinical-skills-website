import { QuizScenario } from '../quizData';

export const case122: QuizScenario = {
  id: 'case-122',
  slug: 'anaphylaxis-discharge-planning-and-education',
  title: 'Discharge Planning After Anaphylaxis',
  category: 'Emergency',
  difficulty: 'Medium',
  vignette: `A 35-year-old man is being discharged after successful treatment of anaphylaxis from a bee sting. He has no prior history of allergic reactions to insect stings. His symptoms (urticaria, wheezing, hypotension) resolved after two doses of IM epinephrine, IV fluids, antihistamines, and corticosteroids. He has been observed for 6 hours without recurrence. He asks what he should do to prevent this from happening again.`,
  question: 'Which of the following is the MOST important component of discharge planning?',
  options: [
    {
      id: 'A',
      text: 'Prescribe epinephrine auto-injectors (at least 2), provide education on use, and refer to an allergist',
      isCorrect: true
    },
    {
      id: 'B',
      text: 'Prescribe oral antihistamines to take daily for prevention; epinephrine is not needed',
      isCorrect: false
    },
    {
      id: 'C',
      text: 'Prescribe a short course of oral corticosteroids only; no epinephrine needed for first-time reactions',
      isCorrect: false
    },
    {
      id: 'D',
      text: 'Advise avoidance of bees; no medications needed if he is careful',
      isCorrect: false
    },
    {
      id: 'E',
      text: 'Prescribe one epinephrine auto-injector; two devices are excessive for most patients',
      isCorrect: false
    }
  ],
  explanation: `
**Correct Answer: A - Prescribe epinephrine auto-injectors (at least 2), provide education on use, and refer to an allergist**

**Clinical Reasoning:**
All patients who experience anaphylaxis should be discharged with prescriptions for at least two epinephrine auto-injectors, an anaphylaxis emergency action plan, and a referral to an allergist. Up to 20% of patients require a second dose, and referral is essential for identifying triggers and considering life-saving immunotherapy (especially for venom allergies).

**Why Others are Wrong:**
* **B (Daily Antihistamines):** These do not prevent or treat life-threatening anaphylaxis.
* **C (Corticosteroids Only):** Every patient with anaphylaxis needs an epinephrine prescription, regardless of whether it was their first episode.
* **D (Avoidance Only):** Complete avoidance is often impossible; patients must be prepared to treat accidental exposures.
* **E (One Device):** Guidelines recommend at least two devices because a second dose may be needed, or a single device could malfunction or be used incorrectly.
  `,
  references: [
    'Shaker MS, Wallace DV, Golden DBK, et al. Anaphylaxis—A 2020 Practice Parameter Update, Systematic Review, and GRADE Analysis. J Allergy Clin Immunol. 2020;145(4):1082-1123.',
    'Cardona V, Ansotegui IJ, Ebisawa M, et al. World Allergy Organization Anaphylaxis Guidance 2020. World Allergy Organ J. 2020;13(10):100472.',
    'Golden DBK, Demain J, Freeman T, et al. Stinging Insect Hypersensitivity: A Practice Parameter Update 2016. Ann Allergy Asthma Immunol. 2017;118(1):28-54.'
  ]
};
