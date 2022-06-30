<script setup lang="ts">
import { RouterView } from 'vue-router'
import { darkTheme } from 'naive-ui'

import { computed } from 'vue'
import { isDark } from '@/composables/dark'

const theme = computed(() => {
  return isDark.value ? darkTheme : null
})
</script>

<template>
  <NConfigProvider :theme="theme">
    <RouterView />
  </NConfigProvider>
</template>

<style></style>
