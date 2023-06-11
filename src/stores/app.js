import Cookies from 'js-cookie'
import { getLanguage } from '@/plugins/i18n'
import { defineStore } from 'pinia'

export const useApp = defineStore({
  id: 'app',
  state: () => ({
    language: getLanguage(),
    isLoading: false,
    isReading: false,
    isReadingList: false,
    isCreate: false,
    isUpdate: false,
    isDelete: false,
  }),
  actions: {
    setLanguage (language) {
      this.language = language
      Cookies.set('language', language)
    },
  },

})
