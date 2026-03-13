import { Link } from "react-router-dom";

import { CreditsSection } from "./CreditsSection";

export function CreditsPage() {
  return (
    <section className="page-shell">
      <Link className="page-shell__back" to="/">
        ← Back to contents
      </Link>

      <CreditsSection authorsTitleTag="h2" titleTag="h1" />
    </section>
  );
}
