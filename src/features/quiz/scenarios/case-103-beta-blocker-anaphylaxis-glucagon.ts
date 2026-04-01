import { QuizScenario } from '../quizData';

export const case103: QuizScenario = {
  id: 'case-103',
  slug: 'beta-blocker-associated-anaphylaxis-glucagon',
  title: 'Beta-Blocker Associated Refractory Anaphylaxis',
  category: 'Emergency',
  difficulty: 'Hard',
  vignette: `A 68-year-old man with a history of coronary artery disease and atrial fibrillation develops anaphylaxis after a bee sting while gardening. EMS administered IM epinephrine 0.5 mg en route. In the ED, he has received two additional doses of IM epinephrine 0.5 mg at 5-minute intervals, IV diphenhydramine 50 mg, IV methylprednisolone 125 mg, and 3 liters of crystalloid. His vital signs remain: temperature 36.8 C (98.2 F), heart rate 58 bpm, blood pressure 68/40 mmHg (MAP 49 mmHg), respiratory rate 26 breaths/min, and oxygen saturation 91% on 100% FiO2 via non-rebreather. His home medications include metoprolol succinate 100 mg daily, lisinopril, atorvastatin, and apixaban. He has a known allergy to penicillin. On examination, he has diffuse urticaria, facial angioedema, bilateral wheezing, and cool mottled extremities. Notably, despite three doses of epinephrine, his heart rate has remained in the 55-62 bpm range throughout resuscitation.`,
  question: 'Which medication is MOST appropriate to address this patient\'s refractory anaphylaxis?',
  options: [
    {
      id: 'A',
      text: 'IV glucagon 1-5 mg bolus followed by infusion at 5-15 mcg/min',
      isCorrect: true
    },
    {
      id: 'B',
      text: 'IV atropine 1 mg to increase heart rate and improve cardiac output',
      isCorrect: false
    },
    {
      id: 'C',
      text: 'IV calcium chloride 1 g to overcome beta-blocker-induced myocardial depression',
      isCorrect: false
    },
    {
      id: 'D',
      text: 'High-dose IV epinephrine infusion at 1-2 mcg/kg/min to overcome beta-blockade',
      isCorrect: false
    },
    {
      id: 'E',
      text: 'IV isoproterenol infusion for pure beta-agonist effect without alpha activity',
      isCorrect: false
    }
  ],
  explanation: `
**Correct Answer: A - IV glucagon 1-5 mg bolus followed by infusion at 5-15 mcg/min**

**Clinical Reasoning:**
This is classic **beta-blocker-associated refractory anaphylaxis**. The major clue is the **inappropriately low-normal heart rate** despite profound distributive shock. Metoprolol is blunting the beta-adrenergic effects of both endogenous catecholamines and administered epinephrine, reducing chronotropy, inotropy, and bronchodilation.

**Glucagon** is the key rescue medication because it increases intracellular cAMP through a **non-beta-receptor pathway**. That lets it bypass beta-blockade and improve heart rate and contractility. It should be used **in addition to ongoing epinephrine-based anaphylaxis care**, not instead of it.

**Why Others Are Wrong:**
* **B (Atropine):** Atropine may raise heart rate modestly, but it does not bypass beta-blockade or fix the impaired inotropy and refractory shock.
* **C (Calcium chloride):** Calcium is a rescue therapy for **calcium channel blocker toxicity**, not standard treatment for beta-blocker associated anaphylaxis.
* **D (High-dose epinephrine):** Escalating to very high epinephrine doses risks ischemia, arrhythmia, and excessive alpha effects, especially in a patient with coronary disease.
* **E (Isoproterenol):** A pure beta-agonist is a poor choice when beta receptors are already blocked, and it offers no alpha-mediated vasoconstriction for shock.
  `,
  references: [
    'Thomas M, Crawford I. Best evidence topic report. Glucagon infusion in refractory anaphylactic shock in patients on beta-blockers. Emerg Med J. 2005;22(4):272-273.',
    'Lieberman P, Nicklas RA, Randolph C, et al. Anaphylaxis-a practice parameter update 2015. Ann Allergy Asthma Immunol. 2015;115(5):341-384.',
    'Campbell RL, Li JT, Nicklas RA, et al. Emergency department diagnosis and treatment of anaphylaxis: a practice parameter. Ann Allergy Asthma Immunol. 2014;113(6):599-608.',
    'Lang DM. Do beta-blockers really enhance the risk of anaphylaxis during immunotherapy? Curr Allergy Asthma Rep. 2008;8(1):37-44.',
    'White JL, Greger KC, Lee S, et al. Patients taking beta-blockers do not require increased doses of epinephrine for anaphylaxis. J Allergy Clin Immunol Pract. 2018;6(5):1553-1558.'
  ],
  skillTested: 'Recognize beta-blocker associated refractory anaphylaxis and use glucagon',
  linkedChapter: 'anaphylaxis',
  verdictOneLineSummary:
    'Refractory anaphylaxis with paradoxic bradycardia in a patient on metoprolol should trigger glucagon, which bypasses beta-receptor blockade.'
};
