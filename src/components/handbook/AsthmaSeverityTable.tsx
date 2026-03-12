import styles from "./tables/TableBase.module.css";

export function AsthmaSeverityTable() {
  // verify against source screenshot
  const sourceNote = "Adapted from the source handbook chapter references.";

  return (
    <div className={styles.tableCard}>
      <div className={styles.captionBand}>
        <p className={styles.captionTitle}>Table 2. Severity of asthma exacerbation</p>
        <p className={styles.captionSource}>{sourceNote}</p>
      </div>

      <table className={styles.table}>
        <thead className={styles.head}>
          <tr>
            <th className={styles.headCell} scope="col">
              Severity
            </th>
            <th className={styles.headCell} scope="col">
              Section
            </th>
            <th className={styles.headCell} scope="col">
              Criteria
            </th>
          </tr>
        </thead>

        <tbody className={styles.bodyGroup}>
          <tr className={styles.row}>
            <th className={`${styles.rowHeader} ${styles.rowHeaderRose}`} scope="rowgroup">
              <span className={styles.rowHeaderTitle}>Near-fatal asthma</span>
            </th>
            <th className={styles.subHeader} scope="row">
              Finding
            </th>
            <td className={styles.cell} data-label="Criteria">
              Elevated PaCO2 and/or requirement for mechanical ventilation with increased
              inflation pressures
            </td>
          </tr>
        </tbody>

        <tbody className={styles.bodyGroup}>
          <tr className={styles.row}>
            <th
              className={`${styles.rowHeader} ${styles.rowHeaderAmber}`}
              rowSpan={2}
              scope="rowgroup"
            >
              <span className={styles.rowHeaderInner}>
                <span className={styles.rowHeaderTitle}>Life-threatening asthma</span>
                <span className={styles.rowHeaderNote}>
                  Any of the following in a patient with severe asthma
                </span>
              </span>
            </th>
            <th className={styles.subHeader} scope="row">
              Clinical signs
            </th>
            <td className={styles.cell} data-label="Criteria">
              <ul className={styles.bulletList}>
                <li>altered conscious level</li>
                <li>exhaustion</li>
                <li>arrhythmia</li>
                <li>hypotension</li>
                <li>cyanosis</li>
                <li>silent chest</li>
                <li>poor expiratory effort</li>
              </ul>
            </td>
          </tr>
          <tr className={styles.row}>
            <th className={styles.subHeader} scope="row">
              Measurements
            </th>
            <td className={styles.cell} data-label="Criteria">
              <ul className={styles.bulletList}>
                <li>PEF &lt; 33%</li>
                <li>SpO2 &lt; 92%</li>
                <li>PaO2 &lt; 8 kPa</li>
                <li>&ldquo;normal&rdquo; PaCO2 (4.6–6.0 kPa)</li>
              </ul>
            </td>
          </tr>
        </tbody>

        <tbody className={styles.bodyGroup}>
          <tr className={styles.row}>
            <th className={`${styles.rowHeader} ${styles.rowHeaderTeal}`} scope="rowgroup">
              <span className={styles.rowHeaderTitle}>Acute severe asthma</span>
            </th>
            <th className={styles.subHeader} scope="row">
              Any of the following
            </th>
            <td className={styles.cell} data-label="Criteria">
              <ul className={styles.bulletList}>
                <li>PEF 33–50%</li>
                <li>respiratory rate &gt; 25/min</li>
                <li>heart rate &gt; 110/min</li>
                <li>inability to complete sentences in one breath</li>
              </ul>
            </td>
          </tr>
        </tbody>

        <tbody className={styles.bodyGroup}>
          <tr className={styles.row}>
            <th className={styles.rowHeader} scope="rowgroup">
              <span className={styles.rowHeaderTitle}>Moderate asthma exacerbation</span>
            </th>
            <th className={styles.subHeader} scope="row">
              Features
            </th>
            <td className={styles.cell} data-label="Criteria">
              <ul className={styles.bulletList}>
                <li>increasing symptoms</li>
                <li>PEF &gt; 50–70%</li>
                <li>no signs of acute severe asthma</li>
              </ul>
            </td>
          </tr>
        </tbody>

        <tbody className={styles.bodyGroup}>
          <tr className={styles.row}>
            <th className={`${styles.rowHeader} ${styles.rowHeaderSky}`} rowSpan={2} scope="rowgroup">
              <span className={styles.rowHeaderTitle}>Brittle asthma</span>
            </th>
            <th className={styles.subHeader} scope="row">
              Type 1
            </th>
            <td className={styles.cell} data-label="Criteria">
              wide PEF variability (&gt; 40% diurnal variation for &gt; 50% of the time over
              a period of &gt; 150 days) despite intense therapy
            </td>
          </tr>
          <tr className={styles.row}>
            <th className={styles.subHeader} scope="row">
              Type 2
            </th>
            <td className={styles.cell} data-label="Criteria">
              sudden severe attacks on a background of apparently well-controlled asthma
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
