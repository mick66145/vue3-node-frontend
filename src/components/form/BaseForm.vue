<template>
  <q-form ref="form" @submit="onSubmit" @reset="onReset">
    <template v-if="$slots.default" #default>
      <slot name="default" />
    </template>
  </q-form>
</template>

<script>
import { defineComponent, ref } from 'vue-demi'
import useNotify from '@/hooks/useNotify'

export default defineComponent({
  props: { },
  emits: ['submit', 'reset'],
  setup (props, { emit }) {
    // data
    const form = ref()

    // methods
    const validate = () => {
      return form.value.validate().then(async (success) => {
        if (!success) { notifyError({ message: '欄位未填寫正確請檢查' }) }
        return form.value.validate()
      })
    }
    const resetValidation = () => {
      form.value.resetValidation()
    }
    const submit = (evt = null) => {
      form.value.submit(evt)
    }
    const reset = (evt = null) => {
      form.value.reset(evt)
    }
    const getValidationComponents = () => {
      return form.value.getValidationComponents()
    }
    const onSubmit = () => {
      emit('submit')
    }
    const onReset = () => {
      emit('reset')
    }

    // use
    const { notifyError } = useNotify()
    return {
      form,
      validate,
      resetValidation,
      submit,
      reset,
      getValidationComponents,
      onSubmit,
      onReset,
    }
  },
})
</script>

<style lang="scss" scoped>
</style>
