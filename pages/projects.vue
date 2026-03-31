<script setup lang="ts">
import { ExternalLink, Github } from "lucide-vue-next"

const { reveal } = useScrollReveal()

import framedImage from '~/assets/images/projects/framed/home.png'
import habitTrackerImage from '~/assets/images/projects/habit-tracker/dashboard.png'

useSeoMeta({
  title: 'Projects - Seth Sharp',
  description: 'Personal and client projects built with Laravel, Vue, and modern web technologies.'
})

const projects = [
  {
    title: 'Framed Just For You',
    description: 'Client website built from the ground up - from consultation and design through to AWS hosting and ongoing maintenance. Managed domain transfer, Route53 configuration and SSL via ACM for a seamless transition.',
    image: framedImage,
    tags: ['Laravel', 'Tailwind', 'AWS', 'Route53', 'ACM'],
    links: {
      live: 'https://www.framedjustforyou.com.au',
    },
  },
  {
    title: 'Sharp Odds',
    description: 'A sports odds comparison platform that uses AI to aggregate and normalise raw, unstructured data from multiple bookmaker APIs into a structured schema for storage and comparison. Co-developing the data pipeline and independently managing architecture decisions, database design and infrastructure.',
    image: null,
    tags: ['Laravel', 'Vue', 'Inertia', 'API Integrations', 'PostgreSQL'],
    links: {
      live: 'https://sharp-odds.com.au',
    },
  },
  {
    title: 'Habit Tracker',
    description: 'A full-stack habit tracking application built on the VILT stack. Create habits on weekly, daily or monthly schedules, view them in a week view for focus or a calendar view for the bigger picture. Includes filtering by type and completion status.',
    image: habitTrackerImage,
    tags: ['Vue', 'Inertia', 'Laravel', 'Tailwind', 'AWS'],
    links: {},
  },
  {
    title: 'Blog Package',
    description: 'An open-source Laravel blog management package with a fully integrated TipTap editor, custom image upload system, SEO columns, and tag/collection support. Powers the blog on this portfolio.',
    image: null,
    tags: ['Laravel', 'Vue', 'TipTap', 'Composer Package'],
    links: {
      github: 'https://github.com/SethSharp/BlogCrud',
    },
  },
]
</script>

<template>
  <div class="space-y-12">
    <div class="space-y-4">
      <HeadingsPage>Projects</HeadingsPage>
      <p class="text-muted-foreground mt-4">
        A mix of personal projects, client work, and open-source contributions - each one taught me something new.
      </p>
    </div>

    <div class="grid gap-8">
      <div
        v-for="project in projects"
        :key="project.title"
        :ref="reveal"
        class="group rounded-xl bg-card ring-1 ring-border hover:ring-primary/50 transition overflow-hidden"
      >
        <div class="flex flex-col lg:flex-row">
          <!-- Image -->
          <div v-if="project.image" class="lg:w-2/5 bg-muted">
            <img
              :src="project.image"
              :alt="project.title"
              class="w-full h-48 lg:h-full object-cover"
            />
          </div>

          <!-- Content -->
          <div class="flex-1 p-6 lg:p-8 space-y-4">
            <div class="flex items-start justify-between gap-4">
              <h2 class="text-xl font-semibold text-foreground">{{ project.title }}</h2>
              <div class="flex items-center gap-3 shrink-0">
                <a
                  v-if="project.links.github"
                  :href="project.links.github"
                  target="_blank"
                  class="text-muted-foreground hover:text-primary transition"
                >
                  <Github class="size-5" />
                </a>
                <a
                  v-if="project.links.live"
                  :href="project.links.live"
                  target="_blank"
                  class="text-muted-foreground hover:text-primary transition"
                >
                  <ExternalLink class="size-5" />
                </a>
              </div>
            </div>

            <p class="text-muted-foreground text-sm leading-relaxed">
              {{ project.description }}
            </p>

            <div class="flex flex-wrap gap-2 pt-2">
              <span
                v-for="tag in project.tags"
                :key="tag"
                class="text-xs font-mono px-2 py-1 rounded-md bg-primary/10 text-primary"
              >
                {{ tag }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
