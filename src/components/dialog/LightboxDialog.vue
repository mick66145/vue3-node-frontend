<template>
  <q-dialog v-model="isShowDialog" full-height full-width>
    <thumbnails-carousel :options="options" />
  </q-dialog>
</template>

<script>
import { defineComponent } from 'vue-demi'
import useDialog from '@/hooks/useDialog'

export default defineComponent({
  props: {
    options: { type: Array, default () { /* { img_src:"" } */ return [] } },
  },
  setup () {
    // methods
    const showDialog = async () => {
      isShowDialog.value = !isShowDialog.value
    }

    // use
    const { isShowDialog } = useDialog({})

    return {
      isShowDialog,
      showDialog,
    }
  },
})

</script>

<style lang="postcss" scoped>
</style>
