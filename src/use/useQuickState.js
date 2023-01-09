import { reactive } from 'vue-demi'
import clonedeep from 'lodash/clonedeep'

export default function useQuickState (params = {}) {
  const state = reactive({ ...params })
  const backupState = clonedeep(state)
  const reset = () => {
    Object.assign(state, cloneBackup())
  }
  const clone = () => clonedeep(state)
  const cloneBackup = () => clonedeep(backupState)
  return {
    state,
    backupState,
    clone,
    reset,
    assign: (newParams) => Object.assign(state, newParams),
    cloneBackup,
  }
}
