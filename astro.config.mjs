import svelte from "@astrojs/svelte";
import vercel from "@astrojs/vercel/static";
import { defineConfig } from "astro/config";
import remarkToc from "remark-toc";

// https://astro.build/config
export default defineConfig({
  integrations: [svelte()],
  output: "static",
  adapter: vercel(),
  markdown: {
    remarkPlugins: [[remarkToc, { heading: "ToC" }]],
  },
});
