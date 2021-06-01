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

@define-mixin btnStyleColors-60 $style {
  :root {
    --ss-btn-default-$(style)-bg: var(--ss-color-$(style)-60);
    --ss-btn-default-$(style)-bg__hover: var(--ss-color-$(style)-70);
    --ss-btn-default-$(style)-bg__active: var(--ss-color-$(style)-80);
  }
}

@define-mixin btnStyleColors-20 $style {
  :root {
    --ss-btn-default-$(style)-bg: var(--ss-color-$(style)-20);
    --ss-btn-default-$(style)-bg__hover: var(--ss-color-$(style)-30);
    --ss-btn-default-$(style)-bg__active: var(--ss-color-$(style)-40);
  }
}

@mixin btnStyleColors-60 primary;
@mixin btnStyleColors-20 secondary;
@mixin btnStyleColors-60 success;
@mixin btnStyleColors-60 danger;
@mixin btnStyleColors-20 ghost;
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

@define-mixin btnStyle $style {
  .ss-btn-sheet.$(style) {
    & .ss-btn {
      color: var(--ss-$(style)-text);
    }

    background-color: var(--ss-btn-default-$(style)-bg);
    &:hover {
      background-color: var(--ss-btn-default-$(style)-bg__hover);
    }
    &:active {
      background-color: var(--ss-btn-default-$(style)-bg__active);
    }
  }
}

@mixin btnStyle primary;
@mixin btnStyle secondary;
@mixin btnStyle success;
@mixin btnStyle danger;
@mixin btnStyle ghost;
</style>
