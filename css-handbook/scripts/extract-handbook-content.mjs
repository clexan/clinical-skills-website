import fs from 'node:fs/promises';
import path from 'node:path';
import {execFile} from 'node:child_process';
import {promisify} from 'node:util';
import {fileURLToPath} from 'node:url';

const execFileAsync = promisify(execFile);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');
const repoRoot = path.resolve(projectRoot, '..');
const curatedBodyDir = path.join(__dirname, 'curated-chapter-bodies');

const pdfSourcePath = path.join(repoRoot, 'docs', 'CSS Handbook_prelim_compressed.pdf');
const textFallbackPath = path.join(repoRoot, 'handbook-contnent_text.txt');

const chapters = [
  {
    file: 'docs/part-1/1-1-abcde-sample.mdx',
    title: '1.1 Initial assessment of acutely ill patients (ABCDE and SAMPLE)',
    description: 'Structured initial assessment of acutely ill patients using the ABCDE and SAMPLE approaches.',
    partLabel: 'Part 1: Deteriorating patient',
    start: /(^|\n)\s*!\.\s*!\.\s*INITIAL ASSESSMENT OF ACUTELY ILL PATIENTS\s*\n\s*\(ABCDE AND SAMPLE\)/m,
  },
  {
    file: 'docs/part-1/1-2-ecg-interpretation.mdx',
    title: '1.2 Essentials for ECG interpretation in medical emergencies',
    description: 'ECG fundamentals, monitoring, and 12-lead interpretation in medical emergencies.',
    partLabel: 'Part 1: Deteriorating patient',
    start: /(^|\n)\s*!\.\s*2\.\s*ESSENTIALS FOR ECG INTERPRETATION IN/m,
  },
  {
    file: 'docs/part-1/1-3-vascular-access.mdx',
    title: '1.3 Intravascular and intraosseous access',
    description: 'Obtaining intravascular and intraosseous access in deteriorating patients.',
    partLabel: 'Part 1: Deteriorating patient',
    start: /(^|\n)\s*!\.\s*3\.\s*INTRAVASCULAR AND INTRAOSSEOUS ACCESS/m,
  },
  {
    file: 'docs/part-1/1-4-als-algorithm.mdx',
    title: '1.4 Advanced life support (ALS) algorithm',
    description: 'Recognition and management of shockable and non-shockable cardiac arrest rhythms.',
    partLabel: 'Part 1: Deteriorating patient',
    start: /(^|\n)\s*!\.\s*4\.\s*ADVANCED LIFE SUPPORT \(ALS\) ALGORITHM/m,
  },
  {
    file: 'docs/part-2/2-1-acs.mdx',
    title: '2.1 Initial assessment and management of a patient with acute coronary syndrome',
    description: 'Recognition, diagnosis, and initial treatment of acute coronary syndrome.',
    partLabel: 'Part 2: Cardiac emergencies',
    start: /(^|\n)\s*2\.\s*!\.\s*INITIAL ASSESSMENT AND MANAGMENT OF A PATIENT\s+WITH ACUTE CORONARY SYNDROME/m,
  },
  {
    file: 'docs/part-2/2-2-arrhythmias.mdx',
    title: '2.2 Initial assessment and management of a patient with cardiac arrhythmia',
    description: 'Initial assessment, classification, and treatment of cardiac arrhythmias.',
    partLabel: 'Part 2: Cardiac emergencies',
    start: /(^|\n)\s*2\.\s*2\.\s*INITIAL ASSESSMENT AND MANAGEMENT OF A PATIENT\s+WITH CARDIAC ARRHYTHMIA/m,
  },
  {
    file: 'docs/part-3/3-1-resp-failure.mdx',
    title: '3.1 Acute respiratory failure',
    description: 'Recognition and early management of acute respiratory failure.',
    partLabel: 'Part 3: Respiratory emergencies',
    start: /(^|\n)\s*3\.\s*!\.\s*ACUTE RESPIRATORY FAILURE/m,
  },
  {
    file: 'docs/part-3/3-2-oxygen.mdx',
    title: '3.2 Oxygen therapy and pulse oximetry',
    description: 'Practical oxygen delivery, target saturations, and pulse oximetry basics.',
    partLabel: 'Part 3: Respiratory emergencies',
    start: /(^|\n)\s*3\.\s*2\.\s*OXYGEN THERAPY AND PULSE OXIMETRY/m,
  },
  {
    file: 'docs/part-3/3-3-abg.mdx',
    title: '3.3 Arterial blood gases (ABGs)',
    description: 'Interpreting arterial blood gases in respiratory emergencies.',
    partLabel: 'Part 3: Respiratory emergencies',
    start: /(^|\n)\s*3\.\s*3\.\s*ARTERIAL BLOOD GASES \(ABGs\)/m,
  },
  {
    file: 'docs/part-3/3-4-anaphylaxis.mdx',
    title: '3.4 Anaphylaxis',
    description: 'Initial assessment and treatment of life-threatening anaphylaxis.',
    partLabel: 'Part 3: Respiratory emergencies',
    start: /(^|\n)\s*3\.\s*4\.\s*ANAPHYLAXIS/m,
  },
  {
    file: 'docs/part-3/3-5-bronchospasm.mdx',
    title: '3.5 Acute bronchospasm',
    description: 'Assessment and treatment of asthma and COPD exacerbations with bronchospasm.',
    partLabel: 'Part 3: Respiratory emergencies',
    start: /(^|\n)\s*3\.\s*%\.\s*ACUTE BRONCHOSPASM/m,
  },
  {
    file: 'docs/part-3/3-6-pulm-oedema.mdx',
    title: '3.6 Pulmonary oedema',
    description: 'Initial assessment and management of pulmonary oedema.',
    partLabel: 'Part 3: Respiratory emergencies',
    start: /(^|\n)\s*3\.\s*&\.\s*PULMONARY OEDEMA/m,
  },
  {
    file: 'docs/part-3/3-7-mechanical-ventilation.mdx',
    title: '3.7 Mechanical ventilation snippets',
    description: 'Core practical concepts for mechanical ventilation in respiratory emergencies.',
    partLabel: 'Part 3: Respiratory emergencies',
    start: /(^|\n)\s*3\.\s*'\.\s*MECHANICAL VENTILATION SNIPPETS/m,
  },
  {
    file: 'docs/part-4/4-1-neuro.mdx',
    title: '4.1 Sudden neurological deterioration',
    description: 'Causes and initial assessment of sudden neurological deterioration.',
    partLabel: 'Part 4: Sudden neurological deterioration',
    start: /(^|\n)\s*4\.\s*!\.\s*SUDDEN NEUROLOGICAL DETERIORATION/m,
  },
  {
    file: 'docs/part-4/4-2-seizures.mdx',
    title: '4.2 Seizures',
    description: 'Recognition, treatment, and initial patient care in seizures.',
    partLabel: 'Part 4: Sudden neurological deterioration',
    start: /(^|\n)\s*4\.\s*2\.\s*SEIZURES/m,
  },
  {
    file: 'docs/part-4/4-3-poisoning.mdx',
    title: '4.3 Acute poisoning',
    description: 'Initial ABCDE assessment and urgent management of acute poisoning.',
    partLabel: 'Part 4: Sudden neurological deterioration',
    start: /(^|\n)\s*4\.\s*3\.\s*ACUTE POISONING/m,
  },
  {
    file: 'docs/part-5/5-1-sepsis.mdx',
    title: '5.1 Sepsis and septic shock',
    description: 'Recognition and first-hour management of sepsis and septic shock.',
    partLabel: 'Part 5: Sepsis',
    start: /(^|\n)\s*%\.\s*!\.\s*SEPSIS AND SEPTIC SHOCK/m,
  },
  {
    file: 'docs/part-6/6-1-iv-fluids.mdx',
    title: '6.1 Intravenous fluids',
    description: 'Basal fluid requirements and practical selection of intravenous fluids.',
    partLabel: 'Part 6: Blood, fluids and electrolytes',
    start: /(^|\n)\s*&\.\s*!\.\s*INTRAVENOUS FLUIDS/m,
  },
  {
    file: 'docs/part-6/6-2-electrolytes.mdx',
    title: '6.2 Management of electrolyte disorders',
    description: 'Recognition and early management of major electrolyte disorders.',
    partLabel: 'Part 6: Blood, fluids and electrolytes',
    start: /(^|\n)\s*&\.\s*2\.\s*MANAGEMENT OF ELECTROLYTE DISORDERS/m,
  },
  {
    file: 'docs/part-6/6-3-haemorrhage.mdx',
    title: '6.3 Haemorrhage and haemorrhagic shock',
    description: 'Recognition and initial management of bleeding and haemorrhagic shock.',
    partLabel: 'Part 6: Blood, fluids and electrolytes',
    start: /(^|\n)\s*&\.\s*3\.\s*HAEMORRHAGE AND HAEMORRHAGIC SHOCK/m,
  },
  {
    file: 'docs/part-7/7-1-trauma.mdx',
    title: '7.1 Trauma assessment and management',
    description: 'Prehospital trauma assessment, survey, and stabilisation.',
    partLabel: 'Part 7: Injuries',
    start: /(^|\n)\s*'\.\s*!\.\s*TRAUMA ASSESSMENT AND MANAGMENT/m,
  },
  {
    file: 'docs/part-7/7-2-burns.mdx',
    title: '7.2 Burns',
    description: 'Initial assessment and emergency management of patients with burns.',
    partLabel: 'Part 7: Injuries',
    start: /(^|\n)\s*'\.\s*2\.\s*BURNS/m,
  },
];

