<script setup lang="ts">
import { Bars3Icon } from "@heroicons/vue/24/outline"
import { type Link } from "~/types"

defineProps<{
  links: Link[]
}>()

const open = ref(false)
</script>

<template>
  <nav class="h-fit sm:py-4 z-10 w-full">
    <div class="h-full gap-6 justify-center hidden sm:flex">
      <div class="my-auto space-x-4">
        <NavigationLink v-for="link in links" :link="link" />
      </div>
    </div>

    <div class="sm:hidden">
      <div class="mx-4 relative">
        <div class="flex gap-6 py-3">
          <button @click="open = ! open" class="hover:bg-gray-800 rounded transition cursor-pointer">
            <Bars3Icon class="size-10 text-gray-500"/>
          </button>
        </div>
        <div v-if="open" class="flex transition justify-start mt-4 z-50">
          <div
              class="bg-gray-700 rounded w-full sm:w-1/2 z-50 absolute text-left shadow-2xl px-6 py-6 space-y-2 grid">
            <NavigationLink v-for="link in links" :link="link" />
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>