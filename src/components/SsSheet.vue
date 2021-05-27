<template>
  <div :class="[borderClasses, elevationClasses]">
    <slot></slot>
  </div>
</template>

<script setup lang='ts'>
import { defineProps } from 'vue';
import { borderProps, useBorder } from '../composables/border';
import { elevationProps, useElevation } from '../composables/elevation';

const props = defineProps({
  ...borderProps,
  ...elevationProps,
})

const { borderClasses } = useBorder(props)
const { elevationClasses } = useElevation(props)
</script>
