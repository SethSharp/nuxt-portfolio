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
    active: currentRoute.value.match(/^\/projects\/?$/),
  },
  {
    href: '/experience',
    name: 'Experience',
    active: currentRoute.value.match(/^\/experience\/?$/),
  },
  {
    href: '/contact',
    name: 'Contact',
    active: currentRoute.value.match(/^\/contact\/?$/),
  },
])

useSeoMeta({
  title: "Seth Sharp",
  description: "Hey I am Seth Sharp, a Software Developer located in SE QLD on the Gold Coast. I have been a Software Developer over the last couple of years and have developed skills in multiple libraries and frameworks to push my best work"
})
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
