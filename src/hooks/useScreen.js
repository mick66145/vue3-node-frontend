import { useQuasar } from 'quasar'
import { ref, onMounted } from 'vue-demi'

export default function useScreen () {
  // data
  const $q = useQuasar()
  const screenHeight = ref($q.screen.height)
  const screenWidth = ref($q.screen.width)

  onMounted(() => {
    window.addEventListener('resize', () => { setScreenHeight(); setScreenWidth() })
  })

  // methods
  const setScreenHeight = () => {
    screenHeight.value = $q.screen.height
  }
  const setScreenWidth = () => {
    screenWidth.value = $q.screen.width
  }

  return {
    screenHeight,
    screenWidth,
  }
}
