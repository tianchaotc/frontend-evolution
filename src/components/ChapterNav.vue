<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { chapters } from '../data/chapters'

const route = useRoute()
const currentSlug = computed(() => route.params.slug)
</script>

<template>
  <nav class="chapter-nav">
    <div class="nav-header">
      <router-link to="/" class="nav-home">Frontend Evolution</router-link>
    </div>
    <ul class="nav-list">
      <li
        v-for="ch in chapters"
        :key="ch.slug"
        class="nav-item"
        :class="{ active: currentSlug === ch.slug }"
      >
        <router-link :to="`/chapter/${ch.slug}`" class="nav-link">
          <span class="nav-number">{{ ch.number }}</span>
          <span class="nav-title">{{ ch.title }}</span>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.chapter-nav {
  position: fixed;
  top: 0;
  left: 0;
  width: var(--sidebar-width);
  height: 100vh;
  background: var(--color-bg-secondary);
  border-right: 1px solid var(--color-border);
  overflow-y: auto;
  z-index: 100;
}

.nav-header {
  padding: 1.5em 1.25em 1em;
  border-bottom: 1px solid var(--color-border);
}

.nav-home {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--color-text);
  text-decoration: none;
}

.nav-home:hover {
  color: var(--color-accent);
  text-decoration: none;
}

.nav-list {
  list-style: none;
  padding: 0.5em 0;
  margin: 0;
}

.nav-item {
  margin: 0;
}

.nav-link {
  display: flex;
  align-items: center;
  gap: 0.75em;
  padding: 0.6em 1.25em;
  color: var(--color-text-secondary);
  text-decoration: none;
  font-size: 0.9rem;
  transition: all 0.15s;
}

.nav-link:hover {
  color: var(--color-text);
  background: var(--color-border);
  text-decoration: none;
}

.nav-item.active .nav-link {
  color: var(--color-accent);
  background: var(--color-accent-light);
  font-weight: 500;
}

.nav-number {
  font-size: 0.8rem;
  font-weight: 600;
  min-width: 1.5em;
}
</style>
