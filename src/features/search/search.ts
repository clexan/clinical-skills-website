import type { IndexedSearchDocument } from "./search-index";
import { loadSearchDocuments } from "./search-index";

export interface SearchResult {
  id: string;
  partSlug: string;
  chapterSlug: string;
  chapterTitle: string;
  chapterNumber: string;
  partTitle: string;
  headingId?: string;
  headingText?: string;
  excerpt: string;
  kind: "chapter" | "section";
  score: number;
}

const BODY_MATCH_SCORE = 12;
const BODY_MATCH_BONUS_LIMIT = 6;
const CHAPTER_TITLE_MATCH_SCORE = 96;
const CHAPTER_TITLE_EXACT_MATCH_BONUS = 32;
const CHAPTER_DESCRIPTION_MATCH_SCORE = 42;
const PART_TITLE_MATCH_SCORE = 18;
const SECTION_HEADING_MATCH_SCORE = 78;
const SECTION_HEADING_EXACT_MATCH_BONUS = 28;
const SECTION_CHAPTER_TITLE_MATCH_SCORE = 18;
const EXCERPT_LENGTH = 160;
const MAX_EXCERPT_PREFIX = 60;
const MAX_RESULTS = 20;
const ALIAS_QUERY_WEIGHT = 0.62;

const QUERY_ALIASES: Record<string, string[]> = {
  abg: ["arterial blood gas"],
  acs: ["acute coronary syndrome"],
  als: ["advanced life support"],
  copd: ["chronic obstructive pulmonary disease"],
  io: ["intraosseous"],
  iv: ["intravenous"],
  pea: ["pulseless electrical activity"],
  pvt: ["pulseless ventricular tachycardia"],
  vf: ["ventricular fibrillation"],
  vt: ["ventricular tachycardia"],
};

interface QueryVariant {
  term: string;
  weight: number;
}

function normalizeQuery(query: string) {
  return query.trim().replace(/\s+/g, " ").toLowerCase();
}

function countOccurrences(haystack: string, needle: string) {
  if (!needle) {
    return 0;
  }

  let count = 0;
  let searchIndex = 0;

  while (searchIndex >= 0) {
    searchIndex = haystack.indexOf(needle, searchIndex);

    if (searchIndex === -1) {
      break;
    }

    count += 1;
    searchIndex += needle.length;
  }

  return count;
}

function buildExcerpt(source: string, matchIndex: number) {
  if (!source) {
    return "";
  }

  if (matchIndex < 0) {
    const excerpt = source.slice(0, EXCERPT_LENGTH).trim();

    return excerpt.length < source.length ? `${excerpt}…` : excerpt;
  }

  const start = Math.max(0, matchIndex - MAX_EXCERPT_PREFIX);
  const end = Math.min(source.length, start + EXCERPT_LENGTH);
  const adjustedStart = Math.max(0, end - EXCERPT_LENGTH);
  const excerpt = source.slice(adjustedStart, end).trim();
  const prefix = adjustedStart > 0 ? "…" : "";
  const suffix = end < source.length ? "…" : "";

  return `${prefix}${excerpt}${suffix}`;
}

function getQueryVariants(query: string) {
  const normalizedQuery = normalizeQuery(query);

  if (!normalizedQuery) {
    return [] as QueryVariant[];
  }

  const variants: QueryVariant[] = [{ term: normalizedQuery, weight: 1 }];
  const seenTerms = new Set([normalizedQuery]);

  for (const alias of QUERY_ALIASES[normalizedQuery] ?? []) {
    const normalizedAlias = normalizeQuery(alias);

    if (!normalizedAlias || seenTerms.has(normalizedAlias)) {
      continue;
    }

    seenTerms.add(normalizedAlias);
    variants.push({
      term: normalizedAlias,
      weight: ALIAS_QUERY_WEIGHT,
    });
  }

  return variants;
}

let searchDocuments: IndexedSearchDocument[] = [];
let searchPreparationPromise: Promise<void> | null = null;

