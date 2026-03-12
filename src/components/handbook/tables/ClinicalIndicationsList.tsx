import styles from "./TableBase.module.css";

type ClinicalIndicationsListProps = {
  items: string[];
  sourceNote: string;
  title: string;
};

export function ClinicalIndicationsList({
  items,
  sourceNote,
  title,
}: ClinicalIndicationsListProps) {
  return (
    <div className={styles.listCard}>
      <div className={styles.captionBand}>
        <p className={styles.captionTitle}>{title}</p>
        <p className={styles.captionSource}>{sourceNote}</p>
      </div>

      <div className={styles.listBody}>
        <ul className={styles.indicationsList}>
          {items.map((item) => (
            <li className={styles.indicationItem} key={item}>
              <span aria-hidden="true" className={styles.indicationMarker}>
                +
              </span>
              <span className={styles.indicationText}>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
