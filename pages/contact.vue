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
      <p class="text-gray-300 my-6 max-w-96">
        Please feel free to get in contact with one of the options below, I look forward to connecting with you!
      </p>

      <div class="flex gap-4 text-slate-500">
        <a class="hover:text-gray-700" href="https://github.com/SethSharp" target="_blank">
          <IconsGitHub class="size-8 transition ease-in-out delay-0 hover:-translate-y-0.5 duration-50"/>
        </a>

        <a class="hover:text-gray-700" href="https://www.linkedin.com/in/seth-sharp/" target="_blank">
          <IconsLinkedIn class="size-8 transition ease-in-out delay-0 hover:-translate-y-0.5 duration-50"/>
        </a>

        <a class="hover:text-gray-700" href="https://x.com/seth_sharp_01" target="_blank">
          <IconsTwitter class="size-8 transition ease-in-out delay-0 hover:-translate-y-0.5 duration-50" />
        </a>
      </div>
    </BodyWrapper>
  </div>
</template>