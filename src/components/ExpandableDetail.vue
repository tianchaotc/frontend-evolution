<script setup>
import { ref } from 'vue'

defineProps({
  title: { type: String, required: true },
})

const open = ref(false)
</script>

<template>
  <div class="expandable">
    <div class="expandable-header" @click="open = !open">
      <span>{{ title }}</span>
      <span class="expandable-arrow" :class="{ open }">&#9654;</span>
    </div>
    <div v-show="open" class="expandable-content">
      <slot />
    </div>
  </div>
</template>
