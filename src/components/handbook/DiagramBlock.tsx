import type { ReactNode } from "react";
import { useId } from "react";

import { getDiagramById, type DiagramNode } from "@/content/diagram-manifest";

import styles from "./DiagramBlock.module.css";

type DiagramBlockProps = {
  diagramId: string;
};

function getDepthClassName(prefix: "branchDepth" | "cardDepth" | "valueDepth", depth: number) {
  return styles[`${prefix}${Math.min(depth, 4)}`];
}

function renderNode(node: DiagramNode, depth: number, key: string): ReactNode {
  return (
    <li className={styles.node} key={key}>
      <div className={`${styles.card} ${getDepthClassName("cardDepth", depth)}`}>
        <span className={styles.label}>{node.label}</span>
        {node.value ? (
          <span className={`${styles.value} ${getDepthClassName("valueDepth", depth)}`}>
            {node.value}
          </span>
        ) : null}
      </div>
      {node.children?.length ? (
        <ul className={`${styles.branch} ${getDepthClassName("branchDepth", depth + 1)}`}>
          {node.children.map((child, index) => renderNode(child, depth + 1, `${key}-${index}`))}
        </ul>
      ) : null}
    </li>
  );
}

function MissingDiagram() {
  return (
    <div className={styles.missing} role="img" aria-label="Diagram unavailable">
      <span className={styles.missingLabel}>Diagram unavailable</span>
    </div>
  );
}

export function DiagramBlock({ diagramId }: DiagramBlockProps) {
  const record = getDiagramById(diagramId);
  const baseId = useId();

  if (!record) {
    return <MissingDiagram />;
  }

  const captionId = `${baseId}-caption`;
  const altTextId = `${baseId}-alt-text`;
  const textEquivalentId = `${baseId}-text-equivalent`;
  const isInformative = record.accessibility.kind === "informative";

  return (
    <figure aria-labelledby={captionId} className={styles.figure}>
      {isInformative ? (
        <p className={styles.visuallyHidden} id={altTextId}>
          {record.accessibility.altText}
        </p>
      ) : null}
      <div
        className={styles.panel}
        {...(isInformative
          ? {
              "aria-describedby": `${altTextId} ${textEquivalentId}`,
              "aria-labelledby": captionId,
              role: "img" as const,
            }
          : {
              "aria-hidden": true,
            })}
      >
        <ul className={styles.tree}>{renderNode(record.root, 0, record.id)}</ul>
      </div>
      <figcaption className={styles.caption} id={captionId}>
        Figure {record.number}. {record.caption}
      </figcaption>
      {isInformative ? (
        <p className={styles.textEquivalent} id={textEquivalentId}>
          <span className={styles.textEquivalentLabel}>Text version.</span>{" "}
          {record.accessibility.textEquivalent}
        </p>
      ) : null}
    </figure>
  );
}
