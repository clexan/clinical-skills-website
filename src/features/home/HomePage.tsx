import { useEffect, useRef, useState } from "react";
import type { FormEvent } from "react";
import { Link } from "react-router-dom";

import { getChapterBySlug, getChaptersForPart } from "@/content/chapter-index";
import { companionVideos, type CompanionVideo } from "@/content/videoData";
import { parts } from "@/content/parts";
import { emergencyEntries } from "@/features/reference/referenceData";
import { preloadSearchExperience } from "@/features/search/search-loader";
import { useSearchModal } from "@/features/search/SearchModalContext";
import { openResourceSubtitle, siteTitle } from "@/lib/document-title";

import styles from "./HomePage.module.css";

const EMERGENCY_RAIL_SLUGS = [
  "acs",
  "anaphylaxis",
  "sepsis",
  "hyperkalaemia",
  "stroke",
  "dka",
] as const;
const FEATURED_VIDEO_SLUGS = [
  "deteriorating-patient-overview",
  "acs-overview",
  "sepsis-qsofa-overview",
] as const;

const chapterFamilies = parts.map((part) => ({
  ...part,
  chapterCount: getChaptersForPart(part.id).length,
}));

const emergencyRailItems = [
  { label: "Critical", to: "/reference?filter=critical", tone: "critical" as const },
  ...EMERGENCY_RAIL_SLUGS.flatMap((slug) => {
    const entry = emergencyEntries.find((item) => item.slug === slug);

    return entry ? [{ label: entry.title, to: `/reference#${entry.slug}`, tone: "default" as const }] : [];
  }),
];

export function HomePage() {
  return (
    <section className={styles.page}>
      <HomeHero />
      <ChapterFamilies />
      <HomeUtilities />
    </section>
  );
}

