import { QuizScenario } from '../quizData';

export const case092: QuizScenario = {
  id: 'case-092',
  slug: 'tension-pneumothorax-post-intubation-obstructive-shock',
  title: 'Tension Pneumothorax and Positive Pressure Ventilation',
  category: 'Emergency',
  difficulty: 'Medium',
  vignette: `A 56-year-old man with COPD exacerbation was intubated 10 minutes ago for worsening respiratory failure. Immediately after initiating mechanical ventilation with assist-control mode (tidal volume 500 mL, rate 16, PEEP 5, FiO2 0.60), he becomes acutely hypotensive and tachycardic. His vital signs are: temperature 37.1°C (98.8°F), heart rate 138 bpm, blood pressure 68/42 mmHg (MAP 51 mmHg), respiratory rate set at 16 breaths/min, and oxygen saturation 84% on current ventilator settings. He has a history of COPD and hypertension, takes albuterol and lisinopril, and has no known drug allergies. On examination, he has absent breath sounds on the right side, tracheal deviation to the left, distended neck veins, and difficulty ventilating with high peak airway pressures (45 cmH2O). His right hemithorax appears hyperexpanded.`,
  question: 'What is the MOST appropriate immediate intervention?',
  options: [
    {
      id: 'A',
      text: 'Immediate needle decompression at the 2nd intercostal space, midclavicular line on the right, followed by tube thoracostomy',
      isCorrect: true
    },
    {
      id: 'B',
      text: 'Obtain a stat portable chest X-ray to confirm pneumothorax before intervention',
      isCorrect: false
    },
    {
      id: 'C',
      text: 'Disconnect the ventilator and manually bag ventilate with lower pressures',
      isCorrect: false
    },
    {
      id: 'D',
      text: 'Administer a 1-liter crystalloid bolus and start norepinephrine for hypotension',
      isCorrect: false
    },
    {
      id: 'E',
      text: 'Perform immediate tube thoracostomy without prior needle decompression',
      isCorrect: false
    }
  ],
  explanation: `
**Correct Answer: A - Immediate needle decompression at the 2nd intercostal space, midclavicular line on the right, followed by tube thoracostomy**

**Clinical Reasoning:**
This patient has **tension pneumothorax**, a life-threatening form of obstructive shock that requires immediate intervention without waiting for imaging confirmation. The classic presentation includes: (1) **sudden cardiovascular collapse** after positive pressure ventilation, (2) **absent breath sounds** on the affected side, (3) **tracheal deviation** away from the affected side, (4) **jugular venous distension** (JVD) from impaired venous return, (5) **hypoxia and difficulty ventilating** with high peak pressures, and (6) **hyperresonance to percussion** on the affected side. Tension pneumothorax occurs when air accumulates in the pleural space under pressure, collapsing the ipsilateral lung and shifting the mediastinum, which compresses the contralateral lung, kinks the great vessels (particularly the vena cava), and dramatically reduces venous return and cardiac output. **Immediate needle decompression** is the first-line emergency intervention, performed at the **2nd intercostal space, midclavicular line** (or alternatively 4th-5th intercostal space, anterior axillary line). This converts the tension pneumothorax to a simple pneumothorax and provides immediate hemodynamic relief. A **14-16 gauge angiocatheter** should be inserted perpendicular to the chest wall, and a rush of air confirms the diagnosis. Needle decompression is temporizing and must be followed by **definitive tube thoracostomy**.

**Why Others are Wrong:**
* **B (Obtain chest X-ray first):** Tension pneumothorax is a **clinical diagnosis** that requires immediate intervention. Delaying treatment to obtain imaging in a hemodynamically unstable patient is contraindicated and can result in cardiac arrest. The combination of sudden shock after positive pressure ventilation, absent breath sounds, tracheal deviation, and JVD is sufficient for diagnosis.
* **C (Disconnect ventilator and bag ventilate):** While reducing airway pressures might seem logical, this will not relieve the tension pneumothorax. The air is already trapped in the pleural space under pressure and must be evacuated. Disconnecting the ventilator may temporarily reduce further air accumulation but will not reverse the existing tension physiology and will worsen hypoxia.
* **D (Fluids and vasopressors):** The primary problem is mechanical obstruction to venous return, not hypovolemia or vasodilation. While fluids might provide transient improvement by increasing preload, they will not address the underlying tension pneumothorax and will delay definitive treatment.
* **E (Tube thoracostomy without needle decompression):** While tube thoracostomy is the definitive treatment, it takes longer to perform than needle decompression (typically 3-5 minutes vs. 30-60 seconds). In a patient with severe hemodynamic compromise, the immediate relief provided by needle decompression can be life-saving and should be performed first.
  `,
  references: [
    'Roberts DJ, Leigh-Smith S, Faris PD, et al. Clinical manifestations of tension pneumothorax: protocol for a systematic review and meta-analysis. Syst Rev. 2014;3:3.',
    'Leigh-Smith S, Harris T. Tension pneumothorax--time for a re-think? Emerg Med J. 2005;22(1):8-16.',
    'Harcke HT, Pearse LA, Levy AD, et al. Chest wall thickness in military personnel: implications for needle thoracentesis in tension pneumothorax. Mil Med. 2007;172(12):1260-1263.',
    'Inaba K, Ives C, McClure K, et al. Radiologic evaluation of alternative sites for needle decompression of tension pneumothorax. Arch Surg. 2012;147(9):813-818.',
    'Wimalasena Y, Kalla I, Pershad S, et al. Needle thoracocentesis in trauma patients: What size needle? Injury. 2019;50(5):1058-1063.'
  ]
};
