import { resolve } from "node:path";

import mdx from "@mdx-js/rollup";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import remarkFrontmatter from "remark-frontmatter";
import remarkGfm from "remark-gfm";

import { mdxFrontmatterPlugin } from "./build/mdx-frontmatter";

const ignoredMdxRequestPattern = /\.mdx\?(?:raw|chapter-metadata)(?:$|[&?])/;

export default defineConfig({
  plugins: [
    mdxFrontmatterPlugin(),
    {
      enforce: "pre",
      ...mdx({
        exclude: ignoredMdxRequestPattern,
        remarkPlugins: [remarkFrontmatter, remarkGfm],
      }),
    },
    react({
      exclude: ignoredMdxRequestPattern,
      include: /\.(mdx|js|jsx|ts|tsx)$/,
    }),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
      "@site": resolve(__dirname),
    },
  },
});
