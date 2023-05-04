import { useQuasar } from 'quasar'

export default function useNotify () {
  const $q = useQuasar()

  const notify = ({ message, type = 'info', timeout = 3000, position = 'top' }) => $q.notify({
    message,
    type,
    timeout,
    position,
  })

  const notifyAPIError = ({ message }) => $q.notify({
    message,
    type: 'negative',
    position: 'top',
  })

  const notifyError = ({ message }) => $q.notify({
    message,
    type: 'negative',
    position: 'top',
  })

  const customNotify = ({ message, timeout = 3000, position = 'top', color = 'brown', textColor = 'white', icon = 'announcement' }) => $q.notify({
    message,
    timeout,
    position,
    color,
    textColor,
    icon,
  })

  return {
    notify,
    notifyAPIError,
    notifyError,
    customNotify,
  }
}
