<script setup lang="ts">
import { Bars3Icon } from "@heroicons/vue/24/outline"
import {Sheet, SheetClose, SheetContent, SheetTrigger, LumuixModeToggle} from "@sethsharp/lumuix"
import { type Link } from "~/types"

defineProps<{
  links: Link[]
}>()
</script>

<template>
  <nav class="h-fit sm:py-4 p-2">
    <div class="h-full gap-6 justify-center hidden sm:flex">
      <div class="my-auto space-x-4">
        <NavigationLink v-for="link in links" :link="link" />
      </div>
    </div>

    <Sheet>
      <SheetTrigger class="sm:hidden">
        <Bars3Icon class="size-10 text-gray-500 hover:bg-gray-800"/>
      </SheetTrigger>

      <SheetContent side="top" class="flex space-y-2 flex-col">
        <NavigationLink v-for="link in links" :link="link" />
      </SheetContent>
    </Sheet>
  </nav>
</template>