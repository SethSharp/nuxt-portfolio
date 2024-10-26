<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const inView = ref(false)
const elementRef = ref<HTMLElement | null>(null)

onMounted(() => {
  const observer = new IntersectionObserver(
      ([entry]) => {
        inView.value = entry.isIntersecting
      },
      { threshold: 0.1 }
  )

  if (elementRef.value) observer.observe(elementRef.value)

  onUnmounted(() => {
    observer.disconnect()
  })
})
</script>

<template>
  <div
      ref="elementRef"
      class="transition-all duration-500 ease-in"
  >
    <slot />
  </div>
</template>
