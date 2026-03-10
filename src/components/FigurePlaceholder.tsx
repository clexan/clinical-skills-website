import styles from "./FigurePlaceholder.module.css";

type FigurePlaceholderProps = {
  number: string;
  caption: string;
  src?: string;
};

export default function FigurePlaceholder({ number, caption, src }: FigurePlaceholderProps) {
  if (src) {
    return (
      <figure className={styles.figure}>
        <img className={styles.image} src={src} alt={caption} />
        <figcaption className={styles.caption}>
          Figure {number}. {caption}
        </figcaption>
      </figure>
    );
  }

  return (
    <div className={styles.placeholder}>
      <div className={styles.placeholderInner}>
        <span className={styles.label}>Figure {number}</span>
        <span className={styles.caption}>{caption}</span>
      </div>
    </div>
  );
}
