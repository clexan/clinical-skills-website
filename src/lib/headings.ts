export interface HeadingRecord {
  id: string;
  text: string;
}

export function slugifyHeading(text: string) {
  const slug = text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

  return slug || "section";
}

export function getUniqueHeadingId(text: string, usedIds: Set<string>) {
  const baseId = slugifyHeading(text);
  let nextId = baseId;
  let suffix = 2;

  while (usedIds.has(nextId)) {
    nextId = `${baseId}-${suffix}`;
    suffix += 1;
  }

  usedIds.add(nextId);

  return nextId;
}
