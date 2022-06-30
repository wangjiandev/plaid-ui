<script setup lang="ts">
import type { IAction } from '@/type/menu'
interface Props {
  action: IAction
}
const props = defineProps<Props>()
</script>

<template>
  <div class="group cursor-pointer hover:bg-gray-500/20 w-50 rounded flex justify-between duration-100 items-start text-gray-500 text-xs font-bold p-2">
    {{ action.actionTitle }}
    <i class="fa-duotone fa-star invisible" group-hover:visible />
  </div>
</template>

<style lang="scss" scoped></style>
