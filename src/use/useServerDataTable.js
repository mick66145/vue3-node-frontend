import { reactive, ref } from 'vue-demi'
import useSessionStorage from './useSessionStorage'

export default function useServerDataTable ({
  searchParames = {},
  sessionStorageKey = 'clientFrontendServerDataTable',
  callback = () => {},
}) {
  const { setSessionStorage, getSessionStorage } = useSessionStorage()
  let sessionStorage = getSessionStorage(sessionStorageKey)
  if (!sessionStorage) {
    const sessionStorageObj = {
      search: {
        page: 1,
        page_size: 10,
      },
    }
    setSessionStorage(sessionStorageKey, sessionStorageObj)
    sessionStorage = getSessionStorage(sessionStorageKey)
  }
  for (const [key, value] of Object.entries(searchParames)) {
    !sessionStorage.search[key] && (sessionStorage.search[key] = value)
    key === 'page_size' && (sessionStorage.search[key] = value)
  }
  setSessionStorage(sessionStorageKey, sessionStorage)
  const search = reactive(sessionStorage.search)
  const data = ref([])
  const total = ref(0)

  const onChangePage = (page) => {
    search.page = page
    setSessionStorage(sessionStorageKey, { search })
    if (callback && typeof (callback) === 'function') {
      callback()
    }
  }

  const onChangeFilter = () => {
    search.page = 1
    setSessionStorage(sessionStorageKey, { search })
    if (callback && typeof (callback) === 'function') {
      callback()
    }
  }

  const onReset = () => {
    search.page = 1
    setSessionStorage(sessionStorageKey, { search })
    if (callback && typeof (callback) === 'function') {
      callback()
    }
  }

  return {
    search,
    data,
    total,
    onChangePage,
    onChangeFilter,
    onReset,
  }
}
