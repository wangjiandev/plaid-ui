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
  <n-loading-bar-provider>
    <NConfigProvider :theme="theme">
      <RouterView />
    </NConfigProvider>
  </n-loading-bar-provider>
</template>

<style></style>
