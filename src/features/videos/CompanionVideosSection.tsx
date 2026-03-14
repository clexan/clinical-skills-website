import { Link } from "react-router-dom";

import { getVideosForChapter } from "@/content/videoData";

import { VideoCard } from "./VideoCard";
import styles from "./CompanionVideosSection.module.css";

type CompanionVideosSectionProps = {
  chapterSlug: string;
};

export function CompanionVideosSection({ chapterSlug }: CompanionVideosSectionProps) {
  const primaryVideos = getVideosForChapter(chapterSlug, "primary");
  const referenceVideos = getVideosForChapter(chapterSlug, "reference");

  if (!primaryVideos.length && !referenceVideos.length) {
    return null;
  }

  return (
    <section aria-label="Companion videos" className={`${styles.section} surface`}>
      <div className={styles.header}>
        <div>
          <p className={styles.eyebrow}>Companion videos</p>
          <h2 className={styles.title}>Watch alongside this chapter</h2>
          <p className={styles.subtitle}>
            Short, chapter-linked videos kept outside the prose so the reading flow stays intact.
          </p>
        </div>

        <Link className={styles.libraryLink} to={`/videos#${chapterSlug}`}>
          Open video library -&gt;
        </Link>
      </div>

      {primaryVideos.length ? (
        <div className={styles.group}>
          <h3 className={styles.groupTitle}>Primary videos</h3>
          <div className={styles.grid}>
            {primaryVideos.map((video) => (
              <VideoCard key={video.slug} video={video} />
            ))}
          </div>
        </div>
      ) : null}

      {referenceVideos.length ? (
        <div className={styles.group}>
          <h3 className={styles.groupTitle}>Reference videos</h3>
          <div className={styles.scroller}>
            {referenceVideos.map((video) => (
              <div className={styles.scrollerItem} key={video.slug}>
                <VideoCard compact video={video} />
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </section>
  );
}
