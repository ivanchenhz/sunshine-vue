<template>
  <div :class="[borderClasses, elevationClasses]" :style="[dimensionStyles]">
    <slot></slot>
  </div>
</template>

<script setup lang='ts'>
import { defineProps } from 'vue';
import { borderProps, useBorder } from '../composables/border';
import { elevationProps, useElevation } from '../composables/elevation';
import { dimensionProps, useDimension } from '../composables/dimension'

const props = defineProps({
  ...borderProps,
  ...elevationProps,
  ...dimensionProps,
})

const { borderClasses } = useBorder(props)
const { elevationClasses } = useElevation(props)
const { dimensionStyles } = useDimension(props)
</script>
