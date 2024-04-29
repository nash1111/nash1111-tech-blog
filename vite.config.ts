import {
  cloudflareDevProxyVitePlugin as remixCloudflareDevProxy,
  vitePlugin as remix,
} from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import mdx from "@mdx-js/rollup";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import rehypePrettyCode from "rehype-pretty-code";

export default defineConfig({
  //plugins: [
  //  tsconfigPaths(),
  //  //mdx({
  //  //  remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
  //  //  rehypePlugins: [rehypePrettyCode],
  //  //}),
  //  remixCloudflareDevProxy(),
  //  remix(),
  //],
  plugins: [remixCloudflareDevProxy(), remix(), tsconfigPaths()],
});
