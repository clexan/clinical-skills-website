import { QuizScenario } from '../quizData';

export const case086: QuizScenario = {
  id: 'case-086',
  slug: 'peripheral-norepinephrine-administration-safety',
  title: 'Peripheral Vasopressor Administration',
  category: 'Emergency',
  difficulty: 'Medium',
  vignette: `A 38-year-old man presents to a rural ED with fever, altered mental status, and hypotension. He is diagnosed with meningococcal septic shock. His vital signs are: temperature 39.6°C (103.3°F), heart rate 132 bpm, blood pressure 72/44 mmHg (MAP 53 mmHg), respiratory rate 26 breaths/min, and oxygen saturation 92% on non-rebreather mask. He has received 30 mL/kg crystalloid bolus without improvement in blood pressure. He has two 18-gauge peripheral IVs in place. The ED physician wants to start norepinephrine but is concerned because central venous access has not yet been established. The nearest intensivist is 20 minutes away, and the patient is too unstable for immediate transfer. He has no significant past medical history and takes no medications. On examination, he has a purpuric rash and is obtunded.`,
  question: 'What is the MOST appropriate approach to vasopressor administration in this patient?',
  options: [
    {
      id: 'A',
      text: 'Initiate norepinephrine through a peripheral IV with close monitoring while arranging for central access',
      isCorrect: true
    },
    {
      id: 'B',
      text: 'Delay vasopressor initiation until central venous access is established to avoid extravasation injury',
      isCorrect: false
    },
    {
      id: 'C',
      text: 'Use phenylephrine peripherally instead of norepinephrine as it is safer for peripheral administration',
      isCorrect: false
    },
    {
      id: 'D',
      text: 'Administer push-dose epinephrine boluses until central access can be obtained',
      isCorrect: false
    },
    {
      id: 'E',
      text: 'Continue fluid resuscitation with an additional 2-3 liters before considering vasopressors',
      isCorrect: false
    }
  ],
  explanation: `
**Correct Answer: A - Initiate norepinephrine through a peripheral IV with close monitoring while arranging for central access**

**Clinical Reasoning:**
This patient has life-threatening septic shock (likely meningococcemia based on fever, altered mental status, hypotension, and purpuric rash) with severe hypotension (MAP 53 mmHg) despite adequate fluid resuscitation. **Peripheral administration of norepinephrine is safe and appropriate** when central access is not immediately available and should not be delayed. Multiple studies and guidelines now support peripheral norepinephrine administration as a temporizing measure or even for extended periods. A 2019 systematic review and meta-analysis found that peripheral norepinephrine administration had a low rate of complications (3.4% incidence of any adverse event, with most being minor), and serious extravasation injuries were rare when proper precautions were taken. The Surviving Sepsis Campaign 2021 guidelines acknowledge that vasopressors may be administered peripherally when needed. **Key safety measures** include: (1) using a large-bore peripheral IV in a large vein (antecubital preferred over hand/wrist), (2) close monitoring of the IV site every 15-30 minutes, (3) using the lowest effective concentration, and (4) establishing central access as soon as feasible. In this critically ill patient with MAP 53 mmHg, delaying vasopressor therapy to wait for central access would be harmful. Peripheral norepinephrine should be started immediately while simultaneously arranging for central line placement.

**Why Others are Wrong:**
* **B (Delay until central access):** Delaying vasopressor therapy in a patient with MAP 53 mmHg and septic shock is dangerous and increases mortality. Each hour of delay in achieving adequate MAP increases the risk of irreversible organ damage and death. The time required to obtain central access (potentially 30-60 minutes or longer in a difficult patient) is unacceptable when peripheral access is available.
* **C (Phenylephrine peripherally instead):** There is no evidence that phenylephrine is safer than norepinephrine for peripheral administration. In fact, phenylephrine is a less appropriate choice for septic shock because it is a pure alpha-agonist without the beneficial beta-1 effects of norepinephrine, and may decrease cardiac output. The choice of vasopressor should be based on clinical appropriateness, not route of administration. Norepinephrine is the first-line agent regardless of access.
* **D (Push-dose epinephrine boluses):** Push-dose pressors (typically epinephrine 10 mcg or phenylephrine 100-200 mcg boluses) are used for transient hypotension during procedures or induction, not for sustained vasopressor support in septic shock. This patient needs continuous vasopressor infusion. Repeated boluses would be impractical, unpredictable, and potentially dangerous (risk of severe hypertension, arrhythmias, myocardial ischemia).
* **E (Additional 2-3 liters of fluid):** This patient has already received appropriate initial fluid resuscitation (30 mL/kg) per sepsis guidelines. Administering an additional 2-3 liters without evidence of fluid responsiveness risks volume overload without hemodynamic benefit. The patient has persistent shock despite adequate initial resuscitation, which is the definition of vasopressor-requiring septic shock. Further fluid should only be given if there is evidence of fluid responsiveness (passive leg raise, pulse pressure variation), and vasopressors should not be delayed.
  `,
  references: [
    'Evans L, Rhodes A, Alhazzani W, et al. Surviving Sepsis Campaign: International Guidelines for Management of Sepsis and Septic Shock 2021. Crit Care Med. 2021;49(11):e1063-e1143.',
    'Loubani OM, Green RS. A systematic review of extravasation and local tissue injury from administration of vasopressors through peripheral intravenous catheters and central venous catheters. J Crit Care. 2015;30(3):653.e9-17.',
    'Tian DH, Smyth C, Keijzers G, et al. Safety of peripheral administration of vasopressor medications: A systematic review. Emerg Med Australas. 2020;32(2):220-227.',
    'Cardenas-Garcia J, Schaub KF, Belchikov YG, et al. Safety of peripheral intravenous administration of vasoactive medication. J Hosp Med. 2015;10(9):581-585.',
    'Medlej K, Kazzi AA, El Hajj Chehade A, et al. Computation and analysis of the risk of peripheral intravenous catheter failure and complications in the administration of different antibiotics and vasoactive drugs. Drug Deliv. 2020;27(1):515-522.'
  ]
};
