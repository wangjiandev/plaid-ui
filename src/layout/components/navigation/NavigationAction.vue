<script setup lang="ts">
import type { IAction } from '@/types/menu'
import useMenu from '@/composables/useMenu'
const props = defineProps<Props>()
const { addAction } = useMenu()
interface Props {
  action: IAction
}
</script>

<template>
  <div class="group cursor-pointer hover:bg-gray-500/20 w-50 rounded flex justify-between duration-100 items-start text-gray-500 text-xs font-bold p-2">
    {{ action.actionTitle }}
    <div class="font-bold invisible h-full w-4 group-hover:visible" @click="addAction(action)">
      <i class="fa-duotone fa-plus " />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
