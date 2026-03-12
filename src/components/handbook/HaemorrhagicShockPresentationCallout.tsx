import tableStyles from "./tables/TableBase.module.css";
import styles from "./HaemorrhagicShockPresentationCallout.module.css";

const findings = [
  "Increase in heart rate due to catecholamine effect on the heart",
  "Tachypnoea",
  "Flat jugular veins",
  "Circulatory centralisation with vasoconstriction in less vital tissues",
  "Cold, mottled skin",
  "Decreased urine output",
  "Consciousness impairment",
] as const;

export function HaemorrhagicShockPresentationCallout() {
  return (
    <aside className={`${tableStyles.listCard} ${styles.callout}`} aria-labelledby="haemorrhagic-shock-presentation">
      <div className={`${tableStyles.captionBand} ${styles.header}`}>
        <p className={styles.eyebrow}>Clinical Snapshot</p>
        <p className={tableStyles.captionTitle} id="haemorrhagic-shock-presentation">
          Clinical presentation of haemorrhagic shock
        </p>
        <p className={tableStyles.captionSource}>
          Findings that should immediately raise concern for active bleeding with impaired perfusion.
        </p>
      </div>

      <div className={tableStyles.listBody}>
        <ul className={styles.list}>
          {findings.map((finding) => (
            <li className={styles.item} key={finding}>
              <span aria-hidden="true" className={styles.marker}>
                —
              </span>
              <span className={styles.text}>{finding}</span>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
