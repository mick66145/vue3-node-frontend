import Cookies from 'js-cookie'
import { getLanguage } from '@/plugins/i18n'
import { defineStore } from 'pinia'

export const useApp = defineStore({
  id: 'app',
  state: () => ({
    language: getLanguage(),
  }),
  actions: {
    setLanguage (language) {
      this.language = language
      Cookies.set('language', language)
    },
  },

})
