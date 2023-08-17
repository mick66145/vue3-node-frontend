import { reactive, ref, onMounted } from 'vue-demi'
import useSessionStorage from './useSessionStorage'
import mapKeys from 'lodash-es/mapKeys'

export default function useVxeServerDataTable ({
  searchParames = {},
  sortParames = [], // [{field:string,order:true|false}]
  unSessionStorageParames = [], // [{field:string}]
  sessionStorageKey = 'dashboardVxeServerDataTable',
  callback = () => {},
}) {
  // use
  const { setSessionStorage, getSessionStorage } = useSessionStorage()

  // data
  let sessionStorage = getSessionStorage(sessionStorageKey)
  const dataTable = ref()
  const search = reactive({})
  const data = ref([])
  const total = ref(0)
  const sort = ref([])
  const unSessionStorageParamesField = unSessionStorageParames.map((item) => item.field)

  // methods

  const onChangePage = (page) => {
    search.page = page
    setSessionStorage(sessionStorageKey, { search, sort: sort.value })
    if (callback && typeof (callback) === 'function') {
      callback()
    }
  }
  const onChangePageSize = (pageSize) => {
    search.page_size = pageSize
    setSessionStorage(sessionStorageKey, { search, sort: sort.value })
    if (callback && typeof (callback) === 'function') {
      callback()
    }
  }
  const onChangeFilter = () => {
    search.page = 1
    setSessionStorage(sessionStorageKey, { search, sort: sort.value })
    if (callback && typeof (callback) === 'function') {
      callback()
    }
  }
  const OnChangeSort = async ({ sortList }) => {
    search.page = 1
    if (sortList.length > 0) {
      search.orderby = sortList.map((item) => `${item.field}:${item.order}`).join(',')
      sort.value = sortList
    } else {
      search.orderby = sortParames.map((item) => `${item.field}:${item.order}`).join(',')
      sort.value = sortParames
    }
    setSessionStorage(sessionStorageKey, { search, sort: sort.value })
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
    search.orderby = sortParames.map((item) => `${item.field}:${item.order}`).join(',')
    sort.value = sortParames
    setSessionStorage(sessionStorageKey, { search, sort: sort.value })
    if (callback && typeof (callback) === 'function') {
      await callback()
      dataTable.value && (sessionStorage.sort.forEach((item) => { dataTable.value.sort(item) }))
    }
  }

  // mounted
  onMounted(async () => {
    if (!sessionStorage) {
      const sessionStorageObj = {
        search: {
          page: 1,
          page_size: 10,
          orderby: sortParames.map((item) => `${item.field}:${item.order}`).join(','),
        },
        sort: sortParames,
      }
      setSessionStorage(sessionStorageKey, sessionStorageObj)
      sessionStorage = getSessionStorage(sessionStorageKey)
    }

    mapKeys(sessionStorage.search, (_, key) => {
      search[key] = sessionStorage.search[key]
    })

    sort.value = sessionStorage.sort

    for (const [key, value] of Object.entries(searchParames)) {
      (!sessionStorage.search[key] && !unSessionStorageParamesField.includes(key)) && (search[key] = value)
    }

    setSessionStorage(sessionStorageKey, { search, sort: sort.value })

    for (const [key, value] of Object.entries(searchParames)) {
      (unSessionStorageParamesField.includes(key)) && (search[key] = value)
    }

    if (callback && typeof (callback) === 'function') {
      await callback()
      dataTable.value && (sessionStorage.sort.forEach((item) => { dataTable.value.sort(item) }))
    }
  })

  return {
    dataTable,
    search,
    data,
    total,
    onChangePage,
    onChangePageSize,
    onChangeFilter,
    OnChangeSort,
    onReset,
  }
}
