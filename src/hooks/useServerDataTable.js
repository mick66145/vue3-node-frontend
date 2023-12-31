import { reactive, ref, onMounted } from 'vue-demi'
import useSessionStorage from './useSessionStorage'
import mapKeys from 'lodash-es/mapKeys'

export default function useServerDataTable ({
  searchParames = {},
  unSessionStorageParames = [], // [{field:string}]
  sessionStorageKey = 'clientFrontendServerDataTable',
  callback = () => {},
}) {
  // use
  const { setSessionStorage, getSessionStorage } = useSessionStorage()

  // data
  let sessionStorage = getSessionStorage(sessionStorageKey)
  const search = reactive({})
  const data = ref([])
  const total = ref(0)
  const unSessionStorageParamesField = unSessionStorageParames.map((item) => item.field)

  // methods

  const onChangePage = (page) => {
    search.page = page
    setSessionStorage(sessionStorageKey, { search })
    if (callback && typeof (callback) === 'function') {
      callback()
    }
  }
  const onChangePageSize = (pageSize) => {
    search.page_size = pageSize
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

  const onReset = async () => {
    for (const [key, value] of Object.entries(searchParames)) {
      search[key] = value
    }
    search.page = 1
    search.page_size = 10
    setSessionStorage(sessionStorageKey, { search })
    if (callback && typeof (callback) === 'function') {
      await callback()
    }
  }

  // mounted
  onMounted(async () => {
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

    mapKeys(sessionStorage.search, (_, key) => {
      search[key] = sessionStorage.search[key]
    })

    for (const [key, value] of Object.entries(searchParames)) {
      (!sessionStorage.search[key] && !unSessionStorageParamesField.includes(key)) && (search[key] = value)
    }

    setSessionStorage(sessionStorageKey, { search })

    for (const [key, value] of Object.entries(searchParames)) {
      (unSessionStorageParamesField.includes(key)) && (search[key] = value)
    }

    if (callback && typeof (callback) === 'function') {
      await callback()
    }
  })

  return {
    search,
    data,
    total,
    onChangePage,
    onChangePageSize,
    onChangeFilter,
    onReset,
  }
}
