import { Breadcrumb } from "@/components/layout/Breadcrumb";

import { CreditsSection } from "./CreditsSection";

export function CreditsPage() {
  return (
    <section className="page-shell">
      <Breadcrumb
        crumbs={[
          { label: "Handbook", to: "/contents" },
          { label: "Credits" },
        ]}
      />

      <CreditsSection authorsTitleTag="h2" titleTag="h1" />
    </section>
  );
}
