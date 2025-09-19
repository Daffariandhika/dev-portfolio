import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import preact from "@astrojs/preact";
import compress from "astro-compress";

export default defineConfig({
  integrations: [
    preact(),
    tailwind(),
    compress()
  ],
});