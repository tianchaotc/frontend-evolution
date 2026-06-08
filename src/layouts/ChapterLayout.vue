<script setup>
import { ref, computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import { chapters } from '../data/chapters'
import ChapterNav from '../components/ChapterNav.vue'

const route = useRoute()
const sidebarOpen = ref(false)

watch(() => route.path, () => { sidebarOpen.value = false })

const currentChapter = computed(() =>
  chapters.find((ch) => ch.slug === route.params.slug)
)

const prevChapter = computed(() => {
  if (!currentChapter.value) return null
  return chapters.find((ch) => ch.number === currentChapter.value.number - 1)
})

const nextChapter = computed(() => {
  if (!currentChapter.value) return null
  return chapters.find((ch) => ch.number === currentChapter.value.number + 1)
})
</script>

<template>
  <div class="chapter-layout" :class="{ 'sidebar-open': sidebarOpen }">
    <div class="mobile-header">
      <button class="hamburger" @click="sidebarOpen = !sidebarOpen">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <span class="mobile-title">Frontend Evolution</span>
    </div>
    <ChapterNav />
    <div class="sidebar-overlay" @click="sidebarOpen = false"></div>
    <main class="chapter-content">
      <article class="chapter-article">
        <slot />
      </article>
      <nav class="chapter-footer-nav">
        <router-link
          v-if="prevChapter"
          :to="`/chapter/${prevChapter.slug}`"
          class="footer-link footer-link--prev"
        >
          ← {{ prevChapter.title }}
        </router-link>
        <span v-else></span>
        <router-link
          v-if="nextChapter"
          :to="`/chapter/${nextChapter.slug}`"
          class="footer-link footer-link--next"
        >
          {{ nextChapter.title }} →
        </router-link>
      </nav>
    </main>
  </div>
</template>

<style scoped>
.chapter-layout {
  display: flex;
  min-height: 100vh;
}

.mobile-header {
  display: none;
}

.sidebar-overlay {
  display: none;
}

.chapter-content {
  margin-left: var(--sidebar-width);
  flex: 1;
  padding: 2em 3em;
  max-width: calc(var(--content-max-width) + 6em);
}

.chapter-article {
  max-width: var(--content-max-width);
}

.chapter-footer-nav {
  max-width: var(--content-max-width);
  margin-top: 3em;
  padding-top: 2em;
  border-top: 1px solid var(--color-border);
  display: flex;
  justify-content: space-between;
}

.footer-link {
  padding: 0.5em 1em;
  border: 1px solid var(--color-border);
  border-radius: 6px;
  text-decoration: none;
  color: var(--color-text);
  font-size: 0.9rem;
  transition: all 0.2s;
}

.footer-link:hover {
  border-color: var(--color-accent);
  color: var(--color-accent);
  text-decoration: none;
}

@media (max-width: 768px) {
  .mobile-header {
    display: flex;
    align-items: center;
    gap: 1em;
    padding: 0.75em 1em;
    background: var(--color-bg-secondary);
    border-bottom: 1px solid var(--color-border);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 200;
  }

  .hamburger {
    background: none;
    border: none;
    cursor: pointer;
    padding: 0.25em;
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .hamburger span {
    display: block;
    width: 20px;
    height: 2px;
    background: var(--color-text);
    transition: all 0.2s;
  }

  .mobile-title {
    font-weight: 600;
    font-size: 1rem;
  }

  .chapter-content {
    margin-left: 0;
    padding: 4em 1.5em 2em;
  }

  .sidebar-overlay {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
    z-index: 250;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.3s;
  }

  .sidebar-open .sidebar-overlay {
    opacity: 1;
    pointer-events: auto;
  }
}
</style>
