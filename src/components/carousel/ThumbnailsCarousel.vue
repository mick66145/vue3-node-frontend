<template>
  <swipeable-carousel
    :transition-prev="transitionPrev"
    :transition-next="transitionNext"
    :autoplay="false"
    :navigation="false"
    thumbnails
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
  </swipeable-carousel>
</template>

<script>
import { defineComponent, computed } from 'vue-demi'
import useImgStorage from '@/hooks/useImgStorage'

export default defineComponent({
  props: {
    transitionPrev: { type: String, default: 'slide-right' },
    transitionNext: { type: String, default: 'slide-left' },
    options: { type: Array, default () { /* { img_src:"" } */ return [] } },
  },
  setup (props, { emit }) {
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
      preview,
    }
  },
})
</script>
