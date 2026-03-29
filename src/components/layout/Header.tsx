import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

import { getSearchShortcutLabel } from "@/features/search/search-shortcut";
import { siteTitle } from "@/lib/document-title";
import { MobileMenu } from "./MobileMenu";
import { primaryNavItems } from "./navigation";
import styles from "./Header.module.css";

type HeaderProps = {
  currentPartSlug?: string;
  onSearchOpen: () => void;
  onSearchWarmup: () => void;
};

export function Header({ currentPartSlug, onSearchOpen, onSearchWarmup }: HeaderProps) {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const shortcutLabel = getSearchShortcutLabel();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const getHeaderNavLinkClassName = ({ isActive }: { isActive: boolean }) =>
    isActive ? `${styles.headerNavLink} ${styles.headerNavLinkActive}` : styles.headerNavLink;

  return (
    <>
      <header className={styles.header}>
        <div className={`container ${styles.inner}`}>
          <NavLink className={styles.brand} to="/">
            <span className={styles.brandTitle}>{siteTitle}</span>
            <span className={styles.brandMeta}>Open clinical review and emergency reference</span>
          </NavLink>

          <div className={styles.headerActions}>
            <nav aria-label="Primary" className={styles.headerNav}>
              {primaryNavItems.map((item) => (
                <NavLink
                  className={getHeaderNavLinkClassName}
                  end={item.end}
                  key={item.to}
                  to={item.to}
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            {!isHomePage && (
              <button
                aria-label="Search chapters, emergencies, practical prep, and final prep"
                className={styles.searchTrigger}
                data-search-trigger="header"
                onClick={onSearchOpen}
                onFocus={onSearchWarmup}
                onMouseEnter={onSearchWarmup}
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
                <span className={styles.searchTriggerLabel}>Search content</span>
                <span aria-hidden="true" className={styles.shortcutBadge}>
                  {shortcutLabel}
                </span>
              </button>
            )}

            <button
              aria-controls="mobile-menu"
              aria-expanded={menuOpen}
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
              className={styles.menuButton}
              onClick={() => {
                setMenuOpen((open) => !open);
              }}
              type="button"
            >
              <span aria-hidden="true" className={styles.menuIcon}>
                <span />
                <span />
                <span />
              </span>
            </button>
          </div>
        </div>
      </header>

      <MobileMenu currentPartSlug={currentPartSlug} isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
