import { QuizScenario } from '../quizData';

export const case094: QuizScenario = {
  id: 'case-094',
  slug: 'balanced-crystalloids-vs-normal-saline-in-sepsis',
  title: 'Crystalloid Selection in Sepsis Resuscitation',
  category: 'Emergency',
  difficulty: 'Medium',
  vignette: `A 52-year-old man with septic shock from perforated diverticulitis is undergoing aggressive fluid resuscitation in the emergency department. He has received 3 liters of 0.9% normal saline over the past 2 hours. Current labs show sodium 142 mEq/L, potassium 4.2 mEq/L, chloride 118 mEq/L (normal 96-106), bicarbonate 16 mEq/L, and lactate 4.1 mmol/L. Arterial blood gas shows pH 7.24. The resident asks which crystalloid should be used for ongoing resuscitation.`,
  question: 'Based on current guidelines and evidence, which fluid is MOST appropriate for continued resuscitation in this patient?',
  options: [
    {
      id: 'A',
      text: "Balanced crystalloid (e.g., lactated Ringer's or Plasma-Lyte) for the remainder of resuscitation",
      isCorrect: true
    },
    {
      id: 'B',
      text: 'Continue 0.9% normal saline as there is no proven mortality difference',
      isCorrect: false
    },
    {
      id: 'C',
      text: '5% albumin for superior volume expansion',
      isCorrect: false
    },
    {
      id: 'D',
      text: 'Sodium bicarbonate infusion to correct the acidosis',
      isCorrect: false
    },
    {
      id: 'E',
      text: '6% hydroxyethyl starch for more sustained intravascular volume',
      isCorrect: false
    }
  ],
  explanation: `
**Correct Answer: A - Balanced crystalloid (e.g., lactated Ringer's or Plasma-Lyte) for the remainder of resuscitation**

**Clinical Reasoning:**
This patient has developed **hyperchloremic metabolic acidosis** after receiving several liters of normal saline. The Surviving Sepsis Campaign suggests using **balanced crystalloids instead of normal saline** for resuscitation. Reviews published after the guideline continue to favor balanced solutions in sepsis, especially when large volumes are being used.

Balanced crystalloids avoid the chloride load associated with normal saline and may reduce complications such as hyperchloremic acidosis, renal vasoconstriction, and acute kidney injury. In sepsis subgroups from large trials, balanced crystalloids have shown outcome signals favoring their use, and in this specific patient they are especially appropriate because normal saline has already contributed to a worsening metabolic profile.

**Why Others Are Wrong:**
* **B (Continue normal saline):** Even where overall mortality differences are modest, this patient already has **saline-associated hyperchloremic acidosis**, so continuing saline is the wrong physiologic choice.
* **C (Albumin):** Albumin may be considered in selected patients after large crystalloid volumes, but it is **not the routine first choice** for ongoing initial resuscitation.
* **D (Bicarbonate infusion):** The better next step is to **remove the driver of the acidosis** by switching away from chloride-rich saline, not to reflexively add bicarbonate.
* **E (Hydroxyethyl starch):** Starch solutions are **contraindicated in sepsis** because they increase harm.
  `,
  references: [
    'Evans L, Rhodes A, Alhazzani W, et al. Surviving Sepsis Campaign: International Guidelines for Management of Sepsis and Septic Shock 2021. Crit Care Med. 2021;49(11):e1063-e1143.',
    'Meyer NJ, Prescott HC. Sepsis and Septic Shock. N Engl J Med. 2024;391(22):2133-2146.',
    'Zampieri FG, Bagshaw SM, Semler MW. Fluid Therapy for Critically Ill Adults With Sepsis: A Review. JAMA. 2023;329(22):1967-1980.'
  ],
  skillTested: 'Choose balanced crystalloids over normal saline for ongoing sepsis resuscitation',
  linkedChapter: 'sepsis',
  verdictOneLineSummary:
    'In sepsis, especially after saline-induced hyperchloremic acidosis, switch ongoing resuscitation to a balanced crystalloid.'
};
