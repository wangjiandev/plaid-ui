import { useStorage } from '@vueuse/core'
import { computed, ref } from 'vue'
import type { IAction } from '../types/menu'

const actions = ref<IAction[]>([])
useStorage('actions-state', actions)

export default () => {
  const deleteAction = (id: string) => {
    actions.value = actions.value.filter(action => action.id !== id)
  }

  const addAction = (action: IAction) => {
    actions.value.unshift(action)
  }

  const count = computed(() => {
    return actions.value.length
  })

  return { actions, deleteAction, addAction, count }
}
