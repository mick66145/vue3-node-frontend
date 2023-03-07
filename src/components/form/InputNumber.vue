<template>
  <input-text
    v-model="observeValue"
    :label="label"
    type="number"
    :rules="ruleList"
    @clear="clearFn"
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
  </input-text>
</template>

<script>
import { defineComponent, computed, toRefs } from 'vue-demi'
import { vuelidate } from '@/plugins/vuelidate'

export default defineComponent({
  props: {
    label: { type: String },
    modelValue: { type: [String, Number], default: 0 },
    rules: { type: Array, default () { return [] } },
  },
  emits: [
    'update:modelValue',
  ],
  setup (props, { emit }) {
    // data
    const { label, rules } = toRefs(props)

    // computed
    const ruleList = computed(() => {
      const rule = [
        vuelidate.required(`${label.value}必填`),
      ]
      return rule.concat(rules.value)
    })

    const observeValue = computed({
      get () {
        return props.modelValue
      },
      set (value) {
        if (value === '' || value === null) {
          emit('update:modelValue', 0)
          return
        }
        emit('update:modelValue', +value)
      },
    })

    const clearFn = (val) => {
      emit('update:modelValue', 0)
    }

    return {
      observeValue,
      ruleList,
      clearFn,
    }
  },
})
</script>

<style lang="scss" scoped>
.q-input {
  @apply py-10px;
}
</style>
