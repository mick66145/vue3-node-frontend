
<template>
  <q-list v-for="option in options" :key="option">
    <menu-link
      v-if="option.children.length===0"
      :to="option.to"
      :title="option.title"
      :icon="option.icon"
    />
    <q-item v-else v-ripple clickable>
      <q-item-section>{{ option.title }}</q-item-section>
      <q-item-section side>
        <q-icon name="keyboard_arrow_right" />
      </q-item-section>
      <q-menu anchor="top end" self="top start">
        <menu-list :options="option.children" />
      </q-menu>
    </q-item>
  </q-list>
</template>

<script>
import MenuLink from './MenuLink.vue'
import { defineComponent } from 'vue-demi'

export default defineComponent({
  components: {
    MenuLink,
  },
  props: {
    options: { type: Array, default () { return [] } },
  },
  setup () {
    return {
    }
  },
})
</script>

<style lang="postcss" scoped></style>
