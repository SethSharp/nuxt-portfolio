<script setup>
import { MoveUpRight } from 'lucide-vue-next'

const mindwebUrl = 'https://mindweb-au.laravel.cloud'
</script>

<template>
  <div class="space-y-12">
    <div>
      <HeadingsPage>Services</HeadingsPage>
      <HeadingsSecondary>Mindweb - Website care for small businesses</HeadingsSecondary>
    </div>

    <div class="space-y-16">
      <div class="px-8 max-w-3xl">
        <p class="font-display text-2xl md:text-3xl leading-snug text-paper">
          Your website, <span class="font-semibold">looked after.</span>
        </p>
      </div>

      <div class="px-8 max-w-3xl space-y-5">
        <p class="font-mono text-xs uppercase tracking-widest text-muted-foreground">
          What is Mindweb
        </p>
        <p class="leading-loose text-muted-foreground">
          Mindweb is how I look after websites for small businesses. I host, fix and update your
          website for a flat monthly fee, so it keeps working while you get on with running your
          business. Hosting, backups, security and monitoring are handled, and if you need a change,
          you email me and it gets done, fast.
        </p>
        <p class="leading-loose text-muted-foreground">
          Plans are <span class="text-paper">month to month with no lock-in</span>, your domain stays
          in your name, and you deal with me directly, not a support queue. Older WordPress, Wix and
          Squarespace sites are rebuilt as fast, simple sites with nothing to keep updating.
        </p>
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

      <div class="px-8 border-t border-line/40 pt-10 text-center">
        <p class="font-display text-xl md:text-2xl leading-snug text-paper">
          Find out how your website is really doing.
        </p>
        <p class="mt-3 leading-loose text-muted-foreground">
          Request a free website check at Mindweb. No obligation, and no sales calls.
        </p>

        <div class="w-full flex justify-center">
          <a
              :href="mindwebUrl"
              target="_blank"
              rel="noopener"
              class="mt-6 inline-flex items-center gap-2 rounded-lg border border-line px-5 py-3 font-mono text-xs uppercase tracking-widest text-paper hover:bg-line/10 hover:border-paper/40 transition-colors"
          >
            Visit Mindweb
            <MoveUpRight class="size-4" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
