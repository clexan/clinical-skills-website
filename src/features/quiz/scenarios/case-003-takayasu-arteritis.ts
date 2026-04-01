import { QuizScenario } from '../quizData';

export const case003: QuizScenario = {
  id: 'case-003',
  slug: 'takayasu-arteritis-chest-pain',
  title: 'Intermittent Chest Pain in a Young Woman',
  category: 'Cardiology',
  difficulty: 'Hard',
  vignette: `
A 35-year-old female accountant presents to the clinic with complaints of intermittent chest pain for the past 2 months. The pain is described as a dull ache, primarily in the mid-chest, occasionally radiating to her back, and lasting for several hours. She denies any association with exertion or meals. She reports occasional shortness of breath and mild fatigue, which she attributes to long work hours and recent stress. The chest pain is not relieved by antacids or positional changes.

Her past medical history is significant for hypertension, diagnosed 5 years ago, managed with lisinopril 10 mg daily. She has no history of diabetes, hyperlipidemia, or coronary artery disease. She is a non-smoker, drinks alcohol socially, and exercises irregularly. There is no family history of premature cardiovascular disease.

On physical examination, she has a blood pressure of 140/90 mmHg, heart rate 82 bpm, respiratory rate 16 breaths per minute, and oxygen saturation of 98% on room air. She appears well and in no acute distress. Cardiovascular examination reveals normal S1 and S2 with no murmurs, rubs, or gallops. Her lung examination is clear bilaterally, and her abdominal examination is unremarkable. Peripheral pulses are intact and symmetric. There are no signs of jugular venous distension or peripheral edema.

Laboratory results show:
- Hemoglobin: 13.5 g/dL
- White blood cell count: 7,500/mm³
- Platelets: 250,000/mm³
- Lipid panel: Total cholesterol 190 mg/dL, LDL 120 mg/dL, HDL 50 mg/dL, triglycerides 90 mg/dL
- High-sensitivity C-reactive protein (hs-CRP): 4.5 mg/L (elevated)
- Erythrocyte sedimentation rate (ESR): 25 mm/hr (mildly elevated)
- Troponin I: <0.01 ng/mL (normal)

An electrocardiogram (ECG) shows normal sinus rhythm with no ischemic changes. A chest X-ray is unremarkable. She undergoes a computed tomography (CT) angiography of the chest, which reveals mild thickening of the aortic wall and some irregularity in the descending thoracic aorta without significant stenosis.

Despite the normal cardiac markers and absence of typical risk factors, the elevated inflammatory markers and imaging findings suggest an underlying aortic pathology. The constellation of symptoms, laboratory results, and imaging findings point towards an inflammatory process affecting the aorta, possibly atherosclerosis with unusual presentation, given her young age and relatively low-risk profile.
  `,
  question: 'Based on the patient\'s presentation, laboratory results, and imaging findings, what is the most likely diagnosis?',
  options: [
    { id: 'A', text: 'Coronary artery disease', isCorrect: false },
    { id: 'B', text: 'Takayasu arteritis', isCorrect: true },
    { id: 'C', text: 'Pericarditis', isCorrect: false },
    { id: 'D', text: 'Aortic dissection', isCorrect: false },
    { id: 'E', text: 'Pulmonary embolism', isCorrect: false }
  ],
  explanation: `
**Correct Answer: (B) Takayasu arteritis**

Takayasu arteritis is the correct diagnosis because this patient's presentation demonstrates the classic triad of young age (<40 years), inflammatory aortic disease on imaging, and elevated inflammatory markers in the absence of atherosclerotic risk factors. [1]

The patient's CT angiography findings of mild aortic wall thickening and irregularity in the descending thoracic aorta are pathognomonic for Takayasu arteritis, particularly in a young woman. [1-2] These imaging features, combined with elevated inflammatory markers (hs-CRP 4.5 mg/L, ESR 25 mm/hr), fulfill multiple diagnostic criteria for this condition. [1]

**Why Takayasu arteritis fits best:**
* **Diagnostic Criteria:** The patient meets at least 3 of the 6 American College of Rheumatology criteria for Takayasu arteritis: (1) age <40 years at onset, (2) hypertension (BP 140/90 mmHg), and (3) arteriographic evidence of aortic abnormality on CT angiography. [1][3-4]
* **Clinical Phase:** The presentation aligns with the "prepulseless" phase of Takayasu arteritis, characterized by constitutional symptoms (fatigue), nonspecific chest pain, and elevated inflammatory markers before the development of classic vascular insufficiency signs. [1]

**Why other diagnoses are less likely:**
* **Coronary artery disease:** Unlikely given her young age, absence of traditional risk factors, normal troponin, and normal ECG. Imaging shows aortic pathology, not coronary disease.
* **Pericarditis:** Typically presents with positional chest pain, pericardial friction rub, and characteristic ECG changes (diffuse ST elevation), none of which are present.
* **Aortic dissection:** Presents acutely with severe, tearing chest pain. CT angiography would show an intimal flap, not the chronic wall thickening and irregularity seen here. [5]
* **Pulmonary embolism:** Would present with acute dyspnea and pleuritic chest pain; CT angiography would demonstrate filling defects in the pulmonary arteries.

The elevated inflammatory markers (ESR, hs-CRP) in conjunction with imaging findings are particularly diagnostic, as they indicate active inflammatory disease rather than atherosclerotic or thrombotic processes. [1][6-7]
  `,
  references: [
    "Takayasu Arteritis: JACC Focus Seminar 3/4. Journal of the American College of Cardiology. 2022. Joseph G, Goel R, Thomson VS, Joseph E, Danda D.",
    "Large-Vessel Vasculitis. Lancet. 2025. Cacoub P, Vieira M, Langford CA, Tazi Mezalek Z, Saadoun D.",
    "2022 ACC/AHA Guideline for the Diagnosis and Management of Aortic Disease. JACC. 2022. Isselbacher EM, et al.",
    "2010 ACCF/AHA/AATS/ACR/ASA/SCA/SCAI/SIR/STS/SVM Guidelines for the Diagnosis and Management of Patients With Thoracic Aortic Disease. Circulation. 2010. Hiratzka LF, et al.",
    "Multimodality Imaging of Aortitis. JACC Cardiovascular Imaging. 2014. Hartlage GR, et al.",
    "Association Between Acute Phase Reactants, Interleukin-6, TNF-Alpha, and Disease Activity in Takayasu's Arteritis Patients. Arthritis Research & Therapy. 2020.",
    "Inflammatory Diseases of the Aorta: JACC Focus Seminar, Part 2. JACC. 2022. Kadian-Dodov D, et al."
  ]
};
