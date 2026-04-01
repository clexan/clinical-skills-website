import { QuizScenario } from '../quizData';

export const case080: QuizScenario = {
  id: 'case-080',
  slug: 'urosepsis-multidrug-resistant-empiric-antibiotics',
  title: 'Urosepsis and Multidrug-Resistant Organisms',
  category: 'Emergency',
  difficulty: 'Hard',
  vignette: `A 72-year-old man presents to the ED with fever, chills, and flank pain for 2 days. He appears ill and is shivering. His vital signs are: temperature 39.8°C (103.6°F), heart rate 112 bpm, blood pressure 86/52 mmHg, respiratory rate 20 breaths/min, and oxygen saturation 97% on room air. He has a history of recurrent urinary tract infections, benign prostatic hyperplasia, and underwent cystoscopy 3 weeks ago. His medications include tamsulosin and finasteride. He is allergic to penicillin (rash). On examination, he has right costovertebral angle tenderness. Urinalysis shows pyuria and bacteriuria. Initial lactate is 3.8 mmol/L. Your hospital's antibiogram shows that 35% of E. coli isolates from urine cultures are resistant to fluoroquinolones, and 28% produce extended-spectrum beta-lactamases (ESBLs).`,
  question: 'Which empiric antibiotic regimen is MOST appropriate for this patient?',
  options: [
    {
      id: 'A',
      text: 'Meropenem or piperacillin-tazobactam given the recent instrumentation and high local resistance rates',
      isCorrect: true
    },
    {
      id: 'B',
      text: 'Ciprofloxacin as first-line therapy for urosepsis with plan to adjust based on culture results',
      isCorrect: false
    },
    {
      id: 'C',
      text: 'Ceftriaxone as a third-generation cephalosporin with excellent urinary penetration',
      isCorrect: false
    },
    {
      id: 'D',
      text: 'Aztreonam plus vancomycin to cover both gram-negative and gram-positive organisms',
      isCorrect: false
    },
    {
      id: 'E',
      text: 'Defer antibiotics until urine and blood culture results are available to guide targeted therapy',
      isCorrect: false
    }
  ],
  explanation: `
**Correct Answer: A - Meropenem or piperacillin-tazobactam given the recent instrumentation and high local resistance rates**

**Clinical Reasoning:**
This patient has **urosepsis with septic shock** and multiple risk factors for **multidrug-resistant (MDR) organisms**: recent urologic instrumentation (cystoscopy 3 weeks ago), recurrent UTIs, and presentation from a healthcare setting with high local resistance rates (35% fluoroquinolone resistance, 28% ESBL production). The Surviving Sepsis Campaign 2021 guidelines emphasize that empiric antibiotic selection must account for local resistance patterns, patient-specific risk factors, and infection source. **Carbapenem therapy (meropenem, imipenem) or piperacillin-tazobactam** provides broad-spectrum coverage including ESBL-producing organisms and is appropriate for severe sepsis/septic shock with risk factors for resistance. Piperacillin-tazobactam has excellent activity against most ESBL producers and provides broader gram-negative coverage than third-generation cephalosporins. The penicillin allergy (rash only, not anaphylaxis) represents low risk for cross-reactivity with carbapenems (<1%) and does not contraindicate their use in most cases.

**Why Others are Wrong:**
* **B (Ciprofloxacin):** Fluoroquinolone resistance is 35% in this environment. Using an agent with such high resistance as monotherapy in septic shock is associated with increased mortality.
* **C (Ceftriaxone alone):** Third-generation cephalosporins are ineffective against ESBL-producing organisms (28% prevalence locally). Given the patient's risk factors, ceftriaxone monotherapy is insufficient.
* **D (Aztreonam plus vancomycin):** While aztreonam is appropriate for penicillin-allergic patients and covers gram-negatives, it has poor activity against ESBL producers. Vancomycin is unnecessary as gram-positive coverage is not typically required for urosepsis unless there are specific risk factors (e.g., recent urologic surgery with hardware).
* **E (Defer antibiotics):** Delaying antibiotics in septic shock to await culture results is contraindicated and significantly increases mortality. Empiric broad-spectrum therapy must be initiated within 1 hour, then de-escalated based on cultures.
  `,
  references: [
    'Evans L, Rhodes A, Alhazzani W, et al. Surviving Sepsis Campaign: International Guidelines for Management of Sepsis and Septic Shock 2021. Crit Care Med. 2021;49(11):e1063-e1143.',
    'Gupta K, Hooton TM, Naber KG, et al. International clinical practice guidelines for the treatment of acute uncomplicated cystitis and pyelonephritis in women: A 2010 update by the Infectious Diseases Society of America and the European Society for Microbiology and Infectious Diseases. Clin Infect Dis. 2011;52(5):e103-e120.',
    'Rodríguez-Baño J, Navarro MD, Retamar P, et al. β-Lactam/β-lactam inhibitor combinations for the treatment of bacteremia due to extended-spectrum β-lactamase-producing Escherichia coli: a post hoc analysis of prospective cohorts. Clin Infect Dis. 2012;54(2):167-174.',
    'Paul M, Carrara E, Retamar P, et al. European Society of Clinical Microbiology and Infectious Diseases (ESCMID) guidelines for the treatment of infections caused by multidrug-resistant Gram-negative bacilli (endorsed by European Society of Intensive Care Medicine). Clin Microbiol Infect. 2022;28(4):521-547.'
  ]
};
