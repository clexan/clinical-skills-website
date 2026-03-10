export type EditorialStatus =
  | "verified"
  | "ocr-cleaned"
  | "needs-review"
  | "missing-figures"
  | "draft";

export const editorialStatusColors = {
  verified: "teal",
  "ocr-cleaned": "sky",
  "needs-review": "amber",
  "missing-figures": "violet",
  draft: "slate",
} as const;

export const editorialStatusLabels = {
  verified: "Verified",
  "ocr-cleaned": "Text Ready",
  "needs-review": "Needs Review",
  "missing-figures": "Missing Figures",
  draft: "Draft",
} as const;

export function getEditorialStatusColor(status: string) {
  return editorialStatusColors[status as EditorialStatus] ?? "slate";
}

export function getEditorialStatusLabel(status: string) {
  return editorialStatusLabels[status as EditorialStatus] ?? "Draft";
}
