<script setup lang="ts">
import { useMagicKeys } from "@vueuse/core"
import { Home, Briefcase, FolderOpen, Mail, Github, Linkedin, Sun, Moon } from "lucide-vue-next"
import { useDark, useToggle } from "@vueuse/core"
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command"

const router = useRouter()
const open = inject<Ref<boolean>>('commandOpen', ref(false))
const isDark = useDark()
const toggleDark = useToggle(isDark)

const { Meta_k, Ctrl_k } = useMagicKeys()

watch([Meta_k, Ctrl_k], ([metaK, ctrlK]) => {
  if (metaK || ctrlK) open.value = !open.value
})

function navigate(path: string) {
  open.value = false
  router.push(path)
}

function openExternal(url: string) {
  open.value = false
  window.open(url, '_blank')
}

function handleToggleDark() {
  open.value = false
  toggleDark()
}
</script>

<template>
  <CommandDialog v-model:open="open">
    <CommandInput placeholder="Type a command or search..." />
    <CommandList>
      <CommandEmpty>No results found.</CommandEmpty>

      <CommandGroup heading="Pages">
        <CommandItem value="home" @select="navigate('/')">
          <Home class="size-4" />
          <span>Home</span>
        </CommandItem>
        <CommandItem value="experience" @select="navigate('/experience')">
          <Briefcase class="size-4" />
          <span>Experience</span>
        </CommandItem>
        <CommandItem value="projects" @select="navigate('/projects')">
          <FolderOpen class="size-4" />
          <span>Projects</span>
        </CommandItem>
        <CommandItem value="contact" @select="navigate('/contact')">
          <Mail class="size-4" />
          <span>Contact</span>
        </CommandItem>
      </CommandGroup>

      <CommandSeparator />

      <CommandGroup heading="Links">
        <CommandItem value="github" @select="openExternal('https://github.com/SethSharp')">
          <Github class="size-4" />
          <span>GitHub</span>
        </CommandItem>
        <CommandItem value="linkedin" @select="openExternal('https://www.linkedin.com/in/seth-sharp/')">
          <Linkedin class="size-4" />
          <span>LinkedIn</span>
        </CommandItem>
      </CommandGroup>

      <CommandSeparator />

      <CommandGroup heading="Theme">
        <CommandItem value="toggle theme" @select="handleToggleDark">
          <Sun v-if="isDark" class="size-4" />
          <Moon v-else class="size-4" />
          <span>{{ isDark ? 'Light mode' : 'Dark mode' }}</span>
        </CommandItem>
      </CommandGroup>
    </CommandList>
  </CommandDialog>
</template>
