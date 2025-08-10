import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import mkcert from 'vite-plugin-mkcert'

// https://vite.dev/config/
export default defineConfig({
  base: '/Do-it/',
  plugins: [react(), tailwindcss(), mkcert()],
  server: {
    port: 5173,
    host: '0.0.0.0',
  },
})
