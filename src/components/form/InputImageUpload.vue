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
          <div class="q-uploader__title">Drop file here or click to upload</div>
        </div>
      </div>
    </template>
  </q-uploader>
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

<style lang="postcss" scoped>
.q-uploader {
  @apply cursor-pointer w-full;

  border: 2px dashed #d3d3d4;

  &:hover {
    border: 2px dashed #008acb;
  }

  &:deep(.q-uploader__header) {
    @apply p-y-2.5rem;
  }

  &:deep(.q-uploader__list) {
    display: none;
  }
}
</style>
