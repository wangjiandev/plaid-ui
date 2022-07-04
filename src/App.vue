<script setup lang="ts">
import { RouterView } from 'vue-router'
import { NLoadingBarProvider, darkTheme, useLoadingBar } from 'naive-ui'
import { computed, onMounted } from 'vue'
import { isDark } from '@/composables/dark'
import test from '@/apis/test'

const theme = computed(() => {
  return isDark.value ? darkTheme : null
})
test()
</script>

<template>
  <NConfigProvider :theme="theme">
    <n-loading-bar-provider>
      <RouterView />
    </n-loading-bar-provider>
  </NConfigProvider>
</template>

<style></style>
