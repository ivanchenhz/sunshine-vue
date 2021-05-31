<template>
  <ss-sheet class="ss-btn-sheet" :class="[propsClasses]">
    <button
        class="ss-btn ss-w-full ss-h-full
        ss-flex ss-items-center ss-justify-center
        focus:ss-outline-none">
      <slot></slot>
    </button>
  </ss-sheet>

</template>

<script setup lang='ts'>
import { SsSheet } from './index'
import { computed, defineProps } from 'vue'

const props = defineProps({
  outline: Boolean,
  hyperlink: Boolean,
  icon: Boolean,

  sm: Boolean,
  lg: Boolean,

  primary: Boolean,
  secondary: Boolean,
  success: Boolean,
  danger: Boolean,
  ghost: Boolean,
})

const propsClasses = computed(() => {
  const classes: string[] = []

  Object.keys(props).forEach(key => {
    if (props[key]) {
      classes.push(key)
    }
  })

  return classes
})
</script>

<style>
:root {
  --ss-btn-primary-bg: theme('colors.blue.60');
  --ss-btn-default-primary-bg--hover: theme('colors.blue.70');
}
</style>

<style scoped>
.ss-btn-sheet {
  @apply ss-h-8;

  background-color: var(--ss-btn-default-primary-bg);
  &:hover {
    background-color: var(--ss-btn-default-primary-bg--hover);
  }

  & .ss-btn {
    @apply ss-px-4 ss-text-sm;
  }

  &.sm {
    @apply ss-h-6;

    & .ss-btn {
      @apply ss-px-3 ss-text-xs;
    }
  }
}
</style>
