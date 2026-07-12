import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Relative base so the build works under any path
// (root domain, GitHub Pages project subfolder, Netlify, etc.)
export default defineConfig({
  base: './',
  plugins: [react()],
  build: {
    target: 'es2019',
    cssCodeSplit: false,
    assetsInlineLimit: 2048,
  },
})
