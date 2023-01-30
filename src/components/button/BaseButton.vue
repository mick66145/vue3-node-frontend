<template>
  <q-btn
    class="shadow-1"
    :outline="outline"
    :rounded="rounded"
    :color="color"
    :label="label"
    :icon="icon"
  >
    <slot />
  </q-btn>
</template>

<script>
import { defineComponent } from 'vue-demi'
export default defineComponent({
  props: {
    label: { type: String, default: '' },
    color: { type: String, default: 'primary' },
    icon: { type: String },
    outline: { type: Boolean, default: false },
    rounded: { type: Boolean, default: false },
  },
  setup () {
    return {
    }
  },
})
</script>

<style lang="scss" scoped>

</style>
