import { QuizScenario } from '../quizData';

export const case002: QuizScenario = {
  id: 'case-002',
  slug: 'infective-endocarditis-echo',
  title: 'Fever and New Heart Murmur',
  category: 'Cardiology',
  difficulty: 'Hard',
  vignette: `
A 36-year-old male construction worker presents to the emergency department with a chief complaint of progressively worsening fatigue and shortness of breath over the past three weeks. He reports experiencing fever and chills intermittently during this period, and more recently, a persistent cough productive of yellow sputum. He denies any chest pain, palpitations, or recent travel. His past medical history is significant for a dental abscess treated with antibiotics two months ago. He does not smoke, drink alcohol, or use recreational drugs. He is on no regular medications.

On physical examination, the patient appears ill and diaphoretic. Temperature is 38.5°C (101.3°F), blood pressure is 110/70 mmHg, heart rate is 110 beats per minute, and respiratory rate is 22 breaths per minute. Oxygen saturation is 95% on room air. Cardiac examination reveals a new, harsh holosystolic murmur best heard at the lower left sternal border that radiates to the axilla. There are no signs of congestive heart failure such as peripheral edema or jugular venous distension. Respiratory examination reveals crackles at both lung bases. Abdominal examination is unremarkable. Skin examination shows non-tender erythrodermic lesions on the palms and soles. There are no signs of splinter hemorrhages or Janeway lesions.

Laboratory results reveal the following:
- White blood cell count: 14,000/µL (elevated)
- Hemoglobin: 11.2 g/dL (low)
- Platelets: 120,000/µL (low)
- Blood cultures: Positive for Gram-positive cocci in clusters
- Erythrocyte sedimentation rate (ESR): 78 mm/hr (elevated)
- Chest X-ray: Bilateral patchy infiltrates

The patient is admitted for further evaluation and management.
  `,
  question: 'Which of the following is the most appropriate next step in the management of this patient?',
  options: [
    { id: 'A', text: 'Sputum culture and sensitivity', isCorrect: false },
    { id: 'B', text: 'Transthoracic echocardiography', isCorrect: true },
    { id: 'C', text: 'High-resolution CT scan of the chest', isCorrect: false },
    { id: 'D', text: 'Bronchoscopy with bronchoalveolar lavage', isCorrect: false },
    { id: 'E', text: 'Empiric broad-spectrum antibiotics', isCorrect: false }
  ],
  explanation: `
**Correct Answer: (B) Transthoracic echocardiography**

Transthoracic echocardiography is the correct next step because this patient has a high clinical suspicion for infective endocarditis (IE) and requires urgent cardiac imaging to establish the diagnosis and assess for complications.

This patient presents with classic features of IE according to the Modified Duke Criteria. He already has one major criterion (positive blood cultures for Gram-positive cocci in clusters, likely Staphylococcus aureus) and multiple minor criteria: fever (38.5°C), predisposing condition (recent dental abscess), vascular phenomena (bilateral pulmonary infiltrates suggesting septic pulmonary emboli), and immunologic phenomena (erythrodermic lesions on palms and soles). The new holosystolic murmur at the lower left sternal border radiating to the axilla suggests tricuspid regurgitation, indicating possible right-sided endocarditis. [1-2]

Echocardiography is central to the diagnosis of IE and provides the second major criterion needed for a definite diagnosis. According to the 2020 ACC/AHA guidelines, echocardiographic evidence of vegetations, abscess, or new valvular regurgitation constitutes a major Duke criterion. [1] Transthoracic echocardiography (TTE) should be performed initially in all cases of suspected IE. [3] TTE has a sensitivity of approximately 70% for native valve endocarditis and specificity >90%. [4-5] While transesophageal echocardiography (TEE) has higher sensitivity (>90%), TTE is the appropriate first-line imaging modality. [4-5]

In this case, TTE may be sufficient for uncomplicated right-sided IE, which typically presents with large vegetations that are easier to visualize. [7] Right-sided endocarditis accounts for 5-10% of IE cases and commonly affects the tricuspid valve with Staphylococcus as the predominant organism. [4] The bilateral pulmonary infiltrates on chest X-ray are consistent with septic pulmonary emboli, a hallmark of right-sided IE. [3-4]

While empiric antibiotics are important, they should ideally be initiated after obtaining blood cultures (which has been done) and performing echocardiography to establish the diagnosis and assess disease severity. [1][3] The other options (sputum culture, CT chest, bronchoscopy) do not address the primary diagnostic concern of endocarditis and would delay critical cardiac imaging.
  `,
  references: [
    "2020 ACC/AHA Guideline for the Management of Patients With Valvular Heart Disease. Circulation. 2021.",
    "Best Practices for Imaging Cardiac Device-Related Infections and Endocarditis: A JACC: Cardiovascular Imaging Expert Panel Statement. JACC Cardiovasc Imaging. May 1, 2022.",
    "Modified Duke Criteria for Diagnosis of Infective Endocarditis."
  ]
};
