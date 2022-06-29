<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
  <div class="greetings">
    <h1 class="green">
      {{ msg }}
    </h1>
    <h2 bg-red px-4 text-center rounded py-2 mb-2>
      Test unocss
    </h2>
    <h3>
      Youve successfully created a project with
      <a target="_blank" href="https://vitejs.dev/">
        Vite</a>
      +
      <a target="_blank" class="text-3xl" href="https://vuejs.org/">Vue 3</a>
      . What's next?
    </h3>
  </div>
</template>

<style scoped>
  h1 {
    font-weight: 500;
    font-size: 2.6rem;
    top: -10px;
  }

  h3 {
    font-size: 1.2rem;
  }

  .greetings h1,
  .greetings h3 {
    text-align: center;
  }

  @media (min-width: 1024px) {
    .greetings h1,
    .greetings h3 {
      text-align: left;
    }
  }
</style>
