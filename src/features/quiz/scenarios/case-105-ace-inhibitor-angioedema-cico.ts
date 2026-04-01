import { QuizScenario } from '../quizData';

export const case105: QuizScenario = {
  id: 'case-105',
  slug: 'ace-inhibitor-angioedema-cico-cricothyrotomy',
  title: 'ACE Inhibitor Angioedema With Airway Collapse',
  category: 'Emergency',
  difficulty: 'Hard',
  vignette: `A 52-year-old man with a history of hypertension presents to the ED with rapidly progressive facial swelling and difficulty breathing after taking his first dose of a newly prescribed ACE inhibitor (lisinopril) 2 hours ago. His vital signs are: temperature 37.1 C (98.8 F), heart rate 112 bpm, blood pressure 142/88 mmHg, respiratory rate 28 breaths/min, and oxygen saturation 88% on 15L non-rebreather mask. He has received IM epinephrine 0.5 mg x 2 doses, IV diphenhydramine 50 mg, IV methylprednisolone 125 mg, and nebulized epinephrine without improvement in his airway symptoms. On examination, he has massive tongue swelling protruding from his mouth, severe lip and uvula edema, inspiratory stridor, and is using accessory muscles. He is sitting upright, drooling, and unable to speak clearly. Direct laryngoscopy is attempted but the tongue is so edematous that the epiglottis cannot be visualized. Video laryngoscopy also fails to provide a view of the glottis. Bag-mask ventilation is attempted but is ineffective due to the severe oropharyngeal edema.`,
  question: 'What is the MOST appropriate next step in airway management?',
  options: [
    {
      id: 'A',
      text: 'Perform emergent surgical cricothyrotomy',
      isCorrect: true
    },
    {
      id: 'B',
      text: 'Attempt fiberoptic intubation through the nasal route',
      isCorrect: false
    },
    {
      id: 'C',
      text: 'Administer additional doses of IM epinephrine and nebulized racemic epinephrine',
      isCorrect: false
    },
    {
      id: 'D',
      text: 'Attempt intubation with a bougie using external laryngeal manipulation',
      isCorrect: false
    },
    {
      id: 'E',
      text: 'Place a supraglottic airway device as a bridge to definitive airway',
      isCorrect: false
    }
  ],
  explanation: `
**Correct Answer: A - Perform emergent surgical cricothyrotomy**

**Clinical Reasoning:**
This is a **cannot intubate, cannot oxygenate** airway emergency. Direct laryngoscopy has failed, video laryngoscopy has failed, and bag-mask ventilation is ineffective. In that setting, the correct next move is **emergent surgical cricothyrotomy**.

This case also illustrates an important distinction: **ACE inhibitor angioedema is bradykinin-mediated**, not classic histamine-mediated anaphylaxis. That explains why epinephrine, antihistamines, and corticosteroids have not reversed the edema. Those therapies may be attempted early when the diagnosis is uncertain, but once the patient is in a true CICO crisis, definitive airway access comes before additional medical rescue attempts.

**Why Others Are Wrong:**
* **B (Fiberoptic nasal intubation):** Too slow and unlikely to succeed in a rapidly collapsing airway with massive supraglottic edema.
* **C (More epinephrine/nebulized therapy):** This delays definitive airway control and will not rescue a patient already in CICO physiology.
* **D (Bougie attempt):** Bougie-assisted rescue requires at least some glottic target. Here, the glottis cannot be visualized at all.
* **E (Supraglottic airway):** A supraglottic device sits above the larynx and is unlikely to bypass this severe supraglottic obstruction.
  `,
  references: [
    'Bernstein JA, Cremonesi P, Hoffmann TK, et al. Angioedema in the emergency department: a practical guide to differential diagnosis and management. Int J Emerg Med. 2017;10(1):15.',
    'Banerji A, Clark S, Blanda M, et al. Multicenter study of patients with angiotensin-converting enzyme inhibitor-induced angioedema who present to the emergency department. Ann Allergy Asthma Immunol. 2008;100(4):327-332.',
    'Frerk C, Mitchell VS, McNarry AF, et al. Difficult Airway Society 2015 guidelines for management of unanticipated difficult intubation in adults. Br J Anaesth. 2015;115(6):827-848.',
    'Apfelbaum JL, Hagberg CA, Caplan RA, et al. Practice guidelines for management of the difficult airway: an updated report by the American Society of Anesthesiologists Task Force on Management of the Difficult Airway. Anesthesiology. 2013;118(2):251-270.',
    'Kovacs G, Sowers N. Airway management in trauma. Emerg Med Clin North Am. 2018;36(1):61-84.'
  ],
  skillTested: 'Recognize CICO physiology in severe angioedema and proceed to surgical airway',
  linkedChapter: 'anaphylaxis',
  verdictOneLineSummary:
    'Failed laryngoscopy plus failed bag-mask ventilation in massive angioedema is a surgical airway problem, not a repeat-medication problem.'
};
