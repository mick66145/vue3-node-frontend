<template>
  <q-layout view="lHh Lpr lFf">
    <app-header class="md:block <md:hidden" />
    <mobile-header class="md:hidden <md:block" />
    <app-sidebar class="md:hidden <md:block" />
    <q-page-container class="bg-grey-1">
      <router-view />
    </q-page-container>
    <app-footer />
  </q-layout>
</template>

<script>
import { AppHeader, MobileHeader, AppSidebar, AppFooter } from './components'
import { defineComponent } from 'vue-demi'

export default defineComponent({
  name: 'MainLayout',
  components: {
    AppHeader,
    MobileHeader,
    AppSidebar,
    AppFooter,
  },
  setup () {
  },
})
</script>

<style lang="scss" scoped>
</style>
