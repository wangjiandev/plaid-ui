<script setup lang="ts">
import { useRouter } from 'vue-router'
import type { IAction } from '@/types/menu'
import useMenu from '@/composables/useMenu'
import { useMenuStore } from '@/stores/menu'

interface Props {
  action: IAction
}

const props = defineProps<Props>()
const menuStore = useMenuStore()
const router = useRouter()
const { deleteAction } = useMenu()

const goPage = () => {
  router.push({
    path: props.action.url,
  })
  menuStore.toggleMenuVisible()
}
</script>

<template>
  <div class="group flex flex-row cursor-pointer w-full h-12 justify-start items-center hover:bg-select/20" @click="goPage">
    <div flex w-10 justify-center items-center>
      <i class="fa-duotone fa-folder-bookmark" />
    </div>
    <div class="text-sm flex-1 flex justify-between items-center pr-4 font-bold text-gray-500">
      {{ action.actionTitle }}
      <i class="fa-duotone fa-delete-left invisible" group-hover:visible @click.stop="deleteAction(action.id)" />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
