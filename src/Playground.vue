<template>
  <ss-header>
    <ss-btn sm @click="aside = !aside">
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

  <ss-container center vertical>
    <div class="ss-grid ss-gap-8 ss-place-items-center ss-grid-cols-2 ">
      <ss-sheet rounded="" elevation="lg"
                class="ss-border-l-8 ss-bg-blue-20 dark:ss-bg-yellow-60 ss-w-80 ss-h-8"></ss-sheet>

      <ss-sheet rounded="full" elevation="lg" class="ss-bg-pink-30 dark:ss-bg-yellow-60 ss-w-80 ss-h-8"></ss-sheet>

      <ss-alert rounded="lg" elevation="lg">
        <template #prepend>
          <beaker-icon class="ss-w-4 ss-h-4"></beaker-icon>
        </template>

        <template #append>
          there
        </template>
      </ss-alert>

      <ss-alert :closable="true">This is some alert message, </ss-alert>

      <ss-btn primary>Primary</ss-btn>
      <ss-btn secondary sm>Secondary</ss-btn>
      <ss-btn success>Success</ss-btn>
      <ss-btn danger>Danger</ss-btn>
      <ss-btn ghost>Ghost</ss-btn>

      <ss-btn primary outline>Primary Outline</ss-btn>
      <ss-btn secondary outline>Secondary Outline</ss-btn>
      <ss-btn success outline>Success Outline</ss-btn>
      <ss-btn danger outline>Danger Outline</ss-btn>

      <ss-btn disabled>Disabled</ss-btn>
      <ss-btn disabled sm>Disabled Small</ss-btn>

      <ss-btn icon primary>
        <annotation-icon class="ss-w-3 ss-h-3"></annotation-icon>
      </ss-btn>

      <ss-btn icon secondary>
        <annotation-icon class="ss-w-3 ss-h-3"></annotation-icon>
      </ss-btn>

      <ss-btn icon sm success>
        <annotation-icon class="ss-w-3 ss-h-3"></annotation-icon>
      </ss-btn>

      <ss-btn icon danger>
        <annotation-icon class="ss-w-3 ss-h-3"></annotation-icon>
      </ss-btn>

      <ss-btn icon ghost>
        <annotation-icon class="ss-w-3 ss-h-3"></annotation-icon>
      </ss-btn>

      <ss-btn hyperlink>Hyperlink</ss-btn>
      <ss-btn hyperlink disabled>Hyperlink</ss-btn>
    </div>

  </ss-container>

</template>

<script setup lang="ts">
import { SsSheet, SsAlert, SsContainer, SsHeader, SsAside, SsBtn } from './components'


import { BeakerIcon } from '@heroicons/vue/solid'
import { XIcon, MenuIcon, AnnotationIcon } from '@heroicons/vue/outline'
import { ref } from 'vue'

let aside = ref<boolean>(false)
</script>
