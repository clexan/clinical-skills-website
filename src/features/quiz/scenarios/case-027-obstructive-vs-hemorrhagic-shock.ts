import { QuizScenario } from '../quizData';

export const case027: QuizScenario = {
  id: 'case-027',
  slug: 'obstructive-vs-hemorrhagic-shock-tension-pneumothorax',
  title: 'The Hypotensive Polytrauma Patient',
  category: 'Trauma',
  difficulty: 'Hard',
  vignette: "A 34-year-old female is brought to the trauma bay after a high-speed motor vehicle collision where she was an unrestrained driver. She is agitated and dyspneic. Vital signs: HR 132 bpm, BP 82/58 mmHg, RR 32/min, SpO2 88% on non-rebreather mask, temperature 36.5°C. SAMPLE history is limited due to her agitation, but EMS reports she was initially alert at scene with progressive deterioration en route. Primary survey reveals decreased breath sounds on the right hemithorax with hyperresonance to percussion, tracheal deviation to the left, and distended neck veins. Her chest wall shows paradoxical movement on the right with multiple rib fractures palpable. Pelvis is stable. Abdomen is soft without obvious distension. Extremities show no gross deformity. Two large-bore IVs are placed. FAST exam shows no pericardial effusion and no free fluid in the abdomen. Initial labs are pending. The patient's shock index is 1.61.",
  question: "What is the primary etiology of this patient's shock and the most appropriate immediate intervention?",
  options: [
    {
      id: "A",
      text: "Hemorrhagic shock from occult intra-abdominal bleeding; activate massive transfusion protocol and obtain CT chest/abdomen/pelvis",
      isCorrect: false
    },
    {
      id: "B",
      text: "Obstructive shock from tension pneumothorax; perform immediate needle decompression followed by tube thoracostomy",
      isCorrect: true
    },
    {
      id: "C",
      text: "Cardiogenic shock from myocardial contusion; obtain 12-lead ECG and troponin, initiate inotropic support",
      isCorrect: false
    },
    {
      id: "D",
      text: "Hemorrhagic shock from massive hemothorax; perform tube thoracostomy and prepare for thoracotomy if >1500 mL immediate output",
      isCorrect: false
    },
    {
      id: "E",
      text: "Neurogenic shock from cervical spine injury; administer vasopressors and obtain cervical spine imaging",
      isCorrect: false
    }
  ],
  explanation: "This patient has obstructive shock from tension pneumothorax, not hemorrhagic shock. The classic triad of decreased breath sounds, hyperresonance, and tracheal deviation combined with distended neck veins (indicating impaired venous return) and hemodynamic instability confirms the diagnosis. Tension pneumothorax causes obstructive shock by compressing the vena cava and heart, reducing venous return and cardiac output. The immediate life-saving intervention is needle decompression (5th intercostal space, midaxillary line or 2nd intercostal space, midclavicular line) followed by definitive tube thoracostomy. This is a clinical diagnosis requiring no imaging before intervention. Option A is incorrect because the FAST exam is negative for hemoperitoneum, and the clinical presentation (unilateral decreased breath sounds, hyperresonance, tracheal deviation, JVD) is pathognomonic for tension pneumothorax, not hemorrhagic shock. Delaying treatment for CT would be fatal. Option C is incorrect because myocardial contusion typically presents with arrhythmias or ECG changes (similar to MI patterns) rather than unilateral chest findings and tracheal deviation. JVD in cardiogenic shock results from pump failure, not mechanical compression. Option D is a critical distractor—massive hemothorax can cause hemorrhagic shock and would show decreased breath sounds, but it presents with dullness to percussion (not hyperresonance), no tracheal deviation, and flat neck veins (due to hypovolemia). Hemothorax would also show fluid on FAST in the thoracic views. Option E is incorrect because neurogenic shock presents with hypotension and carriage (loss of sympathetic tone), not tachycardia. Key Teaching Points: (1) Tension pneumothorax is obstructive shock, not hemorrhagic—distinguish by clinical signs (hyperresonance, tracheal deviation, JVD). (2) Hemothorax vs. pneumothorax: dullness vs. hyperresonance to percussion is the key differentiator. (3) Tension pneumothorax is a clinical diagnosis—never delay treatment for imaging. (4) High shock index with JVD suggests obstructive or cardiogenic shock, not hypovolemic/hemorrhagic. (5) In polytrauma, systematically evaluate for all shock etiologies using ABCDE approach.",
  references: [
    "American College of Surgeons Committee on Trauma. ATLS Advanced Trauma Life Support, 10th Edition. 2018.",
    "Roberts DJ, et al. Tension pneumothorax: recognition and management in the emergency department. Emerg Med Pract. 2015;17(5):1-24."
  ]
};
