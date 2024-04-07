import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/roadmap.sh_vite_build-tool/",
  clearScreen: false,
  css: {
    devSourcemap: true,
  },
  server: {
    port: 3000,
  },
  preview: {
    port: 8080,
    strictPort: true,
  },
});
