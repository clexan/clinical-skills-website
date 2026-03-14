import type {
  ChapterFrontmatter,
  ChapterLoader,
  ChapterModule,
  ChapterRecord,
  ChapterSourcePath,
  PartId,
} from "@/types/content";

const chapterModules = import.meta.glob<ChapterModule>("/src/docs/**/*.mdx");
const chapterMetadataModules = import.meta.glob<ChapterFrontmatter>("/src/docs/part-*/*.mdx", {
  eager: true,
  import: "default",
  query: "?chapter-metadata",
});

type ChapterMetadata = Pick<ChapterRecord, "authors" | "description" | "title">;
type ChapterIndexSeed = Omit<ChapterRecord, "authors">;

function getChapterMetadata(sourcePath: ChapterSourcePath): ChapterMetadata {
  const frontmatter = chapterMetadataModules[sourcePath];

  if (!frontmatter) {
    throw new Error(`No chapter metadata found for sourcePath: ${sourcePath}`);
  }

  const { title, description, authors } = frontmatter;

  if (typeof title !== "string" || !title.trim()) {
    throw new Error(`Missing chapter title frontmatter for sourcePath: ${sourcePath}`);
  }

  if (typeof description !== "string" || !description.trim()) {
    throw new Error(`Missing chapter description frontmatter for sourcePath: ${sourcePath}`);
  }

  if (!Array.isArray(authors) || authors.some((author) => typeof author !== "string")) {
    throw new Error(`Missing chapter authors frontmatter for sourcePath: ${sourcePath}`);
  }

  return {
    title: title.trim(),
    description: description.trim(),
    authors: authors.map((author) => author.trim()).filter(Boolean),
  };
}

