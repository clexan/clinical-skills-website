import { chapterIndex, getChapterBySlug } from "@/content/chapter-index";
import { emergencyEntries } from "@/features/reference/referenceData";
import { finalPrepTopics } from "@/data/final-prep";
import { practicals } from "@/data/practicals";
import { getPartById } from "@/content/parts";
import { getUniqueHeadingId } from "@/lib/headings";

export type SearchMode = "chapter" | "review" | "practical" | "final-prep" | "reference";
export type SearchModeLabel =
  | "Chapter"
  | "Review"
  | "Practical session"
  | "Final prep"
  | "Emergency reference";

export interface SearchDocument {
  id: string;
  partSlug: string;
  chapterSlug: string;
  chapterNumber: string;
  partTitle: string;
  chapterTitle: string;
  chapterDescription: string;
  headingId?: string;
  headingText?: string;
  bodyText: string;
  kind: "chapter" | "section";
  mode: SearchMode;
  modeLabel: SearchModeLabel;
}

export interface IndexedSearchDocument extends SearchDocument {
  excerptSource: string;
  normalizedChapterTitle: string;
  normalizedChapterDescription: string;
  normalizedHeadingText: string;
  normalizedPartTitle: string;
  order: number;
  targetUrl: string;
}

const rawChapterModules = import.meta.glob<string>("/src/docs/**/*.mdx", {
  eager: true,
  import: "default",
  query: "?raw",
});

interface ExtractedSection {
  headingId: string;
  headingText: string;
  excerptSource: string;
  bodyText: string;
}

function normalizeVisibleText(text: string) {
  return text.replace(/\s+/g, " ").trim();
}

function normalizeSearchText(text: string) {
  return normalizeVisibleText(text).toLowerCase();
}

function stripFrontmatter(source: string) {
  return source.replace(/^---[\s\S]*?---\s*/, "");
}

function stripExports(source: string) {
  return source.replace(/^export\s+const\s+\w+\s*=\s*\[[\s\S]*?\]\s*;?\s*/gm, "");
}

function stripImports(source: string) {
  return source.replace(/^\s*import\s.+$/gm, "");
}

function stripJsx(source: string) {
  return source
    .replace(/<([A-Za-z][\w.-]*)(?:\s[\s\S]*?)?\/>/g, "\n")
    .replace(/<\/?([A-Za-z][\w.-]*)(?:\s[^>]*)?>/g, " ");
}

function stripTables(source: string) {
  return source.replace(/^\s*\|.*$/gm, "");
}

