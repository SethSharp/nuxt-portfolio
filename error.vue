<script setup lang="ts">
import { Button } from '@codinglabsau/gooey'

const error = useError()
const handleError = () => clearError({ redirect: '/' })
</script>

<template>
  <div class="flex items-center justify-center h-screen bg-background">
    <div class="text-center space-y-4">
      <p class="text-sm font-mono text-primary">{{ error.statusCode }}</p>
      <h1 class="text-3xl font-bold text-foreground">{{ error.message }}</h1>
      <p class="text-muted-foreground">Something went wrong. Let's get you back on track.</p>
      <Button @click="handleError" class="mt-4">
        Go Home
      </Button>
    </div>
  </div>
</template>
