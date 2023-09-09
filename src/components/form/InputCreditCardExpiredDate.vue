<template>
  <input-text
    v-model="observeValue"
    mask="##/##"
    type="tel"
    :unmasked-value="unmaskedValue"
    :label="label"
    :rules="ruleList"
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
  </input-text>
</template>

<script>

import { defineComponent, computed, toRefs } from 'vue-demi'
import { useVModel } from '@vueuse/core'
import { vuelidate } from '@/plugins/vuelidate'

export default defineComponent({
  props: {
    label: { type: String, default: '到期日' },
    modelValue: { type: String },
    rules: { type: Array, default () { return [] } },
    placeholder: { type: String, default: '請輸入到期日' },
    unmaskedValue: { type: Boolean, default: false },
  },
  emits: [
    'update:modelValue',
  ],
  setup (props, { emit }) {
    // data
    const { rules } = toRefs(props)
    const observeValue = useVModel(props, 'modelValue', emit)

    // computed
    const ruleList = computed(() => {
      const rule = [
        vuelidate.regex(/^(0[1-9]|1[0-2])\/\d{2}$/, '格式錯誤，請輸入正確的信用卡到期日'),
      ]
      return rule.concat(rules.value)
    })

    return {
      observeValue,
      ruleList,
    }
  },
})
</script>

<style lang="scss" scoped>
</style>
