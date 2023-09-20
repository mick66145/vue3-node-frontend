<template>
  <q-layout view="lHh Lpr lFf">
    <app-header v-if="isScreenLargerSm" />
    <mobile-header v-if="!isScreenLargerSm" />
    <app-sidebar v-if="!isScreenLargerSm" />
    <q-page-container class="bg-grey-1">
      <router-view />
    </q-page-container>
    <app-footer />
  </q-layout>
</template>

<script>
import { AppHeader, MobileHeader, AppSidebar, AppFooter } from './components'
import { defineComponent } from 'vue-demi'
import useScreen from '@/hooks/useScreen'

export default defineComponent({
  name: 'MainLayout',
  components: {
    AppHeader,
    MobileHeader,
    AppSidebar,
    AppFooter,
  },
  setup () {
    // use
    const { isScreenLargerSm } = useScreen()

    return {
      isScreenLargerSm,
    }
  },
})
</script>

<style lang="scss" scoped>
</style>
