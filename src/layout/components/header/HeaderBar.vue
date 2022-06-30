<script setup lang="ts">
import { useMenuStore } from '@/stores/menu'
import { isDark, toggleDark } from '@/composables/dark'
const menuStore = useMenuStore()
</script>

<template>
  <div
    fixed
    top-0
    left-0
    right-0
    w-screen
    h-14
    flex
    flex-row
    items-center
    justify-start
    bg-white
    dark:bg-panel
    z-100
    style="box-shadow: 0 2px 4px 0 rgba(0,0,0,0.16)"
  >
    <div h-14 w-14 text-lg flex justify-center hover:text-sky-400 dark:text-gray-200 hover:scale-125 duration-100 cursor-pointer items-center @click="menuStore.toggleMenuVisible">
      <i class="fa-duotone fa-star-of-david" />
    </div>
    <div flex-1 flex h-full flex-row justify-end items-center>
      <div h-14 w-14 text-lg flex justify-center hover:text-sky-400 dark:text-gray-200 hover:scale-125 duration-100 cursor-pointer items-center>
        <i class="fa-duotone fa-hard-drive" />
      </div>
      <div h-14 w-14 text-lg flex justify-center hover:text-sky-400 dark:text-gray-200 hover:scale-125 duration-100 cursor-pointer items-center @click="toggleDark()">
        <i v-if="isDark" class="fa-duotone fa-sun" />
        <i v-else class="fa-duotone fa-recycle" />
      </div>
      <div h-14 w-14 text-lg flex justify-center hover:text-sky-400 dark:text-gray-200 hover:scale-125 duration-100 cursor-pointer items-center>
        <i class="fa-duotone fa-book-bookmark" />
      </div>
      <div h-14 w-14 text-lg flex justify-center hover:text-sky-400 dark:text-gray-200 hover:scale-125 duration-100 cursor-pointer items-center>
        <i class="fa-duotone fa-align-justify" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
