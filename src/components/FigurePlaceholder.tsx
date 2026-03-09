type FigurePlaceholderProps = {
  number: string;
  caption: string;
  src?: string;
};

export default function FigurePlaceholder({ number, caption, src }: FigurePlaceholderProps) {
  if (src) {
    return (
      <figure className="kv-figure">
        <img src={src} alt={caption} />
        <figcaption>
          Figure {number}. {caption}
        </figcaption>
      </figure>
    );
  }

  return (
    <div className="kv-figure-placeholder">
      <div className="kv-figure-placeholder__inner">
        <span className="kv-figure-placeholder__label">Figure {number}</span>
        <span className="kv-figure-placeholder__caption">{caption}</span>
      </div>
    </div>
  );
}
