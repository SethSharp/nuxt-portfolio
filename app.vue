<script setup lang="ts">
import { useRoute } from "vue-router"
import MainFooter from "~/components/MainFooter.vue"

useHead({
  title: 'Seth Sharp Portfolio Site',
  meta: [
    { name: 'description', content: 'This is the portfolio site for Seth Sharp' }
  ],
})

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
    active: currentRoute.value.match(/^\/projects\/?$/),
  },
  {
    href: '/experiences',
    name: 'Experiences',
    active: currentRoute.value.match(/^\/experiences\/?$/),
  },
  {
    href: '/contact',
    name: 'Contact',
    active: currentRoute.value.match(/^\/contact\/?$/),
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

    <MainFooter :links="links" />
  </div>
</template>
