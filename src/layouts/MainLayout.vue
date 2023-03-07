<template>
  <q-layout view="lHh Lpr lFf">
    <app-header />
    <q-page-container class="bg-grey-1">
      <router-view />
    </q-page-container>
    <app-footer />
  </q-layout>
</template>

<script>
import { AppHeader, AppFooter } from './components'
import { defineComponent } from 'vue-demi'

export default defineComponent({
  name: 'MainLayout',
  components: {
    AppHeader,
    AppFooter,
  },
  setup () {

  },
})
</script>

<style lang="scss" scoped>
</style>
