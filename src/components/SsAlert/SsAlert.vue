<template>
  <SsSheet v-if="active" class="ss-p-4 ss-pr-6 ss-border-l-8 ss-w-80 ss-flex ss-items-center ss-relative">
    <div v-if="$slots.left">
      <slot name="left"></slot>
    </div>

    <slot></slot>

    <div v-if="$slots.right" class="ss-ml-auto">
      <slot name="right"></slot>
    </div>

    <div
        v-if="$slots.close || props.closable"
        class="ss-absolute ss-right-2 ss-top-2 ss-cursor-pointer"
        @click="closeAlert">
      <slot name="close">
        <x-icon class="ss-w-3"></x-icon>
      </slot>
    </div>
  </SsSheet>
</template>

<script setup lang='ts'>
import { defineProps, ref } from 'vue';

import { SsSheet } from '../index';
import { XIcon } from '@heroicons/vue/outline'

const props = defineProps({
  closable: Boolean,
})

let active = ref<boolean>(true)
function closeAlert(): void {
  active.value = false
}
</script>
