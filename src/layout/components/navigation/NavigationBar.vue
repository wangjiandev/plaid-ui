<script setup lang="ts">
import { useMenuStore } from '@/stores/menu'
const menuStore = useMenuStore()
</script>

<template>
  <div class="absolute top-14 bottom-0 z-99 flex flex-row duration-500" :class="menuStore.isVisible ? 'left-0' : '-left-full'">
    <div class="w-68 flex flex-col justify-start items-center bg-nav dark:bg-lnav">
      <div class="flex mt-4 flex-row cursor-pointer w-full h-10 justify-start items-center  text-gray-500 font-bold">
        <div class="text-xs ml-4">
          功能导航
        </div>
      </div>
      <div class="flex flex-row cursor-pointer w-full h-12 justify-start items-center hover:bg-select/20">
        <div flex w-10 justify-center items-center>
          <i class="fa-duotone fa-align-justify" />
        </div>
        <div class="text-sm">
          自定义收藏功能
        </div>
      </div>
    </div>
    <div class="h-full w-0.5 bg-gray-500/10 " />
    <div class="absolute top-0 bottom-0 w-180 pl-10 -z-1 bg-nav dark:bg-lnav duration-1000" :class="menuStore.isVisible ? 'left-68' : '-left-68'">
      <div class="pl-4 pr-16 my-5">
        <div class="border-b-1 border-b-gray-500">
          <input type="text" placeholder="请输入关键字搜索" class="bg-transparent text-gray-400 border-0 outline-none mb-2">
        </div>
      </div>
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
      <div class="flex flex-col cursor-pointer w-full justify-start items-start ">
        <div class="flex flex-row justify-between p-2 flex-wrap w-full items-start gap-2 ">
          <div class="w-46 flex flex-col justify-start items-start text-xs font-bold ">
            <div class="text-sky font-bold text-sm p-2">
              养护计划
            </div>
            <div class="w-46 flex flex-col justify-start items-start text-xs font-bold ">
              <div class="text-white font-bold text-sm underline decoration-2 decoration-sky-500 p-2">
                总计划
              </div>
              <div class="hover:bg-black w-46 flex justify-start items-start text-xs font-bold p-2">
                计划编制
              </div>
              <div class="hover:bg-black w-46 flex justify-start items-start text-xs font-bold p-2">
                计划汇总
              </div>
              <div class="hover:bg-black w-46 flex justify-start items-start text-xs font-bold p-2">
                计划月报
              </div>
              <div class="hover:bg-black w-46 flex justify-start items-start text-xs font-bold p-2 mb-4">
                计划年报
              </div>
            </div>
            <div class="w-46 flex flex-col justify-start items-start text-xs font-bold ">
              <div class="text-white font-bold text-sm underline decoration-2 decoration-sky-500 p-2">
                小修计划
              </div>
              <div class="hover:bg-black w-46 flex justify-start items-start text-xs font-bold p-2">
                变更申请
              </div>
              <div class="hover:bg-black w-46 flex justify-start items-start text-xs font-bold p-2">
                变更备忘录
              </div>
              <div class="hover:bg-black w-46 flex justify-start items-start text-xs font-bold p-2">
                计划对比
              </div>
              <div class="hover:bg-black w-46 flex justify-start items-start text-xs font-bold p-2 mb-4">
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
              <div class="hover:bg-black w-46 flex justify-start items-start text-xs font-bold p-2">
                计划编制
              </div>
              <div class="hover:bg-black w-46 flex justify-start items-start text-xs font-bold p-2">
                计划汇总
              </div>
              <div class="hover:bg-black w-46 flex justify-start items-start text-xs font-bold p-2">
                计划月报
              </div>
              <div class="hover:bg-black w-46 flex justify-start items-start text-xs font-bold p-2 mb-4">
                计划年报
              </div>
            </div>
            <div class="w-46 flex flex-col justify-start items-start text-xs font-bold ">
              <div class="text-white font-bold text-sm underline decoration-2 decoration-sky-500 p-2">
                小修计划
              </div>
              <div class="hover:bg-black w-46 flex justify-start items-start text-xs font-bold p-2">
                变更申请
              </div>
              <div class="hover:bg-black w-46 flex justify-start items-start text-xs font-bold p-2">
                变更备忘录
              </div>
              <div class="hover:bg-black w-46 flex justify-start items-start text-xs font-bold p-2">
                计划对比
              </div>
              <div class="hover:bg-black w-46 flex justify-start items-start text-xs font-bold p-2 mb-4">
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
              <div class="hover:bg-black w-46 flex justify-start items-start text-xs font-bold p-2">
                派工单
              </div>
              <div class="hover:bg-black w-46 flex justify-start items-start text-xs font-bold p-2">
                验收申请
              </div>
              <div class="hover:bg-black w-46 flex justify-start items-start text-xs font-bold p-2">
                验收单
              </div>
              <div class="hover:bg-black w-46 flex justify-start items-start text-xs font-bold p-2 mb-4">
                月报表
              </div>
            </div>
            <div class="w-46 flex flex-col justify-start items-start text-xs font-bold ">
              <div class="text-white font-bold text-sm underline decoration-2 decoration-sky-500 p-2">
                小修计划
              </div>
              <div class="hover:bg-black w-46 flex justify-start items-start text-xs font-bold p-2">
                变更申请
              </div>
              <div class="hover:bg-black w-46 flex justify-start items-start text-xs font-bold p-2">
                变更备忘录
              </div>
              <div class="hover:bg-black w-46 flex justify-start items-start text-xs font-bold p-2">
                计划对比
              </div>
              <div class="hover:bg-black w-46 flex justify-start items-start text-xs font-bold p-2 mb-4">
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
              <div class="hover:bg-black w-46 flex justify-start items-start text-xs font-bold p-2">
                计划编制
              </div>
              <div class="hover:bg-black w-46 flex justify-start items-start text-xs font-bold p-2">
                计划汇总
              </div>
              <div class="hover:bg-black w-46 flex justify-start items-start text-xs font-bold p-2">
                计划月报
              </div>
              <div class="hover:bg-black w-46 flex justify-start items-start text-xs font-bold p-2 mb-4">
                计划年报
              </div>
            </div>
            <div class="w-46 flex flex-col justify-start items-start text-xs font-bold ">
              <div class="text-white font-bold text-sm underline decoration-2 decoration-sky-500 p-2">
                小修计划
              </div>
              <div class="hover:bg-black w-46 flex justify-start items-start text-xs font-bold p-2">
                变更申请
              </div>
              <div class="hover:bg-black w-46 flex justify-start items-start text-xs font-bold p-2">
                变更备忘录
              </div>
              <div class="hover:bg-black w-46 flex justify-start items-start text-xs font-bold p-2">
                计划对比
              </div>
              <div class="hover:bg-black w-46 flex justify-start items-start text-xs font-bold p-2 mb-4">
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
              <div class="hover:bg-black w-46 flex justify-start items-start text-xs font-bold p-2">
                计划编制
              </div>
              <div class="hover:bg-black w-46 flex justify-start items-start text-xs font-bold p-2">
                计划汇总
              </div>
              <div class="hover:bg-black w-46 flex justify-start items-start text-xs font-bold p-2">
                计划月报
              </div>
              <div class="hover:bg-black w-46 flex justify-start items-start text-xs font-bold p-2 mb-4">
                计划年报
              </div>
            </div>
            <div class="w-46 flex flex-col justify-start items-start text-xs font-bold ">
              <div class="text-white font-bold text-sm underline decoration-2 decoration-sky-500 p-2">
                小修计划
              </div>
              <div class="hover:bg-black w-46 flex justify-start items-start text-xs font-bold p-2">
                变更申请
              </div>
              <div class="hover:bg-black w-46 flex justify-start items-start text-xs font-bold p-2">
                变更备忘录
              </div>
              <div class="hover:bg-black w-46 flex justify-start items-start text-xs font-bold p-2">
                计划对比
              </div>
              <div class="hover:bg-black w-46 flex justify-start items-start text-xs font-bold p-2 mb-4">
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
              <div class="hover:bg-black w-46 flex justify-start items-start text-xs font-bold p-2">
                计划编制
              </div>
              <div class="hover:bg-black w-46 flex justify-start items-start text-xs font-bold p-2">
                计划汇总
              </div>
              <div class="hover:bg-black w-46 flex justify-start items-start text-xs font-bold p-2">
                计划月报
              </div>
              <div class="hover:bg-black w-46 flex justify-start items-start text-xs font-bold p-2 mb-4">
                计划年报
              </div>
            </div>
            <div class="w-46 flex flex-col justify-start items-start text-xs font-bold ">
              <div class="text-white font-bold text-sm underline decoration-2 decoration-sky-500 p-2">
                小修计划
              </div>
              <div class="hover:bg-black w-46 flex justify-start items-start text-xs font-bold p-2">
                变更申请
              </div>
              <div class="hover:bg-black w-46 flex justify-start items-start text-xs font-bold p-2">
                变更备忘录
              </div>
              <div class="hover:bg-black w-46 flex justify-start items-start text-xs font-bold p-2">
                计划对比
              </div>
              <div class="hover:bg-black w-46 flex justify-start items-start text-xs font-bold p-2 mb-4">
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
