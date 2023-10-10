<template>
  <base-uploader
    ref="uploader"
    :accept="accept"
    :max-file-size="maxFileSize"
    :img-src="imgSrc"
    :disable="disable"
    @added="onFile"
    @rejected="onRejected"
  >
    <template #upload-bottom>
      請上傳 JPG 或 PNG 格式圖片，檔案大小為 {{ maxFileSize/1024000 }}MB。
    </template>
  </base-uploader>
</template>

<script>
import BaseUploader from './BaseUploader.vue'
import { defineComponent, ref } from 'vue-demi'
import useNotify from '@/hooks/useNotify'
export default defineComponent({
  components: {
    BaseUploader,
  },
  props: {
    accept: { type: String, default: 'image/png, image/jpeg, image/jpg' },
    imgSrc: { type: String },
    maxFileSize: { type: Number, default: 2048000 },
    disable: { type: Boolean, default: false },
  },
  emits: ['onFile'],
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
        emit('onFile', { file: file, base64: event.target.result })
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
</style>
