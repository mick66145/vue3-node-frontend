<template>
  <base-carousel
    :transition-prev="transitionPrev"
    :transition-next="transitionNext"
    :options="options"
    swipeable
  >
    <slot name="default" />
  </base-carousel>
</template>

<script>
import { defineComponent } from 'vue-demi'

export default defineComponent({
  props: {
    transitionPrev: { type: String, default: 'slide-right' },
    transitionNext: { type: String, default: 'slide-left' },
    options: { type: Array, default () { return [] } },
  },
  setup (props, { emit }) {
    return {
    }
  },
})
</script>
