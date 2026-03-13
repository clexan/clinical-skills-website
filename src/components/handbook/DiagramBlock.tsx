import type { ReactNode } from "react";

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

  if (!record) {
    return <MissingDiagram />;
  }

  const diagramDomId =
    record.id.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "diagram";
  const altTextId = `${diagramDomId}-alt-text`;

  return (
    <figure className={styles.figure}>
      <p className={styles.visuallyHidden} id={altTextId}>
        {record.altText}
      </p>
      <div className={styles.panel} aria-describedby={altTextId}>
        <ul className={styles.tree}>{renderNode(record.root, 0, record.id)}</ul>
      </div>
      <figcaption className={styles.caption}>
        Figure {record.number}. {record.caption}
      </figcaption>
      <p className={styles.textEquivalent}>
        <span className={styles.textEquivalentLabel}>Text version.</span> {record.textEquivalent}
      </p>
    </figure>
  );
}
