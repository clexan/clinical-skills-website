import { QuizScenario } from '../quizData';

export const case115: QuizScenario = {
  id: 'case-115',
  slug: 'refeeding-syndrome-phosphate-potassium-magnesium',
  title: 'Refeeding Syndrome After Aggressive Nutrition',
  category: 'Emergency',
  difficulty: 'Hard',
  vignette: `A 32-year-old woman with severe anorexia nervosa is admitted to the ICU after being found unresponsive at home. She weighs 38 kg with a BMI of 14.2 kg/m2 and has had minimal oral intake for the past 3 weeks. On admission, she was severely dehydrated and hypoglycemic. Initial labs showed sodium 138 mEq/L, potassium 3.4 mEq/L, magnesium 1.6 mg/dL, phosphorus 2.8 mg/dL, and creatinine 1.1 mg/dL. She was resuscitated with IV fluids and dextrose, and total parenteral nutrition was started at full caloric goal. Forty-eight hours later, she develops new confusion, tachycardia, and generalized weakness. Repeat labs show potassium 2.4 mEq/L, magnesium 1.0 mg/dL, phosphorus 0.8 mg/dL, calcium 7.8 mg/dL, and glucose 186 mg/dL. ECG shows sinus tachycardia with prolonged QTc and flattened T waves.`,
  question: 'What is the MOST likely diagnosis, and what is the MOST critical immediate intervention?',
  options: [
    {
      id: 'A',
      text: 'Refeeding syndrome; immediately reduce caloric delivery and aggressively replete phosphorus, potassium, and magnesium intravenously',
      isCorrect: true
    },
    {
      id: 'B',
      text: 'Sepsis from a TPN line infection; obtain blood cultures and start broad-spectrum antibiotics',
      isCorrect: false
    },
    {
      id: 'C',
      text: 'Recurrent hypoglycemia; give D50 and increase dextrose delivery further',
      isCorrect: false
    },
    {
      id: 'D',
      text: 'Adrenal insufficiency; give hydrocortisone 100 mg IV immediately',
      isCorrect: false
    },
    {
      id: 'E',
      text: 'Isolated thiamine deficiency; give thiamine alone without changing nutrition or electrolytes',
      isCorrect: false
    }
  ],
  explanation: `
**Correct Answer: A - Refeeding syndrome; immediately reduce caloric delivery and aggressively replete phosphorus, potassium, and magnesium intravenously**

**Clinical Reasoning:**
This is classic **refeeding syndrome**. The timing is right, the risk factors are extreme, and the biochemical pattern is the hallmark triad of **hypophosphatemia, hypokalemia, and hypomagnesemia** after rapid carbohydrate reintroduction. In starvation, total body stores are depleted even when initial serum values appear near normal. When calories are reintroduced, insulin drives phosphate, potassium, and magnesium into cells, causing dangerous serum depletion.

The most urgent management is to **slow or reduce nutrition** and **replete electrolytes aggressively**, especially **phosphorus**, because severe hypophosphatemia can rapidly cause respiratory failure, hemolysis, cardiac dysfunction, and neurologic deterioration. Thiamine should also be given, but electrolyte correction and refeeding adjustment are the immediate priorities.

**Why Others Are Wrong:**
* **B (Sepsis):** Infection should be considered when appropriate, but the pattern here is much more characteristic of refeeding syndrome than line sepsis.
* **C (More dextrose):** More carbohydrate would worsen the insulin-driven intracellular shifts.
* **D (Adrenal insufficiency):** The electrolyte pattern here is the opposite of classic adrenal insufficiency, which more often causes **hyperkalemia**, not profound hypokalemia and hypophosphatemia.
* **E (Thiamine alone):** Thiamine matters, but by itself it does not address the immediately dangerous electrolyte collapse.
  `,
  references: [
    'Friedli N, Stanga Z, Culkin A, et al. Management and prevention of refeeding syndrome in medical inpatients: an evidence-based and consensus-supported algorithm. Nutrition. 2018;47:13-20.',
    'Mehanna HM, Moledina J, Travis J. Refeeding syndrome: what it is, and how to prevent and treat it. BMJ. 2008;336(7659):1495-1498.',
    'National Institute for Health and Care Excellence. Nutrition support for adults: oral nutrition support, enteral tube feeding and parenteral nutrition. CG32. 2006, updated 2017.',
    'Boateng AA, Sriram K, Meguid MM, Crook M. Refeeding syndrome: treatment considerations based on collective analysis of literature case reports. Nutrition. 2010;26(2):156-167.'
  ],
  skillTested: 'Recognize refeeding syndrome and prioritize electrolyte rescue plus caloric reduction',
  linkedChapter: 'electrolytes',
  verdictOneLineSummary:
    'Severe malnutrition plus rapid feeding plus crashing phosphate, potassium, and magnesium is refeeding syndrome until proven otherwise.'
};
