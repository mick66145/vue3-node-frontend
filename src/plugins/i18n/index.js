import { createI18n } from 'vue-i18n'
import Cookies from 'js-cookie'
import messages from '@intlify/unplugin-vue-i18n/messages'
import quasarEnLocale from 'quasar/lang/en-US'
import quasarZhTwLocale from 'quasar/lang/zh-TW'
import vxeTableEn from 'vxe-table/lib/locale/lang/en-US'
import vxeTableZhTw from 'vxe-table/lib/locale/lang/zh-TW'

// locale value 要 kebab case
export const locales = {
  en: 'en',
  tw: 'zh-hant-tw',
}

messages.en = { ...messages.en, ...vxeTableEn, ...quasarEnLocale }
messages['zh-hant-tw'] = { ...messages['zh-hant-tw'], ...vxeTableZhTw, ...quasarZhTwLocale }

export function getLanguage () {
  const chooseLanguage = Cookies.get('language')
  if (chooseLanguage) return chooseLanguage

  return 'zh-hant-tw'
}

export const i18n = createI18n({
  allowComposition: true,
  locale: getLanguage(),
  fallbackLocale: locales.tw,
  messages,
  silentTranslationWarn: true,
  silentFallbackWarn: true,
})

export default {
  install (app) {
    app.use(i18n)
    app.config.globalProperties.$isLocale = (locale) => locale === i18n.global.locale
  },
}
