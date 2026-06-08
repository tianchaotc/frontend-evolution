<script setup>
defineProps({
  title: { type: String, required: true },
  icon: { type: String, default: '💡' },
})
</script>

<template>
  <div class="concept-card">
    <div class="concept-card-title">
      <span>{{ icon }}</span>
      <span>{{ title }}</span>
    </div>
    <slot />
  </div>
</template>
