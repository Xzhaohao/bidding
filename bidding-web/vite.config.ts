import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import DefineOptions from 'unplugin-vue-define-options/vite'
const path = require('path')

export default ({ mode }) => {
  return defineConfig({
    plugins: [
      vue(),
      vueJsx(),
      DefineOptions(),
      AutoImport({
        resolvers: [ElementPlusResolver()]
      }),
      Components({
        resolvers: [ElementPlusResolver()]
      })
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src')
      }
    },
    css: {
      // @ts-ignore
      requireModuleExtension: true,
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/styles/variables.scss";'
        }
      }
    },
    define: {
      'process.env': {
        env: mode,
        baseURL: loadEnv(mode, process.cwd()).VITE_APP_SERVER
      }
    }
  })
}
