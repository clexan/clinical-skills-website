import styles from "./tables/TableBase.module.css";

const basicMechanisms = {
  blunt: [
    "Sudden forward deceleration (collision)",
    "Sudden vertical deceleration (fall)",
    "Energy transfer from blunt objects (impact)",
  ],
  penetrating: [
    "Missiles",
    "Knives",
    "Falls on a fixed object",
  ],
} as const;

const potentialInjuryRows = [
  {
    accentClassName: styles.rowHeaderSky,
    injuries: [
      "Cervical spine fracture",
      "Flail chest",
      "Myocardial contusion",
      "Pneumothorax",
      "Aortic disruption",
      "Spleen or liver laceration",
      "Posterior hip dislocation",
      "Knee dislocation",
    ],
    mechanism: "Frontal impact",
    note: "Steering wheel deformity; dashboard cracking; windscreen deformity",
  },
  {
    accentClassName: styles.rowHeaderTeal,
    injuries: [
      "Cervical spine fracture",
      "Flail chest",
      "Pneumothorax",
      "Aortic disruption",
      "Diaphragmatic rupture",
      "Laceration of spleen, liver, kidney",
      "Pelvic fracture",
    ],
    mechanism: "Lateral impact",
  },
  {
    accentClassName: styles.rowHeaderAmber,
    injuries: ["Cervical spine injury"],
    mechanism: "Rear impact",
  },
  {
    accentClassName: styles.rowHeaderSlate,
    injuries: [
      "Head injury",
      "Abdominal visceral injuries",
      "Fracture of lower extremities and pelvis",
      "Spine fracture",
    ],
    mechanism: "Pedestrian vs. car",
  },
] as const;

export function BasicMechanismsOfInjuryTable() {
  return (
    <div className={styles.tableCard}>
      <div className={styles.captionBand}>
        <p className={styles.captionTitle}>Table 1. Basic mechanisms of injury</p>
        <p className={styles.captionSource}>The basic mechanisms of injury caused by movement.</p>
      </div>

      <table className={styles.table}>
        <thead className={styles.head}>
          <tr>
            <th className={styles.headCell} scope="col">
              Blunt injuries
            </th>
            <th className={styles.headCell} scope="col">
              Penetrating injuries
            </th>
          </tr>
        </thead>
        <tbody className={styles.bodyGroup}>
          <tr className={styles.row}>
            <td className={styles.cell} data-label="Blunt injuries">
              <ul className={styles.bulletList}>
                {basicMechanisms.blunt.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </td>
            <td className={styles.cell} data-label="Penetrating injuries">
              <ul className={styles.bulletList}>
                {basicMechanisms.penetrating.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export function PotentialInjuriesByMechanismTable() {
  return (
    <div className={styles.tableCard}>
      <div className={styles.captionBand}>
        <p className={styles.captionTitle}>Table 2. Potential injuries depending on the trauma mechanism</p>
      </div>

      <table className={styles.table}>
        <thead className={styles.head}>
          <tr>
            <th className={styles.headCell} scope="col">
              Mechanism of injury
            </th>
            <th className={styles.headCell} scope="col">
              Potential injury
            </th>
          </tr>
        </thead>
        <tbody className={styles.bodyGroup}>
          {potentialInjuryRows.map((row) => (
            <tr className={styles.row} key={row.mechanism}>
              <th className={`${styles.rowHeader} ${row.accentClassName}`} scope="row">
                <span className={styles.rowHeaderInner}>
                  <span className={styles.rowHeaderTitle}>{row.mechanism}</span>
                  {row.note ? <span className={styles.rowHeaderNote}>{row.note}</span> : null}
                </span>
              </th>
              <td className={styles.cell} data-label="Potential injury">
                <ul className={styles.bulletList}>
                  {row.injuries.map((injury) => (
                    <li key={injury}>{injury}</li>
                  ))}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
