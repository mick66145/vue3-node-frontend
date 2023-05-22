<template>
  <router-view />
</template>

<script>
import { defineComponent } from 'vue-demi'
import { RouterView } from 'vue-router'

export default defineComponent({
  setup () {
    return {
      RouterView,
    }
  },
})
</script>

<style lang="scss" scoped>
</style>
