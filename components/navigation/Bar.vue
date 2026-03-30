<script setup lang="ts">
import { Bars3Icon } from "@heroicons/vue/24/outline"
import {Sheet, SheetClose, SheetContent, SheetTrigger} from "@codinglabsau/gooey"
import { type Link } from "~/types"

defineProps<{
  links: Link[]
}>()
</script>

<template>
  <nav class="h-fit sm:py-4 p-2 z-10">
    <div class="h-full gap-6 justify-center hidden sm:flex">
      <div class="my-auto space-x-4">
        <NavigationLink v-for="link in links" :link="link" />
      </div>
      <NavigationModeToggle />
    </div>

    <Sheet>
      <div class="sm:hidden flex justify-between items-center">
        <SheetTrigger>
          <Bars3Icon class="size-10 text-muted-foreground hover:text-foreground"/>
        </SheetTrigger>
        <NavigationModeToggle />
      </div>

      <SheetContent side="top">
        <SheetClose class="flex space-y-2 flex-col">
          <NavigationLink v-for="link in links" :link="link" />
        </SheetClose>
      </SheetContent>
    </Sheet>
  </nav>
</template>
