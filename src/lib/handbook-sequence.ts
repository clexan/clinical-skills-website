import { getChaptersForPart } from "@/content/chapter-index";
import { getPartById, parts } from "@/content/parts";
import type { ChapterRecord, PartId } from "@/types/content";

export function buildPartSequence(partId: PartId) {
  const items = getChaptersForPart(partId, { includeReviews: true });
  const chapters = items
    .filter((chapter) => chapter.kind === "chapter")
    .sort((left, right) => left.order - right.order);
  const review = items.find((chapter) => chapter.kind === "review");

  return review ? [...chapters, review] : chapters;
}

export function buildHandbookSequence() {
  const orderedParts = [...parts].sort((left, right) => left.position - right.position);

  return orderedParts.flatMap((part) => buildPartSequence(part.id));
}

export function getPaginationEyebrow(
  target: ChapterRecord | null,
  direction: "previous" | "next",
) {
  if (!target) {
    return "";
  }

  const base = direction === "next" ? "Next" : "Previous";

  if (target.kind === "review") {
    const part = getPartById(target.partId);

    return `${base}: ${part?.title ?? target.partId} Review`;
  }

  return `${base} chapter`;
}
