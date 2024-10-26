<script setup lang="ts">
useHead({
  title: 'Seth Sharp Portfolio',
  meta: [
    { name: 'description', content: 'This is the portfolio site for Seth Sharp' }
  ],
  bodyAttrs: {
    class: 'test'
  },
})
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
