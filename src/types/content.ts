import type { ComponentType } from "react";

import type { EditorialStatus } from "@/types/editorial";

export type PartId =
  | "part-1"
  | "part-2"
  | "part-3"
  | "part-4"
  | "part-5"
  | "part-6"
  | "part-7";

export type ChapterKind = "chapter" | "review";
export type ChapterSourcePath = `/src/docs/${string}.mdx`;

export interface MDXContentProps {
  components?: Record<string, ComponentType<any>>;
}

export interface PartRecord {
  id: PartId;
  slug: string;
  title: string;
  description: string;
  position: number;
}

export interface ChapterRecord {
  id: string;
  slug: string;
  partId: PartId;
  number: string;
  order: number;
  title: string;
  description: string;
  authors: string[];
  kind: ChapterKind;
  status: EditorialStatus;
  sourcePath: ChapterSourcePath;
}

export interface ChapterFrontmatter {
  title: string;
  description: string;
  authors: string[];
  [key: string]: unknown;
}

export interface ChapterModule {
  default: ComponentType<MDXContentProps>;
  keyPoints?: string[];
}

export type ChapterLoader = () => Promise<ChapterModule>;
