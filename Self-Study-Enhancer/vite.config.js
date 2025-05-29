import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/my-pwa-app1/',  // <-- your repo name with trailing slash
  plugins: [react()],
})
