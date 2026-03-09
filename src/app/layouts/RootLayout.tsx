import { NavLink, Outlet } from "react-router-dom";

export function RootLayout() {
  return (
    <div className="app-shell">
      <header className="site-header">
        <div className="site-header__inner">
          <NavLink to="/" className="site-brand">
            Clinical Skills Handbook
          </NavLink>

          <nav className="site-nav" aria-label="Primary">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "site-nav__link is-active" : "site-nav__link")}
              end
            >
              Home
            </NavLink>
            <NavLink
              to="/part/deteriorating-patient"
              className={({ isActive }) => (isActive ? "site-nav__link is-active" : "site-nav__link")}
            >
              Pilot Part
            </NavLink>
            <NavLink
              to="/chapter/1-1-abcde-sample"
              className={({ isActive }) => (isActive ? "site-nav__link is-active" : "site-nav__link")}
            >
              Pilot Chapter
            </NavLink>
            <NavLink
              to="/credits"
              className={({ isActive }) => (isActive ? "site-nav__link is-active" : "site-nav__link")}
            >
              Credits
            </NavLink>
          </nav>
        </div>
      </header>

      <div className="app-frame">
        <Outlet />
      </div>
    </div>
  );
}
