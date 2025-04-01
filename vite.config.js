import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { viteStaticCopy } from "vite-plugin-static-copy";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: ".env.prod",
          dest: "",
        },
      ],
    }),
  ],
  base: "/Portfolio",
  build: {
    chunkSizeWarningLimit: 1000,
    assetsDir: "assets",
  },
  server: {
    port: 5100,
  },
});
