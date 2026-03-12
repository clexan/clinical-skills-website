import styles from "./tables/TableBase.module.css";

const basalRequirementRows = [
  {
    idealBodyWeight: "First 10 kg",
    requirement: "4 mL/kg/h",
  },
  {
    idealBodyWeight: "Next 10 kg",
    requirement: "Add 2 mL/kg/h",
  },
  {
    idealBodyWeight: "Each kg above 20 kg",
    requirement: "Add 1 mL/kg/h",
  },
] as const;

const classificationRows = [
  {
    characteristics: "Isotonic; contains higher chloride concentration than plasma",
    example: "0.9% NaCl (saline)",
    subtype: "Unbalanced solutions",
    type: "Crystalloids",
  },
  {
    characteristics: "Used for correction of hypoosmolar hyponatraemia and elevated ICP",
    example: "Hypertonic saline (1.8%, 3%, 7.5%)",
    subtype: "Unbalanced solutions",
    type: "Crystalloids",
  },
  {
    characteristics: "Hypotonic; contains buffer (lactate)",
    example: "Ringer lactate",
    subtype: "Balanced solutions",
    type: "Crystalloids",
  },
  {
    characteristics: "Isotonic; contains buffers (acetate and gluconate)",
    example: "Plasma-Lyte 148",
    subtype: "Balanced solutions",
    type: "Crystalloids",
  },
  {
    characteristics: "Plasma volume expansion; numerous adverse effects",
    example: "HES 6%",
    subtype: "Hydroxyethyl starch (HES)",
    type: "Colloids",
  },
  {
    characteristics: "Plasma volume expansion in selected indications",
    example: "Human albumin 20%, freshly frozen plasma",
    subtype: "Plasma derivatives",
    type: "Colloids",
  },
] as const;

const groupedClassificationRows = [
  {
    accentClassName: styles.rowHeaderSky,
    label: "Crystalloids",
    rows: classificationRows.filter((row) => row.type === "Crystalloids"),
  },
  {
    accentClassName: styles.rowHeaderAmber,
    label: "Colloids",
    rows: classificationRows.filter((row) => row.type === "Colloids"),
  },
] as const;

const comparisonRows = [
  {
    acetate: "-",
    calcium: "2.2-2.6",
    chloride: "98-106",
    eSid: "42",
    gluconate: "-",
    lactate: "-",
    magnesium: "0.8-1.0",
    name: "Plasma",
    osmolarity: "291",
    osmolality: "287",
    pH: "7.35-7.45",
    potassium: "3.5-5.0",
    sodium: "136-145",
  },
  {
    acetate: "-",
    calcium: "-",
    chloride: "154",
    eSid: "0",
    gluconate: "-",
    lactate: "-",
    magnesium: "-",
    name: "0.9% NaCl",
    osmolarity: "308",
    osmolality: "286",
    pH: "4.5-7.0",
    potassium: "-",
    sodium: "154",
  },
  {
    acetate: "-",
    calcium: "3",
    chloride: "109",
    eSid: "28",
    gluconate: "-",
    lactate: "28",
    magnesium: "-",
    name: "Ringer lactate",
    osmolarity: "273",
    osmolality: "256",
    pH: "5.0-7.0",
    potassium: "4",
    sodium: "130",
  },
  {
    acetate: "27",
    calcium: "-",
    chloride: "98",
    eSid: "50",
    gluconate: "23",
    lactate: "-",
    magnesium: "1.5",
    name: "Plasma-Lyte 148",
    osmolarity: "295",
    osmolality: "271",
    pH: "4-8",
    potassium: "5",
    sodium: "140",
  },
] as const;

const comparisonSections = [
  {
    accentClassName: styles.rowHeaderSky,
    label: "Electrolytes and buffers",
    rows: [
      {
        parameter: "Sodium (mmol/L)",
        values: comparisonRows.map((row) => ({ label: row.name, value: row.sodium })),
      },
      {
        parameter: "Potassium (mmol/L)",
        values: comparisonRows.map((row) => ({ label: row.name, value: row.potassium })),
      },
      {
        parameter: "Magnesium (mmol/L)",
        values: comparisonRows.map((row) => ({ label: row.name, value: row.magnesium })),
      },
      {
        parameter: "Calcium (mmol/L)",
        values: comparisonRows.map((row) => ({ label: row.name, value: row.calcium })),
      },
      {
        parameter: "Chloride (mmol/L)",
        values: comparisonRows.map((row) => ({ label: row.name, value: row.chloride })),
      },
      {
        parameter: "Acetate (mmol/L)",
        values: comparisonRows.map((row) => ({ label: row.name, value: row.acetate })),
      },
      {
        parameter: "Gluconate (mmol/L)",
        values: comparisonRows.map((row) => ({ label: row.name, value: row.gluconate })),
      },
      {
        parameter: "Lactate (mmol/L)",
        values: comparisonRows.map((row) => ({ label: row.name, value: row.lactate })),
      },
      {
        parameter: "eSID (mEq/L)",
        values: comparisonRows.map((row) => ({ label: row.name, value: row.eSid })),
      },
    ],
  },
  {
    accentClassName: styles.rowHeaderTeal,
    label: "Physical properties",
    rows: [
      {
        parameter: "Osmolarity",
        values: comparisonRows.map((row) => ({ label: row.name, value: row.osmolarity })),
      },
      {
        parameter: "Osmolality",
        values: comparisonRows.map((row) => ({ label: row.name, value: row.osmolality })),
      },
      {
        parameter: "pH",
        values: comparisonRows.map((row) => ({ label: row.name, value: row.pH })),
      },
    ],
  },
] as const;

