<template>
  <input-text
    v-model="observeValue"
    :label="label"
    :placeholder="placeholder"
  >
    <template v-slot:append>
      <q-icon name="search" />
    </template>
  </input-text>
</template>

<script>
import { useVModel } from '@vueuse/core'
import { defineComponent } from 'vue-demi'
export default defineComponent({
  props: {
    modelValue: { type: [String, Number, null] },
    label: { type: String, default: '關鍵字' },
    placeholder: { type: String, default: '請輸入關鍵字' },
  },
  emits: [
    'update:modelValue',
  ],
  setup (props, { emit }) {
    const observeValue = useVModel(props, 'modelValue', emit)
    return {
      observeValue,
      emit,
    }
  },
})
</script>

<style lang="scss" scoped>
</style>
