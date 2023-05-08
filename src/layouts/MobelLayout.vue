<template>
  <q-layout class="max-w-480px mx-auto my-0 bg-grey-1" view="lHh Lpr lFf">
    <mobel-header />
    <q-page-container class="bg-grey-1">
      <router-view />
    </q-page-container>
    <app-footer />
  </q-layout>
</template>

<script>
import { MobelHeader, AppFooter } from './components'
import { defineComponent } from 'vue-demi'

export default defineComponent({
  name: 'MainLayout',
  components: {
    MobelHeader,
    AppFooter,
  },
  setup () {

  },
})
</script>

<style lang="scss" scoped>
</style>
