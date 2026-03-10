declare module "*.mdx" {
  import type { ComponentType } from "react";

  const MDXContent: ComponentType;
  export const keyPoints: string[] | undefined;
  export default MDXContent;
}
