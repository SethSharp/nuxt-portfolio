<script setup lang="ts">
import { Github, Linkedin, ExternalLink } from "lucide-vue-next"
import { Separator } from "@codinglabsau/gooey"

import laravelIcon from '~/assets/images/icons/laravel-icon.png'
import vueIcon from '~/assets/images/icons/vue-icon.png'
import twIcon from '~/assets/images/icons/tw-icon.png'
import lwIcon from '~/assets/images/icons/lw-icon.png'

useSeoMeta({
  title: "Seth Sharp - Software Developer",
  description: "Software Developer based in Adelaide, building scalable web applications with Laravel, Vue, and AWS."
})

const tech = [
  { name: 'Laravel', icon: laravelIcon },
  { name: 'Vue.js', icon: vueIcon },
  { name: 'Tailwind CSS', icon: twIcon },
  { name: 'Livewire', icon: lwIcon },
]

const highlights = [
  {
    title: 'Live Event Streaming',
    description: 'Led the design and continued ownership of a live event streaming feature on AWS IVS - powering real-time auctions for thousands of concurrent viewers.',
    tag: 'AWS IVS',
  },
  {
    title: 'Payment Integration',
    description: 'Architected the platform\'s first Stripe Checkout integration with webhook-driven event processing for payment verification.',
    tag: 'Stripe',
  },
  {
    title: 'Performance Optimisation',
    description: 'Led a performance initiative in response to user-reported latency during high-traffic live events - identified bottlenecks, broke work into atomic improvements, and delivered incrementally.',
    tag: 'Optimisation',
  },
]
</script>

<template>
  <div class="space-y-24">
    <!-- Hero -->
    <section class="pt-8 md:pt-16">
      <div class="flex flex-col md:flex-row items-center gap-12">
        <div class="flex-1 space-y-6">
          <div>
            <p class="text-primary font-mono text-sm mb-2">G'day, I'm</p>
            <HeadingsMain>
              <h1>Seth Sharp</h1>
            </HeadingsMain>
            <p class="text-xl md:text-2xl text-muted-foreground font-light mt-4">
              Software Developer | AI Developer
            </p>
          </div>

          <p class="text-muted-foreground leading-relaxed max-w-lg">
            Passionate about building web applications with Laravel, Vue, and AWS.
            Currently developing real-time e-commerce and live event systems at
            <span class="text-foreground font-medium">Coding Labs</span>.
          </p>

          <div class="flex items-center gap-4 pt-2">
            <a
              href="https://github.com/SethSharp"
              target="_blank"
              class="inline-flex items-center gap-2 text-sm font-mono text-muted-foreground hover:text-primary transition"
            >
              <Github class="size-4" />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/seth-sharp/"
              target="_blank"
              class="inline-flex items-center gap-2 text-sm font-mono text-muted-foreground hover:text-primary transition"
            >
              <Linkedin class="size-4" />
              LinkedIn
            </a>
          </div>
        </div>

        <div class="shrink-0">
          <img
            class="w-48 sm:w-64 rounded-xl ring-2 ring-border shadow-lg"
            src="~/assets/images/profile-picture.png"
            alt="Seth Sharp"
          />
        </div>
      </div>
    </section>

    <Separator />

    <!-- About -->
    <section class="space-y-6">
      <HeadingsSecondary>About</HeadingsSecondary>
      <div class="grid md:grid-cols-3 gap-8">
        <div class="md:col-span-2 space-y-4 text-muted-foreground leading-relaxed">
          <p>
            I'm a software developer with over three years of professional experience designing, building
            and maintaining scalable web applications. I work across the full development lifecycle - from
            architecture and implementation through to testing, deployment, and production support.
          </p>
          <p>
            Outside of work, I'm into 4WDing, camping, and fishing. I also build side projects to test
            new ideas and keep learning - it's how I stay sharp.
          </p>
        </div>
        <div class="flex flex-col gap-4">
          <img
            src="~/assets/images/about/4wd.png"
            alt="4WD track"
            class="w-full h-32 object-cover rounded-lg ring-1 ring-border"
          />
          <img
            src="~/assets/images/about/lookout.png"
            alt="Fraser Island lookout"
            class="w-full h-32 object-cover rounded-lg ring-1 ring-border"
          />
        </div>
      </div>
    </section>

    <Separator />

    <!-- Tech Stack -->
    <section class="space-y-6">
      <HeadingsSecondary>Stack</HeadingsSecondary>
      <div class="flex flex-wrap gap-6">
        <div
          v-for="item in tech"
          :key="item.name"
          class="flex items-center gap-3 px-4 py-3 rounded-lg bg-card ring-1 ring-border hover:ring-primary/50 transition"
        >
          <img :src="item.icon" :alt="item.name" class="size-8" />
          <span class="font-mono text-sm text-foreground">{{ item.name }}</span>
        </div>
      </div>
    </section>

    <Separator />

    <!-- Highlights -->
    <section class="space-y-6">
      <div class="flex items-center justify-between">
        <HeadingsSecondary>Highlights</HeadingsSecondary>
        <NuxtLink
          to="/experience"
          class="text-sm font-mono text-muted-foreground hover:text-primary transition inline-flex items-center gap-1"
        >
          View all
          <ExternalLink class="size-3" />
        </NuxtLink>
      </div>
      <div class="grid md:grid-cols-3 gap-6">
        <div
          v-for="highlight in highlights"
          :key="highlight.title"
          class="p-6 rounded-lg bg-card ring-1 ring-border hover:ring-primary/50 transition space-y-3"
        >
          <span class="text-xs font-mono text-primary">{{ highlight.tag }}</span>
          <h3 class="text-foreground font-medium">{{ highlight.title }}</h3>
          <p class="text-sm text-muted-foreground leading-relaxed">{{ highlight.description }}</p>
        </div>
      </div>
    </section>
  </div>
</template>
