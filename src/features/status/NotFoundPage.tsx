import { StatusPage } from "@/components/layout/StatusPage";

export function NotFoundPage() {
  return (
    <StatusPage
      description="The address may be outdated, incomplete, or no longer available in this edition of the handbook."
      eyebrow="Page unavailable"
      title="This page could not be found"
    />
  );
}
