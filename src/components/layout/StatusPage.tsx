import { useEffect } from "react";
import { Link } from "react-router-dom";

import { formatDocumentTitle } from "@/lib/document-title";

type StatusPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  backLabel?: string;
  backTo?: string;
};

export function StatusPage({
  eyebrow,
  title,
  description,
  backLabel = "Back to handbook contents",
  backTo = "/contents",
}: StatusPageProps) {
  useEffect(() => {
    document.title = formatDocumentTitle(eyebrow);
  }, [eyebrow]);

  return (
    <section className="page-shell">
      <div className="page-shell__header">
        <p className="page-shell__eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="page-shell__description">{description}</p>
      </div>

      <div className="page-shell__body">
        <Link className="page-shell__back" to={backTo}>
          ← {backLabel}
        </Link>
      </div>
    </section>
  );
}
