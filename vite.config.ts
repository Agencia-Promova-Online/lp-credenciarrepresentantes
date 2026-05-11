import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    proxy: {
      '/api/webhook': {
        target: 'https://n8n.promovaonline.com.br/webhook/leads-lp-captarepresentantes',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/webhook/, ''),
      },
    },
  },
});
