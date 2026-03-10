import { NavLink, Outlet } from "react-router-dom";

import styles from "./RootLayout.module.css";

export function RootLayout() {
  const getNavLinkClassName = ({ isActive }: { isActive: boolean }) =>
    isActive ? `${styles.navLink} ${styles.navLinkActive}` : styles.navLink;

  return (
    <div className={styles.shell}>
      <header className={styles.header}>
        <div className={`container ${styles.headerInner}`}>
          <NavLink to="/" className={styles.brand}>
            Clinical Skills Handbook
          </NavLink>

          <nav className={styles.nav} aria-label="Primary">
            <NavLink to="/" className={getNavLinkClassName} end>
              Home
            </NavLink>
            <NavLink to="/part/deteriorating-patient" className={getNavLinkClassName}>
              Deteriorating Patient
            </NavLink>
            <NavLink to="/chapter/1-1-abcde-sample" className={getNavLinkClassName}>
              Initial Assessment
            </NavLink>
            <NavLink to="/credits" className={getNavLinkClassName}>
              Credits
            </NavLink>
          </nav>
        </div>
      </header>

      <main className={styles.main}>
        <div className="container">
          <Outlet />
        </div>
      </main>

      <footer className={styles.footer}>
        <div className={`container ${styles.footerInner}`}>
          <p className={styles.footerCopy}>Clinical Skills Handbook</p>
        </div>
      </footer>
    </div>
  );
}
