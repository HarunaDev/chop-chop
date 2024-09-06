import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps: {
    exclude: ['env.mjs'],
  },
  define: {
    'process.env': process.env,
  },
  plugins: [react()],
})
