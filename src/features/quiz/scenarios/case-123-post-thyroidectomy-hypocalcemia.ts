import { QuizScenario } from '../quizData';

export const case123: QuizScenario = {
  id: 'case-123',
  slug: 'post-thyroidectomy-hypocalcemia-calcitriol',
  title: 'Acute Hypoparathyroidism After Total Thyroidectomy',
  category: 'Emergency',
  difficulty: 'Hard',
  vignette: `A 44-year-old woman is 18 hours post-total thyroidectomy with central neck dissection for papillary thyroid cancer. She reports numbness around her mouth and tingling in her fingertips. Over the next 30 minutes, she develops calf cramps and a sensation that her hands are locking up. Vital signs show blood pressure 148/92 mmHg, heart rate 104 bpm, and respiratory rate 20/min. Examination reveals a positive Chvostek sign and carpopedal spasm. Laboratory studies show calcium 6.2 mg/dL, albumin 3.8 g/dL, magnesium 1.8 mg/dL, phosphorus 6.4 mg/dL, and intact PTH 4 pg/mL. ECG shows QTc 540 ms.`,
  question: 'What is the MOST appropriate immediate management, and what is the expected longer-term treatment plan?',
  options: [
    {
      id: 'A',
      text: 'IV calcium gluconate now, then calcium support plus oral calcitriol and calcium for ongoing management',
      isCorrect: true
    },
    {
      id: 'B',
      text: 'Oral calcium carbonate and ergocalciferol only; IV calcium is unnecessary',
      isCorrect: false
    },
    {
      id: 'C',
      text: 'A single IV calcium bolus is enough; no infusion or oral therapy should be needed afterward',
      isCorrect: false
    },
    {
      id: 'D',
      text: 'IV magnesium is the primary treatment because low PTH after thyroidectomy is usually from occult hypomagnesemia',
      isCorrect: false
    },
    {
      id: 'E',
      text: 'Immediate surgical re-exploration to restore parathyroid tissue perfusion',
      isCorrect: false
    }
  ],
  explanation: `
**Correct Answer: A - IV calcium gluconate now, then calcium support plus oral calcitriol and calcium for ongoing management**

**Clinical Reasoning:**
This patient has **acute post-thyroidectomy hypoparathyroidism** with symptomatic hypocalcemia. She has tetany symptoms, positive bedside signs, **QT prolongation**, and a **low PTH** after thyroid surgery. The immediate treatment is **IV calcium gluconate**. Because the effect of a bolus is transient, many patients need ongoing calcium support while oral therapy is started.

For longer-term management, the appropriate vitamin D form is **calcitriol**, not ergocalciferol, because calcitriol is already active and does **not** depend on intact PTH-driven renal activation. Oral calcium supplementation is also required.

**Why Others Are Wrong:**
* **B (Oral only):** Too slow for symptomatic acute hypocalcemia with QT prolongation and carpopedal spasm.
* **C (Bolus only):** A single bolus wears off quickly and does not address ongoing post-surgical hypoparathyroidism.
* **D (Magnesium as primary therapy):** Her magnesium is normal, and the low PTH is most consistent with surgical gland injury or devascularization.
* **E (Surgical re-exploration):** This is not standard immediate management for post-thyroidectomy hypocalcemia.
  `,
  references: [
    'Orloff LA, Wiseman SM, Bernet VJ, et al. American Thyroid Association Statement on Postoperative Hypoparathyroidism: Diagnosis, Prevention, and Management in Adults. Thyroid. 2018;28(7):830-841.',
    'Bollerslev J, Rejnmark L, Marcocci C, et al. European Society of Endocrinology Clinical Guideline: Treatment of Chronic Hypoparathyroidism in Adults. Eur J Endocrinol. 2015;173(2):G1-G20.',
    'Stack BC Jr, Bimston DN, Bodenner DL, et al. AACE/ACE Disease State Clinical Review: Postoperative Hypoparathyroidism. Endocr Pract. 2015;21(6):674-685.'
  ],
  skillTested: 'Treat symptomatic post-thyroidectomy hypocalcemia and choose calcitriol for ongoing hypoparathyroid management',
  linkedChapter: 'electrolytes',
  verdictOneLineSummary:
    'After thyroidectomy, low PTH plus tetany is an IV-calcium-now problem and a calcitriol-plus-calcium maintenance problem.'
};
