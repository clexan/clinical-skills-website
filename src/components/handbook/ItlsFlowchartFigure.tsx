import styles from "./ItlsFlowchartFigure.module.css";

const primarySurveySteps = [
  {
    number: "1",
    title: "Scene size-up",
    items: [
      "Standard precautions",
      "Scene hazards",
      "Number of patients",
      "Need for more help or equipment",
      "Mechanism of injury",
    ],
  },
  {
    number: "2",
    title: "Initial assessment",
    items: [
      "General impression of the patient",
      "Level of consciousness",
      "Airway",
      "Breathing",
      "Circulation",
    ],
  },
] as const;

const mechanismBranches = [
  {
    label: "Generalised or unknown MOI",
    step: "Rapid trauma survey",
  },
  {
    label: "Localised MOI",
    step: "Focused exam",
  },
] as const;

const followUpSteps = ["ITLS secondary survey", "ITLS ongoing exam"] as const;

export function ItlsFlowchartFigure() {
  return (
    <figure className={styles.figure}>
      <div className={styles.diagram}>
        <div className={styles.eyebrow}>ITLS primary survey</div>

        <div className={styles.stack}>
          {primarySurveySteps.map((step, index) => (
            <div className={styles.stackItem} key={step.title}>
              {index > 0 ? <div aria-hidden="true" className={styles.arrow} /> : null}

              <section className={`${styles.card} ${styles.listCard}`}>
                <span aria-hidden="true" className={styles.stepBadge}>
                  {step.number}
                </span>

                <div className={styles.cardBody}>
                  <div className={styles.cardTitle}>{step.title}</div>

                  <ul className={styles.list}>
                    {step.items.map((item) => (
                      <li className={styles.listItem} key={item}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </section>
            </div>
          ))}
        </div>

        <section className={styles.branchSection}>
          <div aria-hidden="true" className={styles.arrow} />

          <div className={styles.decision}>
            <span className={styles.decisionTag}>Decision</span>
            <div className={styles.decisionText}>Mechanism of injury?</div>
          </div>

          <div className={styles.branchGrid}>
            {mechanismBranches.map((branch) => (
              <article className={styles.branchLane} key={branch.label}>
                <div className={styles.branchLabel}>{branch.label}</div>
                <div className={`${styles.card} ${styles.branchCard}`}>
                  <div className={styles.branchStep}>{branch.step}</div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.outcomeSection}>
          <div aria-hidden="true" className={styles.mergeArrow} />

          <div className={styles.decision}>
            <span className={styles.decisionTag}>Decision</span>
            <div className={styles.decisionText}>Load-and-go situation?</div>
          </div>

          <div className={styles.outcomeGrid}>
            {followUpSteps.map((step) => (
              <div className={styles.outcomeLane} key={step}>
                <div className={`${styles.card} ${styles.outcomeCard}`}>
                  <div className={styles.outcomeStep}>{step}</div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <figcaption className={styles.caption}>
        Figure 1. ITLS flowchart for scene size-up, primary survey, and subsequent assessment.
      </figcaption>
    </figure>
  );
}
