<script setup lang="ts">
import { type Link } from "~/types"

defineProps<{
  links: Link[]
}>()
</script>

<template>
  <footer class=" border-t-2 border-primary z-20">
    <div class="p-1 sm:p-4 md:flex md:justify-between font-semibold space-y-3">
      <div class="space-y-3">
        <div class="space-x-2 sm:space-x-4 text-center">
          <NavigationResponsiveLink v-for="link in links" :link="link" />
        </div>

        <p class="text-sm my-auto leading-5 text-muted-foreground text-center md:text-left">
          &copy; 2024 SethSharp
        </p>
      </div>

      <div class="flex gap-4 justify-center text-muted-foreground">
        <a class="hover:scale-105 hover:animate-pulse" href="https://github.com/SethSharp" target="_blank">
          <IconsGitHub class="size-8 transition ease-in-out delay-0 duration-50"/>
        </a>

        <a class="hover:scale-105 hover:animate-pulse" href="https://www.linkedin.com/in/seth-sharp/" target="_blank">
          <IconsLinkedIn class="size-8 transition ease-in-out delay-0 duration-50"/>
        </a>

        <a class="hover:scale-105 hover:animate-pulse" href="https://x.com/seth_sharp_01" target="_blank">
          <IconsTwitter class="size-8 transition ease-in-out delay-0 duration-50" />
        </a>
      </div>
    </div>
  </footer>
</template>