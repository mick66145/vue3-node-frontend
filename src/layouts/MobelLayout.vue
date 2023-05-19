<template>
  <q-layout class="mx-auto bg-grey-1 my-0 max-w-480px" view="lHh Lpr lFf">
    <mobel-header />
    <app-sidebar />
    <q-page-container class="bg-grey-1 !pb-16">
      <router-view />
    </q-page-container>
    <app-footer />
  </q-layout>
</template>

<script>
import { MobelHeader, AppSidebar, AppFooter } from './components'
import { defineComponent } from 'vue-demi'

export default defineComponent({
  name: 'MainLayout',
  components: {
    MobelHeader,
    AppSidebar,
    AppFooter,
  },
  setup () {

  },
})
</script>

<style lang="scss" scoped>
</style>
