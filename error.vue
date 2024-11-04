<script setup lang="ts">
const error = useError()
</script>

<template>
  <div class="flex items-center justify-center h-screen">
    <div class="text-center flex flex-col space-y-4">
      <h1 class="text-5xl text-primary"> {{ error.message }} </h1>
      <p class="text-lg text-gray-600">Looks like you've entered a black hole.</p>
      <NuxtLink to="/" class="bg-primary w-fit mx-auto hover:bg-primary/80 text-white font-bold py-2 px-4 mt-6 rounded">
        Warp Back Home
      </NuxtLink>
    </div>
  </div>
</template>