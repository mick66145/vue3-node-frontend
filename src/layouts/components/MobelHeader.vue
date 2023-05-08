<template>
  <q-header class="row flex-center text-blue-grey-7 fixed-top">
    <q-toolbar class="bg-primary text-white shadow-7 max-w-480px">
      <q-btn flat no-caps no-wrap class="q-ml-xs" to="/">
        <q-toolbar-title shrink>
          <span class="<sm:text-base">{{ $t('g.system.system-name') }}</span>
        </q-toolbar-title>
      </q-btn>
      <q-space />
    </q-toolbar>
  </q-header>
</template>

<script>
import { defineComponent } from 'vue-demi'
export default defineComponent({
  components: {
  },
  setup () {
    return {
    }
  },
})
</script>

<style lang="scss" scoped>
.q-header {
  @apply fixed top-0 left-0 right-0 ;
  @apply bg-opacity-0 bg-white;
}

</style>
