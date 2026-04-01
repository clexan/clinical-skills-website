import { QuizScenario } from '../quizData';

export const case007: QuizScenario = {
  id: 'case-007',
  slug: 'food-allergy-epinephrine-prescription',
  title: 'Facial Swelling and Itching After Eating Trail Mix',
  category: 'Emergency',
  difficulty: 'Medium',
  vignette: `
A 22-year-old man comes to the emergency department because of facial swelling and itching all over his body 1 hour after eating some trail mix. He does not have shortness of breath or hoarseness. He has never had a similar episode before. He has asthma treated with an albuterol inhaler, which he uses less than once a month. 

His pulse is 90/min, respirations are 13/min, and blood pressure is 125/80 mm Hg. Pulse oximetry on room air shows an oxygen saturation of 99%. Physical examination shows perioral swelling and urticaria over the face, neck, chest, and fingers of his right hand. There is no swelling of the oropharynx and no audible stridor. The lungs are clear to auscultation bilaterally. 

Treatment with intravenous diphenhydramine is begun. Shortly after, pruritus and swelling improved, and the rash started to fade.
  `,
  question: 'Prior to discharge, which of the following is the most appropriate next step in management?',
  options: [
    { id: 'A', text: 'Measure serum mast-cell tryptase', isCorrect: false },
    { id: 'B', text: 'Perform a patch test', isCorrect: false },
    { id: 'C', text: 'Prescribe epinephrine autoinjector', isCorrect: true },
    { id: 'D', text: 'Advise to carry oral cetirizine at all times', isCorrect: false },
    { id: 'E', text: 'Administer oral prednisone', isCorrect: false }
  ],
  explanation: `
**Correct Answer: (C) Prescribe epinephrine autoinjector**

This patient's presentation is consistent with a **food-induced type I hypersensitivity reaction**. While this specific episode was relatively moderate (no respiratory distress or hypotension), the severity of previous allergic reactions does **not** predict the severity of future reactions. 

**Why an Epinephrine Autoinjector is Essential:**
* **Risk of Anaphylaxis:** Patients with known food allergies are at significant risk of life-threatening anaphylaxis upon re-exposure. Accidental exposure is common.
* **Preparedness:** All patients with a history of a systemic allergic reaction to food should be prescribed an epinephrine autoinjector and provided with an Anaphylaxis Emergency Action Plan.
* **Atopic Triad:** This patient's history of asthma is a known risk factor for more severe allergic reactions.

**Why other options are less appropriate:**
* **Mast-cell tryptase (A):** Low sensitivity for food-triggered reactions and not routinely indicated for diagnosis unless systemic mastocytosis or an unclear cause of anaphylaxis is suspected.
* **Patch test (B):** Used for **Type IV** (delayed) hypersensitivity reactions like contact dermatitis. Food allergies are **Type I** (IgE-mediated) and would be investigated with skin prick tests or serum IgE testing.
* **Oral cetirizine (D):** Antihistamines take approximately 20–60 minutes to work; they are insufficient for treating the rapid onset of life-threatening anaphylaxis.
* **Prednisone (E):** May be used as an adjunct, but this patient has already responded to antihistamines and is asymptomatic. It does not provide the necessary long-term safety net.

The patient should also be referred to an allergist for formal identification of the culprit allergen to ensure future avoidance.
  `,
  references: [
    "AAAAI/ACAAI Anaphylaxis—a 2020 practice parameter update, systematic review, and GRADE analysis.",
    "Sampson HA, et al. Second symposium on the definition and management of anaphylaxis. J Allergy Clin Immunol. 2006."
  ]
};
