import { ref, computed } from 'vue-demi'
import request from '@/utils/request'

export default function useLine ({
  channelId,
  channelSecret,
  redirectUri,
  scope,
}) {
  // data
  const urlParams = ref(new URLSearchParams(window.location.search))

  // computed
  const isRedirect = computed(() => {
    const code = urlParams.value.get('code')
    return code !== null
  })
  // methods
  const login = () => {
    const loginUrl = `https://access.line.me/oauth2/v2.1/authorize?response_type=code&client_id=${channelId}&redirect_uri=${redirectUri}&state=123&scope=${scope}`
    location.href = loginUrl
  }
  const oauth2Token = async () => {
    const code = urlParams.value.get('code')
    if (code) {
      try {
        const response = await request({
          url: 'https://api.line.me/oauth2/v2.1/token',
          method: 'post',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          data: {
            grant_type: 'authorization_code',
            code: code,
            client_id: channelId,
            client_secret: channelSecret,
            redirect_uri: redirectUri,
          },
        })
        const { access_token: accessToken, id_token: idToken } = response.data
        return { accessToken, idToken }
      } catch (error) {}
    }
  }
  return {
    isRedirect,
    login,
    oauth2Token,
  }
}
