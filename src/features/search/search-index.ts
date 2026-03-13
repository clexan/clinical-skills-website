import { chapterIndex } from "@/content/chapter-index";
import { getPartById } from "@/content/parts";
import { getUniqueHeadingId } from "@/lib/headings";

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

  return documents;
}

let searchDocumentsPromise: Promise<IndexedSearchDocument[]> | null = null;

export function loadSearchDocuments() {
  searchDocumentsPromise ??= buildSearchIndex();

  return searchDocumentsPromise;
}
