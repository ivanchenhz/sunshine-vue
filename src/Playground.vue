<template>
  <p class="ss-flex ss-place-content-center ss-py-24 ss-text-8xl ss-text-pink-40">
    Hello {{ lib }}
  </p>

  <div class="ss-grid ss-gap-8 ss-place-items-center ss-grid-cols-2 ">
    <ss-sheet rounded="" elevation="lg"
              class="ss-border-l-8 ss-bg-blue-20 dark:ss-bg-yellow-60 ss-w-80 ss-h-8"></ss-sheet>

    <ss-sheet rounded="full" elevation="lg" class="ss-bg-pink-30 dark:ss-bg-yellow-60 ss-w-80 ss-h-8"></ss-sheet>

    <ss-alert rounded="lg" elevation="lg">
      <template #left>
        <beaker-icon class="ss-w-4 ss-h-4"></beaker-icon>
      </template>

      hello

      <template #right>
        there
      </template>
    </ss-alert>

    <ss-alert :closable="true">hello</ss-alert>
  </div>

</template>

<script setup lang="ts">
import { SsSheet } from './components'
import { SsAlert } from './components'

import { BeakerIcon } from '@heroicons/vue/solid'
import { XIcon } from '@heroicons/vue/outline'

const lib = 'Sunshine'
</script>
