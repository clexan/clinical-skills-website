import type { ButtonHTMLAttributes, PropsWithChildren } from "react";

import styles from "./Button.module.css";

type ButtonProps = PropsWithChildren<{
  onClick?: ButtonHTMLAttributes<HTMLButtonElement>["onClick"];
  variant?: "primary" | "ghost";
  disabled?: boolean;
}>;

export function Button({ children, onClick, variant = "primary", disabled = false }: ButtonProps) {
  const variantClassName = variant === "ghost" ? styles.ghost : styles.primary;

  return (
    <button className={`${styles.button} ${variantClassName}`} type="button" onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}
