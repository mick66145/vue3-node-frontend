<template>
  <span>
    <q-img
      loading="lazy"
      spinner-color="white"
      :src="observeSrc"
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
  </span>
</template>

<script>
import { defineComponent, ref } from 'vue-demi'
import { getToken } from '@/utils/auth'
import { fetchBlobData } from '@/utils/blob'
import { asyncComputed } from '@vueuse/core'
export default defineComponent({
  props: {
    src: { type: String },
    ratio: { type: Number, default: 1 },
    alt: { type: String },
    height: { type: String, default: '100%' },
    width: { type: String, default: '100%' },
    preview: { type: Boolean, default: true },
    useAuthorization: { type: Boolean, default: false },
  },
  setup (props) {
    // data
    const dialog = ref()
    const observeSrc = asyncComputed(
      async () => {
        if (props.useAuthorization) {
          const src = props.src
          const options = {
            headers: {
              Authorization: `Bearer ${getToken()}`,
            },
          }
          return await fetchBlobData(src, options)
        } else {
          return props.src
        }
      },
      null,
    )

    const onPreview = () => {
      if (props.preview) {
        dialog.value.showDialog({ data: { image: { url: observeSrc.value } } })
      }
    }
    return {
      dialog,
      observeSrc,
      onPreview,
    }
  },
})
</script>

<style lang="scss" scoped></style>
