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
          <h2 className={styles.title}>Companion videos for this chapter</h2>
          <p className={styles.subtitle}>Short videos linked to this chapter</p>
        </div>

        <Link className={styles.libraryLink} to={`/videos#${chapterSlug}`}>
          Browse video library
        </Link>
      </div>

      {primaryVideos.length ? (
        <div className={styles.group}>
          <div className={styles.primaryBlock}>
            {primaryVideos.map((video) => (
              <VideoCard featured key={video.slug} video={video} />
            ))}
          </div>
        </div>
      ) : null}

      {referenceVideos.length ? (
        <div className={styles.group}>
          <h3 className={styles.groupTitle}>Reference videos</h3>
          <div className={styles.referenceGrid}>
            {referenceVideos.map((video) => (
              <VideoCard compact key={video.slug} video={video} />
            ))}
          </div>
        </div>
      ) : null}
    </section>
  );
}
