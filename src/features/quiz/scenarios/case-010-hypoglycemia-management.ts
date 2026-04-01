import { QuizScenario } from '../quizData';

export const case010: QuizScenario = {
  id: 'case-010',
  slug: 'severe-hypoglycemia-seizure-management',
  title: 'Severe Hypoglycemia and Seizure in a Diabetic Patient',
  category: 'Emergency',
  difficulty: 'Medium',
  vignette: `
A 47-year-old man is brought to the emergency department by paramedics 30 minutes after the onset of nausea, sweating, and palpitations. On the way to the hospital, the patient had an episode of nonbloody vomiting. He had a peripheral intravenous catheter placed to start administration of fluids. 

Two years ago, he was diagnosed with type 2 diabetes mellitus, controlled with basal insulin and metformin. His wife reports that for the past 2 weeks he has been trying to lose weight and has adjusted his diet and activity level; he returned from a run 2 hours ago. 

He appears well-nourished and anxious. His pulse is 105/min and blood pressure is 118/78 mm Hg. He is confused and oriented only to person. Physical examination shows pallor and diaphoresis. His fingerstick blood glucose concentration is 35 mg/dL. Shortly after, the patient loses consciousness and starts shaking.
  `,
  question: 'The most appropriate next step in management is administration of which of the following?',
  options: [
    { id: 'A', text: 'Intravenous vitamin B1 (thiamine)', isCorrect: false },
    { id: 'B', text: 'Intravenous 50% dextrose', isCorrect: true },
    { id: 'C', text: 'Intravenous lorazepam', isCorrect: false },
    { id: 'D', text: 'Intramuscular octreotide', isCorrect: false },
    { id: 'E', text: 'Intramuscular glucagon', isCorrect: false }
  ],
  explanation: `
**Correct Answer: (B) Intravenous 50% dextrose**

This patient presents with **acute severe hypoglycemia** (glucose 35 mg/dL) complicated by neuroglycopenic symptoms (confusion) and a seizure with loss of consciousness. 

**Management Guidelines:**
* **In-Hospital with IV Access:** Intravenous administration of **50% dextrose (D50)** is the treatment of choice for an unconscious or seizing patient when IV access is already established.
* **No IV Access:** Intramuscular, subcutaneous, or intranasal glucagon is the preferred treatment if IV access cannot be obtained quickly.
* **Conscious Patient:** Oral glucose or fast-acting carbohydrates (e.g., fruit juice, candy) should be used if the patient is awake and can swallow safely.

**Why other options are less appropriate:**
* **Glucagon (E):** While it would raise blood glucose, IV dextrose is more rapid and appropriate given the patient **already has a peripheral IV catheter** placed by paramedics.
* **Thiamine (A):** Administered to prevent Wernicke encephalopathy in malnourished/alcoholic patients before glucose, but this patient has no risk factors for thiamine deficiency.
* **Lorazepam (C):** While used for status epilepticus, the priority here is to treat the underlying metabolic cause of the seizure (hypoglycemia).
* **Octreotide (D):** Specifically used for refractory hypoglycemia caused by **sulfonylurea** intoxication, which is not the case here (patient is on insulin/metformin).

The hypoglycemia was likely triggered by the combination of basal insulin use and the recent increase in exercise/low-carb diet.
  `,
  references: [
    "American Diabetes Association. Standards of Care in Diabetes—2023.",
    "Management of hypoglycemia in adults with diabetes mellitus. UpToDate 2024."
  ]
};
