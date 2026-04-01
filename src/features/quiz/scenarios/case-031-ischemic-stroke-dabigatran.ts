import { QuizScenario } from '../quizData';

export const case031: QuizScenario = {
  id: 'case-031',
  slug: 'ischemic-stroke-atrial-fibrillation-dabigatran',
  title: 'The Anticoagulated Octogenarian',
  category: 'Neurology',
  difficulty: 'Hard',
  vignette: 'An 82-year-old female is brought to the ED by her daughter for sudden onset right arm weakness and slurred speech that began 90 minutes ago. Vital signs: HR 94 bpm irregular, BP 152/86 mmHg, RR 16/min, SpO2 96% on room air. History reveals atrial fibrillation, hypertension, and CKD (baseline Cr 1.8). Medications include dabigatran 150 mg BID (last dose 3 hours ago). Physical exam: dysarthria, right facial droop, right arm weakness (2/5), right leg weakness (4/5). NIHSS is 8. CT head: No hemorrhage. CTA: Left M2 occlusion. Labs: Cr 1.9, aPTT 42 sec (N: 25-35), PT/INR 1.2.',
  question: 'What is the most appropriate management strategy for this patient?',
  options: [
    { id: 'A', text: 'Administer IV alteplase immediately as she is within the 4.5-hour window', isCorrect: false },
    { id: 'B', text: 'Administer idarucizumab 5g IV to reverse dabigatran, then proceed with IV alteplase and mechanical thrombectomy', isCorrect: true },
    { id: 'C', text: 'Proceed directly to mechanical thrombectomy without thrombolysis due to recent dabigatran use', isCorrect: false },
    { id: 'D', text: 'Wait for dabigatran level results before making treatment decisions', isCorrect: false },
    { id: 'E', text: 'Administer aspirin 325 mg and proceed with mechanical thrombectomy alone', isCorrect: false }
  ],
  explanation: '**Correct Answer: (B) Administer idarucizumab 5g IV to reverse dabigatran, then proceed with IV alteplase and mechanical thrombectomy**\n\n**Clinical Reasoning:** Dabigatran is a direct thrombin inhibitor and a relative contraindication to IV thrombolysis if taken within the last 48 hours. In this patient, the aPTT is elevated, and she has CKD, which prolongs dabigatran clearance. Idarucizumab is a monoclonal antibody that provides immediate reversal of dabigatran, allowing for safe administration of alteplase. Bridging therapy (tPA + thrombectomy) remains the standard for large vessel occlusions (M2) within the early window.\n\n**Why other options are wrong:** (A) Alteplase without reversal carries an unacceptably high risk of intracranial hemorrhage in a recently anticoagulated patient. (C) While thrombectomy alone is an option, bridging therapy is preferred when the anticoagulant can be safely reversed. (D) Waiting for levels violates "time is brain." (E) Aspirin has no role in the hyperacute management of large vessel occlusion and is contraindicated within 24 hours of tPA.',
  references: ['2019 AHA/ASA Updated Guidelines for the Management of Acute Ischemic Stroke.']
};
