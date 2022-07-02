<script setup lang="ts">
import Masonry from 'masonry-layout'
import { onMounted } from 'vue'
import NavigationItem from './NavigationItem.vue'
import FollowAction from './FollowAction.vue'
import { useMenuStore } from '@/stores/menu'
import menus from '@/mock/menus.json'
import useMenu from '@/composables/useMenu'
const { actions } = useMenu()
const menuStore = useMenuStore()

onMounted(() => {
  const grid = document.querySelector('.grid')!
  const msnry = new Masonry(grid, {
    itemSelector: '.grid-item',
    columnWidth: 220,
  })
})
</script>

<template>
  <div class="absolute top-14 bottom-0 z-99 flex flex-row duration-100" :class="menuStore.isVisible ? 'left-0' : '-left-full'">
    <div class="w-68 flex flex-col justify-start items-center bg-nav dark:bg-lnav">
      <div class="flex mt-4 flex-row cursor-pointer w-full h-10 justify-start items-center  text-gray-500 font-bold">
        <div class="text-xs ml-4 select-none">
          功能导航
        </div>
      </div>
      <div v-if="actions.length > 0" class="w-full">
        <FollowAction v-for="action in actions" :key="action.id" :action="action" />
      </div>
      <div v-if="actions.length === 0" class="w-full">
        <div class="flex flex-row cursor-pointer w-full h-24 justify-center items-center">
          <div class="text-sm select-none text-gray-400/50">
            暂未收藏功能菜单
          </div>
        </div>
      </div>
    </div>
    <div class="h-full w-0.5 bg-gray-500/10 " />
    <div class="absolute top-0 bottom-0 w-180 pl-18 -z-1 bg-nav dark:bg-lnav duration-200" :class="menuStore.isVisible ? 'left-68' : '-left-68'">
      <!-- 搜素框 -->
      <div class="pl-4 pr-16 my-5">
        <div class="border-b-1 border-b-gray-500">
          <input type="text" placeholder="请输入关键字搜索" class="bg-transparent text-gray-400 border-0 outline-none mb-2">
        </div>
      </div>
      <!-- 最近访问 -->
      <div class="flex flex-col mb-4 cursor-pointer w-full justify-start items-start ">
        <div class="flex justify-start items-center pt-2 px-4">
          最近访问
        </div>
        <div class="flex flex-row justify-between p-2 flex-wrap w-full items-center gap-2 ">
          <div class="hover:bg-black hover:rounded-1 w-46 flex justify-start items-start text-xs font-bold p-2">
            云服务器 ECS1
          </div>
          <div class="hover:bg-black w-46 flex justify-start items-start text-xs font-bold p-2">
            云服务器 ECS
          </div>
          <div class="hover:bg-black w-46 flex justify-start items-start text-xs font-bold p-2">
            云服务器 ECS
          </div>
          <div class="hover:bg-black w-46 flex justify-start items-start text-xs font-bold p-2">
            云服务器 ECS
          </div>
          <div class="hover:bg-black w-46 flex justify-start items-start text-xs font-bold p-2">
            云服务器 ECS
          </div>
          <div class="hover:bg-black w-46 flex justify-start items-start text-xs font-bold p-2">
            云服务器 ECS
          </div>
        </div>
      </div>
      <!-- 全部功能列表 -->
      <n-scrollbar style="height: calc(100vh - 17rem);">
        <div class="grid">
          <NavigationItem v-for="item in menus" :key="item.id" class="grid-item" :item="item" />
        </div>
      </n-scrollbar>
    </div>
  </div>
</template>

<style lang="scss" scoped>
</style>
