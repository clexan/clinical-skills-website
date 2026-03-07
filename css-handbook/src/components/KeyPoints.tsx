type KeyPointsProps = {
  items: string[];
};

export default function KeyPoints({items}: KeyPointsProps) {
  return (
    <div className="kv-keypoints">
      <p className="kv-keypoints__label">Key Points</p>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
