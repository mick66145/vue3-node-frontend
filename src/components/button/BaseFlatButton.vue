<template>
  <q-btn
    no-caps
    :flat="flat"
    :color="color"
    :loading="isLoading"
    :size="size"
    :label="label"
  >
    <template #loading>
      <q-spinner-hourglass size="0.75em" />
    </template>
  </q-btn>
</template>

<script>
import { defineComponent, computed } from 'vue-demi'
import { useApp } from '@/stores/app'

export default defineComponent({
  props: {
    label: { type: String },
    color: { type: String, default: 'primary' },
    flat: { type: Boolean, default: true },
    size: { type: String, default: 'md' },
  },
  setup () {
    // data
    const storeApp = useApp()

    const isLoading = computed(() => {
      return storeApp.isLoading
    })

    return {
      isLoading,
    }
  },
})
</script>

<style lang="scss" scoped>

</style>
