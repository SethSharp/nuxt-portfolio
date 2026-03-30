<script setup lang="ts">
import { useDark, useToggle } from "@vueuse/core"
import { Sun, Moon } from "lucide-vue-next"

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
  <button
    class="p-2 rounded-md text-muted-foreground hover:text-foreground transition"
    @click="toggleDark()"
  >
    <Sun v-if="isDark" class="size-5" />
    <Moon v-else class="size-5" />
  </button>
</template>
