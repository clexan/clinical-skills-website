import { QuizScenario } from '../quizData';

export const case085: QuizScenario = {
  id: 'case-085',
  slug: 'septic-shock-corticosteroids-hydrocortisone',
  title: 'Corticosteroids in Refractory Septic Shock',
  category: 'Emergency',
  difficulty: 'Hard',
  vignette: `A 71-year-old woman with E. coli bacteremia from a urinary source has been in the ICU for 18 hours with septic shock. Despite aggressive management, she remains hypotensive requiring escalating vasopressor support. Her vital signs are: temperature 37.8°C (100°F), heart rate 96 bpm, blood pressure 94/58 mmHg (MAP 70 mmHg), respiratory rate 14 breaths/min on mechanical ventilation, and oxygen saturation 97% on FiO2 0.35. She is currently receiving norepinephrine at 0.6 mcg/kg/min and vasopressin at 0.04 units/min. Her lactate has improved from 6.2 to 2.8 mmol/L. She has received appropriate source control with urinary catheter placement and drainage of pyonephrosis. She has a history of type 2 diabetes and hypertension. Her medications include metformin and lisinopril. On examination, she is sedated with adequate urine output and improving peripheral perfusion.`,
  question: 'What is the MOST appropriate pharmacologic intervention at this time?',
  options: [
    {
      id: 'A',
      text: 'Administer intravenous hydrocortisone 200 mg/day (50 mg every 6 hours or continuous infusion)',
      isCorrect: true
    },
    {
      id: 'B',
      text: 'Perform an ACTH stimulation test before deciding on corticosteroid therapy',
      isCorrect: false
    },
    {
      id: 'C',
      text: 'Administer high-dose methylprednisolone (1-2 mg/kg/day) for more potent anti-inflammatory effect',
      isCorrect: false
    },
    {
      id: 'D',
      text: 'Withhold corticosteroids as the lactate is improving and they are only indicated for refractory hypotension',
      isCorrect: false
    },
    {
      id: 'E',
      text: 'Add fludrocortisone 50 mcg daily in addition to hydrocortisone for mineralocorticoid activity',
      isCorrect: false
    }
  ],
  explanation: `
**Correct Answer: A - Administer intravenous hydrocortisone 200 mg/day (50 mg every 6 hours or continuous infusion)**

**Clinical Reasoning:**
This patient has **refractory septic shock** requiring high-dose vasopressor support (norepinephrine >0.5 mcg/kg/min plus vasopressin). The Surviving Sepsis Campaign 2021 guidelines recommend **intravenous corticosteroids** for patients with septic shock who have ongoing vasopressor requirements despite adequate fluid resuscitation. The recommended regimen is **hydrocortisone 200 mg/day**, administered either as 50 mg IV every 6 hours or as a continuous infusion. The evidence supporting this recommendation comes from multiple trials, most notably the ADRENAL and APROCCHSS trials. The ADRENAL trial (2018) showed that hydrocortisone resulted in faster resolution of shock and shorter time to vasopressor discontinuation, though it did not demonstrate a mortality benefit in the overall population. The APROCCHSS trial showed mortality benefit with hydrocortisone plus fludrocortisone. A 2018 meta-analysis demonstrated that corticosteroids reduce mortality in septic shock when given at lower doses (≤400 mg/day hydrocortisone equivalent) for longer duration (≥3 days). The proposed mechanism is that septic shock causes relative adrenal insufficiency and corticosteroid resistance, and exogenous steroids help restore vascular responsiveness to catecholamines. Hydrocortisone should be initiated when patients require significant vasopressor support, typically defined as norepinephrine >0.25-0.5 mcg/kg/min.

**Why Others are Wrong:**
* **B (ACTH stimulation test first):** ACTH stimulation testing is **not recommended** and should not be performed to guide corticosteroid therapy in septic shock. The 2008 CORTICUS trial demonstrated that ACTH stimulation test results do not predict response to hydrocortisone, and current guidelines explicitly recommend against using this test. The decision to give corticosteroids should be based on vasopressor requirements, not adrenal function testing.
* **C (High-dose methylprednisolone):** High-dose corticosteroids (methylprednisolone 30 mg/kg or equivalent) are **contraindicated** in septic shock. Studies from the 1980s showed that high-dose steroids increased mortality and complications. Current recommendations specify **low-dose hydrocortisone** (200 mg/day or less). Methylprednisolone is also not preferred because hydrocortisone has mineralocorticoid activity that may be beneficial.
* **D (Withhold because lactate improving):** While improving lactate is encouraging, this patient still requires high-dose vasopressor support (norepinephrine 0.6 mcg/kg/min plus vasopressin). The indication for corticosteroids is ongoing vasopressor requirement despite adequate resuscitation, which this patient clearly meets. Corticosteroids may help facilitate vasopressor weaning.
* **E (Add fludrocortisone):** The APROCCHSS trial used hydrocortisone plus fludrocortisone and showed mortality benefit, while ADRENAL used hydrocortisone alone without mortality benefit. However, the Surviving Sepsis Campaign 2021 guidelines suggest that if fludrocortisone is unavailable, hydrocortisone alone is acceptable because hydrocortisone has intrinsic mineralocorticoid activity. The addition of fludrocortisone is not strongly recommended in current guidelines, though it may be considered. The priority is initiating hydrocortisone.
  `,
  references: [
    'Evans L, Rhodes A, Alhazzani W, et al. Surviving Sepsis Campaign: International Guidelines for Management of Sepsis and Septic Shock 2021. Crit Care Med. 2021;49(11):e1063-e1143.',
    'Venkatesh B, Finfer S, Cohen J, et al. Adjunctive glucocorticoid therapy in patients with septic shock. N Engl J Med. 2018;378(9):797-808.',
    'Annane D, Renault A, Brun-Buisson C, et al. Hydrocortisone plus fludrocortisone for adults with septic shock. N Engl J Med. 2018;378(9):809-818.',
    'Rochwerg B, Oczkowski SJ, Siemieniuk RAC, et al. Corticosteroids in sepsis: an updated systematic review and meta-analysis. Crit Care Med. 2018;46(9):1411-1420.',
    'Sprung CL, Annane D, Keh D, et al. Hydrocortisone therapy for patients with septic shock. N Engl J Med. 2008;358(2):111-124.'
  ]
};
