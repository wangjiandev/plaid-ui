import { URL, fileURLToPath } from 'url'
import Unocss from 'unocss/vite'
import { presetAttributify, presetUno } from 'unocss'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), Unocss({
    presets: [
      presetAttributify({}),
      presetUno(),
    ],
  })],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
