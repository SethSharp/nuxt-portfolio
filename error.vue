<script setup lang="ts">
import { Button } from '@codinglabsau/gooey'
const error = useError()

const handleError = () => clearError({ redirect: '/' })
</script>

<template>
  <div class="flex items-center justify-center h-screen">
    <div class="text-center flex flex-col space-y-4">
      <h1 class="text-5xl text-foreground"> {{ error.message }} </h1>
      <Button variant="primary" @click="handleError" class="mt-6">
        Go Home
      </Button>
    </div>
  </div>
</template>