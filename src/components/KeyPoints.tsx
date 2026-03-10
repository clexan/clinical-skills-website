import styles from "./KeyPoints.module.css";

type KeyPointsProps = {
  items: string[];
};

export default function KeyPoints({ items }: KeyPointsProps) {
  return (
    <div className={styles.root}>
      <p className={styles.label}>Key Points</p>
      <ul className={styles.list}>
        {items.map((item) => (
          <li className={styles.item} key={item}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
