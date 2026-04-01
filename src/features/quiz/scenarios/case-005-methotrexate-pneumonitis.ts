import { QuizScenario } from '../quizData';

export const case005: QuizScenario = {
  id: 'case-005',
  slug: 'methotrexate-induced-pneumonitis',
  title: 'Progressive Dyspnea in a Patient with Rheumatoid Arthritis',
  category: 'Respiratory',
  difficulty: 'Hard',
  vignette: `
A 32-year-old female presents to the clinic with progressive shortness of breath and a non-productive cough that has persisted for the past three months. She also reports intermittent low-grade fevers and generalized fatigue. She works as a preschool teacher and mentions that several of her students had upper respiratory infections recently. Her medical history is notable for a recent diagnosis of rheumatoid arthritis, for which she has been taking methotrexate for the past six months. She does not smoke and occasionally drinks alcohol.

On physical examination, her vital signs are: temperature 100.4°F, blood pressure 118/72 mmHg, heart rate 92 bpm, respiratory rate 20 breaths per minute, and oxygen saturation of 94% on room air. Auscultation of the lungs reveals bilateral inspiratory crackles; no wheezing or rhonchi are noted. Cardiac examination is unremarkable.

Laboratory results:
- CBC: WBC 10,200/mm³, Hemoglobin 12.8 g/dL, Platelets 245,000/mm³
- ESR: 48 mm/hr
- CRP: 12 mg/L
- Rheumatoid factor: positive
- ANA: positive
- Pulmonary function tests: show a restrictive pattern with a reduced FVC and normal FEV1/FVC ratio.

Chest X-ray reveals patchy bilateral infiltrates. A high-resolution CT scan of the chest shows diffuse ground-glass opacities and areas of consolidation primarily in the peripheral lung fields. Bronchoalveolar lavage is performed, and cultures are negative for bacterial, viral, and fungal pathogens. Notably, her symptoms have not improved despite a course of broad-spectrum antibiotics.
  `,
  question: 'What is the most appropriate next step in management for this patient?',
  options: [
    { id: 'A', text: 'Begin treatment with a TNF-alpha inhibitor', isCorrect: false },
    { id: 'B', text: 'Discontinue methotrexate and start prednisone', isCorrect: true },
    { id: 'C', text: 'Start intravenous immunoglobulin (IVIG)', isCorrect: false },
    { id: 'D', text: 'Refer for lung biopsy', isCorrect: false },
    { id: 'E', text: 'Initiate antifungal therapy', isCorrect: false }
  ],
  explanation: `
**Correct Answer: (B) Discontinue methotrexate and start prednisone**

This patient's clinical presentation is highly consistent with **methotrexate-induced pneumonitis**, a serious but reversible drug hypersensitivity reaction. The management requires immediate cessation of methotrexate and initiation of corticosteroid therapy. [1]

**Why this diagnosis fits:**
* **Clinical Course:** Manifests with an acute to subacute course of progressive dyspnea, nonproductive cough, and fever. [1-2]
* **Timing:** Typically occurs within the first year of treatment (this patient is at 6 months). It is a dose-independent hypersensitivity reaction. [3]
* **Testing:** PFTs show a classic restrictive pattern. Imaging (HRCT) shows ground-glass opacities and peripheral consolidation, consistent with a non-specific interstitial pneumonia (NSIP) pattern. [1,4]
* **Exclusion:** The negative infectious workup (including BAL cultures) and failure to respond to antibiotics effectively rule out infectious etiologies. [2,5]

**Management:**
The first and most critical step is the permanent discontinuation of methotrexate. Corticosteroids (e.g., prednisone) are typically initiated to accelerate resolution of the inflammatory process, as untreated methotrexate pneumonitis can progress to irreversible pulmonary fibrosis or respiratory failure.

**Why other options are less appropriate:**
* **TNF-alpha inhibitors:** Used for RA but do not treat drug-induced pneumonitis and can occasionally cause their own pulmonary complications.
* **IVIG/Antifungals:** Not indicated given the drug-induced etiology and negative culture results.
* **Lung biopsy:** While sometimes needed in undifferentiated ILD, the clinical context and negative infectious workup make the diagnosis of MTX-pneumonitis sufficiently likely to warrant an empiric trial of stopping the drug and starting steroids.
  `,
  references: [
    "Methotrexate-Associated Pneumonitis and Rheumatoid Arthritis-Interstitial Lung Disease: Current Concepts. Frontiers in Medicine. 2019. Fragoulis GE, et al.",
    "Methotrexate Pneumonitis: Review of the Literature and Histopathological Findings. The European Respiratory Journal. 2000. Imokawa S, et al.",
    "Methotrexate and Interstitial Lung Disease: Controversies and Questions. Rheumatology. 2019. Fragoulis GE, et al.",
    "Drug-Induced Pneumonitis: The Role of Methotrexate. Sarcoidosis, Vasculitis, and Diffuse Lung Diseases. 2001. Zisman DA, et al."
  ]
};
