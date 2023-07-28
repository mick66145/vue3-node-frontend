import 'xe-utils'
import VXETable from 'vxe-table'
import '@/styles/vender/vxe-table.scss'
import { i18n } from '@/plugins/i18n'

export default {
  install (app) {
    app.use(VXETable, {
      i18n: (key, args) => {
        return i18n.global.t(key, args)
      },
    })
  },
}
