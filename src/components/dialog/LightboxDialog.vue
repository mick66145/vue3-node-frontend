<template>
  <q-dialog v-model="isShowDialog" full-height full-width>
    <thumbnails-carousel :options="options" :slide="slide" />
  </q-dialog>
</template>

<script>
import { defineComponent, ref } from 'vue-demi'
import useDialog from '@/hooks/useDialog'

export default defineComponent({
  props: {
    options: { type: Array, default () { /* { img_src:"" } */ return [] } },
  },
  setup () {
    // data
    const slide = ref(0)

    // methods
    const showDialog = async ({ slide: slideData = 0 }) => {
      slide.value = slideData
      isShowDialog.value = !isShowDialog.value
    }

    // use
    const { isShowDialog } = useDialog({})

    return {
      slide,
      isShowDialog,
      showDialog,
    }
  },
})

</script>

<style lang="postcss" scoped>
</style>
