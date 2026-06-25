<script setup lang="ts">
import { Menu, Search } from "lucide-vue-next"
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@sethsharp/lumuix"
import { type Link } from "~/types"

defineProps<{
  links: Link[]
}>()

const isMac = computed(() => {
  if (import.meta.server) return true
  return navigator.userAgent.includes('Mac')
})
</script>

<template>
  <nav class="flex items-center justify-between py-3 px-4 sm:px-0">
    <NuxtLink to="/">
      <img
        src="~/assets/images/profile-picture.png"
        alt="Seth Sharp"
        class="size-8 rounded-full ring-1 ring-border hover:ring-primary transition"
      />
    </NuxtLink>

    <div class="hidden sm:flex items-center gap-6">
      <NavigationLink v-for="link in links" :key="link.href" :link="link" />
      <button
        class="hidden sm:inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition px-2 py-1 rounded-md border border-border"
        @click="$emit('openCommand')"
      >
        <Search class="size-3" />
        <span class="font-mono">{{ isMac ? '⌘' : 'Ctrl+' }}K</span>
      </button>
      <NavigationModeToggle />
    </div>

    <div class="sm:hidden flex items-center gap-2">
      <NavigationModeToggle />
      <Sheet>
        <SheetTrigger>
          <Menu class="size-6 text-muted-foreground hover:text-foreground transition" />
        </SheetTrigger>
        <SheetContent side="top">
          <SheetClose class="flex flex-col gap-3 pt-4">
            <NavigationLink v-for="link in links" :key="link.href" :link="link" />
          </SheetClose>
        </SheetContent>
      </Sheet>
    </div>
  </nav>
</template>
