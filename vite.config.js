import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
 build: {
   rollupOptions: {
     output: {
       manualChunks(id) {
         if (id.includes('node_modules')) {
           if (id.includes('three') || id.includes('three-stdlib') || id.includes('@emailjs/browser')) {
             return 'vendor-three';
           }
           return 'vendor';
         }
       },
     },
   },
 },
});
