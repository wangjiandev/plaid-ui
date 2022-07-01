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
    if (actions.value.length >= 15)
      actions.value.pop()
    const flag = actions.value.some((a) => {
      return a.id === action.id
    })
    if (flag)
      return
    actions.value.unshift(action)
  }

  const count = computed(() => {
    return actions.value.length
  })

  return { actions, deleteAction, addAction, count }
}
