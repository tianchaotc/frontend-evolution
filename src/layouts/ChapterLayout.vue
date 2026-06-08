<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { chapters } from '../data/chapters'
import ChapterNav from '../components/ChapterNav.vue'

const route = useRoute()

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
  <div class="chapter-layout">
    <ChapterNav />
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
  .chapter-content {
    margin-left: 0;
    padding: 1.5em;
  }
}
</style>
