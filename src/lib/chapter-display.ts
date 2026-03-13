type ChapterDisplayRecord = {
  number: string;
  title: string;
};

function normalizeLabel(value: string) {
  return value.trim().toLowerCase();
}

export function hasDistinctChapterNumber(chapter: ChapterDisplayRecord) {
  return normalizeLabel(chapter.number) !== normalizeLabel(chapter.title);
}

export function getChapterDisplayLabel(chapter: ChapterDisplayRecord) {
  return hasDistinctChapterNumber(chapter) ? `${chapter.number} ${chapter.title}` : chapter.title;
}