export function prepareHandbookSearch() {
  searchPreparationPromise ??= loadSearchDocuments().then((documents) => {
    searchDocuments = documents;
  });

  return searchPreparationPromise;
}

function getDocumentScore(document: IndexedSearchDocument, query: string) {
  let score = 0;

  if (document.kind === "chapter") {
    if (document.normalizedChapterTitle.includes(query)) {
      score += CHAPTER_TITLE_MATCH_SCORE;

      if (document.normalizedChapterTitle === query) {
        score += CHAPTER_TITLE_EXACT_MATCH_BONUS;
      }
    }

    if (document.normalizedChapterDescription.includes(query)) {
      score += CHAPTER_DESCRIPTION_MATCH_SCORE;
    }

    if (document.normalizedPartTitle.includes(query)) {
      score += PART_TITLE_MATCH_SCORE;
    }
  }

  if (document.kind === "section") {
    const normalizedHeading = document.normalizedHeadingText;

    if (normalizedHeading.includes(query)) {
      score += SECTION_HEADING_MATCH_SCORE;

      if (normalizedHeading === query) {
        score += SECTION_HEADING_EXACT_MATCH_BONUS;
      }
    }

    if (document.normalizedChapterTitle.includes(query)) {
      score += SECTION_CHAPTER_TITLE_MATCH_SCORE;
    }
  }

  if (document.bodyText.includes(query)) {
    score += BODY_MATCH_SCORE;
    score += Math.min(countOccurrences(document.bodyText, query), BODY_MATCH_BONUS_LIMIT);
  }

  return score;
}

export function searchHandbook(query: string): SearchResult[] {
  const queryVariants = getQueryVariants(query);

  if (!queryVariants.length) {
    return [];
  }

  const rankedResults = searchDocuments
    .map((document) => {
      let score = 0;
      let bestMatchedTerm = queryVariants[0]?.term ?? "";
      let bestWeightedScore = 0;

      for (const variant of queryVariants) {
        const weightedScore = getDocumentScore(document, variant.term) * variant.weight;

        if (weightedScore <= 0) {
          continue;
        }

        score += weightedScore;

        if (weightedScore > bestWeightedScore) {
          bestWeightedScore = weightedScore;
          bestMatchedTerm = variant.term;
        }
      }

      if (score === 0) {
        return null;
      }

      const matchIndex = document.bodyText.indexOf(bestMatchedTerm);
      const excerpt =
        matchIndex >= 0
          ? buildExcerpt(document.excerptSource, matchIndex)
          : document.kind === "chapter"
            ? document.chapterDescription
            : buildExcerpt(document.excerptSource, matchIndex);

      return {
        id: document.id,
        partSlug: document.partSlug,
        chapterSlug: document.chapterSlug,
        chapterTitle: document.chapterTitle,
        chapterNumber: document.chapterNumber,
        partTitle: document.partTitle,
        headingId: document.headingId,
        headingText: document.headingText,
        excerpt,
        kind: document.kind,
        score,
        targetUrl: document.targetUrl,
        order: document.order,
      };
    })
    .filter(
      (
        result,
      ): result is SearchResult & {
        order: number;
        targetUrl: string;
      } => result !== null,
    )
    .sort((left, right) => right.score - left.score || left.order - right.order);

  const seenTargets = new Set<string>();
  const results: SearchResult[] = [];

  for (const result of rankedResults) {
    if (results.length >= MAX_RESULTS) {
      break;
    }

    if (seenTargets.has(result.targetUrl)) {
      continue;
    }

    seenTargets.add(result.targetUrl);
    results.push({
      id: result.id,
      partSlug: result.partSlug,
      chapterSlug: result.chapterSlug,
      chapterTitle: result.chapterTitle,
      chapterNumber: result.chapterNumber,
      partTitle: result.partTitle,
      headingId: result.headingId,
      headingText: result.headingText,
      excerpt: result.excerpt,
      kind: result.kind,
      score: result.score,
    });
  }

  return results;
}
