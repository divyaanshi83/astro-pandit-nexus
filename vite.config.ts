import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  root: ".", // ✅ ensures index.html in project root is recognized
  publicDir: "public", // ✅ optional but safe for static assets
  server: {
    host: "localhost", // ✅ ensures compatibility with Netlify Dev on Windows
    port: 8080,        // ✅ matches targetPort in netlify.toml
    strictPort: true,  // ✅ prevents silent port switching
  },
  plugins: [
    react(),
    mode === "development" && componentTagger()
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "dist", // ✅ matches Netlify’s publish directory
    emptyOutDir: true,
  },
  // ✅ Tell Vite to treat HTML files as static assets
  assetsInclude: ["**/*.html"],
}));
