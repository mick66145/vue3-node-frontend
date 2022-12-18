<template>
  <input-text
    ref="inputData"
    v-model="observeValue"
    :label="label"
    :placeholder="placeholder"
    @focus="focus()"
    @blur="blur"
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
        <q-date v-model="observeValue" @update:modelValue="show = false">
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
import { defineComponent, ref } from 'vue-demi'
export default defineComponent({
  props: {
    modelValue: { type: String },
    label: { type: String },
    placeholder: { type: String, default: '年/月/日' },
  },
  emits: ['update:modelValue'],
  setup (props, { emit }) {
    // data
    const inputData = ref()
    const show = ref(false)
    const observeValue = useVModel(props, 'modelValue', emit)

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
      evt?.relatedTarget.className.includes('q-btn--round')) {
        inputData.value.focus()
      } else {
        showPopup(false)
      }
    }

    return {
      inputData,
      show,
      observeValue,
      showPopup,
      focus,
      blur,
    }
  },
})
</script>

<style lang="scss" scoped>
</style>
