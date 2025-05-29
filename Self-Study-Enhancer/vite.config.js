import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  base: '/my-pwa-app1/', // <--- This MUST match your GitHub repo name exactly
  plugins: [react(), VitePWA()]
})
