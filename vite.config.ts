import { URL, fileURLToPath } from 'url'
import Unocss from 'unocss/vite'
import { presetAttributify, presetUno } from 'unocss'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), Unocss({
    theme: {
      colors: {
        panel: '#3a3a3a',
        nav: '#212121',
        cool: '#353535',
        select: '#494949',
      },
    },
    presets: [
      presetAttributify({}),
      presetUno(),
    ],
  }), Components({
    resolvers: [NaiveUiResolver()],
  })],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
