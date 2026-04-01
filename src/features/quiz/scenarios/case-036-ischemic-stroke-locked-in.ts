import { QuizScenario } from '../quizData';

export const case036: QuizScenario = {
  id: 'case-036',
  slug: 'ischemic-stroke-basilar-occlusion-locked-in',
  title: 'The Locked-In State',
  category: 'Neurology',
  difficulty: 'Hard',
  vignette: 'A 45-year-old male is found unresponsive on the floor of his office. Upon arrival at the ED, he is awake and alert but unable to move any of his limbs or speak. He can only move his eyes vertically and blink. He appears to follow commands through eye movements. Pupils are reactive, and he remains breathing spontaneously.',
  question: 'The most likely site of the lesion in this patient is the:',
  options: [
    { id: 'A', text: 'Midbrain tectum', isCorrect: false },
    { id: 'B', text: 'Ventral pons', isCorrect: true },
    { id: 'C', text: 'Medulla oblongata', isCorrect: false },
    { id: 'D', text: 'Thalamic nuclei', isCorrect: false },
    { id: 'E', text: 'Bilateral frontal lobes', isCorrect: false }
  ],
  explanation: '**Correct Answer: (B) Ventral pons**\n\n**Clinical Reasoning:** This is the classic **"Locked-in Syndrome"**, usually caused by an occlusion of the **basilar artery** leading to an infarct of the ventral (basis) pontis. This destroys the corticospinal and corticobulbar tracts (causing quadriplegia and aphonia) but spares the reticular activating system (preserving consciousness) and the dorsal pons/midbrain (preserving vertical eye movements and blinking).\n\n**Why other options are wrong:** (A) Midbrain lesions usually affect CN III (pupil dilation/external ophthalmoplegia). (C) Medullary lesions (Wallenberg) cause ataxia and sensory loss but not global quadriplegia. (D) Thalamic strokes cause sensory loss or "Dejerine-Roussy" pain. (E) Frontal lobe lesions (Abulic state) result in a lack of motivation to move but not physical paralysis of eye movements.',
  references: ['The Lancet Neurology: Basilar Artery Occlusion Review.', 'Neurology: Locked-in syndrome clinical diagnosis.']
};
