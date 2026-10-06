import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Set base path for GitHub Pages deployment
  // Change this to '/' if deploying to Vercel/Netlify
  base: process.env.GITHUB_PAGES ? '/ariadne/' : '/',
  server: {
    port: 3000,
    host: true
  }
})
