<template>
  <div>
    <q-uploader
      ref="uploader"
      color="white"
      text-color="black"
      flat
      :accept="accept"
      :max-file-size="maxFileSize"
      @added="onFile"
      @rejected="onRejected"
    >
      <template #header="scope">
        <q-btn
          class="h-full w-full p-2.5rem"
          @click="scope.pickFiles"
        >
          <q-uploader-add-trigger />
          <q-spinner v-if="scope.isUploading" class="q-uploader__spinner" />
          <div>
            <img v-if="imgSrc" class="w-full" :src="imgSrc" alt="">
            <div v-else class="flex-center row column">
              <svg-icon color="gray" icon="cloud-arrow-up" class="cursor-pointer" size="56" />
              <div class="q-uploader__title">將檔案拖放到此處或點擊上傳</div>
            </div>
          </div>
        </q-btn>
      </template>
    </q-uploader>
    <div class="q-field__bottom">
      請上傳 JPG 或 PNG 格式圖片，檔案大小為 2MB。
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue-demi'
import useNotify from '@/use/useNotify'
export default defineComponent({
  props: {
    accept: { type: String, default: 'image/png, image/jpeg, image/jpg' },
    imgSrc: { type: String },
    maxFileSize: { type: Number, default: 2048000 },
  },
  emits: ['on-file'],
  setup (props, { emit }) {
    const { notify } = useNotify()

    // data
    const uploader = ref()
    const reader = new FileReader()

    const removeQueuedFiles = () => {
      uploader.value.removeQueuedFiles()
    }
    const onFile = (files) => {
      const file = files[0]
      const fileType = file.type
      console.log('🚀 ~ onFile ~ fileType', fileType)
      if (!props.accept.includes(fileType)) return notify({ message: '圖片格式錯誤', type: 'negative' })
      reader.readAsDataURL(file)
      reader.onload = (event) => {
        emit('on-file', { file: file, base64: event.target.result })
      }
    }
    const onRejected = (rejectedEntries) => {
      const file = rejectedEntries[0].file
      const fileType = file.type
      const size = file.size
      if (!props.accept.includes(fileType)) return notify({ message: '圖片格式錯誤', type: 'negative' })
      if (size > props.maxFileSize) return notify({ message: '圖片大小超過可上傳大小', type: 'negative' })
    }

    return {
      uploader,
      removeQueuedFiles,
      onFile,
      onRejected,
    }
  },
})
</script>

<style lang="scss" scoped>
.q-uploader {
  @apply cursor-pointer max-h-none w-full;

  border: dashed 2px #d3d3d4;

  &:hover {
    border: 2px dashed $primary;
  }

  &:deep(.q-uploader__list) {
    display: none;
  }
}
</style>
