import {useMemo, useState} from 'react';

type AbcdeEntry = {
  letter: 'A' | 'B' | 'C' | 'D' | 'E';
  title: string;
  hint: string;
  points: string[];
};

type AbcdeBoxProps = {
  items?: AbcdeEntry[];
  defaultOpen?: Array<AbcdeEntry['letter']>;
};

const defaultItems: AbcdeEntry[] = [
  {
    letter: 'A',
    title: 'Airway',
    hint: 'Patency, protection, obstruction risks',
    points: ['Assess if airway is patent and protected.', 'Look for stridor, gurgling, vomiting, or facial trauma.', 'Use airway maneuvers and adjuncts when needed.'],
  },
  {
    letter: 'B',
    title: 'Breathing',
    hint: 'Ventilation, oxygenation, respiratory effort',
    points: ['Check respiratory rate, chest movement, and accessory muscle use.', 'Monitor SpO2 and provide oxygen titrated to target ranges.', 'Escalate to ventilatory support for impending respiratory failure.'],
  },
  {
    letter: 'C',
    title: 'Circulation',
    hint: 'Perfusion, bleeding, shock recognition',
    points: ['Assess heart rate, blood pressure, capillary refill, and skin perfusion.', 'Control external bleeding and obtain vascular access.', 'Start fluid resuscitation and consider vasopressors by clinical context.'],
  },
  {
    letter: 'D',
    title: 'Disability',
    hint: 'Neurologic status and glucose',
    points: ['Assess consciousness level (AVPU or GCS).', 'Check pupils and focal neurological deficits.', 'Measure blood glucose and treat immediately reversible causes.'],
  },
  {
    letter: 'E',
    title: 'Exposure',
    hint: 'Full assessment while preventing heat loss',
    points: ['Expose patient for complete exam including back and hidden injuries.', 'Check temperature and signs of infection, rash, or trauma.', 'Prevent hypothermia with active warming after assessment.'],
  },
];

export default function AbcdeBox({items, defaultOpen = ['A']}: AbcdeBoxProps) {
  const rows = useMemo(() => items ?? defaultItems, [items]);
  const [open, setOpen] = useState<Set<AbcdeEntry['letter']>>(new Set(defaultOpen));

  const toggle = (letter: AbcdeEntry['letter']) => {
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(letter)) {
        next.delete(letter);
      } else {
        next.add(letter);
      }
      return next;
    });
  };

  return (
    <section className="kv-abcde" aria-label="ABCDE assessment framework">
      {rows.map((item) => {
        const isOpen = open.has(item.letter);
        const panelId = `abcde-${item.letter.toLowerCase()}`;

        return (
          <article className="kv-abcde-row" key={item.letter}>
            <button
              className="kv-abcde-summary"
              type="button"
              onClick={() => toggle(item.letter)}
              aria-expanded={isOpen}
              aria-controls={panelId}>
              <span className="kv-abcde-letter">{item.letter}</span>
              <span>
                <span className="kv-abcde-title">{item.title}</span>
                <span className="kv-abcde-hint">{item.hint}</span>
              </span>
            </button>
            {isOpen ? (
              <div className="kv-abcde-detail" id={panelId}>
                <ul>
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            ) : null}
          </article>
        );
      })}
    </section>
  );
}
