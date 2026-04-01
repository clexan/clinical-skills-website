import { QuizScenario } from '../quizData';

export const case001: QuizScenario = {
  id: 'case-001',
  slug: 'chest-pain-ascending-aortic-aneurysm',
  title: 'Chest Pain and Ascending Aortic Aneurysm',
  category: 'Cardiology',
  difficulty: 'Medium',
  vignette: `A 37-year-old female office worker presents to the emergency department with acute chest pain that started suddenly three hours ago. Her blood pressure is 160/95 mmHg. She has a family history of premature coronary disease. Her lipid panel reveals an LDL of 160 mg/dL, and she is currently taking aspirin. Imaging reveals a 3.5 cm ascending aortic aneurysm without evidence of dissection.`,
  question: 'What is the most appropriate initial management for this patient?',
  options: [
    { id: 'A', text: 'Administer intravenous heparin', isCorrect: false },
    { id: 'B', text: 'Prepare for emergent surgical repair', isCorrect: false },
    { id: 'C', text: 'Administer nitroglycerin alone', isCorrect: false },
    { id: 'D', text: 'Initiate intravenous beta-blocker therapy', isCorrect: true },
    { id: 'E', text: 'Initiate high-dose statin therapy', isCorrect: false }
  ],
  explanation: `
**Correct Answer: (D) Initiate intravenous beta-blocker therapy**

The American College of Cardiology/American Heart Association recommends initiating intravenous beta-blocker therapy as the most appropriate initial management for this patient with a symptomatic ascending aortic aneurysm. The patient presents with acute chest pain attributable to her aneurysm, making this a symptomatic presentation that requires urgent blood pressure and heart rate control to reduce aortic wall stress.

**Why this works:**
Beta-blockers are first-line therapy for patients with thoracic aortic aneurysms because they reduce both blood pressure and heart rate, thereby decreasing ventricular ejection force and pulsatile wall stress on the aortic wall. In patients with thoracic aortic aneurysms and hypertension (this patient's BP is 160/95 mmHg), the target blood pressure is ≤130/80 mmHg.

**Why the other options are less appropriate:**
* **Emergent surgery:** The patient's 3.5 cm ascending aortic aneurysm does not meet surgical criteria (indicated for asymptomatic patients at ≥5.5 cm).
* **Heparin:** Has no role in aneurysm management and is contraindicated given the risk of bleeding.
* **Nitroglycerin alone:** Does not provide adequate heart rate control and may cause reflex tachycardia, increasing aortic wall stress.
* **High-dose statin:** While reasonable for long-term management given her LDL of 160 mg/dL, it does not address the acute presentation requiring immediate intervention.

**Long-term Management:**
Beyond immediate management, surveillance imaging (CT/MRI) is essential. Surgical intervention becomes indicated if the growth rate is ≥0.3 cm/year over 2 consecutive years or ≥0.5 cm in 1 year.
  `,
  references: [
    "2022 ACC/AHA Guideline for the Diagnosis and Management of Aortic Disease: A Report of the American Heart Association/American College of Cardiology Joint Committee on Clinical Practice Guidelines. Isselbacher EM, et al. JACC. 2022.",
    "The Society for Vascular Surgery’s Multidisciplinary Management Guide on the Perioperative Care of Patients with Vascular Disease. Rabih Chaer MD MS, et al. SVS 2023."
  ]
};
