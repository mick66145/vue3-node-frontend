<template>
  <q-carousel
    v-model="slide"
    :animated="animated"
    :arrows="arrows"
    :navigation="navigation"
    :infinite="infinite"
    :autoplay="observeAutoplay"
    :swipeable="swipeable"
    @mouseenter="observeAutoplay = false"
    @mouseleave="observeAutoplay = true"
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
  </q-carousel>
</template>

<script>
import { useVModel } from '@vueuse/core'
import { defineComponent, ref } from 'vue-demi'

export default defineComponent({
  props: {
    animated: { type: Boolean, default: true },
    arrows: { type: Boolean, default: true },
    navigation: { type: Boolean, default: true },
    infinite: { type: Boolean, default: true },
    autoplay: { type: Boolean, default: true },
    swipeable: { type: Boolean, default: false },
    options: { type: Array, default () { /* { img_src:"" } */ return [] } },
  },
  setup (props, { emit }) {
    // data
    const slide = ref(0)
    const observeAutoplay = useVModel(props, 'autoplay', emit)

    return {
      slide,
      observeAutoplay,
    }
  },
})
</script>
