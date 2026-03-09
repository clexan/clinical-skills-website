import type { PropsWithChildren } from "react";
import { Link } from "react-router-dom";

type HandbookLayoutProps = PropsWithChildren<{
  eyebrow: string;
  title: string;
  description?: string;
  backTo?: string;
  backLabel?: string;
}>;

export function HandbookLayout({
  eyebrow,
  title,
  description,
  backTo = "/",
  backLabel = "Back to handbook",
  children,
}: HandbookLayoutProps) {
  return (
    <section className="page-shell">
      <div className="page-shell__header">
        <Link className="page-shell__back" to={backTo}>
          {backLabel}
        </Link>
        <p className="page-shell__eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        {description ? <p className="page-shell__description">{description}</p> : null}
      </div>

      <div className="page-shell__body">{children}</div>
    </section>
  );
}
