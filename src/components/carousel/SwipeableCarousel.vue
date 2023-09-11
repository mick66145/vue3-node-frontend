<template>
  <base-carousel
    :transition-prev="transitionPrev"
    :transition-next="transitionNext"
    swipeable
  >
    <slot name="default" />
    <template v-if="options.length>0">
      <q-carousel-slide
        v-for="(carouselItem,index) in options"
        :key="index"
        :name="index"
        :img-src="carouselItem.img_src"
      />
    </template>
  </base-carousel>
</template>

<script>
import { defineComponent } from 'vue-demi'

export default defineComponent({
  props: {
    transitionPrev: { type: String, default: 'slide-right' },
    transitionNext: { type: String, default: 'slide-left' },
    options: { type: Array, default () { /* { img_src:"" } */ return [] } },
  },
  setup (props, { emit }) {
    return {
    }
  },
})
</script>
