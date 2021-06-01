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
    const keyTyped = key as keyof typeof props
    if (props[keyTyped]) {
      classes.push(key)
    }
  })

  return classes
})
</script>

<style>
@import "../style/variables.css";

:root {
  --ss-btn-default-primary-bg: var(--ss-color-primary-60);
  --ss-btn-default-primary-bg__hover: var(--ss-color-primary-70);
  --ss-btn-default-primary-bg__active: var(--ss-color-primary-80);

  --ss-btn-default-secondary-bg: var(--ss-color-secondary-20);
  --ss-btn-default-secondary-bg__hover: var(--ss-color-secondary-30);
  --ss-btn-default-secondary-bg__active: var(--ss-color-secondary-40);
}
</style>

<style scoped>
.ss-btn-sheet {
  @apply ss-rounded-full;

  @apply ss-h-8;
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

.ss-btn-sheet.primary {
  & .ss-btn {
    color: var(--ss-primary-text);
  }

  background-color: var(--ss-btn-default-primary-bg);
  &:hover {
    background-color: var(--ss-btn-default-primary-bg__hover);
  }
  &:active {
    background-color: var(--ss-btn-default-primary-bg__active);
  }
}

.ss-btn-sheet.secondary {
  & .ss-btn {
    color: var(--ss-secondary-text);
  }

  background-color: var(--ss-btn-default-secondary-bg);
  &:hover {
    background-color: var(--ss-btn-default-secondary-bg__hover);
  }
  &:active {
    background-color: var(--ss-btn-default-secondary-bg__active);
  }
}
</style>
