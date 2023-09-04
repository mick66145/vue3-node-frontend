import FileSaver from 'file-saver'
import useCRUD from '@/hooks/useCRUD'

export default function useDownload ({
  id = null,
  readFetch,
}) {
  const download = async () => {
    const [res, error] = id ? await callReadFetch(id) : await callReadFetch()
    if (res) {
      const { headers, data } = res
      const contentDisposition = headers['content-disposition']
      const fileName = getFileName(contentDisposition)
      FileSaver.saveAs(data, fileName)
    }
    return [res, error]
  }

  const getFileName = (disposition) => {
    const utf8FilenameRegex = /filename\*=UTF-8''([\w%\-\.]+)(?:; ?|$)/i
    const asciiFilenameRegex = /^filename=(["']?)(.*?[^\\])\1(?:; ?|$)/i
    let fileName = null
    if (utf8FilenameRegex.test(disposition)) {
      fileName = decodeURIComponent(utf8FilenameRegex.exec(disposition)[1])
    } else {
      const filenameStart = disposition.toLowerCase().indexOf('filename=')
      if (filenameStart >= 0) {
        const partialDisposition = disposition.slice(filenameStart)
        const matches = asciiFilenameRegex.exec(partialDisposition)
        if (matches != null && matches[2]) {
          fileName = matches[2]
        }
      }
    }
    return fileName
  }

  // use
  const { callReadFetch } = useCRUD({
    readFetch: readFetch,
    isShowReadFail: false,
  })

  return {
    download,
  }
}
