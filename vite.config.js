import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Относительные пути, чтобы сборка работала на GitHub Pages
  base: './',
})
