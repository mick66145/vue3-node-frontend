<template>
  <swipeable-carousel
    :transition-prev="transitionPrev"
    :transition-next="transitionNext"
    :autoplay="false"
    :navigation="false"
    :options="options"
    thumbnails
  >
    <slot name="default" />
  </swipeable-carousel>
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
