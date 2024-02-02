import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // 開發中
  base: process.env.NODE_ENV === 'production' ? '/project-hotel/' : '/',
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
      '@components': '/src/components'
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/assets/style/_main.scss" as *;`,
      },
    },
  },
})
