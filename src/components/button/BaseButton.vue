<template>
  <q-btn
    class="shadow-1"
    :outline="outline"
    :rounded="rounded"
    :color="color"
    :label="label"
    :icon="icon"
    :loading="isLoading"
    :size="size"
  >
    <slot />
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
    label: { type: String, default: '' },
    color: { type: String, default: 'primary' },
    icon: { type: String },
    outline: { type: Boolean, default: false },
    rounded: { type: Boolean, default: false },
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
