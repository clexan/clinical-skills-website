import styles from "./Badge.module.css";

const badgeColorClassNames = {
  sky: styles.sky,
  teal: styles.teal,
  rose: styles.rose,
  violet: styles.violet,
  amber: styles.amber,
  slate: styles.slate,
} as const;

type BadgeProps = {
  label: string;
  color?: keyof typeof badgeColorClassNames;
};

export function Badge({ label, color = "slate" }: BadgeProps) {
  return <span className={`${styles.badge} ${badgeColorClassNames[color]}`}>{label}</span>;
}
