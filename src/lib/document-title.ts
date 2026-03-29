export const siteTitle = "Clinical Skills Handbook";
export const openResourceSubtitle = "Open clinical review and emergency reference";

const APP_TITLE = siteTitle;

export function formatDocumentTitle(title?: string) {
  return title ? `${title} | ${APP_TITLE}` : APP_TITLE;
}
