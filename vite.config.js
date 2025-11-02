import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/kds-landing-page/",
  server: {
    port: 4200,
  },
});
