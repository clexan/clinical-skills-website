import { QuizScenario } from '../quizData';

export const case106: QuizScenario = {
  id: 'case-106',
  slug: 'post-epinephrine-tachycardia-observation',
  title: 'Tachycardia After Successful Anaphylaxis Treatment',
  category: 'Emergency',
  difficulty: 'Medium',
  vignette: `A 29-year-old woman was treated for anaphylaxis after a bee sting 45 minutes ago. She received IM epinephrine 0.3 mg x 2 doses 5 minutes apart, IV diphenhydramine 50 mg, IV methylprednisolone 125 mg, and 1 liter of normal saline. Her initial presentation included diffuse urticaria, lip swelling, wheezing, and hypotension (BP 82/50 mmHg). Her symptoms have significantly improved: urticaria is resolving, lip swelling is decreased, lungs are clear, and she feels much better. However, she is now complaining of palpitations and feeling jittery. Her current vital signs are: temperature 37.0 C (98.6 F), heart rate 118 bpm, blood pressure 138/82 mmHg (MAP 101 mmHg), respiratory rate 16 breaths/min, and oxygen saturation 99% on room air. She has a history of anxiety disorder and takes sertraline. On examination, she is anxious-appearing with a fine tremor in her hands, warm dry skin, and a regular tachycardia without murmurs. ECG shows sinus tachycardia at 118 bpm with no ST changes or arrhythmias.`,
  question: 'What is the MOST appropriate interpretation and management of this patient\'s tachycardia?',
  options: [
    {
      id: 'A',
      text: 'The tachycardia is likely epinephrine-induced and expected; continue observation with cardiac monitoring for 4-6 hours',
      isCorrect: true
    },
    {
      id: 'B',
      text: 'The tachycardia indicates ongoing anaphylaxis; administer a third dose of IM epinephrine',
      isCorrect: false
    },
    {
      id: 'C',
      text: 'Administer IV metoprolol 5 mg to control the symptomatic tachycardia',
      isCorrect: false
    },
    {
      id: 'D',
      text: 'The tachycardia suggests epinephrine toxicity; administer IV phentolamine',
      isCorrect: false
    },
    {
      id: 'E',
      text: 'Obtain troponin and cardiology consultation for possible stress cardiomyopathy',
      isCorrect: false
    }
  ],
  explanation: `
**Correct Answer: A - The tachycardia is likely epinephrine-induced and expected; continue observation with cardiac monitoring for 4-6 hours**

**Clinical Reasoning:**
This patient has **improving anaphylaxis** with expected **adrenergic side effects** from epinephrine: palpitations, tremor, anxiety, and sinus tachycardia. The key is the overall trajectory. Her blood pressure has normalized, wheezing has resolved, lip swelling is improving, oxygenation is normal, and the ECG shows uncomplicated sinus tachycardia.

The right response is **observation and reassurance**, not reflexive treatment of the heart rate. Patients treated for anaphylaxis should remain under observation to watch for **biphasic recurrence**, and this patient still needs that monitoring window.

**Why Others Are Wrong:**
* **B (More epinephrine):** Her allergy symptoms are improving. Treating epinephrine side effects with more epinephrine is the wrong signal interpretation.
* **C (IV metoprolol):** Beta-blockade is undesirable during the post-anaphylaxis observation period because it could worsen recurrent bronchospasm or make repeat epinephrine less effective if symptoms recur.
* **D (Phentolamine):** Phentolamine is used for severe alpha-mediated complications such as extravasation injury or dangerous hypertensive crisis, not routine sinus tachycardia with stable hemodynamics.
* **E (Troponin/cardiology):** Without chest pain, ischemic ECG changes, or instability, routine cardiac workup for simple post-epinephrine sinus tachycardia is not indicated.
  `,
  references: [
    'Lieberman P, Nicklas RA, Randolph C, et al. Anaphylaxis-a practice parameter update 2015. Ann Allergy Asthma Immunol. 2015;115(5):341-384.',
    'Campbell RL, Li JT, Nicklas RA, et al. Emergency department diagnosis and treatment of anaphylaxis: a practice parameter. Ann Allergy Asthma Immunol. 2014;113(6):599-608.',
    'Simons FE, Ardusso LR, Bilo MB, et al. World Allergy Organization Guidelines for the Assessment and Management of Anaphylaxis. World Allergy Organ J. 2011;4(2):13-37.',
    'Lee S, Bellolio MF, Hess EP, et al. Time of onset and predictors of biphasic anaphylactic reactions: a systematic review and meta-analysis. J Allergy Clin Immunol Pract. 2015;3(3):408-416.',
    'Grunau BE, Li J, Yi TW, et al. Incidence of clinically important biphasic reactions in emergency department patients with allergic reactions or anaphylaxis. Ann Emerg Med. 2014;63(6):736-744.'
  ],
  skillTested: 'Distinguish expected post-epinephrine sinus tachycardia from ongoing anaphylaxis',
  linkedChapter: 'anaphylaxis',
  verdictOneLineSummary:
    'Improving anaphylaxis plus sinus tachycardia, tremor, and jitteriness after treatment usually means adrenergic side effects, not treatment failure.'
};
