<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import ChapterLayout from './layouts/ChapterLayout.vue'

const route = useRoute()
const isChapter = computed(() => route.name?.toString().startsWith('chapter-'))
</script>

<template>
  <ChapterLayout v-if="isChapter">
    <router-view />
  </ChapterLayout>
  <router-view v-else />
</template>
