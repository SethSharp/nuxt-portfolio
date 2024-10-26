<script setup lang="ts">
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

      <BodyWrapper>
        <ProjectsFramed/>
      </BodyWrapper>

      <BodyWrapper>
        <ProjectsPortfolio/>
      </BodyWrapper>
    </div>
  </div>
</template>
