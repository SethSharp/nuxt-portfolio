<script setup lang="ts">
import { type Link } from "~/types"

defineProps<{
  link: Link
}>()
</script>

<template>
  <a :href="link.href"
     class="font-normal font-mono text-muted-foreground transition hover:text-foreground" :class="{'!text-primary' : link.active}">
    {{ link.name }}
  </a>
</template>