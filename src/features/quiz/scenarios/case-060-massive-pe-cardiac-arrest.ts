import { QuizScenario } from '../quizData';

export const case060: QuizScenario = {
  id: 'case-060',
  slug: 'massive-pe-cardiac-arrest',
  title: 'Massive PE Causing Cardiac Arrest',
  category: 'Emergency',
  difficulty: 'Hard',
  vignette:
    'A 58-year-old woman who underwent total hip replacement 5 days ago suddenly develops severe dyspnea and chest pain on the ward. She becomes hypotensive to 75/45 mmHg and tachycardic to 135 bpm. Bedside echocardiography shows a dilated right ventricle with right-heart strain. Before transfer can occur, she becomes unresponsive and pulseless. The monitor shows organized electrical activity at 120 bpm.',
  question: 'What is the MOST appropriate intervention for this suspected pulmonary embolism causing cardiac arrest?',
  options: [
    { id: 'A', text: 'Administer systemic fibrinolytic therapy and continue CPR with an expectation of prolonged resuscitation', isCorrect: true },
    { id: 'B', text: 'Continue standard ACLS only because recent surgery rules out fibrinolysis', isCorrect: false },
    { id: 'C', text: 'Administer epinephrine and wait for a rhythm change before treating the suspected cause', isCorrect: false },
    { id: 'D', text: 'Obtain CT pulmonary angiography before reperfusion therapy', isCorrect: false },
    { id: 'E', text: 'Administer an IV heparin bolus as definitive therapy', isCorrect: false }
  ],
  explanation: `
**Correct Answer: Administer systemic fibrinolytic therapy and continue CPR with an expectation of prolonged resuscitation**

This is strongly suspicious for **massive PE causing PEA arrest**: recent major orthopedic surgery, abrupt dyspnea/chest pain, shock, and right-heart strain on bedside echo. The 2025 AHA special-circumstances guidance states that for **confirmed PE**, systemic fibrinolysis is reasonable, and for **suspected PE**, systemic fibrinolysis **may be considered**. PE-related arrest also often requires **prolonged CPR** after lytic administration; the AHA cites ESC guidance recommending at least **60 to 90 minutes** in this setting.

**Why the other options are wrong:**
- **B:** Recent surgery increases bleeding risk, but in cardiac arrest from likely PE, the balance can still favor reperfusion therapy.
- **C:** Epinephrine is part of ACLS, but it does not remove the obstructing clot.
- **D:** CT is not practical during active cardiac arrest and would dangerously delay treatment.
- **E:** Heparin prevents clot extension but does not provide immediate reperfusion in arrest.
  `,
  references: [
    'Cao D, Arens AM, Chow SL, et al. Part 10: Adult and Pediatric Special Circumstances of Resuscitation: 2025 American Heart Association Guidelines for Cardiopulmonary Resuscitation and Emergency Cardiovascular Care. Circulation. 2025;152(16_suppl_2):S578-S672. doi:10.1161/CIR.0000000000001380.',
    'Javaudin F, Lascarrou JB, Le Bastard Q, et al. Thrombolysis During Resuscitation for Out-of-Hospital Cardiac Arrest Caused by Pulmonary Embolism Increases 30-Day Survival. Chest. 2019;156(6):1167-1175. doi:10.1016/j.chest.2019.07.015.',
    'Kahn SR, de Wit K. Pulmonary Embolism. N Engl J Med. 2022;387(1):45-57. doi:10.1056/NEJMcp2116489.'
  ]
};
