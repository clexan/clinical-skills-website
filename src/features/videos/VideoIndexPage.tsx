import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { chapterIndex, getChapterBySlug } from "@/content/chapter-index";
import { companionVideos, type CompanionVideo, type VideoCategory, type VideoPriority } from "@/content/videoData";

import { VideoCard } from "./VideoCard";
import styles from "./VideoIndexPage.module.css";

const categoryOptions: Array<{ key: VideoCategory | "all"; label: string }> = [
  { key: "all", label: "All" },
  { key: "airway", label: "Airway" },
  { key: "resuscitation", label: "Resuscitation" },
  { key: "cardiac", label: "Cardiac" },
  { key: "respiratory", label: "Respiratory" },
  { key: "neuro", label: "Neuro" },
  { key: "sepsis", label: "Sepsis" },
  { key: "metabolic", label: "Metabolic" },
  { key: "trauma", label: "Trauma" },
];

const priorityOptions: Array<{ key: VideoPriority | "all"; label: string }> = [
  { key: "all", label: "All videos" },
  { key: "primary", label: "Core" },
  { key: "reference", label: "Reference" },
];

export function VideoIndexPage() {
  const location = useLocation();
  const [activeCategory, setActiveCategory] = useState<VideoCategory | "all">("all");
  const [activePriority, setActivePriority] = useState<VideoPriority | "all">("all");

  useEffect(() => {
    const hash = location.hash.slice(1);

    if (!hash || !companionVideos.some((video) => video.chapterSlug === hash)) {
      return;
    }

    if (activeCategory !== "all" || activePriority !== "all") {
      setActiveCategory("all");
      setActivePriority("all");
      return;
    }

    const frame = window.requestAnimationFrame(() => {
      document.getElementById(hash)?.scrollIntoView({ block: "start" });
    });

    return () => {
      window.cancelAnimationFrame(frame);
    };
  }, [activeCategory, activePriority, location.hash]);

  const filtered = companionVideos.filter((video) => {
    const categoryMatch = activeCategory === "all" || video.category === activeCategory;
    const priorityMatch = activePriority === "all" || video.priority === activePriority;

    return categoryMatch && priorityMatch;
  });

  const grouped = groupByChapter(filtered);

  return (
    <section className={styles.page}>
      <header className={`${styles.header} surface`}>
        <Breadcrumb
          crumbs={[
            { label: "Handbook", to: "/contents" },
            { label: "Videos" },
          ]}
        />
        <div className={styles.headerRow}>
          <div>
            <p className={styles.eyebrow}>Companion video library</p>
            <h1 className={styles.title}>Clinical Skills Videos</h1>
            <p className={styles.subtitle}>Chapter-linked teaching videos grouped by topic</p>
          </div>
        </div>

        <div className={styles.filterStack}>
          <div className={styles.filters} role="group" aria-label="Filter by category">
            {categoryOptions.map((option) => (
              <button
                aria-pressed={activeCategory === option.key}
                className={`${styles.chip}${activeCategory === option.key ? ` ${styles.chipActive}` : ""}`}
                key={option.key}
                onClick={() => setActiveCategory(option.key)}
                type="button"
              >
                {option.label}
              </button>
            ))}
          </div>

          <div className={styles.filters} role="group" aria-label="Filter by priority">
            {priorityOptions.map((option) => (
              <button
                aria-pressed={activePriority === option.key}
                className={`${styles.chip}${activePriority === option.key ? ` ${styles.chipActive}` : ""}`}
                key={option.key}
                onClick={() => setActivePriority(option.key)}
                type="button"
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      </header>

      <div className={styles.sectionList}>
        {grouped.length ? (
          grouped.map(({ chapterSlug, items }) => {
            const chapter = getChapterBySlug(chapterSlug);

            return (
              <section className={`${styles.section} surface`} id={chapterSlug} key={chapterSlug}>
                <div className={styles.sectionHeader}>
                  <div>
                    <p className={styles.sectionKicker}>{chapter?.number ?? chapterSlug}</p>
                    <h2 className={styles.sectionTitle}>{chapter?.title ?? chapterSlug}</h2>
                  </div>

                  {chapter ? (
                    <Link className={styles.chapterLink} to={`/chapter/${chapter.slug}`}>
                      Open chapter -&gt;
                    </Link>
                  ) : null}
                </div>

                <div className={styles.sectionGrid}>
                  {items.map((video) => (
                    <VideoCard key={video.slug} video={video} />
                  ))}
                </div>
              </section>
            );
          })
        ) : (
          <div className={`${styles.emptyState} surface`}>No videos match the current filters.</div>
        )}
      </div>
    </section>
  );
}

function groupByChapter(videos: readonly CompanionVideo[]) {
  const chapters = new Map<string, CompanionVideo[]>();
  const chapterOrder = new Map(chapterIndex.map((chapter, index) => [chapter.slug, index]));

  videos.forEach((video) => {
    const list = chapters.get(video.chapterSlug);

    if (list) {
      list.push(video);
      return;
    }

    chapters.set(video.chapterSlug, [video]);
  });

  return Array.from(chapters.entries())
    .sort(([leftSlug], [rightSlug]) => {
      const leftOrder = chapterOrder.get(leftSlug) ?? Number.MAX_SAFE_INTEGER;
      const rightOrder = chapterOrder.get(rightSlug) ?? Number.MAX_SAFE_INTEGER;
      return leftOrder - rightOrder;
    })
    .map(([chapterSlug, items]) => ({ chapterSlug, items }));
}
