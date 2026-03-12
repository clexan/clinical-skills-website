import type { ReactNode } from "react";

import styles from "./TableBase.module.css";

type ClinicalComparisonRow = {
  diagnosis: string;
  clinicalPresentation: ReactNode;
  caution: ReactNode;
};

type ClinicalComparisonTableProps = {
  abbreviations?: string;
  rows: ClinicalComparisonRow[];
  sourceNote: string;
  title: string;
};

export function ClinicalComparisonTable({
  abbreviations,
  rows,
  sourceNote,
  title,
}: ClinicalComparisonTableProps) {
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
              Diagnosis
            </th>
            <th className={styles.headCell} scope="col">
              Clinical presentation
            </th>
            <th className={styles.headCell} scope="col">
              Caution
            </th>
          </tr>
        </thead>
        <tbody className={styles.bodyGroup}>
          {rows.map((row) => (
            <tr className={styles.row} key={row.diagnosis}>
              <th className={styles.rowHeader} scope="row">
                <span className={styles.rowHeaderTitle}>{row.diagnosis}</span>
              </th>
              <td className={styles.cell} data-label="Clinical presentation">
                {row.clinicalPresentation}
              </td>
              <td className={styles.cell} data-label="Caution">
                {row.caution}
              </td>
            </tr>
          ))}
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
