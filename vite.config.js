/* eslint-disable node/no-path-concat */
import { fileURLToPath, URL } from 'url'

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { quasar, transformAssetUrls } from '@quasar/vite-plugin'
import vueJsx from '@vitejs/plugin-vue-jsx'
import WindiCSS from 'vite-plugin-windicss'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import path from 'path'
import stylelint from 'vite-plugin-stylelint'

import vueI18n from '@intlify/vite-plugin-vue-i18n'
import mkcert from 'vite-plugin-mkcert'
const fs = require('fs')

const https = () => {
  const useHttps = (process.env.npm_lifecycle_event || '').includes(':https')
  const keyPem = `${__dirname}/localhost-key.pem`
  const certPem = `${__dirname}/localhost.pem`
  if (!useHttps) return {}
  if (!fs.existsSync(keyPem) || !fs.existsSync(certPem)) return {}
  return {
    https: {
      key: fs.readFileSync(keyPem),
      cert: fs.readFileSync(certPem),
    },
  }
}

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
      vue({
        template: { transformAssetUrls },
      }),
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
      vueI18n({
        compositionOnly: false,
        include: path.resolve(__dirname, 'src/locales/**'),
      }),
      quasar({
        sassVariables: 'src/styles/abstracts/quasar-variables.scss',
      }),
    ],
    server: {
      https: false,
      cors: true,
      port: 3000,
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
  }
})
