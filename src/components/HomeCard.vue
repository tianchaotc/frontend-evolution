<script setup>
defineProps({
  number: { type: Number, required: true },
  title: { type: String, required: true },
  summary: { type: String, required: true },
  slug: { type: String, required: true },
})
</script>

<template>
  <router-link :to="`/chapter/${slug}`" class="home-card">
    <div class="home-card-number">Chapter {{ number }}</div>
    <div class="home-card-title">{{ title }}</div>
    <div class="home-card-desc">{{ summary }}</div>
  </router-link>
</template>
