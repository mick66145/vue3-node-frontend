<template>
  <div>
    <div v-show="!isReadingList">
      <vxe-table
        ref="dataTable"
        :key="refreshKey"
        class="q-mb-sm"
        auto-resize
        round
        stripe
        :row-config="observeRowConfig"
        :data="data"
        :max-height="maxHeight"
        :sort-config="{ trigger: 'cell', remote: true }"
        :show-footer="showFooter"
        :footer-span-method="footerSpanMethod"
        :footer-method="footerMethod"
        :checkbox-config="observeCheckboxConfig"
        @sort-change="onChangeSort"
        @checkbox-all="onCheckboxAll"
        @checkbox-change="onCheckboxChange"
      >
        <slot />
      </vxe-table>
      <pagination
        v-if="total > 0 && showPagination"
        :total="total"
        :current="current"
        :auto-scroll="false"
        @update:current="onUpdateCurrent"
      />
    </div>
    <skeleton-table v-if="isReadingList" />
  </div>
</template>

<script>
import { defineComponent, ref, computed } from 'vue-demi'
import { useApp } from '@/stores/app'
import mapKeys from 'lodash-es/mapKeys'
export default defineComponent({
  props: {
    data: {
      type: Array,
      default () {
        return []
      },
    },
    total: { type: Number, default: 0 },
    current: { type: Number, default: 1 },
    showPagination: { type: Boolean, default: true },
    showFooter: { type: Boolean, default: false },
    footerSpanMethod: { type: Function },
    footerMethod: { type: Function },
    checkboxConfig: { type: Object },
    rowConfig: { type: Object },
    maxHeight: { type: Number },
  },
  emits: ['sort-change', 'checkbox-all', 'checkbox-change', 'update:current'],
  setup (props, { emit }) {
    // data
    const storeApp = useApp()
    const dataTable = ref()
    const refreshKey = ref(0)

    // computed
    const isReadingList = computed(() => {
      return storeApp.isReadingList
    })
    const observeCheckboxConfig = computed(() => {
      const config = {
        reserve: true,
        trigger: 'row',
      }
      mapKeys(props.checkboxConfig, (_, key) => {
        config[key] = props.checkboxConfig[key]
      })
      return config
    })
    const observeRowConfig = computed(() => {
      const config = {
        keyField: 'id',
        isHover: true,
      }
      mapKeys(props.rowConfig, (_, key) => {
        config[key] = props.rowConfig[key]
      })
      return config
    })

    // methods
    const sort = (item) => {
      dataTable.value.sort(item)
    }
    const refresh = () => {
      refreshKey.value++
    }
    const updateFooter = () => {
      dataTable.value.updateFooter()
    }
    const getCheckboxRecords = () => {
      return dataTable.value.getCheckboxRecords()
    }
    const getCheckboxReserveRecords = () => {
      return dataTable.value.getCheckboxReserveRecords()
    }
    const getAllCheckboxRecords = () => {
      return dataTable.value
        .getCheckboxReserveRecords()
        .concat(dataTable.value.getCheckboxRecords())
    }
    const setCheckboxRow = (rows, checked) => {
      return dataTable.value.setCheckboxRow(rows, checked)
    }
    const toggleCheckboxRow = (row) => {
      return dataTable.value.toggleCheckboxRow(row)
    }
    const setAllCheckboxRow = (checked) => {
      return dataTable.value.setAllCheckboxRow(checked)
    }
    const clearCheckboxRow = () => {
      dataTable.value.clearCheckboxRow()
    }
    const clearCheckboxReserve = () => {
      dataTable.value.clearCheckboxReserve()
    }
    const clearAllCheckboxRow = () => {
      dataTable.value.clearCheckboxRow()
      dataTable.value.clearCheckboxReserve()
    }
    const onChangeSort = ({
      column,
      property,
      order,
      sortBy,
      sortList,
      $event,
    }) => {
      emit('sort-change', {
        column,
        property,
        order,
        sortBy,
        sortList,
        $event,
      })
    }
    const onCheckboxAll = ({ checked }) => {
      emit('checkbox-all', { checked })
    }
    const onCheckboxChange = ({ checked }) => {
      emit('checkbox-change', { checked })
    }
    const onUpdateCurrent = (current) => {
      emit('update:current', current)
    }

    return {
      dataTable,
      refreshKey,
      observeCheckboxConfig,
      observeRowConfig,
      isReadingList,
      sort,
      refresh,
      updateFooter,
      getCheckboxRecords,
      getCheckboxReserveRecords,
      getAllCheckboxRecords,
      setCheckboxRow,
      toggleCheckboxRow,
      setAllCheckboxRow,
      clearCheckboxRow,
      clearCheckboxReserve,
      clearAllCheckboxRow,
      onChangeSort,
      onCheckboxAll,
      onCheckboxChange,
      onUpdateCurrent,
    }
  },
})
</script>

<style lang="scss" scoped>
</style>
