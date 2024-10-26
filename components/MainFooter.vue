<script setup lang="ts">
import { type Link } from "~/types"

defineProps<{
  links: Link[]
}>()

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

    <div class="p-4 md:flex justify-between">
      <p class="text-sm my-auto leading-5 text-gray-400">
        &copy; 2024 SethSharp
      </p>

      <div class="flex gap-4 justify-center">
        <Link v-for="link in links" :href="link.href" :active="link.active">
          {{ link.name }}
        </Link>
      </div>
    </div>
  </footer>
</template>