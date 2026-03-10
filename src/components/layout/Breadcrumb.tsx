import { Link } from "react-router-dom";

import styles from "./Breadcrumb.module.css";

type BreadcrumbProps = {
  crumbs: Array<{ label: string; to?: string }>;
  compact?: boolean;
};

export function Breadcrumb({ crumbs, compact = false }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className={`${styles.root}${compact ? ` ${styles.compact}` : ""}`}>
      <ol className={styles.list}>
        {crumbs.map((crumb, index) => {
          const isLast = index === crumbs.length - 1;

          return (
            <li className={styles.item} key={`${crumb.label}-${index}`}>
              {isLast ? (
                <span aria-current="page" className={styles.current}>
                  {crumb.label}
                </span>
              ) : crumb.to ? (
                <Link className={styles.link} to={crumb.to}>
                  {crumb.label}
                </Link>
              ) : (
                <span className={styles.current}>{crumb.label}</span>
              )}

              {!isLast ? (
                <span aria-hidden="true" className={styles.separator}>
                  ›
                </span>
              ) : null}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
