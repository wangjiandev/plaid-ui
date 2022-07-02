import { URL, fileURLToPath } from 'url'
import Unocss from 'unocss/vite'
import { presetAttributify, presetUno } from 'unocss'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const VITE_BASE_URL: string = loadEnv(mode, process.cwd()).VITE_BASE_URL

  return {
    plugins: [vue(), Unocss({
      theme: {
        colors: {
          panel: '#3a3a3a',
          lnav: '#212121',
          nav: '#eaedf1',
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
    server: {
      host: true,
      proxy: {
        '/api': {
          target: VITE_BASE_URL,
          changeOrigin: true,
          rewrite: path => path.replace(/^\/api/, ''),
        },
      },
    },
  }
})

