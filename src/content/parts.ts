import type { PartId, PartRecord } from "@/types/content";

export const parts = [
  {
    id: "part-1",
    slug: "deteriorating-patient",
    title: "Deteriorating Patient",
    description: "Initial assessment, ECG basics, vascular access, and ALS",
    position: 1,
  },
  {
    id: "part-2",
    slug: "cardiac-emergencies",
    title: "Cardiac Emergencies",
    description: "Acute coronary syndrome, arrhythmias, and high-yield review",
    position: 2,
  },
  {
    id: "part-3",
    slug: "respiratory-emergencies",
    title: "Respiratory Emergencies",
    description: "Respiratory failure, oxygen, ABGs, anaphylaxis, bronchospasm, and ventilation",
    position: 3,
  },
  {
    id: "part-4",
    slug: "neurological-deterioration",
    title: "Neurological Deterioration",
    description: "Neurological decline, seizures, poisoning, and review content",
    position: 4,
  },
  {
    id: "part-5",
    slug: "sepsis",
    title: "Sepsis",
    description: "Recognition and first-hour management of sepsis and septic shock",
    position: 5,
  },
  {
    id: "part-6",
    slug: "blood-fluids-electrolytes",
    title: "Blood, Fluids & Electrolytes",
    description: "Intravenous fluids, electrolyte emergencies, haemorrhage, and review",
    position: 6,
  },
  {
    id: "part-7",
    slug: "injuries",
    title: "Injuries",
    description: "Trauma, burns, and final review material",
    position: 7,
  },
] satisfies readonly PartRecord[];

export function getPartById(partId: PartId) {
  return parts.find((part) => part.id === partId) ?? null;
}

export function getPartBySlug(partSlug: string) {
  return parts.find((part) => part.slug === partSlug) ?? null;
}
