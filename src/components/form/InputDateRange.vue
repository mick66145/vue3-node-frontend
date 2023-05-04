<template>
  <input-text
    ref="inputDateRange"
    :label="label"
    :placeholder="placeholder"
    :modelValue="observeValue"
    @focus="focus()"
    @blur="blur"
    @clear="clearFn"
  >
    <template #append>
      <q-icon name="event" />
    </template>

    <template #default>
      <q-popup-proxy
        v-if="show"
        v-model="show"
        class="flex justify-center"
        transition-show="scale"
        transition-hide="scale"
        persistent
        no-parent-event
        no-refocus
        no-focus
      >
        <!-- <div style="width: 100px;">
        <div class="q-mt-md">
          <q-btn
            v-for="({ text,onClick }, index) in pickerOptions.shortcuts"
            :key="index"
            style="width: 100px;"
            flat
            :label="text"
            @click="onClick"
          />
        </div>
      </div> -->
        <q-date
          ref="datePicker"
          v-model="dateRangeValue"
          :title="dateTitle"
          :subtitle="dateSubtitle"
          :options="options"
          :locale="locale"
          range
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
import $dayjs from '@/plugins/dayjs'
import { defineComponent, ref, computed } from 'vue-demi'
import { useI18n } from 'vue-i18n'
import { useApp } from '@/stores/app'
export default defineComponent({
  props: {
    modelValue: { type: [String, Object] },
    label: { type: String },
    placeholder: { type: String, default: '請選擇開始日期至結束日期' },
    options: { type: Array },
  },
  emits: ['update:modelValue'],
  setup (props, { emit }) {
    // data
    const { messages } = useI18n()
    const store = useApp()
    const inputDateRange = ref()
    const datePicker = ref()
    const show = ref(false)
    const pickerOptions = {
      shortcuts: [
        {
          text: '今天',
          onClick () {
            const start = $dayjs().format('YYYY-MM-DD')
            const end = $dayjs().format('YYYY-MM-DD')
            datePicker.value.setEditingRange(start, end)
          },
        },
        {
          text: '前七天',
          onClick () {
            let start = new Date()
            const end = $dayjs()
            start.setTime(
              start.getTime() - 3600 * 1000 * 24 * 7,
            )
            start = $dayjs(start)
            const startObj = {
              year: start.year(),
              month: start.month() + 1,
              day: start.date(),
            }
            const endObj = {
              year: end.year(),
              month: end.month() + 1,
              day: end.date(),
            }
            datePicker.value.setEditingRange({ from: startObj, to: endObj })
          },
        },
        {
          text: '前三十天',
          onClick () {
            const start = new Date()
            const end = $dayjs().format('YYYY-MM-DD')
            start.setTime(
              start.getTime() - 3600 * 1000 * 24 * 30,
            )
            observeValue.value = { from: $dayjs(start).format('YYYY-MM-DD'), to: end }
          },
        },
        {
          text: '前一年',
          onClick () {
            const start = new Date()
            const end = $dayjs().format('YYYY-MM-DD')
            start.setTime(
              start.getTime() - 3600 * 1000 * 24 * 365,
            )
            observeValue.value = { from: $dayjs(start).format('YYYY-MM-DD'), to: end }
          },
        },
      ],
    }

    // computed
    const observeValue = computed(() => {
      return props.modelValue ? `${props.modelValue?.from} - ${props.modelValue?.to}` : ''
    })
    const dateRangeValue = computed({
      get () {
        return props.modelValue?.from === props.modelValue?.to ? props.modelValue?.from : props.modelValue
      },
      set (value) {
        const dateRangeValuePrototype = Object.prototype.toString.call(value)
        if (dateRangeValuePrototype === '[object String]') {
          emit('update:modelValue', { from: value, to: value })
        } else {
          emit('update:modelValue', value)
        }
      },
    })
    const locale = computed(() => {
      const message = messages.value[store.language]
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

    // methods
    const showPopup = (isShow) => {
      setTimeout(() => {
        show.value = isShow
      }, '200')
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
      evt?.relatedTarget.className.includes('q-btn--round') ||
      evt?.relatedTarget.className.includes('q-btn--dense')
      ) {
        inputDateRange.value.focus()
      } else {
        showPopup(false)
      }
    }
    const clearFn = (val) => {
      dateRangeValue.value = null
    }

    return {
      inputDateRange,
      datePicker,
      show,
      observeValue,
      dateRangeValue,
      pickerOptions,
      locale,
      dateTitle,
      dateSubtitle,
      focus,
      blur,
      clearFn,
      showPopup,
    }
  },
})
</script>

<style lang="scss" scoped>
</style>
