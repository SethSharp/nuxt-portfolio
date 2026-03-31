import { useIntersectionObserver } from "@vueuse/core"
import { ref, type Ref } from "vue"

export function useScrollReveal() {
  const targets: Ref<HTMLElement[]> = ref([])

  function reveal(el: HTMLElement | null) {
    if (el) targets.value.push(el)
  }

  onMounted(() => {
    targets.value.forEach((el) => {
      el.style.opacity = '0'
      el.style.transform = 'translateY(24px)'
      el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out'

      useIntersectionObserver(el, ([{ isIntersecting }]) => {
        if (isIntersecting) {
          el.style.opacity = '1'
          el.style.transform = 'translateY(0)'
        }
      }, { threshold: 0.1 })
    })
  })

  return { reveal }
}
