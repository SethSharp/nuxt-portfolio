<script setup lang="ts">
useSeoMeta({
  title: 'Projects by Seth Sharp',
  description: 'Here I reflect on my most impressive projects which I am proud to say, \'I did that\'!'
})
</script>

<template>
  <div>
    <div class="md:mt-14 max-w-fit">
      <HeadingsPage>
        My Projects
      </HeadingsPage>
    </div>

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
