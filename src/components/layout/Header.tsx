import { Link } from "react-router-dom";

import { getSearchShortcutLabel } from "@/features/search/search-shortcut";
import styles from "./Header.module.css";

type HeaderProps = {
  onSearchOpen: () => void;
  onSearchWarmup: () => void;
};

export function Header({ onSearchOpen, onSearchWarmup }: HeaderProps) {
  const shortcutLabel = getSearchShortcutLabel();

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Link className={styles.brand} to="/">
          Clinical Skills Handbook
        </Link>

        <nav aria-label="Utility" className={styles.headerNav}>
          <Link className={styles.headerNavLink} to="/reference">
            Reference
          </Link>

          <button
            aria-label="Search handbook"
            className={styles.searchTrigger}
            data-search-trigger="header"
            onFocus={onSearchWarmup}
            onMouseEnter={onSearchWarmup}
            onClick={onSearchOpen}
            type="button"
          >
            <span aria-hidden="true" className={styles.searchIconWrap}>
              <svg
                aria-hidden="true"
                className={styles.icon}
                fill="none"
                focusable="false"
                viewBox="0 0 24 24"
              >
                <circle cx="11" cy="11" r="6.5" stroke="currentColor" strokeWidth="1.8" />
                <path d="M16 16l4.5 4.5" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
              </svg>
            </span>
            <span className={styles.searchTriggerLabel}>Search...</span>
            <span aria-hidden="true" className={styles.shortcutBadge}>
              {shortcutLabel}
            </span>
          </button>
        </nav>
      </div>
    </header>
  );
}
