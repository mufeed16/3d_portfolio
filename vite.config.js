import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "./",  // Ensures correct asset paths in production
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("three") || id.includes("three-stdlib") || id.includes("@emailjs/browser")) {
              return "vendor-three";
            }
            return "vendor";
          }
        },
      },
    },
  },
  define: {
    "process.env": {}, // Prevents SSR issues
  },
});
