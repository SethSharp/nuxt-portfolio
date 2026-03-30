<script setup lang="ts">
import { Github, Linkedin, Twitter } from "lucide-vue-next"
</script>

<template>
  <footer class="border-t border-border/50 mt-24">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
      <p class="text-sm text-muted-foreground">
        &copy; {{ new Date().getFullYear() }} Seth Sharp
      </p>

      <div class="flex items-center gap-4">
        <a href="https://github.com/SethSharp" target="_blank" class="text-muted-foreground hover:text-foreground transition">
          <Github class="size-5" />
        </a>
        <a href="https://www.linkedin.com/in/seth-sharp/" target="_blank" class="text-muted-foreground hover:text-foreground transition">
          <Linkedin class="size-5" />
        </a>
        <a href="https://x.com/seth_sharp_01" target="_blank" class="text-muted-foreground hover:text-foreground transition">
          <Twitter class="size-5" />
        </a>
      </div>
    </div>
  </footer>
</template>
