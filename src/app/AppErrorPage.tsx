import { isRouteErrorResponse, useRouteError } from "react-router-dom";

import { StatusPage } from "@/components/layout/StatusPage";

export function AppErrorPage() {
  const error = useRouteError();

  if (isRouteErrorResponse(error) && error.status === 404) {
    return (
      <StatusPage
        description="The address may be outdated, incomplete, or no longer available in this edition of the handbook."
        eyebrow="Page unavailable"
        title="This page could not be found"
      />
    );
  }

  return (
    <StatusPage
      description="A temporary application error prevented this page from loading. Please try again or return to the handbook contents."
      eyebrow="Something went wrong"
      title="This page could not be opened"
    />
  );
}
