import { QuizScenario } from '../quizData';

export const case070: QuizScenario = {
  id: 'case-070',
  slug: 'sedation-for-emergency-cardioversion',
  title: 'Sedation for Emergency Cardioversion',
  category: 'Cardiology',
  difficulty: 'Hard',
  vignette:
    'A 52-year-old man presents with sudden palpitations and chest pressure. Blood pressure is 76/48 mmHg and heart rate is 195 bpm. He is awake, alert, and complaining of ischemic chest discomfort. ECG shows a regular narrow-complex tachycardia. He meets criteria for unstable tachycardia and synchronized cardioversion is being prepared.',
  question: 'What is the MOST appropriate approach to sedation for this patient?',
  options: [
    {
      id: 'A',
      text: 'Give brief procedural sedation with a rapid hemodynamically sparing agent such as etomidate if it can be done immediately, then cardiovert without delay',
      isCorrect: true
    },
    {
      id: 'B',
      text: 'Always perform unsedated cardioversion in unstable tachycardia, even when the patient is awake and there is time for a brief sedative',
      isCorrect: false
    },
    {
      id: 'C',
      text: 'Use propofol and wait several minutes to ensure deep sedation before attempting cardioversion',
      isCorrect: false
    },
    {
      id: 'D',
      text: 'Intubate first for airway protection before any cardioversion attempt',
      isCorrect: false
    },
    {
      id: 'E',
      text: 'Give fentanyl alone for analgesia and avoid any sedative-hypnotic or amnestic agent',
      isCorrect: false
    }
  ],
  explanation: `
**Correct Answer: Give brief procedural sedation with a rapid hemodynamically sparing agent such as etomidate if it can be done immediately, then cardiovert without delay**

An awake patient undergoing cardioversion should receive **brief sedation when feasible**, but in an unstable rhythm the shock must **not be delayed**. A rapid agent with relatively modest hemodynamic effect, such as **etomidate**, is a practical choice in this setting. If the patient were to deteriorate further, cardioversion should proceed without waiting for elaborate sedation steps.

**Why the other options are wrong:**
- **B:** This is too absolute. If the patient is awake and a brief sedative can be given immediately, sedation is appropriate.
- **C:** Propofol can worsen hypotension, and waiting several minutes would create an unnecessary and potentially dangerous delay.
- **D:** Routine intubation before emergency cardioversion is not required and would delay definitive treatment.
- **E:** Analgesia alone does not provide adequate sedation or amnesia for cardioversion.
  `,
  references: [
    'Panchal AR, Bartos JA, Cabañas JG, et al. Part 3: Adult Basic and Advanced Life Support: 2020 American Heart Association Guidelines for Cardiopulmonary Resuscitation and Emergency Cardiovascular Care. Circulation. 2020;142(16_suppl_2):S366-S468. doi:10.1161/CIR.0000000000000916.',
    'Beaty EH, Fernando RJ, Jacobs ML, et al. Comparison of Bolus Dosing of Methohexital and Propofol in Elective Direct Current Cardioversion. J Am Heart Assoc. 2022;11(19):e026198. doi:10.1161/JAHA.122.026198.',
    'Bauer J, Beauchamp L, Pavich E. Methohexital for Procedural Sedation of Cardioversions in the Emergency Department. Am J Emerg Med. 2022;58:79-83. doi:10.1016/j.ajem.2022.05.036.'
  ]
};
