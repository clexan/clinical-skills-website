import styles from "./tables/TableBase.module.css";

const rows = [
  {
    antidote: "Acetylcysteine",
    dose: "200 mg/mL in 200 mL of 5% glucose, adjusted for body weight",
    poison: "Paracetamol",
  },
  {
    antidote: "Flumazenil",
    dose: "Initial dose 0.2 mg IV, then 0.5 mg every minute until effect, up to a maximum of 3 mg",
    poison: "Benzodiazepines",
  },
  {
    antidote: "Naloxone",
    dose: "0.4–2 mg IV, repeated every 2–3 minutes up to a maximum of 10 mg; can also be given intramuscularly; additional doses may be required every 20–60 minutes",
    poison: "Opioids",
  },
  {
    antidote: "Calcium chloride 10%",
    dose: "20 mL IV bolus every 2–5 minutes",
    poison: "Calcium channel blockers",
  },
  {
    antidote: "Glucagon; insulin, glucose, lipid emulsion, phosphodiesterase inhibitors",
    dose: "Glucagon 50–150 µg/kg",
    poison: "Beta-blockers",
  },
  {
    antidote: "Intralipid 20%",
    dose: "1.5 mL/kg over 1 minute, followed by 15 mL/kg/h",
    poison: "Local anaesthetics",
  },
  {
    antidote: "Oxygen",
    dose: "FiO2 = 1.0 (100%)",
    poison: "Carbon monoxide",
  },
] as const;

export function PoisoningAntidotesTable() {
  return (
    <div className={styles.tableCard}>
      <div className={styles.captionBand}>
        <p className={styles.captionTitle}>
          Table 1. Toxic Agents and Corresponding Antidotes and Dosages
        </p>
      </div>

      <table className={styles.table}>
        <thead className={styles.head}>
          <tr>
            <th className={styles.headCell} scope="col">
              Poison
            </th>
            <th className={styles.headCell} scope="col">
              Antidote
            </th>
            <th className={styles.headCell} scope="col">
              Dose
            </th>
          </tr>
        </thead>
        <tbody className={styles.bodyGroup}>
          {rows.map((row) => (
            <tr className={styles.row} key={row.poison}>
              <th className={styles.rowHeader} scope="row">
                <span className={styles.rowHeaderTitle}>{row.poison}</span>
              </th>
              <td className={styles.cell} data-label="Antidote">
                {row.antidote}
              </td>
              <td className={styles.cell} data-label="Dose">
                {row.dose}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
