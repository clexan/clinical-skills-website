import styles from "./tables/TableBase.module.css";

const sections = [
  {
    accentClassName: styles.rowHeaderSky,
    behaviour: "Eye opening",
    rows: [
      { response: "Spontaneously", score: "4" },
      { response: "To speech", score: "3" },
      { response: "To pain", score: "2" },
      { response: "No response", score: "1" },
    ],
  },
  {
    accentClassName: styles.rowHeaderTeal,
    behaviour: "Verbal response",
    rows: [
      { response: "Oriented (in time, space, and person)", score: "5" },
      { response: "Confused, disoriented", score: "4" },
      { response: "Inappropriate words", score: "3" },
      { response: "Incomprehensible sounds", score: "2" },
      { response: "No response", score: "1" },
    ],
  },
  {
    accentClassName: styles.rowHeaderAmber,
    behaviour: "Motor response",
    rows: [
      { response: "Obeys command", score: "6" },
      { response: "Localises pain", score: "5" },
      { response: "Withdraws to painful stimulus", score: "4" },
      { response: "Abnormal flexion (decortication)", score: "3" },
      { response: "Abnormal extension (decerebration)", score: "2" },
      { response: "No response", score: "1" },
    ],
  },
] as const;

export function GlasgowComaScaleTable() {
  return (
    <div className={styles.tableCard}>
      <div className={styles.captionBand}>
        <p className={styles.captionTitle}>Glasgow Coma Scale (GCS)</p>
      </div>

      <table className={styles.table}>
        <thead className={styles.head}>
          <tr>
            <th className={styles.headCell} scope="col">
              Behaviour
            </th>
            <th className={styles.headCell} scope="col">
              Response
            </th>
            <th className={styles.headCell} scope="col">
              Score
            </th>
          </tr>
        </thead>

        {sections.map((section) => (
          <tbody className={styles.bodyGroup} key={section.behaviour}>
            {section.rows.map((row, index) => (
              <tr className={styles.row} key={`${section.behaviour}-${row.response}`}>
                {index === 0 ? (
                  <th
                    className={`${styles.rowHeader} ${section.accentClassName}`}
                    rowSpan={section.rows.length}
                    scope="rowgroup"
                  >
                    <span className={styles.rowHeaderTitle}>{section.behaviour}</span>
                  </th>
                ) : null}
                <td className={styles.cell} data-label="Response">
                  {row.response}
                </td>
                <td className={styles.cell} data-label="Score">
                  {row.score}
                </td>
              </tr>
            ))}
          </tbody>
        ))}
      </table>
    </div>
  );
}
