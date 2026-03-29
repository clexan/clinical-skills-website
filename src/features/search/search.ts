import type { IndexedSearchDocument, SearchMode, SearchModeLabel } from "./search-index";
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
  mode: SearchMode;
  modeLabel: SearchModeLabel;
  targetUrl: string;
  score: number;
}

export type { SearchMode, SearchModeLabel };

const BODY_MATCH_SCORE = 12;
const BODY_MATCH_BONUS_LIMIT = 6;
const CHAPTER_TITLE_MATCH_SCORE = 96;
const CHAPTER_TITLE_EXACT_MATCH_BONUS = 32;
const CHAPTER_DESCRIPTION_MATCH_SCORE = 42;
const PART_TITLE_MATCH_SCORE = 18;
const SECTION_HEADING_MATCH_SCORE = 78;
const SECTION_HEADING_EXACT_MATCH_BONUS = 28;
const SECTION_CHAPTER_TITLE_MATCH_SCORE = 18;
const EXCERPT_MAX_LENGTH = 310;
const EXCERPT_FALLBACK_LENGTH = 160;
const EXCERPT_FALLBACK_PREFIX = 60;
const MAX_EXCERPT_SENTENCES = 2;
const MIN_SENTENCE_CONTEXT_LENGTH = 90;
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

interface TextRange {
  start: number;
  end: number;
}

