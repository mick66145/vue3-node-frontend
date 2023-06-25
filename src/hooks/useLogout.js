import { useUser } from '@/stores/user'
import { useRouter } from 'vue-router'
export default function useLogout () {
  const router = useRouter()
  const storeUser = useUser()

  const resetStore = async () => {
    await storeUser.logout()
    router.push('/')
  }

  return {
    resetStore,
  }
}
