import { QuizScenario } from '../quizData';

export const case032: QuizScenario = {
  id: 'case-032',
  slug: 'ischemic-stroke-lateral-medullary-wallenberg',
  title: 'Vertigo and Hiccups in a Heavy Smoker',
  category: 'Neurology',
  difficulty: 'Hard',
  vignette: 'A 58-year-old male presents with sudden onset severe vertigo, nausea, and persistent hiccups. He has a 40-pack-year smoking history. Physical exam: Ptosis and miosis of the right eye, decreased pain and temperature sensation on the right side of the face and the left side of the body, and limb ataxia on the right. He has a hoarse voice and his uvula deviates to the left. BP 175/95 mmHg, HR 88 bpm.',
  question: 'This patient’s clinical presentation is most consistent with an occlusion of which artery?',
  options: [
    { id: 'A', text: 'Right Posterior Inferior Cerebellar Artery (PICA)', isCorrect: true },
    { id: 'B', text: 'Left Anterior Inferior Cerebellar Artery (AICA)', isCorrect: false },
    { id: 'C', text: 'Right Superior Cerebellar Artery (SCA)', isCorrect: false },
    { id: 'D', text: 'Basilar artery', isCorrect: false },
    { id: 'E', text: 'Right Middle Cerebral Artery (MCA)', isCorrect: false }
  ],
  explanation: '**Correct Answer: (A) Right Posterior Inferior Cerebellar Artery (PICA)**\n\n**Clinical Reasoning:** This is a classic **Lateral Medullary (Wallenberg) Syndrome**. The constellation of findings includes: (1) Horner syndrome (ptosis/miosis) from sympathetic tract involvement, (2) Ipsilateral facial vs. Contralateral body sensory loss (Spinothalamic/Trigeminal tracts), (3) Hoarseness and dysphagia (Nucleus ambiguus/CN IX, X), and (4) Ataxia (Inferior cerebellar peduncle). This syndrome is most commonly caused by occlusion of the PICA or the vertebral artery.\n\n**Why other options are wrong:** (B) AICA occlusion causes Lateral Pontine Syndrome, which includes ipsilateral facial paralysis and deafness (CN VII and VIII). (C) SCA occlusion typically presents with gait ataxia and dysarthria but lacks the "crossed" sensory loss and hoarseness. (D) Basilar occlusion usually presents with "Locked-in" syndrome or global brainstem signs. (E) MCA strokes cause contralateral hemiparesis and aphasia/neglect, not brainstem signs.',
  references: ['Blumenfeld H. Neuroanatomy through Clinical Cases. 3rd Ed.', 'AHA/ASA Stroke 2021 Clinical Practice Guidelines.']
};
