import { type ReactNode, useState } from "react";

import type { CompanionVideo } from "@/content/videoData";

import styles from "./VideoCard.module.css";

type VideoCardProps = {
  video: CompanionVideo;
  compact?: boolean;
  featured?: boolean;
};

export function VideoCard({ video, compact = false, featured = false }: VideoCardProps) {
  const [active, setActive] = useState(false);
  const thumbnail = video.youtubeId ? `https://i.ytimg.com/vi/${video.youtubeId}/hqdefault.jpg` : null;
  const embedUrl =
    video.provider === "youtube" && video.mode === "embed" && video.youtubeId
      ? `https://www.youtube.com/embed/${video.youtubeId}?rel=0&modestbranding=1&playsinline=1`
      : null;
  const meta = [video.speaker, video.durationLabel].filter(Boolean);
  let media: ReactNode = null;

  if (video.provider === "youtube" && thumbnail) {
    media = (
      <div className={styles.mediaShell}>
        {embedUrl && active ? (
          <div className={styles.embedFrame}>
            <iframe
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
              src={embedUrl}
              title={video.title}
            />
          </div>
        ) : video.mode === "embed" ? (
          <button
            aria-label={`Play ${video.title}`}
            className={styles.posterButton}
            onClick={() => {
              setActive(true);
            }}
            type="button"
          >
            <img alt="" className={styles.posterImage} src={thumbnail} />
            <span className={styles.posterOverlay} />
            <span className={styles.posterAction}>Play here</span>
          </button>
        ) : (
          <a
            aria-label={`Open ${video.title} on YouTube`}
            className={styles.posterLink}
            href={video.watchUrl}
            rel="noreferrer"
            target="_blank"
          >
            <img alt="" className={styles.posterImage} src={thumbnail} />
            <span className={styles.posterOverlay} />
            <span className={styles.posterAction}>Open on YouTube</span>
          </a>
        )}
      </div>
    );
  }

  if (video.provider === "mp4" && video.src) {
    media = (
      <figure className={styles.mediaShell}>
        <video className={styles.nativeVideo} controls playsInline preload="metadata">
          <source src={video.src} type="video/mp4" />
        </video>
        <figcaption className={styles.videoNote}>Direct MP4 playback</figcaption>
      </figure>
    );
  }

  const isFeatured = featured && media !== null;
  const kicker = isFeatured ? "Core video" : video.priority === "primary" ? "Companion video" : "Reference video";
  const cardClassName = [styles.card, compact ? styles.compact : "", isFeatured ? styles.featured : ""]
    .filter(Boolean)
    .join(" ");
  const descriptionClassName = [styles.description, isFeatured ? styles.featuredDescription : ""].filter(Boolean).join(" ");

  return (
    <article className={cardClassName}>
      <div className={styles.content}>
        <div className={styles.header}>
          <div>
            <p className={styles.kicker}>{kicker}</p>
            <h3 className={styles.title}>{video.title}</h3>
          </div>

          <span className={styles.modeBadge}>
            {video.provider === "youtube" ? "YouTube" : video.mode === "mp4" ? "MP4" : video.provider.toUpperCase()}
          </span>
        </div>

        <p className={descriptionClassName}>{video.description}</p>

        <div className={styles.footer}>
          <div className={styles.footerLinks}>
            {video.provider === "youtube" ? (
              <a className={styles.secondaryLink} href={video.watchUrl} rel="noreferrer" target="_blank">
                Watch on YouTube
              </a>
            ) : null}

            {video.provider === "mp4" ? (
              <a className={styles.secondaryLink} href={video.watchUrl} rel="noreferrer" target="_blank">
                Open resource
              </a>
            ) : null}
          </div>

          {meta.length ? <span className={styles.meta}>{meta.join(" · ")}</span> : null}
        </div>
      </div>

      {media ? <div className={styles.mediaColumn}>{media}</div> : null}
    </article>
  );
}
