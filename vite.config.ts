import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    base: "/", // ensure assets resolve in production

    root: ".",
    publicDir: "public",

    server: {
      host: "localhost",
      port: 5173,
      strictPort: true,
      proxy: {
        "/api": {
          target: "http://localhost:5000",
          changeOrigin: true,
          secure: false,
        },
      },
    },

    plugins: [react()],

    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
        "@utils": path.resolve(__dirname, "./netlify/functions/utils"),
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

    define: {
  "import.meta.env.VITE_API_BASE_URL": JSON.stringify(env.VITE_API_BASE_URL),

    },
  };
});
