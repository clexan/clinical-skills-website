import type { ComponentType } from "react";
import { useEffect, useRef, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";

import { HandbookLayout } from "@/app/layouts/HandbookLayout";
import { AsthmaSeverityTable } from "@/components/handbook/AsthmaSeverityTable";
import { BleedingCycleFigure } from "@/components/handbook/BleedingCycleFigure";
import { ChestInjuryLifeThreatsFigure } from "@/components/handbook/ChestInjuryLifeThreatsFigure";
import { ChapterAuthorByline } from "@/components/handbook/ChapterAuthorByline";
import { DiagramBlock } from "@/components/handbook/DiagramBlock";
import { CopdDifferentialTable } from "@/components/handbook/CopdDifferentialTable";
import { FigureBlock } from "@/components/handbook/FigureBlock";
import { FormulaCallout } from "@/components/handbook/FormulaCallout";
import { GlasgowComaScaleTable } from "@/components/handbook/GlasgowComaScaleTable";
import { HaemorrhagicShockPresentationCallout } from "@/components/handbook/HaemorrhagicShockPresentationCallout";
import { IntubationIndicationsList } from "@/components/handbook/IntubationIndicationsList";
import {
  IvFluidBasalRequirementsTable,
  IvFluidClassificationTable,
  IvFluidComparisonTable,
} from "@/components/handbook/IvFluidsTables";
import { ItlsFlowchartFigure } from "@/components/handbook/ItlsFlowchartFigure";
import { NivCriteriaTable } from "@/components/handbook/NivCriteriaTable";
import { PoisoningAntidotesTable } from "@/components/handbook/PoisoningAntidotesTable";
import { SepsisQsofaTable } from "@/components/handbook/SepsisQsofaTable";
import { SepsisSofaScoreTable } from "@/components/handbook/SepsisSofaScoreTable";
import { StatusPage } from "@/components/layout/StatusPage";
import {
  BasicMechanismsOfInjuryTable,
  PotentialInjuriesByMechanismTable,
} from "@/components/handbook/TraumaMechanismTables";
import { WheezingDifferentialTable } from "@/components/handbook/WheezingDifferentialTable";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { getChapterBySlug, getChapterLoader } from "@/content/chapter-index";
import { getPartById } from "@/content/parts";
import { getChapterDisplayLabel, hasDistinctChapterNumber } from "@/lib/chapter-display";
import { buildHandbookSequence, buildPartSequence, getPaginationEyebrow } from "@/lib/handbook-sequence";
import { getUniqueHeadingId } from "@/lib/headings";
import type { MDXContentProps } from "@/types/content";
import "@/styles/prose.css";

import { ChapterRail } from "./ChapterRail";
import styles from "./ChapterPage.module.css";

const rawChapterModules = import.meta.glob<string>("/src/docs/**/*.mdx", {
  import: "default",
  query: "?raw",
});

function extractChapterAuthorNames(source: string) {
  const bylineMatch = source.match(/<ChapterAuthorByline[\s\S]*?names=\{\[([\s\S]*?)\]\}[\s\S]*?\/>/m);

  if (!bylineMatch) {
    return [];
  }

  return Array.from(bylineMatch[1].matchAll(/"([^"]+)"/g), (match) => match[1].trim()).filter(Boolean);
}

function HiddenChapterAuthorByline() {
  return null;
}

export function ChapterPage() {
  const { chapterSlug = "" } = useParams();
  const location = useLocation();
  const chapter = getChapterBySlug(chapterSlug);
  const [Content, setContent] = useState<ComponentType<MDXContentProps> | null>(null);
  const [authorNames, setAuthorNames] = useState<string[]>([]);
  const [keyPoints, setKeyPoints] = useState<string[] | null>(null);
  const [headings, setHeadings] = useState<Array<{ id: string; label: string }>>([]);
  const [error, setError] = useState<string | null>(null);
  const proseRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!chapter) {
      return;
    }

    let isActive = true;

    setContent(null);
    setKeyPoints(null);
    setHeadings([]);
    setError(null);

    const chapterLoader = getChapterLoader(chapter.sourcePath);

    chapterLoader()
      .then((module) => {
        if (isActive) {
          const { default: MDXContent, keyPoints: moduleKeyPoints } = module;

          setContent(() => MDXContent);
          setKeyPoints(Array.isArray(moduleKeyPoints) ? moduleKeyPoints : null);
        }
      })
      .catch((caughtError) => {
        console.error(`Failed to load chapter module for "${chapter.slug}".`, caughtError);

        if (isActive) {
          setError("This chapter is not available right now. Please try again.");
        }
      });

    return () => {
      isActive = false;
    };
  }, [chapter]);

  useEffect(() => {
    if (!chapter) {
      setAuthorNames([]);
      return;
    }

    let isActive = true;

    setAuthorNames([]);

    const loadRawChapter = rawChapterModules[chapter.sourcePath];

    if (typeof loadRawChapter !== "function") {
      return;
    }

    loadRawChapter()
      .then((source) => {
        if (isActive) {
          setAuthorNames(extractChapterAuthorNames(source));
        }
      })
      .catch(() => {
        if (isActive) {
          setAuthorNames([]);
        }
      });

    return () => {
      isActive = false;
    };
  }, [chapter]);

  useEffect(() => {
    if (!Content || !proseRef.current) {
      setHeadings([]);
      return;
    }

    const usedIds = new Set<string>();
    const nextHeadings = Array.from(proseRef.current.querySelectorAll("h2, h3"))
      .map((heading) => {
        const label = heading.textContent?.trim();

        if (!label) {
          return null;
        }

        let id = heading.id;

        if (id) {
          if (usedIds.has(id)) {
            id = getUniqueHeadingId(label, usedIds);
          } else {
            usedIds.add(id);
          }
        } else {
          id = getUniqueHeadingId(label, usedIds);
        }

        heading.id = id;

        return { id, label };
      })
      .filter((heading): heading is { id: string; label: string } => heading !== null);

    setHeadings(nextHeadings);
  }, [Content]);

  useEffect(() => {
    if (!Content || !location.hash) {
      return;
    }

    const targetId = decodeURIComponent(location.hash.slice(1));

    if (!targetId) {
      return;
    }

    const frame = window.requestAnimationFrame(() => {
      const target = document.getElementById(targetId);

      target?.scrollIntoView({ block: "start" });
    });

    return () => {
      window.cancelAnimationFrame(frame);
    };
  }, [Content, location.hash]);

  if (!chapter) {
    return (
      <StatusPage
        description="The requested chapter could not be found in this edition of the handbook."
        eyebrow="Chapter unavailable"
        title="This chapter could not be found"
      />
    );
  }

  const part = getPartById(chapter.partId);
  const partSequence = buildPartSequence(chapter.partId);
  const regularChapters = partSequence.filter((entry) => entry.kind === "chapter");
  const chapterPosition = regularChapters.findIndex((entry) => entry.slug === chapter.slug);
  const chapterCount = regularChapters.length;
  const handbookSequence = buildHandbookSequence();
  const currentIndex = handbookSequence.findIndex((entry) => entry.slug === chapter.slug);
  const previous = currentIndex > 0 ? handbookSequence[currentIndex - 1] : null;
  const next =
    currentIndex >= 0 && currentIndex < handbookSequence.length - 1
      ? handbookSequence[currentIndex + 1]
      : null;
  const paginationCount = Number(Boolean(previous)) + Number(Boolean(next));
  const hasKeyPoints = Boolean(keyPoints?.length);
  const hasToc = headings.length > 0;

  return (
    <HandbookLayout contentClassName={styles.layoutSurface} title="">
      <div className={styles.pageGrid}>
        <aside className={styles.railColumn}>
          <ChapterRail currentPartId={chapter.partId} currentSlug={chapter.slug} headings={headings} />
        </aside>

        <div className={styles.contentColumn}>
          <Breadcrumb
            compact
            crumbs={
              part
                ? [
                    { label: "Contents", to: "/" },
                    { label: part.title, to: `/part/${part.slug}` },
                    { label: getChapterDisplayLabel(chapter) },
                  ]
                : [
                    { label: "Contents", to: "/" },
                    { label: getChapterDisplayLabel(chapter) },
                  ]
            }
          />

          <header className={styles.titleBlock}>
            {part && chapter.kind === "review" ? (
              <div className={styles.metaRow}>
                <span className={styles.metaPart}>{part.title}</span>
                <span aria-hidden="true" className={styles.metaSeparator}>
                  ·
                </span>
                <span className={styles.metaPosition}>Review</span>
              </div>
            ) : null}

            {part && chapterPosition >= 0 ? (
              <div className={styles.metaRow}>
                <span className={styles.metaPart}>{part.title}</span>
                <span aria-hidden="true" className={styles.metaSeparator}>
                  ·
                </span>
                <span className={styles.metaPosition}>
                  Chapter {chapterPosition + 1} of {chapterCount}
                </span>
              </div>
            ) : null}

            {hasDistinctChapterNumber(chapter) ? <p className={styles.number}>{chapter.number}</p> : null}
            <h1 className={styles.title}>{chapter.title}</h1>
            <p className={styles.description}>{chapter.description}</p>
            {authorNames.length > 0 ? <ChapterAuthorByline names={authorNames} /> : null}
            <div aria-hidden="true" className={styles.titleDivider} />
          </header>

          {hasToc ? (
            <>
              <nav
                className={`${styles.toc} ${styles.tocDesktop} ${styles.inlineTableOfContents}`}
                aria-label="In this chapter"
              >
                <p className={styles.tocLabel}>In this chapter</p>
                <ul className={styles.tocList}>
                  {headings.map((heading) => (
                    <li key={heading.id}>
                      <a className={styles.tocLink} href={`#${heading.id}`}>
                        {heading.label}
                      </a>
                    </li>
                  ))}
                  </ul>
                </nav>

              <details className={`${styles.tocDisclosure} ${styles.inlineTableOfContents}`}>
                <summary className={`${styles.disclosureSummary} ${styles.tocSummary}`}>In this chapter</summary>
                <ul className={`${styles.tocList} ${styles.tocDisclosureList}`}>
                  {headings.map((heading) => (
                    <li key={heading.id}>
                      <a className={styles.tocLink} href={`#${heading.id}`}>
                        {heading.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </details>
            </>
          ) : null}

          {hasKeyPoints ? (
            <>
              <section
                className={`${styles.keyPoints} ${styles.keyPointsDesktop} surface`}
                aria-labelledby="chapter-key-points"
              >
                <h2 className={styles.keyPointsHeading} id="chapter-key-points">
                  Key Points
                </h2>
                <ul className={styles.keyPointsList}>
                  {keyPoints?.map((item) => (
                    <li className={styles.keyPointsItem} key={item}>
                      {item}
                    </li>
                  ))}
                </ul>
              </section>

              <details className={styles.keyPointsDisclosure}>
                <summary className={`${styles.disclosureSummary} ${styles.keyPointsSummary}`}>Key Points</summary>
                <div className={styles.disclosureBody}>
                  <ul className={styles.keyPointsList}>
                    {keyPoints?.map((item) => (
                      <li className={styles.keyPointsItem} key={item}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </details>
            </>
          ) : null}

          {error ? <p className={`${styles.message} ${styles.error}`}>{error}</p> : null}
          {!Content && !error ? <p className={styles.message}>Loading chapter…</p> : null}

          {Content ? (
            <div className={`${styles.proseBody} prose chapter-content`} ref={proseRef}>
              <Content
                components={{
                  AsthmaSeverityTable,
                  BasicMechanismsOfInjuryTable,
                  BleedingCycleFigure,
                  ChestInjuryLifeThreatsFigure,
                  ChapterAuthorByline: HiddenChapterAuthorByline,
                  CopdDifferentialTable,
                  DiagramBlock,
                  FigureBlock,
                  FormulaCallout,
                  GlasgowComaScaleTable,
                  HaemorrhagicShockPresentationCallout,
                  IntubationIndicationsList,
                  IvFluidBasalRequirementsTable,
                  IvFluidClassificationTable,
                  IvFluidComparisonTable,
                  ItlsFlowchartFigure,
                  NivCriteriaTable,
                  PotentialInjuriesByMechanismTable,
                  PoisoningAntidotesTable,
                  SepsisQsofaTable,
                  SepsisSofaScoreTable,
                  WheezingDifferentialTable,
                }}
              />
            </div>
          ) : null}
        </div>
      </div>

      {previous || next ? (
        <nav
          aria-label="Chapter navigation"
          className={`${styles.pagination}${paginationCount === 1 ? ` ${styles.paginationSingle}` : ""}`}
        >
          {previous ? (
            <Link className={styles.paginationLink} to={`/chapter/${previous.slug}`}>
              <span aria-hidden="true" className={styles.paginationArrow}>
                ←
              </span>
              <span className={styles.paginationCopy}>
                <span className={styles.paginationLabel}>{getPaginationEyebrow(previous, "previous")}</span>
                <span className={styles.paginationTitle}>{previous.title}</span>
              </span>
            </Link>
          ) : null}

          {next ? (
            <Link className={`${styles.paginationLink} ${styles.paginationLinkNext}`} to={`/chapter/${next.slug}`}>
              <span className={styles.paginationCopy}>
                <span className={styles.paginationLabel}>{getPaginationEyebrow(next, "next")}</span>
                <span className={styles.paginationTitle}>{next.title}</span>
              </span>
              <span aria-hidden="true" className={styles.paginationArrow}>
                →
              </span>
            </Link>
          ) : null}
        </nav>
      ) : null}
    </HandbookLayout>
  );
}
