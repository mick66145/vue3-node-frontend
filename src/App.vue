<template>
  <message-dialog />
  <router-view />
</template>

<script>
import { defineComponent } from 'vue-demi'
import { RouterView } from 'vue-router'
import useMetaInfo from '@/hooks/useMetaInfo'

export default defineComponent({
  setup () {
    useMetaInfo()
    return {
      RouterView,
    }
  },
})
</script>

<style lang="scss" scoped>
</style>
