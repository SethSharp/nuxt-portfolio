<script setup lang="ts">
import { Github, Linkedin, Twitter, MapPin } from "lucide-vue-next"

const { reveal } = useScrollReveal()

useSeoMeta({
  title: 'Contact - Seth Sharp',
  description: 'Get in touch with Seth Sharp - software developer based in Adelaide.'
})

const socials = [
  {
    name: 'GitHub',
    handle: '@SethSharp',
    href: 'https://github.com/SethSharp',
    icon: Github,
  },
  {
    name: 'LinkedIn',
    handle: 'Seth Sharp',
    href: 'https://www.linkedin.com/in/seth-sharp/',
    icon: Linkedin,
  },
  {
    name: 'X (Twitter)',
    handle: '@seth_sharp_01',
    href: 'https://x.com/seth_sharp_01',
    icon: Twitter,
  },
]
</script>

<template>
  <div class="space-y-12">
    <div class="space-y-4">
      <HeadingsPage>Contact</HeadingsPage>
      <p class="text-muted-foreground mt-4">
        Always happy to connect - whether it's about a project, an opportunity, or just to chat about tech.
      </p>
    </div>

    <div :ref="reveal" class="grid sm:grid-cols-2 gap-6 max-w-2xl">
      <div class="flex items-center gap-4 p-5 rounded-lg bg-card ring-1 ring-border">
        <div class="p-2 rounded-lg bg-primary/10 text-primary">
          <MapPin class="size-5" />
        </div>
        <div>
          <p class="text-sm font-medium text-foreground">Location</p>
          <p class="text-sm text-muted-foreground">Adelaide, SA</p>
        </div>
      </div>

      <a
        v-for="social in socials"
        :key="social.name"
        :href="social.href"
        target="_blank"
        class="flex items-center gap-4 p-5 rounded-lg bg-card ring-1 ring-border hover:ring-primary/50 transition group"
      >
        <div class="p-2 rounded-lg bg-primary/10 text-primary">
          <component :is="social.icon" class="size-5" />
        </div>
        <div>
          <p class="text-sm font-medium text-foreground group-hover:text-primary transition">{{ social.name }}</p>
          <p class="text-sm text-muted-foreground">{{ social.handle }}</p>
        </div>
      </a>
    </div>
  </div>
</template>