const obsoleteFiles = ['docs/part-2/2-3-ecg-emergency.mdx'];

const inlineReplacements = [
  [/\u2010|\u2011|\u2012|\u2013|\u2014|\u2212/g, '-'],
  [/\u2018|\u2019|\u2032/g, "'"],
  [/\u201c|\u201d/g, '"'],
  [/\u00a0/g, ' '],
  [/ABCDE\s+\?\s+SAMPLE/g, 'ABCDE + SAMPLE'],
  [/SCENE SIZE2UP/g, 'SCENE SIZE-UP'],
  [/STE2ACS/g, 'STE-ACS'],
  [/NSTE2ACS/g, 'NSTE-ACS'],
  [/Sp0?O['’]/g, 'SpO2'],
  [/Sa0?O['’]/g, 'SaO2'],
  [/Pa0?O['’]/g, 'PaO2'],
  [/PA0?O['’]/g, 'PAO2'],
  [/PaCO[-'’]/g, 'PaCO2'],
  [/EtCO['’]/g, 'EtCO2'],
  [/CO['’]/g, 'CO2'],
  [/F1O['’]/g, 'FiO2'],
  [/FIO['’]/g, 'FiO2'],
  [/F9O[-'’]/g, 'FiO2'],
  [/cmH['’-]?O/g, 'cmH2O'],
  [/\b3g\/kg\/min\b/g, 'mcg/kg/min'],
  [/\b3g\/kg\/h\b/g, 'mcg/kg/h'],
  [/\b4A15\b/g, '4-15'],
  [/\bGCS 5 8\b/g, 'GCS <= 8'],
];

function stripNumbering(value) {
  return value.replace(/^\d+\.\d+\s+/, '').trim();
}

function commonPrefixLength(left, right) {
  let index = 0;
  while (index < left.length && index < right.length && left[index] === right[index]) {
    index += 1;
  }
  return index;
}

function canonicalHeading(value) {
  return value
    .replace(/[!]/g, '1')
    .replace(/[%]/g, '5')
    .replace(/[&]/g, '6')
    .replace(/[']/g, '7')
    .replace(/\s+/g, ' ')
    .replace(/[().,:;/-]/g, '')
    .trim()
    .toLowerCase();
}

function normalizeInline(line) {
  let normalized = line;
  for (const [pattern, replacement] of inlineReplacements) {
    normalized = normalized.replace(pattern, replacement);
  }
  return normalized.replace(/\s+/g, ' ').trim();
}

function isPageLine(line) {
  const normalized = normalizeInline(line);
  return /^\d+$/.test(normalized) || /^\d+\s*-\s*\d+$/.test(normalized);
}

function isPartSummaryStart(line) {
  return /^PART\s+[0-9!%&']:/.test(normalizeInline(line));
}

function isTableOrFigure(line) {
  return /^(TABLE|FIGURE)\b/i.test(normalizeInline(line));
}

function isRunningTitle(line, chapter) {
  const normalized = canonicalHeading(normalizeInline(line));
  const shortTitle = canonicalHeading(stripNumbering(chapter.title));

  return (
    normalized === canonicalHeading(chapter.title) ||
    normalized === shortTitle ||
    normalized === canonicalHeading(chapter.partLabel)
  );
}

function isNumberedHeading(line) {
  return /^[0-9!%&']\.\s*[0-9!%&']\.\s*(?:[0-9!%&']\.\s*)?/.test(line);
}

function extractNumberedHeading(line) {
  return normalizeInline(
    line.replace(/^[0-9!%&']\.\s*[0-9!%&']\.\s*(?:[0-9!%&']\.\s*)?/, ''),
  );
}

function headingDepth(line) {
  return (line.match(/[0-9!%&']\./g) || []).length;
}

function isHeadingContinuation(line) {
  if (!line) {
    return false;
  }

  if (isPageLine(line) || isTableOrFigure(line) || /^Part\s+\d+:/i.test(line)) {
    return false;
  }

  return (
    /^[A-Z0-9 ()/+,'" -]+$/.test(line) &&
    /[A-Z]{2,}/.test(line) &&
    /^(AND|OR|OF|WITH|WITHOUT|FOR|IN|ON|TO|FROM|THE|BY|ACUTE|CHRONIC|ABCDE \+ SAMPLE)\b/i.test(
      normalizeInline(line),
    )
  );
}

function isSectionHeading(line) {
  return /^(SOURCES|KEY POINTS|KEYPOINTS|LIMITATIONS|THERAPY|MAGNESIUM|AMINOPHYLLINE|FLUID THERAPY|PATIENT MONITORING|CHRONIC THERAPY|ABG ANALYSIS|CLASSIFICATION OF ACUTE CORONARY SYNDROMES|NORMAL CARDIAC CYCLE ON THE ECG|HYPERKALAEMIA|HYPOKALAEMIA|HYPONATRAEMIA AND HYPERNATRAEMIA|HYPOCALCAEMIA AND HYPERCALCAEMIA|HYPOMAGNESAEMIA AND HYPERMAGNESAEMIA|SCENE SIZE-UP|ITLS PRIMARY SURVEY|TENSION PNEUMOTHORAX|OPEN PNEUMOTHORAX|MASSIVE HAEMOTHORAX|FLAIL CHEST|CARDIAC TAMPONADE|DIAPHRAGMATIC RUPTURE|BLUNT ABDOMINAL INJURIES|PENETRATING ABDOMINAL INJURIES)$/i.test(
    normalizeInline(line),
  );
}

function isAirwayHeading(line) {
  return /^(A|B|C|D|E|F)\s*\([A-Z /-]+\):?$/.test(line) || /^SAMPLE:?$/i.test(line);
}

function looksLikeUpperHeading(line) {
  const normalized = normalizeInline(line);
  return (
    normalized.length >= 4 &&
    normalized.length <= 100 &&
    /^[A-Z0-9 /()+,'" -]+$/.test(normalized) &&
    /[A-Z]{3,}/.test(normalized)
  );
}

function looksLikeAuthorLine(line) {
  const normalized = normalizeInline(line);
  return (
    normalized.length > 3 &&
    normalized.length < 90 &&
    /^[A-Za-z0-9*+.'&\- ]+$/.test(normalized) &&
    !/[.]/.test(normalized) &&
    !/^Part\s+\d+:/i.test(normalized) &&
    normalized.split(/\s+/).length <= 8
  );
}

function extractInlineAuthor(line) {
  const normalized = normalizeInline(line);

  let match = normalized.match(/^\d+\s+([A-Za-z0-9*+.'&\- ]{3,80}?)\s+\d+$/);
  if (match && /[A-Za-z]/.test(match[1])) {
    return match[1].trim();
  }

  match = normalized.match(/^([A-Za-z0-9*+.'&\- ]{3,80}?)\s+\d+$/);
  if (match && /[A-Za-z]/.test(match[1])) {
    return match[1].trim();
  }

  return null;
}

function parseSampleItem(line) {
  const trimmed = line.trim();

  let match = trimmed.match(/^([SAMPLE])\s*(\([^)]+\))\s*:?\s*(.+)$/i);
  if (match) {
    return {
      label: `${match[1].toUpperCase()} ${normalizeInline(match[2])}`,
      text: normalizeInline(match[3]),
    };
  }

  match = trimmed.match(/^([SAMPLE])\s*:\s*(.+)$/i);
  if (match) {
    return {label: match[1].toUpperCase(), text: normalizeInline(match[2])};
  }

  match = trimmed.match(/^([SAMPLE])\s{2,}(.+)$/i);
  if (match) {
    return {label: match[1].toUpperCase(), text: normalizeInline(match[2])};
  }

  match = trimmed.match(/^([SAMPLE])\s+(.+)$/i);
  if (match) {
    return {label: match[1].toUpperCase(), text: normalizeInline(match[2])};
  }

  return null;
}

function joinWrappedLine(left, right) {
  const normalizedRight = normalizeInline(right);
  if (!left) {
    return normalizedRight;
  }
  if (!normalizedRight) {
    return left;
  }
  if (left.endsWith('-') && /^[a-z]/.test(normalizedRight)) {
    return `${left.slice(0, -1)}${normalizedRight}`;
  }
  return `${left} ${normalizedRight}`.replace(/\s+([,.;:!?])/g, '$1');
}

function moveTailBeforeSources(lines) {
  const sourceIndex = lines.indexOf('### SOURCES');
  if (sourceIndex === -1) {
    return lines;
  }

  let tailIndex = -1;
  for (let i = sourceIndex + 1; i < lines.length; i += 1) {
    if (!lines[i]) {
      continue;
    }
    if (/^\d+\./.test(lines[i])) {
      continue;
    }
    if (/^##\s/.test(lines[i])) {
      tailIndex = i;
      break;
    }
    tailIndex = i;
    break;
  }

  if (tailIndex === -1) {
    return lines;
  }

  const prefix = lines.slice(0, sourceIndex);
  const sources = lines.slice(sourceIndex, tailIndex);
  const tail = lines.slice(tailIndex);
  return [...prefix, '', ...tail, '', ...sources];
}

function compactBlankLines(lines) {
  const compacted = [];
  for (const line of lines) {
    if (line === '' && compacted.at(-1) === '') {
      continue;
    }
    compacted.push(line);
  }

  while (compacted.at(-1) === '') {
    compacted.pop();
  }

  return compacted;
}

function fixNeuroChapterArtifacts(body) {
  let nextBody = body;

  const misplacedNormalBlock = nextBody.match(
    /\n- Normal pupils are equal in size[\s\S]*?(?=\nL\n|\n### SOURCES)/,
  );
  if (misplacedNormalBlock && nextBody.includes('**TABLE !. Glasgow Coma Scale (GCS)**')) {
    nextBody = nextBody.replace(misplacedNormalBlock[0], '');
    nextBody = nextBody.replace(
      '\n**TABLE !. Glasgow Coma Scale (GCS)**',
      `${misplacedNormalBlock[0]}\n\n**TABLE !. Glasgow Coma Scale (GCS)**`,
    );
  }

  nextBody = nextBody.replace(
    '### SAMPLE\n\n(Signs/symptoms):',
    '### SAMPLE\n\n- **S (Signs/symptoms)**',
  );
  nextBody = nextBody.replace(/\s+\(Allergies\):/g, '\n- **A (Allergies)**');
  nextBody = nextBody.replace(/\s+\(Medications\):/g, '\n- **M (Medications)**');
  nextBody = nextBody.replace(/\s+\(Past illnesses\):/g, '\n- **P (Past illnesses)**');
  nextBody = nextBody.replace(/\s+\(Last oral intake\):/g, '\n- **L (Last oral intake)**');
  nextBody = nextBody.replace(
    /\s+\(Events leading up to present illness\/injury\):/g,
    '\n- **E (Events leading up to present illness/injury)**',
  );
  nextBody = nextBody.replace(/\nL\n\n/g, ' ');

  return compactBlankLines(nextBody.split('\n')).join('\n');
}

function postprocessChapterBody(chapter, body) {
  if (chapter.file === 'docs/part-4/4-1-neuro.mdx') {
    return fixNeuroChapterArtifacts(body);
  }
  return body;
}

function escapeMdxText(body) {
  return body.replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function findSpreadGutter(lines) {
  const nonEmpty = lines.filter((line) => line.trim());
  if (!nonEmpty.length) {
    return null;
  }

  const maxLength = Math.max(...nonEmpty.map((line) => line.length));
  const center = maxLength / 2;
  const candidates = [];

  for (const line of nonEmpty) {
    for (const match of line.matchAll(/ {8,}/g)) {
      const start = match.index ?? 0;
      const end = start + match[0].length;
      const midpoint = (start + end) / 2;
      if (Math.abs(midpoint - center) <= maxLength * 0.2) {
        candidates.push({start, end, width: end - start});
      }
    }
  }

  if (candidates.length < 4) {
    return null;
  }

  const weighted = candidates.reduce(
    (accumulator, candidate) => {
      const weight = candidate.width;
      return {
        start: accumulator.start + candidate.start * weight,
        end: accumulator.end + candidate.end * weight,
        weight: accumulator.weight + weight,
      };
    },
    {start: 0, end: 0, weight: 0},
  );

  if (!weighted.weight) {
    return null;
  }

  const start = Math.round(weighted.start / weighted.weight);
  const end = Math.round(weighted.end / weighted.weight);
  return end > start ? {start, end} : null;
}

function trimBlankEdges(lines) {
  let start = 0;
  while (start < lines.length && !lines[start].trim()) {
    start += 1;
  }

  let end = lines.length;
  while (end > start && !lines[end - 1].trim()) {
    end -= 1;
  }

  return lines.slice(start, end);
}

function splitSpreadIntoPages(spreadText) {
  const lines = spreadText
    .replace(/\r/g, '')
    .split('\n')
    .map((line) => line.replace(/\s+$/g, ''));

  const gutter = findSpreadGutter(lines);
  if (!gutter) {
    return [trimBlankEdges(lines).join('\n')].filter((page) => page.trim());
  }

  const left = [];
  const right = [];

  for (const line of lines) {
    left.push(line.slice(0, gutter.start).replace(/\s+$/g, ''));
    right.push(line.slice(gutter.end).replace(/^\s+/g, '').replace(/\s+$/g, ''));
  }

  return [trimBlankEdges(left).join('\n'), trimBlankEdges(right).join('\n')].filter((page) =>
    page.trim(),
  );
}

function unwrapSpreadText(layoutText) {
  const pages = [];
  for (const spread of layoutText.split('\f')) {
    if (!spread.trim()) {
      continue;
    }
    pages.push(...splitSpreadIntoPages(spread));
  }
  return pages.join('\n');
}

async function readHandbookSource() {
  try {
    await fs.access(pdfSourcePath);
    const {stdout} = await execFileAsync('pdftotext', [pdfSourcePath, '-'], {
      maxBuffer: 64 * 1024 * 1024,
    });
    return stdout;
  } catch {
    return fs.readFile(textFallbackPath, 'utf8');
  }
}

async function readCuratedChapterBody(chapter) {
  const curatedPath = path.join(
    curatedBodyDir,
    `${path.basename(chapter.file, path.extname(chapter.file))}.md`,
  );

  try {
    return (await fs.readFile(curatedPath, 'utf8')).trim();
  } catch (error) {
    if (error && typeof error === 'object' && 'code' in error && error.code === 'ENOENT') {
      return null;
    }
    throw error;
  }
}

function buildBody(chapter, rawSection) {
  let text = rawSection
    .replace(/\r/g, '')
    .replace(/\f/g, '\n')
    .replace(chapter.start, '\n');

  const summaryIndex = text.search(/\nPART\s+[0-9!%&']:/);
  if (summaryIndex !== -1) {
    text = text.slice(0, summaryIndex);
  }

  const trailingKeypoints = text.search(/\nKeypoints\b[\s\S]*\nPart\s+\d+:/i);
  if (trailingKeypoints !== -1) {
    text = text.slice(0, trailingKeypoints);
  }

  const rawLines = text.split('\n').map((line) => line.trimEnd());
  const out = [];
  let current = null;
  let inSampleSection = false;
  let emittedContent = false;
  let pendingBullet = false;
  let pendingAlpha = null;
  let pendingNumber = null;
  let pendingSampleLabel = null;

  function isListLine(line) {
    return /^- /.test(line) || /^\d+\./.test(line);
  }

  function clearPendingMarkers() {
    pendingBullet = false;
    pendingAlpha = null;
    pendingNumber = null;
    pendingSampleLabel = null;
  }

  function pushParagraph(line) {
    if (!line) {
      return;
    }
    if (out.length && out.at(-1) !== '') {
      out.push('');
    }
    out.push(line);
  }

  function pushListItem(line) {
    if (!line) {
      return;
    }
    if (out.length && out.at(-1) !== '' && !isListLine(out.at(-1))) {
      out.push('');
    }
    out.push(line);
  }

  function flushCurrent() {
    if (!current) {
      return;
    }
    if (current.type === 'paragraph') {
      pushParagraph(current.text);
    } else if (current.type === 'bullet') {
      pushListItem(`- ${current.text}`);
    } else if (current.type === 'numbered') {
      pushListItem(`${current.marker} ${current.text}`);
    }
    current = null;
  }

  function pushHeading(marker, heading) {
    flushCurrent();
    if (out.length && out.at(-1) !== '') {
      out.push('');
    }
    out.push(`${marker} ${heading}`);
    out.push('');
    emittedContent = true;
  }

  for (let i = 0; i < rawLines.length; i += 1) {
    const rawLine = rawLines[i];
    let line = rawLine.trim();

    if (!line) {
      flushCurrent();
      continue;
    }

    if (line === '-' || line === '—') {
      pendingBullet = true;
      continue;
    }

    if (/^[a-z]\)$/i.test(line)) {
      pendingAlpha = line.toLowerCase();
      continue;
    }

    if (/^\d+\.$/.test(line)) {
      pendingNumber = line;
      continue;
    }

    if (inSampleSection && /^[SAMPLE]$/.test(line)) {
      pendingSampleLabel = line.toUpperCase();
      continue;
    }

    if (!emittedContent) {
      const inlineAuthor = extractInlineAuthor(line);
      if (inlineAuthor) {
        out.push(`*Authors: ${inlineAuthor}*`);
        out.push('');
        emittedContent = true;
        continue;
      }
    }

    if (
      isPartSummaryStart(line) ||
      isPageLine(line) ||
      /^Part\s+\d+:/i.test(line) ||
      /^Keypoints$/i.test(normalizeInline(line)) ||
      /^Stick to the ABCDEs!?$/i.test(normalizeInline(line)) ||
      isRunningTitle(line, chapter)
    ) {
      continue;
    }

    if (isNumberedHeading(line)) {
      let heading = extractNumberedHeading(line);
      while (i + 1 < rawLines.length && isHeadingContinuation(rawLines[i + 1].trim())) {
        heading = `${heading} ${normalizeInline(rawLines[i + 1].trim())}`;
        i += 1;
      }
      const marker = headingDepth(line) >= 4 ? '###' : '##';
      if (heading && !isRunningTitle(heading, chapter)) {
        clearPendingMarkers();
        pushHeading(marker, heading);
        inSampleSection = false;
      }
      continue;
    }

    if (isAirwayHeading(line)) {
      const heading = normalizeInline(line.replace(/:$/, ''));
      clearPendingMarkers();
      pushHeading('###', heading);
      inSampleSection = /^SAMPLE$/i.test(heading);
      continue;
    }

    if (isSectionHeading(line)) {
      let heading = normalizeInline(line);
      while (i + 1 < rawLines.length && isHeadingContinuation(rawLines[i + 1].trim())) {
        heading = `${heading} ${normalizeInline(rawLines[i + 1].trim())}`;
        i += 1;
      }
      clearPendingMarkers();
      pushHeading('###', heading);
      inSampleSection = false;
      continue;
    }

    if (looksLikeUpperHeading(line) && !isRunningTitle(line, chapter)) {
      let heading = normalizeInline(line);
      while (i + 1 < rawLines.length && isHeadingContinuation(rawLines[i + 1].trim())) {
        heading = `${heading} ${normalizeInline(rawLines[i + 1].trim())}`;
        i += 1;
      }
      clearPendingMarkers();
      pushHeading('###', heading);
      inSampleSection = false;
      continue;
    }

    line = normalizeInline(line);
    if (!line || isRunningTitle(line, chapter)) {
      continue;
    }

    if (!emittedContent && looksLikeAuthorLine(line)) {
      out.push(`*Authors: ${line}*`);
      out.push('');
      emittedContent = true;
      continue;
    }

    if (isTableOrFigure(line)) {
      flushCurrent();
      if (out.length && out.at(-1) !== '') {
        out.push('');
      }
      out.push(`**${line}**`);
      out.push('');
      emittedContent = true;
      continue;
    }

    if (inSampleSection) {
      const sampleItem = parseSampleItem(rawLine);
      if (sampleItem) {
        clearPendingMarkers();
        flushCurrent();
        pushListItem(`- **${sampleItem.label}** ${sampleItem.text}`);
        emittedContent = true;
        continue;
      }
    }

    if (pendingSampleLabel) {
      const label = pendingSampleLabel;
      clearPendingMarkers();
      flushCurrent();
      pushListItem(`- **${label}** ${line}`);
      emittedContent = true;
      continue;
    }

    if (pendingAlpha) {
      const label = pendingAlpha;
      clearPendingMarkers();
      flushCurrent();
      current = {type: 'bullet', text: `**${label}** ${line}`};
      emittedContent = true;
      continue;
    }

    if (pendingNumber) {
      const marker = pendingNumber;
      clearPendingMarkers();
      flushCurrent();
      current = {type: 'numbered', marker, text: line};
      emittedContent = true;
      continue;
    }

    if (pendingBullet) {
      pendingBullet = false;
      flushCurrent();
      current = {type: 'bullet', text: line};
      emittedContent = true;
      continue;
    }

    if (/^[—-]\s+/.test(line)) {
      flushCurrent();
      current = {type: 'bullet', text: line.replace(/^[—-]\s+/, '')};
      emittedContent = true;
      continue;
    }

    const alphaMatch = line.match(/^([a-z])\)\s*(.+)$/i);
    if (alphaMatch) {
      flushCurrent();
      current = {type: 'bullet', text: `**${alphaMatch[1]})** ${alphaMatch[2]}`};
      emittedContent = true;
      continue;
    }

    const numericMatch = line.match(/^(\d+\.)\s*(.+)$/);
    if (numericMatch) {
      flushCurrent();
      current = {type: 'numbered', marker: numericMatch[1], text: numericMatch[2]};
      emittedContent = true;
      continue;
    }

    if (current) {
      current.text = joinWrappedLine(current.text, line);
    } else {
      current = {type: 'paragraph', text: line};
      emittedContent = true;
    }
  }

  flushCurrent();
  const reordered = moveTailBeforeSources(compactBlankLines(out));
  return compactBlankLines(reordered).join('\n');
}

function buildDoc(chapter, body) {
  return `---\ntitle: "${chapter.title.replace(/"/g, '\\"')}"\ndescription: "${chapter.description.replace(/"/g, '\\"')}"\n---\n\n${body}\n`;
}

async function main() {
  const source = await readHandbookSource();
  const located = chapters.map((chapter) => {
    const match = chapter.start.exec(source);
    if (!match) {
      throw new Error(`Could not locate chapter start for ${chapter.file}`);
    }
    return {...chapter, index: match.index};
  });

  located.sort((a, b) => a.index - b.index);

  for (let i = 0; i < located.length; i += 1) {
    const chapter = located[i];
    const end = i + 1 < located.length ? located[i + 1].index : source.length;
    const rawSection = source.slice(chapter.index, end);
    const generatedBody = postprocessChapterBody(chapter, buildBody(chapter, rawSection));
    const curatedBody = await readCuratedChapterBody(chapter);
    const body = escapeMdxText(curatedBody ?? generatedBody);
    const outputPath = path.join(projectRoot, chapter.file);
    await fs.mkdir(path.dirname(outputPath), {recursive: true});
    await fs.writeFile(outputPath, buildDoc(chapter, body));
  }

  await Promise.all(
    obsoleteFiles.map(async (relativePath) => {
      const target = path.join(projectRoot, relativePath);
      await fs.rm(target, {force: true});
    }),
  );
}

export {buildBody, chapters, readHandbookSource};

if (process.argv[1] && path.resolve(process.argv[1]) === __filename) {
  await main();
}
