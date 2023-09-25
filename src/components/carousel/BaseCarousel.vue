<template>
  <q-carousel
    v-model="observeSlide"
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
        :img-src="preview(carouselItem)"
      />
    </template>
  </q-carousel>
</template>

<script>
import { useVModel } from '@vueuse/core'
import { defineComponent, ref, computed } from 'vue-demi'
import useImgStorage from '@/hooks/useImgStorage'

export default defineComponent({
  props: {
    slide: { type: Number, default: 0 },
    animated: { type: Boolean, default: true },
    arrows: { type: Boolean, default: true },
    navigation: { type: Boolean, default: true },
    infinite: { type: Boolean, default: true },
    autoplay: { type: Boolean, default: true },
    swipeable: { type: Boolean, default: false },
    options: { type: Array, default () { return [] } },
  },
  setup (props, { emit }) {
    // data
    const observeSlide = ref(props.slide)
    const observeAutoplay = useVModel(props, 'autoplay', emit)

    // computed
    const preview = computed(() => (data) => {
      const { blobURL, url, base64, filename } = data.image || {}
      if (blobURL) return blobURL
      if (url) return url
      if (base64) return base64
      return getImageSrc({ filename, size: '200x' })
    })

    // use
    const { getImageSrc } = useImgStorage()

    return {
      observeSlide,
      observeAutoplay,
      preview,
    }
  },
})
</script>
