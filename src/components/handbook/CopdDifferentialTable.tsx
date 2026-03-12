import { ClinicalComparisonTable } from "./tables/ClinicalComparisonTable";

export function CopdDifferentialTable() {
  // verify against source screenshot
  const sourceNote = "Adapted from the source handbook chapter references.";

  return (
    <ClinicalComparisonTable
      abbreviations="COPD = chronic obstructive pulmonary disease; CHF = congestive heart failure; BNP = B-type natriuretic peptide; PE = pulmonary embolism; ACS = acute coronary syndrome; CT = computed tomography."
      rows={[
        {
          diagnosis: "Asthma",
          clinicalPresentation:
            "Earlier onset, different symptoms, family history, and reversible airflow obstruction.",
          caution:
            "Asthma can coexist with COPD, and many patients diagnosed with asthma actually have COPD or coexisting asthma and COPD.",
        },
        {
          diagnosis: "Heart failure",
          clinicalPresentation:
            "Orthopnoea and dyspnoea on exertion, plus jugular venous distention, hepatojugular reflux, bibasilar rales, cardiomegaly, and/or interstitial oedema on chest X-ray.",
          caution:
            "BNP < 100 pg/mL makes CHF unlikely, whereas BNP > 500 pg/mL makes CHF more likely. Heart failure can coexist with COPD, and several conditions can falsely elevate or lower BNP.",
        },
        {
          diagnosis: "Pulmonary embolism",
          clinicalPresentation:
            "Risk factors include older age, recent surgery or trauma, history of thromboembolism, hereditary thrombophilia, malignancy, smoking, and estrogen-containing drugs.",
          caution:
            "D-dimer may be useful to rule out PE in low-risk patients. Around 20–25% of patients with severe COPD exacerbation without a clear trigger may have PE. The classic triad of pleuritic chest pain, dyspnoea, and tachycardia plus hypoxaemia is rare.",
        },
        {
          diagnosis: "Acute coronary syndrome",
          clinicalPresentation:
            "Chest pain with risk factors for ACS; dyspnoea may be the leading symptom.",
          caution: "Obtain ECG and troponin.",
        },
        {
          diagnosis: "Pneumothorax",
          clinicalPresentation:
            "Consider in COPD, which is a risk factor for pneumothorax.",
          caution: "Obtain chest X-ray, ultrasound, or CT.",
        },
        {
          diagnosis: "Pneumonia",
          clinicalPresentation:
            "Pneumonia frequently coexists with COPD exacerbation.",
          caution: "Obtain chest X-ray.",
        },
      ]}
      sourceNote={sourceNote}
      title="Table 3. Differential diagnosis of acute exacerbation of COPD"
    />
  );
}
