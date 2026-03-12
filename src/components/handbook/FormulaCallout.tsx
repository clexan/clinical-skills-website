import styles from "./FormulaCallout.module.css";

type FormulaVariable = {
  symbol: string;
  definition: string;
};

type FormulaCalloutProps = {
  expression: string;
  label?: string;
  note?: string;
  title: string;
  variables?: FormulaVariable[];
};

export function FormulaCallout({
  expression,
  label = "Formula",
  note,
  title,
  variables,
}: FormulaCalloutProps) {
  return (
    <aside className={styles.callout} aria-label={`${title} formula`}>
      <p className={styles.label}>{label}</p>
      <p className={styles.title}>{title}</p>

      <div className={styles.formulaBox}>
        <p className={styles.expression}>{expression}</p>
      </div>

      {variables && variables.length > 0 && (
        <dl className={styles.variables}>
          {variables.map(({ symbol, definition }) => (
            <div key={symbol} className={styles.variableRow}>
              <dt className={styles.symbol}>{symbol}</dt>
              <dd className={styles.definition}>{definition}</dd>
            </div>
          ))}
        </dl>
      )}

      {note && <p className={styles.note}>{note}</p>}
    </aside>
  );
}
