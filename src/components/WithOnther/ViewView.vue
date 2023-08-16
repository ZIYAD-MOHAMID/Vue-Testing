<template>
  <main>
    <component :is="element" :aria-label="ariaLabel" :disabled="isDisabled">
      <slot></slot>
    </component>
  </main>
</template>

<script setup>
import { defineProps } from 'vue'
// eslint-disable-next-line vue/no-setup-props-destructure
const { element, ariaLabel, isDisabled } = defineProps(['element', 'ariaLabel', 'isDisabled'])
</script>

<style scoped></style>
