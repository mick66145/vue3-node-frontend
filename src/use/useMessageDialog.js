import { useMessageDialogStore } from '@/stores/messageDialog'
import { useI18n } from 'vue-i18n'

export default function useMessageDialog () {
  const store = useMessageDialogStore()

  const { t } = useI18n()

  const messageAlert = ({ title, message, confirmButtonText, confirmButtonColor }) => store.alert({
    title: title || t('g.dialog.default-title'),
    message,
    persistent: false,
    showCancel: false,
    confirmButtonText: confirmButtonText || t('g.btn.confirm'),
    confirmButtonColor: confirmButtonColor || 'primary',
  })

  const messageConfirm = ({ title, message, confirmButtonText, confirmButtonColor, cancelButtonText, cancelButtonColor }) => store.alert({
    title: title || t('g.dialog.default-title'),
    message,
    persistent: true,
    confirmButtonText: confirmButtonText || t('g.btn.confirm'),
    confirmButtonColor: confirmButtonColor || 'primary',
    showCancel: true,
    cancelButtonText: cancelButtonText || t('g.btn.cancel'),
    cancelButtonColor: cancelButtonColor || 'primary',
  })

  const messageDelete = ({ title, message, confirmButtonText, cancelButtonText, cancelButtonColor }) => store.alert({
    title: title || t('g.dialog.default-title'),
    status: 'error',
    message,
    persistent: true,
    confirmButtonText: confirmButtonText || t('g.btn.delete'),
    confirmButtonColor: 'negative',
    showCancel: true,
    cancelButtonText: cancelButtonText || t('g.btn.cancel'),
    cancelButtonColor: cancelButtonColor || 'primary',
  })

  return {
    messageAlert,
    messageConfirm,
    messageDelete,
  }
}
