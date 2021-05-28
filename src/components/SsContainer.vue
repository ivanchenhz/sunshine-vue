<template>
  <div :class="layoutClasses">
    <slot></slot>
  </div>
</template>

<script setup lang='ts'>
import { defineProps } from 'vue'
import { layoutProps, useLayout } from '../composables/layout'

const props = defineProps({
  ...layoutProps,
})

const { layoutClasses } = useLayout(props)
</script>

