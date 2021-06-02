<template>
  <ss-sheet class="ss-btn-sheet" :class="[propsClasses]">
    <button
        :disabled="props.disabled"
        :class="{'ss-cursor-not-allowed': props.disabled}"
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
  disabled: Boolean,
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
@mixin btnBgVar disabled, gray, 20, 20, 20;


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
@mixin btnTextVar disabled, gray, 40;
:root {
  --ss-btn-hyperlink-text: var(--ss-color-blue-70);
  --ss-btn-hyperlink-text__hover: var(--ss-color-blue-90);
  --ss-btn-hyperlink-text__active: var(--ss-color-blue-90);
  --ss-btn-hyperlink-text__focus: var(--ss-color-blue-70);
}

@define-mixin btnBorderVar $style, $color, $shade {
  :root {
    --ss-btn-$(style)-border: var(--ss-color-$(color)-$(shade));
  }
}

@mixin btnBorderVar primary, blue, 70;
@mixin btnBorderVar secondary, gray, 70;
@mixin btnBorderVar success, green, 70;
@mixin btnBorderVar danger, red, 70;
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

.ss-btn-sheet.icon {
  @apply ss-rounded-full;

  @apply ss-w-8 ss-h-8;
  & .ss-btn {
    @apply ss-px-0;
  }

  &.sm {
    @apply ss-w-6 ss-h-6;
    & .ss-btn {
      @apply ss-px-0;
    }
  }
}

@define-mixin btnOutlineStyle $style {
  .ss-btn-sheet.outline.$(style) {
    & .ss-btn {
      color: var(--ss-btn-$(style)-border);
    }
    border: solid 1px var(--ss-btn-$(style)-border);
    background-color: transparent;
  }
}

@define-mixin btnBgStyle $style {
  .ss-btn-sheet.$(style) {
    background-color: var(--ss-btn-$(style)-bg);

    &:hover {
      background-color: var(--ss-btn-$(style)-bg__hover);
    }
    &:active {
      background-color: var(--ss-btn-$(style)-bg__active);
    }
  }
}

@define-mixin btnTextStyle &style {
  .ss-btn-sheet.$(style) {
    & .ss-btn {
      color: var(--ss-btn-$(style)-text);
    }
  }

  .ss-btn-sheet.$(style).outline {
    & .ss-btn {
      color: var(--ss-btn-$(style)-border);
    }

    &:hover, &:active {
      & .ss-btn {
        color: var(--ss-btn-$(style)-text);
      }
    }
  }
}

@mixin btnOutlineStyle primary;
@mixin btnOutlineStyle secondary;
@mixin btnOutlineStyle success;
@mixin btnOutlineStyle danger;

@mixin btnBgStyle primary;
@mixin btnBgStyle secondary;
@mixin btnBgStyle success;
@mixin btnBgStyle danger;
@mixin btnBgStyle ghost;
@mixin btnBgStyle disabled;

@mixin btnTextStyle primary;
@mixin btnTextStyle secondary;
@mixin btnTextStyle success;
@mixin btnTextStyle danger;
@mixin btnTextStyle ghost;
@mixin btnTextStyle disabled;

.ss-btn-sheet.hyperlink {
  @apply ss-h-6 ss-rounded-none ss-bg-transparent;

  & .ss-btn {
    color: var(--ss-btn-hyperlink-text);
    @apply ss-underline;
  }

  &:hover {
    & .ss-btn {
      color: var(--ss-btn-hyperlink-text__hover);
    }
  }

  &:active {
    & .ss-btn {
      color: var(--ss-btn-hyperlink-text__active);
    }
  }

  &:focus {
    border: solid 1px var(--ss-btn-hyperlink-text__focus);

    & .ss-btn {
      color: var(--ss-btn-hyperlink-text__focus);
      @apply ss-p-px;
    }
  }

  &.disabled {
    @apply ss-bg-transparent;

    & .ss-btn {
      color: var(--ss-btn-disabled-text);
    }
  }
}
</style>
