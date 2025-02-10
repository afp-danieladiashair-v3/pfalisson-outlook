import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    allowedHosts: [
      'all',
      'c159f961-59e9-4135-86ef-d42a904db6f4.lovableproject.com', // Adicione o host aqui
      '5a71e751-82c7-4d34-b019-ab3b40def8bf.lovableproject.com',
      'dbc9130e-a233-4a8a-b717-06af0ab18a06.lovableproject.com',
    ],
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
