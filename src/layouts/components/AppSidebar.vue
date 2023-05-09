<template>
  <q-drawer
    v-model="sidebarOpened"
    show-if-above
    bordered
    :width="260"
    class="bg-white shadow-7 text-blue-grey-7"
  >
    <q-scroll-area class="h-full">
      <q-list class="text-lg">
        <q-item
          v-for="({ label, icon , to, clickFn },index) in sidearOptions"
          :key="index"
          v-ripple
          clickable
          :to="to"
          @click="clickFn"
        >
          <q-item-section v-if="icon" avatar>
            <q-icon :name="icon" />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ label }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-scroll-area>
  </q-drawer>
</template>

<script>
import { defineComponent, computed } from 'vue-demi'
import { useApp } from '@/stores/app'
export default defineComponent({
  emits: ['toggle'],
  setup (props, { emit }) {
    // data
    const store = useApp()

    // computed
    const sidebarOpened = computed({
      get () {
        return store.sidebar.opened
      },
      set () {
        store.toggleSideBar()
      },
    })
    const sidearOptions = computed(() => {
      return []
    })

    return {
      sidebarOpened,
      sidearOptions,
    }
  },
})
</script>

<style lang="scss" scoped>
</style>
