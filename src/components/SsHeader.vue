<template>
  <div
      class="ss-w-full ss-h-16 ss-sticky ss-top-0"
      :style="dimensionStyles"
      :class="[elevationClasses]">
    <slot></slot>
  </div>
</template>

<script setup lang='ts'>
import { defineProps } from 'vue'
import { dimensionProps, useDimension } from '../composables/dimension'
import { elevationProps, useElevation } from '../composables/elevation'

const props = defineProps({
  ...dimensionProps,
  ...elevationProps,
})

const { dimensionStyles } = useDimension(props)
const { elevationClasses } = useElevation(props)
</script>
