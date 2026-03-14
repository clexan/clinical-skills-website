import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";

import type { Plugin } from "vite";

const CHAPTER_METADATA_QUERY = "chapter-metadata";
const VIRTUAL_MODULE_PREFIX = "\0mdx-frontmatter:";

type FrontmatterValue = boolean | number | string | string[];

function parseScalar(rawValue: string): boolean | number | string {
  const trimmedValue = rawValue.trim();

  if (
    (trimmedValue.startsWith('"') && trimmedValue.endsWith('"')) ||
    (trimmedValue.startsWith("'") && trimmedValue.endsWith("'"))
  ) {
    return trimmedValue.slice(1, -1).replace(/\\(["'])/g, "$1");
  }

  if (/^-?\d+(?:\.\d+)?$/.test(trimmedValue)) {
    return Number(trimmedValue);
  }

  if (trimmedValue === "true") {
    return true;
  }

  if (trimmedValue === "false") {
    return false;
  }

  return trimmedValue;
}

function parseInlineArray(rawValue: string) {
  const trimmedValue = rawValue.trim();

  if (!trimmedValue) {
    return [];
  }

  return trimmedValue
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean)
    .map((item) => String(parseScalar(item)));
}

function parseFrontmatterValue(rawValue: string): FrontmatterValue {
  const trimmedValue = rawValue.trim();

  if (trimmedValue.startsWith("[") && trimmedValue.endsWith("]")) {
    return parseInlineArray(trimmedValue.slice(1, -1));
  }

  return parseScalar(trimmedValue);
}

function parseFrontmatterBlock(source: string): Record<string, FrontmatterValue> {
  const frontmatterMatch = source.match(/^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/);

  if (!frontmatterMatch) {
    return {};
  }

  const result: Record<string, FrontmatterValue> = {};
  const lines = frontmatterMatch[1].split(/\r?\n/);

  for (let index = 0; index < lines.length; ) {
    const line = lines[index];

    if (!line.trim()) {
      index += 1;
      continue;
    }

    const fieldMatch = line.match(/^([A-Za-z0-9_-]+):(?:\s*(.*))?$/);

    if (!fieldMatch) {
      throw new Error(`Unsupported frontmatter line: ${line}`);
    }

    const [, key, rawValue = ""] = fieldMatch;

    if (!rawValue) {
      const items: string[] = [];

      index += 1;

      while (index < lines.length) {
        const itemLine = lines[index];

        if (!itemLine.trim()) {
          index += 1;
          continue;
        }

        const itemMatch = itemLine.match(/^\s*-\s+(.*)$/);

        if (!itemMatch) {
          break;
        }

        items.push(String(parseScalar(itemMatch[1])));
        index += 1;
      }

      result[key] = items;
      continue;
    }

    result[key] = parseFrontmatterValue(rawValue);
    index += 1;
  }

  return result;
}

export function mdxFrontmatterPlugin(): Plugin {
  return {
    name: "mdx-frontmatter",
    enforce: "pre",
    resolveId(source, importer) {
      const [filePath, query = ""] = source.split("?", 2);
      const searchParams = new URLSearchParams(query);

      if (!filePath.endsWith(".mdx") || !searchParams.has(CHAPTER_METADATA_QUERY)) {
        return null;
      }

      const resolvedPath = importer ? resolve(dirname(importer), filePath) : filePath;

      return `${VIRTUAL_MODULE_PREFIX}${resolvedPath}?${query}`;
    },
    load(id) {
      if (!id.startsWith(VIRTUAL_MODULE_PREFIX)) {
        return null;
      }

      const [filePath, query = ""] = id.slice(VIRTUAL_MODULE_PREFIX.length).split("?", 2);
      const searchParams = new URLSearchParams(query);

      if (!searchParams.has(CHAPTER_METADATA_QUERY)) {
        return null;
      }

      this.addWatchFile(filePath);

      const source = readFileSync(filePath, "utf8");
      const frontmatter = parseFrontmatterBlock(source);

      return `export default ${JSON.stringify(frontmatter)};`;
    },
  };
}
