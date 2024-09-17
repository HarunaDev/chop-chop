import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps: {
    exclude: ['env.mjs'],
  },
  define: {
    // eslint-disable-next-line no-undef
    'process.env': process.env,
  },
  plugins: [react()],
})
