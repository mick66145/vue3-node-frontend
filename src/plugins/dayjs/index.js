import dayjs from 'dayjs'

import isToday from 'dayjs/plugin/isToday'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import localizedFormat from 'dayjs/plugin/localizedFormat'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'

import 'dayjs/locale/zh-tw'

dayjs.extend(isToday)
dayjs.extend(customParseFormat)
dayjs.extend(localizedFormat)
dayjs.extend(utc)
dayjs.extend(timezone)

const $dayjs = dayjs

export default $dayjs

export const formatDate = (value, format) => {
  if (!value) return ''
  return $dayjs(value).format(format || 'YYYY-MM-DD HH:mm:ss')
}

export const useDayjs = {
  install: (app, options) => {
    app.config.globalProperties.$filters = {
      formatDate,
    }
    app.provide('formatDate', formatDate)
    app.provide('$dayjs', $dayjs)
  },
}