function HomeHero() {
  const { isOpen, openSearch } = useSearchModal();
  const [query, setQuery] = useState("");

  const warmSearch = () => {
    void preloadSearchExperience();
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmedQuery = query.trim();

    if (!trimmedQuery) {
      return;
    }

    openSearch(trimmedQuery);
    setQuery("");
  };

  const titleWords = siteTitle.split(" ");
  const accentWord = titleWords.length >= 2 ? titleWords[1] : null;
  const beforeAccent = titleWords[0];
  const afterAccent = titleWords.slice(2).join(" ");

  return (
    <header className={styles.hero}>
      <div className={styles.heroIntro}>
        <h1 className={styles.heroTitle}>
          <span>{beforeAccent}</span>
          {accentWord ? <span className={styles.heroTitleAccent}>{accentWord}</span> : null}
          {afterAccent ? <span>{afterAccent}</span> : null}
        </h1>
        <p className={styles.heroSubtitle}>{openResourceSubtitle}</p>
      </div>

      <div className={styles.heroControls}>
        <form
          className={styles.searchForm}
          onMouseEnter={warmSearch}
          onSubmit={handleSubmit}
        >
          <label className={styles.visuallyHidden} htmlFor="home-search">
            Search chapters and emergency reference
          </label>
          <div className={styles.searchField}>
            <span aria-hidden="true" className={styles.searchIconWrap}>
              <svg
                className={styles.searchIcon}
                fill="none"
                focusable="false"
                viewBox="0 0 24 24"
              >
                <circle
                  cx="11"
                  cy="11"
                  r="6.5"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M16 16l4.5 4.5"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="2"
                />
              </svg>
            </span>
            <input
              aria-label="Search content"
              autoComplete="off"
              className={styles.searchInput}
              id="home-search"
              onChange={(event) => {
                const nextQuery = event.target.value;

                if (!isOpen && nextQuery.trim()) {
                  openSearch(nextQuery);
                  setQuery("");
                  return;
                }

                setQuery(nextQuery);
              }}
              onFocus={warmSearch}
              placeholder="Search chapters and emergency reference"
              spellCheck={false}
              type="search"
              value={query}
            />
            <button
              aria-label="Search"
              className={styles.searchSubmit}
              type="submit"
            >
              <svg
                className={styles.searchSubmitIcon}
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  d="M5 12h14m-6-6l6 6-6 6"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                />
              </svg>
            </button>
          </div>
        </form>

        <div className={styles.modeSwitch} aria-label="Quick access">
          <p className={styles.modeSwitchLabel}>Quick access</p>
          <div className={styles.modeSwitchLinks}>
            <Link className={styles.modeLink} to="/quiz">
              Take quiz
            </Link>
            <Link className={styles.modeLink} to="/videos">
              Watch companion videos
            </Link>
            <Link className={styles.modeLink} to="/reference">
              Open emergency reference
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

function ChapterFamilies() {
  return (
    <section aria-labelledby="chapter-families-title" className={styles.chapterFamilies}>
      <div className={styles.sectionIntro}>
        <h2 className={styles.sectionTitle} id="chapter-families-title">
          Chapter families
        </h2>
        <p className={styles.sectionDescription}>Browse the handbook by topic family.</p>
      </div>

      <div className={styles.familyGrid}>
        {chapterFamilies.map((part) => (
          <Link className={`${styles.familyCard} surface`} key={part.id} to={`/part/${part.slug}`}>
            <div className={styles.familyHeader}>
              <p className={styles.familyEyebrow}>Part {part.position}</p>
              <p className={styles.familyMeta}>
                {part.chapterCount} {part.chapterCount === 1 ? "chapter" : "chapters"}
              </p>
            </div>
            <h3 className={styles.familyTitle}>{part.title}</h3>
            <p className={styles.familyDescription}>{part.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}

function HomeUtilities() {
  const featuredVideos = FEATURED_VIDEO_SLUGS.flatMap((slug) => {
    const match = companionVideos.find((video) => video.slug === slug);
    return match ? [match] : [];
  });
  const featuredVideo = featuredVideos[0];
  const additionalVideos = featuredVideos.slice(1);
  const railRef = useRef<HTMLDivElement | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  useEffect(() => {
    const rail = railRef.current;

    if (!rail) {
      return;
    }

    const updateRailState = () => {
      const maxScrollLeft = rail.scrollWidth - rail.clientWidth;
      const nextCanScrollLeft = rail.scrollLeft > 8;
      const nextCanScrollRight = maxScrollLeft - rail.scrollLeft > 8;

      setCanScrollLeft(nextCanScrollLeft);
      setCanScrollRight(nextCanScrollRight);
    };

    updateRailState();
    rail.addEventListener("scroll", updateRailState, { passive: true });
    window.addEventListener("resize", updateRailState);

    return () => {
      rail.removeEventListener("scroll", updateRailState);
      window.removeEventListener("resize", updateRailState);
    };
  }, []);

  const scrollRail = (direction: "left" | "right") => {
    railRef.current?.scrollBy({
      left: direction === "left" ? -320 : 320,
      behavior: "smooth",
    });
  };

  return (
    <section className={styles.utilitySection}>
      <div className={styles.utilityBand}>
        <section aria-labelledby="home-reference-title" className={styles.referenceRailSection}>
          <div className={styles.referenceRailHeader}>
            <div className={styles.sectionIntro}>
              <h2 className={styles.sectionTitle} id="home-reference-title">
                Emergency Reference
              </h2>
              <p className={styles.sectionDescription}>
                Fast-entry pathways for high-risk emergencies.
              </p>
            </div>
            <div className={styles.referenceRailActions}>
              <Link className={styles.previewCta} to="/reference">
                View all emergency reference
              </Link>
            </div>
          </div>

          <div
            className={`${styles.referenceRailViewport}${canScrollLeft ? ` ${styles.hasLeftFade}` : ""}${canScrollRight ? ` ${styles.hasRightFade}` : ""}`}
          >
            <div aria-label="Scroll emergency shortcuts" className={styles.referenceRailButtons}>
              <button
                aria-controls="home-emergency-rail"
                aria-label="Scroll emergency shortcuts left"
                className={`${styles.referenceRailButton} ${styles.referenceRailButtonLeft}`}
                disabled={!canScrollLeft}
                onClick={() => {
                  scrollRail("left");
                }}
                type="button"
              >
                &larr;
              </button>
              <button
                aria-controls="home-emergency-rail"
                aria-label="Scroll emergency shortcuts right"
                className={`${styles.referenceRailButton} ${styles.referenceRailButtonRight}`}
                disabled={!canScrollRight}
                onClick={() => {
                  scrollRail("right");
                }}
                type="button"
              >
                &rarr;
              </button>
            </div>
            <div className={styles.referenceRailScroller} id="home-emergency-rail" ref={railRef}>
              <div aria-label="Emergency reference shortcuts" className={styles.referenceRail}>
                {emergencyRailItems.map((item) => (
                  <Link
                    className={`${styles.referencePill}${item.tone === "critical" ? ` ${styles.referencePillCritical}` : ""}`}
                    key={item.label}
                    to={item.to}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section aria-labelledby="home-videos-title" className={styles.videoPanel}>
          <div className={styles.panelHeader}>
            <div className={styles.sectionIntro}>
              <h2 className={styles.sectionTitle} id="home-videos-title">
                Companion Videos
              </h2>
              <p className={styles.sectionDescription}>
                Chapter-linked teaching videos with one core preview and quick entry into the full library.
              </p>
            </div>
            <Link className={styles.previewCta} to="/videos">
              Open video library
            </Link>
          </div>

          {featuredVideo ? (
            <VideoPreview featuredVideo={featuredVideo} quickLinks={additionalVideos} />
          ) : null}
        </section>
      </div>
    </section>
  );
}

function VideoPreview({
  featuredVideo,
  quickLinks,
}: {
  featuredVideo: CompanionVideo;
  quickLinks: CompanionVideo[];
}) {
  const featuredChapter = getChapterBySlug(featuredVideo.chapterSlug);
  const thumbnail = featuredVideo.youtubeId
    ? `https://i.ytimg.com/vi/${featuredVideo.youtubeId}/hqdefault.jpg`
    : null;

  return (
    <div className={styles.videoPreviewStack}>
      <a
        className={styles.videoFeature}
        href={featuredVideo.watchUrl}
        rel="noreferrer"
        target="_blank"
      >
        {thumbnail ? (
          <div className={styles.videoFeatureMedia}>
            <img alt="" className={styles.videoFeatureImage} src={thumbnail} />
            <span className={styles.videoFeatureOverlay} />
            <span className={styles.videoFeatureAction}>Open on YouTube</span>
          </div>
        ) : null}

        <div className={styles.videoFeatureBody}>
          <p className={styles.videoFeatureKicker}>Featured teaching video</p>
          <h3 className={styles.videoFeatureTitle}>{featuredVideo.title}</h3>
          <p className={styles.videoFeatureDescription}>{featuredVideo.description}</p>
          {featuredChapter ? (
            <p className={styles.videoFeatureMeta}>Linked chapter: {featuredChapter.title}</p>
          ) : null}
        </div>
      </a>

      {quickLinks.length ? (
        <div className={styles.videoQuickLinks}>
          <p className={styles.videoQuickLinksLabel}>More companion picks</p>
          <div className={styles.videoQuickLinksList}>
            {quickLinks.map((video) => {
              const chapter = getChapterBySlug(video.chapterSlug);

              return (
                <Link className={styles.videoQuickLink} key={video.slug} to={`/videos#${video.chapterSlug}`}>
                  <div>
                    <p className={styles.videoQuickLinkTitle}>{video.title}</p>
                    <p className={styles.videoQuickLinkMeta}>
                      {chapter ? chapter.title : video.chapterSlug}
                    </p>
                  </div>
                  <span aria-hidden="true" className={styles.videoQuickLinkArrow}>
                    &gt;
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      ) : null}
    </div>
  );
}
