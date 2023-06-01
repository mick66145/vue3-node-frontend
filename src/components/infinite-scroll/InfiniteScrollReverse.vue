<template>
  <q-infinite-scroll reverse @load="onLoad">
    <template #loading>
      <div class="row justify-center q-my-md">
        <q-spinner color="primary" name="dots" size="40px" />
      </div>
    </template>
    <slot />
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
