import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

export default defineConfig({
  site:
    process.env.NODE_ENV === "production"
      ? "https://huexi.blog"
      : "http://localhost:4321",
  integrations: [mdx()],
  image: {
    service: {
      entrypoint: "astro/assets/services/sharp",
    },
  },
});
