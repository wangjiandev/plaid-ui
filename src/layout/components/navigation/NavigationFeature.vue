<script setup lang="ts">
import NavigationAction from './NavigationAction.vue'
import type { IFeature } from '@/type/menu'
interface Props {
  feature: IFeature
}
const props = defineProps<Props>()
</script>

<template>
  <div class="w-46 flex flex-col justify-start items-start text-xs font-bold ">
    <div class="text-gray-500 font-bold text-sm underline decoration-2 decoration-sky-500 p-2">
      {{ feature.featureTitle }}
    </div>
    <NavigationAction v-for="action in feature.actions" :key="action.id" :action="action" />
  </div>
</template>

<style lang="scss" scoped></style>
