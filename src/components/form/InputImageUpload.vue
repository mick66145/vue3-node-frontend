<template>
  <q-uploader
    ref="uploader"
    color="white"
    text-color="black"
    flat
    :accept="accept"
    @added="onFile"
  >
    <template #header="scope">
      <div class="q-gutter-xs" @click="scope.upload">
        <div>
          <q-uploader-add-trigger />
        </div>
        <img v-if="imgSrc" class="w-full" :src="imgSrc" alt="">
        <div v-else class="flex-center row column">
          <svg-icon color="gray" icon="cloud-arrow-up" class="cursor-pointer" size="56" />
          <div class="q-uploader__title">將檔案拖放到此處或點擊上傳</div>
        </div>
      </div>
    </template>
  </q-uploader>
  <div class="q-field__bottom">
    請上傳 JPG 或 PNG 格式圖片，檔案大小為 2MB。
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue-demi'
import useNotify from '@/use/useNotify'
export default defineComponent({
  props: {
    accept: { type: String, default: 'image/png, image/jpeg, image/jpg' },
    imgSrc: { type: String },
  },
  emits: ['on-file'],
  setup (props, { emit }) {
    const { notify } = useNotify()

    // data
    const uploader = ref()
    const reader = new FileReader()

    const onFile = (files) => {
      const file = files[0]
      const fileType = file.type
      console.log('🚀 ~ onFile ~ fileType', fileType)
      if (!props.accept.includes(fileType)) return notify({ message: '檔案格式不支援', type: 'error' })
      reader.readAsDataURL(file)
      reader.onload = (event) => {
        emit('on-file', { file: file, base64: event.target.result })
      }
    }

    return {
      uploader,
      onFile,
    }
  },
})
</script>

<style lang="scss" scoped>
.q-uploader {
  @apply cursor-pointer w-full;

  border: dashed 2px #d3d3d4;

  &:hover {
    border: 2px dashed $primary;
  }

  &:deep(.q-uploader__header) {
    @apply p-y-2.5rem;
  }

  &:deep(.q-uploader__list) {
    display: none;
  }
}
</style>
