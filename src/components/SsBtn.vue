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
@define-mixin btnBgVar $style, $color, $shadeNormal, $shadeHover, $shadeActive {
  :root {
    --ss-btn-$(style)-bg: var(--ss-color-$(color)-$(shadeNormal));
    --ss-btn-$(style)-bg__hover: var(--ss-color-$(color)-$(shadeHover));
    --ss-btn-$(style)-bg__active: var(--ss-color-$(color)-$(shadeActive));
  }
}

@mixin btnBgVar primary, blue, 60, 70, 80;
@mixin btnBgVar secondary, gray, 20, 30, 40;
@mixin btnBgVar success, green, 60, 70, 80;
@mixin btnBgVar danger, red, 60, 70, 80;
@mixin btnBgVar ghost, gray, 0, 30, 40;


@define-mixin btnTextVar $style, $color, $shade {
  :root {
    --ss-btn-$(style)-text: var(--ss-color-$(color)-$(shade));
  }
}

@mixin btnTextVar primary, gray, 05;
@mixin btnTextVar secondary, gray, 100;
@mixin btnTextVar success, gray, 05;
@mixin btnTextVar danger, gray, 05;
@mixin btnTextVar ghost, gray, 100;

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
      color: var(--ss-btn-$(style)-text);
    }

    background-color: var(--ss-btn-$(style)-bg);
    &:hover {
      background-color: var(--ss-btn-$(style)-bg__hover);
    }
    &:active {
      background-color: var(--ss-btn-$(style)-bg__active);
    }
  }
}

@mixin btnStyle primary;
@mixin btnStyle secondary;
@mixin btnStyle success;
@mixin btnStyle danger;
@mixin btnStyle ghost;
</style>
