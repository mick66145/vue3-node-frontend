<template>
  <vue-esign
    ref="esign"
    :bgColor="bgColor"
    :width="width"
    :height="height"
    :isCrop="isCrop"
    :lineWidth="lineWidth"
    :lineColor="lineColor"
  />
</template>

<script>
import { defineComponent, ref } from 'vue-demi'
export default defineComponent({
  props: {
    width: { type: Number, default: 800 },
    height: { type: Number, default: 300 },
    lineColor: { type: String, default: '#000000' },
    lineWidth: { type: Number, default: 6 },
    bgColor: { type: String, default: '' },
    isCrop: { type: Boolean, default: false },
  },
  setup () {
    // data
    const esign = ref()

    const reset = () => {
      esign.value.reset()
    }
    const generate = async () => {
      const handleGenerate = () => {
        return new Promise((resolve) => {
          esign.value.generate().then(res => {
            resolve(res)
          }).catch(err => {
            alert(err)
          })
        })
      }
      return await handleGenerate()
    }
    return {
      esign,
      reset,
      generate,
    }
  },
})
</script>

<style lang="scss" scoped>
</style>
