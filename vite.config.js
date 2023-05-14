/* eslint-disable node/no-path-concat */
import { fileURLToPath, URL } from 'url'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import WindiCSS from 'vite-plugin-windicss'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import path from 'path'
import stylelint from 'vite-plugin-stylelint'
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite'
import mkcert from 'vite-plugin-mkcert'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
const root = process.cwd()
export default defineConfig(({ command, mode }) => {
  let env = {}
  const isBuild = command === 'build'
  if (!isBuild) {
    env = loadEnv((process.argv[3] === '--mode' ? process.argv[4] : process.argv[3]), root)
  } else {
    env = loadEnv(mode, root)
  }
  return {
    plugins: [
      vue(),
      vueJsx(),
      WindiCSS(),
      stylelint(),
      mkcert(),
      createSvgIconsPlugin({
      // Specify the icon folder to be cached
        iconDirs: [path.resolve(process.cwd(), 'src/icons')],
        // Specify symbolId format
        symbolId: 'icon-[name]',
      }),
      VueI18nPlugin({
        compositionOnly: false,
        include: path.resolve(__dirname, 'src/locales/**'),
      }),
      VitePWA({
        includeAssets: ['favicon.svg'],
        manifest: false,
        registerType: 'autoUpdate',
        workbox: {
          runtimeCaching: [
            {
              urlPattern: /someInterface/i, // 接口存儲此處填寫你想存儲的接口正則匹配
              handler: 'CacheFirst',
              options: {
                cacheName: 'interface-cache',
              },
            },
            {
              urlPattern: /(.*?)\.(js|css|ts)/, // js /css /ts靜態資源保存
              handler: 'CacheFirst',
              options: {
                cacheName: 'js-css-cache',
              },
            },
            {
              urlPattern: /(.*?)\.(png|jpe?g|svg|gif|bmp|psd|tiff|tga|eps)/, // 圖片存檔
              handler: 'CacheFirst',
              options: {
                cacheName: 'image-cache',
              },
            },
          ],
        },
      }),
    ],
    server: {
      https: false,
      cors: true,
      port: 3000,
      host: true,
      hmr: {
        port: 3000,
      },
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
  }
})
