<script setup lang="ts">
import type { IAction } from '@/types/menu'
import useMenu from '@/composables/useMenu'
defineProps<Props>()
const { deleteAction } = useMenu()
interface Props {
  action: IAction
}
</script>

<template>
  <div class="group flex flex-row cursor-pointer w-full h-12 justify-start items-center hover:bg-select/20">
    <div flex w-10 justify-center items-center>
      <i class="fa-duotone fa-align-justify" />
    </div>
    <div class="text-sm flex-1 flex justify-between items-center pr-4">
      {{ action.actionTitle }}
      <i class="fa-duotone fa-delete-left invisible" group-hover:visible @click="deleteAction(action.id)" />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
