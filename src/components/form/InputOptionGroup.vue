<template>
  <div class="rounded-borders py-10px">
    <label v-if="label">{{ label }}</label>
    <q-option-group
      v-model="observeValue"
      :options="options"
      :color="color"
      :inline="inline"
      :type="type"
    />
  </div>
</template>

<script>
import { useVModel } from '@vueuse/core'
import { defineComponent } from 'vue-demi'
export default defineComponent({
  props: {
    modelValue: { type: [String, Number, null, Object] },
    options: { type: Array, default () { return [] } },
    label: { type: String },
    inline: { type: Boolean, default: true },
    color: { type: String, default: 'primary' },
    type: { type: String },
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
