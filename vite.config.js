import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3002,     // Try to use 3002 first
    // strictPort: true,   ← removed (so it can fall back to 3003, 3004, etc. if busy)
    open: true,     // Automatically open browser
  },
})
