<template>
  <div class="ss-py-24 ss-place-items-center ss-grid ss-gap-8 ss-grid-cols-2">
    <ss-sheet rounded="full" elevation="lg" class="ss-bg-blue-20 dark:ss-bg-yellow-60 ss-w-80 ss-h-8"></ss-sheet>
    <ss-alert :closable="true">
      <template #prepend>
        <key-icon class="ss-w-4 ss-text-pink-40 ss-mr-2"></key-icon>
      </template>
      Hello
    </ss-alert>

    <ss-btn primary>Hello</ss-btn>
    <ss-btn secondary sm>Hello</ss-btn>
  </div>

</template>

<script setup lang='ts'>
import { SsSheet, SsAlert, SsBtn } from 'sunshine-vue';

import { KeyIcon } from '@heroicons/vue/outline'
</script>
