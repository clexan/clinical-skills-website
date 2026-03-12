import styles from "./ItlsFlowchartFigure.module.css";

export function ItlsFlowchartFigure() {
  return (
    <figure className={styles.figure}>
      <p className={styles.visuallyHidden} id="itls-flowchart-summary">
        ITLS primary survey begins with scene size-up, then initial assessment. Mechanism of
        injury determines whether the patient receives a rapid trauma survey for generalised or
        unknown trauma, or a focused exam for localised trauma. Both paths feed into a decision
        about whether this is a load-and-go situation, followed by the ITLS secondary survey and
        ITLS ongoing exam.
      </p>

      <div className={styles.viewport}>
        <div aria-describedby="itls-flowchart-summary" className={styles.diagram} role="img">
          <svg
            aria-hidden="true"
            className={styles.connectorLayer}
            preserveAspectRatio="none"
            viewBox="0 0 960 1500"
          >
            <defs>
              <marker
                id="itls-arrow-head"
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
              markerEnd="url(#itls-arrow-head)"
              strokeWidth="3"
              x1="480"
              x2="480"
              y1="182"
              y2="276"
            />
            <line
              className={styles.connector}
              markerEnd="url(#itls-arrow-head)"
              strokeWidth="3"
              x1="480"
              x2="480"
              y1="424"
              y2="520"
            />

            <line
              className={styles.connector}
              markerEnd="url(#itls-arrow-head)"
              strokeWidth="3"
              x1="350"
              x2="350"
              y1="640"
              y2="846"
            />
            <line
              className={styles.connector}
              markerEnd="url(#itls-arrow-head)"
              strokeWidth="3"
              x1="610"
              x2="610"
              y1="640"
              y2="846"
            />

            <line
              className={styles.connector}
              markerEnd="url(#itls-arrow-head)"
              strokeWidth="3"
              x1="350"
              x2="350"
              y1="964"
              y2="1088"
            />
            <line
              className={styles.connector}
              markerEnd="url(#itls-arrow-head)"
              strokeWidth="3"
              x1="610"
              x2="610"
              y1="964"
              y2="1088"
            />

            <polyline
              className={styles.connector}
              fill="none"
              markerEnd="url(#itls-arrow-head)"
              points="480,1196 346,1292"
              strokeWidth="3"
            />
            <polyline
              className={styles.connector}
              fill="none"
              markerEnd="url(#itls-arrow-head)"
              points="480,1196 614,1292"
              strokeWidth="3"
            />

            <polyline
              className={styles.connector}
              fill="none"
              markerEnd="url(#itls-arrow-head)"
              points="286,572 350,572 350,640"
              strokeWidth="3"
            />
            <polyline
              className={styles.connector}
              fill="none"
              markerEnd="url(#itls-arrow-head)"
              points="674,572 610,572 610,640"
              strokeWidth="3"
            />

            <polyline
              className={styles.connector}
              fill="none"
              markerEnd="url(#itls-arrow-head)"
              points="350,964 350,1130 415,1130"
              strokeWidth="3"
            />
            <polyline
              className={styles.connector}
              fill="none"
              markerEnd="url(#itls-arrow-head)"
              points="610,964 610,1130 545,1130"
              strokeWidth="3"
            />

            <line
              className={styles.connector}
              markerEnd="url(#itls-arrow-head)"
              strokeWidth="3"
              x1="462"
              x2="498"
              y1="1388"
              y2="1388"
            />
            <line
              className={styles.connector}
              markerEnd="url(#itls-arrow-head)"
              strokeWidth="3"
              x1="498"
              x2="462"
              y1="1418"
              y2="1418"
            />
          </svg>

          <div className={styles.verticalLabel}>ITLS primary survey</div>

          <section className={`${styles.card} ${styles.topCard} ${styles.listCard}`}>
            <h3 className={styles.heading}>Scene size-up</h3>
            <ul className={styles.list}>
              <li>Standard precautions</li>
              <li>Scene hazards</li>
              <li>Number of patients</li>
              <li>Need for more help or equipment</li>
              <li>Mechanism of injury</li>
            </ul>
          </section>

          <section className={`${styles.card} ${styles.initialCard} ${styles.listCard}`}>
            <h3 className={styles.heading}>Initial assessment</h3>
            <ul className={styles.list}>
              <li>General impression of the patient</li>
              <li>Level of consciousness</li>
              <li>Airway</li>
              <li>Breathing</li>
              <li>Circulation</li>
            </ul>
          </section>

          <div className={`${styles.diamondWrap} ${styles.mechanismDiamond}`}>
            <div className={styles.diamond}>
              <span className={styles.diamondText}>Mechanism of injury?</span>
            </div>
          </div>

          <div className={`${styles.card} ${styles.branchLeft}`}>Generalised or unknown MOI</div>
          <div className={`${styles.card} ${styles.branchRight}`}>Localised MOI</div>

          <div className={`${styles.card} ${styles.rapidSurvey}`}>Rapid trauma survey</div>
          <div className={`${styles.card} ${styles.focusedExam}`}>Focused exam</div>

          <div className={`${styles.diamondWrap} ${styles.loadAndGoDiamond}`}>
            <div className={styles.diamond}>
              <span className={styles.diamondText}>Load-and-go situation?</span>
            </div>
          </div>

          <div className={`${styles.card} ${styles.secondarySurvey}`}>ITLS secondary survey</div>
          <div className={`${styles.card} ${styles.ongoingExam}`}>ITLS ongoing exam</div>
        </div>
      </div>

      <figcaption className={styles.caption}>
        Figure 1. ITLS flowchart for scene size-up, primary survey, and subsequent assessment.
      </figcaption>
    </figure>
  );
}
