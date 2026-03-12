import styles from "./tables/TableBase.module.css";

const rows = [
  {
    one: "< 400",
    organSystem: "Respiratory system (PaO2/FiO2, mmHg)",
    three: "< 200",
    two: "< 300",
    four: "< 100",
    zero: "≥ 400",
  },
  {
    one: "< 150",
    organSystem: "Coagulation (platelets ×10³/μL)",
    three: "< 50",
    two: "< 100",
    four: "< 20",
    zero: "≥ 150",
  },
  {
    one: "MAP < 70 mmHg",
    organSystem: "Cardiovascular system",
    three:
      "Dopamine 5.1–15 μg/kg/min or adrenaline ≤ 0.1 μg/kg/min or noradrenaline ≤ 0.1 μg/kg/min",
    two: "Dopamine ≤ 5 μg/kg/min or dobutamine at any dose",
    four:
      "Dopamine > 15 μg/kg/min or adrenaline > 0.1 μg/kg/min or noradrenaline > 0.1 μg/kg/min",
    zero: "MAP ≥ 70 mmHg",
  },
  {
    one: "13–14",
    organSystem: "Central nervous system (GCS)",
    three: "6–9",
    two: "10–12",
    four: "< 6",
    zero: "15",
  },
  {
    one: "110–170",
    organSystem: "Kidneys (creatinine, μmol/L; or urine output, mL/day)",
    three: "300–440 or < 500",
    two: "171–299",
    four: "> 440 or < 200",
    zero: "< 110",
  },
  {
    one: "20–32",
    organSystem: "Liver (bilirubin, μmol/L)",
    three: "102–204",
    two: "33–101",
    four: "> 204",
    zero: "< 20",
  },
] as const;

export function SepsisSofaScoreTable() {
  return (
    <div className={styles.tableCard}>
      <div className={styles.captionBand}>
        <p className={styles.captionTitle}>Table 2. Sequential Organ Failure Assessment (SOFA) score</p>
      </div>

      <table className={styles.table}>
        <thead className={styles.head}>
          <tr>
            <th className={styles.headCell} scope="col">
              Organ system / parameter
            </th>
            <th className={styles.headCell} scope="col">
              0 points
            </th>
            <th className={styles.headCell} scope="col">
              1 point
            </th>
            <th className={styles.headCell} scope="col">
              2 points
            </th>
            <th className={styles.headCell} scope="col">
              3 points
            </th>
            <th className={styles.headCell} scope="col">
              4 points
            </th>
          </tr>
        </thead>
        <tbody className={styles.bodyGroup}>
          {rows.map((row) => (
            <tr className={styles.row} key={row.organSystem}>
              <th className={styles.rowHeader} scope="row">
                <span className={styles.rowHeaderTitle}>{row.organSystem}</span>
              </th>
              <td className={styles.cell} data-label="0 points">
                {row.zero}
              </td>
              <td className={styles.cell} data-label="1 point">
                {row.one}
              </td>
              <td className={styles.cell} data-label="2 points">
                {row.two}
              </td>
              <td className={styles.cell} data-label="3 points">
                {row.three}
              </td>
              <td className={styles.cell} data-label="4 points">
                {row.four}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
