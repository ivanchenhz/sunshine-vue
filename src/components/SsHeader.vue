<template>
  <ss-sheet elevation="" class="ss-h-16 ss-w-full ss-top-0" position="sticky">
    <header class="ss-h-full ss-flex ss-items-center ss-px-4">
      <slot></slot>
    </header>
  </ss-sheet>
</template>

<script setup lang='ts'>
import { SsSheet } from './index'
</script>
