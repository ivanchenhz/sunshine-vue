<template>
  <ss-sheet class="ss-btn-sheet" :class="[propsClasses]">
    <button
        class="ss-btn ss-w-full ss-h-full
        ss-flex ss-items-center ss-justify-center
        hover:ss-bg-opacity-80 active:ss-bg-opacity-25
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

<style scoped>
.ss-btn {
  padding: 5px 16px;
}
</style>
