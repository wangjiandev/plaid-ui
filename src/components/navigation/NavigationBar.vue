<script setup lang="ts">
import EcosystemIcon from '../icons/IconEcosystem.vue'
import { useMenuStore } from '@/stores/menu'
const menuStore = useMenuStore()
</script>

<template>
  <div
    v-show="menuStore.isVisible"
    fixed
    left-0
    top-14
    bottom-0
    w-220
    flex
    bg-panel
    z-10
    pt-1
  >
    <div w-68 border-r-2 flex flex-col justify-start items-center class="border-r-gray-900/10">
      <div class="flex cursor-pointer w-full h-12 justify-start items-center hover:bg-select">
        <div flex w-10 justify-center items-center>
          <EcosystemIcon />
        </div>
        <div class="text-sm">
          日常保养与小修
        </div>
      </div>
      <div class="flex cursor-pointer w-full h-12 justify-start items-center hover:bg-select">
        <div flex w-10 justify-center items-center>
          <EcosystemIcon />
        </div>
        <div class="text-sm">
          日常保养与小修
        </div>
      </div>
      <div class="flex cursor-pointer w-full h-12 justify-start items-center hover:bg-select">
        <div flex w-10 justify-center items-center>
          <EcosystemIcon />
        </div>
        <div class="text-sm">
          日常保养与小修
        </div>
      </div>
      <div class="flex cursor-pointer w-full h-12 justify-start items-center hover:bg-select">
        <div flex w-10 justify-center items-center>
          <EcosystemIcon />
        </div>
        <div class="text-sm">
          日常保养与小修
        </div>
      </div>
      <div class="flex cursor-pointer w-full h-12 justify-start items-center hover:bg-select">
        <div flex w-10 justify-center items-center>
          <EcosystemIcon />
        </div>
        <div class="text-sm">
          日常保养与小修
        </div>
      </div>
    </div>
    <div flex-1>
      <div class="px-4 my-6">
        <div class="border-b-1 border-b-gray-500">
          <input type="text" placeholder="请输入关键字搜索" class="bg-transparent text-gray-400 border-0 outline-none">
        </div>
      </div>
      <div class="flex flex-col mb-4 cursor-pointer w-full justify-start items-start ">
        <div class="flex justify-start items-center pt-2 px-4">
          最近访问
        </div>
        <div class="flex justify-between p-2 flex-wrap w-full items-center gap-2 ">
          <div class="hover:bg-black w-46 flex justify-start items-center text-xs font-bold p-2">
            云服务器 ECS
          </div>
          <div class="hover:bg-black w-46 flex justify-start items-center text-xs font-bold p-2">
            云服务器 ECS
          </div>
          <div class="hover:bg-black w-46 flex justify-start items-center text-xs font-bold p-2">
            云服务器 ECS
          </div>
          <div class="hover:bg-black w-46 flex justify-start items-center text-xs font-bold p-2">
            云服务器 ECS
          </div>
          <div class="hover:bg-black w-46 flex justify-start items-center text-xs font-bold p-2">
            云服务器 ECS
          </div>
          <div class="hover:bg-black w-46 flex justify-start items-center text-xs font-bold p-2">
            云服务器 ECS
          </div>
        </div>
      </div>
      <div class="flex flex-col cursor-pointer w-full justify-start items-start ">
        <div class="flex justify-between p-2 flex-wrap w-full items-start gap-2 ">
          <div class="w-46 flex flex-col justify-start items-start text-xs font-bold ">
            <div class="text-sky font-bold text-sm p-2">
              养护计划
            </div>
            <div class="w-46 flex flex-col justify-start items-start text-xs font-bold ">
              <div class="text-white font-bold text-sm underline decoration-2 decoration-sky-500 p-2">
                总计划
              </div>
              <div class="hover:bg-black w-46 flex justify-start items-center text-xs font-bold p-2">
                计划编制
              </div>
              <div class="hover:bg-black w-46 flex justify-start items-center text-xs font-bold p-2">
                计划汇总
              </div>
              <div class="hover:bg-black w-46 flex justify-start items-center text-xs font-bold p-2">
                计划月报
              </div>
              <div class="hover:bg-black w-46 flex justify-start items-center text-xs font-bold p-2 mb-4">
                计划年报
              </div>
            </div>
            <div class="w-46 flex flex-col justify-start items-start text-xs font-bold ">
              <div class="text-white font-bold text-sm underline decoration-2 decoration-sky-500 p-2">
                小修计划
              </div>
              <div class="hover:bg-black w-46 flex justify-start items-center text-xs font-bold p-2">
                变更申请
              </div>
              <div class="hover:bg-black w-46 flex justify-start items-center text-xs font-bold p-2">
                变更备忘录
              </div>
              <div class="hover:bg-black w-46 flex justify-start items-center text-xs font-bold p-2">
                计划对比
              </div>
              <div class="hover:bg-black w-46 flex justify-start items-center text-xs font-bold p-2 mb-4">
                计划进度
              </div>
            </div>
          </div>

          <div class="w-46 flex flex-col justify-start items-start text-xs font-bold ">
            <div class="text-sky font-bold text-sm p-2">
              养护计划
            </div>
            <div class="w-46 flex flex-col justify-start items-start text-xs font-bold ">
              <div class="text-white font-bold text-sm underline decoration-2 decoration-sky-500 p-2">
                总计划
              </div>
              <div class="hover:bg-black w-46 flex justify-start items-center text-xs font-bold p-2">
                计划编制
              </div>
              <div class="hover:bg-black w-46 flex justify-start items-center text-xs font-bold p-2">
                计划汇总
              </div>
              <div class="hover:bg-black w-46 flex justify-start items-center text-xs font-bold p-2">
                计划月报
              </div>
              <div class="hover:bg-black w-46 flex justify-start items-center text-xs font-bold p-2 mb-4">
                计划年报
              </div>
            </div>
            <div class="w-46 flex flex-col justify-start items-start text-xs font-bold ">
              <div class="text-white font-bold text-sm underline decoration-2 decoration-sky-500 p-2">
                小修计划
              </div>
              <div class="hover:bg-black w-46 flex justify-start items-center text-xs font-bold p-2">
                变更申请
              </div>
              <div class="hover:bg-black w-46 flex justify-start items-center text-xs font-bold p-2">
                变更备忘录
              </div>
              <div class="hover:bg-black w-46 flex justify-start items-center text-xs font-bold p-2">
                计划对比
              </div>
              <div class="hover:bg-black w-46 flex justify-start items-center text-xs font-bold p-2 mb-4">
                计划进度
              </div>
            </div>
          </div>

          <div class="w-46 flex flex-col justify-start items-start text-xs font-bold ">
            <div class="text-sky font-bold text-sm p-2">
              小修工程
            </div>
            <div class="w-46 flex flex-col justify-start items-start text-xs font-bold ">
              <div class="text-white font-bold text-sm underline decoration-2 decoration-sky-500 p-2">
                应急小修
              </div>
              <div class="hover:bg-black w-46 flex justify-start items-center text-xs font-bold p-2">
                派工单
              </div>
              <div class="hover:bg-black w-46 flex justify-start items-center text-xs font-bold p-2">
                验收申请
              </div>
              <div class="hover:bg-black w-46 flex justify-start items-center text-xs font-bold p-2">
                验收单
              </div>
              <div class="hover:bg-black w-46 flex justify-start items-center text-xs font-bold p-2 mb-4">
                月报表
              </div>
            </div>
            <div class="w-46 flex flex-col justify-start items-start text-xs font-bold ">
              <div class="text-white font-bold text-sm underline decoration-2 decoration-sky-500 p-2">
                小修计划
              </div>
              <div class="hover:bg-black w-46 flex justify-start items-center text-xs font-bold p-2">
                变更申请
              </div>
              <div class="hover:bg-black w-46 flex justify-start items-center text-xs font-bold p-2">
                变更备忘录
              </div>
              <div class="hover:bg-black w-46 flex justify-start items-center text-xs font-bold p-2">
                计划对比
              </div>
              <div class="hover:bg-black w-46 flex justify-start items-center text-xs font-bold p-2 mb-4">
                计划进度
              </div>
            </div>
          </div>

          <div class="w-46 flex flex-col justify-start items-start text-xs font-bold ">
            <div class="text-sky font-bold text-sm p-2">
              养护计划
            </div>
            <div class="w-46 flex flex-col justify-start items-start text-xs font-bold ">
              <div class="text-white font-bold text-sm underline decoration-2 decoration-sky-500 p-2">
                总计划
              </div>
              <div class="hover:bg-black w-46 flex justify-start items-center text-xs font-bold p-2">
                计划编制
              </div>
              <div class="hover:bg-black w-46 flex justify-start items-center text-xs font-bold p-2">
                计划汇总
              </div>
              <div class="hover:bg-black w-46 flex justify-start items-center text-xs font-bold p-2">
                计划月报
              </div>
              <div class="hover:bg-black w-46 flex justify-start items-center text-xs font-bold p-2 mb-4">
                计划年报
              </div>
            </div>
            <div class="w-46 flex flex-col justify-start items-start text-xs font-bold ">
              <div class="text-white font-bold text-sm underline decoration-2 decoration-sky-500 p-2">
                小修计划
              </div>
              <div class="hover:bg-black w-46 flex justify-start items-center text-xs font-bold p-2">
                变更申请
              </div>
              <div class="hover:bg-black w-46 flex justify-start items-center text-xs font-bold p-2">
                变更备忘录
              </div>
              <div class="hover:bg-black w-46 flex justify-start items-center text-xs font-bold p-2">
                计划对比
              </div>
              <div class="hover:bg-black w-46 flex justify-start items-center text-xs font-bold p-2 mb-4">
                计划进度
              </div>
            </div>
          </div>

          <div class="w-46 flex flex-col justify-start items-start text-xs font-bold ">
            <div class="text-sky font-bold text-sm p-2">
              养护计划
            </div>
            <div class="w-46 flex flex-col justify-start items-start text-xs font-bold ">
              <div class="text-white font-bold text-sm underline decoration-2 decoration-sky-500 p-2">
                总计划
              </div>
              <div class="hover:bg-black w-46 flex justify-start items-center text-xs font-bold p-2">
                计划编制
              </div>
              <div class="hover:bg-black w-46 flex justify-start items-center text-xs font-bold p-2">
                计划汇总
              </div>
              <div class="hover:bg-black w-46 flex justify-start items-center text-xs font-bold p-2">
                计划月报
              </div>
              <div class="hover:bg-black w-46 flex justify-start items-center text-xs font-bold p-2 mb-4">
                计划年报
              </div>
            </div>
            <div class="w-46 flex flex-col justify-start items-start text-xs font-bold ">
              <div class="text-white font-bold text-sm underline decoration-2 decoration-sky-500 p-2">
                小修计划
              </div>
              <div class="hover:bg-black w-46 flex justify-start items-center text-xs font-bold p-2">
                变更申请
              </div>
              <div class="hover:bg-black w-46 flex justify-start items-center text-xs font-bold p-2">
                变更备忘录
              </div>
              <div class="hover:bg-black w-46 flex justify-start items-center text-xs font-bold p-2">
                计划对比
              </div>
              <div class="hover:bg-black w-46 flex justify-start items-center text-xs font-bold p-2 mb-4">
                计划进度
              </div>
            </div>
          </div>

          <div class="w-46 flex flex-col justify-start items-start text-xs font-bold ">
            <div class="text-sky font-bold text-sm p-2">
              养护计划
            </div>
            <div class="w-46 flex flex-col justify-start items-start text-xs font-bold ">
              <div class="text-white font-bold text-sm underline decoration-2 decoration-sky-500 p-2">
                总计划
              </div>
              <div class="hover:bg-black w-46 flex justify-start items-center text-xs font-bold p-2">
                计划编制
              </div>
              <div class="hover:bg-black w-46 flex justify-start items-center text-xs font-bold p-2">
                计划汇总
              </div>
              <div class="hover:bg-black w-46 flex justify-start items-center text-xs font-bold p-2">
                计划月报
              </div>
              <div class="hover:bg-black w-46 flex justify-start items-center text-xs font-bold p-2 mb-4">
                计划年报
              </div>
            </div>
            <div class="w-46 flex flex-col justify-start items-start text-xs font-bold ">
              <div class="text-white font-bold text-sm underline decoration-2 decoration-sky-500 p-2">
                小修计划
              </div>
              <div class="hover:bg-black w-46 flex justify-start items-center text-xs font-bold p-2">
                变更申请
              </div>
              <div class="hover:bg-black w-46 flex justify-start items-center text-xs font-bold p-2">
                变更备忘录
              </div>
              <div class="hover:bg-black w-46 flex justify-start items-center text-xs font-bold p-2">
                计划对比
              </div>
              <div class="hover:bg-black w-46 flex justify-start items-center text-xs font-bold p-2 mb-4">
                计划进度
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
