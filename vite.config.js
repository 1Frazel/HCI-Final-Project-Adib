import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? '/Web-Portfolio-Adib-Aulia/' : '/',
  plugins: [react()],
}))
