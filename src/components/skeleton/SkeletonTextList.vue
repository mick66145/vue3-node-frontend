
<template>
  <template v-for="n in 5" :key="n">
    <q-item v-if="n%2===0" class="q-pa-md">
      <q-item-section>
        <q-item-label>
          <q-skeleton type="text" />
        </q-item-label>
        <q-item-label>
          <q-skeleton type="text" width="80%" />
        </q-item-label>
        <q-item-label>
          <q-skeleton type="text" width="65%" />
        </q-item-label>
        <q-item-label>
          <q-skeleton type="text" width="40%" />
        </q-item-label>
      </q-item-section>
    </q-item>
    <q-item v-if="n%2===1" class="q-pa-md">
      <q-item-section>
        <q-item-label>
          <q-skeleton type="text" />
        </q-item-label>
        <q-item-label>
          <q-skeleton type="text" width="30%" />
        </q-item-label>
        <q-item-label>
          <q-skeleton type="text" width="70%" />
        </q-item-label>
        <q-item-label>
          <q-skeleton type="text" width="10%" />
        </q-item-label>
      </q-item-section>
    </q-item>
  </template>
</template>
<script>
import { defineComponent } from 'vue-demi'

export default defineComponent({
  props: {},
  setup () {
    return {
    }
  },
})
</script>
<style lang="scss" scoped>
</style>
