import { QuizScenario } from '../quizData';

export const case034: QuizScenario = {
  id: 'case-034',
  slug: 'ischemic-stroke-symptomatic-carotid-stenosis',
  title: 'Secondary Prevention in Carotid Disease',
  category: 'Neurology',
  difficulty: 'Medium',
  vignette: 'A 66-year-old male smoker with hypertension presents with a 15-minute episode of weakness in his right hand and "curtain-like" vision loss in his left eye (amaurosis fugax). Symptoms have completely resolved. Carotid duplex ultrasound reveals 85% stenosis of the left internal carotid artery and 40% on the right. He is already taking lisinopril and aspirin.',
  question: 'What is the most appropriate next step to reduce the long-term risk of stroke?',
  options: [
    { id: 'A', text: 'Add clopidogrel and reassess in 6 months', isCorrect: false },
    { id: 'B', text: 'Perform left carotid endarterectomy (CEA) within 2 weeks', isCorrect: true },
    { id: 'C', text: 'Switch aspirin to warfarin with a target INR of 2.5', isCorrect: false },
    { id: 'D', text: 'Begin aggressive medical therapy alone including a high-dose statin', isCorrect: false },
    { id: 'E', text: 'Perform bilateral carotid artery stenting (CAS)', isCorrect: false }
  ],
  explanation: '**Correct Answer: (B) Perform left carotid endarterectomy (CEA) within 2 weeks**\n\n**Clinical Reasoning:** This patient has **symptomatic carotid stenosis** (TIA/Amaurosis fugax). For patients with 70–99% stenosis who are symptomatic, CEA is highly effective in reducing the risk of future stroke, especially when performed early (within 2 weeks of the index event). Medical therapy (Statin, Antiplatelet, BP control) should be optimized, but surgical/endovascular intervention is the priority for high-grade symptomatic disease.\n\n**Why other options are wrong:** (A) Dual antiplatelet therapy is used for minor strokes/TIAs but does not replace the need for CEA in high-grade stenosis. (C) Warfarin is not indicated for carotid disease (it is for A-fib). (D) Medical therapy alone is inferior to CEA for symptomatic 70–99% stenosis. (E) Bilateral intervention is not indicated, as the 40% side is asymptomatic and does not meet surgical criteria (>60-70%).',
  references: ['NASCET Trial Results', 'AHA/ASA Stroke Prevention Guidelines 2021.']
};
