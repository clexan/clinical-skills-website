import { QuizScenario } from '../quizData';

export const case099: QuizScenario = {
  id: 'case-099',
  slug: 'massive-pulmonary-embolism-thrombolysis-obstructive-shock',
  title: 'Massive Pulmonary Embolism and Hemodynamic Instability',
  category: 'Emergency',
  difficulty: 'Hard',
  vignette: `A 48-year-old woman presents to the ED with sudden-onset dyspnea and chest pain that started 2 hours ago. She appears severely ill and diaphoretic. Her vital signs are: temperature 37.4°C (99.3°F), heart rate 128 bpm, blood pressure 78/52 mmHg (MAP 61 mmHg), respiratory rate 32 breaths/min, and oxygen saturation 86% on 15L non-rebreather mask. She has a history of recent right knee replacement surgery 10 days ago and takes warfarin for atrial fibrillation (INR 1.8 today). She is allergic to contrast dye (anaphylaxis). On examination, she has distended neck veins, a loud P2 heart sound, and clear lung fields. ECG shows sinus tachycardia with right bundle branch block and S1Q3T3 pattern. Bedside echocardiogram reveals a dilated, hypokinetic right ventricle with McConnell's sign (RV free wall hypokinesis with apical sparing), normal left ventricular function, and interventricular septal flattening. Troponin is elevated at 0.8 ng/mL and BNP is 850 pg/mL.`,
  question: 'What is the MOST appropriate next step in management?',
  options: [
    {
      id: 'A',
      text: 'Administer systemic thrombolysis (alteplase 100 mg over 2 hours) for massive pulmonary embolism with hemodynamic instability',
      isCorrect: true
    },
    {
      id: 'B',
      text: 'Obtain CT pulmonary angiography to confirm pulmonary embolism before initiating treatment',
      isCorrect: false
    },
    {
      id: 'C',
      text: 'Start therapeutic anticoagulation with heparin and arrange for catheter-directed thrombolysis',
      isCorrect: false
    },
    {
      id: 'D',
      text: 'Administer a 1-2 liter crystalloid bolus to increase right ventricular preload and improve cardiac output',
      isCorrect: false
    },
    {
      id: 'E',
      text: 'Initiate norepinephrine and arrange for emergent surgical embolectomy',
      isCorrect: false
    }
  ],
  explanation: `
**Correct Answer: A - Administer systemic thrombolysis (alteplase 100 mg over 2 hours) for massive pulmonary embolism with hemodynamic instability**

**Clinical Reasoning:**
This patient has **massive (high-risk) pulmonary embolism** defined by the presence of **hemodynamic instability** (sustained hypotension with systolic BP <90 mmHg) and evidence of **right ventricular (RV) dysfunction** and myocardial injury (elevated troponin/BNP, RV dilation on echo). The 2019 ESC and 2016 CHEST guidelines recommend **immediate systemic thrombolysis** for patients with massive PE and low risk of bleeding. The diagnosis is strongly supported by the clinical context (recent surgery), physical exam (loud P2, clear lungs), ECG findings (S1Q3T3, RBBB), and bedside echo (**McConnell's sign**). Systemic thrombolysis (e.g., alteplase 100 mg over 2 hours) rapidly reduces RV afterload by dissolving the clot, improving RV function and systemic hemodynamics. **In patients with severe instability, imaging confirmation (CTPA) may be delayed or bypassed if clinical suspicion is high and bedside echo shows RV strain.**

**Why Others are Wrong:**
* **B (Obtain CTPA first):** In a patient with life-threatening shock and a strong clinical/echocardiographic diagnosis of massive PE, delaying treatment for CTPA (especially with a contrast allergy requiring premedication) can be fatal. Bedside echo is sufficient to initiate reperfusion therapy in high-risk patients.
* **C (Anticoagulation and catheter-directed therapy):** Systemic thrombolysis is the standard of care for massive PE. Catheter-directed thrombolysis (CDT) is an alternative for patients with *submassive* (intermediate-high risk) PE or those with massive PE who have contraindications to systemic thrombolysis. Systemic therapy is faster and more readily available in most EDs.
* **D (Large fluid bolus):** Aggressive fluid resuscitation in massive PE can be harmful. The RV is already dilated and failing due to high afterload; excessive fluids can worsen RV wall stress and further impair LV filling through interventricular septal shift. Cautious fluid administration (250-500 mL) may be used, but large boluses should be avoided.
* **E (Norepinephrine and surgical embolectomy):** Surgical embolectomy is reserved for patients with contraindications to thrombolysis or those who fail thrombolytic therapy. Thrombolysis is the primary reperfusion strategy for massive PE.
  `,
  references: [
    'Konstantinides SV, Meyer G, Becattini C, et al. 2019 ESC Guidelines for the diagnosis and management of acute pulmonary embolism developed in collaboration with the European Respiratory Society (ERS). Eur Heart J. 2020;41(4):543-603.',
    'Kearon C, Akl EA, Ornelas J, et al. Antithrombotic Therapy for VTE Disease: CHEST Guideline and Expert Panel Report. Chest. 2016;149(2):315-352.',
    'Jaff MR, McMurtry MS, Archer SL, et al. Management of massive and submassive pulmonary embolism, iliofemoral deep vein thrombosis, and chronic thromboembolic pulmonary hypertension: a scientific statement from the American Heart Association. Circulation. 2011;123(16):1788-1830.',
    "McConnell MV, Solomon SD, Rayan ME, et al. Regional right ventricular dysfunction detected by echocardiography in acute pulmonary embolism. Am J Cardiol. 1996;78(4):469-473."
  ]
};
