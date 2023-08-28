import downloadUrl from './download-url'

export default {
  install (app) {
    app.directive('downloadUrl', downloadUrl)
  },
}
