import { inject } from 'vue-demi'

export default function useImgStorage () {
  const imgServerHost = inject('imgServerHost')
  const getImageSrc = ({ filename, size = '100x' }) => {
    if (!filename) return ''
    const url = `${imgServerHost}/display/resize/${size}/${filename}`
    return url
  }

  return {
    getImageSrc,
  }
}
