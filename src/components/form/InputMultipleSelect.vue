<template>
  <q-select
    v-model="observeValue"
    multiple
    :options="filterOptions"
    :clearable="clearable"
    :outlined="outlined"
    :use-input="useInput"
    :use-chips="useChips"
    :map-options="mapOptions"
    :input-debounce="inputDebounce"
    :transition-show="transitionShow"
    :transition-hide="transitionHide"
    :option-label="optionLabelFn"
    :option-value="optionValueFn"
    @filter="filterFn"
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

    <template v-if="$slots.selected" #selected>
      <slot name="selected" />
    </template>

    <template v-if="$slots.beforeOptions" #before-options>
      <slot name="before-options" />
    </template>

    <template v-if="$slots.afterOptions" #after-options>
      <slot name="after-options" />
    </template>

    <template #no-option>
      <q-item>
        <q-item-section class="text-grey">
          無此結果
        </q-item-section>
      </q-item>
    </template>

    <template v-if="$slots.selectedItem" #selected-item>
      <slot name="selected-item" />
    </template>

    <template v-if="$slots.option" #option>
      <slot name="option" />
    </template>
  </q-select>
</template>

<script>
import { useVModel } from '@vueuse/core'
import { defineComponent, ref } from 'vue-demi'
import { selectMatchItem } from '@/utils/filter'
export default defineComponent({
  props: {
    modelValue: { type: Array, default () { return [] } },
    options: { type: Array, default () { return [] } },
    clearable: { type: Boolean, default: true },
    outlined: { type: Boolean, default: true },
    useInput: { type: Boolean, default: true },
    useChips: { type: Boolean, default: true },
    mapOptions: { type: Boolean, default: true },
    inputDebounce: { type: Number, default: 0 },
    transitionShow: { type: String, default: 'scale' },
    transitionHide: { type: String, default: 'scale' },
    optionLabel: { type: String, default: 'name' },
    optionValue: { type: String, default: 'id' },
  },
  emits: [
    'update:modelValue',
  ],
  setup (props, { emit }) {
    const filterOptions = ref(props.options)
    const observeValue = useVModel(props, 'modelValue', emit)
    const filterFn = (val, update, abort) => {
      update(() => {
        const needle = val.toLowerCase()
        const needleOptions = selectMatchItem(props.options.map(item => item[props.optionLabel]), needle)
        filterOptions.value = props.options.filter(item => needleOptions.includes(item[props.optionLabel]))
      })
    }
    const clearFn = (val) => {
      observeValue.value = []
    }
    const optionValueFn = (item) => {
      return item[props.optionValue] ? item[props.optionValue] : item
    }
    const optionLabelFn = (item) => {
      return item[props.optionLabel] ? item[props.optionLabel] : item
    }
    return {
      observeValue,
      filterOptions,
      emit,
      filterFn,
      clearFn,
      optionValueFn,
      optionLabelFn,
    }
  },
})
</script>

<style lang="scss" scoped>
.q-select {
  @apply py-10px;
}
</style>
