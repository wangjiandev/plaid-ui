<script setup lang="ts">
import EcosystemIcon from '../icons/IconEcosystem.vue'
import { useMenuStore } from '@/stores/menu'
const menuStore = useMenuStore()
</script>

<template>
  <div
    fixed
    left-0
    top-0
    right-0
    w-screen
    items-center
    flex
    justify-start
    bg-panel
    h-14
    z-100
    style="box-shadow: rgb(255 255 255 / 16%) 0px 1px 0px 0px, rgb(0 0 0 / 32%) 0px 4px 8px 0px"
  >
    <div h-14 w-14 flex justify-center cursor-pointer bg-cool items-center @click="menuStore.toggleMenuVisible">
      <EcosystemIcon class="text-sky-400" />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
