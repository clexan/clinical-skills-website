import { resolve } from "node:path";

import mdx from "@mdx-js/rollup";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import remarkFrontmatter from "remark-frontmatter";
import remarkGfm from "remark-gfm";

const rawMdxRequestPattern = /\.mdx\?raw(?:$|[&?])/;

export default defineConfig({
  plugins: [
    {
      enforce: "pre",
      ...mdx({
        exclude: rawMdxRequestPattern,
        remarkPlugins: [remarkFrontmatter, remarkGfm],
      }),
    },
    react({
      exclude: rawMdxRequestPattern,
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
