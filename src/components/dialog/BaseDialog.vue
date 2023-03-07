<template>
  <q-dialog v-model="observeValue" :persistent="persistent" @show="onShow" @hide="onHide">
    <q-card :class="sizeClass">
      <q-card-section class="bg-primary text-white row items-center dialog-header">
        <slot name="title">
          <div class="text-h6">{{ title }}</div>
        </slot>
        <q-space />
        <q-btn
          v-close-popup
          icon="far fa-times-circle"
          flat
          round
          dense
          @click="onCancel"
        />
      </q-card-section>

      <q-separator />

      <q-card-section class="scroll q-dialog-body">
        <slot />
      </q-card-section>

      <q-separator />

      <q-card-actions class="q-dialog-footer" align="right">
        <slot name="footer" class="text-primary">
          <base-button
            v-if="showCancel"
            v-close-popup
            class="q-mr-xs"
            outline
            :color="cancelButtonColor"
            :label="cancelButtonText"
            padding="sm 2.5em"
            @click="onCancel"
          />
          <base-button
            v-if="showSave"
            :color="confirmButtonColor"
            :label="confirmButtonText"
            padding="sm 2.5em"
            @click="onSave"
          />
        </slot>
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
import { useVModel } from '@vueuse/core'
import { defineComponent, computed } from 'vue-demi'
export default defineComponent({
  props: {
    modelValue: { type: Boolean, default: false },
    title: { type: String, default: '標題' },
    cancelButtonText: { type: String, default: '關閉' },
    cancelButtonColor: { type: String, default: 'primary' },
    confirmButtonText: { type: String, default: '儲存' },
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

    // methods
    const onSave = () => {
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
      onSave,
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
