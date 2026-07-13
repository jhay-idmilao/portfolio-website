import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base: './' keeps asset paths relative, so this works whether the site is served
// from https://<user>.github.io/ or https://<user>.github.io/<repo>/ without edits.
export default defineConfig({
  base: './',
  plugins: [react()],
})
