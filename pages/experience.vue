<script setup lang="ts">
import { Separator } from "@codinglabsau/gooey"
import { Briefcase, GraduationCap, Code } from "lucide-vue-next"

useSeoMeta({
  title: 'Experience - Seth Sharp',
  description: 'Over three years of professional experience building scalable web applications at Coding Labs and beyond.'
})

const roles = [
  {
    company: 'Coding Labs',
    title: 'Software Developer',
    period: 'November 2022 - Present',
    location: 'Adelaide, SA',
    icon: Briefcase,
    projects: [
      {
        name: 'Live Platforms',
        subtitle: 'E-commerce live auction platform',
        points: [
          'Led the design, development and continued ownership of the platform\'s live event streaming feature using AWS Interactive Video Service - from initial architecture through to deployment, maintenance and ongoing feature expansion.',
          'Architected and built the platform\'s first Stripe Checkout integration, implementing the complete payment flow including webhook-driven event processing for payment verification.',
          'Led a performance optimisation initiative in response to user-reported latency during high-traffic live events - identified bottlenecks in data loading and rendering, broke the work into atomic improvements delivered incrementally.',
          'Developed and maintained comprehensive automated test suites across critical payment, bidding and registration flows.',
          'Mentored another developer through the live streaming implementation, providing technical direction and code review.',
        ],
        tags: ['Laravel', 'Vue', 'AWS IVS', 'Stripe', 'Algolia', 'Livewire'],
      },
      {
        name: 'Plane Support',
        subtitle: 'Engineering job management platform',
        points: [
          'Led the migration from a legacy component library to a modern framework, improving maintainability and developer experience.',
          'Designed and implemented a granular role and permission system, replacing a basic role structure to give administrators fine-grained control over feature access.',
          'Managed ongoing platform maintenance under a service-level agreement, including monthly dependency updates, bug fixes and client support.',
          'Contributed to commercialisation planning, collaborating with stakeholders to define the implementation roadmap for a multi-tenant product offering.',
        ],
        tags: ['Laravel', 'Vue', 'Inertia'],
      },
    ],
  },
  {
    company: 'Framed Just For You',
    title: 'Lead Developer',
    period: 'June 2023 - Present',
    location: 'Remote',
    icon: Code,
    projects: [
      {
        name: 'Business Website',
        subtitle: 'Solo-built client website - end-to-end ownership',
        points: [
          'Independently managing the entire project - from initial client consultation and requirements gathering through to design, development, deployment and ongoing support.',
          'Built and maintain the full technology stack including AWS hosting, Route53 domain configuration and SSL via ACM.',
          'Sole point of contact for the client, handling all technical decisions, feature requests and infrastructure.',
        ],
        tags: ['Laravel', 'Tailwind', 'AWS'],
      },
    ],
  },
]
</script>

<template>
  <div class="space-y-16">
    <HeadingsPage>Experience</HeadingsPage>

    <!-- Professional Experience -->
    <div class="space-y-16 mt-8">
      <div v-for="role in roles" :key="role.company" class="space-y-6">
        <div class="flex items-start gap-4">
          <div class="mt-1 p-2 rounded-lg bg-primary/10 text-primary">
            <component :is="role.icon" class="size-5" />
          </div>
          <div>
            <h2 class="text-xl font-semibold text-foreground">{{ role.company }}</h2>
            <p class="text-muted-foreground">
              {{ role.title }} &middot; {{ role.period }}
            </p>
            <p class="text-sm text-muted-foreground">{{ role.location }}</p>
          </div>
        </div>

        <div class="ml-14 space-y-10">
          <div v-for="project in role.projects" :key="project.name" class="space-y-4">
            <div>
              <h3 class="text-lg font-medium text-foreground">{{ project.name }}</h3>
              <p class="text-sm text-muted-foreground">{{ project.subtitle }}</p>
            </div>

            <ul class="space-y-3">
              <li
                v-for="(point, i) in project.points"
                :key="i"
                class="text-sm text-muted-foreground leading-relaxed pl-4 border-l-2 border-border hover:border-primary/50 transition"
              >
                {{ point }}
              </li>
            </ul>

            <div class="flex flex-wrap gap-2">
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

    <Separator />

    <!-- Education -->
    <section class="space-y-6">
      <div class="flex items-start gap-4">
        <div class="mt-1 p-2 rounded-lg bg-primary/10 text-primary">
          <GraduationCap class="size-5" />
        </div>
        <HeadingsSecondary>Education</HeadingsSecondary>
      </div>
      <div class="ml-14">
        <div class="p-6 rounded-lg bg-card ring-1 ring-border space-y-2">
          <h3 class="font-medium text-foreground">Bachelor of Computer Science</h3>
          <p class="text-muted-foreground">Griffith University &middot; 2020 - 2024</p>
          <div class="flex flex-wrap gap-2 pt-2">
            <span class="text-xs font-mono px-2 py-1 rounded-md bg-primary/10 text-primary">Software Development Major</span>
            <span class="text-xs font-mono px-2 py-1 rounded-md bg-primary/10 text-primary">Data Structures & Algorithms</span>
            <span class="text-xs font-mono px-2 py-1 rounded-md bg-primary/10 text-primary">Applied AI</span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
