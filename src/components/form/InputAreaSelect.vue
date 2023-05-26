<template>
  <input-select
    v-model="observeValue"
    :options="areaList"
  />
</template>

<script>
import { AreaResource } from '@/api'
import { useVModel } from '@vueuse/core'
import { defineComponent, ref, onMounted, toRefs } from 'vue-demi'
import useCRUD from '@/use/useCRUD'

const areaResource = new AreaResource()

export default defineComponent({
  props: {
    modelValue: { type: [String, Object] },
    cityId: { type: [String, Number] },
  },
  emits: ['update:modelValue'],
  setup (props, { emit }) {
    // data
    const { cityId } = toRefs(props)
    const observeValue = useVModel(props, 'modelValue', emit)
    const areaList = ref([])

    // mounted
    onMounted(async () => {
      await callReadListFetch()
    })

    // methods
    const fetchData = async () => {
      const payload = { city_id: cityId.value }
      return await areaResource.list(payload).then((res) => {
        areaList.value = []
        areaList.value = res.list
      })
    }

    // use
    const { callReadListFetch } = useCRUD({
      readListFetch: fetchData,
    })

    return {
      observeValue,
      areaList,
    }
  },
})

</script>

<style lang="scss" scoped>
</style>
