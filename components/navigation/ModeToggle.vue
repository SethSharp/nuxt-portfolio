<script setup lang="ts">
import { useDark, useToggle } from "@vueuse/core"
import { Sun, Moon } from "lucide-vue-next"

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
  <button
    class="relative p-2 rounded-md text-foreground hover:text-primary size-9"
    @click="toggleDark()"
  >
    <Sun
      class="size-5 absolute inset-0 m-auto transition-all duration-500"
      :style="{
        transform: isDark ? 'rotate(0deg) scale(1)' : 'rotate(-90deg) scale(0)',
        opacity: isDark ? 1 : 0,
      }"
    />
    <Moon
      class="size-5 absolute inset-0 m-auto transition-all duration-500"
      :style="{
        transform: isDark ? 'rotate(90deg) scale(0)' : 'rotate(0deg) scale(1)',
        opacity: isDark ? 0 : 1,
      }"
    />
  </button>
</template>
