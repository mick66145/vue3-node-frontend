
<template>
  <q-input
    ref="input"
    v-model="observeValue"
    :clearable="clearable"
    :outlined="outlined"
    :placeholder="placeholder"
  >
    <template v-if="$slots.default" #default>
      <slot name="default" />
    </template>

    <template v-if="$slots.prepend" #prepend>
      <slot name="prepend" />
    </template>

    <template v-if="$slots.append" #append>
      <slot name="append" />
    </template>

    <template v-if="$slots.before" #before>
      <slot name="before" />
    </template>
    <template v-if="$slots.after" #after>
      <slot name="after" />
    </template>
    <template v-if="$slots.label" #label>
      <slot name="label" />
    </template>
    <template v-if="$slots.error" #error>
      <slot name="error" />
    </template>
    <template v-if="$slots.hint" #hint>
      <slot name="hint" />
    </template>
    <template v-if="$slots.counter" #counter>
      <slot name="counter" />
    </template>
    <template v-if="$slots.loading" #loading>
      <slot name="loading" />
    </template>
  </q-input>
</template>

<script>
import { useVModel } from '@vueuse/core'
import { defineComponent, ref } from 'vue-demi'
export default defineComponent({
  props: {
    modelValue: { type: [String, Number, Object, null] },
    clearable: { type: Boolean, default: true },
    outlined: { type: Boolean, default: true },
    placeholder: { type: String, default: '請輸入' },

  },
  emits: ['update:modelValue'],
  setup (props, { emit }) {
    const input = ref()
    const observeValue = useVModel(props, 'modelValue', emit)
    const focus = () => {
      input.value.focus()
    }
    return {
      input,
      observeValue,
      focus,
    }
  },
})
</script>

<style lang="scss" scoped>
.q-input {
  @apply py-10px;
}
</style>
