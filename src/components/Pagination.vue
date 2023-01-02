<template>
  <div class="flex items-center justify-left">
    <span>
      共 {{ total }} 項
    </span>
    <q-pagination
      v-model="observeCurrent"
      boundary-links
      :max="maxSize"
      :max-pages="6"
      :boundary-numbers="false"
      icon-first="keyboard_double_arrow_left"
      icon-last="keyboard_double_arrow_right"
      @update:modelValue="handleCurrentChange"
    />
    <div>
      <span>前往</span>
      <q-input
        v-model.lazy="toPage"
        outlined
        class="pagination-input"
        @change="changeToPage"
        @keyup.enter="changeToPage"
      />
      <span>頁</span>
    </div>
  </div>
</template>

<script>
import { scrollTo } from '@/utils/scroll-to'
import { useVModel } from '@vueuse/core'
import { defineComponent, ref, computed, watch } from 'vue-demi'

export default defineComponent({
  props: {
    current: { type: Number, default: 1 },
    limit: { type: Number, default: 10 },
    total: { type: Number, default: 0 },
    autoScroll: {
      type: Boolean,
      default: true,
    },
  },
  emits: ['update:current'],
  setup (props, { emit }) {
    // data
    const toPage = ref(props.current)
    const observeCurrent = useVModel(props, 'current', emit)

    // computed
    const maxSize = computed(() => {
      const total = +props.total
      const limit = +props.limit
      return Math.ceil(+(total / limit))
    })

    // methods
    const changeToPage = () => {
      toPage.value = +toPage.value
      const val = toPage.value
      const maxSizeVal = maxSize.value
      const r = /^\+?[1-9][0-9]*$/
      if (!r.test(val)) {
        toPage.value = 1
      } else if (r.test(val) && val >= maxSizeVal) {
        toPage.value = maxSizeVal
      }
      emit('update:current', toPage.value)
      if (props.autoScroll) {
        scrollTo(0, 800)
      }
    }
    const handleCurrentChange = (val) => {
      toPage.value = val
      if (props.autoScroll) {
        scrollTo(0, 800)
      }
    }

    // watch
    watch(() => props.current, (newValue) => {
      toPage.value = newValue
    })

    return {
      toPage,
      observeCurrent,
      maxSize,
      changeToPage,
      handleCurrentChange,
    }
  },
})

</script>

<style lang="scss" scoped>
.pagination-input {
  @apply w-55px;
  @apply my-0 mx-3px;
  @apply inline-block;

  :deep(.q-field__inner) {
    @apply h-32px;

    .q-field__control {
      @apply h-32px;
    }
  }
}
</style>
