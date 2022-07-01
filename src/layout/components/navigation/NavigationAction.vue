<script setup lang="ts">
import { useRouter } from 'vue-router'
import type { IAction } from '@/types/menu'
import useMenu from '@/composables/useMenu'
import { useMenuStore } from '@/stores/menu'

const props = defineProps<Props>()
const { addAction } = useMenu()
const router = useRouter()
const menuStore = useMenuStore()

interface Props {
  action: IAction
}

const goPage = () => {
  router.push({
    path: props.action.url,
  })
  menuStore.toggleMenuVisible()
}
</script>

<template>
  <div class="group cursor-pointer hover:bg-gray-500/20 w-50 rounded flex justify-between duration-100 items-start text-gray-500 text-xs font-bold p-2" @click="goPage">
    {{ action.actionTitle }}
    <div class="font-bold invisible h-full w-4 group-hover:visible" @click="addAction(action)">
      <i class="fa-duotone fa-plus " />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
