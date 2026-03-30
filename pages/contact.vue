<script setup lang="ts">
useSeoMeta({
  title: 'Contact: Seth Sharp',
  description: 'Information to get in contact with me'
})
</script>

<template>
  <div>
    <HeadingsPage>
      Contact Me!
    </HeadingsPage>

    <BodyWrapper>
      <p class="text-muted-foreground my-6 max-w-96">
        Please feel free to get in contact with one of the options below, I look forward to connecting with you!
      </p>

      <div class="flex gap-4 text-muted-foreground">
        <a class="hover:scale-105 hover:animate-pulse" href="https://github.com/SethSharp" target="_blank">
          <IconsGitHub class="size-8 transition ease-in-out delay-0 duration-50"/>
        </a>

        <a class="hover:scale-105 hover:animate-pulse" href="https://www.linkedin.com/in/seth-sharp/" target="_blank">
          <IconsLinkedIn class="size-8 transition ease-in-out delay-0 duration-50"/>
        </a>

        <a class="hover:scale-105 hover:animate-pulse" href="https://x.com/seth_sharp_01" target="_blank">
          <IconsTwitter class="size-8 transition ease-in-out delay-0 duration-50" />
        </a>
      </div>
    </BodyWrapper>
  </div>
</template>