import type { PropsWithChildren } from "react";

import styles from "./Card.module.css";

type CardProps = PropsWithChildren<{
  elevated?: boolean;
}>;

export function Card({ children, elevated = false }: CardProps) {
  return <div className={`surface ${styles.card}${elevated ? ` ${styles.elevated}` : ""}`}>{children}</div>;
}
