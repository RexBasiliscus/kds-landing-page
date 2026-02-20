import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/", // Change this to your subdirectory if not deploying to root, e.g., "/myapp/"
  server: {
    port: 4200,
  },
  build: {
    outDir: "dist",
    assetsDir: "assets",
    sourcemap: false,
  },
});
