<script setup lang="ts">

</script>

<template>
  <div>
    <HeadingsPage>
      Contact Me!
    </HeadingsPage>

    <BodyWrapper>
      <p class="text-gray-300 my-6">
        Please feel free to contact me via the options below, or fill out the online form.
        I look
        forward to hearing from you!
      </p>

      <div class="flex gap-4 text-slate-500">
        <a class="flex gap-4 my-2" href="https://github.com/SethSharp" target="_blank">
          <IconsGitHub class="size-8 transition ease-in-out delay-0 hover:-translate-y-1 duration-50"/>
        </a>

        <a class="flex gap-4 my-2" href="https://www.linkedin.com/in/seth-sharp/" target="_blank">
          <IconsLinkedIn class="size-8 transition ease-in-out delay-0 hover:-translate-y-1 duration-50"/>
        </a>

        <a class="flex gap-4 my-2 hover:text-gray-900" href="mailto:sesharp@outlook.com">
          <IconsMail class="size-8 transition ease-in-out delay-0 hover:-translate-y-1 duration-50"/>
        </a>

        <a class="flex gap-4 my-2" href="https://x.com/seth_sharp_01" target="_blank">
          <IconsTwitter class="size-8 transition ease-in-out delay-0 hover:-translate-y-1 duration-50" />
        </a>
      </div>
    </BodyWrapper>
  </div>
</template>