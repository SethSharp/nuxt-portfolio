<script setup lang="ts">
import { type Link } from "~/types"

defineProps<{
  link: Link
}>()
</script>

<template>
  <a :href="link.href"
     class="font-normal font-mono text-slate-400 transition hover:text-gray-200 text-lg sm:text-2xl" :class="{'!text-primary-500' : link.active}">
    {{ link.name }}
  </a>
</template>