<script setup lang="ts">
import { type Link } from "~/types"
// const environment = useEnvironment()

defineProps<{
  links: Link[]
}>()

// const links = environment.socialLinks
</script>

<template>
  <footer class="h-fit border-t-2 border-primary-500 z-20">
    <div class="p-8">
      <div class="sm:flex space-y-4">
        <div class="font-mono text-xl">
          <div>
            <ul class="text-gray-400 pl-2 space-y-3 mt-4">
              <Link v-for="link in links" :link="link" />
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="p-4 md:flex justify-between font-semibold">
      <p class="text-sm my-auto leading-5 text-gray-400">
        &copy; 2024 SethSharp
      </p>

      <div class="flex gap-4 justify-center">
        <div class="flex gap-4 text-slate-500">
          <div class="flex gap-4 text-slate-500">
            <a class="flex gap-4 my-2" href="https://github.com/SethSharp" target="_blank">
              <IconsGitHub class="size-8 transition ease-in-out delay-0 hover:-translate-y-1 duration-50"/>
            </a>

            <a class="flex gap-4 my-2" href="https://www.linkedin.com/in/seth-sharp/" target="_blank">
              <IconsLinkedIn class="size-8 transition ease-in-out delay-0 hover:-translate-y-1 duration-50"/>
            </a>

            <a class="flex gap-4 my-2 hover:text-gray-900" href="mailto:sesharp@outlook.com">
              <IconsMail class="size-8 transition ease-in-out delay-0 hover:-translate-y-1 duration-50"/>
            </a>

            <a class="flex gap-4 my-2" href="https://x.com/seth_sharp_01" target="_blank">
              <IconsTwitter class="size-8 transition ease-in-out delay-0 hover:-translate-y-1 duration-50" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>