function toPlainText(line: string) {
  return line
    .replace(/!\[[^\]]*]\([^)]*\)/g, " ")
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
    .replace(/`([^`]+)`/g, "$1")
    .replace(/^\s{0,3}>+\s?/, "")
    .replace(/^#{1,6}\s+/, "")
    .replace(/^\s*(?:[-*+]|\d+\.|[a-z]\.)\s+/i, "")
    .replace(/[*_~]/g, "")
    .replace(/\\/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function extractSearchableText(source: string) {
  const preparedSource = stripTables(stripJsx(stripImports(stripExports(stripFrontmatter(source)))));
  const lines = preparedSource.split(/\r?\n/);
  const chapterLines: string[] = [];
  const sectionDrafts: Array<{ headingText: string; lines: string[] }> = [];
  let currentSection: { headingText: string; lines: string[] } | null = null;

  for (const line of lines) {
    const trimmedLine = line.trim();

    if (!trimmedLine) {
      continue;
    }

    const h2Match = trimmedLine.match(/^##\s+(?!#)(.+)$/);

    if (h2Match) {
      const headingText = toPlainText(h2Match[1]);

      if (!headingText) {
        continue;
      }

      chapterLines.push(headingText);
      currentSection = {
        headingText,
        lines: [headingText],
      };
      sectionDrafts.push(currentSection);
      continue;
    }

    const h3Match = trimmedLine.match(/^###\s+(?!#)(.+)$/);

    if (h3Match) {
      const headingText = toPlainText(h3Match[1]);

      if (!headingText) {
        continue;
      }

      chapterLines.push(headingText);
      currentSection?.lines.push(headingText);
      continue;
    }

    if (/^#\s+/.test(trimmedLine)) {
      continue;
    }

    const plainText = toPlainText(line);

    if (!plainText) {
      continue;
    }

    chapterLines.push(plainText);
    currentSection?.lines.push(plainText);
  }

  const usedHeadingIds = new Set<string>();
  const chapterText = normalizeVisibleText(chapterLines.join(" "));
  const sections: ExtractedSection[] = sectionDrafts
    .map((section) => {
      const excerptSource = normalizeVisibleText(section.lines.join(" "));

      if (!excerptSource) {
        return null;
      }

      return {
        headingId: getUniqueHeadingId(section.headingText, usedHeadingIds),
        headingText: section.headingText,
        excerptSource,
        bodyText: excerptSource.toLowerCase(),
      };
    })
    .filter((section): section is ExtractedSection => section !== null);

  return {
    chapterText,
    sections,
  };
}

function extractRawTextFromDevModule(moduleSource: string) {
  const match = moduleSource.match(/const MDXLayout = ("(?:\\.|[^"\\])*");/s);

  if (!match) {
    return "";
  }

  try {
    return JSON.parse(match[1]);
  } catch {
    return "";
  }
}

async function resolveChapterSource(sourcePath: string) {
  const rawSource = rawChapterModules[sourcePath];

  if (typeof rawSource === "string") {
    return rawSource;
  }

  if (!import.meta.env.DEV) {
    return "";
  }

  const response = await fetch(`${sourcePath}?raw`);
  const moduleSource = await response.text();

  return extractRawTextFromDevModule(moduleSource);
}

async function buildSearchIndex() {
  let order = 0;
  const documents: IndexedSearchDocument[] = [];

  for (const chapter of chapterIndex) {
    const part = getPartById(chapter.partId);
    const partTitle = part?.title ?? chapter.partId;
    const sourceText = await resolveChapterSource(chapter.sourcePath);
    const { chapterText, sections } = extractSearchableText(sourceText);

    const chapterMode = chapter.kind === "review" ? "review" : "chapter";
    const chapterModeLabel = chapter.kind === "review" ? "Review" : "Chapter";

    documents.push({
      id: `chapter:${chapter.slug}`,
      partSlug: part?.slug ?? chapter.partId,
      chapterSlug: chapter.slug,
      chapterNumber: chapter.number,
      partTitle,
      chapterTitle: chapter.title,
      chapterDescription: chapter.description,
      bodyText: normalizeSearchText(chapterText),
      excerptSource: chapterText,
      kind: "chapter",
      mode: chapterMode,
      modeLabel: chapterModeLabel,
      normalizedChapterTitle: normalizeSearchText(chapter.title),
      normalizedChapterDescription: normalizeSearchText(chapter.description),
      normalizedHeadingText: "",
      normalizedPartTitle: normalizeSearchText(partTitle),
      order,
      targetUrl: `/chapter/${chapter.slug}`,
    });

    order += 1;

    for (const section of sections) {
      documents.push({
        id: `section:${chapter.slug}#${section.headingId}`,
        partSlug: part?.slug ?? chapter.partId,
        chapterSlug: chapter.slug,
        chapterNumber: chapter.number,
        partTitle,
        chapterTitle: chapter.title,
        chapterDescription: chapter.description,
        headingId: section.headingId,
        headingText: section.headingText,
        bodyText: section.bodyText,
        excerptSource: section.excerptSource,
        kind: "section",
        mode: chapterMode,
        modeLabel: chapterModeLabel,
        normalizedChapterTitle: normalizeSearchText(chapter.title),
        normalizedChapterDescription: normalizeSearchText(chapter.description),
        normalizedHeadingText: normalizeSearchText(section.headingText),
        normalizedPartTitle: normalizeSearchText(partTitle),
        order,
        targetUrl: `/chapter/${chapter.slug}#${section.headingId}`,
      });

      order += 1;
    }
  }

  for (const practical of practicals) {
    const bodyParts = [
      practical.summary,
      ...practical.equipmentChecklist,
      ...practical.pitfalls,
      ...practical.communicationFocus,
    ];
    const excerptSource = normalizeVisibleText(bodyParts.join(" "));

    documents.push({
      id: `practical:${practical.slug}`,
      partSlug: "",
      chapterSlug: practical.slug,
      chapterNumber: "",
      partTitle: "",
      chapterTitle: practical.title,
      chapterDescription: practical.summary,
      bodyText: normalizeSearchText(bodyParts.join(" ")),
      excerptSource,
      kind: "chapter",
      mode: "practical",
      modeLabel: "Practical session",
      normalizedChapterTitle: normalizeSearchText(practical.title),
      normalizedChapterDescription: normalizeSearchText(practical.summary),
      normalizedHeadingText: "",
      normalizedPartTitle: "",
      order,
      targetUrl: `/practical/${practical.slug}`,
    });

    order += 1;
  }

  for (const topic of finalPrepTopics) {
    const bodyParts = [
      topic.summary,
      ...topic.mustDo,
      ...topic.mustSay,
      ...topic.commonErrors,
    ];
    const excerptSource = normalizeVisibleText(bodyParts.join(" "));

    documents.push({
      id: `final-prep:${topic.slug}`,
      partSlug: "",
      chapterSlug: topic.slug,
      chapterNumber: "",
      partTitle: "",
      chapterTitle: topic.title,
      chapterDescription: topic.summary,
      bodyText: normalizeSearchText(bodyParts.join(" ")),
      excerptSource,
      kind: "chapter",
      mode: "final-prep",
      modeLabel: "Final prep",
      normalizedChapterTitle: normalizeSearchText(topic.title),
      normalizedChapterDescription: normalizeSearchText(topic.summary),
      normalizedHeadingText: "",
      normalizedPartTitle: "",
      order,
      targetUrl: `/final-prep/${topic.slug}`,
    });

    order += 1;
  }

  for (const entry of emergencyEntries) {
    const relatedChapter = getChapterBySlug(entry.chapterSlug);
    const bodyParts = [
      entry.title,
      entry.subtitle,
      entry.firstStep,
      entry.alert?.body ?? "",
      ...entry.recognition,
      ...entry.first5Minutes,
      ...entry.diagnostics,
      ...entry.priorities,
      ...entry.escalation,
      ...entry.reassessment,
      ...entry.medications.map((medication) =>
        normalizeVisibleText(
          [medication.name, medication.dose, medication.note ?? ""].filter(Boolean).join(" "),
        ),
      ),
    ];
    const excerptSource = normalizeVisibleText([entry.subtitle, entry.firstStep].join(" "));

    documents.push({
      id: `reference:${entry.slug}`,
      partSlug: "reference",
      chapterSlug: entry.slug,
      chapterNumber: "",
      partTitle: relatedChapter ? `Emergency Reference · ${relatedChapter.title}` : "Emergency Reference",
      chapterTitle: entry.title,
      chapterDescription: entry.subtitle,
      bodyText: normalizeSearchText(bodyParts.join(" ")),
      excerptSource,
      kind: "chapter",
      mode: "reference",
      modeLabel: "Emergency reference",
      normalizedChapterTitle: normalizeSearchText(entry.title),
      normalizedChapterDescription: normalizeSearchText(entry.subtitle),
      normalizedHeadingText: "",
      normalizedPartTitle: normalizeSearchText(
        relatedChapter ? `Emergency Reference ${relatedChapter.title}` : "Emergency Reference",
      ),
      order,
      targetUrl: `/reference#${entry.slug}`,
    });

    order += 1;
  }

  return documents;
}

let searchDocumentsPromise: Promise<IndexedSearchDocument[]> | null = null;

export function loadSearchDocuments() {
  searchDocumentsPromise ??= buildSearchIndex();

  return searchDocumentsPromise;
}
