import { CriteriaTable } from "./tables/CriteriaTable";

export function NivCriteriaTable() {
  // verify against source screenshot
  const sourceNote = "Adapted from the source handbook chapter references.";

  return (
    <CriteriaTable
      abbreviations="NIV = non-invasive ventilation; PaCO2 = arterial partial pressure of carbon dioxide; PaO2 = arterial partial pressure of oxygen; SaO2 = arterial oxygen saturation."
      exclusionCriteria={[
        "respiratory arrest",
        "cardiovascular instability such as hypotension, arrhythmias, or myocardial infarction",
        "change in mental status or an uncooperative patient",
        "high aspiration risk",
        "recent facial or gastro-oesophageal surgery",
        "craniofacial trauma",
        "burns",
        "extreme obesity",
      ]}
      selectionCriteria={[
        "acidosis with pH < 7.36",
        "hypercapnia with PaCO2 > 50 mmHg",
        "hypoxia with PaO2 < 60 mmHg or SaO2 < 90%",
        "severe dyspnoea with clinical signs such as muscle fatigue or increased work of breathing",
      ]}
      sourceNote={sourceNote}
      title="Table 4. Indications and relative contraindications for non-invasive ventilation (NIV)"
    />
  );
}
