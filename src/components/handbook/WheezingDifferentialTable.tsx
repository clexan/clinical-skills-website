import styles from "./tables/TableBase.module.css";

const groupedRows = [
  {
    accentClassName: styles.rowHeaderSky,
    causes: [
      "Angioedema: allergic, ACE inhibitor-related, or idiopathic",
      "Foreign body",
      "Infection: croup, epiglottitis, tracheitis",
    ],
    label: "Upper airway",
  },
  {
    accentClassName: styles.rowHeaderTeal,
    causes: [
      "Asthma",
      "Transient airway hyperreactivity caused by infection or irritation",
      "Bronchiolitis",
      "Chronic obstructive pulmonary disease",
      "Foreign body",
    ],
    label: "Lower airway",
  },
  {
    accentClassName: styles.rowHeaderSlate,
    causes: [
      "Cardiogenic pulmonary oedema (\"cardiac asthma\")",
      "Pulmonary embolism, rarely",
    ],
    label: "Cardiovascular causes",
  },
] as const;

const standaloneRows = [
  "Non-cardiogenic pulmonary oedema (ARDS)",
  "Psychogenic",
] as const;

export function WheezingDifferentialTable() {
  // verify against source screenshot
  const sourceNote = "Adapted from the source handbook chapter references.";

  return (
    <div className={styles.tableCard}>
      <div className={styles.captionBand}>
        <p className={styles.captionTitle}>Table 1. Differential diagnosis of wheezing</p>
        <p className={styles.captionSource}>{sourceNote}</p>
      </div>

      <table className={styles.table}>
        <thead className={styles.head}>
          <tr>
            <th className={styles.headCell} scope="col">
              Category
            </th>
            <th className={styles.headCell} scope="col">
              Causes
            </th>
          </tr>
        </thead>

        {groupedRows.map((group) => (
          <tbody className={styles.bodyGroup} key={group.label}>
            {group.causes.map((cause, index) => (
              <tr className={styles.row} key={cause}>
                {index === 0 ? (
                  <th
                    className={`${styles.rowHeader} ${group.accentClassName}`}
                    rowSpan={group.causes.length}
                    scope="rowgroup"
                  >
                    <span className={styles.rowHeaderTitle}>{group.label}</span>
                  </th>
                ) : null}
                <td className={styles.cell} data-label="Causes">
                  {cause}
                </td>
              </tr>
            ))}
          </tbody>
        ))}

        <tbody className={styles.bodyGroup}>
          {standaloneRows.map((row) => (
            <tr className={styles.row} key={row}>
              <th className={styles.rowHeader} scope="row">
                <span className={styles.rowHeaderTitle}>{row}</span>
              </th>
              <td className={`${styles.cell} ${styles.cellNoLabel}`} data-label="Causes">
                <span className={styles.dash}>—</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <p className={styles.note}>
        Upper airway causes are more likely to produce stridor, although this may sometimes
        be difficult to distinguish from wheezing.
      </p>
    </div>
  );
}
