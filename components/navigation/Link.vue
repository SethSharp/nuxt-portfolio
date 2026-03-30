<script setup lang="ts">
import { type Link } from "~/types"

defineProps<{
  link: Link
}>()
</script>

<template>
  <NuxtLink
    :to="link.href"
    class="font-mono text-sm text-muted-foreground transition hover:text-foreground"
    :class="{ '!text-primary font-medium': link.active }"
  >
    {{ link.name }}
  </NuxtLink>
</template>
