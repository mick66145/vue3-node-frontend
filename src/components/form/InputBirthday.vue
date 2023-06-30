<template>
  <input-date
    v-model="observeValue"
    :placeholder="placeholder"
    :max="max"
  />
</template>

<script>
import { useVModel } from '@vueuse/core'
import { defineComponent } from 'vue-demi'
import { convertDateTime } from '@/utils/data-convert'

export default defineComponent({
  props: {
    modelValue: { type: [String, Number] },
    placeholder: { type: String, default: '請選擇生日' },
    max: { type: [String], default: convertDateTime() },
  },
  emits: ['update:modelValue'],
  setup (props, { emit }) {
    const observeValue = useVModel(props, 'modelValue', emit)
    return {
      observeValue,
    }
  },
})

</script>

<style lang="scss" scoped>
</style>
