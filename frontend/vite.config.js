import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// Use the built-in 'path' module from Node.js with 'import' in ESM
import * as path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
