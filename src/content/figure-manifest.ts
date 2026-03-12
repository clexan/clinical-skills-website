export type FigureStatus =
  | "verified"
  | "needs-review"
  | "missing-asset"
  | "pending-verification";

export interface FigureRecord {
  id: string;
  assetFilename: string;
  altText: string;
  caption: string;
  source?: string;
  status: FigureStatus;
  partSlug: string;
  chapterSlug: string;
}

export const figureManifest: FigureRecord[] = [
  {
    id: "fig-1-1-01",
    assetFilename: "1-1-fig-1-airway-opening-manoeuvres.png",
    altText: "Head tilt and jaw thrust manoeuvres used to open the airway.",
    caption: "Airway-opening manoeuvres used during the initial ABCDE assessment.",
    status: "verified",
    partSlug: "deteriorating-patient",
    chapterSlug: "1-1-abcde-sample",
  },
  {
    id: "fig-1-1-02",
    assetFilename: "1-1-fig-2-airway-adjuncts-and-interfaces.png",
    altText: "Selection of airway adjuncts and ventilation interfaces including masks, NPA, OPA, and LMA.",
    caption: "Common airway adjuncts and interfaces relevant to early airway management.",
    status: "verified",
    partSlug: "deteriorating-patient",
    chapterSlug: "1-1-abcde-sample",
  },
];

// Add records here chapter-by-chapter as assets are verified and centralized in src/assets/figures/.

export function getFigureById(id: string): FigureRecord | undefined {
  return figureManifest.find((figure) => figure.id === id);
}
