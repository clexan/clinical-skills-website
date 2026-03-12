declare module "*.mdx" {
  import type { ComponentType } from "react";

  type MDXContentProps = {
    components?: Record<string, ComponentType<any>>;
  };

  const MDXContent: ComponentType<MDXContentProps>;
  export const keyPoints: string[] | undefined;
  export default MDXContent;
}
