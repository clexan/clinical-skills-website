import { Link, NavLink } from "react-router-dom";

import { primaryNavItems } from "./navigation";
import styles from "./Header.module.css";

type HeaderProps = {
  menuOpen: boolean;
  onMenuOpen: () => void;
  onSearchOpen: () => void;
};

export function Header({ menuOpen, onMenuOpen, onSearchOpen }: HeaderProps) {
  const getNavLinkClassName = ({ isActive }: { isActive: boolean }) =>
    isActive ? `${styles.navLink} ${styles.navLinkActive}` : styles.navLink;

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Link className={styles.brand} to="/">
          Clinical Skills Handbook
        </Link>

        <nav aria-label="Primary" className={styles.nav}>
          {primaryNavItems.map((item) => (
            <NavLink
              className={getNavLinkClassName}
              end={item.end}
              key={item.to}
              to={item.to}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className={styles.actions}>
          <button
            aria-label="Search handbook"
            className={styles.searchTrigger}
            data-search-trigger="header"
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
              ⌘K
            </span>
          </button>

          <button
            aria-controls="mobile-menu"
            aria-expanded={menuOpen}
            aria-label="Open menu"
            className={styles.menuButton}
            onClick={onMenuOpen}
            type="button"
          >
            <svg
              aria-hidden="true"
              className={styles.icon}
              fill="none"
              focusable="false"
              viewBox="0 0 24 24"
            >
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="1.8"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
