<template>
  <input-select
    v-model="observeValue"
    :options="cityList"
  />
</template>

<script>
import { baseApiModules } from '@/api'
import { useVModel } from '@vueuse/core'
import { defineComponent, ref, onMounted } from 'vue-demi'
import useCRUD from '@/hooks/useCRUD'

const cityResource = new baseApiModules.CityResource()

export default defineComponent({
  props: {
    modelValue: { type: [String, Object] },
  },
  emits: ['update:modelValue'],
  setup (props, { emit }) {
    // data
    const observeValue = useVModel(props, 'modelValue', emit)
    const cityList = ref([])

    // mounted
    onMounted(async () => {
      await callReadListFetch()
    })

    // methods
    const fetchData = async (payload) => {
      return await cityResource.list(payload).then((res) => {
        cityList.value = []
        cityList.value = res.list
      })
    }
    const clearData = async () => {
      cityList.value = []
    }

    // use
    const { callReadListFetch } = useCRUD({
      readListFetch: fetchData,
    })

    return {
      observeValue,
      cityList,
      fetchData,
      clearData,
    }
  },
})

</script>

<style lang="scss" scoped>
</style>
