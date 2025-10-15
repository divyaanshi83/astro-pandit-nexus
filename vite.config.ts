import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  base: "./", // ✅ ensures assets resolve correctly on Netlify
  root: ".", // ✅ makes sure Vite recognizes root index.html
  publicDir: "public", // ✅ for static assets like icons, manifest, etc.

  server: {
    host: "localhost", // ✅ needed for Netlify Dev on Windows
    port: 5173,
    strictPort: true,

    // ✅ Fix CORS issue when running locally (proxy Netlify functions)
    proxy: {
      "/.netlify/functions": {
        target: "http://localhost:8888",
        changeOrigin: true,
        secure: false,
      },
    },
  },

  plugins: [
    react(),
    mode === "development" && componentTagger(),
  ].filter(Boolean),

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  build: {
    outDir: "dist", // ✅ Netlify will publish from here
    emptyOutDir: true,
  },
}));
