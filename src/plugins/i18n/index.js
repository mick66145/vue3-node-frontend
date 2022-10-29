import { createI18n } from 'vue-i18n'

import messages from '@intlify/vite-plugin-vue-i18n/messages'

// locale value 要 kebab case
export const locales = {
  en: 'en',
  tw: 'zh-hant-tw',
}

export const i18n = createI18n({
  locale: locales.tw,
  fallbackLocale: locales.tw,
  messages,
  silentTranslationWarn: true,
  silentFallbackWarn: true,
})

export default {
  install (app) {
    app.use(i18n)
  },
}
