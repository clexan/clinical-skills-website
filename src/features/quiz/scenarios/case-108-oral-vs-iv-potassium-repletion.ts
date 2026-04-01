import { QuizScenario } from '../quizData';

export const case108: QuizScenario = {
  id: 'case-108',
  slug: 'oral-vs-iv-potassium-repletion',
  title: 'Route of Potassium Repletion',
  category: 'Emergency',
  difficulty: 'Medium',
  vignette: `A 58-year-old man with hypertension is found to have hypokalemia on routine labs. He takes hydrochlorothiazide 25 mg daily. He is completely asymptomatic with no weakness, palpitations, or muscle cramps. Vital signs are normal. ECG shows normal sinus rhythm with no U-waves or QT prolongation. Laboratory studies reveal potassium 3.1 mEq/L, magnesium 2.0 mg/dL, and creatinine 0.9 mg/dL.`,
  question: 'What is the MOST appropriate route and approach for potassium repletion?',
  options: [
    {
      id: 'A',
      text: 'Oral potassium chloride 40-80 mEq/day in divided doses with repeat labs in 2-3 days',
      isCorrect: true
    },
    {
      id: 'B',
      text: 'IV potassium chloride 40 mEq over 2 hours; all hypokalemia requires IV repletion',
      isCorrect: false
    },
    {
      id: 'C',
      text: 'No treatment is needed because potassium 3.1 mEq/L is within normal limits',
      isCorrect: false
    },
    {
      id: 'D',
      text: 'Oral potassium citrate is preferred over potassium chloride for diuretic-induced hypokalemia',
      isCorrect: false
    },
    {
      id: 'E',
      text: 'Discontinue hydrochlorothiazide immediately; repletion is unnecessary if the cause is removed',
      isCorrect: false
    }
  ],
  explanation: `
**Correct Answer: A - Oral potassium chloride 40-80 mEq/day in divided doses with repeat labs in 2-3 days**

**Clinical Reasoning:**
This is **mild, asymptomatic hypokalemia** without ECG changes, and the patient can take oral medication. That makes **oral potassium repletion** the preferred route. **Potassium chloride** is the usual formulation for diuretic-related hypokalemia because thiazides commonly produce **chloride-responsive metabolic alkalosis** along with potassium loss.

IV potassium is reserved for patients with **severe hypokalemia**, **ECG changes**, serious symptoms, inability to tolerate oral intake, or ongoing instability.

**Why Others Are Wrong:**
* **B (IV for all hypokalemia):** IV replacement is unnecessary for uncomplicated mild hypokalemia and adds avoidable line-related and infusion-related risk.
* **C (No treatment):** A potassium of **3.1 mEq/L is below normal** and should be corrected, especially with an ongoing diuretic exposure.
* **D (Potassium citrate preferred):** Potassium citrate is more useful in settings like certain renal stone disorders or metabolic acidosis. For thiazide-associated hypokalemia, **potassium chloride** is usually preferred.
* **E (Stop diuretic and do nothing else):** Addressing the cause matters, but the low potassium still needs active repletion and follow-up.
  `,
  references: [
    'Kim MJ, Valerio C, Knobloch GK. Potassium Disorders: Hypokalemia and Hyperkalemia. Am Fam Physician. 2023;107(1):59-70.',
    'Kardalas E, Paschou SA, Anagnostis P, et al. Hypokalemia: A Clinical Update. Endocr Connect. 2018;7(4):R135-R146.',
    'Crop MJ, Hoorn EJ, Lindemans J, Zietse R. Hypokalaemia and Subsequent Hyperkalaemia in Hospitalized Patients. Nephrol Dial Transplant. 2007;22(12):3471-3477.'
  ],
  skillTested: 'Choose oral rather than IV potassium for mild asymptomatic hypokalemia',
  linkedChapter: 'electrolytes',
  verdictOneLineSummary:
    'Mild asymptomatic hypokalemia with a normal ECG is an oral potassium problem, not an IV potassium emergency.'
};
