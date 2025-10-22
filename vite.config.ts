import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig(({ mode }) => {
  // Load environment variables
  const env = loadEnv(mode, process.cwd(), "");

  return {
    base: "./", // ensures assets resolve correctly on Netlify
    root: ".", // makes sure Vite recognizes root index.html
    publicDir: "public", // for static assets like icons, manifest, etc.

    server: {
      host: "localhost", // works well for Netlify Dev on Windows
      port: 8080,
      strictPort: true,

      // Fixes local CORS when using Netlify Functions
      proxy: {
        "/.netlify/functions": {
          target: "http://localhost:8888",
          changeOrigin: true,
          secure: false,
        },
      },
    },

    plugins: [
      react() // ✅ only keep React plugin, remove Lovable componentTagger
    ],

    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"), // clean alias for src/
        "@utils": path.resolve(__dirname, "./netlify/functions/utils"), // ✅ easy helper imports
      },
    },

    build: {
      outDir: "dist", // Netlify will publish from here
      emptyOutDir: true, // cleans output before each build
    },

    // ✅ Make OPENAI_API_KEY available as import.meta.env.VITE_OPENAI_API_KEY
    define: {
      "import.meta.env.VITE_OPENAI_API_KEY": JSON.stringify(env.OPENAI_API_KEY),
    },
  };
});
