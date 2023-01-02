import { reactive, ref } from 'vue-demi'
import useLocalStorage from './useLocalStorage'

export default function useDataTable ({ searchParames = {}, localStorageKey = 'clientFrontendDataTable', callback = () => {} }) {
  const { setLocalStorage, getLocalStorage } = useLocalStorage()
  let localStorage = getLocalStorage(localStorageKey)
  if (!localStorage) {
    const localStorageObj = {
      search: {
        page: 1,
        page_size: 10,
        keyword: null,
      },
    }
    setLocalStorage(localStorageKey, localStorageObj)
    localStorage = getLocalStorage(localStorageKey)
  }
  for (const [key, value] of Object.entries(searchParames)) {
    !localStorage.search[key] && (localStorage.search[key] = value)
  }
  const search = reactive(localStorage.search)
  const data = ref([])
  const total = ref(0)

  const onChangePage = (page) => {
    search.page = page
    setLocalStorage(localStorageKey, { search })
    if (callback && typeof (callback) === 'function') {
      callback()
    }
  }

  const onChangeFilter = () => {
    search.page = 1
    setLocalStorage(localStorageKey, { search })
    if (callback && typeof (callback) === 'function') {
      callback()
    }
  }

  const onReset = () => {
    search.page = 1
    setLocalStorage(localStorageKey, { search })
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
