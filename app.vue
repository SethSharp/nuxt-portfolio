<script setup lang="ts">
import { useDark } from "@vueuse/core"
import { useRoute } from "vue-router"

useDark()

const route = useRoute()
const currentRoute = computed(() => route.path)

const links = computed(() => [
  {
    href: '/',
    name: 'Home',
    active: currentRoute.value === '/'
  },
  {
    href: '/experience',
    name: 'Experience',
    active: currentRoute.value === '/experience'
  },
  {
    href: '/projects',
    name: 'Projects',
    active: currentRoute.value === '/projects'
  },
  {
    href: '/contact',
    name: 'Contact',
    active: currentRoute.value === '/contact'
  },
])
</script>

<template>
  <div class="font-sans antialiased bg-background text-foreground min-h-screen">
    <header class="sticky z-10 top-0 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div class="max-w-5xl mx-auto">
        <NavigationBar :links="links" />
      </div>
    </header>

    <Circuit />

    <main class="relative">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-16">
        <NuxtLayout>
          <NuxtPage />
        </NuxtLayout>
      </div>
    </main>

    <MainFooter />
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap');
</style>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.3s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  transform: translateY(8px);
}
</style>
