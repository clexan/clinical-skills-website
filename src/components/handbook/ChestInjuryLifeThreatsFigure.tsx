import styles from "./ChestInjuryLifeThreatsFigure.module.css";

const conditions = [
  "Airway obstruction",
  "Tension pneumothorax",
  "Open pneumothorax",
  "Massive haemothorax",
  "Flail chest",
  "Cardiac tamponade",
] as const;

export function ChestInjuryLifeThreatsFigure() {
  return (
    <figure className={styles.figure}>
      <div
        className={styles.panel}
        role="img"
        aria-label="Life-threatening conditions in chest injuries that are important to recognize during primary survey"
      >
        <ul className={styles.list}>
          {conditions.map((condition) => (
            <li className={styles.item} key={condition}>
              {condition}
            </li>
          ))}
        </ul>
      </div>

      <figcaption className={styles.caption}>
        Figure 2. Life-threatening conditions in chest injuries that are important to recognize
        during primary survey.
      </figcaption>
    </figure>
  );
}
