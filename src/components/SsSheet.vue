<template>
  <div :class="[borderClasses, elevationClasses, positionClasses]" :style="[dimensionStyles]">
    <slot></slot>
  </div>
</template>

<script setup lang='ts'>
import { defineProps } from 'vue';
import { borderProps, useBorder } from '../composables/border';
import { elevationProps, useElevation } from '../composables/elevation';
import { dimensionProps, useDimension } from '../composables/dimension'
import { positionProps, usePosition } from '../composables/position'

const props = defineProps({
  ...borderProps,
  ...elevationProps,
  ...dimensionProps,
  ...positionProps,
})

const { borderClasses } = useBorder(props)
const { elevationClasses } = useElevation(props)
const { dimensionStyles } = useDimension(props)
const { positionClasses } = usePosition(props)
</script>
