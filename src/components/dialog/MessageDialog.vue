<template>
  <q-dialog v-model="show" :persistent="persistent">
    <q-card>
      <q-card-section class="row items-center dialog-header">
        <div class="text-h6">{{ title }}</div>
        <q-space />
      </q-card-section>

      <q-card-section class="scroll q-dialog-body">
        {{ message }}
      </q-card-section>

      <q-card-actions class="q-dialog-footer" align="right">
        <q-btn
          v-if="showCancel"
          flat
          :color="cancelButtonColor"
          :label="cancelButtonText"
          @click="onCancel"
        />
        <q-btn
          flat
          :color="confirmButtonColor"
          :label="confirmButtonText"
          @click="onConfirm"
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
import { useMessageDialogStore } from '@/stores/messageDialog'
import { defineComponent, toRefs } from 'vue-demi'
export default defineComponent({
  setup () {
    const store = useMessageDialogStore()
    // data
    const {
      show,
      title,
      message,
      persistent,
      confirmButtonText,
      confirmButtonColor,
      cancelButtonText,
      cancelButtonColor,
      showCancel,
    } = toRefs(store)

    // methods
    const onConfirm = () => {
      store.confirm()
    }

    const onCancel = () => {
      store.close()
    }

    return {
      store,
      show,
      title,
      message,
      persistent,
      cancelButtonText,
      cancelButtonColor,
      confirmButtonText,
      confirmButtonColor,
      showCancel,
      onConfirm,
      onCancel,
    }
  },
})

</script>

<style lang="scss" scoped>
.q-card {
  .q-dialog-body {
    @apply min-w-20rem min-h-7rem;
  }
}
</style>
