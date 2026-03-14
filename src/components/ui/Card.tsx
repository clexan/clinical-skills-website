import type { PropsWithChildren } from "react";

import styles from "./Card.module.css";

type CardProps = PropsWithChildren<{
  elevated?: boolean;
  className?: string;
}>;

export function Card({ children, elevated = false, className = "" }: CardProps) {
  const cardClassName = `surface ${styles.card}${elevated ? ` ${styles.elevated}` : ""}${className ? ` ${className}` : ""}`;

  return <div className={cardClassName}>{children}</div>;
}
