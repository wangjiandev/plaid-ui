<script setup lang="ts">
import NavigationFeature from './NavigationFeature.vue'
import type { ICollection } from '@/types/menu'

interface Props {
  item: ICollection
}

const props = defineProps<Props>()
</script>

<template>
  <div class="flex flex-col justify-start items-start text-xs font-bold mb-8 " style="width: 220px;">
    <div class="text-sky-400 font-bold text-lg p-2 w-46">
      {{ item.collectionTitle }}
    </div>
    <NavigationFeature v-for="feature in item.features" :key="feature.id" :feature="feature" />
  </div>
</template>

<style lang="scss" scoped>
</style>
