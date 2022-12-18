<template>
  <div class="input-image aspect-500/2000">
    <div class="cursor-pointer flex items-center justify-center" @click="showDialog = true">
      <img v-if="preview" class="w-full transform scale-98" :src="preview" alt="">
      <q-icon v-else name="add" size="2em" />
    </div>

    <!-- ANCHOR 上傳 -->
    <input-dialog v-model="showDialog" title="上傳圖片 : " @show="onOpen" @save="onSave" @cancel="onCancelCopper">
      <q-form ref="form">
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-12">
            <q-item>
              <input-image-upload class="full-width" :img-src="uploadPreview" @on-file="onFile" />
            </q-item>
          </div>

          <div class="col-xs-12 col-sm-12 col-md-12">
            <q-item>
              <input-text
                v-model="state.alt"
                class="full-width"
                label="Alt Text"
                placeholder="請輸入Alt Text"
              />
            </q-item>
          </div>

          <div class="col-xs-12 col-sm-12 col-md-12">
            <q-item>
              <input-text
                v-model="state.caption"
                class="full-width"
                label="Caption"
                placeholder="請輸入Caption"
              />
            </q-item>
          </div>
        </div>
      </q-form>
    </input-dialog>

    <input-dialog v-model="showCropper" title="裁切圖片 : " @save="onCopper" @cancel="onCancelCopper">
      <image-cropper
        ref="cropper"
        :source="tempCropper"
        :aspect-ratio="aspect"
      />
    </input-dialog>
  </div>
</template>

<script>
import { defineComponent, computed, reactive, ref } from 'vue-demi'
import useImgStorage from '@/use/useImgStorage'
import ImageCropper from '../ImageCropper.vue'

export default defineComponent({
  components: {
    ImageCropper,
  },
  props: {
    modelValue: { type: [Object, File, String] },
    error: { type: String, default: '' },
    accept: { type: String, default: 'image/png, image/jpeg, image/jpg' },
    aspect: { type: Number },
  },
  emits: ['update:modelValue'],
  setup (props, { emit }) {
    // data
    const cropper = ref()
    const showDialog = ref(false)
    let tempRaw = null // 存放圖片原始資料(type, name)
    const tempCropper = ref(null) // cropper 暫存圖片資料
    const showCropper = ref(false)
    const state = reactive({
      alt: '',
      caption: '',
      image: '',
    })

    // computed
    const observeValue = computed({
      get () {
        if (typeof props.modelValue === 'string') return { filename: props.modelValue }
        return props.modelValue
      },
      set (value) {
        emit('update:modelValue', value)
      },
    })

    const preview = computed(() => {
      const { blobURL, filename } = observeValue.value || {}
      if (blobURL) return blobURL

      return getImageSrc({ filename, size: '200x' })
    })

    const uploadPreview = computed(() => {
      const { blobURL, filename } = state.image || {}
      if (blobURL) return blobURL

      return getImageSrc({ filename, size: '200x' })
    })

    // use
    const { getImageSrc } = useImgStorage()

    // methods
    const onFile = (fileObj) => {
      const { file, base64 } = fileObj
      tempCropper.value = base64
      tempRaw = file
      showCropper.value = true
    }

    const onCopper = async () => {
      const { canvas } = await cropper.value.getResult()
      const blob = await new Promise((resolve) => canvas.toBlob(resolve, tempRaw.type))
      const file = new File(
        [blob],
        tempRaw.name,
        { type: tempRaw.type },
      )

      state.image = {
        blobURL: URL.createObjectURL(blob),
        raw: file,
      }

      showCropper.value = false
    }

    const onOpen = () => {
      state.image = props.modelValue
      if (props.modelValue !== null) {
        const { alt, caption } = props.modelValue
        state.alt = alt
        state.caption = caption
      }
    }

    const onSave = () => {
      const { image, alt, caption } = state
      observeValue.value = { ...image, alt, caption }
      showDialog.value = false
    }

    const onCancelCopper = () => {
      tempRaw = null
      tempCropper.value = null
      showCropper.value = false
    }

    return {
      cropper,
      showDialog,
      tempRaw,
      tempCropper,
      showCropper,
      state,
      observeValue,
      preview,
      uploadPreview,
      onFile,
      onCopper,
      onOpen,
      onSave,
      onCancelCopper,
    }
  },
})

</script>

<style lang="postcss" scoped>
.input-image {
  @apply w-full;

  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%' fill='none' stroke='%23aaaaaa' stroke-width='5' stroke-dasharray='9%2c 18' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
}
</style>
