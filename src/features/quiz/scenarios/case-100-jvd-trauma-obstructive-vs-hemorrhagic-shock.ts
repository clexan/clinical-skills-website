import { QuizScenario } from '../quizData';

export const case100: QuizScenario = {
  id: 'case-100',
  slug: 'jvd-trauma-obstructive-vs-hemorrhagic-shock-differentiation',
  title: 'Differentiating Shock in the Trauma Patient',
  category: 'Emergency',
  difficulty: 'Medium',
  vignette: `A 24-year-old man is brought to the ED after a high-speed motor vehicle collision. He was the restrained driver. On arrival, he is pale and diaphoretic. His vital signs are: heart rate 132 bpm, blood pressure 72/48 mmHg (MAP 56 mmHg), respiratory rate 28 breaths/min, and oxygen saturation 90% on room air. He has a large bruise over his right chest and right upper quadrant. He has no significant past medical history. You are performing the Primary Survey.`,
  question: 'Which physical examination finding is MOST critical in differentiating obstructive shock from hemorrhagic shock in this patient?',
  options: [
    {
      id: 'A',
      text: 'Distended neck veins (JVD)',
      isCorrect: true
    },
    {
      id: 'B',
      text: 'Presence of tachycardia',
      isCorrect: false
    },
    {
      id: 'C',
      text: 'Hypotension and narrow pulse pressure',
      isCorrect: false
    },
    {
      id: 'D',
      text: 'Altered mental status',
      isCorrect: false
    },
    {
      id: 'E',
      text: 'Delayed capillary refill',
      isCorrect: false
    }
  ],
  explanation: `
**Correct Answer: A - Distended neck veins (JVD)**

**Clinical Reasoning:**
In a trauma patient with hypotension and tachycardia, differentiating between **hemorrhagic shock** (hypovolemic) and **obstructive shock** (tension pneumothorax or cardiac tamponade) is critical for immediate management. **Jugular venous distension (JVD)** is the key differentiating physical exam finding. In **hemorrhagic shock**, neck veins are typically **flat** due to intravascular volume depletion. In **obstructive shock**, neck veins are typically **distended** because the mechanical obstruction (tension air or pericardial fluid) impairs venous return to the heart, causing backup into the systemic venous system. Note that JVD may be absent in obstructive shock if there is concurrent severe hemorrhage (hypovolemic tension pneumothorax).

**Why Others are Wrong:**
* **B, C, D, E:** These findings (tachycardia, hypotension, altered mental status, delayed capillary refill) are common to **all forms of shock** in the trauma setting and do not help differentiate the underlying etiology.
  `,
  references: [
    "American College of Surgeons. ATLS: Advanced Trauma Life Support Student Course Manual. 10th ed. 2018.",
    "Shock. In: Tintinalli JE, Ma O, Yealy DM, et al., eds. Tintinalli's Emergency Medicine: A Comprehensive Study Guide. 9th ed. McGraw-Hill; 2020."
  ]
};
