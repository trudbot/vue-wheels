import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
// test
export default defineConfig({
  base: '/vue-wheels/',
  plugins: [vue()],
})
