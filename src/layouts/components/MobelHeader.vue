<template>
  <q-header class="flex-center row text-blue-grey-7 fixed-top">
    <q-toolbar class="bg-primary text-white max-w-480px shadow-7">
      <base-icon-button
        icon="menu"
        color="white"
        @click="onToggle"
      />
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
import { useApp } from '@/stores/app'
export default defineComponent({
  components: {
  },
  setup () {
    // data
    const storeApp = useApp()

    // methods
    const onToggle = () => {
      storeApp.toggleSideBar()
    }

    return {
      onToggle,
    }
  },
})
</script>

<style lang="scss" scoped>
.q-header {
  @apply top-0 right-0 left-0 fixed ;
  @apply bg-white bg-opacity-0;
}

</style>
