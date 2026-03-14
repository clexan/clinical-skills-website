import { useEffect, useId, useState } from "react";

import { getFigureById } from "@/content/figure-manifest";

import styles from "./FigureBlock.module.css";

const figureAssets = import.meta.glob("../../assets/figures/*", {
  eager: true,
  import: "default",
}) as Record<string, string>;

function resolveAsset(filename: string): string | undefined {
  const entry = Object.entries(figureAssets).find(([path]) => path.endsWith(`/${filename}`));

  return entry?.[1];
}

type FigureBlockProps = {
  figureId: string;
};

function PendingFigure() {
  return (
    <figure className={styles.figure}>
      <div aria-label="Figure unavailable" className={`${styles.figureShell} ${styles.pending}`} role="img">
        <div className={styles.content}>
          <svg aria-hidden="true" height="40" viewBox="0 0 40 40" width="40">
            <rect
              fill="none"
              height="38"
              rx="4"
              stroke="var(--border-strong)"
              strokeWidth="1.5"
              width="38"
              x="1"
              y="1"
            />
            <line
              stroke="var(--border-strong)"
              strokeWidth="1"
              x1="1"
              x2="39"
              y1="1"
              y2="39"
            />
            <line
              stroke="var(--border-strong)"
              strokeWidth="1"
              x1="39"
              x2="1"
              y1="1"
              y2="39"
            />
          </svg>
          <span className={styles.label}>Figure unavailable</span>
        </div>
      </div>
    </figure>
  );
}

function FigureCaption({
  caption,
  captionId,
  source,
}: {
  caption: string;
  captionId: string;
  source?: string;
}) {
  return (
    <figcaption className={styles.caption} id={captionId}>
      {caption}
      {source ? <span className={styles.source}>{source}</span> : null}
    </figcaption>
  );
}

function UnavailableFigure({
  caption,
  captionId,
  source,
}: {
  caption: string;
  captionId: string;
  source?: string;
}) {
  const statusId = `${captionId}-status`;

  return (
    <figure aria-labelledby={captionId} className={styles.figure}>
      <div
        aria-labelledby={`${captionId} ${statusId}`}
        className={`${styles.figureShell} ${styles.unavailable}`}
        role="img"
      >
        <div className={styles.content}>
          <svg aria-hidden="true" height="40" viewBox="0 0 40 40" width="40">
            <rect
              fill="none"
              height="38"
              rx="4"
              stroke="var(--accent-amber)"
              strokeWidth="1.5"
              width="38"
              x="1"
              y="1"
            />
            <text
              fill="var(--accent-amber)"
              fontSize="18"
              fontWeight="bold"
              textAnchor="middle"
              x="20"
              y="26"
            >
              !
            </text>
          </svg>
          <span className={styles.label} id={statusId}>
            Figure unavailable
          </span>
        </div>
      </div>
      <FigureCaption caption={caption} captionId={captionId} source={source} />
    </figure>
  );
}

export function FigureBlock({ figureId }: FigureBlockProps) {
  const record = getFigureById(figureId);
  const assetUrl = record ? resolveAsset(record.assetFilename) : undefined;
  const [failed, setFailed] = useState(false);
  const captionId = useId();

  useEffect(() => {
    setFailed(false);
  }, [assetUrl, figureId]);

  if (!record) {
    return <PendingFigure />;
  }

  if (!assetUrl || failed) {
    return <UnavailableFigure caption={record.caption} captionId={captionId} source={record.source} />;
  }

  return (
    <figure aria-labelledby={captionId} className={styles.figure}>
      <img
        className={styles.image}
        loading="lazy"
        onError={() => setFailed(true)}
        src={assetUrl}
        {...(record.accessibility.kind === "informative"
          ? {
              alt: record.accessibility.altText,
              "aria-describedby": captionId,
            }
          : {
              alt: "",
              role: "presentation" as const,
            })}
      />
      <FigureCaption caption={record.caption} captionId={captionId} source={record.source} />
    </figure>
  );
}
