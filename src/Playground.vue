<template>
  <p class="ss-flex ss-place-content-center ss-py-24 ss-text-8xl ss-text-pink-40">
    Hello {{ lib }}
  </p>

  <div class="ss-grid ss-gap-8 ss-place-items-center ss-grid-cols-2 ">
    <ss-sheet rounded="full" elevation="lg" class="ss-bg-blue-20 dark:ss-bg-yellow-60 ss-w-80 ss-h-8"></ss-sheet>

    <ss-sheet rounded="full" elevation="lg" class="ss-bg-pink-30 dark:ss-bg-yellow-60 ss-w-80 ss-h-8"></ss-sheet>
  </div>

</template>

<script setup lang="ts">
import { SsSheet } from './components/SsSheet'

const lib = 'Sunshine'
</script>
