import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig(({ mode }) => {
  // Load environment variables
  const env = loadEnv(mode, process.cwd(), "");

  return {
    // ✅ Use absolute root for Hostinger
    base: "/", // important: ensures assets resolve correctly in production

    root: ".", // project root
    publicDir: "public",

    server: {
      host: "localhost",
      port: 5173, // 👈 use Vite default port (your frontend runs here)
      strictPort: true,

      // ✅ Proxy /api calls to your Express server (port 5000)
      proxy: {
        "/api": {
          target: "http://localhost:5000", // 👈 your backend port
          changeOrigin: true,
          secure: false,
        },
      },
    },

    plugins: [react()],

    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
        "@utils": path.resolve(__dirname, "./netlify/functions/utils"), // optional
      },
    },

    build: {
      outDir: "dist",
      emptyOutDir: true,
      rollupOptions: {
        output: {
          entryFileNames: `assets/[name]-[hash].js`,
          chunkFileNames: `assets/[name]-[hash].js`,
          assetFileNames: `assets/[name]-[hash].[ext]`,
        },
      },
    },

    // ✅ Pass env variables to front-end if needed
    define: {
      "import.meta.env.VITE_API_BASE_URL": JSON.stringify(env.VITE_API_BASE_URL),
    },
  };
});
