import styles from "./tables/TableBase.module.css";

const rows = [
  {
    criterion: "Respiratory rate",
    threshold: "≥ 22/min",
  },
  {
    criterion: "Systolic blood pressure",
    threshold: "< 100 mmHg",
  },
  {
    criterion: "Mental status",
    threshold: "GCS < 15",
  },
] as const;

export function SepsisQsofaTable() {
  return (
    <div className={styles.tableCard}>
      <div className={styles.captionBand}>
        <p className={styles.captionTitle}>Table 1. Quick SOFA bedside screening criteria</p>
        <p className={styles.captionSource}>
          A qSOFA score of 2 or more suggests a high risk of poor outcome in a patient with
          suspected infection.
        </p>
      </div>

      <table className={styles.table}>
        <thead className={styles.head}>
          <tr>
            <th className={styles.headCell} scope="col">
              Criterion
            </th>
            <th className={styles.headCell} scope="col">
              Threshold
            </th>
          </tr>
        </thead>
        <tbody className={styles.bodyGroup}>
          {rows.map((row) => (
            <tr className={styles.row} key={row.criterion}>
              <th className={styles.rowHeader} scope="row">
                <span className={styles.rowHeaderTitle}>{row.criterion}</span>
              </th>
              <td className={styles.cell} data-label="Threshold">
                {row.threshold}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
