import { useAsyncState } from '@vueuse/core'
import { ref } from 'vue-demi'
import useNotify from './useNotify'

export default function useCRUD ({
  createFetch,
  createSuccess = '新增成功',
  createFail = '新增失敗',

  readFetch,
  readSuccess = '讀取成功',
  readFail = '讀取失敗',

  updateFetch,
  updateSuccess = '編輯成功',
  updateFail = '編輯失敗',

  deleteFetch,
  deleteSuccess = '刪除成功',
  deleteFail = '刪除失敗',

  readListFetch,
  readListSuccess = '讀取列表成功',
  readListFail = '讀取列表失敗',

}) {
  const { notify, notifyAPIError } = useNotify()

  const reqCreate = useAsyncState(createFetch, {}, { immediate: false })
  const reqRead = useAsyncState(readFetch, {}, { immediate: false })
  const reqUpdate = useAsyncState(updateFetch, {}, { immediate: false })
  const reqDelete = useAsyncState(deleteFetch, {}, { immediate: false })
  const reqReadList = useAsyncState(readListFetch, {}, { immediate: false })

  const form = ref()

  const callCreateFetch = async (payload) => {
    const res = await reqCreate.execute(0, payload)
    if (reqCreate.error.value) {
      const message = reqCreate.error.value.response.data.message
      notifyAPIError({ message })
      return [null, reqCreate.error.value]
    } else {
      notify({ message: createSuccess, type: 'positive' })
      return [res, null]
    }
  }

  const callReadFetch = async (id, payload = null) => {
    console.log('🚀 ~ callReadFetch ~ payload', id, payload)
    const res = await reqRead.execute(0, id, payload)
    if (reqRead.error.value) {
      const message = reqRead.error.value.response.data.message
      notifyAPIError({ message })
      return [null, reqRead.error.value]
    } else {
      return [res, null]
    }
  }

  const callUpdateFetch = async (id, payload = null) => {
    const res = await reqUpdate.execute(0, id, payload)
    console.log('🚀 ~ callUpdateFetch ~ res', res)
    if (reqUpdate.error.value) {
      const message = reqUpdate.error.value.response.data.message
      notifyAPIError({ message })
      return [null, reqUpdate.error.value]
    } else {
      notify({ message: updateSuccess, type: 'positive' })
      return [res || true, null]
    }
  }

  const callDeleteFetch = async (id) => {
    const res = await reqDelete.execute(0, id)
    console.log('🚀 ~ callDeleteFetch ~ res', res)
    if (reqDelete.error.value) {
      const message = reqDelete.error.value.response.data.message
      notifyAPIError({ message })
      return [null, reqDelete.error.value]
    } else {
      notify({ message: deleteSuccess, type: 'positive' })
      return [res || true, null]
    }
  }

  const callReadListFetch = async (payload = null) => {
    console.log('🚀 ~ callReadListFetch ~ payload', payload)
    const res = await reqReadList.execute(0, payload)
    if (reqReadList.error.value) {
      const message = reqReadList.error.value.response.data.message
      notifyAPIError({ message })
      return [null, reqReadList.error.value]
    } else {
      return [res, null]
    }
  }

  return {
    form,
    callCreateFetch,
    callReadFetch,
    callUpdateFetch,
    callDeleteFetch,
    callReadListFetch,
  }
}
