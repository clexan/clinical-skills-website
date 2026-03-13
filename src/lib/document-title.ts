const APP_TITLE = "Clinical Skills Handbook";

export function formatDocumentTitle(title?: string) {
  return title ? `${title} | ${APP_TITLE}` : APP_TITLE;
}
