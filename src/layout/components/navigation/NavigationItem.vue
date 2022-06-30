<script setup lang="ts">
import NavigationFeature from './NavigationFeature.vue'
import type { ICollection } from '@/type/menu'

interface Props {
  item: ICollection
}

const props = defineProps<Props>()
</script>

<template>
  <div class="w-46 flex flex-col justify-start items-start text-xs font-bold ">
    <div class="text-sky font-bold text-sm p-2">
      {{ item.collectionTitle }}
    </div>
    <NavigationFeature v-for="feature in item.features" :key="feature.id" :feature="feature" />
  </div>
</template>

<style lang="scss" scoped></style>
