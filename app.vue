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

<template>
  <div class="font-sans antialiased bg-white dark:bg-gray-800">
    <header>
      <NavigationBar :links="links" />
    </header>

    <main>
      <section class="min-h-screen relative mt-4">
        <div class="md:flex md:w-4/5 mx-4 md:mx-auto mt-2 sm:mt-8 mb-12">
          <NuxtLayout>
            <NuxtPage />
          </NuxtLayout>
        </div>
      </section>
    </main>

    <MainFooter />
  </div>
</template>
