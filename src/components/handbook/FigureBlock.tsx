import styles from "./FigureBlock.module.css";

type FigureBlockProps = {
  figureId: string;
  caption?: string;
};

export function FigureBlock({ figureId, caption }: FigureBlockProps) {
  return (
    <div aria-label="Figure pending verification" className={styles.figure} role="img">
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
        <span className={styles.label}>Figure pending verification</span>
        <span className={styles.figureId}>{figureId}</span>
        {caption ? <span className={styles.caption}>{caption}</span> : null}
      </div>
    </div>
  );
}