const chapterIndexSeed = [
  {
    id: "1-1-abcde-sample",
    slug: "1-1-abcde-sample",
    partId: "part-1",
    number: "1.1",
    order: 1,
    title: "Initial assessment of acutely ill patients",
    description: "Structured initial assessment of acutely ill patients using the ABCDE and SAMPLE approaches",
    kind: "chapter",
    status: "verified",
    sourcePath: "/src/docs/part-1/1-1-abcde-sample.mdx",
  },
  {
    id: "1-2-ecg-interpretation",
    slug: "1-2-ecg-interpretation",
    partId: "part-1",
    number: "1.2",
    order: 2,
    title: "Essentials for ECG interpretation in medical emergencies",
    description: "Basic electrocardiography, ECG monitoring, 12-lead ECG interpretation, and STEMI localisation in medical emergencies",
    kind: "chapter",
    status: "ocr-cleaned",
    sourcePath: "/src/docs/part-1/1-2-ecg-interpretation.mdx",
  },
  {
    id: "1-3-vascular-access",
    slug: "1-3-vascular-access",
    partId: "part-1",
    number: "1.3",
    order: 3,
    title: "Intravascular and Intraosseous Access",
    description: "Establishing peripheral intravenous and intraosseous access in acutely ill patients",
    kind: "chapter",
    status: "ocr-cleaned",
    sourcePath: "/src/docs/part-1/1-3-vascular-access.mdx",
  },
  {
    id: "1-4-als-algorithm",
    slug: "1-4-als-algorithm",
    partId: "part-1",
    number: "1.4",
    order: 4,
    title: "Advanced life support (ALS) algorithm",
    description: "Standardised ALS management of shockable and non-shockable cardiac arrest rhythms",
    kind: "chapter",
    status: "needs-review",
    sourcePath: "/src/docs/part-1/1-4-als-algorithm.mdx",
  },
  {
    id: "part-1-review",
    slug: "part-1-review",
    partId: "part-1",
    number: "Review",
    order: 5,
    title: "Review",
    description: "Integrated review of initial assessment, ECG basics, vascular access, and ALS",
    kind: "review",
    status: "draft",
    sourcePath: "/src/docs/part-1/review.mdx",
  },
  {
    id: "2-1-acs",
    slug: "2-1-acs",
    partId: "part-2",
    number: "2.1",
    order: 1,
    title: "Initial assessment and management of a patient with acute coronary syndrome",
    description: "Recognition, diagnosis, and initial treatment of acute coronary syndrome",
    kind: "chapter",
    status: "ocr-cleaned",
    sourcePath: "/src/docs/part-2/2-1-acs.mdx",
  },
  {
    id: "2-2-arrhythmias",
    slug: "2-2-arrhythmias",
    partId: "part-2",
    number: "2.2",
    order: 2,
    title: "Initial assessment and management of a patient with cardiac arrhythmia",
    description: "Initial assessment, classification, and treatment of cardiac arrhythmias",
    kind: "chapter",
    status: "ocr-cleaned",
    sourcePath: "/src/docs/part-2/2-2-arrhythmias.mdx",
  },
  {
    id: "part-2-review",
    slug: "part-2-review",
    partId: "part-2",
    number: "Review",
    order: 3,
    title: "Review",
    description: "Integrated review of acute coronary syndrome and cardiac arrhythmias",
    kind: "review",
    status: "draft",
    sourcePath: "/src/docs/part-2/review.mdx",
  },
  {
    id: "3-1-resp-failure",
    slug: "3-1-resp-failure",
    partId: "part-3",
    number: "3.1",
    order: 1,
    title: "Acute respiratory failure",
    description: "Physiology, oxygen and carbon dioxide transport, oxygen dissociation curve, and clinical types of acute respiratory failure",
    kind: "chapter",
    status: "ocr-cleaned",
    sourcePath: "/src/docs/part-3/3-1-resp-failure.mdx",
  },
  {
    id: "3-2-oxygen",
    slug: "3-2-oxygen",
    partId: "part-3",
    number: "3.2",
    order: 2,
    title: "Oxygen therapy and pulse oximetry",
    description: "Practical oxygen delivery, target saturations, delivery devices, and pulse oximetry limitations",
    kind: "chapter",
    status: "needs-review",
    sourcePath: "/src/docs/part-3/3-2-oxygen.mdx",
  },
  {
    id: "3-3-abg",
    slug: "3-3-abg",
    partId: "part-3",
    number: "3.3",
    order: 3,
    title: "Arterial blood gases (ABGs)",
    description: "Core principles of ABG interpretation, acid-base balance, SID, and the ERC stepwise approach",
    kind: "chapter",
    status: "needs-review",
    sourcePath: "/src/docs/part-3/3-3-abg.mdx",
  },
  {
    id: "3-4-anaphylaxis",
    slug: "3-4-anaphylaxis",
    partId: "part-3",
    number: "3.4",
    order: 4,
    title: "Anaphylaxis",
    description: "Initial assessment and treatment of life-threatening anaphylaxis",
    kind: "chapter",
    status: "ocr-cleaned",
    sourcePath: "/src/docs/part-3/3-4-anaphylaxis.mdx",
  },
  {
    id: "3-5-bronchospasm",
    slug: "3-5-bronchospasm",
    partId: "part-3",
    number: "3.5",
    order: 5,
    title: "Acute bronchospasm",
    description: "Assessment and treatment of asthma and COPD exacerbations with bronchospasm",
    kind: "chapter",
    status: "ocr-cleaned",
    sourcePath: "/src/docs/part-3/3-5-bronchospasm.mdx",
  },
  {
    id: "3-6-pulm-oedema",
    slug: "3-6-pulm-oedema",
    partId: "part-3",
    number: "3.6",
    order: 6,
    title: "Pulmonary oedema",
    description: "Initial assessment and management of pulmonary oedema",
    kind: "chapter",
    status: "ocr-cleaned",
    sourcePath: "/src/docs/part-3/3-6-pulm-oedema.mdx",
  },
  {
    id: "3-7-mechanical-ventilation",
    slug: "3-7-mechanical-ventilation",
    partId: "part-3",
    number: "3.7",
    order: 7,
    title: "Mechanical ventilation",
    description: "Initial emergency setup principles for non-invasive and invasive mechanical ventilation",
    kind: "chapter",
    status: "draft",
    sourcePath: "/src/docs/part-3/3-7-mechanical-ventilation.mdx",
  },
  {
    id: "part-3-review",
    slug: "part-3-review",
    partId: "part-3",
    number: "Review",
    order: 8,
    title: "Review",
    description: "Integrated review of respiratory failure, oxygen therapy, ABGs, and respiratory emergencies",
    kind: "review",
    status: "draft",
    sourcePath: "/src/docs/part-3/review.mdx",
  },
  {
    id: "4-1-neuro",
    slug: "4-1-neuro",
    partId: "part-4",
    number: "4.1",
    order: 1,
    title: "Sudden neurological deterioration",
    description: "Causes, differential diagnosis, and initial ABCDE plus SAMPLE management of sudden neurological deterioration",
    kind: "chapter",
    status: "ocr-cleaned",
    sourcePath: "/src/docs/part-4/4-1-neuro.mdx",
  },
  {
    id: "4-2-seizures",
    slug: "4-2-seizures",
    partId: "part-4",
    number: "4.2",
    order: 2,
    title: "Seizures",
    description: "Classification, treatment, and initial ABCDE plus SAMPLE care of patients with seizures",
    kind: "chapter",
    status: "ocr-cleaned",
    sourcePath: "/src/docs/part-4/4-2-seizures.mdx",
  },
  {
    id: "4-3-poisoning",
    slug: "4-3-poisoning",
    partId: "part-4",
    number: "4.3",
    order: 3,
    title: "Acute poisoning",
    description: "Recognition, ABCDE assessment, decontamination, excretion strategies, and selected antidotes in acute poisoning",
    kind: "chapter",
    status: "needs-review",
    sourcePath: "/src/docs/part-4/4-3-poisoning.mdx",
  },
  {
    id: "part-4-review",
    slug: "part-4-review",
    partId: "part-4",
    number: "Review",
    order: 4,
    title: "Review",
    description: "Integrated review of neurological deterioration, seizures, and poisoning",
    kind: "review",
    status: "draft",
    sourcePath: "/src/docs/part-4/review.mdx",
  },
  {
    id: "5-1-sepsis",
    slug: "5-1-sepsis",
    partId: "part-5",
    number: "5.1",
    order: 1,
    title: "Sepsis and septic shock",
    description: "Recognition, diagnosis, and first-hour management of sepsis and septic shock",
    kind: "chapter",
    status: "ocr-cleaned",
    sourcePath: "/src/docs/part-5/5-1-sepsis.mdx",
  },
  {
    id: "part-5-review",
    slug: "part-5-review",
    partId: "part-5",
    number: "Review",
    order: 2,
    title: "Review",
    description: "Integrated review of sepsis recognition and first-hour management",
    kind: "review",
    status: "draft",
    sourcePath: "/src/docs/part-5/review.mdx",
  },
  {
    id: "6-1-iv-fluids",
    slug: "6-1-iv-fluids",
    partId: "part-6",
    number: "6.1",
    order: 1,
    title: "Intravenous fluids",
    description: "Basal fluid requirements and practical selection of intravenous fluids",
    kind: "chapter",
    status: "ocr-cleaned",
    sourcePath: "/src/docs/part-6/6-1-iv-fluids.mdx",
  },
  {
    id: "6-2-electrolytes",
    slug: "6-2-electrolytes",
    partId: "part-6",
    number: "6.2",
    order: 2,
    title: "Management of electrolyte disorders",
    description: "Recognition, assessment, and early management of potassium, sodium, calcium, and magnesium disorders",
    kind: "chapter",
    status: "missing-figures",
    sourcePath: "/src/docs/part-6/6-2-electrolytes.mdx",
  },
  {
    id: "6-3-haemorrhage",
    slug: "6-3-haemorrhage",
    partId: "part-6",
    number: "6.3",
    order: 3,
    title: "Haemorrhage and haemorrhagic shock",
    description: "Recognition, classification, and early management of haemorrhage and haemorrhagic shock",
    kind: "chapter",
    status: "missing-figures",
    sourcePath: "/src/docs/part-6/6-3-haemorrhage.mdx",
  },
  {
    id: "part-6-review",
    slug: "part-6-review",
    partId: "part-6",
    number: "Review",
    order: 4,
    title: "Review",
    description: "Integrated review of fluids, electrolyte disorders, and haemorrhage",
    kind: "review",
    status: "draft",
    sourcePath: "/src/docs/part-6/review.mdx",
  },
  {
    id: "7-1-trauma",
    slug: "7-1-trauma",
    partId: "part-7",
    number: "7.1",
    order: 1,
    title: "Trauma assessment and management",
    description: "Prehospital trauma assessment, rapid survey, immobilisation, and selected injury patterns",
    kind: "chapter",
    status: "needs-review",
    sourcePath: "/src/docs/part-7/7-1-trauma.mdx",
  },
  {
    id: "7-2-burns",
    slug: "7-2-burns",
    partId: "part-7",
    number: "7.2",
    order: 2,
    title: "Burns",
    description: "Initial assessment and emergency management of patients with burns",
    kind: "chapter",
    status: "ocr-cleaned",
    sourcePath: "/src/docs/part-7/7-2-burns.mdx",
  },
  {
    id: "part-7-review",
    slug: "part-7-review",
    partId: "part-7",
    number: "Review",
    order: 3,
    title: "Review",
    description: "Integrated review of trauma assessment and burns",
    kind: "review",
    status: "draft",
    sourcePath: "/src/docs/part-7/review.mdx",
  },
] satisfies readonly ChapterIndexSeed[];

