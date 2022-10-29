import { inject } from 'vue-demi'

export default function useFormatDate (customFormat) {
  const formatDate = inject('formatDate')
  return {
    formatDate: (value, format) => formatDate(value, format || customFormat),
  }
}
