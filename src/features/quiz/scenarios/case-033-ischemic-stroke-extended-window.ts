import { QuizScenario } from '../quizData';

export const case033: QuizScenario = {
  id: 'case-033',
  slug: 'ischemic-stroke-extended-window-thrombectomy',
  title: 'Waking Up with a Deficit',
  category: 'Neurology',
  difficulty: 'Hard',
  vignette: 'A 72-year-old female was last seen normal when she went to bed at 10 PM. At 6 AM, her husband finds her with a dense right-sided paralysis and inability to speak. She arrives at the hospital at 7 AM. NIHSS is 20. BP 160/90 mmHg. Non-contrast CT shows no hemorrhage and an ASPECTS score of 8. CT Perfusion imaging shows a small core of 15 mL and a total hypoperfused territory of 120 mL. CTA confirms a left internal carotid artery (ICA) terminus occlusion.',
  question: 'What is the most appropriate management for this patient?',
  options: [
    { id: 'A', text: 'Administer IV alteplase and observe in the ICU', isCorrect: false },
    { id: 'B', text: 'Perform mechanical thrombectomy immediately', isCorrect: true },
    { id: 'C', text: 'Administer aspirin 325 mg and start high-intensity statin', isCorrect: false },
    { id: 'D', text: 'Hold all interventions as she is outside the 4.5-hour window', isCorrect: false },
    { id: 'E', text: 'Obtain MRI Brain to check for DWI-FLAIR mismatch before deciding on treatment', isCorrect: false }
  ],
  explanation: '**Correct Answer: (B) Perform mechanical thrombectomy immediately**\n\n**Clinical Reasoning:** Although the patient is outside the standard 4.5-hour window for IV thrombolysis, she meets the **DAWN and DEFUSE-3** trial criteria for mechanical thrombectomy in the extended window (up to 24 hours). The "mismatch" between her small infarct core (15 mL) and large salvageable penumbra (120 mL) on CT perfusion indicates she will benefit significantly from endovascular intervention. For wake-up strokes with large vessel occlusion (LVO), perfusion imaging is the gold standard for selecting candidates for thrombectomy.\n\n**Why other options are wrong:** (A) IV alteplase is generally not given beyond 4.5 hours of last-seen-normal (unless MRI-guided in specific research protocols). (C) Medical management alone is insufficient for a large terminus occlusion. (D) The 24-hour window for thrombectomy is now standard care for eligible patients. (E) Since CT Perfusion already demonstrated a clear mismatch, further delays for MRI are not indicated.',
  references: ['DAWN Trial (N Engl J Med 2018; 378:11-21)', 'DEFUSE-3 Trial (N Engl J Med 2018; 378:708-718).']
};
