<script setup lang="ts">
import HeaderBar from './components/header/HeaderBar.vue'
</script>

<template>
  <n-layout h-screen>
    <n-layout-header h-14>
      <HeaderBar />
    </n-layout-header>
    <n-layout>
      <n-layout-content dark:bg-black content-style="padding: 24px;">
        <RouterView />
      </n-layout-content>
    </n-layout>
  </n-layout>
</template>

<style lang="scss" scoped></style>
