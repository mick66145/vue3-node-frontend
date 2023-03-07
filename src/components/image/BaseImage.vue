<template>
  <q-img
    loading="lazy"
    spinner-color="white"
    :src="src"
    :ratio="ratio"
    :alt="alt"
    :height="height"
    :width="width"
    :class="preview && 'cursor-pointer'"
    @click="onPreview"
  >
    <template #error>
      <div class="bg-dark flex flex-center text-white absolute-full">
        載入失敗
      </div>
    </template>
  </q-img>
  <image-preview-dialog ref="dialog" />
</template>

<script>
import { defineComponent, ref } from 'vue-demi'

export default defineComponent({
  props: {
    src: { type: String },
    ratio: { type: Number, default: 1 },
    alt: { type: String },
    height: { type: String, default: '100%' },
    width: { type: String, default: '100%' },
    preview: { type: Boolean, default: true },
  },
  setup (props) {
    // data
    const dialog = ref()

    const onPreview = () => {
      dialog.value.showDialog({ data: { image: { url: props.src } } })
    }
    return {
      dialog,
      onPreview,
    }
  },
})
</script>

<style lang="scss" scoped>

</style>
