<template>
  <ss-header>
    <ss-btn @click="aside = !aside">
      <menu-icon class="ss-w-4"></menu-icon>
    </ss-btn>
  </ss-header>

  <ss-aside class="ss-w-64" v-model:show="aside">
    <ul>
      <li>Hello</li>
      <li>Hello</li>
      <li>Hello</li>
      <li>Hello</li>
      <li>Hello</li>
    </ul>
  </ss-aside>

  <ss-container fluid horizontal class="ss-h-full">



    <ss-container>

      <p class="ss-flex ss-place-content-center ss-py-24 ss-text-8xl ss-text-pink-40">
        Hello {{ lib }}
      </p>

      <div class="ss-grid ss-gap-8 ss-place-items-center ss-grid-cols-2 ">
        <ss-sheet rounded="" elevation="lg"
                  class="ss-border-l-8 ss-bg-blue-20 dark:ss-bg-yellow-60 ss-w-80 ss-h-8"></ss-sheet>

        <ss-sheet rounded="full" elevation="lg" class="ss-bg-pink-30 dark:ss-bg-yellow-60 ss-w-80 ss-h-8"></ss-sheet>

        <ss-alert rounded="lg" elevation="lg">
          <template #prepend>
            <beaker-icon class="ss-w-4 ss-h-4"></beaker-icon>
          </template>

          hello

          <template #append>
            there
          </template>
        </ss-alert>

        <ss-alert :closable="true">This is some alert message, </ss-alert>
      </div>

      <div class="ss-grid ss-gap-8 ss-place-items-center ss-grid-cols-2 ">
        <ss-sheet rounded="" elevation="lg"
                  class="ss-border-l-8 ss-bg-blue-20 dark:ss-bg-yellow-60 ss-w-80 ss-h-8"></ss-sheet>

        <ss-sheet rounded="full" elevation="lg" class="ss-bg-pink-30 dark:ss-bg-yellow-60 ss-w-80 ss-h-8"></ss-sheet>

        <ss-alert rounded="lg" elevation="lg">
          <template #prepend>
            <beaker-icon class="ss-w-4 ss-h-4"></beaker-icon>
          </template>

          hello

          <template #append>
            there
          </template>
        </ss-alert>

        <ss-alert :closable="true">This is some alert message, </ss-alert>
      </div>

      <div class="ss-grid ss-gap-8 ss-place-items-center ss-grid-cols-2 ">
        <ss-sheet rounded="" elevation="lg"
                  class="ss-border-l-8 ss-bg-blue-20 dark:ss-bg-yellow-60 ss-w-80 ss-h-8"></ss-sheet>

        <ss-sheet rounded="full" elevation="lg" class="ss-bg-pink-30 dark:ss-bg-yellow-60 ss-w-80 ss-h-8"></ss-sheet>

        <ss-alert rounded="lg" elevation="lg">
          <template #prepend>
            <beaker-icon class="ss-w-4 ss-h-4"></beaker-icon>
          </template>

          hello

          <template #append>
            there
          </template>
        </ss-alert>

        <ss-alert :closable="true">This is some alert message, </ss-alert>
      </div>

      <div class="ss-grid ss-gap-8 ss-place-items-center ss-grid-cols-2 ">
        <ss-sheet rounded="" elevation="lg"
                  class="ss-border-l-8 ss-bg-blue-20 dark:ss-bg-yellow-60 ss-w-80 ss-h-8"></ss-sheet>

        <ss-sheet rounded="full" elevation="lg" class="ss-bg-pink-30 dark:ss-bg-yellow-60 ss-w-80 ss-h-8"></ss-sheet>

        <ss-alert rounded="lg" elevation="lg">
          <template #prepend>
            <beaker-icon class="ss-w-4 ss-h-4"></beaker-icon>
          </template>

          hello

          <template #append>
            there
          </template>
        </ss-alert>

        <ss-alert :closable="true">This is some alert message, </ss-alert>
      </div>

      <div class="ss-grid ss-gap-8 ss-place-items-center ss-grid-cols-2 ">
        <ss-sheet rounded="" elevation="lg"
                  class="ss-border-l-8 ss-bg-blue-20 dark:ss-bg-yellow-60 ss-w-80 ss-h-8"></ss-sheet>

        <ss-sheet rounded="full" elevation="lg" class="ss-bg-pink-30 dark:ss-bg-yellow-60 ss-w-80 ss-h-8"></ss-sheet>

        <ss-alert rounded="lg" elevation="lg">
          <template #prepend>
            <beaker-icon class="ss-w-4 ss-h-4"></beaker-icon>
          </template>

          hello

          <template #append>
            there
          </template>
        </ss-alert>

        <ss-alert :closable="true">This is some alert message, </ss-alert>
      </div>

      <div class="ss-grid ss-gap-8 ss-place-items-center ss-grid-cols-2 ">
        <ss-sheet rounded="" elevation="lg"
                  class="ss-border-l-8 ss-bg-blue-20 dark:ss-bg-yellow-60 ss-w-80 ss-h-8"></ss-sheet>

        <ss-sheet rounded="full" elevation="lg" class="ss-bg-pink-30 dark:ss-bg-yellow-60 ss-w-80 ss-h-8"></ss-sheet>

        <ss-alert rounded="lg" elevation="lg">
          <template #prepend>
            <beaker-icon class="ss-w-4 ss-h-4"></beaker-icon>
          </template>

          hello

          <template #append>
            there
          </template>
        </ss-alert>

        <ss-alert :closable="true">This is some alert message, </ss-alert>
      </div>

      <div class="ss-grid ss-gap-8 ss-place-items-center ss-grid-cols-2 ">
        <ss-sheet rounded="" elevation="lg"
                  class="ss-border-l-8 ss-bg-blue-20 dark:ss-bg-yellow-60 ss-w-80 ss-h-8"></ss-sheet>

        <ss-sheet rounded="full" elevation="lg" class="ss-bg-pink-30 dark:ss-bg-yellow-60 ss-w-80 ss-h-8"></ss-sheet>

        <ss-alert rounded="lg" elevation="lg">
          <template #prepend>
            <beaker-icon class="ss-w-4 ss-h-4"></beaker-icon>
          </template>

          hello

          <template #append>
            there
          </template>
        </ss-alert>

        <ss-alert :closable="true">This is some alert message, </ss-alert>
      </div>

      <div class="ss-grid ss-gap-8 ss-place-items-center ss-grid-cols-2 ">
        <ss-sheet rounded="" elevation="lg"
                  class="ss-border-l-8 ss-bg-blue-20 dark:ss-bg-yellow-60 ss-w-80 ss-h-8"></ss-sheet>

        <ss-sheet rounded="full" elevation="lg" class="ss-bg-pink-30 dark:ss-bg-yellow-60 ss-w-80 ss-h-8"></ss-sheet>

        <ss-alert rounded="lg" elevation="lg">
          <template #prepend>
            <beaker-icon class="ss-w-4 ss-h-4"></beaker-icon>
          </template>

          hello

          <template #append>
            there
          </template>
        </ss-alert>

        <ss-alert :closable="true">This is some alert message, </ss-alert>
      </div>
    </ss-container>

  </ss-container>

</template>

<script setup lang="ts">
import { SsSheet, SsAlert, SsContainer, SsHeader, SsAside, SsBtn } from './components'


import { BeakerIcon } from '@heroicons/vue/solid'
import { XIcon, MenuIcon } from '@heroicons/vue/outline'
import { ref } from 'vue'

const lib = 'Sunshine'
let aside = ref<boolean>(false)
</script>
