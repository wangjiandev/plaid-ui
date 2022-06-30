<script setup lang="ts">
import type { IFeature } from '@/type/menu'

interface Props {
  feature: IFeature
}

const props = defineProps<Props>()
</script>

<template>
  <div class="w-46 flex flex-col justify-start items-start text-xs font-bold ">
    <div class="text-white font-bold text-sm underline decoration-2 decoration-sky-500 p-2">
      总计划
    </div>
    <div class="hover:bg-black w-46 flex justify-start items-start text-xs font-bold p-2">
      计划编制
    </div>
    <div class="hover:bg-black w-46 flex justify-start items-start text-xs font-bold p-2">
      计划汇总
    </div>
    <div class="hover:bg-black w-46 flex justify-start items-start text-xs font-bold p-2">
      计划月报
    </div>
    <div class="hover:bg-black w-46 flex justify-start items-start text-xs font-bold p-2 mb-4">
      计划年报
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
