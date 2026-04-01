import { QuizScenario } from '../quizData';

export const case004: QuizScenario = {
  id: 'case-004',
  slug: 'endocarditis-prophylaxis',
  title: 'Preventing Recurrence of Infective Endocarditis',
  category: 'Cardiology',
  difficulty: 'Medium',
  vignette: `
A 60-year-old female retired school teacher presents to the emergency department with fatigue, fever, and intermittent palpitations for the past two weeks. She reports feeling increasingly weak and short of breath, especially when climbing stairs or walking short distances. She denies chest pain or syncope. She had a dental extraction three weeks ago but reports no other recent illnesses. Her past medical history is significant for well-controlled hypertension managed with lisinopril and hydrochlorothiazide and a remote history of breast cancer treated with surgery and chemotherapy five years ago. She is a non-smoker, consumes alcohol occasionally, and denies illicit drug use.

On physical examination, she appears mildly ill but is in no acute distress. Her vital signs reveal a temperature of 101.3°F, heart rate of 110 bpm, blood pressure of 130/85 mmHg, respiratory rate of 16 breaths per minute, and oxygen saturation of 97% on room air. Cardiac examination reveals a regular rhythm with a new grade 3/6 holosystolic murmur best heard at the apex radiating to the axilla. Jugular venous distention is noted. Lung examination reveals bibasilar crackles. Abdominal examination is unremarkable, and no hepatosplenomegaly is detected. Extremities show no edema, but there are several splinter hemorrhages present on the fingernails.

Laboratory results reveal:
- White blood cell count: 15,000/µL
- Hemoglobin: 11 g/dL
- Platelets: 180,000/µL
- Blood cultures: positive for gram-positive cocci in clusters
- ECG: sinus tachycardia with occasional premature ventricular complexes
- Echocardiogram: thickened mitral valve with a mobile echodensity suggestive of vegetation, mild mitral regurgitation, and LVEF of 55%
  `,
  question: 'What is the most appropriate preventive measure to reduce the risk of recurrence in this patient?',
  options: [
    { id: 'A', text: 'Daily aspirin therapy', isCorrect: false },
    { id: 'B', text: 'Annual influenza vaccination', isCorrect: false },
    { id: 'C', text: 'Smoking cessation', isCorrect: false },
    { id: 'D', text: 'Regular exercise and weight management', isCorrect: false },
    { id: 'E', text: 'Prophylactic antibiotics before dental procedures', isCorrect: true }
  ],
  explanation: `
**Correct Answer: (E) Prophylactic antibiotics before dental procedures**

The American College of Cardiology/American Heart Association (ACC/AHA) recommends that antibiotic prophylaxis is reasonable before dental procedures that involve manipulation of gingival tissue, manipulation of the periapical region of teeth, or perforation of the oral mucosa in patients with valvular heart disease who have **previous infective endocarditis** (Class IIa, Level of Evidence C-LD). [1]

**Why this is the priority:**
This patient has a confirmed diagnosis of infective endocarditis (IE). Having a history of previous IE places her in the highest-risk category for adverse outcomes should recurrent IE occur. [1] The temporal relationship between her recent dental extraction and the development of IE underscores the importance of prophylaxis for future dental procedures.

**Clinical Details:**
* **Regimen:** The recommended antibiotic regimen is amoxicillin 2 g orally given 30 to 60 minutes before the procedure. For penicillin-allergic patients, alternatives include cephalexin, azithromycin, or doxycycline. [1]
* **Scope:** Prophylaxis is **not** recommended for nondental procedures (e.g., TEE, EGD, colonoscopy) in the absence of active infection. [1]

**Why other options are incorrect:**
* **Aspirin:** No established role in preventing recurrent IE.
* **Influenza vaccination:** Prevents viral illness, but IE is bacterial/fungal.
* **Smoking/Exercise:** General health measures that do not address the specific bacteremic risk associated with dental work in high-risk valvular patients.

Beyond prophylaxis, optimal oral hygiene through regular professional dental care is essential to reduce bacteremia from daily activities like tooth brushing. [7-8]
  `,
  references: [
    "2020 ACC/AHA Guideline for the Management of Patients With Valvular Heart Disease. Otto CM, et al. JACC. 2021.",
    "2023 ESC Guidelines for the management of endocarditis.",
    "AHA Guidelines on Prevention of Infective Endocarditis."
  ]
};