export const chapterIndex = chapterIndexSeed.map((chapter) => ({
  ...chapter,
  ...getChapterMetadata(chapter.sourcePath),
})) satisfies readonly ChapterRecord[];

export function getChapterBySlug(chapterSlug: string) {
  return chapterIndex.find((chapter) => chapter.slug === chapterSlug) ?? null;
}

export function getChaptersForPart(partId: PartId, options?: { includeReviews?: boolean }) {
  return chapterIndex
    .filter((chapter) => {
      if (chapter.partId !== partId) {
        return false;
      }

      if (options?.includeReviews) {
        return true;
      }

      return chapter.kind === "chapter";
    })
    .sort((left, right) => left.order - right.order);
}

export function getChapterLoader(sourcePath: ChapterSourcePath): ChapterLoader {
  const loader = chapterModules[sourcePath];

  if (!loader) {
    throw new Error(`No MDX module found for sourcePath: ${sourcePath}`);
  }

  return loader;
}

export function getAdjacentChapters(chapter: ChapterRecord) {
  if (chapter.kind !== "chapter") {
    return { previous: null, next: null };
  }

  const chapters = getChaptersForPart(chapter.partId);
  const index = chapters.findIndex((entry) => entry.slug === chapter.slug);

  return {
    previous: index > 0 ? chapters[index - 1] : null,
    next: index >= 0 && index < chapters.length - 1 ? chapters[index + 1] : null,
  };
}
