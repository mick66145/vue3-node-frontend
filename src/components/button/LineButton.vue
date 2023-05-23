<template>
  <base-button
    color="positive"
    :outline="outline"
    :rounded="rounded"
    :label="buttonLabel"
    @click="login"
  />
</template>

<script>
import { defineComponent, computed, onMounted, toRefs } from 'vue-demi'
import { i18n } from '@/plugins/i18n'
import useLine from '@/use/useLine'
export default defineComponent({
  props: {
    label: { type: String },
    outline: { type: Boolean, default: false },
    rounded: { type: Boolean, default: false },
    channelId: { type: String, required: true },
    channelSecret: { type: String, required: true },
    redirectUri: { type: String, required: true },
    scope: { type: String, default: 'profile openid email' },
  },
  emits: ['handleSuccess'],
  setup (props, { emit }) {
    // data
    const { label, channelId, channelSecret, redirectUri, scope } = toRefs(props)

    // computed
    const buttonLabel = computed(() => {
      return label.value ? label.value : i18n.global.t('g.btn.line')
    })

    // mounted
    onMounted(async () => {
      if (isRedirect.value) {
        const { accessToken } = await oauth2Token()
        emit('handleSuccess', { accessToken })
      }
    })

    // use
    const { isRedirect, login, oauth2Token } = useLine({
      channelId: channelId.value,
      channelSecret: channelSecret.value,
      redirectUri: redirectUri.value,
      scope: scope.value,
    })

    return {
      buttonLabel,
      login,
    }
  },
})
</script>

<style lang="scss" scoped>

</style>
