import { ClinicalIndicationsList } from "./tables/ClinicalIndicationsList";

export function IntubationIndicationsList() {
  // verify against source screenshot
  const sourceNote = "Adapted from the source handbook chapter references.";

  return (
    <ClinicalIndicationsList
      items={[
        "Inability to tolerate NIV or NIV failure",
        "Respiratory or cardiac arrest",
        "Decreased consciousness or increased agitation (relative)",
        "Massive aspiration",
        "Persistent inability to remove respiratory secretions",
        "Hypotension",
        "Persistent hypoxaemia despite optimal respiratory treatment",
        "Marked haemodynamic instability",
      ]}
      sourceNote={sourceNote}
      title="Table 5. Indications for intubation and mechanical ventilation"
    />
  );
}
