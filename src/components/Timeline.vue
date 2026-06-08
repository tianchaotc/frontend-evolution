<script setup>
defineProps({
  events: {
    type: Array,
    required: true,
    // [{ year: '1995', text: 'Brendan Eich 创建 JavaScript' }, ...]
  },
})
</script>

<template>
  <div class="timeline">
    <div v-for="(event, i) in events" :key="i" class="timeline-item">
      <div class="timeline-year">{{ event.year }}</div>
      <div class="timeline-text">{{ event.text }}</div>
    </div>
  </div>
</template>
