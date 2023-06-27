<template>
  <q-dialog v-model="observeValue" :persistent="persistent" @show="onShow" @hide="onHide">
    <q-card :class="sizeClass">
      <q-card-section class="row items-center dialog-header">
        <div class="text-center w-full text-h5">{{ title }}</div>
        <q-space />
      </q-card-section>

      <q-card-section class="scroll q-dialog-body">
        <slot />
      </q-card-section>

      <q-card-section class="q-dialog-footer" align="center">
        <div class="w-full">
          <confirm-button
            v-if="showSave"
            size="lg"
            class="w-full q-mb-sm"
            :color="confirmButtonColor"
            :label="confirmButtonText"
            @click="onConfirm"
          />
          <cancel-button
            v-if="showCancel"
            v-close-popup
            size="lg"
            class="w-full"
            :color="cancelButtonColor"
            :label="cancelButtonText"
            @click="onCancel"
          />
        </div>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script>
import { useVModel } from '@vueuse/core'
import { defineComponent, computed, toRefs } from 'vue-demi'
import { i18n } from '@/plugins/i18n'
export default defineComponent({
  props: {
    modelValue: { type: Boolean, default: false },
    title: { type: String, default: '標題' },
    cancelButtonText: { type: String },
    cancelButtonColor: { type: String, default: 'primary' },
    confirmButtonText: { type: String },
    confirmButtonColor: { type: String, default: 'primary' },
    persistent: { type: Boolean, default: false },
    size: { type: String },
    showCancel: { type: Boolean, default: true },
    showSave: { type: Boolean, default: true },
  },
  emits: ['update:modelValue', 'save', 'cancel', 'show', 'hide'],
  setup (props, { emit }) {
    // data
    const observeValue = useVModel(props, 'modelValue', emit)
    const { cancelButtonText, confirmButtonText } = toRefs(props)

    // computed
    const sizeClass = computed(() => {
      switch (props.size) {
      case 'small':
        return 'w-25rem'
      case 'medium':
        return 'w-30rem'
      default:
        return 'w-full'
      }
    })
    const cancelButtonLabel = computed(() => {
      return cancelButtonText.value ? cancelButtonText.value : i18n.global.t('g.btn.cancel')
    })
    const confirmButtonLabel = computed(() => {
      return confirmButtonText.value ? confirmButtonText.value : i18n.global.t('g.btn.save')
    })

    // methods
    const onConfirm = () => {
      emit('save')
    }

    const onCancel = () => {
      emit('cancel')
    }

    const onShow = () => {
      emit('show')
    }

    const onHide = () => {
      emit('hide')
    }

    return {
      observeValue,
      sizeClass,
      cancelButtonLabel,
      confirmButtonLabel,
      onConfirm,
      onCancel,
      onShow,
      onHide,
    }
  },
})

</script>

<style lang="scss" scoped>
.q-card {
  .q-dialog-body {
    @apply max-h-40em;
  }
}
</style>
