<template>
  <q-infinite-scroll @load="onLoad">
    <slot />
    <template #loading>
      <div class="row justify-center q-my-md">
        <q-spinner-dots color="primary" size="40px" />
      </div>
    </template>
  </q-infinite-scroll>
</template>

<script>
import { defineComponent } from 'vue-demi'

export default defineComponent({
  props: {
  },
  emits: ['load'],
  setup (props, { emit }) {
    const onLoad = (index, done) => {
      emit('load', index, done)
    }
    return {
      onLoad,
    }
  },
})
</script>

<style lang="scss" scoped>
</style>
