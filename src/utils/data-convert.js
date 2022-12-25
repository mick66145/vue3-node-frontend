import $dayjs from '@/plugins/dayjs'

export const convertDateTime = (v, format = 'YYYY-MM-DD') => {
  return $dayjs(v).format(format)
}
