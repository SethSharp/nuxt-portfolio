<script setup lang="ts">
import { Separator } from "@codinglabsau/gooey"

useSeoMeta({
  title: 'Projects: Seth Sharp',
  description: 'Here I reflect on my most impressive projects which I am proud to say, \'I did that\'!'
})
</script>

<template>
  <div>
    <HeadingsPage>
      My Projects
    </HeadingsPage>
    <div class="mt-4 space-y-8">
      <BodyWrapper>
        <ProjectsHabitTracker/>
      </BodyWrapper>

      <Separator />

      <BodyWrapper>
        <ProjectsFramed/>
      </BodyWrapper>

      <Separator />

      <BodyWrapper>
        <ProjectsPortfolio/>
      </BodyWrapper>
    </div>
  </div>
</template>
