import { QuizScenario } from '../quizData';

export const case135: QuizScenario = {
  id: 'case-135',
  slug: 'hypocalcemia-chvostek-trousseau-iv-calcium',
  title: 'Recognizing Hypocalcemia: Clinical Signs and ECG Findings',
  category: 'Emergency',
  difficulty: 'Medium',
  vignette: `A 38-year-old woman presents to the ED with progressive muscle cramps, perioral tingling, and a sensation of tightness in her hands and feet over the past 2 days. She underwent Roux-en-Y gastric bypass surgery 6 months ago and has not been taking her prescribed calcium and vitamin D supplements. Vital signs are normal. On examination, tapping the facial nerve just anterior to the ear produces ipsilateral twitching of the upper lip. When a blood pressure cuff is inflated on her arm to 20 mmHg above systolic pressure for 3 minutes, she develops painful flexion of the wrist and metacarpophalangeal joints with extension of the interphalangeal joints and adduction of the thumb. ECG shows sinus rhythm at 78 bpm with QTc 520 ms. Laboratory studies reveal calcium 6.4 mg/dL, albumin 3.2 g/dL, magnesium 1.4 mg/dL, and phosphorus 5.8 mg/dL.`,
  question: 'Which combination of clinical signs is demonstrated, and what is the MOST appropriate treatment?',
  options: [
    {
      id: 'A',
      text: 'Positive Chvostek and Trousseau signs; IV calcium gluconate 1-2 g over 10-20 minutes with concurrent magnesium repletion',
      isCorrect: true
    },
    {
      id: 'B',
      text: 'Positive Chvostek and Trousseau signs; oral calcium carbonate and calcitriol are sufficient for immediate treatment',
      isCorrect: false
    },
    {
      id: 'C',
      text: 'Positive Babinski and Hoffmann signs; obtain MRI brain for upper motor neuron disease',
      isCorrect: false
    },
    {
      id: 'D',
      text: 'Positive Chvostek and Trousseau signs; IV magnesium alone will correct both abnormalities quickly enough',
      isCorrect: false
    },
    {
      id: 'E',
      text: 'Positive Chvostek and Trousseau signs; IV calcium chloride through a peripheral IV is preferred to calcium gluconate',
      isCorrect: false
    }
  ],
  explanation: `
**Correct Answer: A - Positive Chvostek and Trousseau signs; IV calcium gluconate 1-2 g over 10-20 minutes with concurrent magnesium repletion**

**Clinical Reasoning:**
This patient has symptomatic **hypocalcemia** with two classic bedside findings:
* **Chvostek sign:** facial muscle twitching after tapping the facial nerve.
* **Trousseau sign:** carpopedal spasm after inflating a blood pressure cuff.

She also has **QT prolongation**, which is the classic ECG abnormality of hypocalcemia. Because she is clearly symptomatic, she needs **IV calcium**, and **calcium gluconate** is preferred through a peripheral IV because it is less caustic than calcium chloride. Her magnesium is also low, and **concurrent magnesium repletion** is important because magnesium deficiency can impair PTH secretion and make calcium correction harder.

**Why Others Are Wrong:**
* **B (Oral therapy only):** Too slow for symptomatic hypocalcemia with neuromuscular irritability and ECG changes.
* **C (UMN signs):** The findings described are not Babinski or Hoffmann signs.
* **D (Magnesium alone):** Magnesium matters, but it will not acutely stabilize symptomatic hypocalcemia fast enough without IV calcium.
* **E (Peripheral calcium chloride preferred):** Calcium chloride is more caustic and is not the preferred peripheral formulation.
  `,
  references: [
    'Cooper MS, Gittoes NJ. Diagnosis and Management of Hypocalcaemia. BMJ. 2008;336(7656):1298-1302.',
    'Bollerslev J, Rejnmark L, Marcocci C, et al. European Society of Endocrinology Clinical Guideline: Treatment of Chronic Hypoparathyroidism in Adults. Eur J Endocrinol. 2015;173(2):G1-G20.',
    'Fong J, Khan A. Hypocalcemia: Updates in Diagnosis and Management for Primary Care. Can Fam Physician. 2012;58(2):158-162.'
  ],
  skillTested: 'Recognize classic hypocalcemia signs and choose urgent IV calcium therapy',
  linkedChapter: 'electrolytes',
  verdictOneLineSummary:
    'Tetany signs plus prolonged QT means symptomatic hypocalcemia, and that is an IV calcium problem.'
};
