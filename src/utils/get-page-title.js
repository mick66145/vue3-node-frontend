import configuration from '@/configuration'

const title = configuration('title') || 'ClientFrontend Base'

const prefix =
  import.meta.env.MODE !== 'development'
    ? ''
    : import.meta.env.VITE_IS_LOCAL === 'true'
      ? '[開發] '
      : '[測試] '

export default function getPageTitle (pageTitle) {
  if (pageTitle) {
    return `${prefix}${pageTitle} - ${title}`
  }
  return `${prefix}${title}`
}
