<template>
  <SsSheet v-if="active" class="ss-p-4 ss-pr-6 ss-border-l-8 ss-min-w-[320px] ss-flex ss-items-center ss-relative">
    <div v-if="$slots.prepend" class="ss-mr-1">
      <slot name="prepend"></slot>
    </div>

    <slot></slot>

    <div v-if="$slots.append" class="ss-ml-auto">
      <slot name="append"></slot>
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

import { SsSheet } from './index';
import { XIcon } from '@heroicons/vue/outline'

const props = defineProps({
  closable: Boolean,
})

let active = ref<boolean>(true)
function closeAlert(): void {
  active.value = false
}
</script>
