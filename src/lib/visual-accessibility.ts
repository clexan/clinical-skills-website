export type VisualAccessibility =
  | {
      kind: "decorative";
    }
  | {
      kind: "informative";
      altText: string;
    };

export type DiagramAccessibility =
  | {
      kind: "decorative";
    }
  | {
      kind: "informative";
      altText: string;
      textEquivalent: string;
    };

function assertNonEmptyText(value: string, field: string, recordId: string) {
  const normalizedValue = value.trim();

  if (!normalizedValue) {
    throw new Error(`Expected ${field} to be non-empty for record "${recordId}".`);
  }

  return normalizedValue;
}

export function assertVisualAccessibility(recordId: string, accessibility: VisualAccessibility) {
  if (accessibility.kind === "decorative") {
    return accessibility;
  }

  return {
    ...accessibility,
    altText: assertNonEmptyText(accessibility.altText, "alt text", recordId),
  } satisfies VisualAccessibility;
}

export function assertDiagramAccessibility(recordId: string, accessibility: DiagramAccessibility) {
  if (accessibility.kind === "decorative") {
    return accessibility;
  }

  return {
    ...accessibility,
    altText: assertNonEmptyText(accessibility.altText, "alt text", recordId),
    textEquivalent: assertNonEmptyText(accessibility.textEquivalent, "text equivalent", recordId),
  } satisfies DiagramAccessibility;
}
