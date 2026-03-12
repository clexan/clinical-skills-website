import styles from "./TableBase.module.css";

type CriteriaTableProps = {
  abbreviations?: string;
  exclusionCriteria: string[];
  selectionCriteria: string[];
  sourceNote: string;
  title: string;
};

export function CriteriaTable({
  abbreviations,
  exclusionCriteria,
  selectionCriteria,
  sourceNote,
  title,
}: CriteriaTableProps) {
  return (
    <div className={styles.tableCard}>
      <div className={styles.captionBand}>
        <p className={styles.captionTitle}>{title}</p>
        <p className={styles.captionSource}>{sourceNote}</p>
      </div>

      <table className={styles.table}>
        <thead className={styles.head}>
          <tr>
            <th className={styles.headCell} scope="col">
              Selection criteria
            </th>
            <th className={styles.headCell} scope="col">
              Exclusion criteria (any)
            </th>
          </tr>
        </thead>
        <tbody className={styles.bodyGroup}>
          <tr className={styles.row}>
            <td className={styles.cell} data-label="Selection criteria">
              <ul className={styles.bulletList}>
                {selectionCriteria.map((criterion) => (
                  <li key={criterion}>{criterion}</li>
                ))}
              </ul>
            </td>
            <td className={styles.cell} data-label="Exclusion criteria (any)">
              <ul className={styles.bulletList}>
                {exclusionCriteria.map((criterion) => (
                  <li key={criterion}>{criterion}</li>
                ))}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>

      {abbreviations ? (
        <p className={styles.abbreviations}>
          <strong>Abbreviations:</strong> {abbreviations}
        </p>
      ) : null}
    </div>
  );
}