function renderValue(value: string) {
  if (value === "-") {
    return <span className={styles.dash}>-</span>;
  }

  return value;
}

export function IvFluidBasalRequirementsTable() {
  return (
    <div className={styles.tableCard}>
      <div className={styles.captionBand}>
        <p className={styles.captionTitle}>Table 1. Basal metabolic requirements</p>
      </div>

      <table className={styles.table}>
        <thead className={styles.head}>
          <tr>
            <th className={styles.headCell} scope="col">
              Ideal body weight
            </th>
            <th className={styles.headCell} scope="col">
              Requirement
            </th>
          </tr>
        </thead>
        <tbody className={styles.bodyGroup}>
          {basalRequirementRows.map((row) => (
            <tr className={styles.row} key={row.idealBodyWeight}>
              <th className={styles.rowHeader} scope="row">
                <span className={styles.rowHeaderTitle}>{row.idealBodyWeight}</span>
              </th>
              <td className={styles.cell} data-label="Requirement">
                {row.requirement}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function IvFluidClassificationTable() {
  return (
    <div className={styles.tableCard}>
      <div className={styles.captionBand}>
        <p className={styles.captionTitle}>Table 2. Classification of IV fluids</p>
        <p className={styles.captionSource}>
          Balanced and unbalanced crystalloids differ mainly in chloride content and buffer ions.
        </p>
      </div>

      <table className={styles.table}>
        <thead className={styles.head}>
          <tr>
            <th className={styles.headCell} scope="col">
              Type
            </th>
            <th className={styles.headCell} scope="col">
              Subtype
            </th>
            <th className={styles.headCell} scope="col">
              Example
            </th>
            <th className={styles.headCell} scope="col">
              Characteristics
            </th>
          </tr>
        </thead>

        {groupedClassificationRows.map((group) => (
          <tbody className={styles.bodyGroup} key={group.label}>
            {group.rows.map((row, index) => (
              <tr className={styles.row} key={`${group.label}-${row.example}`}>
                {index === 0 ? (
                  <th
                    className={`${styles.rowHeader} ${group.accentClassName}`}
                    rowSpan={group.rows.length}
                    scope="rowgroup"
                  >
                    <span className={styles.rowHeaderTitle}>{group.label}</span>
                  </th>
                ) : null}
                <td className={styles.cell} data-label="Subtype">
                  {row.subtype}
                </td>
                <td className={styles.cell} data-label="Example">
                  {row.example}
                </td>
                <td className={styles.cell} data-label="Characteristics">
                  {row.characteristics}
                </td>
              </tr>
            ))}
          </tbody>
        ))}
      </table>

      <p className={styles.abbreviations}>
        <strong>Abbreviations:</strong> ICP, intracranial pressure.
      </p>
    </div>
  );
}

export function IvFluidComparisonTable() {
  return (
    <div className={styles.tableCard}>
      <div className={styles.captionBand}>
        <p className={styles.captionTitle}>
          Table 3. Characteristics of commonly used IV fluids compared with human plasma
        </p>
      </div>

      <table className={styles.table}>
        <thead className={styles.head}>
          <tr>
            <th className={styles.headCell} scope="col">
              Section
            </th>
            <th className={styles.headCell} scope="col">
              Parameter
            </th>
            <th className={styles.headCell} scope="col">
              Plasma
            </th>
            <th className={styles.headCell} scope="col">
              0.9% NaCl
            </th>
            <th className={styles.headCell} scope="col">
              Ringer lactate
            </th>
            <th className={styles.headCell} scope="col">
              Plasma-Lyte 148
            </th>
          </tr>
        </thead>

        {comparisonSections.map((section) => (
          <tbody className={styles.bodyGroup} key={section.label}>
            {section.rows.map((row, index) => (
              <tr className={styles.row} key={`${section.label}-${row.parameter}`}>
                {index === 0 ? (
                  <th
                    className={`${styles.rowHeader} ${section.accentClassName}`}
                    rowSpan={section.rows.length}
                    scope="rowgroup"
                  >
                    <span className={styles.rowHeaderTitle}>{section.label}</span>
                  </th>
                ) : null}
                <th className={styles.subHeader} scope="row">
                  {row.parameter}
                </th>
                {row.values.map((value) => (
                  <td className={styles.cell} data-label={value.label} key={`${row.parameter}-${value.label}`}>
                    {renderValue(value.value)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        ))}
      </table>

      <p className={styles.abbreviations}>
        <strong>Abbreviations:</strong> eSID, effective strong ion difference.
      </p>
    </div>
  );
}
