import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig(({ mode }) => {
  // Load environment variables
  const env = loadEnv(mode, process.cwd(), "");

  return {
    base: "./", // ensures assets resolve correctly on production
    root: ".", // ensures Vite recognizes root index.html
    publicDir: "public",

    server: {
      host: "localhost",
      port: 8080,
      strictPort: true,

      // ✅ Proxy /api calls to your Express server in dev
      proxy: {
        "/api": {
          target: "http://localhost:3000", // Express server
          changeOrigin: true,
          secure: false,
        },
      },

      // Fix React Router refresh 404s
      historyApiFallback: true,
    },

    plugins: [react()],

    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
        "@utils": path.resolve(__dirname, "./netlify/functions/utils"), // optional, keep if needed
      },
    },

    build: {
      outDir: "dist",
      emptyOutDir: true,
    },

    // ✅ Make OPENAI_API_KEY available in front-end if needed
    define: {
      "import.meta.env.VITE_OPENAI_API_KEY": JSON.stringify(env.OPENAI_API_KEY),
    },
  };
});
