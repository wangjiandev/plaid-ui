<script setup lang="ts">
import hotkeys from 'hotkeys-js'
import NavigationBar from './components/navigation/NavigationBar.vue'
import HeaderBar from './components/header/HeaderBar.vue'
import { useMenuStore } from '@/stores/menu'

const menuStore = useMenuStore()

hotkeys('a', (event) => {
  event.preventDefault()
  menuStore.toggleMenuVisible()
})
</script>

<template>
  <n-layout>
    <HeaderBar />
    <n-layout>
      <n-layout-content class="h-screen relative">
        <div v-if="menuStore.isVisible" class="absolute top-0 w-screen bottom-0 left-0 bg-black/5 z-99" @click="menuStore.toggleMenuVisible" />
        <NavigationBar />
        <div p-4 mt-15>
          <n-breadcrumb>
            <n-breadcrumb-item>
              北京总行
            </n-breadcrumb-item>
            <n-breadcrumb-item>
              天津分行
            </n-breadcrumb-item>
            <n-breadcrumb-item>
              平山道支行
            </n-breadcrumb-item>
          </n-breadcrumb>
        </div>
        <div>
          <n-scrollbar style="max-height: calc(100vh - 8rem);">
            <RouterView />
          </n-scrollbar>
        </div>
      </n-layout-content>
    </n-layout>
  </n-layout>
</template>

<style lang="scss" scoped>
.main-content{
  height: 100vh;
}
</style>
