<script setup>
import { ref } from 'vue'

const services = ref([
  {
    title: 'Website design',
    copy: 'Interfaces planned around how your customers actually move through a site - clear hierarchy, considered layout, nothing decorative for its own sake.',
  },
  {
    title: 'Custom development',
    copy: 'Hand-built front and back end work when off-the-shelf themes and plugins run out of road - tailored to how your business actually operates.',
  },
  {
    title: 'Optimisation',
    copy: 'Speed, accessibility and search performance treated as structural, not cosmetic - the parts of a site most visitors never see but always feel.',
  },
  {
    title: 'Technical consulting',
    copy: 'An outside read on your current stack, hosting and roadmap - practical advice on what to fix, keep, or leave alone.',
  },
])
</script>

<template>
  <div class="space-y-12">
    <div>
      <HeadingsPage>Services</HeadingsPage>
      <HeadingsSecondary>Web Development - Sole Trader</HeadingsSecondary>
    </div>

    <div class="space-y-16">
      <div class="px-8 max-w-3xl">
        <p class="font-display text-2xl md:text-3xl leading-snug text-paper">
          I help businesses establish and grow their online presence through
          <span class="font-semibold">modern, responsive, user-focused</span> websites.
        </p>
      </div>

      <div class="px-8">
        <p class="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">
          What's included
        </p>
        <div class="grid sm:grid-cols-2 gap-px bg-line/40 border border-line/40 rounded-lg overflow-hidden">
          <div
              v-for="(s, i) in services"
              :key="s.title"
              class="bg-background p-6 md:p-8 hover:bg-line/10 transition-colors"
          >
            <p class="font-mono text-xs text-muted-foreground mb-3">{{ String(i + 1).padStart(2, '0') }}</p>
            <h3 class="font-display text-xl font-semibold text-paper mb-2">{{ s.title }}</h3>
            <p class="text-muted-foreground text-sm leading-relaxed">{{ s.copy }}</p>
          </div>
        </div>
      </div>

      <div class="px-8">
        <p class="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">
          Client note
        </p>
        <div class="relative border border-dashed border-line/70 p-8 md:p-10 max-w-2xl rounded-lg mx-auto">
          <blockquote class="font-display text-lg md:text-xl leading-snug text-paper mb-6">
            "Working together was straightforward from start to finish - the new site looks great and
            has made a real difference to how customers find us."
          </blockquote>
          <footer class="font-mono text-sm text-muted-foreground">
            Diane - <span class="text-paper">Framed Just For You</span>
          </footer>
        </div>
      </div>

      <div class="px-8 border-t border-line/40 pt-10">
        <p class="leading-loose text-muted-foreground">
          I work with clients to understand their goals and design tailored solutions, develop
          high quality web experiences and deliver reliable ongoing support - with a focus on
          <span class="text-paper font-semibold">scalable solutions that improve customer engagement
          and business outcomes</span>.
        </p>
      </div>
    </div>
  </div>
</template>