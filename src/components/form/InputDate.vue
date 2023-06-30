<template>
  <input-text
    ref="inputData"
    v-model="observeValue"
    :label="label"
    :placeholder="placeholder"
    inputmode="none"
    @focus="focus()"
    @blur="blur"
  >
    <template #append>
      <q-icon name="event" />
    </template>
    <template v-if="$slots.hint" #hint>
      <slot name="hint" />
    </template>

    <template #default>
      <q-popup-proxy
        v-model="show"
        class="flex justify-center"
        transition-show="scale"
        transition-hide="scale"
        persistent
        no-parent-event
        no-refocus
        no-focus
      >
        <q-date
          v-model="observeValue"
          :title="dateTitle"
          :subtitle="dateSubtitle"
          :options="observeOptions"
          :locale="locale"
          @update:modelValue="updateModelValue"
        >
          <div class="row items-center justify-end">
            <q-btn v-close-popup label="Close" color="primary" flat />
          </div>
        </q-date>
      </q-popup-proxy>
    </template>
  </input-text>
</template>

<script>
import { useVModel } from '@vueuse/core'
import { defineComponent, ref, computed, toRefs } from 'vue-demi'
import { i18n } from '@/plugins/i18n'
import { useApp } from '@/stores/app'
export default defineComponent({
  props: {
    modelValue: { type: String },
    label: { type: String },
    placeholder: { type: String, default: '年/月/日' },
    options: { type: Array },
    min: { type: String },
    max: { type: String },
  },
  emits: ['update:modelValue'],
  setup (props, { emit }) {
    // data
    const store = useApp()
    const inputData = ref()
    const show = ref(false)
    const { min, max, options } = toRefs(props)
    const observeValue = useVModel(props, 'modelValue', emit)

    // computed
    const locale = computed(() => {
      const message = i18n.global.messages[store.language]
      return {
        days: message.date.days,
        daysShort: message.date.daysShort,
        months: message.date.months,
        monthsShort: message.date.monthsShort,
        firstDayOfWeek: message.date.firstDayOfWeek,
      }
    })
    const dateTitle = computed(() => {
      return !observeValue.value ? ' ' : ''
    })
    const dateSubtitle = computed(() => {
      return !observeValue.value ? ' ' : ''
    })
    const observeOptions = computed(() => {
      const _options = options.value
      const dateFn = (date) => {
        const _min = min.value
        const _max = max.value
        if (!_min && !_max) return true
        if (_min && _max) return date >= _min && date <= _max
        if (_min) return date >= _min
        if (_max) return date <= _max
      }
      if (_options && _options.length > 0) return _options
      return dateFn
    })

    // methods
    const showPopup = (isShow) => {
      setTimeout(() => {
        show.value = isShow
      }, '200')
    }
    const updateModelValue = (value, reason, details) => {
      if (value) showPopup(false)
    }
    const focus = () => {
      showPopup(true)
    }

    const blur = (evt) => {
      // 判斷除了close按鈕和日期按鈕以外的按鈕繼續focus
      if (evt?.relatedTarget.className.includes('q-date') ||
      evt?.relatedTarget.className.includes('text-null') ||
      evt?.relatedTarget.className.includes('q-focus-helper') ||
      evt?.relatedTarget.parentElement.className.includes('q-date__arrow') ||
      evt?.relatedTarget.className.includes('q-btn--no-uppercase') ||
      evt?.relatedTarget.className.includes('q-btn--round')) {
        if (!observeValue.value) inputData.value.focus()
      } else {
        showPopup(false)
      }
    }

    return {
      inputData,
      show,
      observeValue,
      locale,
      dateTitle,
      dateSubtitle,
      observeOptions,
      showPopup,
      focus,
      blur,
      updateModelValue,
    }
  },
})
</script>

<style lang="scss" scoped>
</style>
