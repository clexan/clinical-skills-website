import { QuizScenario } from '../quizData';

export const case035: QuizScenario = {
  id: 'case-035',
  slug: 'ischemic-stroke-lacunar-pure-motor',
  title: 'Pure Motor Deficit in the Chronic Hypertensive',
  category: 'Neurology',
  difficulty: 'Medium',
  vignette: 'A 70-year-old male with a history of poorly controlled hypertension presents with acute onset weakness of his right face, arm, and leg. He has no difficulty speaking, no visual field deficits, and no sensory loss. BP is 190/110 mmHg. On exam, he has a right-sided 3/5 hemiparesis in all three regions. CT head shows a small (12 mm) hypodensity in the left posterior limb of the internal capsule.',
  question: 'What is the most likely underlying pathophysiology of this patient’s condition?',
  options: [
    { id: 'A', text: 'Atrial fibrillation with embolization to the MCA', isCorrect: false },
    { id: 'B', text: 'Lipohyalinosis of small penetrating arteries', isCorrect: true },
    { id: 'C', text: 'Carotid artery dissection', isCorrect: false },
    { id: 'D', text: 'Amyloid angiopathy', isCorrect: false },
    { id: 'E', text: 'Rupture of a Charcot-Bouchard aneurysm', isCorrect: false }
  ],
  explanation: '**Correct Answer: (B) Lipohyalinosis of small penetrating arteries**\n\n**Clinical Reasoning:** This patient has a **Lacunar Stroke** (specifically, Pure Motor Hemiparesis). These strokes involve small penetrating arteries (e.g., lenticulostriate) and are typically caused by **lipohyalinosis and microatheroma** formation due to chronic hypertension and diabetes. They are characterized by a lack of "cortical signs" (aphasia, neglect, or visual field cuts).\n\n**Why other options are wrong:** (A) Embolic strokes usually involve large vessels and present with cortical signs. (C) Dissection often causes neck pain and Horner syndrome. (D) Amyloid angiopathy typically causes lobar *intracerebral hemorrhage* in the elderly. (E) Charcot-Bouchard aneurysms cause *hemorrhage*, but the CT here shows a hypodensity (infarct), not hyperdensity (blood).',
  references: ['Harrison’s Principles of Internal Medicine, 21st Ed.', 'AHA/ASA Acute Ischemic Stroke Guidelines.']
};
