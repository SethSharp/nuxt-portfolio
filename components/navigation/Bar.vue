<script setup lang="ts">
import { Bars3Icon } from "@heroicons/vue/24/outline"
import {Sheet, SheetClose, SheetContent, SheetTrigger, LumuixModeToggle} from "@sethsharp/lumuix"
import { type Link } from "~/types"

defineProps<{
  links: Link[]
}>()

const open = ref(false)
</script>

<template>
  <nav class="h-fit sm:py-4 p-2">
    <div class="h-full gap-6 justify-center hidden sm:flex">
      <div class="my-auto space-x-4">
        <NavigationLink v-for="link in links" :link="link" />
      </div>
    </div>

    <Sheet>
      <SheetTrigger class="sm:hidden" as-child>
        <Bars3Icon class="size-10 text-gray-500 hover:bg-gray-800"/>
      </SheetTrigger>

      <SheetContent side="top">
        <div
            class="rounded w-full flex justify-start shadow-2xl p-3 space-y-2 flex-col">
          <NavigationLink v-for="link in links" :link="link" />
        </div>
      </SheetContent>
    </Sheet>
  </nav>
</template>