import styles from "./BleedingCycleFigure.module.css";

export function BleedingCycleFigure() {
  return (
    <figure className={styles.figure}>
      <p className={styles.visuallyHidden} id="bleeding-cycle-summary">
        Bleeding lowers circulating blood volume, reduces haemoglobin concentration, and consumes
        coagulation factors. These changes reduce oxygen delivery to cells, activate the
        sympathetic nervous system, and can worsen bleeding further, creating a vicious cycle.
      </p>

      <div className={styles.viewport}>
        <div
          aria-describedby="bleeding-cycle-summary"
          className={styles.diagram}
          role="img"
        >
          <svg
            aria-hidden="true"
            className={styles.connectorLayer}
            preserveAspectRatio="none"
            viewBox="0 0 1000 560"
          >
            <defs>
              <marker
                id="bleeding-arrow-head"
                markerHeight="8"
                markerWidth="8"
                orient="auto-start-reverse"
                refX="4"
                refY="4"
              >
                <path className={styles.arrowHead} d="M0,0 L8,4 L0,8 Z" />
              </marker>
            </defs>

            <line
              className={styles.connector}
              markerEnd="url(#bleeding-arrow-head)"
              strokeWidth="3"
              x1="166"
              x2="166"
              y1="78"
              y2="126"
            />
            <line
              className={styles.connector}
              markerEnd="url(#bleeding-arrow-head)"
              strokeWidth="3"
              x1="500"
              x2="500"
              y1="78"
              y2="126"
            />
            <line
              className={styles.connector}
              markerEnd="url(#bleeding-arrow-head)"
              strokeWidth="3"
              x1="834"
              x2="834"
              y1="78"
              y2="126"
            />

            <line
              className={styles.connector}
              markerEnd="url(#bleeding-arrow-head)"
              strokeWidth="3"
              x1="166"
              x2="166"
              y1="286"
              y2="346"
            />
            <line
              className={styles.connector}
              markerEnd="url(#bleeding-arrow-head)"
              strokeWidth="3"
              x1="500"
              x2="500"
              y1="286"
              y2="346"
            />
            <line
              className={styles.connector}
              markerEnd="url(#bleeding-arrow-head)"
              strokeWidth="3"
              x1="834"
              x2="834"
              y1="286"
              y2="346"
            />

            <polyline
              className={styles.connector}
              fill="none"
              markerEnd="url(#bleeding-arrow-head)"
              points="944,398 976,398 976,38 940,38"
              strokeWidth="3"
            />
          </svg>

          <div className={`${styles.node} ${styles.topNode}`}>Bleeding</div>

          <div className={`${styles.node} ${styles.midLeft}`}>
            Decrease in cardiac output due to lower circulating blood volume
          </div>

          <div className={`${styles.node} ${styles.midCenter}`}>
            Haemoglobin concentration decreases
          </div>

          <div className={`${styles.node} ${styles.midRight}`}>
            Coagulation factors are used for haemostasis and consumption coagulopathy occurs
          </div>

          <div className={`${styles.node} ${styles.bottomLeft}`}>
            Decrease in oxygen delivery to cells and compensatory activation of sympathetic nervous
            system
          </div>

          <div className={`${styles.node} ${styles.bottomRight}`}>Bleeding additionally worsens</div>
        </div>
      </div>

      <figcaption className={styles.caption}>
        Figure 1. Overview of the pathophysiological course and the vicious circle that occurs in
        bleeding.
      </figcaption>
    </figure>
  );
}
