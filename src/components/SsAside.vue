<template>
  <ss-sheet
      v-show="show"
      class="ss-z-10 ss-w-80 ss-top-0 ss-bottom-0 ss-bg-white" position="fixed">
    <aside class="ss-p-4 ss-relative">
      <slot></slot>
      <div
          class="ss-absolute ss-right-2 ss-top-2 ss-cursor-pointer"
          @click="handleClose">
        <slot name="close">
          <x-icon class="ss-w-4"></x-icon>
        </slot>
      </div>
    </aside>
  </ss-sheet>
</template>

<script setup lang='ts'>
import { defineEmit, defineProps, ref, useContext } from 'vue'

import { SsSheet } from './index'
import { XIcon } from '@heroicons/vue/outline'

const props = defineProps({
  show: Boolean,
})

const { emit } = useContext()
defineEmit(['update:show'])
function handleClose(): void {
  emit('update:show', false)
}
</script>
