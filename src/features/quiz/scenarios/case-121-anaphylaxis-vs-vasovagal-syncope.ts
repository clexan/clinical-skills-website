import { QuizScenario } from '../quizData';

export const case121: QuizScenario = {
  id: 'case-121',
  slug: 'anaphylaxis-vs-vasovagal-syncope-emergency-diagnosis',
  title: 'Differentiating Anaphylaxis from Vasovagal Syncope',
  category: 'Emergency',
  difficulty: 'Medium',
  vignette: `A 22-year-old woman receives her first dose of an intramuscular vaccine. Within 2 minutes of injection, she becomes pale, diaphoretic, and lightheaded, then briefly loses consciousness. She is lowered to the floor and regains consciousness within 30 seconds. Vital signs immediately after the event show blood pressure 88/54 mmHg and heart rate 48 bpm. Within 5 minutes, her blood pressure normalizes to 118/72 mmHg and heart rate increases to 72 bpm. She has no urticaria, angioedema, pruritus, wheezing, or respiratory distress. She feels "back to normal" and is embarrassed about fainting.`,
  question: 'What is the MOST likely diagnosis and appropriate management?',
  options: [
    {
      id: 'A',
      text: 'Vasovagal syncope; supportive care, observation, and reassurance',
      isCorrect: true
    },
    {
      id: 'B',
      text: 'Anaphylaxis; administer epinephrine 0.5 mg IM immediately',
      isCorrect: false
    },
    {
      id: 'C',
      text: 'Anaphylaxis; the hypotension confirms the diagnosis regardless of other symptoms',
      isCorrect: false
    },
    {
      id: 'D',
      text: 'Vasovagal syncope; but give epinephrine prophylactically to prevent anaphylaxis',
      isCorrect: false
    },
    {
      id: 'E',
      text: 'Cardiac arrhythmia; obtain immediate 12-lead ECG and cardiology consultation',
      isCorrect: false
    }
  ],
  explanation: `
**Correct Answer: A - Vasovagal syncope; supportive care, observation, and reassurance**

**Clinical Reasoning:**
This patient has classic vasovagal syncope (VVS), not anaphylaxis. Key distinguishing features include: **bradycardia** (vs. tachycardia in anaphylaxis), **pallor** (vs. flushing/urticaria), **rapid and complete recovery** without treatment, and **absence of respiratory or GI symptoms**. Vasovagal reactions are commonly triggered by noxious stimuli like injections.

**Why Others are Wrong:**
* **B (Anaphylaxis):** She does not meet criteria for anaphylaxis (no skin, respiratory, or GI signs).
* **C (Hypotension):** Hypotension can occur in both, but the context (bradycardia, stimulus, recovery) confirms VVS.
* **D (Prophylactic Epinephrine):** Epinephrine is not indicated for VVS and may cause unnecessary side effects.
* **E (Arrhythmia):** The presentation is typical for VVS triggered by an injection; while syncope can be arrhythmic, the clinical scenario strongly points to a vasovagal event.
  `,
  references: [
    'Shaker MS, Wallace DV, Golden DBK, et al. Anaphylaxis—A 2020 Practice Parameter Update, Systematic Review, and GRADE Analysis. J Allergy Clin Immunol. 2020;145(4):1082-1123.',
    'Cardona V, Ansotegui IJ, Ebisawa M, et al. World Allergy Organization Anaphylaxis Guidance 2020. World Allergy Organ J. 2020;13(10):100472.',
    'Sicherer SH, Simons FER. Epinephrine for First-Aid Management of Anaphylaxis. Pediatrics. 2017;139(3):e20164006.'
  ]
};
