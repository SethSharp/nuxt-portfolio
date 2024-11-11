<script setup lang="ts">
import { useRoute } from "vue-router"
import MainFooter from "~/components/MainFooter.vue"

const route = useRoute()
const currentRoute = computed(() => route.path)

const links = computed(() => [
  {
    href: '/',
    name: 'Home',
    active: currentRoute.value === '/'
  },
  {
    href: '/projects',
    name: 'Projects',
    active: currentRoute.value === '/projects'
  },
  {
    href: '/experience',
    name: 'Experience',
    active: currentRoute.value === '/experience'
  },
  {
    href: '/contact',
    name: 'Contact',
    active: currentRoute.value === '/contact'
  },
])
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap');
</style>

<template>
  <div class="font-sans antialiased bg-gray-900">
    <header>
      <NavigationBar :links="links" />
    </header>

    <Circuit />

    <main>
      <section class="min-h-screen relative mt-4">
        <div class="md:flex md:w-4/5 mx-4 md:mx-auto mt-2 sm:mt-8 mb-12">
          <NuxtLayout>
            <NuxtPage />
          </NuxtLayout>
        </div>
      </section>
    </main>

    <MainFooter :links="links" />
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>