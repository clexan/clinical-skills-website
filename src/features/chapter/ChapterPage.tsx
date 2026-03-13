import type { ComponentType } from "react";
import { useEffect, useRef, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";

import { HandbookLayout } from "@/app/layouts/HandbookLayout";
import { AsthmaSeverityTable } from "@/components/handbook/AsthmaSeverityTable";
import { BleedingCycleFigure } from "@/components/handbook/BleedingCycleFigure";
import { ChestInjuryLifeThreatsFigure } from "@/components/handbook/ChestInjuryLifeThreatsFigure";
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
import {
  getAdjacentChapters,
  getChapterBySlug,
  getChapterLoader,
} from "@/content/chapter-index";
import { getPartById } from "@/content/parts";
import { getChapterDisplayLabel, hasDistinctChapterNumber } from "@/lib/chapter-display";
import { getUniqueHeadingId } from "@/lib/headings";
import type { MDXContentProps } from "@/types/content";
import "@/styles/prose.css";

import styles from "./ChapterPage.module.css";

export function ChapterPage() {
  const { chapterSlug = "" } = useParams();
  const location = useLocation();
  const chapter = getChapterBySlug(chapterSlug);
  const [Content, setContent] = useState<ComponentType<MDXContentProps> | null>(null);
  const [keyPoints, setKeyPoints] = useState<string[] | null>(null);
  const [headings, setHeadings] = useState<Array<{ id: string; text: string }>>([]);
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
    if (!Content || !proseRef.current) {
      setHeadings([]);
      return;
    }

    const usedIds = new Set<string>();
    const nextHeadings = Array.from(proseRef.current.querySelectorAll("h2"))
      .map((heading) => {
        const text = heading.textContent?.trim();

        if (!text) {
          return null;
        }

        let id = heading.id;

        if (id) {
          if (usedIds.has(id)) {
            id = getUniqueHeadingId(text, usedIds);
          } else {
            usedIds.add(id);
          }
        } else {
          id = getUniqueHeadingId(text, usedIds);
        }

        heading.id = id;

        return { id, text };
      })
      .filter((heading): heading is { id: string; text: string } => heading !== null);

    setHeadings(nextHeadings.length >= 3 ? nextHeadings : []);
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
  const { previous, next } = getAdjacentChapters(chapter);
  const hasKeyPoints = Boolean(keyPoints?.length);
  const hasToc = headings.length > 0;

  return (
    <HandbookLayout title="">
      <div className={styles.contentColumn}>
        <div className={styles.chapterMeta}>
          <p className={styles.partEyebrow}>{part ? `Part ${part.position} · ${part.title}` : chapter.partId}</p>
        </div>

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
          {hasDistinctChapterNumber(chapter) ? <p className={styles.number}>{chapter.number}</p> : null}
          <h1 className={styles.title}>{chapter.title}</h1>
          <p className={styles.description}>{chapter.description}</p>
        </header>

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
          <>
            {hasToc ? (
              <>
                <nav className={`${styles.toc} ${styles.tocDesktop}`} aria-label="In this chapter">
                  <p className={styles.tocLabel}>In this chapter</p>
                  <ul className={styles.tocList}>
                    {headings.map((heading) => (
                      <li key={heading.id}>
                        <a className={styles.tocLink} href={`#${heading.id}`}>
                          {heading.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>

                <details className={styles.tocDisclosure}>
                  <summary className={`${styles.disclosureSummary} ${styles.tocSummary}`}>In this chapter</summary>
                  <ul className={`${styles.tocList} ${styles.tocDisclosureList}`}>
                    {headings.map((heading) => (
                      <li key={heading.id}>
                        <a className={styles.tocLink} href={`#${heading.id}`}>
                          {heading.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </details>
              </>
            ) : null}

            <div className={`${styles.proseBody} prose`} ref={proseRef}>
              <Content
                components={{
                  AsthmaSeverityTable,
                  BasicMechanismsOfInjuryTable,
                  BleedingCycleFigure,
                  ChestInjuryLifeThreatsFigure,
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
          </>
        ) : null}
      </div>

      {previous || next ? (
        <nav className={styles.pagination} aria-label="Chapter navigation">
          {previous ? (
            <Link className={styles.paginationLink} to={`/chapter/${previous.slug}`}>
              <span aria-hidden="true" className={styles.paginationArrow}>
                ←
              </span>
              <span className={styles.paginationCopy}>
                <span className={styles.paginationLabel}>Previous</span>
                <span className={styles.paginationTitle}>{previous.title}</span>
              </span>
            </Link>
          ) : null}

          {next ? (
            <Link className={`${styles.paginationLink} ${styles.paginationLinkNext}`} to={`/chapter/${next.slug}`}>
              <span className={styles.paginationCopy}>
                <span className={styles.paginationLabel}>Next</span>
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