interface TextBlock extends TextRange {
  text: string;
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

function trimRange(source: string, start: number, end: number): TextRange | null {
  let rangeStart = start;
  let rangeEnd = end;

  while (rangeStart < rangeEnd && /\s/.test(source[rangeStart] ?? "")) {
    rangeStart += 1;
  }

  while (rangeEnd > rangeStart && /\s/.test(source[rangeEnd - 1] ?? "")) {
    rangeEnd -= 1;
  }

  return rangeStart < rangeEnd ? { start: rangeStart, end: rangeEnd } : null;
}

function isSentenceTerminal(character: string) {
  return character === "." || character === "!" || character === "?";
}

function isSentenceTrailingCharacter(character: string) {
  return character === "\"" || character === "'" || character === ")" || character === "]";
}

function getSentenceRanges(source: string) {
  const ranges: TextRange[] = [];
  let sentenceStart = 0;

  for (let index = 0; index < source.length; index += 1) {
    if (!isSentenceTerminal(source[index] ?? "")) {
      continue;
    }

    let sentenceEnd = index + 1;

    while (sentenceEnd < source.length && isSentenceTrailingCharacter(source[sentenceEnd] ?? "")) {
      sentenceEnd += 1;
    }

    const nextCharacter = source[sentenceEnd];

    if (sentenceEnd < source.length && !/\s/.test(nextCharacter ?? "")) {
      continue;
    }

    const range = trimRange(source, sentenceStart, sentenceEnd);

    if (range) {
      ranges.push(range);
    }

    sentenceStart = sentenceEnd;
  }

  const trailingRange = trimRange(source, sentenceStart, source.length);

  if (trailingRange) {
    ranges.push(trailingRange);
  }

  return ranges;
}

function getTextBlocks(source: string) {
  const blocks: TextBlock[] = [];

  for (const match of source.matchAll(/[^\n]+/g)) {
    const rawText = match[0];
    const text = rawText.trim();

    if (!text) {
      continue;
    }

    const start = match.index ?? 0;

    blocks.push({
      start,
      end: start + rawText.length,
      text,
    });
  }

  return blocks;
}

function buildFixedExcerpt(source: string, matchIndex: number) {
  if (!source) {
    return "";
  }

  if (matchIndex < 0) {
    const excerpt = source.slice(0, EXCERPT_FALLBACK_LENGTH).trim();

    return excerpt.length < source.length ? `${excerpt}…` : excerpt;
  }

  const start = Math.max(0, matchIndex - EXCERPT_FALLBACK_PREFIX);
  const end = Math.min(source.length, start + EXCERPT_FALLBACK_LENGTH);
  const adjustedStart = Math.max(0, end - EXCERPT_FALLBACK_LENGTH);
  const excerpt = source.slice(adjustedStart, end).trim();
  const prefix = adjustedStart > 0 ? "…" : "";
  const suffix = end < source.length ? "…" : "";

  return `${prefix}${excerpt}${suffix}`;
}

function buildSentenceExcerpt(source: string, sentenceRanges: TextRange[], matchIndex: number) {
  if (!sentenceRanges.length) {
    return buildFixedExcerpt(source, matchIndex);
  }

  if (matchIndex < 0) {
    const lastSentenceIndex = Math.min(MAX_EXCERPT_SENTENCES, sentenceRanges.length) - 1;
    const excerptStart = sentenceRanges[0]?.start ?? 0;
    const excerptEnd = sentenceRanges[lastSentenceIndex]?.end ?? source.length;
    const excerpt = source.slice(excerptStart, excerptEnd).trim();

    if (excerpt.length <= EXCERPT_MAX_LENGTH) {
      const suffix = excerptEnd < source.length ? "…" : "";

      return `${excerpt}${suffix}`;
    }

    return buildFixedExcerpt(source, matchIndex);
  }

  const matchedSentenceIndex = sentenceRanges.findIndex(
    (range) => matchIndex >= range.start && matchIndex < range.end,
  );

  if (matchedSentenceIndex < 0) {
    return buildFixedExcerpt(source, matchIndex);
  }

  const matchedSentence = sentenceRanges[matchedSentenceIndex];

  if (!matchedSentence) {
    return buildFixedExcerpt(source, matchIndex);
  }

  let excerptStartSentenceIndex = matchedSentenceIndex;
  let excerptEndSentenceIndex = matchedSentenceIndex;
  const matchedSentenceLength = matchedSentence.end - matchedSentence.start;

  if (matchedSentenceLength < MIN_SENTENCE_CONTEXT_LENGTH) {
    const canExpandBackward = matchedSentenceIndex > 0;
    const canExpandForward = matchedSentenceIndex < sentenceRanges.length - 1;
    const distanceFromSentenceStart = matchIndex - matchedSentence.start;
    const distanceToSentenceEnd = matchedSentence.end - matchIndex;

    if (canExpandBackward && canExpandForward) {
      if (distanceFromSentenceStart > distanceToSentenceEnd) {
        excerptStartSentenceIndex -= 1;
      } else {
        excerptEndSentenceIndex += 1;
      }
    } else if (canExpandForward) {
      excerptEndSentenceIndex += 1;
    } else if (canExpandBackward) {
      excerptStartSentenceIndex -= 1;
    }
  }

  if (
    excerptEndSentenceIndex - excerptStartSentenceIndex + 1 > MAX_EXCERPT_SENTENCES
  ) {
    excerptEndSentenceIndex = excerptStartSentenceIndex + MAX_EXCERPT_SENTENCES - 1;
  }

  const excerptStart = sentenceRanges[excerptStartSentenceIndex]?.start ?? matchedSentence.start;
  const excerptEnd = sentenceRanges[excerptEndSentenceIndex]?.end ?? matchedSentence.end;
  const excerpt = source.slice(excerptStart, excerptEnd).trim();

  if (excerpt.length > EXCERPT_MAX_LENGTH) {
    const matchedSentenceExcerpt = source.slice(matchedSentence.start, matchedSentence.end).trim();

    if (matchedSentenceExcerpt.length <= EXCERPT_MAX_LENGTH) {
      const prefix = matchedSentence.start > 0 ? "…" : "";
      const suffix = matchedSentence.end < source.length ? "…" : "";

      return `${prefix}${matchedSentenceExcerpt}${suffix}`;
    }

    return buildFixedExcerpt(source, matchIndex);
  }

  const prefix = excerptStart > 0 ? "…" : "";
  const suffix = excerptEnd < source.length ? "…" : "";

  return `${prefix}${excerpt}${suffix}`;
}

function buildExcerpt(source: string, matchIndex: number) {
  if (!source) {
    return "";
  }

  const blocks = getTextBlocks(source);

  if (!blocks.length) {
    return "";
  }

  if (matchIndex >= 0) {
    const matchedBlock = blocks.find((block) => matchIndex >= block.start && matchIndex < block.end);

    if (matchedBlock) {
      return buildSentenceExcerpt(
        matchedBlock.text,
        getSentenceRanges(matchedBlock.text),
        matchIndex - matchedBlock.start,
      );
    }
  }

  const [firstBlock] = blocks;

  if (!firstBlock) {
    return "";
  }

  return buildSentenceExcerpt(firstBlock.text, getSentenceRanges(firstBlock.text), -1);
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

      const matchIndex = document.excerptSource.toLowerCase().indexOf(bestMatchedTerm);
      const excerpt =
        document.kind === "chapter" && document.chapterDescription
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
        mode: document.mode,
        modeLabel: document.modeLabel,
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
      mode: result.mode,
      modeLabel: result.modeLabel,
      targetUrl: result.targetUrl,
      score: result.score,
    });
  }

  return results;
}
