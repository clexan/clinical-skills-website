import { QuizScenario } from '../quizData';

export const case116: QuizScenario = {
  id: 'case-116',
  slug: 'ace-inhibitor-angioedema-vs-anaphylaxis-differential',
  title: 'Differentiating ACE Inhibitor Angioedema from Anaphylaxis',
  category: 'Emergency',
  difficulty: 'Hard',
  vignette: `A 62-year-old man with hypertension and type 2 diabetes presents with progressive lip and tongue swelling over the past 3 hours. He denies any new foods, medications, or environmental exposures. His medications include lisinopril (started 8 months ago), metformin, and atorvastatin. Vital signs show blood pressure 158/92 mmHg, heart rate 78 bpm, respiratory rate 18/min, and oxygen saturation 98% on room air. Physical examination reveals significant swelling of the lips and tongue without uvular edema. Notably, there is no urticaria, pruritus, wheezing, or gastrointestinal symptoms. He appears uncomfortable but is not in respiratory distress.`,
  question: 'What is the MOST likely diagnosis and appropriate initial management?',
  options: [
    {
      id: 'A',
      text: 'ACE inhibitor-induced angioedema; discontinue lisinopril, supportive care, and close airway monitoring',
      isCorrect: true
    },
    {
      id: 'B',
      text: 'Anaphylaxis; administer epinephrine 0.5 mg IM immediately',
      isCorrect: false
    },
    {
      id: 'C',
      text: 'Hereditary angioedema; administer C1 esterase inhibitor concentrate',
      isCorrect: false
    },
    {
      id: 'D',
      text: 'Allergic angioedema; administer diphenhydramine and methylprednisolone',
      isCorrect: false
    },
    {
      id: 'E',
      text: 'Idiopathic angioedema; discharge home with oral antihistamines',
      isCorrect: false
    }
  ],
  explanation: `
**Correct Answer: A - ACE inhibitor-induced angioedema; discontinue lisinopril, supportive care, and close airway monitoring**

**Clinical Reasoning:**
This patient has **classic features of ACE inhibitor-induced angioedema (ACEi-AE)**: isolated angioedema of the lips and tongue, **absence of urticaria or pruritus**, and use of an ACE inhibitor. It is **bradykinin-mediated**, not histamine-mediated, and does not respond to epinephrine, antihistamines, or steroids. The reaction can occur at any time, even after months or years of treatment. Management priorities include permanent discontinuation of the ACE inhibitor and close airway monitoring.

**Why Others are Wrong:**
* **B (Anaphylaxis):** This patient has isolated swelling without urticaria, respiratory distress, GI symptoms, or hypotension. Epinephrine is ineffective for bradykinin-mediated swelling.
* **C (Hereditary Angioedema):** HAE typically presents in childhood/adolescence with a family history. First-time presentation at age 62 while on an ACE inhibitor is much more likely to be drug-induced.
* **D (Allergic Angioedema):** Histamine-mediated allergic reactions are almost always accompanied by urticaria or pruritus.
* **E (Idiopathic/Discharge):** The etiology is likely lisinopril. Discharge is unsafe as tongue involvement can progress to airway obstruction.
  `,
  references: [
    'Shaker MS, Wallace DV, Golden DBK, et al. Anaphylaxis—A 2020 Practice Parameter Update, Systematic Review, and GRADE Analysis. J Allergy Clin Immunol. 2020;145(4):1082-1123.',
    'Cardona V, Ansotegui IJ, Ebisawa M, et al. World Allergy Organization Anaphylaxis Guidance 2020. World Allergy Organ J. 2020;13(10):100472.',
    'Banerji A, Blumenthal KG, Lai KH, Zhou L. Epidemiology of ACE Inhibitor Angioedema Utilizing a Large Electronic Health Record. J Allergy Clin Immunol Pract. 2017;5(3):744-749.'
  ]
};
