import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // IMPORTANT: must match your GitHub repo name (with leading/trailing slash).
  // For https://<user>.github.io/MyPortfolio/ this must be '/MyPortfolio/'.
  // If you later rename the repo, update this value too.
  base: '/MyPortfolio/',
  plugins: [react(), tailwindcss()],
})
