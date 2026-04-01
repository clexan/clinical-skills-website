import { QuizScenario } from '../quizData';

export const case082: QuizScenario = {
  id: 'case-082',
  slug: 'septic-shock-first-line-vasopressor-norepinephrine',
  title: 'First-Line Vasopressor in Septic Shock',
  category: 'Emergency',
  difficulty: 'Medium',
  vignette: `A 52-year-old man with suspected intra-abdominal sepsis secondary to perforated diverticulitis has received a 30 mL/kg crystalloid bolus (approximately 2.5 liters) over the past hour. Despite adequate fluid resuscitation, his vital signs are: temperature 38.4°C (101.1°F), heart rate 108 bpm, blood pressure 78/48 mmHg (MAP 58 mmHg), respiratory rate 22 breaths/min, and oxygen saturation 95% on 2L nasal cannula. His lactate remains elevated at 4.1 mmol/L. He has received broad-spectrum antibiotics and blood cultures have been obtained. He has a history of hypertension and takes amlodipine. He has no known drug allergies. On examination, he has a rigid abdomen with rebound tenderness. Urine output has been 15 mL over the past hour. You determine that vasopressor support is needed.`,
  question: 'Which vasopressor is the MOST appropriate first-line agent for this patient?',
  options: [
    {
      id: 'A',
      text: 'Norepinephrine targeting a mean arterial pressure (MAP) of 65 mmHg',
      isCorrect: true
    },
    {
      id: 'B',
      text: 'Dopamine starting at renal-dose (2-5 mcg/kg/min) to improve urine output',
      isCorrect: false
    },
    {
      id: 'C',
      text: 'Phenylephrine as a pure alpha-agonist to avoid tachycardia',
      isCorrect: false
    },
    {
      id: 'D',
      text: 'Epinephrine as the most potent vasopressor for severe hypotension',
      isCorrect: false
    },
    {
      id: 'E',
      text: 'Vasopressin as monotherapy given its effectiveness in distributive shock',
      isCorrect: false
    }
  ],
  explanation: `
**Correct Answer: A - Norepinephrine targeting a mean arterial pressure (MAP) of 65 mmHg**

**Clinical Reasoning:**
**Norepinephrine is the first-line vasopressor for septic shock** according to the Surviving Sepsis Campaign 2021 guidelines. This recommendation is based on multiple randomized controlled trials demonstrating superior outcomes compared to other vasopressors. Norepinephrine has both **alpha-1 adrenergic effects** (peripheral vasoconstriction, increasing systemic vascular resistance and blood pressure) and **beta-1 adrenergic effects** (modest positive inotropy and chronotropy), making it ideal for the distributive shock physiology of sepsis. The initial MAP target is **65 mmHg**, which has been shown to be appropriate for most patients. Higher targets (75-85 mmHg) have not demonstrated mortality benefit in general septic shock populations, though individualization may be needed for patients with chronic hypertension. Norepinephrine should be initiated when hypotension persists during or after initial fluid resuscitation. This patient has received adequate initial fluid resuscitation (30 mL/kg) and remains hypotensive with evidence of end-organ hypoperfusion (oliguria, elevated lactate), making vasopressor initiation appropriate.

**Why Others are Wrong:**
* **B (Dopamine at "renal dose"):** Dopamine is no longer recommended as a first-line vasopressor due to increased arrhythmia risk and higher mortality compared to norepinephrine in the SOAP II trial. Additionally, "renal-dose" dopamine (2-5 mcg/kg/min) has been definitively shown to provide no renal protective benefit and is not recommended by any major guidelines.
* **C (Phenylephrine):** Phenylephrine is a pure alpha-1 agonist without beta effects, causing vasoconstriction without inotropy. It may decrease cardiac output through reflex bradycardia and increased afterload, making it inferior to norepinephrine in septic shock. It is reserved for situations where tachyarrhythmias preclude use of agents with beta-agonist activity.
* **D (Epinephrine as first-line):** While epinephrine is potent, it is not recommended as a first-line agent. Epinephrine has more pronounced beta-2 effects causing vasodilation in some vascular beds, may worsen lactate levels through increased aerobic glycolysis, and is associated with more tachycardia and arrhythmias. It is typically reserved for refractory shock or specific situations (e.g., anaphylaxis).
* **E (Vasopressin monotherapy):** Vasopressin should not be used as a single initial vasopressor. It is recommended as a second-line agent added to norepinephrine to raise MAP or decrease norepinephrine requirements. The VASST trial showed vasopressin was equivalent to norepinephrine but not superior, and it is typically used adjunctively.
  `,
  references: [
    'Evans L, Rhodes A, Alhazzani W, et al. Surviving Sepsis Campaign: International Guidelines for Management of Sepsis and Septic Shock 2021. Crit Care Med. 2021;49(11):e1063-e1143.',
    'De Backer D, Biston P, Devriendt J, et al. Comparison of dopamine and norepinephrine in the treatment of shock. N Engl J Med. 2010;362(9):779-789.',
    'Asfar P, Meziani F, Hamel JF, et al. High versus low blood-pressure target in patients with septic shock. N Engl J Med. 2014;370(17):1583-1593.',
    'Bellomo R, Chapman M, Finfer S, et al. Low-dose dopamine in patients with early renal dysfunction: a placebo-controlled randomised trial. Lancet. 2000;356(9248):2139-2143.',
    'Russell JA, Walley KR, Singer J, et al. Vasopressin versus norepinephrine infusion in patients with septic shock. N Engl J Med. 2008;358(9):877-887.'
  ]
};
