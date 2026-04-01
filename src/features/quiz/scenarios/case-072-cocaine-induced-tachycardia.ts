import { QuizScenario } from '../quizData';

export const case072: QuizScenario = {
  id: 'case-072',
  slug: 'cocaine-induced-tachycardia',
  title: 'Cocaine-Induced Tachycardia and Hypertension',
  category: 'Cardiology',
  difficulty: 'Hard',
  vignette:
    'A 32-year-old man is brought to the emergency department about 2 hours after using cocaine at a party. He is agitated, diaphoretic, and complaining of chest tightness. Blood pressure is 198/112 mmHg, heart rate is 142 bpm, temperature is 38.4°C, and oxygen saturation is 98% on room air. He has dilated pupils, tremor, and hyperreflexia. ECG shows sinus tachycardia without ischemic ST-segment changes.',
  question: 'What is the MOST appropriate initial pharmacologic management of this hyperadrenergic state?',
  options: [
    {
      id: 'A',
      text: 'Lorazepam 2 mg IV, repeated and titrated as needed to control agitation and sympathetic excess',
      isCorrect: true
    },
    { id: 'B', text: 'Metoprolol 5 mg IV for primary heart rate and blood pressure control', isCorrect: false },
    { id: 'C', text: 'Esmolol infusion as first-line therapy', isCorrect: false },
    { id: 'D', text: 'Labetalol 20 mg IV as the preferred initial treatment before sedation', isCorrect: false },
    { id: 'E', text: 'Diltiazem 20 mg IV as the primary treatment for the tachycardia', isCorrect: false }
  ],
  explanation: `
**Correct Answer: Lorazepam 2 mg IV, repeated and titrated as needed to control agitation and sympathetic excess**

This patient has **acute cocaine toxicity with a hyperadrenergic state**: agitation, severe hypertension, tachycardia, diaphoresis, hyperthermia, and chest symptoms. The 2023 AHA toxicology update and 2024 ASAM/AAAP stimulant guideline both support **benzodiazepines as first-line therapy** because they reduce central sympathetic outflow and treat the core problem rather than only the downstream vitals.

**Why the other options are wrong:**
- **B and C:** Pure beta-blockers are generally avoided in acute cocaine toxicity because of concern for worsening vasoconstriction and because safer first-line therapy exists.
- **D:** Labetalol may be considered in selected cases if severe hypertension persists after sedation, but it is not the preferred initial step ahead of benzodiazepines.
- **E:** Diltiazem may help some vasospastic or hypertensive presentations, but it is not first-line for the diffuse sympathomimetic syndrome seen here.
  `,
  references: [
    'Lavonas EJ, Akpunonu PD, Arens AM, et al. 2023 American Heart Association Focused Update on the Management of Patients With Cardiac Arrest or Life-Threatening Toxicity Due to Poisoning. Circulation. 2023;148(16):e149-e184. doi:10.1161/CIR.0000000000001161.',
    'The ASAM/AAAP Clinical Practice Guideline on the Management of Stimulant Use Disorder. J Addict Med. 2024;18(1S Suppl 1):1-56. doi:10.1097/ADM.0000000000001299.',
    'Havakuk O, Rezkalla SH, Kloner RA. The Cardiovascular Effects of Cocaine. J Am Coll Cardiol. 2017;70(1):101-113. doi:10.1016/j.jacc.2017.05.014.'
  ]
};
