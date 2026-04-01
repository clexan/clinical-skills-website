import { QuizScenario } from '../quizData';

export const case101: QuizScenario = {
  id: 'case-101',
  slug: 'auto-peep-dynamic-hyperinflation-obstructive-shock-asthma',
  title: 'Auto-PEEP and Dynamic Hyperinflation',
  category: 'Emergency',
  difficulty: 'Hard',
  vignette: `A 28-year-old woman with a history of severe asthma is intubated for status asthmaticus and progressive respiratory failure. She is being ventilated on volume control mode (tidal volume 450 mL, rate 20, PEEP 5, FiO2 1.0). Over the next 5 minutes, her blood pressure drops from 110/70 mmHg to 74/48 mmHg. Her heart rate increases from 110 to 142 bpm. The ventilator shows high peak pressures (52 cmH2O) and plateau pressures (28 cmH2O), and she appears to be triggering additional breaths above the set rate. Her neck veins are distended and she has a barrel-shaped chest. Breath sounds are present bilaterally. A brief disconnection from the ventilator results in immediate improvement in blood pressure to 98/62 mmHg.`,
  question: 'What is the MOST appropriate immediate management strategy?',
  options: [
    {
      id: 'A',
      text: 'Reduce respiratory rate, increase expiratory time, and deepen sedation to prevent auto-PEEP and dynamic hyperinflation',
      isCorrect: true
    },
    {
      id: 'B',
      text: 'Perform bilateral needle decompression for suspected bilateral tension pneumothoraces',
      isCorrect: false
    },
    {
      id: 'C',
      text: 'Increase PEEP to 10-15 cmH2O to match intrinsic PEEP and reduce work of breathing',
      isCorrect: false
    },
    {
      id: 'D',
      text: 'Increase tidal volume to 6-8 mL/kg to improve minute ventilation and reduce hypoxia',
      isCorrect: false
    },
    {
      id: 'E',
      text: 'Administer a 1-liter fluid bolus and start norepinephrine for ventilator-induced hypotension',
      isCorrect: false
    }
  ],
  explanation: `
**Correct Answer: A - Reduce respiratory rate, increase expiratory time, and deepen sedation to prevent auto-PEEP and dynamic hyperinflation**

**Clinical Reasoning:**
This patient has **obstructive shock from auto-PEEP (intrinsic PEEP) and dynamic hyperinflation**, a life-threatening complication of mechanical ventilation in patients with severe airflow obstruction (asthma, COPD). The pathophysiology involves **air trapping**—incomplete exhalation before the next breath leads to progressive accumulation of air in the lungs, increasing intrathoracic pressure, which compresses the vena cava and reduces venous return, causing obstructive shock. Key diagnostic features include: (1) **severe airflow obstruction** (asthma with wheezing), (2) **high respiratory rate** (patient triggering 32 breaths/min despite set rate of 20), (3) **high peak pressures** (52 cmH2O) with relatively normal plateau pressures (28 cmH2O), indicating high airway resistance, (4) **hemodynamic instability** with JVD, (5) **immediate improvement with ventilator disconnection** (the pathognomonic finding). The goal is to maximize **expiratory time** to allow complete exhalation: (1) **reduce respiratory rate**, (2) **reduce tidal volume** if needed, (3) **deepen sedation** to prevent patient-triggered breaths and allow controlled hypoventilation, (4) accept **permissive hypercapnia**.

**Why Others are Wrong:**
* **B (Bilateral needle decompression):** Bilateral breath sounds are present and the pathognomonic finding of improvement with disconnection points to auto-PEEP, not pneumothorax.
* **C (Increase PEEP):** Adding extrinsic PEEP would **increase total PEEP** and worsen hyperinflation and hemodynamic compromise.
* **D (Increase tidal volume):** Increasing tidal volume would **worsen auto-PEEP** by delivering more air that cannot be exhaled in the limited expiratory time.
* **E (Fluids and vasopressors):** These do **not address the underlying mechanical problem** of auto-PEEP. The obstruction to venous return is caused by elevated intrathoracic pressure from air trapping, which must be relieved by ventilator adjustments.
  `,
  references: [
    'Leatherman JW, McArthur C, Shapiro RS. Effect of prolongation of expiratory time on dynamic hyperinflation in mechanically ventilated patients with severe asthma. Crit Care Med. 2004;32(7):1542-1545.',
    'Tuxen DV, Lane S. The effects of ventilatory pattern on hyperinflation, airway pressures, and circulation in mechanical ventilation of patients with severe air-flow obstruction. Am Rev Respir Dis. 1987;136(4):872-879.',
    'Oddo M, Feihl F, Schaller MD, et al. Management of mechanical ventilation in acute severe asthma: practical aspects. Intensive Care Med. 2006;32(4):501-510.',
    'Marini JJ. Dynamic hyperinflation and auto-positive end-expiratory pressure: lessons learned over 30 years. Am J Respir Crit Care Med. 2011;184(7):756-762.',
    'Brenner B, Corbridge T, Kazzi A. Intubation and mechanical ventilation of the asthmatic patient in respiratory failure. Proc Am Thorac Soc. 2009;6(4):371-379.'
  ]
};
