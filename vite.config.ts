import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/portfolio-template/", // <--- Esta é a linha mágica que faltava
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
