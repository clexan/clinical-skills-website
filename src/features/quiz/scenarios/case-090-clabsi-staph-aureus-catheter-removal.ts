import { QuizScenario } from '../quizData';

export const case090: QuizScenario = {
  id: 'case-090',
  slug: 'clabsi-staphylococcus-aureus-catheter-removal',
  title: 'Management of Central Line-Associated Bloodstream Infection',
  category: 'Emergency',
  difficulty: 'Hard',
  vignette: `A 58-year-old man receiving parenteral nutrition through a tunneled central venous catheter for short bowel syndrome develops fever and rigors. The catheter was placed 6 weeks ago. Vital signs show blood pressure 98/62 mmHg, heart rate 108 bpm, and temperature 39.6°C. Blood cultures drawn from the catheter and a peripheral vein both grow Staphylococcus aureus (methicillin-susceptible) at 14 hours and 18 hours, respectively. The catheter exit site appears clean without erythema or purulence. Echocardiogram shows no vegetations. He has limited peripheral vensous access options.`,
  question: 'What is the MOST appropriate management of the central venous catheter?',
  options: [
    {
      id: 'A',
      text: 'Remove the catheter and place a new line at a different site after blood cultures clear',
      isCorrect: true
    },
    {
      id: 'B',
      text: 'Attempt catheter salvage with antibiotic lock therapy given limited access options',
      isCorrect: false
    },
    {
      id: 'C',
      text: 'Exchange the catheter over a guidewire to preserve the existing site',
      isCorrect: false
    },
    {
      id: 'D',
      text: 'Continue IV antibiotics through the existing catheter and reassess in 72 hours',
      isCorrect: false
    },
    {
      id: 'E',
      text: 'Remove the catheter only if blood cultures remain positive after 48 hours of antibiotics',
      isCorrect: false
    }
  ],
  explanation: `
**Correct Answer: A - Remove the catheter and place a new line at a different site after blood cultures clear**

**Clinical Reasoning:**
This patient has a **central line-associated bloodstream infection (CLABSI) with Staphylococcus aureus**—an organism for which catheter removal is strongly recommended. The 2024 IDSA Clinical Practice Guideline on Intravascular Catheter-Related Infections states: "For patients with CRBSI due to **S. aureus**, we recommend **removal of the catheter** rather than catheter retention with systemic antimicrobial therapy with or without antimicrobial lock therapy" (Strong recommendation, moderate-quality evidence).

The 2024 IDSA Guidelines further specify that "for patients with CRBSI due to S. aureus, we recommend **at least 4 weeks of antimicrobial therapy** from the first negative blood culture" and that "catheter removal is associated with lower rates of treatment failure and relapse."

The 2009 IDSA Guidelines (still widely referenced) similarly recommend that "**short-term CVCs should be removed** from patients with CRBSI due to S. aureus" and that "for long-term catheters, removal is recommended for S. aureus CRBSI because of the high rate of complications, including endocarditis."

The differential time to positivity (catheter culture positive 4 hours before peripheral culture) supports a catheter-related source. Even with a clean exit site and negative echocardiogram, **S. aureus bacteremia carries significant risk of metastatic complications**, and catheter retention increases treatment failure rates.

**Why Others are Wrong:**
* **B (Catheter salvage with antibiotic lock therapy):** Catheter salvage is **not recommended for S. aureus CLABSI**. The 2024 IDSA Guidelines state that "catheter salvage may be considered for CRBSI due to coagulase-negative staphylococci" but explicitly recommend removal for S. aureus. A meta-analysis found that catheter retention in S. aureus bacteremia was associated with **higher rates of treatment failure, relapse, and mortality**. Limited venous access, while a consideration, does not outweigh the risks of retaining an infected catheter with S. aureus.
* **C (Guidewire exchange):** Guidewire exchange is **contraindicated** in the setting of documented CLABSI. The 2024 IDSA Guidelines state that "guidewire exchange should not be performed when catheter-related infection is suspected or confirmed." Exchanging over a guidewire would introduce the new catheter into an infected tract, leading to immediate recolonization. A new site must be used.
* **D (Continue antibiotics through existing catheter, reassess in 72 hours):** Continuing to use an infected catheter as the route of antibiotic administration is **not recommended for S. aureus**. The 2024 IDSA Guidelines recommend prompt catheter removal for S. aureus CRBSI. Delaying removal allows continued biofilm-associated infection and increases the risk of metastatic complications such as endocarditis, osteomyelitis, and septic arthritis.
* **E (Remove only if cultures remain positive after 48 hours):** This approach may be reasonable for **coagulase-negative staphylococci** but is **not appropriate for S. aureus**. The 2024 IDSA Guidelines recommend upfront catheter removal for S. aureus CRBSI, not a trial of antibiotics with the catheter in place. Persistent bacteremia with S. aureus despite antibiotics indicates treatment failure, but waiting for this to occur increases morbidity.
  `,
  references: [
    'Chastain DB, Hutzley VJ, Henao-Martínez AF, et al. Intravascular Catheter-Related Infections: 2024 Update by the Infectious Diseases Society of America. Clin Infect Dis. 2024.',
    'Mermel LA, Allon M, Bouza E, et al. Clinical Practice Guidelines for the Diagnosis and Management of Intravascular Catheter-Related Infection: 2009 Update by the IDSA. Clin Infect Dis. 2009;49(1):1-45.',
    'Raad I, Hanna H, Maki D. Intravascular Catheter-Related Infections: Advances in Diagnosis, Prevention, and Management. Lancet Infect Dis. 2007;7(10):645-657.'
  ]
};
